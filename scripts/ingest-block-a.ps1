param(
  [string]$Source = "source-private/SEIF-master-v0.1.docx"
)

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

$metadata = @{
  1 = @{ file="01-executive-summary.ts"; slug="executive-summary"; title="Resumen ejecutivo"; sourceTitle="1. Resumen Ejecutivo"; eyebrow="01 · Diagnóstico"; summary="SEIF cuenta con capacidades y prácticas relevantes, pero todavía no operan como un único sistema integrado de producto."; takeaway="La oportunidad consiste en integrar capacidades existentes mediante una forma ligera de capturar evidencia, decidir, entregar, lograr adopción y aprender."; findings=@("La dirección hacia Outcomes ya existe y debe preservarse.","Las interfaces entre demanda, Discovery, decisión, Delivery, adopción y aprendizaje muestran variabilidad.","La información relevante está distribuida entre varias funciones.","El cambio recomendado es sistémico y no una evaluación de personas o áreas."); implication="Diseñar un Product Operating System mínimo que conecte capacidades existentes sin introducir otro framework completo."; visual="flow"; confidence="medium"; status="pending"; related=@("current-state","findings","root-causes") }
  2 = @{ file="02-methodology.ts"; slug="methodology"; title="Metodología del assessment"; sourceTitle="2. Metodología del Assessment"; eyebrow="02 · Assessment"; summary="El assessment reconstruye el flujo real de valor mediante entrevistas, triangulación entre áreas y análisis experto."; takeaway="La unidad de análisis es el sistema de trabajo; no el desempeño individual de las personas."; findings=@("Se utilizaron entrevistas semiestructuradas.","El flujo AS-IS se reconstruyó con ejemplos e iniciativas reales.","Los hallazgos se contrastaron entre perspectivas.","Las prácticas expertas se usaron para interpretar, no para imponer un framework."); implication="Toda conclusión web debe conservar la separación entre evidencia, interpretación, recomendación y asunto por validar."; confidence="high"; status="confirmed"; related=@("interviews","evidence-map") }
  3 = @{ file="03-interviewed-areas.ts"; slug="interviews"; title="Áreas entrevistadas"; sourceTitle="3. Áreas Entrevistadas"; eyebrow="03 · Alcance"; summary="El assessment incorpora perspectivas funcionales distribuidas a lo largo del ciclo de producto."; takeaway="La cobertura permite reconstruir gran parte del flujo, pero los vacíos identificados deben permanecer visibles."; findings=@("Producto, UX/UI, Desarrollo, SRE, Soporte, Marketing y Customer Success aportaron perspectivas.","Cada función observa una parte diferente del flujo de valor.","La cobertura lograda y la cobertura pendiente están documentadas por separado."); implication="Los hallazgos transversales deben conservar su fuente funcional y no atribuirse a toda SEIF sin convergencia suficiente."; confidence="medium"; status="pending"; related=@("methodology","current-state","evidence-map") }
  4 = @{ file="04-current-state.ts"; slug="current-state"; title="Current State / AS-IS"; sourceTitle="4. Current State / AS-IS"; eyebrow="04 · Current state"; summary="SEIF ha desarrollado capacidades relevantes, pero su aplicación y conexión end-to-end presentan variabilidad."; takeaway="El diagnóstico describe un sistema con capacidades existentes y fricciones de conexión; no una ausencia general de capacidad."; findings=@("La orientación hacia Outcomes existe, pero su operacionalización no es uniforme.","La demanda proviene de múltiples fuentes y no siempre usa una representación común.","Discovery, priorización, Delivery y aprendizaje posterior al release tienen grados variables de consistencia.","La trazabilidad end-to-end permanece distribuida."); implication="El TO-BE debe responder a las interfaces y decisiones del flujo sin reescribir el AS-IS como si ya estuviera implementado."; visual="cards"; confidence="medium"; status="pending"; related=@("findings","root-causes","value-stream") }
  5 = @{ file="05-findings.ts"; slug="findings"; title="Hallazgos transversales"; sourceTitle="5. Hallazgos Transversales"; eyebrow="05 · Síntesis"; summary="Los hallazgos describen patrones que atraviesan funciones y etapas del ciclo de producto."; takeaway="Las capacidades locales no garantizan por sí solas un flujo end-to-end consistente."; findings=@("La evolución conceptual ha avanzado más rápido que la operacionalización.","Discovery y priorización existen, pero operan con criterios distribuidos.","El aprendizaje y las señales de cliente están distribuidos.","Las herramientas reflejan la fragmentación del modelo actual."); implication="Las respuestas de diseño deben actuar sobre patrones transversales, no sobre funciones aisladas."; confidence="medium"; status="pending"; related=@("current-state","root-causes","maturity") }
  6 = @{ file="06-root-causes.ts"; slug="root-causes"; title="Causas sistémicas probables"; sourceTitle="6. Root Cause Analysis"; eyebrow="06 · Diagnóstico sistémico"; summary="El assessment propone causas sistémicas probables para explicar los patrones observados."; takeaway="Son inferencias soportadas por la evidencia disponible; no causalidad experimentalmente demostrada."; findings=@("Las oportunidades no siempre se representan mediante un modelo común.","Discovery no funciona todavía como un gate consistente.","Los derechos de decisión y las interfaces operativas requieren mayor explicitud.","El learning loop posterior al release no se cierra de forma uniforme."); implication="Las causas deben utilizarse como hipótesis diagnósticas para orientar intervención y validación, sin convertirlas en hechos causales."; visual="cards"; confidence="medium"; status="pending"; related=@("current-state","findings","maturity") }
  7 = @{ file="07-maturity.ts"; slug="maturity"; title="Maturity Assessment"; sourceTitle="7. Maturity Assessment"; eyebrow="07 · Capacidades"; summary="La valoración del assessment describe el grado de repetibilidad y definición observado por capacidad."; takeaway="Los valores numéricos son una valoración del assessment pendiente de validación; no un baseline aprobado por SEIF."; findings=@("La escala conserva cinco niveles sin transformaciones.","Las capacidades se valoran de manera independiente.","El detalle canónico de madurez vive en este capítulo.","No se calculan promedios ni valores faltantes."); implication="La madurez debe orientar preguntas de mejora y validación, no calificar equipos ni presentarse como medición aprobada."; visual="maturity-heatmap"; confidence="unreviewed"; status="pending"; related=@("current-state","root-causes","roadmap") }
  8 = @{ file="08-waste-friction.ts"; slug="waste-friction"; title="Waste & Friction Map"; sourceTitle="8. Waste & Friction Map"; eyebrow="08 · Lean"; summary="El mapa organiza fricciones del flujo utilizando categorías Lean y separa observación, inferencia e impacto valorado."; takeaway="El propósito es reducir espera, handoffs, retrabajo y pérdida de aprendizaje sin inventar impacto financiero."; findings=@("La demanda heterogénea genera fricción de entrada.","Discovery variable y handoffs pueden producir pérdida de contexto.","Cambios de prioridad y context switching afectan el foco.","El feedback tardío prolonga el tiempo hasta aprender."); implication="Las recomendaciones deben priorizar reducción de desperdicio observable y validar el impacto durante el piloto."; visual="waste-friction"; confidence="medium"; status="pending"; related=@("current-state","value-stream","quick-wins") }
  9 = @{ file="09-value-stream.ts"; slug="value-stream"; title="Value Stream AS-IS"; sourceTitle="9. Value Stream AS-IS"; eyebrow="09 · Flujo actual"; summary="El Value Stream AS-IS reconstruye cómo una señal avanza desde su entrada hasta el feedback y el aprendizaje."; takeaway="El flujo actual debe leerse como diagnóstico; las recomendaciones TO-BE permanecen explícitamente separadas."; findings=@("Las entradas al flujo son heterogéneas.","La profundidad de Discovery y validación varía.","Los handoffs pueden perder contexto.","La evidencia posterior al release no converge siempre en una decisión común."); implication="La mejora debe optimizar el flujo completo y no únicamente la utilización o velocidad de una etapa."; visual="value-stream"; confidence="medium"; status="pending"; related=@("current-state","waste-friction","delivery") }
}

