import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "operating-model",
    "group":  "Operating Model",
    "title":  "Product Operating Model TO-BE",
    "sourceTitle":  "11. Product Operating Model TO-BE",
    "eyebrow":  "11 · Modelo propuesto",
    "summary":  "El modelo fuente conecta nueve etapas desde Signal hasta Measure \u0026 Learn; la arquitectura editorial las hace legibles dentro del loop canónico Discover, Decide, Deliver, Adopt y Learn.",
    "takeaway":  "SEIF pasa de administrar trabajo y releases a administrar problemas, decisiones, Bets, Outcomes, adopción y aprendizaje con trazabilidad end-to-end.",
    "executive":  {
                      "keyFindings":  [
                                          "El modelo fuente conserva nueve etapas operativas explícitas.",
                                          "Cada transición busca producir una decisión, un output o evidencia utilizable.",
                                          "Release inicia la validación del valor; no cierra el flujo.",
                                          "El modelo lógico precede cualquier configuración de tooling."
                                      ],
                      "implication":  "El TO-BE es una recomendación operativa. Roles, métricas, límites, cadencias, North Star y arquitectura de herramientas conservan sus validaciones abiertas.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "flow",
                      "sources":  [
                                      {
                                          "title":  "11. Product Operating Model TO-BE",
                                          "locator":  "P2737–P3567"
                                      }
                                  ]
                  },
    "operatingConcepts":  [
                              {
                                  "id":  "product-operating-model",
                                  "title":  "Product Operating Model TO-BE",
                                  "canonicalLayers":  [
                                                          "DISCOVER",
                                                          "DECIDE",
                                                          "DELIVER",
                                                          "ADOPT",
                                                          "LEARN"
                                                      ],
                                  "sourceChapters":  [
                                                         "11"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "11. Product Operating Model TO-BE",
                                                             "locator":  "P2738–P3550"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE COMPLETE",
                                                       "WHEN":  "SOURCE COMPLETE",
                                                       "INPUT":  "SOURCE COMPLETE",
                                                       "OUTPUT":  "SOURCE COMPLETE",
                                                       "ARTIFACT":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "METRIC":  "SOURCE COMPLETE",
                                                       "EXAMPLE":  "SOURCE COMPLETE",
                                                       "TOOL":  "SOURCE PARTIAL"
                                                   },
                                  "gapIds":  [
                                                 "GAP-B-01",
                                                 "GAP-B-04"
                                             ]
                              },
                              {
                                  "id":  "decision-rights",
                                  "title":  "Decision Rights",
                                  "canonicalLayers":  [
                                                          "DECIDE",
                                                          "ROLES",
                                                          "GOVERNANCE"
                                                      ],
                                  "sourceChapters":  [
                                                         "11"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "11. Product Operating Model TO-BE",
                                                             "locator":  "P3002–P3027"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE COMPLETE",
                                                       "INPUT":  "SOURCE COMPLETE",
                                                       "OUTPUT":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "ARTIFACT":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE PARTIAL",
                                                       "EXAMPLE":  "SOURCE PARTIAL"
                                                   },
                                  "gapIds":  [
                                                 "GAP-B-01",
                                                 "GAP-B-05",
                                                 "CL-04",
                                                 "CL-05"
                                             ]
                              },
                              {
                                  "id":  "north-star-candidate",
                                  "title":  "NORTH STAR CANDIDATE — Recurring Value",
                                  "canonicalLayers":  [
                                                          "STRATEGY / OUTCOMES",
                                                          "METRICS"
                                                      ],
                                  "sourceChapters":  [
                                                         "11"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "11. Product Operating Model TO-BE",
                                                             "locator":  "P3274–P3300"
                                                         }
                                                     ],
                                  "contentClass":  "hypothesis",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE PARTIAL",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "INPUT":  "SOURCE PARTIAL",
                                                       "OUTPUT":  "SOURCE PARTIAL",
                                                       "ARTIFACT":  "SOURCE PARTIAL",
                                                       "DECISION":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE PARTIAL",
                                                       "EXAMPLE":  "SOURCE PARTIAL"
                                                   },
                                  "gapIds":  [
                                                 "GAP-B-02",
                                                 "CL-06"
                                             ]
                              },
                              {
                                  "id":  "wip-management",
                                  "title":  "LIMIT WIP — numerical limit to baseline / pilot / validate",
                                  "canonicalLayers":  [
                                                          "DECIDE",
                                                          "DELIVER"
                                                      ],
                                  "sourceChapters":  [
                                                         "11"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "11. Product Operating Model TO-BE",
                                                             "locator":  "P3355–P3366"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE PARTIAL",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "INPUT":  "SOURCE PARTIAL",
                                                       "OUTPUT":  "SOURCE PARTIAL",
                                                       "ARTIFACT":  "SOURCE PARTIAL",
                                                       "DECISION":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING",
                                                       "EXAMPLE":  "SOURCE MISSING"
                                                   },
                                  "gapIds":  [
                                                 "GAP-B-06",
                                                 "CL-09"
                                             ]
                              },
                              {
                                  "id":  "logical-tooling-model",
                                  "title":  "Logical model first — tooling relationship",
                                  "canonicalLayers":  [
                                                          "TOOLING / JIRA"
                                                      ],
                                  "sourceChapters":  [
                                                         "11"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "11. Product Operating Model TO-BE",
                                                             "locator":  "P3393–P3446"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE PARTIAL",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "INPUT":  "SOURCE PARTIAL",
                                                       "OUTPUT":  "SOURCE PARTIAL",
                                                       "ARTIFACT":  "SOURCE PARTIAL",
                                                       "DECISION":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE PARTIAL",
                                                       "EXAMPLE":  "SOURCE PARTIAL"
                                                   },
                                  "gapIds":  [
                                                 "GAP-B-04",
                                                 "CL-10"
                                             ]
                              }
                          ],
    "sections":  [
                     {
                         "id":  "proposito-del-modelo",
                         "title":  "Propósito del modelo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El SEIF Product Operating Model TO-BE establece cómo la organización debe convertir una señal del mercado, cliente, operación, tecnología o datos en una decisión de inversión, una solución validada, una entrega operable, adopción y aprendizaje.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2739"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo responde directamente a los hallazgos del assessment:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2740"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "múltiples fuentes de demanda;",
                                                          "Discovery existente pero variable;",
                                                          "criterios de priorización distribuidos;",
                                                          "Decision Rights parcialmente explícitos;",
                                                          "incertidumbre trasladada hacia Delivery;",
                                                          "información fragmentada después del release;",
                                                          "dependencia operativa del cliente;",
                                                          "deuda técnica relevante;",
                                                          "métricas disponibles pero todavía no conectadas sistemáticamente con decisiones;",
                                                          "necesidad de evitar un nuevo modelo metodológico pesado."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2741–P2750"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE no reemplaza las células actuales.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2751"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tampoco introduce una nueva estructura organizacional.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2752"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Establece una forma común de operar para las células y capacidades existentes.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2753"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura propuesta es:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2754"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL → FRAME → DISCOVER → DECIDE → VALIDATE → DELIVER → RELEASE → ADOPT → MEASURE \u0026 LEARN",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2755"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "con un ciclo continuo de aprendizaje hacia nuevas decisiones.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2756"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P2738"
                                         }
                                     ]
                     },
                     {
                         "id":  "cambio-fundamental-del-modelo",
                         "title":  "Cambio fundamental del modelo",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cambio principal no consiste en modificar la metodología de Desarrollo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2759"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Consiste en cambiar la unidad mediante la cual SEIF gestiona el trabajo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2760"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AS-IS",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2761"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solicitud / Feature / Necesidad",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2762"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2763"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Análisis",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2764"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2765"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2766"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2767"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2768"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2769"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2770"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TO-BE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2771"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2772"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2773"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem / Opportunity",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2774"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2775"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2776"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2777"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2778"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2779"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hypothesis",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2780"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2781"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validation",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2782"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2783"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Smallest Valuable Solution",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2784"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2785"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2786"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2787"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2788"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2789"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Evidence",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2790"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2791"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learn / Decide",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2792"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La diferencia fundamental es que SEIF deja de administrar únicamente trabajo y comienza a administrar decisiones, hipótesis y resultados.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2793"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P2758"
                                         }
                                     ]
                     },
                     {
                         "id":  "arquitectura-del-product-operating-system",
                         "title":  "Arquitectura del Product Operating System",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Operating Model se estructura en tres grandes loops.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2796"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LOOP 1 — Opportunity",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2797"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL → FRAME → DISCOVER → DECIDE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2798"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2799"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Vale la pena resolver este problema?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2800"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2801"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evitar consumir capacidad significativa sobre problemas poco entendidos, de bajo impacto o insuficientemente respaldados.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2802"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LOOP 2 — Solution",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2804"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALIDATE → DELIVER → RELEASE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2805"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2806"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuál es la forma más económica, simple y segura de producir el resultado esperado?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2807"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2808"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reducir el riesgo de construir una solución completa antes de saber si responde al problema.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2809"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LOOP 3 — Value",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2811"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADOPT → MEASURE → LEARN",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2812"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2813"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El cliente realmente obtuvo el resultado esperado?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2814"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2815"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cerrar la distancia entre funcionalidad entregada y valor obtenido.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2816"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P2795"
                                         }
                                     ]
                     },
                     {
                         "id":  "flujo-to-be-completo",
                         "title":  "Flujo TO-BE completo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "┌─────────────────────┐",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2819"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ MARKET / CUSTOMER   │",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2820"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ CS / SUPPORT / DATA │",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2821"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ TECH / LEADERSHIP   │",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2822"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "└──────────┬──────────┘",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2823"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2824"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2825"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. SIGNAL",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2826"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2827"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2828"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. FRAME",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2829"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem / Opportunity",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2830"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2831"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2832"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. DISCOVER",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2833"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence / Outcome",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2834"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2835"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2836"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. DECIDE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2837"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explore / Prioritize /",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2838"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Wait / Discard",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2839"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2840"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2841"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. VALIDATE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2842"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototype / Experiment",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2843"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2844"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2845"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. DELIVER",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2846"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Smallest Valuable",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2847"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solution",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2848"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2849"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2850"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. RELEASE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2851"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operable / Observable",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2852"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2853"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2854"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. ADOPT",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2855"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation / Adoption",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2856"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2857"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2858"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "9. MEASURE \u0026 LEARN",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2859"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome / Evidence",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2860"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2861"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "┌─────────┴────────┐",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2862"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│                  │",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2863"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼                  ▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2864"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SCALE             ADJUST /",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2865"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "STOP",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2866"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│                  │",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2867"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "└────────┬─────────┘",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2868"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2869"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NEW DECISION",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2870"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P2818"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-1-signal",
                         "title":  "Etapa 1 — SIGNAL",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2873"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capturar señales relevantes independientemente de su origen, sin convertir automáticamente cada señal en una iniciativa de Desarrollo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2874"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuentes",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2875"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se mantienen las fuentes identificadas durante el assessment:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2876"
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
                                                          "Desarrollo;",
                                                          "SRE;",
                                                          "analytics."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2877–P2885"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Unidad de entrada",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2886"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una señal puede ser:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2887"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "solicitud;",
                                                          "feedback;",
                                                          "problema;",
                                                          "comportamiento;",
                                                          "incidente recurrente;",
                                                          "dato;",
                                                          "oportunidad;",
                                                          "riesgo;",
                                                          "necesidad técnica."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2888–P2896"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cambio TO-BE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2897"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La señal no entra directamente al backlog de Desarrollo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2898"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entra al sistema de oportunidades.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2899"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Información mínima",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2900"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuente",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2901"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quién presenta la señal",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2902"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué se observó",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2903"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "A quién afecta",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2904"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia disponible",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2905"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No requiere business case.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2906"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No requiere especificación funcional.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2907"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No requiere historia de usuario.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2908"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2909"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La función que identifica la señal puede registrarla.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2910"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto responde por su convergencia y clasificación.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2911"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P2872"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-2-frame",
                         "title":  "Etapa 2 — FRAME",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2914"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Transformar una señal en un problema u oportunidad suficientemente claro para decidir si merece investigación.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2915"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aquí ocurre uno de los cambios más importantes del modelo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2916"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se evita",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2917"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"El cliente necesita un nuevo dashboard.\"",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2918"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se busca",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2919"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"El cliente no puede determinar oportunamente X utilizando la información actualmente disponible.\"",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2920"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La primera frase prescribe una solución.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2921"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La segunda permite investigar el problema.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2922"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity Frame mínimo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2923"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada oportunidad relevante responde cinco preguntas:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2924"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-019",
                                                          "caption":  "Etapa 2 — FRAME",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Campo",
                                                                          "Pregunta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Actor",
                                                                           "¿Quién experimenta el problema?"
                                                                       ],
                                                                       [
                                                                           "Problem",
                                                                           "¿Qué no puede lograr actualmente?"
                                                                       ],
                                                                       [
                                                                           "Evidence",
                                                                           "¿Qué demuestra que existe?"
                                                                       ],
                                                                       [
                                                                           "Impact",
                                                                           "¿Qué consecuencia produce?"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "¿Qué cambio queremos generar?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "11. Product Operating Model TO-BE",
                                                                         "locator":  "T19"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2925"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2926"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participan las funciones que poseen evidencia relevante.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2927"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P2913"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-3-discover",
                         "title":  "Etapa 3 — DISCOVER",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2930"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reducir incertidumbre antes de tomar una decisión significativa de inversión.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2931"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Discovery de SEIF no se convierte en una fase extensa.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2932"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opera mediante Discovery proporcional al riesgo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2933"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 0 — No Discovery adicional",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2935"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aplica cuando:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2936"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "el problema es conocido;",
                                                          "existe evidencia suficiente;",
                                                          "el cambio es pequeño;",
                                                          "la incertidumbre es baja."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2937–P2940"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La oportunidad puede avanzar directamente a decisión.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2941"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 1 — Lightweight Discovery",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2943"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para incertidumbre moderada.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2944"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede incluir:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2945"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "revisión de datos;",
                                                          "conversación con CS/Soporte;",
                                                          "revisión de tickets;",
                                                          "entrevistas puntuales;",
                                                          "análisis del journey;",
                                                          "prototipo simple."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2946–P2951"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Discovery estructurado",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2953"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para iniciativas con:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2954"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "alta inversión;",
                                                          "nueva capacidad;",
                                                          "alta incertidumbre;",
                                                          "impacto significativo;",
                                                          "cambios relevantes en experiencia;",
                                                          "riesgo operacional."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2955–P2960"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede incorporar:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2961"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "investigación;",
                                                          "entrevistas;",
                                                          "journey;",
                                                          "prototipos;",
                                                          "experimentos;",
                                                          "validación de mercado;",
                                                          "análisis técnico."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2962–P2968"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico aplicado",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2969"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto formaliza una capacidad que SEIF ya posee, sin obligar a utilizar la misma profundidad para cada iniciativa.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2970"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P2929"
                                         }
                                     ]
                     },
                     {
                         "id":  "discovery-team",
                         "title":  "Discovery Team",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery no pertenece exclusivamente a Producto ni a UX.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2973"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La composición depende del problema.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2974"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Núcleo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2975"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto + UX",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2976"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participación contextual",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2977"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo — factibilidad.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2978"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE — riesgo, confiabilidad y deuda.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2979"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS — cliente, adopción y contexto.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2980"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte — fricción operacional.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2981"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing — mercado y posicionamiento.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2982"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todos deben asistir a todas las conversaciones.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2983"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La participación ocurre cuando la evidencia o decisión requiere su perspectiva.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2984"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P2972"
                                         }
                                     ]
                     },
                     {
                         "id":  "resultado-minimo-del-discovery",
                         "title":  "Resultado mínimo del Discovery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de avanzar hacia una decisión de inversión relevante debe existir claridad sobre:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2987"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Problem Statement",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2988"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema estamos resolviendo?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2989"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. User / Segment",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2990"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Para quién?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2991"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Evidence",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2992"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué creemos que existe?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2993"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Outcome",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2994"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué cambio esperamos generar?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2995"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Success Signal",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2996"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia indicaría que mejoró?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2997"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Key Risks",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2998"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué podría hacer falsa nuestra hipótesis?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P2999"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto constituye el Minimum Discovery Standard de SEIF.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3000"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P2986"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-4-decide",
                         "title":  "Etapa 4 — DECIDE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3003"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar dónde SEIF debe invertir capacidad.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3004"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La decisión deja de depender únicamente de quién solicita una iniciativa o de su urgencia percibida.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3005"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se consideran cinco dimensiones.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3006"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-020",
                                                          "caption":  "Etapa 4 — DECIDE",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Pregunta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Outcome",
                                                                           "¿Qué resultado relevante modifica?"
                                                                       ],
                                                                       [
                                                                           "Evidence",
                                                                           "¿Qué tan respaldado está el problema?"
                                                                       ],
                                                                       [
                                                                           "Reach",
                                                                           "¿Qué usuarios/clientes afecta?"
                                                                       ],
                                                                       [
                                                                           "Value",
                                                                           "¿Qué valor potencial genera/protege?"
                                                                       ],
                                                                       [
                                                                           "Feasibility",
                                                                           "¿Qué implica técnica y operacionalmente?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "11. Product Operating Model TO-BE",
                                                                         "locator":  "T20"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se requiere inicialmente un algoritmo matemático complejo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3007"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El propósito es hacer la conversación comparable y trazable.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3008"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3002"
                                         }
                                     ]
                     },
                     {
                         "id":  "cuatro-decisiones-posibles",
                         "title":  "Cuatro decisiones posibles",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Toda oportunidad debe terminar en una de cuatro decisiones explícitas:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3011"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EXPLORE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3012"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe potencial, pero falta evidencia.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3013"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRIORITIZE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3014"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe suficiente evidencia y valor para comprometer capacidad.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3015"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "WAIT",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3016"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es válida, pero no justifica capacidad actualmente.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3017"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCARD",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3018"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia o impacto no justifican continuar.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3019"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este punto elimina un antipatrón frecuente:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3020"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "todo lo que entra permanece indefinidamente en backlog.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3021"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un backlog no debe convertirse en un cementerio de ideas.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3022"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3010"
                                         }
                                     ]
                     },
                     {
                         "id":  "decision-rights",
                         "title":  "Decision Rights",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo establece accountability explícita sin eliminar colaboración.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3025"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-021",
                                                          "caption":  "Decision Rights",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Decisión",
                                                                          "Accountable",
                                                                          "Consultados"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Registrar señal",
                                                                           "Cualquier función",
                                                                           "—"
                                                                       ],
                                                                       [
                                                                           "Estructurar oportunidad",
                                                                           "Producto",
                                                                           "Fuente + UX/CS según contexto"
                                                                       ],
                                                                       [
                                                                           "Definir Outcome",
                                                                           "Producto",
                                                                           "Célula"
                                                                       ],
                                                                       [
                                                                           "Definir criterio de éxito",
                                                                           "Producto",
                                                                           "UX + CS + datos"
                                                                       ],
                                                                       [
                                                                           "Diseñar experiencia",
                                                                           "UX",
                                                                           "Producto + usuarios"
                                                                       ],
                                                                       [
                                                                           "Determinar factibilidad",
                                                                           "Desarrollo",
                                                                           "SRE cuando corresponda"
                                                                       ],
                                                                       [
                                                                           "Determinar riesgo operacional",
                                                                           "SRE",
                                                                           "Desarrollo + Producto"
                                                                       ],
                                                                       [
                                                                           "Priorizar inversión",
                                                                           "Producto",
                                                                           "Tech + liderazgo según impacto"
                                                                       ],
                                                                       [
                                                                           "Comprometer capacidad técnica",
                                                                           "Desarrollo / liderazgo técnico",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Determinar readiness de release",
                                                                           "Desarrollo + SRE",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Gestionar adopción",
                                                                           "CS",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Evaluar Outcome",
                                                                           "Producto",
                                                                           "CS + UX + datos"
                                                                       ],
                                                                       [
                                                                           "Continuar / ajustar / detener",
                                                                           "Producto",
                                                                           "Célula + liderazgo según impacto"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "11. Product Operating Model TO-BE",
                                                                         "locator":  "T21"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo evita tanto el silo como la responsabilidad colectiva ambigua.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3026"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3024"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo entre Head de Producto, Product Owner, Outcome Owner y domain owner",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Accountability organizacional y derechos de decisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "etapa-5-validate",
                         "title":  "Etapa 5 — VALIDATE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3029"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validar las hipótesis más riesgosas antes de construir la solución completa.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3030"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya dispone de capacidad de prototipado en UX.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3031"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE convierte esa capacidad en parte explícita del sistema.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3032"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mecanismos posibles",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3033"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Data analysis",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3034"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3035"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entrevista",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3036"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3037"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sketch / Wireframe",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3038"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3039"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototipo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3040"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3041"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototipo de alta fidelidad",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3042"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3043"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Simulación",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3044"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3045"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prueba manual",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3046"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3047"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MVP",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3048"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3049"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Software",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3050"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La selección depende de la pregunta que debe responderse.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3051"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3028"
                                         }
                                     ]
                     },
                     {
                         "id":  "uso-de-ia-y-agentes-en-validacion",
                         "title":  "Uso de IA y agentes en validación",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La IA se incorpora en esta etapa como acelerador de aprendizaje.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3054"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede utilizarse para:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3055"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "sintetizar investigación;",
                                                          "estructurar problem statements;",
                                                          "generar alternativas;",
                                                          "construir journeys preliminares;",
                                                          "producir prototipos rápidos;",
                                                          "simular flujos;",
                                                          "estructurar reglas de negocio;",
                                                          "analizar feedback;",
                                                          "agrupar patrones."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3056–P3064"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La regla del modelo es:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3065"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AI-generated ≠ Customer-validated.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3066"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un prototipo producido en horas mediante IA puede reducir drásticamente el costo de validar una idea.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3067"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero continúa siendo necesario contrastarlo con usuarios, comportamiento o evidencia real.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3068"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3053"
                                         }
                                     ]
                     },
                     {
                         "id":  "validation-review",
                         "title":  "Validation Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para iniciativas relevantes, la validación concluye con una decisión.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3071"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No con una presentación.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3072"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las opciones son:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3073"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Proceed",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3074"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia respalda continuar.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3075"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adjust",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3076"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema sigue siendo relevante, pero la solución requiere modificación.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3077"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explore More",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3078"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Persiste incertidumbre crítica.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3079"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Stop",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3080"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia no justifica inversión adicional.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3081"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto convierte el prototipo en instrumento de decisión, no en entregable de diseño.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3082"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3070"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-6-deliver",
                         "title":  "Etapa 6 — DELIVER",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3085"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Construir la menor solución capaz de producir evidencia de valor, manteniendo calidad y sostenibilidad técnica.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3086"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE no prescribe Scrum, Kanban u otra metodología específica de ejecución.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3087"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La forma interna de Desarrollo puede evolucionar independientemente siempre que respete las reglas del Product Operating System.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3088"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3084"
                                         }
                                     ]
                     },
                     {
                         "id":  "delivery-readiness",
                         "title":  "Delivery Readiness",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una iniciativa relevante puede comprometer capacidad cuando existe claridad suficiente sobre:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3091"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "problema;",
                                                          "usuario;",
                                                          "Outcome;",
                                                          "evidencia;",
                                                          "alcance inicial;",
                                                          "reglas críticas;",
                                                          "experiencia relevante;",
                                                          "riesgos conocidos;",
                                                          "criterio de éxito."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3092–P3100"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se exige documentación exhaustiva.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3101"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se exige reducción suficiente de incertidumbre.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3102"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Anti-patrón eliminado",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3103"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Empezamos a desarrollar para entender qué necesitamos.\"",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3104"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La construcción puede producir aprendizaje, pero no debe ser el mecanismo más costoso utilizado por defecto para descubrir el problema.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3105"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3090"
                                         }
                                     ]
                     },
                     {
                         "id":  "smallest-valuable-solution",
                         "title":  "Smallest Valuable Solution",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El MVP no se define como:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3108"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"una versión incompleta del producto.\"",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3109"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se define como:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3110"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "la menor solución que permite probar si podemos generar el Outcome esperado.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3111"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto obliga a diferenciar:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3112"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scope mínimo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3113"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3114"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value mínimo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3115"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una solución pequeña que no puede generar ni medir valor no constituye un experimento útil.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3116"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3107"
                                         }
                                     ]
                     },
                     {
                         "id":  "gestion-de-deuda-tecnica-dentro-de-delivery",
                         "title":  "Gestión de deuda técnica dentro de Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La deuda técnica identificada por SRE se incorpora al sistema de decisión.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3119"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las necesidades técnicas relevantes deben representarse mediante:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3120"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "riesgo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3121"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "impacto",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3122"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "urgencia",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3123"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "capacidad requerida",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3124"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "consecuencia de no actuar",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3125"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite comparar sostenibilidad técnica y evolución funcional sin reducir la deuda a \"trabajo interno de Tecnología\".",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3126"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No implica convertir toda deuda técnica en una iniciativa de Producto.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3127"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implica hacer visible su impacto sobre el sistema.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3128"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3118"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-12",
                                                       "subject":  "Política de capacidad y deuda técnica",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "etapa-7-release",
                         "title":  "Etapa 7 — RELEASE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3131"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Garantizar que una solución no solamente pueda desplegarse, sino que pueda operar y ser observada.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3132"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El release requiere tres condiciones.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3133"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technically Ready",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3134"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Construida, probada y desplegable.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3135"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operationally Ready",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3136"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE/Soporte conocen los elementos necesarios para operar y responder.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3137"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Measurably Ready",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3138"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe capacidad para observar la señal que permitirá evaluar el resultado.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3139"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico aplicado",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3140"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una funcionalidad sin instrumentación suficiente puede estar técnicamente terminada, pero deja a SEIF sin capacidad para aprender.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3141"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3130"
                                         }
                                     ]
                     },
                     {
                         "id":  "release-done",
                         "title":  "Release ≠ Done",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El estado del producto cambia de:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3144"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Development Done",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3145"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3146"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Released.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3147"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero el ciclo continúa:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3148"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Released",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3149"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3150"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activated",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3151"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3152"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopted",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3153"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3154"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherent",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3155"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3156"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Achieved",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3157"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto operacionaliza directamente el modelo conceptual que SEIF ya ha definido.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3158"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3143"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-8-adopt",
                         "title":  "Etapa 8 — ADOPT",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3161"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Conseguir que el cliente pueda alcanzar el criterio de éxito asociado a la capacidad entregada.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3162"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success desempeña un papel fundamental, pero la adopción no se convierte exclusivamente en responsabilidad de CS.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3163"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si el cliente no adopta, las causas pueden encontrarse en:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3164"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "configuración;",
                                                          "UX;",
                                                          "onboarding;",
                                                          "conocimiento;",
                                                          "producto;",
                                                          "integración;",
                                                          "restricciones técnicas;",
                                                          "necesidad incorrectamente entendida."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3165–P3172"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner operacional",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3173"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3174"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner del Outcome",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3175"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3176"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3160"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "adoption-funnel",
                         "title":  "Adoption Funnel",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada módulo o capacidad relevante debe poder observar progresivamente:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3179"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eligible",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3180"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede utilizarlo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3181"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3182"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Configured",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3183"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Está preparado para utilizarlo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3184"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3185"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activated",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3186"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Alcanzó su primer criterio de éxito.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3187"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3188"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopted",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3189"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lo utiliza recurrentemente.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3190"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3191"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherent",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3192"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sostiene el comportamiento esperado.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3193"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3194"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Achieved",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3195"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe evidencia del resultado buscado.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3196"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este funnel evita utilizar una única métrica de \"uso\" para representar situaciones diferentes.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3197"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3178"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "customer-autonomy",
                         "title":  "Customer Autonomy",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE incorpora una dimensión adicional derivada directamente de las entrevistas con CS y SRE:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3200"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Autonomía",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3201"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada journey relevante debe poder identificar:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3202"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Self-service",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3203"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cliente completa la acción sin intervención.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3204"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Assisted",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3205"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Requiere acompañamiento esperado.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3206"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dependent",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3207"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No puede completar el resultado sin intervención de SEIF.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3208"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La tercera categoría constituye una señal explícita de oportunidad de Producto, UX, automatización u operación.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3209"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3199"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "etapa-9-measure-learn",
                         "title":  "Etapa 9 — MEASURE \u0026 LEARN",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3212"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar si la iniciativa generó el resultado esperado y qué decisión debe tomarse.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3213"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo integra cuatro capas de medición.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3214"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capa 1 — Business",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3216"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3217"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "MRR;",
                                                          "retención;",
                                                          "expansión;",
                                                          "churn."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3218–P3221"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capa 2 — Product Outcome",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3223"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "TTV;",
                                                          "activación;",
                                                          "adherencia;",
                                                          "criterios de éxito;",
                                                          "adopción."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3224–P3228"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capa 3 — Experience / Friction",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3230"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "abandono;",
                                                          "errores;",
                                                          "tickets;",
                                                          "intervención manual;",
                                                          "reproceso;",
                                                          "pasos problemáticos."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3231–P3236"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capa 4 — Delivery / Reliability",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3238"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Lead Time for Changes;",
                                                          "Deployment Frequency;",
                                                          "Change Failure Rate;",
                                                          "MTTR;",
                                                          "disponibilidad cuando corresponda."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3239–P3243"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las capas permanecen relacionadas, pero no se confunden.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3244"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3211"
                                         }
                                     ]
                     },
                     {
                         "id":  "modelo-metric-action",
                         "title":  "Modelo Metric → Action",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Toda métrica crítica debe incorporar:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3247"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-022",
                                                          "caption":  "Modelo Metric → Action",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Elemento",
                                                                          "Definición"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Metric",
                                                                           "Qué observamos"
                                                                       ],
                                                                       [
                                                                           "Baseline",
                                                                           "Desde dónde partimos"
                                                                       ],
                                                                       [
                                                                           "Target / Threshold",
                                                                           "Qué condición esperamos"
                                                                       ],
                                                                       [
                                                                           "Owner",
                                                                           "Quién responde por observarla"
                                                                       ],
                                                                       [
                                                                           "Action",
                                                                           "Qué ocurre si cruza el umbral"
                                                                       ],
                                                                       [
                                                                           "Review cadence",
                                                                           "Cuándo se revisa"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "11. Product Operating Model TO-BE",
                                                                         "locator":  "T22"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto transforma los dashboards actuales desde:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3248"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Visualization",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3249"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3250"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Management System.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3251"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3246"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, instrumentación, owners y cadencia de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "product-learning-review",
                         "title":  "Product Learning Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cierre del ciclo no debe ser una reunión de status.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3254"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe ser una conversación de decisión.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3255"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para Outcomes activos se responde:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3256"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3257"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué esperábamos que ocurriera?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3258"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3259"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió realmente?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3260"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3261"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia tenemos?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3262"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3263"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué aprendimos?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3264"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3265"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decisión tomamos?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3266"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones posibles son:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3267"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scale",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3268"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Continue",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3269"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adjust",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3270"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Investigate",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3271"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Stop",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3272"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3253"
                                         }
                                     ]
                     },
                     {
                         "id":  "north-star-y-sistema-de-metricas",
                         "title":  "North Star y sistema de métricas",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards analizados muestran una preocupación importante por utilización y adopción.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3275"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE separa tres niveles.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3276"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "North Star",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3277"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe representar valor recurrente generado por el producto, no actividad genérica.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3278"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia actual todavía no es suficiente para fijar una única North Star corporativa definitiva sin validación adicional.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3279"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, no se define artificialmente una métrica en este Blueprint.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3280"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí se establece la estructura:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3281"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Número/proporción de clientes que logran recurrentemente el resultado central que SEIF promete habilitar.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3282"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Metrics",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3284"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Específicas por módulo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3285"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo ya definido por SEIF para Control de Rondas:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3286"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "porcentaje de rondas completadas correctamente.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3287"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Health Metrics",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3289"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Protegen el sistema:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3290"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "confiabilidad;",
                                                          "errores;",
                                                          "soporte;",
                                                          "churn;",
                                                          "intervención;",
                                                          "DORA."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3291–P3296"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3297"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF necesita pasar de un conjunto de métricas independientes hacia un Metric Tree que conecte:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3298"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Business → Customer Value → Product → Experience → Delivery.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3299"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3274"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-06",
                                                       "subject":  "North Star candidate — Recurring Value / Clientes con Valor Recurrente",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, instrumentación, owners y cadencia de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "reviews-unificadas-por-modulo",
                         "title":  "Reviews unificadas por módulo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El feedback no debe esperar al final de grandes iniciativas.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3302"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada módulo/outcome relevante opera mediante revisiones de evidencia.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3303"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review de Discovery",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3304"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Entendemos suficientemente el problema?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3305"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review de Validation",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3306"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La solución propuesta tiene evidencia suficiente?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3307"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review de Release",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3308"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede operar y medirse?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3309"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review de Outcome",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3310"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Está generando valor?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3311"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No son cuatro comités.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3312"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Son cuatro tipos de decisión que pueden ocurrir dentro de los rituales existentes.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3313"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto mantiene el principio de Minimum Viable Governance.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3314"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3301"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencia propuesta, participantes y triggers",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "operating-cadence",
                         "title":  "Operating Cadence",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para evitar sobrecargar una compañía pequeña, el sistema utiliza pocas cadencias.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3317"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Semanal — Flow Review",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3318"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "30–45 minutos.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3319"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Foco:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3320"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcomes activos;",
                                                          "bloqueos;",
                                                          "decisiones pendientes;",
                                                          "WIP;",
                                                          "señales críticas."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3321–P3325"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se revisan tareas una por una.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3326"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quincenal — Product / Discovery Review",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3328"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Foco:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3329"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "oportunidades;",
                                                          "evidencia;",
                                                          "prototipos;",
                                                          "decisiones de inversión."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3330–P3333"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede integrarse con espacios existentes.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3334"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mensual — Outcome Review",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3336"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Foco:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3337"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "adopción;",
                                                          "TTV;",
                                                          "adherencia;",
                                                          "señales de cliente;",
                                                          "soporte;",
                                                          "comportamiento técnico;",
                                                          "aprendizaje."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3338–P3344"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trimestral — Portfolio / Direction Review",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3346"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Foco:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3347"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcomes;",
                                                          "inversión;",
                                                          "sostenibilidad;",
                                                          "mercado;",
                                                          "prioridades."
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3348–P3352"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para el tamaño actual de SEIF, agregar más capas recurrentes de gobierno no está justificado por la evidencia.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3353"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3316"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencia propuesta, participantes y triggers",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "wip-management",
                         "title":  "WIP Management",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidencia riesgo de pérdida de foco por múltiples señales y prioridades.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3356"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE incorpora WIP explícito.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3357"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principio es:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3358"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una célula no inicia continuamente trabajo nuevo cuando existen Outcomes prioritarios sin cerrar su ciclo de aprendizaje.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3359"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El límite numérico deberá calibrarse utilizando capacidad real durante la implementación.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3360"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se establece arbitrariamente en el Blueprint.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3361"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El indicador relevante será:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3362"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Active Outcomes per Cell",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3363"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "más que únicamente:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3364"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tickets in Progress.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3365"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3355"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-09",
                                                       "subject":  "Límites numéricos de WIP — baseline, piloto y validación",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "modelo-de-celulas-to-be",
                         "title":  "Modelo de células TO-BE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se propone reorganizar nuevamente la compañía.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3368"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las células actuales permanecen como mecanismo de ejecución multidisciplinaria.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3369"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cambio se encuentra en su contrato operativo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3370"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada célula debe conocer:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3371"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3372"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué resultado está intentando modificar?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3373"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3374"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué creemos que importa?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3375"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3376"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo sabremos si cambió?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3377"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Current Bet",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3378"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué hipótesis estamos probando?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3379"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "WIP",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3380"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué estamos haciendo ahora?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3381"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3382"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué aprendimos?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3383"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Next Decision",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3384"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decisión debemos tomar?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3385"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto convierte la célula desde una unidad de ejecución de backlog hacia una unidad de aprendizaje y generación de resultados.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3386"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3367"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo entre Head de Producto, Product Owner, Outcome Owner y domain owner",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Accountability organizacional y derechos de decisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "contrato-operativo-de-una-celula",
                         "title":  "Contrato operativo de una célula",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La célula no necesita un manual extenso.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3389"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su contrato mínimo contiene:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3390"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-023",
                                                          "caption":  "Contrato operativo de una célula",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Elemento",
                                                                          "Respuesta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Outcome",
                                                                           "Resultado buscado"
                                                                       ],
                                                                       [
                                                                           "Owner",
                                                                           "Responsable"
                                                                       ],
                                                                       [
                                                                           "Customer / User",
                                                                           "Beneficiario"
                                                                       ],
                                                                       [
                                                                           "Evidence",
                                                                           "Por qué importa"
                                                                       ],
                                                                       [
                                                                           "Success Metric",
                                                                           "Cómo se mide"
                                                                       ],
                                                                       [
                                                                           "Current Bet",
                                                                           "Qué estamos probando"
                                                                       ],
                                                                       [
                                                                           "Risks",
                                                                           "Qué puede impedirlo"
                                                                       ],
                                                                       [
                                                                           "Decision",
                                                                           "Qué debemos decidir después"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "11. Product Operating Model TO-BE",
                                                                         "locator":  "T23"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este puede constituir el artefacto central del Product Operating System.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3391"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3388"
                                         }
                                     ]
                     },
                     {
                         "id":  "tooling-to-be",
                         "title":  "Tooling TO-BE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El tooling debe soportar el modelo, no convertirse en el modelo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3394"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura lógica requerida es:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3395"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3396"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3397"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3398"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3399"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery / Validation",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3400"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3401"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3402"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3403"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3404"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3405"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3406"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3407"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metrics / Learning",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3408"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3409"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3410"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para SEIF, una plataforma como Jira puede centralizar la gestión del flujo de trabajo; Confluence puede soportar conocimiento y decisiones; y, si posteriormente el volumen y madurez lo justifican, Jira Product Discovery puede fortalecer la gestión de oportunidades y priorización.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3411"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura inicial debe mantenerse deliberadamente pequeña.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3412"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3393"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura de Jira/JPD/JSM/Confluence y configuración mínima",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "arquitectura-jira-recomendada-conceptualmente",
                         "title":  "Arquitectura Jira recomendada conceptualmente",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se requiere iniciar con múltiples proyectos.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3415"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una configuración inicial puede soportar:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3416"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3417"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema/oportunidad.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3418"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3419"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado buscado.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3420"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Initiative / Bet",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3421"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Apuesta seleccionada.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3422"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Epic",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3423"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Unidad relevante de Delivery.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3424"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Story / Task / Bug",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3425"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejecución.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3426"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las relaciones permiten reconstruir:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3427"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity → Outcome → Bet → Delivery → Result.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3428"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diseño detallado de Jira corresponde a la fase de implementación y debe realizarse después de validar el Operating Model.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3429"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3414"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura de Jira/JPD/JSM/Confluence y configuración mínima",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "automatizaciones-prioritarias",
                         "title":  "Automatizaciones prioritarias",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE identifica oportunidades claras de automatización:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3432"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Intake",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3433"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Centralización automática de señales provenientes de fuentes definidas.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3434"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Traceability",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3435"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Relacionar Opportunity → Outcome → Delivery.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3436"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Notifications",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3437"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Alertas cuando una decisión o validación está pendiente.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3438"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3439"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Generar señales cuando utilización o activación cae bajo umbrales definidos.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3440"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Support Intelligence",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3441"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Agrupar patrones de tickets asociados a módulos.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3442"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Review",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3443"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Preparar automáticamente información relevante para las revisiones.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3444"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es eliminar coordination waste, no automatizar decisiones de Producto.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3445"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3431"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura de Jira/JPD/JSM/Confluence y configuración mínima",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "definition-of-ready-to-be",
                         "title":  "Definition of Ready TO-BE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se utiliza como checklist burocrático.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3448"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de comprometer capacidad relevante, deben poder responderse estas preguntas:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3449"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿Qué problema estamos resolviendo?",
                                                          "¿Para quién?",
                                                          "¿Qué evidencia tenemos?",
                                                          "¿Qué Outcome esperamos?",
                                                          "¿Cómo sabremos si funcionó?",
                                                          "¿Qué incertidumbre relevante permanece?",
                                                          "¿Cuál es la menor solución que puede producir aprendizaje?"
                                                      ],
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3450–P3456"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si estas preguntas no tienen respuestas suficientes, el trabajo continúa en Discovery.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3457"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3447"
                                         }
                                     ]
                     },
                     {
                         "id":  "definition-of-value",
                         "title":  "Definition of Value",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo reemplaza conceptualmente una Definition of Done puramente técnica por dos conceptos diferentes.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3460"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical Done",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3461"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La solución cumple los criterios técnicos establecidos por Desarrollo/SRE.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3462"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value Validated",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3463"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe evidencia suficiente de que el usuario está logrando el resultado esperado.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3464"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una iniciativa puede estar:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3465"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical Done = Sí",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3466"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3467"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value Validated = No.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3468"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esa distinción es central para evitar volver al comportamiento de feature factory.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3469"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3459"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, instrumentación, owners y cadencia de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "guardrails-del-operating-model",
                         "title":  "Guardrails del Operating Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo opera bajo ocho reglas:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3472"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Una solicitud no es automáticamente una iniciativa.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3473"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Una iniciativa no es automáticamente una prioridad.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3474"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Una prioridad no es automáticamente una feature.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3475"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Discovery debe ser proporcional al riesgo.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3476"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Construcción no debe ser el mecanismo de validación por defecto.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3477"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Release no equivale a Outcome.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3478"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. Uso no equivale automáticamente a valor.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3479"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. Toda inversión relevante debe terminar en aprendizaje y una nueva decisión.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3480"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3471"
                                         }
                                     ]
                     },
                     {
                         "id":  "as-is-to-be",
                         "title":  "AS-IS → TO-BE",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-024",
                                                          "caption":  "AS-IS → TO-BE",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "AS-IS",
                                                                          "TO-BE"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Intake",
                                                                           "Múltiples entradas heterogéneas",
                                                                           "Unified Opportunity Model"
                                                                       ],
                                                                       [
                                                                           "Unidad de trabajo",
                                                                           "Solicitud / iniciativa / feature",
                                                                           "Problem / Opportunity / Outcome"
                                                                       ],
                                                                       [
                                                                           "Discovery",
                                                                           "Existe, aplicación variable",
                                                                           "Discovery proporcional al riesgo"
                                                                       ],
                                                                       [
                                                                           "Validación",
                                                                           "Depende del caso",
                                                                           "Hipótesis críticas validadas temprano"
                                                                       ],
                                                                       [
                                                                           "Priorización",
                                                                           "Criterios distribuidos",
                                                                           "Outcome + Evidence + Reach + Value + Feasibility"
                                                                       ],
                                                                       [
                                                                           "Decision Rights",
                                                                           "Parcialmente explícitos",
                                                                           "Accountability por decisión"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "Recibe diferentes niveles de claridad",
                                                                           "Minimum Delivery Readiness"
                                                                       ],
                                                                       [
                                                                           "Deuda técnica",
                                                                           "Reconocida",
                                                                           "Visible en decisiones de inversión"
                                                                       ],
                                                                       [
                                                                           "Release",
                                                                           "Evento técnico",
                                                                           "Technical + Operational + Measurable Readiness"
                                                                       ],
                                                                       [
                                                                           "Adopción",
                                                                           "Acompañamiento de CS",
                                                                           "Funnel explícito de adopción"
                                                                       ],
                                                                       [
                                                                           "Autonomía",
                                                                           "Dependencia observada",
                                                                           "Métrica/criterio explícito"
                                                                       ],
                                                                       [
                                                                           "Métricas",
                                                                           "Dashboards",
                                                                           "Metric → Threshold → Owner → Action"
                                                                       ],
                                                                       [
                                                                           "Feedback",
                                                                           "Distribuido",
                                                                           "Learning Loop"
                                                                       ],
                                                                       [
                                                                           "Células",
                                                                           "Multidisciplinarias",
                                                                           "Outcome-driven learning units"
                                                                       ],
                                                                       [
                                                                           "WIP",
                                                                           "Demanda compitiendo",
                                                                           "Outcomes activos limitados"
                                                                       ],
                                                                       [
                                                                           "Tooling",
                                                                           "Fragmentado",
                                                                           "Trazabilidad end-to-end"
                                                                       ],
                                                                       [
                                                                           "IA",
                                                                           "No integrada como sistema",
                                                                           "Acelerador de Discovery y validación"
                                                                       ],
                                                                       [
                                                                           "Gobierno",
                                                                           "Distribuido",
                                                                           "Minimum Viable Governance"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "11. Product Operating Model TO-BE",
                                                                         "locator":  "T24"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3482"
                                         }
                                     ]
                     },
                     {
                         "id":  "cambio-esperado-en-el-flujo",
                         "title":  "Cambio esperado en el flujo",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE busca reducir principalmente tres costos identificados durante el assessment.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3485"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Coordination Cost",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3486"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menos handoffs, menor duplicación y decisiones más claras.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3487"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Cost",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3488"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validación más temprana y experimentos más económicos.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3489"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dependency Cost",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3490"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mayor visibilidad y reducción progresiva de intervenciones necesarias para que el cliente obtenga valor.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3491"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se establece todavía un porcentaje de reducción porque el assessment no proporciona una línea base cuantitativa suficiente para hacerlo sin inventar información.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3492"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3484"
                                         }
                                     ]
                     },
                     {
                         "id":  "metricas-del-propio-operating-model",
                         "title":  "Métricas del propio Operating Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Operating System también debe medirse.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3495"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las métricas iniciales son:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3496"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-025",
                                                          "caption":  "Métricas del propio Operating Model",
                                                          "kind":  "scorecard",
                                                          "headers":  [
                                                                          "Métrica",
                                                                          "Qué permite diagnosticar"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Learning Lead Time",
                                                                           "Tiempo desde hipótesis hasta evidencia suficiente"
                                                                       ],
                                                                       [
                                                                           "Opportunity → Decision Time",
                                                                           "Velocidad de decisión"
                                                                       ],
                                                                       [
                                                                           "% iniciativas con Outcome definido",
                                                                           "Disciplina del modelo"
                                                                       ],
                                                                       [
                                                                           "% iniciativas validadas antes de Delivery cuando aplica",
                                                                           "Reducción temprana de incertidumbre"
                                                                       ],
                                                                       [
                                                                           "Active Outcomes / Cell",
                                                                           "Foco y WIP"
                                                                       ],
                                                                       [
                                                                           "Release → Activation Time",
                                                                           "Fricción posterior al release"
                                                                       ],
                                                                       [
                                                                           "TTV",
                                                                           "Velocidad para alcanzar primer valor"
                                                                       ],
                                                                       [
                                                                           "Adherence",
                                                                           "Sostenibilidad del valor"
                                                                       ],
                                                                       [
                                                                           "Support before Value",
                                                                           "Fricción antes de alcanzar éxito"
                                                                       ],
                                                                       [
                                                                           "Customer-assisted actions",
                                                                           "Dependencia operacional"
                                                                       ],
                                                                       [
                                                                           "Outcome Success Rate",
                                                                           "Calidad de las apuestas de Producto"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "11. Product Operating Model TO-BE",
                                                                         "locator":  "T25"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas métricas deben comenzar con baseline real antes de establecer targets.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3497"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3494"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, instrumentación, owners y cadencia de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "product-operating-model-canvas",
                         "title":  "Product Operating Model Canvas",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo completo puede resumirse en nueve preguntas.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3500"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. SIGNAL",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3501"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué observamos?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3502"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. PROBLEM",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3503"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema existe?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3504"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. EVIDENCE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3505"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué demuestra que importa?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3506"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. OUTCOME",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3507"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué queremos cambiar?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3508"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. BET",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3509"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué creemos que puede producir ese cambio?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3510"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. VALIDATION",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3511"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo reducimos incertidumbre antes de invertir?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3512"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. DELIVERY",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3513"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuál es la menor solución valiosa?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3514"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. VALUE",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3515"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El cliente logró el resultado?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3516"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "9. LEARNING",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3517"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decisión tomamos ahora?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3518"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas nueve preguntas constituyen el núcleo del SEIF Product Operating System.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3519"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3499"
                                         }
                                     ]
                     },
                     {
                         "id":  "operating-model-en-una-pagina",
                         "title":  "Operating Model en una página",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "INPUT",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3522"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Market + Customer + CS + Support + Data + Tech + Leadership",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3523"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3524"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OPPORTUNITY SYSTEM",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3525"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal → Problem → Evidence",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3526"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3527"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRODUCT DECISION",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3528"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome → Prioritize → Bet",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3529"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3530"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCOVERY SYSTEM",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3531"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Research → Prototype → Validate",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3532"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3533"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DELIVERY SYSTEM",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3534"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Build → Test → Release",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3535"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3536"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CUSTOMER VALUE SYSTEM",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3537"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activate → Adopt → Adhere",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3538"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3539"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LEARNING SYSTEM",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3540"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Measure → Learn → Decide",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3541"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3542"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todo soportado transversalmente por:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3543"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ownership + Metrics + Data + Reliability + Automation + Tooling",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3544"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3521"
                                         }
                                     ]
                     },
                     {
                         "id":  "target-de-madurez",
                         "title":  "Target de madurez",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo inmediato del Operating Model no es llevar SEIF a Nivel 5.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3547"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es consolidar Nivel 3 — Definido en las capacidades críticas.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3548"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-026",
                                                          "caption":  "Target de madurez",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Capacidad",
                                                                          "AS-IS",
                                                                          "Target inicial"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Opportunity Intake",
                                                                           "2",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "Discovery",
                                                                           "2",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "UX Validation",
                                                                           "2–3",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "Priorización",
                                                                           "2",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "Decision Rights",
                                                                           "2",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "Delivery Readiness",
                                                                           "2",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "Adoption Management",
                                                                           "2",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "Analytics → Action",
                                                                           "2",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "Learning Loop",
                                                                           "2",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "Traceability",
                                                                           "1–2",
                                                                           "3"
                                                                       ],
                                                                       [
                                                                           "Change Management",
                                                                           "2",
                                                                           "3"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "11. Product Operating Model TO-BE",
                                                                         "locator":  "T26"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este target es coherente con el tamaño y situación actual de la organización.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3549"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3546"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-to-be-final",
                         "title":  "Diagnóstico TO-BE final",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo futuro no convierte a SEIF en una organización con más procesos.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3552"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La convierte en una organización con menos ambigüedad entre problema, decisión, construcción y resultado.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3553"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La transformación fundamental es:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3554"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de administrar funcionalidades a administrar Outcomes;",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3555"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de validar tarde a reducir incertidumbre temprano;",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3556"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de múltiples criterios implícitos a decisiones explícitas;",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3557"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de release como final a adopción como parte del ciclo;",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3558"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de dashboards como visibilidad a métricas como mecanismos de acción;",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3559"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de feedback distribuido a aprendizaje organizacional;",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3560"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de células que ejecutan trabajo a células que producen evidencia y resultados.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3561"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El SEIF Product Operating Model TO-BE queda, por tanto, definido alrededor de un único flujo:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3562"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL → FRAME → DISCOVER → DECIDE → VALIDATE → DELIVER → RELEASE → ADOPT → MEASURE \u0026 LEARN ↺",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3563"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su característica central no es la sofisticación metodológica.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3564"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es la capacidad de responder consistentemente, para cada inversión relevante:",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3565"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema estamos resolviendo, qué evidencia lo demuestra, qué resultado buscamos, cuánto necesitamos invertir para validarlo y qué aprendimos después de hacerlo?",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3566"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ese es el mecanismo operativo que conecta la orientación a Outcomes ya definida por SEIF con una forma concreta, repetible y sostenible de trabajar.",
                                            "source":  {
                                                           "title":  "11. Product Operating Model TO-BE",
                                                           "locator":  "P3567"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "11. Product Operating Model TO-BE",
                                             "locator":  "P3551"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "design-principles",
                    "value-stream",
                    "root-causes",
                    "maturity",
                    "waste-friction",
                    "discovery",
                    "prioritization",
                    "delivery",
                    "adoption-growth",
                    "feedback-loop",
                    "roles",
                    "governance"
                ],
    "source":  {
                   "title":  "11. Product Operating Model TO-BE",
                   "locator":  "P2737–P3567",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               },
    "sourceOperatingSequence":  [
                                    {
                                        "title":  "SIGNAL",
                                        "locator":  "P2872",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    },
                                    {
                                        "title":  "FRAME",
                                        "locator":  "P2913",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    },
                                    {
                                        "title":  "DISCOVER",
                                        "locator":  "P2929",
                                        "relationship":  "SOURCE TERMINOLOGY"
                                    },
                                    {
                                        "title":  "DECIDE",
                                        "locator":  "P3002",
                                        "relationship":  "SOURCE TERMINOLOGY"
                                    },
                                    {
                                        "title":  "VALIDATE",
                                        "locator":  "P3028",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    },
                                    {
                                        "title":  "DELIVER",
                                        "locator":  "P3084",
                                        "relationship":  "SOURCE TERMINOLOGY"
                                    },
                                    {
                                        "title":  "RELEASE",
                                        "locator":  "P3130",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    },
                                    {
                                        "title":  "ADOPT",
                                        "locator":  "P3160",
                                        "relationship":  "SOURCE TERMINOLOGY"
                                    },
                                    {
                                        "title":  "MEASURE \u0026 LEARN",
                                        "locator":  "P3211",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    }
                                ],
    "operatingStages":  [
                            {
                                "canonicalStage":  "DISCOVER",
                                "sourceSubStages":  [
                                                        {
                                                            "title":  "SIGNAL",
                                                            "locator":  "P2872",
                                                            "relationship":  "SOURCE SUB-STAGE"
                                                        },
                                                        {
                                                            "title":  "FRAME",
                                                            "locator":  "P2913",
                                                            "relationship":  "SOURCE SUB-STAGE"
                                                        },
                                                        {
                                                            "title":  "DISCOVER",
                                                            "locator":  "P2929",
                                                            "relationship":  "SOURCE TERMINOLOGY"
                                                        },
                                                        {
                                                            "title":  "VALIDATE",
                                                            "locator":  "P3028",
                                                            "relationship":  "SOURCE SUB-STAGE"
                                                        }
                                                    ],
                                "purpose":  "Entender el problema y reducir incertidumbre antes de comprometer inversión significativa.",
                                "inputs":  [
                                               "Signals",
                                               "contexto",
                                               "evidencia disponible"
                                           ],
                                "steps":  [
                                              "Frame",
                                              "Discover",
                                              "Validate"
                                          ],
                                "outputs":  [
                                                "Opportunity",
                                                "evidencia",
                                                "Outcome e hipótesis suficientemente claros para decidir"
                                            ],
                                "source":  {
                                               "title":  "11. Product Operating Model TO-BE",
                                               "locator":  "P2872–P3083"
                                           }
                            },
                            {
                                "canonicalStage":  "DECIDE",
                                "sourceSubStages":  [
                                                        {
                                                            "title":  "DECIDE",
                                                            "locator":  "P3002",
                                                            "relationship":  "SOURCE TERMINOLOGY"
                                                        }
                                                    ],
                                "purpose":  "Determinar si explorar, priorizar, esperar o descartar.",
                                "inputs":  [
                                               "Opportunity",
                                               "Outcome",
                                               "evidencia",
                                               "factibilidad y riesgo"
                                           ],
                                "steps":  [
                                              "Evaluar",
                                              "deliberar",
                                              "registrar decisión"
                                          ],
                                "outputs":  [
                                                "Explore",
                                                "Prioritize",
                                                "Wait",
                                                "Discard"
                                            ],
                                "source":  {
                                               "title":  "11. Product Operating Model TO-BE",
                                               "locator":  "P3002–P3027"
                                           }
                            },
                            {
                                "canonicalStage":  "DELIVER",
                                "sourceSubStages":  [
                                                        {
                                                            "title":  "DELIVER",
                                                            "locator":  "P3084",
                                                            "relationship":  "SOURCE TERMINOLOGY"
                                                        },
                                                        {
                                                            "title":  "RELEASE",
                                                            "locator":  "P3130",
                                                            "relationship":  "SOURCE SUB-STAGE"
                                                        }
                                                    ],
                                "purpose":  "Construir la menor solución capaz de producir evidencia de valor y liberarla con readiness técnico y operacional.",
                                "inputs":  [
                                               "Bet priorizada",
                                               "Delivery Readiness"
                                           ],
                                "steps":  [
                                              "Deliver",
                                              "Release"
                                          ],
                                "outputs":  [
                                                "capacidad liberada",
                                                "inicio de medición"
                                            ],
                                "source":  {
                                               "title":  "11. Product Operating Model TO-BE",
                                               "locator":  "P3084–P3159"
                                           }
                            },
                            {
                                "canonicalStage":  "ADOPT",
                                "sourceSubStages":  [
                                                        {
                                                            "title":  "ADOPT",
                                                            "locator":  "P3160",
                                                            "relationship":  "SOURCE TERMINOLOGY"
                                                        }
                                                    ],
                                "purpose":  "Acompañar el paso desde disponibilidad hasta valor y autonomía del cliente.",
                                "inputs":  [
                                               "release",
                                               "criterios de éxito"
                                           ],
                                "steps":  [
                                              "Configured",
                                              "Activated",
                                              "Adopted",
                                              "Adherent"
                                          ],
                                "outputs":  [
                                                "evidencia de activación, adopción, adherencia y autonomía"
                                            ],
                                "source":  {
                                               "title":  "11. Product Operating Model TO-BE",
                                               "locator":  "P3160–P3210"
                                           }
                            },
                            {
                                "canonicalStage":  "LEARN",
                                "sourceSubStages":  [
                                                        {
                                                            "title":  "MEASURE \u0026 LEARN",
                                                            "locator":  "P3211",
                                                            "relationship":  "SOURCE SUB-STAGE"
                                                        }
                                                    ],
                                "purpose":  "Comparar resultados esperados y observados para tomar una nueva decisión.",
                                "inputs":  [
                                               "métricas",
                                               "feedback",
                                               "evidencia post-release"
                                           ],
                                "steps":  [
                                              "Measure",
                                              "Learn",
                                              "decide next action"
                                          ],
                                "outputs":  [
                                                "Continue",
                                                "Adjust",
                                                "Scale",
                                                "Stop",
                                                "new Opportunity"
                                            ],
                                "source":  {
                                               "title":  "11. Product Operating Model TO-BE",
                                               "locator":  "P3211–P3273"
                                           }
                            }
                        ]
} satisfies Chapter;
