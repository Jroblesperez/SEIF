import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "current-state",
    "group":  "Assessment",
    "title":  "Current State / AS-IS",
    "sourceTitle":  "4. Current State / AS-IS",
    "eyebrow":  "04 · Current state",
    "summary":  "SEIF ha desarrollado capacidades relevantes, pero su aplicación y conexión end-to-end presentan variabilidad.",
    "takeaway":  "El diagnóstico describe un sistema con capacidades existentes y fricciones de conexión; no una ausencia general de capacidad.",
    "executive":  {
                      "primaryVisual":  "cards",
                      "keyFindings":  [
                                          "La orientación hacia Outcomes existe, pero su operacionalización no es uniforme.",
                                          "La demanda proviene de múltiples fuentes y no siempre usa una representación común.",
                                          "Discovery, priorización, Delivery y aprendizaje posterior al release tienen grados variables de consistencia.",
                                          "La trazabilidad end-to-end permanece distribuida."
                                      ],
                      "sources":  [
                                      {
                                          "locator":  "P717–P1120",
                                          "title":  "4. Current State / AS-IS"
                                      }
                                  ],
                      "evidenceConfidence":  "medium",
                      "implication":  "El TO-BE debe responder a las interfaces y decisiones del flujo sin reescribir el AS-IS como si ya estuviera implementado.",
                      "evidenceStatus":  "pending"
                  },
    "sections":  [
                     {
                         "id":  "diagnostico-general-del-estado-actual",
                         "title":  "Diagnóstico general del estado actual",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidencia que SEIF ya cuenta con capacidades relevantes a lo largo del ciclo de producto, incluyendo gestión de Producto, investigación y diseño UX/UI, Desarrollo, SRE, Soporte, Customer Success y Marketing. Asimismo, la organización ha incorporado conceptos de gestión orientada a resultados como Outcomes, criterios de éxito, momentos de verdad, Time to Value, adherencia y métricas DORA.",
                                            "source":  {
                                                           "locator":  "P719",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principal desafío observado no corresponde a la ausencia de estas capacidades, sino a su nivel de integración y consistencia operacional.",
                                            "source":  {
                                                           "locator":  "P720",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actualmente, el flujo mediante el cual una señal del mercado, cliente u operación se transforma en una decisión de producto, posteriormente en una solución y finalmente en valor medible no opera bajo un único sistema compartido de gestión.",
                                            "source":  {
                                                           "locator":  "P721",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia recogida muestra un modelo donde existen prácticas valiosas, pero con diferencias en mecanismos de entrada, criterios de priorización, niveles de validación, herramientas, ownership y ciclos de retroalimentación.",
                                            "source":  {
                                                           "locator":  "P722",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El estado actual puede sintetizarse de la siguiente manera:",
                                            "source":  {
                                                           "locator":  "P723",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha avanzado en la construcción de capacidades individuales de Producto, UX, Delivery, SRE, Customer Success y Marketing, pero todavía se encuentra consolidando el sistema que debe conectarlas de extremo a extremo.",
                                            "source":  {
                                                           "locator":  "P724",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta condición genera una brecha entre la madurez conceptual del modelo definido por SEIF y la madurez operacional necesaria para ejecutarlo de forma consistente.",
                                            "source":  {
                                                           "locator":  "P725",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P718",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "vista-as-is-del-flujo-de-valor",
                         "title":  "Vista AS-IS del flujo de valor",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "A partir de las entrevistas, el flujo actual se reconstruye conceptualmente así:",
                                            "source":  {
                                                           "locator":  "P728",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuentes de demanda y señales",
                                            "source":  {
                                                           "locator":  "P729",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clientes · Customer Success · Soporte · Marketing · Liderazgo · Producto · Tecnología · Datos",
                                            "source":  {
                                                           "locator":  "P730",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P731",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Identificación de necesidad / iniciativa",
                                            "source":  {
                                                           "locator":  "P732",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto recibe y analiza diferentes necesidades, solicitudes y oportunidades.",
                                            "source":  {
                                                           "locator":  "P733",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P734",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery / entendimiento",
                                            "source":  {
                                                           "locator":  "P735",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto y UX realizan actividades de investigación, entendimiento, prototipado y validación dependiendo de la naturaleza de la iniciativa.",
                                            "source":  {
                                                           "locator":  "P736",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P737",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Priorización",
                                            "source":  {
                                                           "locator":  "P738",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se consideran variables relacionadas con necesidades de clientes, alcance, utilización, prioridades, capacidad y restricciones técnicas.",
                                            "source":  {
                                                           "locator":  "P739",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P740",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery",
                                            "source":  {
                                                           "locator":  "P741",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo recibe las iniciativas, analiza requerimientos, dependencias y capacidad y ejecuta la construcción.",
                                            "source":  {
                                                           "locator":  "P742",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P743",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release / operación",
                                            "source":  {
                                                           "locator":  "P744",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo y SRE intervienen en el proceso de puesta en producción, estabilidad y operación.",
                                            "source":  {
                                                           "locator":  "P745",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P746",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Uso / acompañamiento",
                                            "source":  {
                                                           "locator":  "P747",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success acompaña al cliente y observa elementos relacionados con implementación, utilización y adopción.",
                                            "source":  {
                                                           "locator":  "P748",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte atiende incidencias, consultas y dificultades operativas.",
                                            "source":  {
                                                           "locator":  "P749",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P750",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback",
                                            "source":  {
                                                           "locator":  "P751",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto recibe señales provenientes de clientes, Customer Success, Soporte, UX, Marketing, datos y operación.",
                                            "source":  {
                                                           "locator":  "P752",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P753",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nueva decisión",
                                            "source":  {
                                                           "locator":  "P754",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El aprendizaje vuelve hacia Producto mediante distintos mecanismos.",
                                            "source":  {
                                                           "locator":  "P755",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ciclo existe.",
                                            "source":  {
                                                           "locator":  "P756",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principal hallazgo AS-IS se encuentra en las transiciones entre sus etapas.",
                                            "source":  {
                                                           "locator":  "P757",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P727",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "estrategia-y-orientacion-de-producto",
                         "title":  "Estrategia y orientación de Producto",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P760",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha definido explícitamente una evolución desde una lógica centrada en tareas y funcionalidades hacia una lógica centrada en valor y Outcomes.",
                                            "source":  {
                                                           "locator":  "P761",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo actual incorpora:",
                                            "source":  {
                                                           "locator":  "P762",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcomes;",
                                                          "criterios de éxito;",
                                                          "momentos de verdad;",
                                                          "Time to Value;",
                                                          "adherencia;",
                                                          "journeys;",
                                                          "reglas de negocio;",
                                                          "indicadores de producto;",
                                                          "métricas DORA."
                                                      ],
                                            "source":  {
                                                           "locator":  "P763",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta definición representa una evolución relevante respecto de una gestión tradicional basada únicamente en entrega de funcionalidades.",
                                            "source":  {
                                                           "locator":  "P772",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas evidencian, sin embargo, que la aplicación de estos conceptos todavía no alcanza el mismo nivel de consistencia en todas las iniciativas y equipos.",
                                            "source":  {
                                                           "locator":  "P773",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P774",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe una diferencia entre el modelo conceptual definido y el modelo operativo ejecutado.",
                                            "source":  {
                                                           "locator":  "P775",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF tiene claridad creciente respecto de qué significa gestionar Producto por resultados, pero aún se encuentra convirtiendo esos conceptos en:",
                                            "source":  {
                                                           "locator":  "P776",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "decisiones recurrentes;",
                                                          "responsabilidades;",
                                                          "métricas operativas;",
                                                          "mecanismos de priorización;",
                                                          "criterios de avance;",
                                                          "comportamientos consistentes entre células."
                                                      ],
                                            "source":  {
                                                           "locator":  "P777",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P783",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible, evolucionando hacia Nivel 3 — Definido.",
                                            "source":  {
                                                           "locator":  "P784",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El conocimiento y varias prácticas existen. El desafío se encuentra en su institucionalización.",
                                            "source":  {
                                                           "locator":  "P785",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P759",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "gestion-de-demanda-e-iniciativas",
                         "title":  "Gestión de demanda e iniciativas",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P788",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran que las necesidades de Producto pueden originarse desde diferentes puntos de la organización y del ecosistema del cliente.",
                                            "source":  {
                                                           "locator":  "P789",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entre las fuentes identificadas se encuentran:",
                                            "source":  {
                                                           "locator":  "P790",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "clientes;",
                                                          "Customer Success;",
                                                          "Soporte;",
                                                          "Marketing;",
                                                          "Producto;",
                                                          "liderazgo;",
                                                          "necesidades técnicas;",
                                                          "información de utilización."
                                                      ],
                                            "source":  {
                                                           "locator":  "P791",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La existencia de múltiples fuentes es consistente con una organización SaaS que necesita escuchar mercado, clientes, operación y tecnología.",
                                            "source":  {
                                                           "locator":  "P799",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La variabilidad aparece en cómo estas señales son capturadas, estructuradas y llevadas hacia una decisión común.",
                                            "source":  {
                                                           "locator":  "P800",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX señaló la existencia de múltiples formas mediante las cuales pueden llegar solicitudes hacia Desarrollo.",
                                            "source":  {
                                                           "locator":  "P801",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto también gestiona información procedente de distintas fuentes.",
                                            "source":  {
                                                           "locator":  "P802",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P803",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF cuenta con un ecosistema rico de señales, pero el intake de oportunidades se encuentra distribuido.",
                                            "source":  {
                                                           "locator":  "P804",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto dificulta que todas las demandas puedan compararse utilizando una representación homogénea de:",
                                            "source":  {
                                                           "locator":  "P805",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "problema + evidencia + usuario + impacto + outcome esperado.",
                                            "source":  {
                                                           "locator":  "P806",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El riesgo observado no es falta de ideas.",
                                            "source":  {
                                                           "locator":  "P807",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es competencia entre señales que llegan con diferentes niveles de información y urgencia.",
                                            "source":  {
                                                           "locator":  "P808",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P809",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P810",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entradas son conocidas y gestionadas, pero no se evidencia todavía un mecanismo transversal consolidado.",
                                            "source":  {
                                                           "locator":  "P811",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P787",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "product-discovery",
                         "title":  "Product Discovery",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P814",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas confirman que SEIF realiza actividades de Discovery.",
                                            "source":  {
                                                           "locator":  "P815",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto participa en entendimiento de necesidades y problemas.",
                                            "source":  {
                                                           "locator":  "P816",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX/UI reportó prácticas de:",
                                            "source":  {
                                                           "locator":  "P817",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "investigación;",
                                                          "entrevistas;",
                                                          "análisis de problemáticas;",
                                                          "prototipado;",
                                                          "construcción de MVP;",
                                                          "validación con clientes."
                                                      ],
                                            "source":  {
                                                           "locator":  "P818",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, Discovery no es una capacidad ausente en SEIF.",
                                            "source":  {
                                                           "locator":  "P824",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La diferencia se encuentra en su aplicación.",
                                            "source":  {
                                                           "locator":  "P825",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las iniciativas necesariamente recorren el mismo nivel de Discovery ni existe evidencia de un estándar mínimo transversal aplicado consistentemente antes de comprometer capacidad de Desarrollo.",
                                            "source":  {
                                                           "locator":  "P826",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También se identificaron casos donde la retroalimentación sobre una solución puede producirse significativamente después de su concepción o construcción.",
                                            "source":  {
                                                           "locator":  "P827",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P828",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad de Discovery se encuentra presente pero parcialmente sistematizada.",
                                            "source":  {
                                                           "locator":  "P829",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe conocimiento y experiencia para validar antes de desarrollar, pero la práctica depende todavía del contexto de la iniciativa y de la participación de los diferentes actores.",
                                            "source":  {
                                                           "locator":  "P830",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto genera variabilidad en la cantidad de incertidumbre que llega a Delivery.",
                                            "source":  {
                                                           "locator":  "P831",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P832",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P833",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P813",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "ux-ui-y-validacion-de-experiencia",
                         "title":  "UX/UI y validación de experiencia",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P836",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX/UI participa en investigación, diseño y validación de soluciones.",
                                            "source":  {
                                                           "locator":  "P837",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La utilización de prototipos constituye una capacidad positiva del modelo actual porque permite materializar conceptos antes de completar el desarrollo.",
                                            "source":  {
                                                           "locator":  "P838",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas también evidencian que la participación de UX puede variar dependiendo de la iniciativa y de la dinámica de las células.",
                                            "source":  {
                                                           "locator":  "P839",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El acceso al feedback posterior a la entrega depende parcialmente de mecanismos y actores como Customer Success.",
                                            "source":  {
                                                           "locator":  "P840",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P841",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX dispone de capacidades para actuar antes del desarrollo, reduciendo incertidumbre sobre la experiencia propuesta.",
                                            "source":  {
                                                           "locator":  "P842",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, todavía no existe una conexión uniforme entre:",
                                            "source":  {
                                                           "locator":  "P843",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "problema → journey → prototipo → validación → construcción → observación del comportamiento real.",
                                            "source":  {
                                                           "locator":  "P844",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La principal brecha no corresponde a capacidad de diseño, sino a la integración sistemática de UX en el ciclo completo de aprendizaje de Producto.",
                                            "source":  {
                                                           "locator":  "P845",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P846",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible, con capacidades cercanas a Nivel 3 en prácticas específicas.",
                                            "source":  {
                                                           "locator":  "P847",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P835",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "priorizacion-y-toma-de-decisiones",
                         "title":  "Priorización y toma de decisiones",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P850",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas evidencian que SEIF sí utiliza criterios para decidir sobre iniciativas.",
                                            "source":  {
                                                           "locator":  "P851",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto considera elementos asociados con:",
                                            "source":  {
                                                           "locator":  "P852",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "clientes;",
                                                          "alcance;",
                                                          "utilización;",
                                                          "necesidades;",
                                                          "prioridad."
                                                      ],
                                            "source":  {
                                                           "locator":  "P853",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo incorpora variables relacionadas con:",
                                            "source":  {
                                                           "locator":  "P858",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "capacidad;",
                                                          "dependencias;",
                                                          "viabilidad técnica."
                                                      ],
                                            "source":  {
                                                           "locator":  "P859",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto demuestra que la priorización no ocurre de manera completamente arbitraria.",
                                            "source":  {
                                                           "locator":  "P862",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, los criterios se encuentran distribuidos entre diferentes actores y momentos del proceso.",
                                            "source":  {
                                                           "locator":  "P863",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P864",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF cuenta con criterios de priorización, pero no se evidencia todavía un sistema único de decisión suficientemente explícito y repetible.",
                                            "source":  {
                                                           "locator":  "P865",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Como consecuencia, la prioridad puede depender de la combinación de:",
                                            "source":  {
                                                           "locator":  "P866",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "impacto percibido + urgencia + cliente + capacidad + contexto organizacional.",
                                            "source":  {
                                                           "locator":  "P867",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El riesgo asociado es pérdida de foco y dificultad para explicar consistentemente:",
                                            "source":  {
                                                           "locator":  "P868",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "por qué una iniciativa recibe capacidad antes que otra.",
                                            "source":  {
                                                           "locator":  "P869",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P870",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P871",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P849",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "organizacion-por-celulas",
                         "title":  "Organización por células",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P874",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha definido células multidisciplinarias orientadas a Outcomes.",
                                            "source":  {
                                                           "locator":  "P875",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo descrito incorpora capacidades de:",
                                            "source":  {
                                                           "locator":  "P876",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto + Desarrollo + UX + SRE + Customer Success + Soporte.",
                                            "source":  {
                                                           "locator":  "P877",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Asimismo, se han definido células con orientaciones diferentes, como generación de caja y estabilidad/adopción/retención.",
                                            "source":  {
                                                           "locator":  "P878",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Conceptualmente, la estructura busca reducir silos y generar responsabilidad compartida sobre resultados.",
                                            "source":  {
                                                           "locator":  "P879",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran, sin embargo, que existen todavía variaciones en:",
                                            "source":  {
                                                           "locator":  "P880",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "participación de determinadas capacidades;",
                                                          "asignación;",
                                                          "prioridades;",
                                                          "dependencias;",
                                                          "responsabilidades;",
                                                          "interacción entre funciones."
                                                      ],
                                            "source":  {
                                                           "locator":  "P881",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P887",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La estructura de células constituye un avance organizacional, pero por sí sola no configura todavía un Operating Model completo.",
                                            "source":  {
                                                           "locator":  "P888",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La célula define quiénes participan.",
                                            "source":  {
                                                           "locator":  "P889",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema operativo todavía debe consolidar:",
                                            "source":  {
                                                           "locator":  "P890",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "cómo se decide, cómo entra el trabajo, cuándo participa cada capacidad, qué evidencia se requiere y quién responde por cada decisión.",
                                            "source":  {
                                                           "locator":  "P891",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P892",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P893",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P873",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "delivery-y-desarrollo",
                         "title":  "Delivery y Desarrollo",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P896",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo cuenta con prácticas establecidas para analizar, construir y entregar software.",
                                            "source":  {
                                                           "locator":  "P897",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La entrevista evidenció experiencia con diferentes mecanismos de organización del trabajo, incluyendo sprints, estimaciones y cambios en la forma de gestionar Delivery.",
                                            "source":  {
                                                           "locator":  "P898",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo participa además en decisiones relacionadas con:",
                                            "source":  {
                                                           "locator":  "P899",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "capacidad;",
                                                          "dependencias;",
                                                          "factibilidad;",
                                                          "asignación."
                                                      ],
                                            "source":  {
                                                           "locator":  "P900",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También se identificó percepción de retrabajo y de cambios sucesivos en las formas de trabajo.",
                                            "source":  {
                                                           "locator":  "P904",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P905",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe evidencia suficiente para concluir que el principal problema de SEIF sea la capacidad de Desarrollo.",
                                            "source":  {
                                                           "locator":  "P906",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diagnóstico apunta a una cuestión más amplia:",
                                            "source":  {
                                                           "locator":  "P907",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La eficiencia de Delivery está condicionada por la calidad, estabilidad y claridad de las decisiones que llegan desde etapas anteriores.",
                                            "source":  {
                                                           "locator":  "P908",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cambio recurrente de mecanismos de trabajo constituye además una señal de necesidad de estabilización operacional.",
                                            "source":  {
                                                           "locator":  "P909",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P910",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible, con capacidades técnicas establecidas.",
                                            "source":  {
                                                           "locator":  "P911",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P895",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "sre-confiabilidad-y-sostenibilidad-tecnica",
                         "title":  "SRE, confiabilidad y sostenibilidad técnica",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P914",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE participa en la operación, confiabilidad y sostenibilidad técnica de la plataforma.",
                                            "source":  {
                                                           "locator":  "P915",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante la entrevista se manifestó explícitamente la existencia de deuda técnica relevante.",
                                            "source":  {
                                                           "locator":  "P916",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También se identificaron operaciones o configuraciones donde el cliente mantiene dependencia de intervención de SEIF.",
                                            "source":  {
                                                           "locator":  "P917",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo conceptual de la compañía reconoce además métricas DORA y la necesidad de separar métricas de Delivery de métricas de Producto.",
                                            "source":  {
                                                           "locator":  "P918",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P919",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF cuenta con conciencia sobre la importancia de confiabilidad y capacidad de entrega.",
                                            "source":  {
                                                           "locator":  "P920",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La deuda técnica y las dependencias operativas constituyen señales relevantes porque pueden competir con capacidad destinada a evolución funcional.",
                                            "source":  {
                                                           "locator":  "P921",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe evidencia suficiente en esta fase para cuantificar el impacto financiero o de churn asociado a dicha deuda.",
                                            "source":  {
                                                           "locator":  "P922",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí existe evidencia suficiente para establecer que la sostenibilidad técnica debe formar parte de las decisiones de Producto y no tratarse únicamente como responsabilidad interna de SRE/Desarrollo.",
                                            "source":  {
                                                           "locator":  "P923",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P924",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2–3 — entre Repetible y Definido.",
                                            "source":  {
                                                           "locator":  "P925",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P913",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "soporte-y-gestion-de-friccion",
                         "title":  "Soporte y gestión de fricción",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P928",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte mantiene contacto directo con problemas, consultas e incidencias experimentadas durante el uso real del producto.",
                                            "source":  {
                                                           "locator":  "P929",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto lo convierte en una fuente relevante de señales sobre:",
                                            "source":  {
                                                           "locator":  "P930",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "errores;",
                                                          "dificultades;",
                                                          "preguntas recurrentes;",
                                                          "comportamientos inesperados;",
                                                          "potenciales problemas de experiencia."
                                                      ],
                                            "source":  {
                                                           "locator":  "P931",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La información existe como consecuencia natural de la operación.",
                                            "source":  {
                                                           "locator":  "P936",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P937",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte funciona correctamente como mecanismo de atención, pero su información tiene un segundo valor:",
                                            "source":  {
                                                           "locator":  "P938",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Intelligence.",
                                            "source":  {
                                                           "locator":  "P939",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El estado actual muestra una oportunidad para convertir de manera más sistemática los patrones de Soporte en información reutilizable para Producto, UX y Customer Success.",
                                            "source":  {
                                                           "locator":  "P940",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se trata únicamente de cerrar tickets.",
                                            "source":  {
                                                           "locator":  "P941",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se trata de distinguir entre:",
                                            "source":  {
                                                           "locator":  "P942",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "incidente individual y patrón de fricción del producto.",
                                            "source":  {
                                                           "locator":  "P943",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P944",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P945",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P927",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "customer-success-y-adopcion",
                         "title":  "Customer Success y adopción",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P948",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success participa activamente en el acompañamiento de clientes.",
                                            "source":  {
                                                           "locator":  "P949",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La entrevista evidenció atención sobre utilización y adopción, incluyendo referencias al porcentaje utilizado respecto de lo adquirido.",
                                            "source":  {
                                                           "locator":  "P950",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS también identifica necesidades, recibe solicitudes y las comunica hacia Producto.",
                                            "source":  {
                                                           "locator":  "P951",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adicionalmente, se manifestó una dependencia importante alrededor del administrador del cliente y de actividades de configuración/acompamiento.",
                                            "source":  {
                                                           "locator":  "P952",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P953",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success posee conocimiento relevante sobre el comportamiento real de las cuentas.",
                                            "source":  {
                                                           "locator":  "P954",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La principal evolución pendiente consiste en transformar ese conocimiento en un sistema más explícito de:",
                                            "source":  {
                                                           "locator":  "P955",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activación → Adopción → Adherencia → Riesgo → Acción.",
                                            "source":  {
                                                           "locator":  "P956",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia también refuerza la hipótesis de que determinadas partes de la experiencia requieren acompañamiento significativo para que el cliente pueda operar.",
                                            "source":  {
                                                           "locator":  "P957",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto convierte autonomía del cliente en una dimensión relevante del diagnóstico.",
                                            "source":  {
                                                           "locator":  "P958",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P959",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P960",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P947",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "marketing-y-conocimiento-de-mercado",
                         "title":  "Marketing y conocimiento de mercado",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P963",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing se encuentra desarrollando una función más estructurada dentro de SEIF.",
                                            "source":  {
                                                           "locator":  "P964",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La entrevista mostró interés en participar de forma más temprana en la identificación y validación de oportunidades, incluyendo la posibilidad de probar interés o tracción antes de utilizar capacidad significativa de Desarrollo.",
                                            "source":  {
                                                           "locator":  "P965",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing también representa una fuente de información sobre mercado, posicionamiento y comunicación de valor.",
                                            "source":  {
                                                           "locator":  "P966",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P967",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad de Marketing está evolucionando desde una función predominantemente comunicacional hacia una potencial capacidad de Product Marketing y Market Intelligence.",
                                            "source":  {
                                                           "locator":  "P968",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su integración temprana con Producto todavía se encuentra en construcción.",
                                            "source":  {
                                                           "locator":  "P969",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P970",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible / capacidad emergente.",
                                            "source":  {
                                                           "locator":  "P971",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P962",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "datos-metricas-y-dashboards",
                         "title":  "Datos, métricas y dashboards",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P974",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF dispone de dashboards que permiten observar, entre otros elementos:",
                                            "source":  {
                                                           "locator":  "P975",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "total de clientes;",
                                                          "licencias contratadas;",
                                                          "licencias utilizadas;",
                                                          "utilización por cliente;",
                                                          "usuarios activos;",
                                                          "usuarios con interacción;",
                                                          "proyectos activos;",
                                                          "proyectos sin uso;",
                                                          "utilización por módulo;",
                                                          "perfiles de usuario."
                                                      ],
                                            "source":  {
                                                           "locator":  "P976",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adicionalmente, el modelo metodológico de SEIF incorpora TTV, adherencia, criterios de éxito y DORA.",
                                            "source":  {
                                                           "locator":  "P986",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto demuestra que la organización ya reconoce el papel de los datos en la gestión de Producto.",
                                            "source":  {
                                                           "locator":  "P987",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P988",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha principal no es ausencia de medición.",
                                            "source":  {
                                                           "locator":  "P989",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es la transición entre:",
                                            "source":  {
                                                           "locator":  "P990",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "tener indicadores",
                                            "source":  {
                                                           "locator":  "P991",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y",
                                            "source":  {
                                                           "locator":  "P992",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "operar mediante indicadores.",
                                            "source":  {
                                                           "locator":  "P993",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards actuales permiten identificar situaciones que requieren análisis —por ejemplo, diferencias entre capacidad contratada y utilización—, pero el Product Operating System todavía debe consolidar cómo una señal desencadena:",
                                            "source":  {
                                                           "locator":  "P994",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "análisis → owner → decisión → acción → seguimiento.",
                                            "source":  {
                                                           "locator":  "P995",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Asimismo, la evidencia disponible no permite afirmar que uso sea equivalente a valor.",
                                            "source":  {
                                                           "locator":  "P996",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ese punto es crítico.",
                                            "source":  {
                                                           "locator":  "P997",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una licencia utilizada demuestra actividad.",
                                            "source":  {
                                                           "locator":  "P998",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Outcome y el criterio de éxito deben demostrar valor.",
                                            "source":  {
                                                           "locator":  "P999",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P1000",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P1001",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P973",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "tooling-y-trazabilidad",
                         "title":  "Tooling y trazabilidad",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P1004",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas evidenciaron utilización de diferentes herramientas según la función.",
                                            "source":  {
                                                           "locator":  "P1005",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto utiliza mecanismos como hojas de cálculo para parte de la gestión.",
                                            "source":  {
                                                           "locator":  "P1006",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo trabaja con sus herramientas técnicas.",
                                            "source":  {
                                                           "locator":  "P1007",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen además dashboards y mecanismos de documentación distribuidos.",
                                            "source":  {
                                                           "locator":  "P1008",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Parte de la información requiere transferencia o actualización entre diferentes espacios.",
                                            "source":  {
                                                           "locator":  "P1009",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1010",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema actual no puede atribuirse exclusivamente a la herramienta.",
                                            "source":  {
                                                           "locator":  "P1011",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fragmentación del tooling refleja parcialmente la fragmentación del propio flujo de información.",
                                            "source":  {
                                                           "locator":  "P1012",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actualmente no se evidencia una trazabilidad transversal consolidada del tipo:",
                                            "source":  {
                                                           "locator":  "P1013",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Señal → Problema → Outcome → Iniciativa → Delivery → Release → Adopción → Resultado.",
                                            "source":  {
                                                           "locator":  "P1014",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P1015",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 1–2 — Inicial / Repetible.",
                                            "source":  {
                                                           "locator":  "P1016",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1003",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "gobierno-y-ownership",
                         "title":  "Gobierno y ownership",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P1019",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones involucran diferentes actores según su naturaleza:",
                                            "source":  {
                                                           "locator":  "P1020",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Producto;",
                                                          "Desarrollo;",
                                                          "UX;",
                                                          "SRE;",
                                                          "CS;",
                                                          "liderazgo."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1021",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo de células plantea responsabilidad compartida sobre Outcomes.",
                                            "source":  {
                                                           "locator":  "P1027",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, las entrevistas muestran que todavía existen zonas donde la responsabilidad de decidir, priorizar, validar o medir puede distribuirse entre varias funciones.",
                                            "source":  {
                                                           "locator":  "P1028",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1029",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La colaboración multidisciplinaria existe como principio.",
                                            "source":  {
                                                           "locator":  "P1030",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha se encuentra en los Decision Rights.",
                                            "source":  {
                                                           "locator":  "P1031",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Responsabilidad compartida sobre el Outcome no significa responsabilidad ambigua sobre las decisiones.",
                                            "source":  {
                                                           "locator":  "P1032",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El estado actual necesita mayor claridad respecto de quién responde por:",
                                            "source":  {
                                                           "locator":  "P1033",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "seleccionar un problema;",
                                                          "priorizar una oportunidad;",
                                                          "validar una solución;",
                                                          "comprometer capacidad;",
                                                          "aceptar riesgo técnico;",
                                                          "determinar readiness;",
                                                          "evaluar adopción;",
                                                          "decidir continuar, ajustar o detener."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1034",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P1042",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P1043",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1018",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "gestion-del-cambio",
                         "title":  "Gestión del cambio",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado actual",
                                            "source":  {
                                                           "locator":  "P1046",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La entrevista con Desarrollo mostró antecedentes de cambios en metodologías, estructuras y mecanismos de gestión del trabajo.",
                                            "source":  {
                                                           "locator":  "P1047",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto constituye evidencia relevante para el diseño futuro.",
                                            "source":  {
                                                           "locator":  "P1048",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1049",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF presenta una sensibilidad organizacional al cambio de modelo.",
                                            "source":  {
                                                           "locator":  "P1050",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El riesgo no es resistencia explícita a mejorar.",
                                            "source":  {
                                                           "locator":  "P1051",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El riesgo es introducir simultáneamente demasiadas prácticas y provocar una nueva etapa de transición antes de que la anterior se estabilice.",
                                            "source":  {
                                                           "locator":  "P1052",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El futuro Operating System deberá considerar esta condición como una restricción real del diseño.",
                                            "source":  {
                                                           "locator":  "P1053",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado de madurez preliminar",
                                            "source":  {
                                                           "locator":  "P1054",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P1055",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1045",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "assessment-consolidado-de-madurez-as-is",
                         "title":  "Assessment consolidado de madurez AS-IS",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La escala utilizada es:",
                                            "source":  {
                                                           "locator":  "P1058",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1 — Inicial2 — Repetible3 — Definido4 — Gestionado5 — Optimizado",
                                            "source":  {
                                                           "locator":  "P1059",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-008",
                                                          "caption":  "Assessment consolidado de madurez AS-IS",
                                                          "kind":  "maturity",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Estado actual",
                                                                          "Madurez",
                                                                          "Hallazgo",
                                                                          "Riesgo principal"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Estrategia de Producto",
                                                                           "Orientación hacia Outcomes definida",
                                                                           "2–3",
                                                                           "Concepto más avanzado que operacionalización",
                                                                           "Quedar en lenguaje sin cambiar decisiones"
                                                                       ],
                                                                       [
                                                                           "Demand / Intake",
                                                                           "Múltiples fuentes",
                                                                           "2",
                                                                           "Señales no homogéneas",
                                                                           "Pérdida de foco"
                                                                       ],
                                                                       [
                                                                           "Discovery",
                                                                           "Prácticas existentes",
                                                                           "2",
                                                                           "Aplicación variable",
                                                                           "Construir con incertidumbre"
                                                                       ],
                                                                       [
                                                                           "UX / Validación",
                                                                           "Capacidad existente",
                                                                           "2–3",
                                                                           "Integración variable",
                                                                           "Feedback tardío"
                                                                       ],
                                                                       [
                                                                           "Priorización",
                                                                           "Criterios existentes",
                                                                           "2",
                                                                           "Criterios distribuidos",
                                                                           "Competencia de prioridades"
                                                                       ],
                                                                       [
                                                                           "Células",
                                                                           "Modelo multidisciplinario",
                                                                           "2",
                                                                           "Falta completar reglas operativas",
                                                                           "Ownership difuso"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "Prácticas establecidas",
                                                                           "2",
                                                                           "Necesidad de estabilidad e interfaces claras",
                                                                           "Retrabajo"
                                                                       ],
                                                                       [
                                                                           "SRE / Reliability",
                                                                           "Capacidad existente",
                                                                           "2–3",
                                                                           "Deuda técnica reconocida",
                                                                           "Presión sobre sostenibilidad"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Gestión operativa existente",
                                                                           "2",
                                                                           "Señales no plenamente convertidas en aprendizaje",
                                                                           "Repetición de fricciones"
                                                                       ],
                                                                       [
                                                                           "Customer Success",
                                                                           "Acompañamiento y adopción",
                                                                           "2",
                                                                           "Información valiosa poco sistematizada",
                                                                           "Churn silencioso / dependencia"
                                                                       ],
                                                                       [
                                                                           "Marketing",
                                                                           "Capacidad en evolución",
                                                                           "2",
                                                                           "Integración temprana emergente",
                                                                           "Mercado entra tarde al ciclo"
                                                                       ],
                                                                       [
                                                                           "Analytics",
                                                                           "Dashboards existentes",
                                                                           "2",
                                                                           "Falta cerrar indicador → acción",
                                                                           "Reporting sin decisión"
                                                                       ],
                                                                       [
                                                                           "Tooling",
                                                                           "Ecosistema distribuido",
                                                                           "1–2",
                                                                           "Trazabilidad fragmentada",
                                                                           "Reprocesos / pérdida de contexto"
                                                                       ],
                                                                       [
                                                                           "Governance",
                                                                           "Decisiones distribuidas",
                                                                           "2",
                                                                           "Decision Rights no suficientemente explícitos",
                                                                           "Lentitud / ambigüedad"
                                                                       ],
                                                                       [
                                                                           "Change Management",
                                                                           "Experiencia con múltiples cambios",
                                                                           "2",
                                                                           "Necesidad de estabilización",
                                                                           "Fatiga de cambio"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T8",
                                                                         "title":  "4. Current State / AS-IS"
                                                                     },
                                                          "assessmentLabel":  "Valoración del assessment — pendiente de validación",
                                                          "validationStatus":  "pending"
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1057",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "heatmap-ejecutivo",
                         "title":  "Heatmap ejecutivo",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El AS-IS no muestra una organización en Nivel 1 generalizado.",
                                            "source":  {
                                                           "locator":  "P1062",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tampoco muestra todavía un Operating Model Nivel 3 completamente definido.",
                                            "source":  {
                                                           "locator":  "P1063",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La concentración se encuentra en Nivel 2 — Repetible, con determinadas capacidades acercándose a Nivel 3.",
                                            "source":  {
                                                           "locator":  "P1064",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto significa que SEIF:",
                                            "source":  {
                                                           "locator":  "P1065",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ya sabe hacer muchas de las prácticas necesarias, pero todavía depende de contexto, personas y mecanismos diferentes para ejecutarlas.",
                                            "source":  {
                                                           "locator":  "P1066",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La transición relevante no es:",
                                            "source":  {
                                                           "locator":  "P1067",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 → más procesos.",
                                            "source":  {
                                                           "locator":  "P1068",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es:",
                                            "source":  {
                                                           "locator":  "P1069",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 → pocas prácticas comunes, repetibles y medibles → Nivel 3.",
                                            "source":  {
                                                           "locator":  "P1070",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1061",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "desperdicios-lean-identificados",
                         "title":  "Desperdicios Lean identificados",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas permiten identificar cinco tipos de desperdicio sin necesidad de inferir causas no demostradas.",
                                            "source":  {
                                                           "locator":  "P1073",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Handoffs",
                                            "source":  {
                                                           "locator":  "P1074",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Información que debe moverse entre Producto, UX, Desarrollo, CS y otras funciones.",
                                            "source":  {
                                                           "locator":  "P1075",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Reprocesamiento",
                                            "source":  {
                                                           "locator":  "P1076",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Necesidad de aclarar, reformular o trasladar información durante el ciclo.",
                                            "source":  {
                                                           "locator":  "P1077",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Espera de feedback",
                                            "source":  {
                                                           "locator":  "P1078",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validaciones o retroalimentaciones que pueden ocurrir tarde respecto del momento en que se tomó la decisión.",
                                            "source":  {
                                                           "locator":  "P1079",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Context switching",
                                            "source":  {
                                                           "locator":  "P1080",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Múltiples fuentes de demanda compitiendo por capacidad.",
                                            "source":  {
                                                           "locator":  "P1081",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Knowledge fragmentation",
                                            "source":  {
                                                           "locator":  "P1082",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Información distribuida entre personas, herramientas y funciones.",
                                            "source":  {
                                                           "locator":  "P1083",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe todavía evidencia suficiente para cuantificar financieramente estos desperdicios.",
                                            "source":  {
                                                           "locator":  "P1084",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí existe evidencia para considerarlos objetivos de optimización del futuro Operating Model.",
                                            "source":  {
                                                           "locator":  "P1085",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1072",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "deuda-identificada",
                         "title":  "Deuda identificada",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment permite separar diferentes tipos de deuda.",
                                            "source":  {
                                                           "locator":  "P1088",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-009",
                                                          "caption":  "Deuda identificada",
                                                          "kind":  "evidence-map",
                                                          "headers":  [
                                                                          "Tipo",
                                                                          "Evidencia AS-IS"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Deuda técnica",
                                                                           "Reconocida explícitamente por SRE"
                                                                       ],
                                                                       [
                                                                           "Deuda operativa",
                                                                           "Dependencias e intervención para determinadas operaciones"
                                                                       ],
                                                                       [
                                                                           "Deuda organizacional",
                                                                           "Cambios sucesivos de formas de trabajo y reglas variables"
                                                                       ],
                                                                       [
                                                                           "Deuda de producto",
                                                                           "Hipótesis asociada a complejidad/dependencias; requiere trazabilidad adicional"
                                                                       ],
                                                                       [
                                                                           "Deuda de conocimiento",
                                                                           "Información distribuida entre áreas y herramientas"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T9",
                                                                         "title":  "4. Current State / AS-IS"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La separación es importante porque no toda fricción debe resolverse con Desarrollo.",
                                            "source":  {
                                                           "locator":  "P1089",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1087",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-del-value-stream-as-is",
                         "title":  "Diagnóstico del Value Stream AS-IS",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evaluación end-to-end permite identificar cuatro zonas principales de fricción:",
                                            "source":  {
                                                           "locator":  "P1092",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Zona 1 — Signal → Decision",
                                            "source":  {
                                                           "locator":  "P1093",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen muchas señales y criterios, pero falta convergencia.",
                                            "source":  {
                                                           "locator":  "P1094",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Zona 2 — Decision → Delivery",
                                            "source":  {
                                                           "locator":  "P1095",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery y validación existen, pero el nivel de evidencia que llega a Desarrollo puede variar.",
                                            "source":  {
                                                           "locator":  "P1096",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Zona 3 — Release → Value",
                                            "source":  {
                                                           "locator":  "P1097",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El release está claramente identificado; la demostración sistemática de adopción y adherencia todavía está evolucionando.",
                                            "source":  {
                                                           "locator":  "P1098",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Zona 4 — Value → Learning",
                                            "source":  {
                                                           "locator":  "P1099",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los datos y feedback existen, pero están distribuidos entre múltiples funciones.",
                                            "source":  {
                                                           "locator":  "P1100",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas cuatro interfaces explican buena parte de los hallazgos observados sin atribuir el problema a un área específica.",
                                            "source":  {
                                                           "locator":  "P1101",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1091",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-final-del-current-state",
                         "title":  "Diagnóstico final del Current State",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El AS-IS permite establecer la siguiente conclusión:",
                                            "source":  {
                                                           "locator":  "P1104",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF cuenta con las capacidades fundamentales necesarias para operar como una organización de Producto orientada a Outcomes, pero dichas capacidades presentan diferentes niveles de madurez y todavía no funcionan bajo un sistema end-to-end suficientemente estandarizado.",
                                            "source":  {
                                                           "locator":  "P1105",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización no requiere reconstruir su modelo desde cero.",
                                            "source":  {
                                                           "locator":  "P1106",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Requiere conectar, simplificar y estabilizar lo que ya existe.",
                                            "source":  {
                                                           "locator":  "P1107",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principal gap se encuentra entre:",
                                            "source":  {
                                                           "locator":  "P1108",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Modelo conceptual",
                                            "source":  {
                                                           "locator":  "P1109",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcomes → TTV → Adherencia → Células → DORA",
                                            "source":  {
                                                           "locator":  "P1110",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y:",
                                            "source":  {
                                                           "locator":  "P1111",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Modelo operativo",
                                            "source":  {
                                                           "locator":  "P1112",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo entra una oportunidad?¿Qué evidencia necesita?¿Quién decide?¿Cuándo está lista para Desarrollo?¿Cuándo está lista para Release?¿Quién responde por adopción?¿Cómo sabemos que produjo valor?¿Qué decisión tomamos con ese aprendizaje?",
                                            "source":  {
                                                           "locator":  "P1113",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta brecha constituye el punto central que deberá resolver el SEIF Product Operating System.",
                                            "source":  {
                                                           "locator":  "P1114",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Conclusión AS-IS",
                                            "source":  {
                                                           "locator":  "P1116",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no tiene un problema de ausencia de prácticas. Tiene un problema de integración, consistencia y trazabilidad entre prácticas que ya existen.",
                                            "source":  {
                                                           "locator":  "P1117",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La madurez predominante es Nivel 2 — Repetible.",
                                            "source":  {
                                                           "locator":  "P1118",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El salto requerido es hacia un Nivel 3 — Definido, no mediante mayor burocracia, sino mediante un conjunto reducido de reglas compartidas que conecten:",
                                            "source":  {
                                                           "locator":  "P1119",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Señal → Evidencia → Decisión → Validación → Delivery → Release → Adopción → Aprendizaje.",
                                            "source":  {
                                                           "locator":  "P1120",
                                                           "title":  "4. Current State / AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1103",
                                             "title":  "4. Current State / AS-IS"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "findings",
                    "root-causes",
                    "value-stream"
                ],
    "source":  {
                   "title":  "4. Current State / AS-IS",
                   "locator":  "P717–P1120",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
