import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft,ChevronRight } from "lucide-react";
import { chapters,chapterBySlug } from "@/content/chapters";
import { infographicsFor } from "@/content/infographics";
import { Callout } from "@/components/callout";
import { ContentBlocks } from "@/components/content-blocks";
import { Flow } from "@/components/flow";
import { Infographic } from "@/components/infographic";
import { PageTools } from "@/components/page-tools";

const structuralMarkerStatements=new Set(["Evidencia","Interpretación","Recomendación","Evidencia SRE","Evidencia Customer Success"]);

export function generateStaticParams(){return chapters.map(chapter=>({slug:chapter.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params,chapter=chapterBySlug(slug);
  return chapter?{title:chapter.title,description:chapter.summary}:{};
}

export default async function ChapterPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params,chapter=chapterBySlug(slug);
  if(!chapter)notFound();
  const index=chapters.indexOf(chapter),previous=chapters[index-1],next=chapters[index+1];
  return <div className="chaptergrid"><article className="chapter">
    <nav className="breadcrumbs"><Link href="/">Inicio</Link><span>/</span><span>{chapter.group}</span><span>/</span><b>{chapter.title}</b></nav>
    <header className="chapterhead"><p className="kicker">{chapter.eyebrow}</p><h1>{chapter.title}</h1><p>{chapter.summary}</p><div className="meta"><span>v0.1</span><span>Actualizado 19 ago 2026</span><span>{index<9?"Contenido fuente estructurado":"Lectura · 4 min"}</span></div></header>
    {chapter.editorialNotices?.map(notice=><aside className="editorialnotice" key={`${notice.title}-${notice.status}`} role="note"><div><strong>{notice.title}</strong><p>{notice.detail}</p></div><span>{notice.status}</span></aside>)}
    {chapter.clientValidations?.map(validation=><aside className="clientvalidation" key={validation.id} role="note"><b>{validation.id} · {validation.subject}</b><span>{validation.status}</span></aside>)}
    <Callout title="Executive takeaway">{chapter.takeaway}</Callout>
    {chapter.executive&&<section className="executivelayer" aria-labelledby="executive-layer-title">
      <div className="layerhead"><span>EXECUTIVE LAYER</span><h2 id="executive-layer-title">Lectura ejecutiva</h2></div>
      <div className="executivegrid"><div><h3>Key findings</h3><ul>{chapter.executive.keyFindings.map(finding=><li key={finding}>{finding}</li>)}</ul></div><div><h3>Implicación</h3><p>{chapter.executive.implication}</p><p className={`evidencestatus status-${chapter.executive.evidenceStatus}`}><b>Evidence status</b><span>{chapter.executive.evidenceConfidence} · {chapter.executive.evidenceStatus}</span></p><details className="sourcerefs"><summary>Source reference</summary>{chapter.executive.sources.map(source=><p key={source.locator}>{source.title} · {source.locator}</p>)}</details></div></div>
    </section>}
    {infographicsFor(chapter.slug).map(graphic=><Infographic key={graphic.src} {...graphic} relatedSection="Resumen"/>)}
    {chapter.executive&&<div className="deepdividelabel"><span>DEEP DIVE</span><p>Evidencia, diagnóstico, detalle y artefactos de la fuente.</p></div>}
    {chapter.sections.map((section,sectionIndex)=><section id={section.id} className="docsection" key={section.id}><span className="sectionnum">{String(sectionIndex+1).padStart(2,"0")}</span><div>
      <h2>{section.title}<a className="anchor" href={`#${section.id}`} aria-label={`Enlace a ${section.title}`}>#</a></h2>{section.contentClass&&<span className={`contentclass class-${section.contentClass}`}>{section.contentClass.replaceAll("-"," ")}</span>}
      {section.blocks?<ContentBlocks blocks={section.blocks}/>:section.kind&&section.kind!=="default"?<Callout kind={section.kind} title={section.kind==="evidence"?"Evidencia / lectura":"Punto clave"}><p>{section.body}</p>{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}</Callout>:<><p>{section.body}</p>{section.bullets&&<ul className={section.visual==="cards"?"bulletcards":""}>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}</>}
      {section.visual==="flow"&&section.body&&<Flow text={section.body}/>}
      {section.impactSemantics&&<aside className="impactsemantics" role="note"><b>WASTE IMPACT SEMANTICS</b><div>{section.impactSemantics.map(value=><span className={`impact-${value.toLowerCase().replaceAll(" ","-")}`} key={value}>{value}</span>)}</div>{section.impactValidationStatus==="pending"&&<small>PENDING VALIDATION</small>}</aside>}
      {section.evidence&&section.evidence.length>0&&<details className="evidencedetails"><summary>Evidencia y trazabilidad ({section.evidence.filter(evidence=>!structuralMarkerStatements.has(evidence.statement)).length} claims · {section.evidence.filter(evidence=>structuralMarkerStatements.has(evidence.statement)).length} structural markers)</summary><div>{section.evidence.map(evidence=>{const structural=structuralMarkerStatements.has(evidence.statement);return <article className={structural?"structuralmarker":undefined} key={evidence.id}><header><b>{evidence.sourceMark?`[${evidence.sourceMark}]`:"SOURCE MARK —"}</b><span>{structural?"STRUCTURAL MARKER":evidence.classification??"PENDING EVIDENCE REVIEW"}</span><small>{structural?"EXCLUDED FROM CLAIM COUNTS":`${evidence.confidence} · ${evidence.validationStatus}`}</small></header><p>{evidence.statement}</p>{!structural&&evidence.classification===null&&<em>PENDING EVIDENCE REVIEW</em>}<footer>{evidence.sourceArea} · {evidence.sourceLocator}</footer></article>})}</div></details>}
      {section.sources&&section.sources.length>0&&<details className="sourcerefs"><summary>Source reference</summary>{section.sources.map(source=><p key={source.locator}>{source.title} · {source.locator}</p>)}</details>}
      {infographicsFor(chapter.slug,section.id).map(graphic=><Infographic key={graphic.src} {...graphic} relatedSection={section.title}/>)}</div></section>)}
    <PageTools/>
    <div className="related"><h2>Temas relacionados</h2><div>{chapter.related.map(relatedSlug=>{const related=chapterBySlug(relatedSlug);return related&&<Link href={`/chapter/${relatedSlug}`} key={relatedSlug}>{related.title}<ChevronRight/></Link>})}</div></div>
    <nav className="prevnext">{previous?<Link href={`/chapter/${previous.slug}`}><ChevronLeft/><span><small>Anterior</small>{previous.title}</span></Link>:<span/>}{next&&<Link href={`/chapter/${next.slug}`}><span><small>Siguiente</small>{next.title}</span><ChevronRight/></Link>}</nav>
  </article><aside className="toc"><b>En esta página</b><a href="#content">Resumen</a>{chapter.sections.map(section=><a href={`#${section.id}`} key={section.id}>{section.title}</a>)}<div><span>Progreso</span><b>{index+1} / {chapters.length}</b><progress value={index+1} max={chapters.length}/></div></aside></div>;
}
