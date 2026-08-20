"use client";

import { useCallback,useMemo,useRef,useState } from "react";
import { Search,X,ArrowRight } from "lucide-react";
import Link from "next/link";
import { chapters } from "@/content/chapters";
import { glossary } from "@/content/glossary";
import { useFocusTrap } from "./use-focus-trap";

export function SearchDialog({open,onClose}:{open:boolean;onClose:()=>void}){
  const [q,setQ]=useState("");
  const inputRef=useRef<HTMLInputElement>(null);
  const dialogRef=useRef<HTMLElement>(null);
  const close=useCallback(()=>onClose(),[onClose]);
  useFocusTrap(open,dialogRef,close,inputRef);
  const results=useMemo(()=>{
    const s=q.toLowerCase().trim();
    if(!s)return {pages:chapters.slice(0,4),terms:[]};
    return {pages:chapters.filter(c=>(c.title+c.summary+c.takeaway+c.sections.map(x=>x.body??"").join(" ")).toLowerCase().includes(s)).slice(0,7),terms:glossary.filter(t=>(t.term+t.definition+t.example).toLowerCase().includes(s)).slice(0,7)};
  },[q]);
  if(!open)return null;
  return <div className="modalback" onMouseDown={close}><section ref={dialogRef} className="searchmodal" role="dialog" aria-modal="true" aria-labelledby="search-dialog-title" onMouseDown={e=>e.stopPropagation()}><h2 id="search-dialog-title" className="sr-only">Búsqueda global</h2><div className="searchinput"><Search aria-hidden="true"/><label className="sr-only" htmlFor="global-search">Buscar capítulos y conceptos</label><input id="global-search" ref={inputRef} value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar capítulos, conceptos, métricas…"/><button type="button" onClick={close} aria-label="Cerrar búsqueda"><X aria-hidden="true"/></button></div><div className="results">{results.pages.length>0&&<><h3>Capítulos</h3>{results.pages.map(c=><Link onClick={close} href={`/chapter/${c.slug}`} key={c.slug}><span><small>{c.group}</small>{c.title}</span><ArrowRight aria-hidden="true"/></Link>)}</>}{results.terms.length>0&&<><h3>Glosario</h3>{results.terms.map(t=><Link onClick={close} href={`/glossary#${t.term.toLowerCase().replaceAll(" ","-")}`} key={t.term}><span><small>Término</small>{t.term}</span><ArrowRight aria-hidden="true"/></Link>)}</>}{q&&results.pages.length+results.terms.length===0&&<p className="empty">No encontramos resultados. Prueba con “Outcome”, “Jira” o “Adoption”.</p>}</div></section></div>;
}
