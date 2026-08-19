"use client";

import { RefObject, useEffect } from "react";

const focusableSelector = "a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex='-1'])";

export function useFocusTrap(open:boolean,containerRef:RefObject<HTMLElement | null>,onClose:()=>void,initialFocusRef?:RefObject<HTMLElement | null>){
  useEffect(()=>{
    if(!open)return;
    const previouslyFocused=document.activeElement instanceof HTMLElement?document.activeElement:null;
    const container=containerRef.current;
    const focusInitial=()=> (initialFocusRef?.current??container?.querySelector<HTMLElement>(focusableSelector))?.focus();
    const frame=requestAnimationFrame(focusInitial);
    const onKeyDown=(event:KeyboardEvent)=>{
      if(event.key==="Escape"){
        event.preventDefault();
        onClose();
        return;
      }
      if(event.key!=="Tab"||!container)return;
      const focusable=[...container.querySelectorAll<HTMLElement>(focusableSelector)].filter(element=>!element.hidden);
      if(focusable.length===0){event.preventDefault();container.focus();return;}
      const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    };
    document.addEventListener("keydown",onKeyDown);
    return()=>{
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown",onKeyDown);
      previouslyFocused?.focus();
    };
  },[containerRef,initialFocusRef,onClose,open]);
}
