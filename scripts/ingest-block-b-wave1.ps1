param([string]$Source = "source-private/SEIF-master-v0.1.docx")

$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot
$sourcePath = Join-Path $repo $Source
if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) { throw "SOURCE NOT FOUND" }

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [IO.Compression.ZipFile]::OpenRead($sourcePath)
try {
  $entry = $zip.GetEntry("word/document.xml")
  $reader = New-Object IO.StreamReader($entry.Open())
  try { [xml]$document = $reader.ReadToEnd() } finally { $reader.Dispose() }
} finally { $zip.Dispose() }

$ns = New-Object Xml.XmlNamespaceManager($document.NameTable)
$ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
$body = $document.SelectSingleNode("//w:body", $ns)

function Text-Of($node) { return (($node.SelectNodes(".//w:t", $ns) | ForEach-Object { $_.InnerText }) -join "").Trim() }
function Max-Size($paragraph) {
  $sizes = @($paragraph.SelectNodes(".//w:rPr/w:sz", $ns) | ForEach-Object { [int]$_.GetAttribute("val", $ns.LookupNamespace("w")) })
  if ($sizes.Count -eq 0) { return 0 }
  return ($sizes | Measure-Object -Maximum).Maximum
}
function Slugify([string]$value) {
  $normalized = $value.Normalize([Text.NormalizationForm]::FormD)
  $chars = $normalized.ToCharArray() | Where-Object { [Globalization.CharUnicodeInfo]::GetUnicodeCategory($_) -ne [Globalization.UnicodeCategory]::NonSpacingMark }
  return ((-join $chars).ToLowerInvariant() -replace "[^a-z0-9]+", "-").Trim("-")
}
function Ref([string]$title,[string]$locator) { return [ordered]@{ title=$title; locator=$locator } }
function Completeness([string[]]$complete,[string[]]$partial,[string[]]$missing=@()) {
  $value=[ordered]@{}
  foreach($key in $complete){$value[$key]="SOURCE COMPLETE"}
  foreach($key in $partial){$value[$key]="SOURCE PARTIAL"}
  foreach($key in $missing){$value[$key]="SOURCE MISSING"}
  return $value
}

$metadata = @{
  10 = [ordered]@{
    file="10-design-principles.ts"; slug="design-principles"; title="Principios de diseño"; sourceTitle="10. Principios de Diseño"; eyebrow="10 · Foundations"
    summary="Veinte principios conectan los hallazgos del assessment con reglas de diseño para un Product Operating System simple, trazable y orientado a Outcomes."
    takeaway="El TO-BE debe reducir incertidumbre, WIP, handoffs y coordinación innecesaria sin sustituir evidencia, accountability ni decisiones humanas."
    findings=@("Problemas y Outcomes preceden a soluciones y actividad.","La evidencia y la validación deben ser proporcionales al riesgo.","El flujo y el aprendizaje importan más que la utilización individual.","Tooling, automatización e IA se subordinan al modelo operativo.")
    implication="Estos principios son recomendaciones de diseño derivadas del assessment; guían el modelo propuesto, pero no constituyen políticas ya aprobadas por SEIF."
    related=@("value-stream","root-causes","maturity","waste-friction","operating-model")
  }
  11 = [ordered]@{
    file="11-operating-model.ts"; slug="operating-model"; title="Product Operating Model TO-BE"; sourceTitle="11. Product Operating Model TO-BE"; eyebrow="11 · Modelo propuesto"
    summary="El modelo fuente conecta nueve etapas desde Signal hasta Measure & Learn; la arquitectura editorial las hace legibles dentro del loop canónico Discover, Decide, Deliver, Adopt y Learn."
    takeaway="SEIF pasa de administrar trabajo y releases a administrar problemas, decisiones, Bets, Outcomes, adopción y aprendizaje con trazabilidad end-to-end."
    findings=@("El modelo fuente conserva nueve etapas operativas explícitas.","Cada transición busca producir una decisión, un output o evidencia utilizable.","Release inicia la validación del valor; no cierra el flujo.","El modelo lógico precede cualquier configuración de tooling.")
    implication="El TO-BE es una recomendación operativa. Roles, métricas, límites, cadencias, North Star y arquitectura de herramientas conservan sus validaciones abiertas."
    related=@("design-principles","value-stream","root-causes","maturity","waste-friction","discovery","prioritization","delivery","adoption-growth","feedback-loop","roles","governance")
  }
}