function Text-Of($node) {
  return (($node.SelectNodes(".//w:t", $ns) | ForEach-Object { $_.InnerText }) -join "").Trim()
}
function Max-Size($paragraph) {
  $sizes = @($paragraph.SelectNodes(".//w:rPr/w:sz", $ns) | ForEach-Object { [int]$_.GetAttribute("val", $ns.LookupNamespace("w")) })
  if ($sizes.Count -eq 0) { return 0 }
  return ($sizes | Measure-Object -Maximum).Maximum
}
function Slugify([string]$value) {
  $normalized = $value.Normalize([Text.NormalizationForm]::FormD)
  $chars = $normalized.ToCharArray() | Where-Object { [Globalization.CharUnicodeInfo]::GetUnicodeCategory($_) -ne [Globalization.UnicodeCategory]::NonSpacingMark }
  $slug = (-join $chars).ToLowerInvariant() -replace "[^a-z0-9]+", "-"
  return $slug.Trim("-")
}
function Table-Kind([string]$caption, [string[]]$headers) {
  $value = ($caption + " " + ($headers -join " ")).ToLowerInvariant()
  if ($value -match "madurez|maturity|nivel") { return "maturity" }
  if ($value -match "evidencia|evidence|fuente") { return "evidence-map" }
  if ($value -match "score|assessment consolidado") { return "scorecard" }
  if ($value -match "as-is|to-be|dimensión|etapa|hallazgo|root cause") { return "comparison" }
  return "simple"
}
function Content-Class([int]$chapterNumber, [string]$title) {
  if ($chapterNumber -eq 6 -or $title -match '(?i)diagnóstico|hallazgo|root cause|conclusión|interpretación') { return "assessment-interpretation" }
  if ($title -match '(?i)recomend|to-be|respuesta|implicación|principio') { return "recommendation" }
  if ($title -match '(?i)hipótesis|por validar') { return "hypothesis" }
  if ($title -match '(?i)evidencia|estado actual|as-is|cobertura|fuentes') { return "source-fact" }
  return "mixed"
}

