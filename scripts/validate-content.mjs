import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const chapterDir=path.join(root,"content","chapters");
const errors=[];
const blockAFiles=fs.readdirSync(chapterDir).filter(name=>/^0[1-9]-.*\.ts$/.test(name)).sort();
const blockBWave1Files=fs.readdirSync(chapterDir).filter(name=>/^1[01]-.*\.ts$/.test(name)).sort();
const blockBWave2Files=fs.readdirSync(chapterDir).filter(name=>/^(17|20)-.*\.ts$/.test(name)).sort();
const blockBWave3Files=fs.readdirSync(chapterDir).filter(name=>/^12-.*\.ts$/.test(name)).sort();
const blockBWave4Files=fs.readdirSync(chapterDir).filter(name=>/^13-.*\.ts$/.test(name)).sort();

function readChapter(file){
  const source=fs.readFileSync(path.join(chapterDir,file),"utf8");
  const match=source.match(/export const chapter = ([\s\S]+) satisfies Chapter;/);
  if(!match)throw new Error(`Cannot parse ${file}`);
  return JSON.parse(match[1]);
}

const blockA=blockAFiles.map(readChapter);
const blockBWave1=blockBWave1Files.map(readChapter);
const blockBWave2=blockBWave2Files.map(readChapter);
const blockBWave3=blockBWave3Files.map(readChapter);
const blockBWave4=blockBWave4Files.map(readChapter);
const legacySource=fs.readFileSync(path.join(chapterDir,"legacy.ts"),"utf8");
const legacySlugs=[...legacySource.matchAll(/\{slug:"([^"]+)"/g)].map(match=>match[1]);
const allSlugs=[...blockA.map(chapter=>chapter.slug),...blockBWave1.map(chapter=>chapter.slug),...blockBWave2.map(chapter=>chapter.slug),...blockBWave3.map(chapter=>chapter.slug),...blockBWave4.map(chapter=>chapter.slug),...legacySlugs];
const slugSet=new Set();
for(const slug of allSlugs){
  if(slugSet.has(slug))errors.push(`Duplicate slug: ${slug}`);
  slugSet.add(slug);
}
if(allSlugs.length!==27)errors.push(`Expected 27 chapters, found ${allSlugs.length}`);

const classifications=new Set(["E1","E2","E3","H1"]);
const sourceMarks=new Set(["E","I","R","V"]);
const structuralMarkers=new Set(["Evidencia","Interpretación","Recomendación","Evidencia SRE","Evidencia Customer Success"]);
const evidenceCounts={E1:0,E2:0,E3:0,H1:0,unreviewedClaims:0,structuralMarkers:0,pendingValidation:0};
for(const chapter of blockA){
  if(!chapter.source?.locator)errors.push(`${chapter.slug}: missing chapter source locator`);
  if(!chapter.executive?.sources?.every(source=>source.locator))errors.push(`${chapter.slug}: executive layer missing source locator`);
  for(const related of chapter.related){if(!slugSet.has(related))errors.push(`${chapter.slug}: broken related chapter ${related}`)}
  for(const section of chapter.sections){
    if(!section.sources?.every(source=>source.locator))errors.push(`${chapter.slug}/${section.id}: missing section source locator`);
    for(const evidence of section.evidence??[]){
      if(structuralMarkers.has(evidence.statement)){
        evidenceCounts.structuralMarkers++;
        continue;
      }
      if(evidence.sourceMark!==null&&!sourceMarks.has(evidence.sourceMark))errors.push(`${evidence.id}: invalid source mark`);
      if(evidence.classification!==null&&!classifications.has(evidence.classification))errors.push(`${evidence.id}: invalid evidence classification`);
      if(!evidence.sourceLocator)errors.push(`${evidence.id}: missing source locator`);
      if(evidence.classification===null&&(evidence.confidence!=="unreviewed"||evidence.validationStatus!=="pending"))errors.push(`${evidence.id}: unclassified evidence must be unreviewed/pending`);
      if(evidence.classification)evidenceCounts[evidence.classification]++;
      else evidenceCounts.unreviewedClaims++;
      if(evidence.validationStatus==="pending")evidenceCounts.pendingValidation++;
    }
    for(const block of section.blocks??[]){
      const locator=block.type==="table"?block.table.source?.locator:block.source?.locator;
      if(!locator)errors.push(`${chapter.slug}/${section.id}: block missing source locator`);
      if(block.type==="table"&&block.table.rows.some(row=>row.length!==block.table.headers.length))errors.push(`${block.table.id}: inconsistent row width`);
    }
  }
}

for(const chapter of blockBWave1){
  if(!chapter.source?.locator)errors.push(`${chapter.slug}: missing chapter source locator`);
  if(!chapter.executive?.sources?.every(source=>source.locator))errors.push(`${chapter.slug}: executive layer missing source locator`);
  if(!chapter.operatingConcepts?.length)errors.push(`${chapter.slug}: missing operating concepts`);
  for(const related of chapter.related){if(!slugSet.has(related))errors.push(`${chapter.slug}: broken related chapter ${related}`)}
  for(const section of chapter.sections){
    if(!section.contentClass)errors.push(`${chapter.slug}/${section.id}: missing content classification`);
    if(!section.sources?.every(source=>source.locator))errors.push(`${chapter.slug}/${section.id}: missing section source locator`);
    for(const block of section.blocks??[]){
      const locator=block.type==="table"?block.table.source?.locator:block.source?.locator;
      if(!locator)errors.push(`${chapter.slug}/${section.id}: block missing source locator`);
      if(block.type==="table"&&block.table.rows.some(row=>row.length!==block.table.headers.length))errors.push(`${block.table.id}: inconsistent row width`);
    }
  }
}
for(const chapter of blockBWave2){
  if(!chapter.source?.locator)errors.push(`${chapter.slug}: missing chapter source locator`);
  if(!chapter.executive?.sources?.every(source=>source.locator))errors.push(`${chapter.slug}: executive layer missing source locator`);
  if(!chapter.operatingConcepts?.length)errors.push(`${chapter.slug}: missing operating concepts`);
  for(const related of chapter.related){if(!slugSet.has(related))errors.push(`${chapter.slug}: broken related chapter ${related}`)}
  for(const section of chapter.sections){
    if(!section.contentClass)errors.push(`${chapter.slug}/${section.id}: missing content classification`);
    if(!section.sources?.every(source=>source.locator))errors.push(`${chapter.slug}/${section.id}: missing section source locator`);
    for(const block of section.blocks??[]){
      const locator=block.type==="table"?block.table.source?.locator:block.source?.locator;
      if(!locator)errors.push(`${chapter.slug}/${section.id}: block missing source locator`);
      if(block.type==="table"&&block.table.rows.some(row=>row.length!==block.table.headers.length))errors.push(`${block.table.id}: inconsistent row width`);
    }
  }
}
for(const chapter of blockBWave3){
  if(!chapter.source?.locator)errors.push(`${chapter.slug}: missing chapter source locator`);
  if(!chapter.executive?.sources?.every(source=>source.locator))errors.push(`${chapter.slug}: executive layer missing source locator`);
  if(!chapter.operatingConcepts?.length||!chapter.discoveryConcepts?.length)errors.push(`${chapter.slug}: missing discovery operating model`);
  for(const related of chapter.related){if(!slugSet.has(related))errors.push(`${chapter.slug}: broken related chapter ${related}`)}
  for(const section of chapter.sections){
    if(!section.contentClass)errors.push(`${chapter.slug}/${section.id}: missing content classification`);
    if(!section.sources?.every(source=>source.locator))errors.push(`${chapter.slug}/${section.id}: missing section source locator`);
    for(const block of section.blocks??[]){
      const locator=block.type==="table"?block.table.source?.locator:block.source?.locator;
      if(!locator)errors.push(`${chapter.slug}/${section.id}: block missing source locator`);
      if(block.type==="table"&&block.table.rows.some(row=>row.length!==block.table.headers.length))errors.push(`${block.table.id}: inconsistent row width`);
    }
  }
}
for(const chapter of blockBWave4){
  if(!chapter.source?.locator)errors.push(`${chapter.slug}: missing chapter source locator`);
  if(!chapter.executive?.sources?.every(source=>source.locator))errors.push(`${chapter.slug}: executive layer missing source locator`);
  if(!chapter.operatingConcepts?.length||!chapter.decideConcepts?.length)errors.push(`${chapter.slug}: missing DECIDE operating model`);
  for(const related of chapter.related){if(!slugSet.has(related))errors.push(`${chapter.slug}: broken related chapter ${related}`)}
  for(const section of chapter.sections){
    if(!section.contentClass)errors.push(`${chapter.slug}/${section.id}: missing content classification`);
    if(!section.sources?.every(source=>source.locator))errors.push(`${chapter.slug}/${section.id}: missing section source locator`);
    for(const block of section.blocks??[]){
      const locator=block.type==="table"?block.table.source?.locator:block.source?.locator;
      if(!locator)errors.push(`${chapter.slug}/${section.id}: block missing source locator`);
      if(block.type==="table"&&block.table.rows.some(row=>row.length!==block.table.headers.length))errors.push(`${block.table.id}: inconsistent row width`);
    }
  }
}

const designPrinciples=blockBWave1.find(chapter=>chapter.slug==="design-principles");
const operatingModel=blockBWave1.find(chapter=>chapter.slug==="operating-model");
if(blockBWave1Files.length!==2||!designPrinciples||!operatingModel)errors.push("Block B Wave 1 must contain exactly Chapters 10–11");
function sourceVolume(chapter){
  let paragraphs=0,listItems=0,tables=0;
  for(const section of chapter?.sections??[])for(const block of section.blocks??[]){if(block.type==="paragraph")paragraphs++;else if(block.type==="list")listItems+=block.items.length;else tables++}
  return {sections:chapter?.sections.length??0,paragraphs,listItems,tables};
}
const ch10Volume=sourceVolume(designPrinciples),ch11Volume=sourceVolume(operatingModel);
if(JSON.stringify(ch10Volume)!==JSON.stringify({sections:24,paragraphs:220,listItems:46,tables:1}))errors.push(`Chapter 10 source coverage changed: ${JSON.stringify(ch10Volume)}`);
if(JSON.stringify(ch11Volume)!==JSON.stringify({sections:46,paragraphs:594,listItems:131,tables:8}))errors.push(`Chapter 11 source coverage changed: ${JSON.stringify(ch11Volume)}`);
const canonicalStages=operatingModel?.operatingStages?.map(stage=>stage.canonicalStage)??[];
if(JSON.stringify(canonicalStages)!==JSON.stringify(["DISCOVER","DECIDE","DELIVER","ADOPT","LEARN"]))errors.push("operating-model: canonical loop must be DISCOVER → DECIDE → DELIVER → ADOPT → LEARN");
const sourceSequence=operatingModel?.sourceOperatingSequence?.map(stage=>`${stage.title}:${stage.locator}`)??[];
if(JSON.stringify(sourceSequence)!==JSON.stringify(["SIGNAL:P2872","FRAME:P2913","DISCOVER:P2929","DECIDE:P3002","VALIDATE:P3028","DELIVER:P3084","RELEASE:P3130","ADOPT:P3160","MEASURE & LEARN:P3211"]))errors.push("operating-model: original nine-stage source sequence was changed");
const sourceStageMap=new Map((operatingModel?.operatingStages??[]).flatMap(stage=>stage.sourceSubStages.map(source=>[source.title,source.locator])));
for(const [stage,locator] of [["SIGNAL","P2872"],["FRAME","P2913"],["DISCOVER","P2929"],["DECIDE","P3002"],["VALIDATE","P3028"],["DELIVER","P3084"],["RELEASE","P3130"],["ADOPT","P3160"],["MEASURE & LEARN","P3211"]]){
  if(sourceStageMap.get(stage)!==locator)errors.push(`operating-model: source stage ${stage} must retain ${locator}`);
}
const allWave1Validations=new Set(blockBWave1.flatMap(chapter=>chapter.sections.flatMap(section=>(section.clientValidations??[]).map(item=>item.id))));
for(const id of ["CL-04","CL-05","CL-06","CL-07","CL-08","CL-09","CL-10","CL-11","CL-12"]){if(!allWave1Validations.has(id))errors.push(`Block B Wave 1: missing contextual ${id}`)}
const northStarCandidate=operatingModel?.operatingConcepts?.find(concept=>concept.id==="north-star-candidate");
if(northStarCandidate?.contentClass!=="hypothesis"||!northStarCandidate.title.includes("NORTH STAR CANDIDATE")||!northStarCandidate.gapIds.includes("CL-06"))errors.push("operating-model: North Star candidate must remain H1/client validation required");
const wipConcept=operatingModel?.operatingConcepts?.find(concept=>concept.id==="wip-management");
if(!wipConcept?.title.includes("baseline / pilot / validate")||!wipConcept.gapIds.includes("CL-09"))errors.push("operating-model: WIP numerical limit must remain unvalidated");
const toolingConcept=operatingModel?.operatingConcepts?.find(concept=>concept.id==="logical-tooling-model");
if(toolingConcept?.contentClass!=="recommendation"||!toolingConcept.gapIds.includes("CL-10"))errors.push("operating-model: tooling must remain a recommendation/to validate");

const roles=blockBWave2.find(chapter=>chapter.slug==="roles");
const artifacts=blockBWave2.find(chapter=>chapter.slug==="artifacts");
if(blockBWave2Files.length!==2||!roles||!artifacts)errors.push("Block B Wave 2 must contain exactly Chapters 17 and 20");
const ch17Volume=sourceVolume(roles),ch20Volume=sourceVolume(artifacts);
if(JSON.stringify(ch17Volume)!==JSON.stringify({sections:49,paragraphs:423,listItems:257,tables:9}))errors.push(`Chapter 17 source coverage changed: ${JSON.stringify(ch17Volume)}`);
if(JSON.stringify(ch20Volume)!==JSON.stringify({sections:60,paragraphs:683,listItems:206,tables:6}))errors.push(`Chapter 20 source coverage changed: ${JSON.stringify(ch20Volume)}`);
const sourceRoleNames=roles?.operatingRoles?.map(role=>role.sourceRole)??[];
for(const name of ["Head de Producto","Outcome Owner","Bet Owner","Technical Owner","Customer Outcome Owner"]){if(!sourceRoleNames.includes(name))errors.push(`roles: missing distinct source role ${name}`)}
if((roles?.operatingRoles??[]).some(role=>role.mappingStatus!=="ROLE MAPPING PENDING"||!role.sourceLocators?.every(source=>source.locator)))errors.push("roles: source roles must retain locators and pending canonical mapping");
if((roles?.decisionRights??[]).length!==15||(roles?.decisionRights??[]).some(right=>right.validationStatus!=="pending"||right.source?.locator!=="T57"))errors.push("roles: decision rights must preserve source matrix T57 and pending validation");
const roleTables=(roles?.sections??[]).flatMap(section=>section.blocks??[]).filter(block=>block.type==="table");
if(!roleTables.some(block=>block.table.source.locator==="T58"&&/RACI/i.test(block.table.caption)))errors.push("roles: source RACI ligero T58 must be preserved without inference");
const roleValidations=new Set([...(roles?.clientValidations??[]),...(roles?.sections??[]).flatMap(section=>section.clientValidations??[])].map(item=>item.id));
for(const id of ["CL-04","CL-05","CL-11","CL-12","CL-13"]){if(!roleValidations.has(id))errors.push(`roles: missing contextual ${id}`)}
const artifactNames=artifacts?.operatingArtifacts?.map(artifact=>artifact.name)??[];
for(const name of ["Signal","Opportunity Card","Evidence Map","Outcome Card","Bet Card","Outcome Board","Learning Card","Decision Log"]){if(!artifactNames.includes(name))errors.push(`artifacts: missing source-supported artifact ${name}`)}
if((artifacts?.operatingArtifacts??[]).some(artifact=>!artifact.sourceLocators?.every(source=>source.locator)||artifact.contentClass!=="recommendation"))errors.push("artifacts: every operating artifact must retain source locator and recommendation status");
const expectedFlow=["Signal>Opportunity","Opportunity>Outcome","Outcome>Bet","Bet>Delivery","Delivery>Evidence","Evidence>Learning","Learning>Decision"];
const actualFlow=(artifacts?.artifactRelationships??[]).map(item=>`${item.from}>${item.to}`);
if(JSON.stringify(actualFlow)!==JSON.stringify(expectedFlow)||(artifacts?.artifactRelationships??[]).some(item=>item.validationStatus!=="pending"))errors.push("artifacts: source-supported lifecycle flow changed or was presented as validated");
const jiraSections=(artifacts?.sections??[]).filter(section=>/Jira|tooling|Source of Truth/i.test(section.title));
if(jiraSections.some(section=>section.contentClass!=="recommendation"))errors.push("artifacts: Jira/tooling content must remain recommendation, not approved architecture");
const artifactValidations=new Set([...(artifacts?.clientValidations??[]),...(artifacts?.sections??[]).flatMap(section=>section.clientValidations??[])].map(item=>item.id));
for(const id of ["CL-04","CL-10"]){if(!artifactValidations.has(id))errors.push(`artifacts: missing contextual ${id}`)}

const discovery=blockBWave3.find(chapter=>chapter.slug==="discovery");
if(blockBWave3Files.length!==1||!discovery)errors.push("Block B Wave 3 must contain exactly Chapter 12");
const ch12Volume=sourceVolume(discovery);
if(JSON.stringify(ch12Volume)!==JSON.stringify({sections:54,paragraphs:656,listItems:180,tables:5}))errors.push(`Chapter 12 source coverage changed: ${JSON.stringify(ch12Volume)}`);
const discoveryKinds=discovery?.discoveryConcepts?.map(concept=>concept.kind)??[];
for(const kind of ["TRIGGER","SIGNAL","PROBLEM / OPPORTUNITY","FRAMING","ASSUMPTION","HYPOTHESIS","RESEARCH","EXPERIMENT","EVIDENCE","SYNTHESIS","DECISION","LEARNING"]){if(!discoveryKinds.includes(kind))errors.push(`discovery: missing source-supported concept ${kind}`)}
const discoverySourceSequence=discovery?.sourceOperatingSequence?.map(stage=>stage.title)??[];
if(JSON.stringify(discoverySourceSequence)!==JSON.stringify(["SIGNAL","FRAME","DISCOVER","DECIDE","VALIDATE","DELIVER","RELEASE","ADOPT","MEASURE & LEARN"]))errors.push("discovery: original nine-stage source sequence was changed");
const discoveryStage=discovery?.operatingStages?.find(stage=>stage.canonicalStage==="DISCOVER");
for(const term of ["SIGNAL","FRAME","DISCOVER","VALIDATE"]){if(!discoveryStage?.sourceSubStages.some(stage=>stage.title===term))errors.push(`discovery: source terminology ${term} missing from canonical mapping`)}
const evidenceTerms=new Map((discovery?.discoveryEvidenceModel??[]).map(item=>[item.term,item]));
for(const term of ["ASSUMPTION","HYPOTHESIS","EVIDENCE","INSIGHT","DECISION"]){if(!evidenceTerms.has(term))errors.push(`discovery: missing evidence term ${term}`)}
if(evidenceTerms.get("INSIGHT")?.sourceStatus!=="SOURCE MISSING"||evidenceTerms.get("INSIGHT")?.definition)errors.push("discovery: INSIGHT must remain SOURCE MISSING");
if(JSON.stringify(evidenceTerms.get("EVIDENCE")?.qualityModel)!==JSON.stringify(["Nivel A — Comportamiento observado","Nivel B — Evidencia directa del usuario","Nivel C — Evidencia comercial/operacional","Nivel D — Opinión / hipótesis interna; origen válido, no evidencia suficiente de problema"]))errors.push("discovery: source evidence hierarchy A–D changed");
const gateDecisions=discovery?.discoveryGates?.map(gate=>gate.decision)??[];
if(JSON.stringify(gateDecisions)!==JSON.stringify(["PROCEED","ADJUST","EXPLORE MORE","STOP"])||(discovery?.discoveryGates??[]).some(gate=>gate.validationStatus!=="pending"||!gate.source?.locator))errors.push("discovery: decision gates must preserve source outputs and pending authority");
const roleIds=new Set(roles?.operatingRoles?.map(role=>role.id));
if((discovery?.operatingRoles??[]).some(role=>!roleIds.has(role.id)||role.mappingStatus!=="ROLE MAPPING PENDING"))errors.push("discovery: role integration must reuse Wave 2 role IDs and remain pending mapping");
const artifactCatalogIds=new Set(artifacts?.operatingArtifacts?.map(artifact=>artifact.id));
for(const use of discovery?.artifactUses??[]){if(!use.artifactId.startsWith("source-")&&!artifactCatalogIds.has(use.artifactId))errors.push(`discovery: unknown artifact reference ${use.artifactId}`)}
for(const name of ["Signal","Opportunity Card","Evidence Map"]){if(!discovery?.artifactUses?.some(use=>use.artifactName===name))errors.push(`discovery: missing explicit artifact use ${name}`)}
if((discovery?.artifactUses??[]).some(use=>["Outcome Card","Bet Card","Learning Card","Decision Log"].includes(use.artifactName)))errors.push("discovery: artifacts not explicitly named by Chapter 12 must not be asserted as direct uses");
if((discovery?.discoveryTechniques??[]).length!==10)errors.push("discovery: expected 10 source-supported technique groups");
if((discovery?.discoveryCadences??[]).some(item=>!item.source?.locator)||!(discovery?.discoveryCadences??[]).some(item=>item.cadenceType==="CONTINUOUS"))errors.push("discovery: cadence must preserve continuous activity and locators");
if((discovery?.antiPatternAssessments??[]).length!==9||(discovery?.antiPatternAssessments??[]).some(item=>!item.source?.locator))errors.push("discovery: anti-pattern assessment incomplete");
const feedbackRisk=discovery?.antiPatternAssessments?.find(item=>item.antiPattern==="Customer feedback arriving only after release");
if(feedbackRisk?.status!=="SOURCE RISK")errors.push("discovery: late customer feedback must remain visible as a source risk");
const discoveryValidations=new Set([...(discovery?.clientValidations??[]),...(discovery?.sections??[]).flatMap(section=>section.clientValidations??[])].map(item=>item.id));
for(const id of ["CL-04","CL-05","CL-06","CL-07","CL-09","CL-10","CL-11"]){if(!discoveryValidations.has(id))errors.push(`discovery: missing contextual ${id}`)}
const discoveryText=JSON.stringify(discovery);
if(/Jira Product Discovery|JPD project|custom field|issue type|workflow/i.test(discoveryText))errors.push("discovery: premature JPD/Jira architecture detected");

const prioritization=blockBWave4.find(chapter=>chapter.slug==="prioritization");
if(blockBWave4Files.length!==1||!prioritization)errors.push("Block B Wave 4 must contain exactly Chapter 13");
const ch13Volume=sourceVolume(prioritization);
if(JSON.stringify(ch13Volume)!==JSON.stringify({sections:48,paragraphs:522,listItems:167,tables:6}))errors.push(`Chapter 13 source coverage changed: ${JSON.stringify(ch13Volume)}`);
const semanticTerms=new Map((prioritization?.decisionSemantics??[]).map(item=>[item.term,item]));
for(const term of ["ASSESSMENT","PRIORITIZATION","RANKING","SEQUENCING","DECISION","COMMITMENT","CAPACITY ALLOCATION","FUNDING / INVESTMENT","BACKLOG ORDERING"]){if(!semanticTerms.has(term))errors.push(`prioritization: missing semantic distinction ${term}`)}
for(const term of ["ASSESSMENT","RANKING","SEQUENCING","CAPACITY ALLOCATION","FUNDING / INVESTMENT","BACKLOG ORDERING"]){if(!["SOURCE PARTIAL","SOURCE MISSING"].includes(semanticTerms.get(term)?.sourceStatus))errors.push(`prioritization: ${term} must retain its source gap`)}
const decideKinds=prioritization?.decideConcepts?.map(concept=>concept.kind)??[];
for(const kind of ["DECISION TRIGGER","DECISION OBJECT","EVIDENCE PACKAGE","DECISION CRITERIA","EVALUATION","PRIORITIZATION","TRADE-OFF","CAPACITY CONSTRAINT","DECISION","COMMITMENT","REVISIT","STOP / DEFER"]){if(!decideKinds.includes(kind))errors.push(`prioritization: missing DECIDE concept ${kind}`)}
if(prioritization?.priorityCommitment?.distinctionStatus!=="SUPPORTED")errors.push("prioritization: Priority / Start Decision / Capacity Commitment separation must remain explicit");
if((prioritization?.decisionObjects??[]).length!==7||(prioritization?.decisionObjects??[]).some(item=>!item.source?.locator))errors.push("prioritization: decision object inventory incomplete");
if((prioritization?.prioritizationMethods??[]).length!==7)errors.push("prioritization: expected seven source-supported methods/mechanisms");
if((prioritization?.prioritizationMethods??[]).some(item=>item.formula||item.weights?.length||item.thresholds?.length))errors.push("prioritization: invented formula, weights or thresholds detected");
const initialMatrix=prioritization?.prioritizationMethods?.find(item=>/Initial decision matrix/i.test(item.name));
if(initialMatrix?.methodClass!=="EXAMPLE")errors.push("prioritization: initial matrix must remain an example, not policy");
const lightScorecard=prioritization?.prioritizationMethods?.find(item=>/Light scorecard/i.test(item.name));
if(lightScorecard?.methodClass!=="H1 / PROPOSED"||lightScorecard?.validationStatus!=="pending")errors.push("prioritization: lightweight scorecard must remain proposed/pending");
if((prioritization?.decisionRights??[]).length!==10||(prioritization?.decisionRights??[]).some(right=>right.validationStatus!=="pending"||right.source?.locator!=="T34"||right.escalation))errors.push("prioritization: decision rights must preserve T34 and pending authority without escalation");
const chapter13ArtifactNames=prioritization?.artifactUses?.map(use=>use.artifactName)??[];
for(const name of ["Opportunity Card","Decision Log","Decision Canvas","Bet source term / Bet Card"]){if(!chapter13ArtifactNames.includes(name))errors.push(`prioritization: missing explicit artifact use ${name}`)}
for(const name of ["Evidence Map","Outcome Card","Outcome Board"]){if(chapter13ArtifactNames.includes(name))errors.push(`prioritization: unsupported direct artifact use ${name}`)}
const connections=new Map((prioritization?.discoveryDecideConnections??[]).map(item=>[item.element,item.status]));
for(const [name,status] of [["Evidence readiness","SUPPORTED"],["Hypothesis status","PARTIAL"],["Opportunity framing","SUPPORTED"],["Outcome relationship","SUPPORTED"],["Decision trigger","PARTIAL"],["Decision criteria","SUPPORTED"]]){if(connections.get(name)!==status)errors.push(`prioritization: Discovery → Decide connection ${name} must remain ${status}`)}
if(prioritization?.decisionRecord?.fields?.PARTICIPANTS!=="SOURCE MISSING"||prioritization?.decisionRecord?.fields?.["DECISION OWNER"]!=="SOURCE MISSING")errors.push("prioritization: Decision Log participants/owner must remain SOURCE MISSING");
if((prioritization?.decisionCadences??[]).length!==5||(prioritization?.decisionCadences??[]).some(item=>!item.source?.locator))errors.push("prioritization: cadence inventory incomplete");
if((prioritization?.decisionMetrics??[]).length!==10||(prioritization?.decisionMetrics??[]).some(item=>item.baseline!=="SOURCE MISSING"||item.target!=="SOURCE MISSING"||item.validationStatus!=="pending"||!item.source?.locator))errors.push("prioritization: decision metrics require missing baselines/targets and pending validation");
if((prioritization?.antiPatternAssessments??[]).length!==13||(prioritization?.antiPatternAssessments??[]).some(item=>!item.source?.locator))errors.push("prioritization: anti-pattern assessment incomplete");
const prioritizationValidations=new Set([...(prioritization?.clientValidations??[]),...(prioritization?.sections??[]).flatMap(section=>section.clientValidations??[])].map(item=>item.id));
for(const id of ["CL-05","CL-06","CL-07","CL-09","CL-10","CL-11","CL-12","CL-13"]){if(!prioritizationValidations.has(id))errors.push(`prioritization: missing contextual ${id}`)}
const prioritizationModelText=JSON.stringify({methods:prioritization?.prioritizationMethods,concepts:prioritization?.decideConcepts,rights:prioritization?.decisionRights,artifacts:prioritization?.artifactUses});
if(/JPD project|custom field|issue type|workflow configuration|automation rule|dashboard implementation/i.test(prioritizationModelText))errors.push("prioritization: premature JPD/Jira architecture detected");

const maturity=blockA.find(chapter=>chapter.slug==="maturity");
if(!maturity?.editorialNotices?.some(notice=>notice.status==="PENDING VALIDATION"&&/Valoración del assessment/i.test(notice.title)))errors.push("maturity: missing persistent assessment validation notice");
if(!maturity?.clientValidations?.some(item=>item.id==="CL-01"&&item.status==="CLIENT VALIDATION REQUIRED"))errors.push("maturity: CL-01 must remain open");
const rootCauses=blockA.find(chapter=>chapter.slug==="root-causes");
if(!rootCauses?.clientValidations?.some(item=>item.id==="CL-02"&&item.status==="CLIENT VALIDATION REQUIRED"))errors.push("root-causes: CL-02 must remain open");
const waste=blockA.find(chapter=>chapter.slug==="waste-friction");
if(!waste?.clientValidations?.some(item=>item.id==="CL-03"&&item.status==="CLIENT VALIDATION REQUIRED"))errors.push("waste-friction: CL-03 must remain open");
const wasteSections=waste?.sections.filter(section=>section.id.startsWith("friccion-"))??[];
if(wasteSections.length!==12||wasteSections.some(section=>!section.impactSemantics?.length||section.impactValidationStatus!=="pending"))errors.push("waste-friction: every friction requires explicit impact semantics and pending validation");

const infographicSource=fs.readFileSync(path.join(root,"content","infographics.ts"),"utf8");
const infographicAssets=[...infographicSource.matchAll(/src:"([^"]+)"/g)].map(match=>match[1]);
if(infographicAssets.length!==17)errors.push(`Expected 17 infographics, found ${infographicAssets.length}`);
for(const asset of infographicAssets){
  if(!fs.existsSync(path.join(root,"public",asset)))errors.push(`Missing infographic asset: ${asset}`);
}

const sourceFiles=[...fs.readdirSync(path.join(root,"app"),{recursive:true}),...fs.readdirSync(path.join(root,"components"),{recursive:true})]
  .filter(value=>typeof value==="string"&&value.endsWith(".tsx"));
for(const relative of sourceFiles){
  const base=fs.existsSync(path.join(root,"app",relative))?path.join(root,"app"):path.join(root,"components");
  const source=fs.readFileSync(path.join(base,relative),"utf8");
  for(const match of source.matchAll(/href="\/chapter\/([a-z0-9-]+)"/g)){
    if(!slugSet.has(match[1]))errors.push(`${relative}: invalid chapter route ${match[1]}`);
  }
}

if(errors.length){
  console.error(errors.map(error=>`- ${error}`).join("\n"));
  process.exit(1);
}
console.log(`Content validation passed: ${allSlugs.length} chapters/routes, ${blockAFiles.length} Block A + ${blockBWave1Files.length} Block B Wave 1 + ${blockBWave2Files.length} Block B Wave 2 + ${blockBWave3Files.length} Block B Wave 3 + ${blockBWave4Files.length} Block B Wave 4 ingested, ${infographicAssets.length} infographics, 0 internal broken links.`);
console.log(`Wave 1 source coverage: Chapter 10 ${JSON.stringify(ch10Volume)}; Chapter 11 ${JSON.stringify(ch11Volume)}.`);
console.log(`Wave 2 source coverage: Chapter 17 ${JSON.stringify(ch17Volume)}; Chapter 20 ${JSON.stringify(ch20Volume)}.`);
console.log(`Wave 3 source coverage: Chapter 12 ${JSON.stringify(ch12Volume)}.`);
console.log(`Wave 4 source coverage: Chapter 13 ${JSON.stringify(ch13Volume)}.`);
console.log(`Evidence counts: E1=${evidenceCounts.E1}, E2=${evidenceCounts.E2}, E3=${evidenceCounts.E3}, H1=${evidenceCounts.H1}, UNREVIEWED CLAIMS=${evidenceCounts.unreviewedClaims}, STRUCTURAL MARKERS=${evidenceCounts.structuralMarkers}, PENDING VALIDATION=${evidenceCounts.pendingValidation}.`);
