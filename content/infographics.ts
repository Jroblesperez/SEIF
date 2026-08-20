import type { InfographicPlacement } from "@/types/content";

export const infographics = [
  {src:"/assets/assessment/01-executive-diagnostic.svg",title:"Diagnóstico ejecutivo",caption:"Síntesis del assessment",chapterSlug:"executive-summary"},
  {src:"/assets/assessment/02-assessment-scope.svg",title:"Alcance del assessment",caption:"Perspectivas incluidas",chapterSlug:"methodology"},
  {src:"/assets/assessment/03-current-capabilities.svg",title:"Capacidades actuales",caption:"Fortalezas sobre las cuales construir",chapterSlug:"findings"},
  {src:"/assets/assessment/04-reality-observed-iceberg.svg",title:"Realidad observada",caption:"Señales visibles y sistémicas",chapterSlug:"current-state"},
  {src:"/assets/assessment/05-root-causes.svg",title:"Causas sistémicas probables",caption:"Mapa de inferencias soportadas",chapterSlug:"root-causes"},
  {src:"/assets/assessment/06-value-stream-as-is.svg",title:"Value Stream AS-IS",caption:"Flujo actual",chapterSlug:"value-stream"},
  {src:"/assets/assessment/07-to-be-value-stream.svg",title:"Value Stream TO-BE",caption:"Hilo conductor de valor",chapterSlug:"operating-model",sectionId:"chain"},
  {src:"/assets/assessment/08-product-operating-model.svg",title:"Product Operating Model",caption:"Loop compartido",chapterSlug:"operating-model",sectionId:"loop"},
  {src:"/assets/assessment/09-what-must-change.svg",title:"Qué debe cambiar",caption:"Principios del sistema",chapterSlug:"design-principles"},
  {src:"/assets/assessment/10-north-star.svg",title:"North Star",caption:"Hipótesis y árbol de métricas",chapterSlug:"north-star",sectionId:"tree"},
  {src:"/assets/assessment/11-pilot-first.svg",title:"Pilot First",caption:"Validación antes de escalar",chapterSlug:"roadmap",sectionId:"gates"},
  {src:"/assets/assessment/12-quick-wins.svg",title:"Quick Wins",caption:"Cinco acciones iniciales",chapterSlug:"quick-wins",sectionId:"wins"},
  {src:"/assets/assessment/13-governance.svg",title:"Minimum Viable Governance",caption:"Cadencias de decisión",chapterSlug:"governance",sectionId:"cadence"},
  {src:"/assets/assessment/14-jira-architecture.svg",title:"Arquitectura Jira",caption:"Capas y trazabilidad",chapterSlug:"jira",sectionId:"layers"},
  {src:"/assets/assessment/15-roadmap-30-60-90.svg",title:"Roadmap 30 / 60 / 90",caption:"Implementación del piloto",chapterSlug:"roadmap",sectionId:"timeline"},
  {src:"/assets/assessment/16-transformation-risks.svg",title:"Riesgos de transformación",caption:"Radar y protecciones",chapterSlug:"risks",sectionId:"radar"},
  {src:"/assets/assessment/17-closing-decision.svg",title:"Decisión de cierre",caption:"Definición de éxito",chapterSlug:"definition-success"},
] satisfies readonly InfographicPlacement[];

export const infographicsFor = (chapterSlug:string,sectionId?:string) =>
  infographics.filter(item=>item.chapterSlug===chapterSlug&&item.sectionId===sectionId);