$chapters = @{}
1..9 | ForEach-Object { $chapters[$_] = [pscustomobject]@{ sections=@(); evidence=@(); sourceStart=$null; sourceEnd=$null } }
$chapter = 0
$expected = 1
$paragraphIndex = 0
$tableIndex = 0
$section = $null
$pendingList = @()
$pendingListStart = $null

function Flush-List {
  if ($null -ne $section -and $pendingList.Count -gt 0) {
    $section.blocks += [pscustomobject]@{ type="list"; items=@($pendingList); source=@{ title="SEIF Product Operating System — Assessment & Blueprint v0.1"; locator="P$pendingListStart" } }
  }
  $script:pendingList = @()
  $script:pendingListStart = $null
}

foreach ($node in $body.ChildNodes) {
  if ($node.LocalName -eq "p") {
    $paragraphIndex++
    $text = Text-Of $node
    if (-not $text) { Flush-List; continue }
    if ($expected -le 9 -and $text -match ("^" + $expected + "\.\s+") -and (Max-Size $node) -ge 36) {
      Flush-List
      $chapter = $expected
      $chapters[$chapter].sourceStart = "P$paragraphIndex"
      $expected++
      $section = $null
      continue
    } elseif ($expected -eq 10 -and $text -match "^10\.\s+" -and (Max-Size $node) -ge 36) {
      Flush-List
      $chapters[9].sourceEnd = "P$($paragraphIndex - 1)"
      break
    }
    if ($chapter -lt 1 -or $chapter -gt 9) { continue }

    $isSection = $text -match ("^" + $chapter + "\.\d+\s+") -and (Max-Size $node) -ge 36
    if ($isSection) {
      Flush-List
      $title = ($text -replace ("^" + $chapter + "\.\d+\s+"), "").Trim()
      $id = Slugify $title
      if (-not $id) { $id = "section-$($chapters[$chapter].sections.Count + 1)" }
      $section = [pscustomobject]@{ id=$id; title=$title; contentClass=(Content-Class $chapter $title); blocks=@(); evidence=@(); sources=@(@{ title=$metadata[$chapter].sourceTitle; locator="P$paragraphIndex" }) }
      $chapters[$chapter].sections += $section
      continue
    }
    if ($null -eq $section) {
      $section = [pscustomobject]@{ id="chapter-overview"; title="Introducción"; contentClass="mixed"; blocks=@(); evidence=@(); sources=@(@{ title=$metadata[$chapter].sourceTitle; locator="P$paragraphIndex" }) }
      $chapters[$chapter].sections += $section
    }

    $isList = $null -ne $node.SelectSingleNode("./w:pPr/w:numPr", $ns)
    if ($isList) {
      if ($pendingList.Count -eq 0) { $pendingListStart = $paragraphIndex }
      $pendingList += $text
    } else {
      Flush-List
      $sourceRef = @{ title=$metadata[$chapter].sourceTitle; locator="P$paragraphIndex" }
      $section.blocks += [pscustomobject]@{ type="paragraph"; text=$text; source=$sourceRef }
    }

    $marks = [regex]::Matches($text, "\[(E|I|R|V)(?:/(E|I|R|V))*\]")
    foreach ($match in $marks) {
      $markValues = [regex]::Matches($match.Value, "[EIRV]") | ForEach-Object { $_.Value }
      foreach ($mark in $markValues) {
        $classification = $null
        $confidence = "unreviewed"
        $status = "pending"
        if ($mark -eq "I") { $classification = "E3"; $confidence = "medium" }
        if ($mark -eq "V") { $classification = "H1" }
        $evidence = [pscustomobject]@{
          id=("ch{0:D2}-p{1}-{2}" -f $chapter,$paragraphIndex,$mark.ToLowerInvariant())
          sourceMark=$mark
          classification=$classification
          statement=($text -replace "\s*\[(E|I|R|V)(?:/(E|I|R|V))*\]", "").Trim()
          sourceLocator="P$paragraphIndex"
          sourceArea=$metadata[$chapter].sourceTitle
          supports=@($metadata[$chapter].slug)
          confidence=$confidence
          validationStatus=$status
        }
        $section.evidence += $evidence
        $chapters[$chapter].evidence += $evidence
      }
    }
    $chapters[$chapter].sourceEnd = "P$paragraphIndex"
  } elseif ($node.LocalName -eq "tbl" -and $chapter -ge 1 -and $chapter -le 9 -and $null -ne $section) {
    Flush-List
    $tableIndex++
    $rows = @()
    foreach ($rowNode in $node.SelectNodes("./w:tr", $ns)) {
      $cells = @($rowNode.SelectNodes("./w:tc", $ns) | ForEach-Object { Text-Of $_ })
      $rows += ,$cells
    }
    if ($rows.Count -gt 0) {
      $headers = @($rows[0])
      $dataRows = if ($rows.Count -gt 1) { @($rows[1..($rows.Count - 1)]) } else { @() }
      $label = $null
      $validation = $null
      if ($chapter -eq 7 -or (($headers -join " ") -match "Madurez|Prioridad|Severidad|Probabilidad|Impacto|Esfuerzo|Nivel")) {
        $label = "Valoración del assessment — pendiente de validación"
        $validation = "pending"
      }
      $table = [pscustomobject]@{
        id=("source-table-{0:D3}" -f $tableIndex)
        caption=$section.title
        kind=(Table-Kind $section.title $headers)
        headers=$headers
        rows=$dataRows
        source=@{ title=$metadata[$chapter].sourceTitle; locator="T$tableIndex" }
      }
      if ($label) {
        $table | Add-Member -NotePropertyName assessmentLabel -NotePropertyValue $label
        $table | Add-Member -NotePropertyName validationStatus -NotePropertyValue $validation
      }
      $section.blocks += [pscustomobject]@{ type="table"; table=$table }
    }
  }
}
Flush-List

