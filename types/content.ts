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
export type EditorialNotice = {
  title:string;
  status:"PENDING VALIDATION"|"PENDING EVIDENCE REVIEW"|"CLIENT VALIDATION REQUIRED";
  detail:string;
};
export type ImpactSemantics = "OBSERVED IMPACT" | "INFERRED IMPACT" | "POTENTIAL RISK" | "UNREVIEWED";
export type ClientValidation = { id:"CL-01"|"CL-02"|"CL-03"; subject:string; status:"CLIENT VALIDATION REQUIRED" };
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
  impactSemantics?:ImpactSemantics[];
  impactValidationStatus?:ValidationStatus;
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
  editorialNotices?:EditorialNotice[];
  clientValidations?:ClientValidation[];
};
export type InfographicPlacement = { src:string; title:string; caption:string; chapterSlug:string; sectionId?:string };
export type GlossaryTerm = { term:string; definition:string; why:string; example:string; related:string[] };
