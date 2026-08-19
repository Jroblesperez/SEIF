export type SectionKind = "default" | "evidence" | "recommendation" | "risk" | "example" | "decision";
export type VisualKind = "flow" | "cards" | "timeline";
export type Section = { id: string; title: string; body?: string; bullets?: string[]; kind?: SectionKind; visual?: VisualKind };
export type Chapter = { slug:string; group:string; title:string; eyebrow:string; summary:string; takeaway:string; sections:Section[]; related:string[] };
export type InfographicPlacement = { src:string; title:string; caption:string; chapterSlug:string; sectionId?:string };
export type GlossaryTerm = { term:string; definition:string; why:string; example:string; related:string[] };