foreach ($rootSection in $chapters[6].sections | Where-Object { $_.title -match '^Root Cause \d+' }) {
  $rootEvidence = [pscustomobject]@{
    id=("ch06-{0}-e3" -f $rootSection.id)
    sourceMark=$null
    classification="E3"
    statement=("{0}. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental." -f $rootSection.title)
    sourceLocator=$rootSection.sources[0].locator
    sourceArea=$metadata[6].sourceTitle
    supports=@("root-causes")
    confidence="medium"
    validationStatus="pending"
  }
  $rootSection.evidence += $rootEvidence
  $chapters[6].evidence += $rootEvidence
}

$utf8 = New-Object Text.UTF8Encoding($false)
$targetDir = Join-Path $repo "content/chapters"
[IO.Directory]::CreateDirectory($targetDir) | Out-Null

foreach ($number in 1..9) {
  $m = $metadata[$number]
  $data = [pscustomobject]@{
    slug=$m.slug; group="Assessment"; title=$m.title; sourceTitle=$m.sourceTitle; eyebrow=$m.eyebrow
    summary=$m.summary; takeaway=$m.takeaway
    executive=@{ keyFindings=$m.findings; implication=$m.implication; evidenceConfidence=$m.confidence; evidenceStatus=$m.status; sources=@(@{ title=$m.sourceTitle; locator=($chapters[$number].sourceStart + "–" + $chapters[$number].sourceEnd) }) }
    sections=@($chapters[$number].sections); related=$m.related
    source=@{ title=$m.sourceTitle; locator=($chapters[$number].sourceStart + "–" + $chapters[$number].sourceEnd); note="Locators internos de párrafo OOXML; no se muestran por defecto." }
  }
  if ($m.visual) { $data.executive.primaryVisual = $m.visual }
  $json = $data | ConvertTo-Json -Depth 100
  $content = "import type { Chapter } from `"@/types/content`";`r`n`r`nexport const chapter = $json satisfies Chapter;`r`n"
  [IO.File]::WriteAllText((Join-Path $targetDir $m.file), $content, $utf8)
}

$legacySource = & git -c safe.directory=C:/SEIF show HEAD:content/chapters.ts
if ($LASTEXITCODE -ne 0) { throw "Could not read legacy chapters from git HEAD" }
$legacyLines = @($legacySource | Where-Object { $_ -match '^ \{slug:' }) | Select-Object -Skip 9
$legacyHeader = @'
import type { Chapter, Section, SectionKind, VisualKind } from "@/types/content";

const S=(id:string,title:string,body:string,bullets?:string[],kind:SectionKind="default",visual?:VisualKind):Section=>({id,title,body,bullets,kind,visual});
export const legacyChapters: Chapter[] = [
'@
$legacyContent = $legacyHeader + "`r`n" + ($legacyLines -join "`r`n") + "`r`n];`r`n"
[IO.File]::WriteAllText((Join-Path $targetDir "legacy.ts"), $legacyContent, $utf8)

Write-Output "Generated chapters 01–09 and legacy compatibility module."