$chapters=@{10=[ordered]@{sections=@();start=$null;end=$null};11=[ordered]@{sections=@();start=$null;end=$null}}
$chapter=0;$expected=1;$paragraphIndex=0;$tableIndex=0;$section=$null;$pending=@();$pendingStart=$null;$pendingEnd=$null
function Flush-List {
  if($null -ne $script:section -and $script:pending.Count -gt 0){
    $script:section.blocks += [ordered]@{type="list";items=@($script:pending);source=(Ref $metadata[$script:chapter].sourceTitle ("P$script:pendingStart–P$script:pendingEnd"))}
  }
  $script:pending=@();$script:pendingStart=$null;$script:pendingEnd=$null
}
function Section-Class([int]$number,[string]$title){
  if($title -match '(?i)North Star|Target de madurez'){return "hypothesis"}
  if($title -match '(?i)AS-IS|cambio fundamental|cambio esperado|matriz de trazabilidad'){return "mixed"}
  if($number -eq 10 -and $title -match '(?i)^Principio '){return "mixed"}
  return "recommendation"
}
function Validations-For([int]$number,[string]$title){
  $result=@()
  if($title-match'(?i)Decision Rights|células'){$result+=,[ordered]@{id="CL-04";subject="Mapeo entre Head de Producto, Product Owner, Outcome Owner y domain owner";status="CLIENT VALIDATION REQUIRED"};$result+=,[ordered]@{id="CL-05";subject="Accountability organizacional y derechos de decisión";status="CLIENT VALIDATION REQUIRED"}}
  if($title-match'(?i)North Star'){$result+=,[ordered]@{id="CL-06";subject="North Star candidate — Recurring Value / Clientes con Valor Recurrente";status="CLIENT VALIDATION REQUIRED"}}
  if($title-match'(?i)métrica|Metric → Action|Definition of Value'){$result+=,[ordered]@{id="CL-07";subject="Definiciones operacionales, instrumentación, owners y cadencia de métricas";status="CLIENT VALIDATION REQUIRED"}}
  if($title-match'(?i)ADOPT|Adoption Funnel|Customer Autonomy'){$result+=,[ordered]@{id="CL-08";subject="Definiciones de Activation, TTV, Adoption y Adherence";status="CLIENT VALIDATION REQUIRED"}}
  if($title-match'(?i)WIP'){$result+=,[ordered]@{id="CL-09";subject="Límites numéricos de WIP — baseline, piloto y validación";status="CLIENT VALIDATION REQUIRED"}}
  if($title-match'(?i)Tooling|Jira|automatizaciones'){$result+=,[ordered]@{id="CL-10";subject="Arquitectura de Jira/JPD/JSM/Confluence y configuración mínima";status="CLIENT VALIDATION REQUIRED"}}
  if($title-match'(?i)Operating Cadence|Reviews unificadas'){$result+=,[ordered]@{id="CL-11";subject="Cadencia propuesta, participantes y triggers";status="CLIENT VALIDATION REQUIRED"}}
  if($title-match'(?i)deuda técnica'){$result+=,[ordered]@{id="CL-12";subject="Política de capacidad y deuda técnica";status="CLIENT VALIDATION REQUIRED"}}
  return $result
}

