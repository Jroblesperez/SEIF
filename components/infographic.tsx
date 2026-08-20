"use client";

import Image from "next/image";
import { useCallback,useRef,useState } from "react";
import { Maximize2,X } from "lucide-react";
import { useFocusTrap } from "./use-focus-trap";

export function Infographic({src,title,caption,relatedSection}:{src:string;title:string;caption:string;relatedSection:string}){
  const [open,setOpen]=useState(false);
  const dialogRef=useRef<HTMLDivElement>(null);
  const close=useCallback(()=>setOpen(false),[]);
  useFocusTrap(open,dialogRef,close);
  return <figure className="infographic"><button type="button" onClick={()=>setOpen(true)} aria-label={`Ampliar ${title}`}><Image src={src} alt={title} width={1400} height={788}/><Maximize2 aria-hidden="true"/></button><figcaption><b>{title}</b><span>{caption} · {relatedSection}</span></figcaption>{open&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={`Vista ampliada: ${title}`} ref={dialogRef} onMouseDown={close} tabIndex={-1}><button type="button" aria-label="Cerrar vista ampliada" onClick={close}><X aria-hidden="true"/></button><Image src={src} alt={title} width={1800} height={1013} onMouseDown={event=>event.stopPropagation()}/></div>}</figure>;
}
