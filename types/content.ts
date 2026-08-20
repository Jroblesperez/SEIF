export type SectionKind = "default" | "evidence" | "recommendation" | "risk" | "example" | "decision";
export type VisualKind = "flow" | "cards" | "timeline" | "maturity-heatmap" | "waste-friction" | "value-stream";
export type EvidenceClassification = "E1" | "E2" | "E3" | "H1";
export type SourceMark = "E" | "I" | "R" | "V";
export type ReviewConfidence = "high" | "medium" | "low" | "unreviewed";
export type ValidationStatus = "confirmed" | "pending" | "rejected";
export type SourceReference = { title:string; locator:string; note?:string };
export type EvidenceReference = {
  id:string;
  sourceMark:SourceMark|null;
  classification:EvidenceClassification|null;
  statement:string;
  sourceLocator:string;
  sourceArea:string;
  supports:string[];
  confidence:ReviewConfidence;
  validationStatus:ValidationStatus;
};
export type ContentTableKind = "simple" | "comparison" | "scorecard" | "maturity" | "evidence-map";
export type ContentTable = {
  id:string;
  caption:string;
  kind:ContentTableKind;
  headers:string[];
  rows:string[][];
  source:SourceReference;
  assessmentLabel?:string;
  validationStatus?:ValidationStatus;
};
export type ContentBlock =
  | { type:"paragraph"; text:string; source:SourceReference }
  | { type:"list"; items:string[]; source:SourceReference }
  | { type:"table"; table:ContentTable };
export type ContentClass = "source-fact" | "assessment-interpretation" | "recommendation" | "hypothesis" | "mixed";
export type Section = {
  id:string;
  title:string;
  body?:string;
  bullets?:string[];
  kind?:SectionKind;
  visual?:VisualKind;
  blocks?:ContentBlock[];
  evidence?:EvidenceReference[];
  sources?:SourceReference[];
  contentClass?:ContentClass;
};
export type ExecutiveLayer = {
  keyFindings:string[];
  implication:string;
  evidenceConfidence:ReviewConfidence;
  evidenceStatus:ValidationStatus;
  primaryVisual?:VisualKind;
  sources:SourceReference[];
};
export type Chapter = {
  slug:string;
  group:string;
  title:string;
  sourceTitle?:string;
  eyebrow:string;
  summary:string;
  takeaway:string;
  executive?:ExecutiveLayer;
  sections:Section[];
  related:string[];
  source?:SourceReference;
};
export type InfographicPlacement = { src:string; title:string; caption:string; chapterSlug:string; sectionId?:string };
export type GlossaryTerm = { term:string; definition:string; why:string; example:string; related:string[] };