foreach($node in $body.ChildNodes){
  if($node.LocalName-eq"p"){
    $paragraphIndex++;$text=Text-Of $node
    if($expected-le12-and$text-match("^"+$expected+"\.\s+")-and(Max-Size $node)-ge36){
      Flush-List;$chapter=$expected;$expected++
      if($chapter-in10,11){$chapters[$chapter].start="P$paragraphIndex";$section=$null;continue}
    }
    if($chapter-eq12){Flush-List;break}
    if($chapter-notin10,11){continue}
    $chapters[$chapter].end="P$paragraphIndex"
    if(-not$text){Flush-List;continue}
    if($text-match("^"+$chapter+"\.\d+\s+")){
      Flush-List
      $title=($text-replace("^"+$chapter+"\.\d+\s+"),"").Trim()
      $section=[ordered]@{id=(Slugify $title);title=$title;contentClass=(Section-Class $chapter $title);blocks=@();evidence=@();sources=@((Ref $metadata[$chapter].sourceTitle "P$paragraphIndex"))}
      $validations=Validations-For $chapter $title
      if($validations.Count-gt0){$section.clientValidations=@($validations)}
      $chapters[$chapter].sections += $section
      continue
    }
    if($null-eq$section){continue}
    $isList=$null-ne$node.SelectSingleNode("./w:pPr/w:numPr",$ns)
    if($isList){if($pending.Count-eq0){$pendingStart=$paragraphIndex};$pendingEnd=$paragraphIndex;$pending+=$text}
    else{Flush-List;$section.blocks += [ordered]@{type="paragraph";text=$text;source=(Ref $metadata[$chapter].sourceTitle "P$paragraphIndex")}}
  }elseif($node.LocalName-eq"tbl"){
    $tableIndex++
    if($chapter-notin10,11){continue}
    Flush-List
    $rows=@();foreach($rowNode in $node.SelectNodes("./w:tr",$ns)){$rows+=,@($rowNode.SelectNodes("./w:tc",$ns)|ForEach-Object{Text-Of $_})}
    if($rows.Count-gt0-and$null-ne$section){
      $headers=@($rows[0]);$dataRows=if($rows.Count-gt1){@($rows[1..($rows.Count-1)])}else{@()}
      $kind=if(($headers -join " ") -match '(?i)AS-IS|TO-BE|Dimensión|Decisión|Capacidad'){"comparison"}elseif(($headers -join " ") -match '(?i)Métrica'){"scorecard"}else{"simple"}
      $section.blocks += [ordered]@{type="table";table=[ordered]@{id=("source-table-{0:D3}"-f$tableIndex);caption=$section.title;kind=$kind;headers=$headers;rows=$dataRows;source=(Ref $metadata[$chapter].sourceTitle "T$tableIndex")}}
    }
  }
}
Flush-List

