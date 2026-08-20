import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const chapterDir=path.join(root,"content","chapters");
const errors=[];
const blockAFiles=fs.readdirSync(chapterDir).filter(name=>/^0[1-9]-.*\.ts$/.test(name)).sort();

function readChapter(file){
  const source=fs.readFileSync(path.join(chapterDir,file),"utf8");
  const match=source.match(/export const chapter = ([\s\S]+) satisfies Chapter;/);
  if(!match)throw new Error(`Cannot parse ${file}`);
  return JSON.parse(match[1]);
}

const blockA=blockAFiles.map(readChapter);
const legacySource=fs.readFileSync(path.join(chapterDir,"legacy.ts"),"utf8");
const legacySlugs=[...legacySource.matchAll(/\{slug:"([^"]+)"/g)].map(match=>match[1]);
const allSlugs=[...blockA.map(chapter=>chapter.slug),...legacySlugs];
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
console.log(`Content validation passed: ${allSlugs.length} chapters/routes, ${blockAFiles.length} ingested, ${infographicAssets.length} infographics, 0 internal broken links.`);
console.log(`Evidence counts: E1=${evidenceCounts.E1}, E2=${evidenceCounts.E2}, E3=${evidenceCounts.E3}, H1=${evidenceCounts.H1}, UNREVIEWED CLAIMS=${evidenceCounts.unreviewedClaims}, STRUCTURAL MARKERS=${evidenceCounts.structuralMarkers}, PENDING VALIDATION=${evidenceCounts.pendingValidation}.`);
