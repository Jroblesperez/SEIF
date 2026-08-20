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
const blockBWave5Files=fs.readdirSync(chapterDir).filter(name=>/^14-.*\.ts$/.test(name)).sort();
const blockBWave6Files=fs.readdirSync(chapterDir).filter(name=>/^(15|16)-.*\.ts$/.test(name)).sort();
const blockBWave7Files=fs.readdirSync(chapterDir).filter(name=>/^(18|19)-.*\.ts$/.test(name)).sort();

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
const blockBWave5=blockBWave5Files.map(readChapter);
const blockBWave6=blockBWave6Files.map(readChapter);
const blockBWave7=blockBWave7Files.map(readChapter);
const legacySource=fs.readFileSync(path.join(chapterDir,"legacy.ts"),"utf8");
const legacySlugs=[...legacySource.matchAll(/\{slug:"([^"]+)"/g)].map(match=>match[1]);
const allSlugs=[...blockA.map(chapter=>chapter.slug),...blockBWave1.map(chapter=>chapter.slug),...blockBWave2.map(chapter=>chapter.slug),...blockBWave3.map(chapter=>chapter.slug),...blockBWave4.map(chapter=>chapter.slug),...blockBWave5.map(chapter=>chapter.slug),...blockBWave6.map(chapter=>chapter.slug),...blockBWave7.map(chapter=>chapter.slug),...legacySlugs];
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
for(const chapter of blockBWave5){
  if(!chapter.source?.locator)errors.push(`${chapter.slug}: missing chapter source locator`);
  if(!chapter.executive?.sources?.every(source=>source.locator))errors.push(`${chapter.slug}: executive layer missing source locator`);
  if(!chapter.operatingConcepts?.length||!chapter.deliveryConcepts?.length)errors.push(`${chapter.slug}: missing Delivery operating model`);
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
for(const chapter of blockBWave6){
  if(!chapter.source?.locator)errors.push(`${chapter.slug}: missing chapter source locator`);
  if(!chapter.executive?.sources?.every(source=>source.locator))errors.push(`${chapter.slug}: executive layer missing source locator`);
  if(!chapter.operatingConcepts?.length)errors.push(`${chapter.slug}: missing operating model`);
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
for(const chapter of blockBWave7){
  if(!chapter.source?.locator||!chapter.executive?.sources?.every(source=>source.locator)||!chapter.operatingConcepts?.length)errors.push(`${chapter.slug}: incomplete Wave 7 foundation`);
  for(const related of chapter.related){if(!slugSet.has(related))errors.push(`${chapter.slug}: broken related chapter ${related}`)}
  for(const section of chapter.sections){
    if(!section.contentClass||!section.sources?.every(source=>source.locator))errors.push(`${chapter.slug}/${section.id}: missing classification or source locator`);
    for(const block of section.blocks??[]){const locator=block.type==="table"?block.table.source?.locator:block.source?.locator;if(!locator)errors.push(`${chapter.slug}/${section.id}: block missing source locator`);if(block.type==="table"&&block.table.rows.some(row=>row.length!==block.table.headers.length))errors.push(`${block.table.id}: inconsistent row width`)}
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

const delivery=blockBWave5.find(chapter=>chapter.slug==="delivery");
if(blockBWave5Files.length!==1||!delivery)errors.push("Block B Wave 5 must contain exactly Chapter 14");
const ch14Volume=sourceVolume(delivery);
if(JSON.stringify(ch14Volume)!==JSON.stringify({sections:70,paragraphs:731,listItems:203,tables:6}))errors.push(`Chapter 14 source coverage changed: ${JSON.stringify(ch14Volume)}`);
const deliverySemantics=new Map((delivery?.deliverySemantics??[]).map(item=>[item.term,item]));
for(const term of ["DONE","READY FOR RELEASE","RELEASED","IN PRODUCTION","AVAILABLE","ADOPTED","VALUE VALIDATED"]){if(!deliverySemantics.has(term))errors.push(`delivery: missing semantic distinction ${term}`)}
if(deliverySemantics.get("RELEASED")?.definition===deliverySemantics.get("VALUE VALIDATED")?.definition)errors.push("delivery: Release must not equal Value Validated");
const deliveryKinds=delivery?.deliveryConcepts?.map(concept=>concept.kind)??[];
for(const kind of ["COMMITMENT","DELIVERY OBJECT","WORK DECOMPOSITION","VALUABLE SLICE","WORK IN PROGRESS","FLOW","DEPENDENCY","BLOCKER","QUALITY","VALIDATION","RELEASE READINESS","RELEASE","PRODUCTION","TECHNICAL FEEDBACK","POST-RELEASE OBSERVATION"]){if(!deliveryKinds.includes(kind))errors.push(`delivery: missing concept ${kind}`)}
const commitConnections=new Map((delivery?.commitmentDeliveryConnections??[]).map(item=>[item.element,item.status]));
for(const [name,status] of [["Decision","SUPPORTED"],["Commitment","SUPPORTED"],["Bet","SUPPORTED"],["Capacity","PARTIAL"],["Delivery Object","SUPPORTED"],["Epic / Slice / Story / Task","PARTIAL"],["Release","SUPPORTED"]]){if(commitConnections.get(name)!==status)errors.push(`delivery: commitment connection ${name} must remain ${status}`)}
if((delivery?.deliveryObjects??[]).length!==7||(delivery?.deliveryObjects??[]).some(item=>!item.source?.locator||item.validationStatus!=="pending"))errors.push("delivery: source object inventory incomplete");
if(delivery?.valuableSliceAssessment?.sourceStatus!=="SOURCE COMPLETE"||JSON.stringify(delivery?.valuableSliceAssessment?.optimizes)!==JSON.stringify(["VALUE","LEARNING","RISK","FLOW"]))errors.push("delivery: Valuable Slice semantics changed");
if(delivery?.valuableSliceAssessment?.risks?.find(item=>item.risk==="Technical slicing only")?.status!=="NOT PRESENT"||delivery?.valuableSliceAssessment?.risks?.find(item=>item.risk==="Big-batch delivery")?.status!=="SOURCE RISK")errors.push("delivery: slicing risk assessment changed");
if((delivery?.releaseDecisions??[]).length!==3||(delivery?.releaseDecisions??[]).some(item=>item.decisionOwner||item.validationStatus!=="pending"||!item.source?.locator))errors.push("delivery: release decisions must retain pending authority and source locators");
if(JSON.stringify(delivery?.releaseDecisions??[]).match(/\bHold\b/i))errors.push("delivery: unsupported Hold release outcome detected");
const dora=delivery?.deliveryMetrics?.filter(item=>item.metricClass==="DORA")??[];
if(JSON.stringify(dora.map(item=>item.name))!==JSON.stringify(["Deployment Frequency","Lead Time for Changes","Change Failure Rate","Time to Restore Service (MTTR)"]))errors.push("delivery: DORA definitions changed");
if((delivery?.deliveryMetrics??[]).length!==23||(delivery?.deliveryMetrics??[]).some(item=>item.baseline!=="SOURCE MISSING"||item.target!=="SOURCE MISSING"||item.validationStatus!=="pending"||!item.source?.locator))errors.push("delivery: metrics require source locators and missing baselines/targets");
if(!(delivery?.deliveryMetrics??[]).every(item=>/sistema|ajustar/i.test(item.decisionEnabled)))errors.push("delivery: metrics must diagnose the system, not individuals");
if((delivery?.deliveryCadences??[]).length!==6||(delivery?.deliveryCadences??[]).some(item=>!item.source?.locator||item.validationStatus!=="pending"))errors.push("delivery: cadence inventory incomplete");
const adoptConnections=new Map((delivery?.releaseAdoptConnections??[]).map(item=>[item.element,item.status]));
for(const name of ["Instrumentation","Activation measurement","Customer communication","Adoption observation","Feedback","Support signals","Learning trigger"]){if(adoptConnections.get(name)!=="SUPPORTED")errors.push(`delivery: Release → Adopt connection ${name} must remain SUPPORTED`)}
if(adoptConnections.get("TTV")!=="PARTIAL")errors.push("delivery: TTV definition must remain PARTIAL pending Chapter 15");
if((delivery?.deliveryTooling??[]).length!==7||(delivery?.deliveryTooling??[]).some(item=>item.classification==="CURRENT STATE"||item.validationStatus!=="pending"))errors.push("delivery: tooling must remain recommendation/H1 pending validation");
if((delivery?.artifactUses??[]).length!==1||delivery?.artifactUses?.[0]?.artifactName!=="Bet Card / Delivery Bet"||delivery?.artifactUses?.[0]?.relationship!=="SOURCE TERMINOLOGY CONFLICT")errors.push("delivery: Chapter 14 must not invent direct artifact integrations");
if((delivery?.antiPatternAssessments??[]).length!==15||(delivery?.antiPatternAssessments??[]).some(item=>!item.source?.locator))errors.push("delivery: anti-pattern assessment incomplete");
for(const name of ["Release = Done","Release = Value","DORA as individual performance","Technical handoff to SRE","Quality as final-phase testing"]){if(delivery?.antiPatternAssessments?.find(item=>item.antiPattern===name)?.status!=="NOT PRESENT")errors.push(`delivery: safeguard missing for ${name}`)}
const deliveryValidations=new Set([...(delivery?.clientValidations??[]),...(delivery?.sections??[]).flatMap(section=>section.clientValidations??[])].map(item=>item.id));
for(const id of ["CL-04","CL-05","CL-07","CL-08","CL-09","CL-10","CL-11","CL-12","CL-14"]){if(!deliveryValidations.has(id))errors.push(`delivery: missing contextual ${id}`)}
const deliveryMaturity=delivery?.sections?.find(section=>/Maturity|madurez/i.test(section.title));
if(!deliveryMaturity?.clientValidations?.some(item=>item.id==="CL-14"&&/Valoración del assessment/i.test(item.subject)))errors.push("delivery: maturity rating requires pending assessment validation context");
const deliveryModelText=JSON.stringify({objects:delivery?.deliveryObjects,concepts:delivery?.deliveryConcepts,decisions:delivery?.releaseDecisions,tooling:delivery?.deliveryTooling});
if(/approved Jira hierarchy|mandatory workflow|custom field|issue type|quality gate approved|DORA target|individual productivity score/i.test(deliveryModelText))errors.push("delivery: unsupported Jira, workflow, quality or DORA claim detected");

const adoption=blockBWave6.find(chapter=>chapter.slug==="adoption-growth");
const learning=blockBWave6.find(chapter=>chapter.slug==="feedback-loop");
if(blockBWave6Files.length!==2||!adoption||!learning)errors.push("Block B Wave 6 must contain exactly Chapters 15–16");
const ch15Volume=sourceVolume(adoption),ch16Volume=sourceVolume(learning);
if(JSON.stringify(ch15Volume)!==JSON.stringify({sections:56,paragraphs:673,listItems:143,tables:4}))errors.push(`Chapter 15 source coverage changed: ${JSON.stringify(ch15Volume)}`);
if(JSON.stringify(ch16Volume)!==JSON.stringify({sections:67,paragraphs:810,listItems:197,tables:7}))errors.push(`Chapter 16 source coverage changed: ${JSON.stringify(ch16Volume)}`);
const adoptionTerms=new Map((adoption?.adoptionSemantics??[]).map(item=>[item.term,item]));
for(const term of ["AVAILABILITY","ACTIVATION","USAGE","ADOPTION","ADHERENCE","CUSTOMER AUTONOMY","CUSTOMER VALUE","RETENTION","EXPANSION","BUSINESS VALUE"]){if(!adoptionTerms.has(term))errors.push(`adoption: missing semantic distinction ${term}`)}
if(adoptionTerms.get("USAGE")?.definition===adoptionTerms.get("CUSTOMER VALUE")?.definition)errors.push("adoption: Usage must not equal Customer Value");
if((adoption?.adoptionConcepts??[]).length!==6)errors.push("adoption: expected six source-supported concepts");
if(adoption?.timeToValue?.definition!=="Tiempo hasta que el usuario alcanza su primer criterio de éxito."||adoption?.timeToValue?.formula||adoption?.timeToValue?.owner||adoption?.timeToValue?.cadence||adoption?.timeToValue?.validationStatus!=="pending")errors.push("adoption: TTV must preserve source definition without invented formula, owner or cadence");
const outcomeStatuses=(adoption?.customerOutcomeConnections??[]).map(item=>item.status);
if(outcomeStatuses.filter(status=>status==="SUPPORTED").length!==4||outcomeStatuses.filter(status=>status==="PARTIAL").length!==1)errors.push("adoption: Outcome relationships must retain four supported and one partial connection");
const controlRondas=adoption?.operatingExamples?.find(item=>item.name==="Control de Rondas");
if(controlRondas?.classification!=="EXAMPLE"||!controlRondas?.details?.Outcome?.includes("SOURCE MISSING"))errors.push("adoption: Control de Rondas must remain an example with its source gap");
if((adoption?.growthRelationships??[]).some(item=>item.classification==="SOURCE FACT"))errors.push("adoption: Growth relationships must not be presented as proven causality");
if(adoption?.northStarSupport?.contentClass!=="hypothesis"||adoption?.northStarSupport?.supportStatus!=="PARTIAL"||adoption?.northStarSupport?.validationStatus!=="pending"||!adoption?.northStarSupport?.candidate.includes("NORTH STAR CANDIDATE"))errors.push("adoption: North Star must remain a partial H1 candidate pending validation");
if((adoption?.adoptionLearningMetrics??[]).length!==15||(adoption?.adoptionLearningMetrics??[]).some(item=>item.baseline!=="SOURCE MISSING"||item.target!=="SOURCE MISSING"||item.validationStatus!=="pending"))errors.push("adoption: metrics require missing baselines/targets and pending validation");
if((adoption?.learningCadences??[]).length!==4||(adoption?.antiPatternAssessments??[]).length!==10)errors.push("adoption: cadence or anti-pattern inventory incomplete");

const chain=(learning?.signalLearningChain??[]).map(item=>item.element);
if(JSON.stringify(chain)!==JSON.stringify(["SIGNAL","PATTERN","EVIDENCE","INSIGHT","LEARNING","DECISION"]))errors.push("learning: source signal-to-decision chain changed");
if(evidenceTerms.get("INSIGHT")?.sourceStatus!=="SOURCE MISSING")errors.push("discovery: Chapter 12 INSIGHT gap was silently retrofitted");
if((learning?.feedbackSignals??[]).length!==9||(learning?.learningConcepts??[]).length!==6)errors.push("learning: feedback signal or learning concept inventory incomplete");
const learningDecisionNames=(learning?.learningDecisions??[]).map(item=>item.decision);
if(JSON.stringify(learningDecisionNames)!==JSON.stringify(["SCALE","CONTINUE","ADJUST","EXPLORE","STOP"])||(learning?.learningDecisions??[]).some(item=>item.decisionOwner||item.validationStatus!=="pending"))errors.push("learning: decisions must preserve source terminology and pending authority");
if((learning?.feedbackLoopConnections??[]).length!==5)errors.push("learning: feedback loop connection inventory incomplete");
const learningArtifactNames=learning?.artifactUses?.map(item=>item.artifactName)??[];
for(const name of ["Evidence Map","Learning Card","Decision Log","Customer Feedback Repository"]){if(!learningArtifactNames.includes(name))errors.push(`learning: missing source-supported artifact ${name}`)}
for(const name of ["Outcome Card","Bet Card","Outcome Board"]){if(learningArtifactNames.includes(name))errors.push(`learning: unsupported direct artifact use ${name}`)}
if((learning?.adoptionLearningMetrics??[]).length!==10||(learning?.adoptionLearningMetrics??[]).some(item=>item.baseline!=="SOURCE MISSING"||item.target!=="SOURCE MISSING"||item.validationStatus!=="pending"))errors.push("learning: metrics require missing baselines/targets and pending validation");
if((learning?.learningCadences??[]).length!==6||(learning?.antiPatternAssessments??[]).length!==9)errors.push("learning: cadence or anti-pattern inventory incomplete");
for(const chapter of [adoption,learning])if((chapter?.adoptionLearningTooling??[]).some(item=>item.validationStatus!=="pending"))errors.push(`${chapter?.slug}: tooling must remain pending logical recommendation/H1`);
const adoptionValidations=new Set([...(adoption?.clientValidations??[]),...(adoption?.sections??[]).flatMap(section=>section.clientValidations??[])].map(item=>item.id));
for(const id of ["CL-04","CL-05","CL-06","CL-07","CL-08","CL-10","CL-11","CL-13","CL-15"]){if(!adoptionValidations.has(id))errors.push(`adoption: missing contextual ${id}`)}
const learningValidations=new Set([...(learning?.clientValidations??[]),...(learning?.sections??[]).flatMap(section=>section.clientValidations??[])].map(item=>item.id));
for(const id of ["CL-04","CL-05","CL-07","CL-10","CL-11","CL-16"]){if(!learningValidations.has(id))errors.push(`learning: missing contextual ${id}`)}
for(const [chapter,id] of [[adoption,"CL-15"],[learning,"CL-16"]]){const section=chapter?.sections?.find(item=>/Maturity|madurez/i.test(item.title));if(!section?.clientValidations?.some(item=>item.id===id&&/Valoración del assessment/i.test(item.subject)))errors.push(`${chapter?.slug}: maturity rating requires pending assessment validation context`)}
const wave6ModelText=JSON.stringify({adoption:adoption?.adoptionConcepts,ttv:adoption?.timeToValue,growth:adoption?.growthRelationships,northStar:adoption?.northStarSupport,learning:learning?.learningConcepts,decisions:learning?.learningDecisions,tooling:[adoption?.adoptionLearningTooling,learning?.adoptionLearningTooling]});
if(/approved North Star|official SEIF KPI|validated corporate metric|TTV SLA|Jira issue type|custom field|workflow configuration|ticket = feature/i.test(wave6ModelText))errors.push("Wave 6: unsupported North Star, TTV, ticket or tooling claim detected");

const northStar=blockBWave7.find(chapter=>chapter.slug==="north-star");
const governance=blockBWave7.find(chapter=>chapter.slug==="governance");
if(blockBWave7Files.length!==2||!northStar||!governance)errors.push("Block B Wave 7 must contain exactly Chapters 18–19");
const ch18Volume=sourceVolume(northStar),ch19Volume=sourceVolume(governance);
if(JSON.stringify(ch18Volume)!==JSON.stringify({sections:60,paragraphs:698,listItems:194,tables:4}))errors.push(`Chapter 18 source coverage changed: ${JSON.stringify(ch18Volume)}`);
if(JSON.stringify(ch19Volume)!==JSON.stringify({sections:60,paragraphs:473,listItems:234,tables:7}))errors.push(`Chapter 19 source coverage changed: ${JSON.stringify(ch19Volume)}`);
if(northStar?.operatingConcepts?.[0]?.contentClass!=="hypothesis"||!northStar?.operatingConcepts?.[0]?.gapIds.includes("CL-06")||!northStar?.takeaway.includes("no una KPI corporativa aprobada"))errors.push("north-star: candidate must remain H1/client validation required");
if((northStar?.northStarCriteria??[]).length!==8||(northStar?.northStarCriteria??[]).some(item=>!["SUPPORTED","PARTIAL","MISSING"].includes(item.status)))errors.push("north-star: source-supported candidate test incomplete");
if((northStar?.northStarCriteria??[]).some(item=>"score" in item))errors.push("north-star: manufactured candidate score detected");
if((northStar?.metricDefinitions??[]).length!==34)errors.push("north-star: metric inventory incomplete");
const candidateMetric=northStar?.metricDefinitions?.find(item=>item.id==="customer-recurring-value");
if(candidateMetric?.formula!=="Clientes activos con valor recurrente / clientes activos elegibles"||candidateMetric?.valueClass!=="PENDING VALIDATION"||candidateMetric?.validationStatus!=="pending")errors.push("north-star: candidate formula must remain pending, not approved policy");
if((northStar?.metricDefinitions??[]).some(item=>item.baseline!=="SOURCE MISSING"||item.target!=="SOURCE MISSING"||item.threshold!=="SOURCE MISSING"||item.validationStatus!=="pending"))errors.push("north-star: invented baseline, target or threshold detected");
const doraMetric=northStar?.metricDefinitions?.find(item=>item.id==="dora");
if(!/no demuestra valor/i.test(doraMetric?.definition??"")||doraMetric?.family!=="DORA")errors.push("north-star: DORA must remain delivery health, not value");
const flowMetric=northStar?.metricDefinitions?.find(item=>item.id==="flow");
if(!/no productividad individual/i.test(flowMetric?.definition??""))errors.push("north-star: Flow/Throughput must not become individual productivity");
const treeLevels=new Set((northStar?.metricTree??[]).map(item=>item.level));
for(const level of ["NORTH STAR CANDIDATE","OUTCOME METRICS","ADOPTION METRICS","DELIVERY HEALTH","OPERATIONAL HEALTH","BUSINESS MEASURES"]){if(!treeLevels.has(level))errors.push(`north-star: metric tree missing ${level}`)}
const northStarValidations=new Set([...(northStar?.clientValidations??[]),...(northStar?.sections??[]).flatMap(section=>section.clientValidations??[])].map(item=>item.id));
for(const id of ["CL-04","CL-05","CL-06","CL-07","CL-08","CL-10","CL-11","CL-17"]){if(!northStarValidations.has(id))errors.push(`north-star: missing contextual ${id}`)}
const northStarMaturity=northStar?.sections?.find(section=>/Maturity|madurez/i.test(section.title));
if(!northStarMaturity?.clientValidations?.some(item=>item.id==="CL-17"&&/Valoración del assessment/i.test(item.subject)))errors.push("north-star: maturity assessment requires pending validation context");

if((governance?.governanceMechanisms??[]).length!==7)errors.push("governance: expected seven source-supported mechanisms");
const reusedGovernanceRoleIds=new Set(governance?.operatingRoles?.map(role=>role.id));
for(const role of governance?.operatingRoles??[]){if(!roleIds.has(role.id)||role.mappingStatus!=="ROLE MAPPING PENDING")errors.push(`governance: role ${role.id} must reuse Chapter 17 and remain mapping pending`)}
if(reusedGovernanceRoleIds.size!==9)errors.push("governance: source role integration incomplete");
if((governance?.decisionRights??[]).length!==3||(governance?.decisionRights??[]).some(item=>item.validationStatus!=="pending"||!item.source?.locator))errors.push("governance: DecisionRight integration incomplete or presented as approved authority");
const recurrent=governance?.governanceMechanisms?.filter(item=>!item.contextual)??[],contextual=governance?.governanceMechanisms?.filter(item=>item.contextual)??[];
if(recurrent.length!==4||contextual.length!==3)errors.push("governance: Minimum Viable Governance must retain four recurrent and three contextual reviews");
if((governance?.governanceMechanisms??[]).some(item=>item.validationStatus!=="pending"||!item.possibleDecisions.length||!item.outputs.length))errors.push("governance: every mechanism requires decisions, outputs and pending validation");
if(!governance?.governanceMechanisms?.find(item=>item.id==="release-review")?.purpose.match(/sin aprobación jerárquica/i))errors.push("governance: Release Review must not be hierarchical approval");
const govLoop=(governance?.governanceConnections??[]).map(item=>`${item.from}>${item.to}:${item.status}`);
if(JSON.stringify(govLoop)!==JSON.stringify(["EVIDENCE>REVIEW:SUPPORTED","REVIEW>DECISION:SUPPORTED","DECISION>ACTION:SUPPORTED","ACTION>NEW EVIDENCE:PARTIAL"]))errors.push("governance: evidence-to-action loop changed or was falsely closed");
if((governance?.escalationRules??[]).length!==3||(governance?.escalationRules??[]).some(item=>item.validationStatus!=="pending"||item.timeExpectation!=="SOURCE MISSING"||!item.authority.includes("CL-05")))errors.push("governance: escalation must retain pending authority and missing time expectation");
const govArtifacts=new Set((governance?.governanceArtifactUses??[]).map(item=>item.artifactName));
for(const name of ["Outcome Card","Bet Card","Outcome Board","Evidence Map","Learning Card","Decision Log"]){if(!govArtifacts.has(name))errors.push(`governance: missing reused artifact ${name}`)}
if((governance?.governanceTooling??[]).some(item=>item.validationStatus!=="pending"||!["SOURCE RECOMMENDATION","H1 / TO VALIDATE","CURRENT STATE"].includes(item.classification)))errors.push("governance: tooling promoted beyond source status");
if((governance?.antiPatternAssessments??[]).length!==11)errors.push("governance: anti-pattern assessment incomplete");
const governanceValidations=new Set([...(governance?.clientValidations??[]),...(governance?.sections??[]).flatMap(section=>section.clientValidations??[])].map(item=>item.id));
for(const id of ["CL-04","CL-05","CL-07","CL-09","CL-10","CL-11","CL-12","CL-13","CL-18"]){if(!governanceValidations.has(id))errors.push(`governance: missing contextual ${id}`)}
const governanceMaturity=governance?.sections?.find(section=>/Maturity|madurez/i.test(section.title));
if(!governanceMaturity?.clientValidations?.some(item=>item.id==="CL-18"&&/Valoración del assessment/i.test(item.subject)))errors.push("governance: maturity assessment requires pending validation context");
const wave7ModelText=JSON.stringify({candidate:northStar?.operatingConcepts,metrics:northStar?.metricDefinitions,governance:governance?.governanceMechanisms,escalation:governance?.escalationRules,tooling:governance?.governanceTooling});
if(/official SEIF KPI|approved North Star|validated corporate metric|approved committee|mandatory Jira workflow|custom field|allocation percentage|numerical WIP limit|approved authority/i.test(wave7ModelText))errors.push("Wave 7: unsupported approval, tooling, capacity, WIP or authority claim detected");

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
console.log(`Content validation passed: ${allSlugs.length} chapters/routes, ${blockAFiles.length} Block A + ${blockBWave1Files.length} Block B Wave 1 + ${blockBWave2Files.length} Block B Wave 2 + ${blockBWave3Files.length} Block B Wave 3 + ${blockBWave4Files.length} Block B Wave 4 + ${blockBWave5Files.length} Block B Wave 5 + ${blockBWave6Files.length} Block B Wave 6 + ${blockBWave7Files.length} Block B Wave 7 ingested, ${infographicAssets.length} infographics, 0 internal broken links.`);
console.log(`Wave 1 source coverage: Chapter 10 ${JSON.stringify(ch10Volume)}; Chapter 11 ${JSON.stringify(ch11Volume)}.`);
console.log(`Wave 2 source coverage: Chapter 17 ${JSON.stringify(ch17Volume)}; Chapter 20 ${JSON.stringify(ch20Volume)}.`);
console.log(`Wave 3 source coverage: Chapter 12 ${JSON.stringify(ch12Volume)}.`);
console.log(`Wave 4 source coverage: Chapter 13 ${JSON.stringify(ch13Volume)}.`);
console.log(`Wave 5 source coverage: Chapter 14 ${JSON.stringify(ch14Volume)}.`);
console.log(`Wave 6 source coverage: Chapter 15 ${JSON.stringify(ch15Volume)}; Chapter 16 ${JSON.stringify(ch16Volume)}.`);
console.log(`Wave 7 source coverage: Chapter 18 ${JSON.stringify(ch18Volume)}; Chapter 19 ${JSON.stringify(ch19Volume)}.`);
console.log(`Evidence counts: E1=${evidenceCounts.E1}, E2=${evidenceCounts.E2}, E3=${evidenceCounts.E3}, H1=${evidenceCounts.H1}, UNREVIEWED CLAIMS=${evidenceCounts.unreviewedClaims}, STRUCTURAL MARKERS=${evidenceCounts.structuralMarkers}, PENDING VALIDATION=${evidenceCounts.pendingValidation}.`);