$concepts=@{
  10=@(
    [ordered]@{id="principios-del-sistema";title="Principios del sistema";canonicalLayers=@("STRATEGY / OUTCOMES","CONTINUOUS IMPROVEMENT");sourceChapters=@("10");sourceLocators=@((Ref $metadata[10].sourceTitle "P2424–P2728"));contentClass="recommendation";completeness=(Completeness @("WHAT","WHY","HOW","EXAMPLE") @("WHO","WHEN","INPUT","OUTPUT","ARTIFACT","DECISION","METRIC","TOOL"));gapIds=@("GAP-B-06","GAP-B-11")},
    [ordered]@{id="evidencia-proporcional-al-riesgo";title="Evidencia proporcional al riesgo";canonicalLayers=@("DISCOVER","EVIDENCE");sourceChapters=@("10");sourceLocators=@((Ref $metadata[10].sourceTitle "P2457–P2486"));contentClass="recommendation";completeness=(Completeness @("WHAT","WHY","HOW","INPUT","OUTPUT","DECISION","EXAMPLE") @("WHO","WHEN","ARTIFACT","METRIC","TOOL"));gapIds=@()},
    [ordered]@{id="limit-wip";title="LIMIT WIP";canonicalLayers=@("DECIDE","DELIVER");sourceChapters=@("10");sourceLocators=@((Ref $metadata[10].sourceTitle "P2527–P2536"));contentClass="recommendation";completeness=(Completeness @("WHAT","WHY") @("HOW","WHO","WHEN","INPUT","OUTPUT","DECISION","METRIC") @("ARTIFACT","TOOL","EXAMPLE"));gapIds=@("GAP-B-06","CL-09")},
    [ordered]@{id="tooling-despues-del-modelo";title="Tooling después del modelo";canonicalLayers=@("TOOLING / JIRA");sourceChapters=@("10");sourceLocators=@((Ref $metadata[10].sourceTitle "P2618–P2652"));contentClass="recommendation";completeness=(Completeness @("WHAT","WHY") @("HOW","WHO","WHEN","INPUT","OUTPUT","ARTIFACT","DECISION","METRIC","TOOL","EXAMPLE"));gapIds=@("GAP-B-04","CL-10")}
  )
  11=@(
    [ordered]@{id="product-operating-model";title="Product Operating Model TO-BE";canonicalLayers=@("DISCOVER","DECIDE","DELIVER","ADOPT","LEARN");sourceChapters=@("11");sourceLocators=@((Ref $metadata[11].sourceTitle "P2738–P3550"));contentClass="recommendation";completeness=(Completeness @("WHAT","WHY","HOW","WHO","WHEN","INPUT","OUTPUT","ARTIFACT","DECISION","METRIC","EXAMPLE") @("TOOL"));gapIds=@("GAP-B-01","GAP-B-04")},
    [ordered]@{id="decision-rights";title="Decision Rights";canonicalLayers=@("DECIDE","ROLES","GOVERNANCE");sourceChapters=@("11");sourceLocators=@((Ref $metadata[11].sourceTitle "P3002–P3027"));contentClass="recommendation";completeness=(Completeness @("WHAT","WHY","HOW","WHO","INPUT","OUTPUT","DECISION") @("WHEN","ARTIFACT","METRIC","TOOL","EXAMPLE"));gapIds=@("GAP-B-01","GAP-B-05","CL-04","CL-05")},
    [ordered]@{id="north-star-candidate";title="NORTH STAR CANDIDATE — Recurring Value";canonicalLayers=@("STRATEGY / OUTCOMES","METRICS");sourceChapters=@("11");sourceLocators=@((Ref $metadata[11].sourceTitle "P3274–P3300"));contentClass="hypothesis";completeness=(Completeness @("WHAT","WHY") @("HOW","WHO","WHEN","INPUT","OUTPUT","ARTIFACT","DECISION","METRIC","TOOL","EXAMPLE"));gapIds=@("GAP-B-02","CL-06")},
    [ordered]@{id="wip-management";title="LIMIT WIP — numerical limit to baseline / pilot / validate";canonicalLayers=@("DECIDE","DELIVER");sourceChapters=@("11");sourceLocators=@((Ref $metadata[11].sourceTitle "P3355–P3366"));contentClass="recommendation";completeness=(Completeness @("WHAT","WHY") @("HOW","WHO","WHEN","INPUT","OUTPUT","ARTIFACT","DECISION","METRIC") @("TOOL","EXAMPLE"));gapIds=@("GAP-B-06","CL-09")},
    [ordered]@{id="logical-tooling-model";title="Logical model first — tooling relationship";canonicalLayers=@("TOOLING / JIRA");sourceChapters=@("11");sourceLocators=@((Ref $metadata[11].sourceTitle "P3393–P3446"));contentClass="recommendation";completeness=(Completeness @("WHAT","WHY") @("HOW","WHO","WHEN","INPUT","OUTPUT","ARTIFACT","DECISION","METRIC","TOOL","EXAMPLE"));gapIds=@("GAP-B-04","CL-10")}
  )
}

