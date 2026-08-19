export type Section = { id: string; title: string; body?: string; bullets?: string[]; kind?: "default"|"evidence"|"recommendation"|"risk"|"example"|"decision"; visual?: "flow"|"cards"|"timeline" };
export type Chapter = { slug:string; group:string; title:string; eyebrow:string; summary:string; takeaway:string; sections:Section[]; related:string[] };
export type GlossaryTerm = { term:string; definition:string; why:string; example:string; related:string[] };