$stages=@(
  [ordered]@{canonicalStage="DISCOVER";sourceSubStages=@([ordered]@{title="SIGNAL";locator="P2872";relationship="SOURCE SUB-STAGE"},[ordered]@{title="FRAME";locator="P2913";relationship="SOURCE SUB-STAGE"},[ordered]@{title="DISCOVER";locator="P2929";relationship="SOURCE TERMINOLOGY"},[ordered]@{title="VALIDATE";locator="P3028";relationship="SOURCE SUB-STAGE"});purpose="Entender el problema y reducir incertidumbre antes de comprometer inversión significativa.";inputs=@("Signals","contexto","evidencia disponible");steps=@("Frame","Discover","Validate");outputs=@("Opportunity","evidencia","Outcome e hipótesis suficientemente claros para decidir");source=(Ref $metadata[11].sourceTitle "P2872–P3083")},
  [ordered]@{canonicalStage="DECIDE";sourceSubStages=@([ordered]@{title="DECIDE";locator="P3002";relationship="SOURCE TERMINOLOGY"});purpose="Determinar si explorar, priorizar, esperar o descartar.";inputs=@("Opportunity","Outcome","evidencia","factibilidad y riesgo");steps=@("Evaluar","deliberar","registrar decisión");outputs=@("Explore","Prioritize","Wait","Discard");source=(Ref $metadata[11].sourceTitle "P3002–P3027")},
  [ordered]@{canonicalStage="DELIVER";sourceSubStages=@([ordered]@{title="DELIVER";locator="P3084";relationship="SOURCE TERMINOLOGY"},[ordered]@{title="RELEASE";locator="P3130";relationship="SOURCE SUB-STAGE"});purpose="Construir la menor solución capaz de producir evidencia de valor y liberarla con readiness técnico y operacional.";inputs=@("Bet priorizada","Delivery Readiness");steps=@("Deliver","Release");outputs=@("capacidad liberada","inicio de medición");source=(Ref $metadata[11].sourceTitle "P3084–P3159")},
  [ordered]@{canonicalStage="ADOPT";sourceSubStages=@([ordered]@{title="ADOPT";locator="P3160";relationship="SOURCE TERMINOLOGY"});purpose="Acompañar el paso desde disponibilidad hasta valor y autonomía del cliente.";inputs=@("release","criterios de éxito");steps=@("Configured","Activated","Adopted","Adherent");outputs=@("evidencia de activación, adopción, adherencia y autonomía");source=(Ref $metadata[11].sourceTitle "P3160–P3210")},
  [ordered]@{canonicalStage="LEARN";sourceSubStages=@([ordered]@{title="MEASURE & LEARN";locator="P3211";relationship="SOURCE SUB-STAGE"});purpose="Comparar resultados esperados y observados para tomar una nueva decisión.";inputs=@("métricas","feedback","evidencia post-release");steps=@("Measure","Learn","decide next action");outputs=@("Continue","Adjust","Scale","Stop","new Opportunity");source=(Ref $metadata[11].sourceTitle "P3211–P3273")}
)
$sourceSequence=@(
  [ordered]@{title="SIGNAL";locator="P2872";relationship="SOURCE SUB-STAGE"},
  [ordered]@{title="FRAME";locator="P2913";relationship="SOURCE SUB-STAGE"},
  [ordered]@{title="DISCOVER";locator="P2929";relationship="SOURCE TERMINOLOGY"},
  [ordered]@{title="DECIDE";locator="P3002";relationship="SOURCE TERMINOLOGY"},
  [ordered]@{title="VALIDATE";locator="P3028";relationship="SOURCE SUB-STAGE"},
  [ordered]@{title="DELIVER";locator="P3084";relationship="SOURCE TERMINOLOGY"},
  [ordered]@{title="RELEASE";locator="P3130";relationship="SOURCE SUB-STAGE"},
  [ordered]@{title="ADOPT";locator="P3160";relationship="SOURCE TERMINOLOGY"},
  [ordered]@{title="MEASURE & LEARN";locator="P3211";relationship="SOURCE SUB-STAGE"}
)

$utf8=New-Object Text.UTF8Encoding($false)
foreach($number in 10,11){
  $m=$metadata[$number]
  $data=[ordered]@{slug=$m.slug;group="Operating Model";title=$m.title;sourceTitle=$m.sourceTitle;eyebrow=$m.eyebrow;summary=$m.summary;takeaway=$m.takeaway;executive=[ordered]@{keyFindings=$m.findings;implication=$m.implication;evidenceConfidence="medium";evidenceStatus="pending";primaryVisual=if($number-eq10){"cards"}else{"flow"};sources=@((Ref $m.sourceTitle ($chapters[$number].start+"–"+$chapters[$number].end)))};operatingConcepts=$concepts[$number];sections=@($chapters[$number].sections);related=$m.related;source=[ordered]@{title=$m.sourceTitle;locator=($chapters[$number].start+"–"+$chapters[$number].end);note="Locators internos de párrafo OOXML; no se muestran por defecto."}}
  if($number-eq11){$data.sourceOperatingSequence=$sourceSequence;$data.operatingStages=$stages}
  $json=$data|ConvertTo-Json -Depth 100
  $content="import type { Chapter } from `"@/types/content`";`r`n`r`nexport const chapter = $json satisfies Chapter;`r`n"
  [IO.File]::WriteAllText((Join-Path $repo ("content/chapters/"+$m.file)),$content,$utf8)
}

Write-Output "Block B Wave 1 ingestion generated Chapters 10–11 from $Source."
