import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "findings",
    "group":  "Assessment",
    "title":  "Hallazgos transversales",
    "sourceTitle":  "5. Hallazgos Transversales",
    "eyebrow":  "05 · Síntesis",
    "summary":  "Los hallazgos describen patrones que atraviesan funciones y etapas del ciclo de producto.",
    "takeaway":  "Las capacidades locales no garantizan por sí solas un flujo end-to-end consistente.",
    "executive":  {
                      "sources":  [
                                      {
                                          "locator":  "P1121–P1351",
                                          "title":  "5. Hallazgos Transversales"
                                      }
                                  ],
                      "implication":  "Las respuestas de diseño deben actuar sobre patrones transversales, no sobre funciones aisladas.",
                      "evidenceStatus":  "pending",
                      "evidenceConfidence":  "medium",
                      "keyFindings":  [
                                          "La evolución conceptual ha avanzado más rápido que la operacionalización.",
                                          "Discovery y priorización existen, pero operan con criterios distribuidos.",
                                          "El aprendizaje y las señales de cliente están distribuidos.",
                                          "Las herramientas reflejan la fragmentación del modelo actual."
                                      ]
                  },
    "sections":  [
                     {
                         "id":  "chapter-overview",
                         "title":  "Introducción",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los hallazgos transversales consolidan patrones que aparecen en más de una función y que, por lo tanto, no deben interpretarse como problemas aislados de Producto, UX, Desarrollo, SRE, Soporte, Marketing o Customer Success.",
                                            "source":  {
                                                           "locator":  "P1122",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La lectura conjunta de las entrevistas muestra que las principales oportunidades de SEIF se encuentran en las interfaces entre capacidades y en la forma en que la organización transforma información en decisiones.",
                                            "source":  {
                                                           "locator":  "P1123",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1122",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-1-la-organizacion-ha-evolucionado-conceptualmente-mas-rapido-que-operacionalmente",
                         "title":  "Hallazgo transversal 1 — La organización ha evolucionado conceptualmente más rápido que operacionalmente",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1126",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya utiliza y discute conceptos como:",
                                            "source":  {
                                                           "locator":  "P1127",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcomes.",
                                                          "Criterios de éxito.",
                                                          "Momentos de verdad.",
                                                          "Time to Value.",
                                                          "Adherencia.",
                                                          "Células multidisciplinarias.",
                                                          "DORA.",
                                                          "Discovery.",
                                                          "Validación con usuarios.",
                                                          "Métricas de utilización."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1128",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto y liderazgo expresan explícitamente la intención de abandonar el modelo histórico orientado a funcionalidades.",
                                            "source":  {
                                                           "locator":  "P1138",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Al mismo tiempo, las entrevistas muestran diferencias en cómo esos conceptos se traducen en:",
                                            "source":  {
                                                           "locator":  "P1139",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "intake;",
                                                          "priorización;",
                                                          "responsabilidades;",
                                                          "validación;",
                                                          "criterios de avance;",
                                                          "medición;",
                                                          "decisiones posteriores al release."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1140",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1147",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF presenta un Strategy-to-Execution Gap.",
                                            "source":  {
                                                           "locator":  "P1148",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La dirección estratégica está más definida que el sistema operativo necesario para ejecutarla consistentemente.",
                                            "source":  {
                                                           "locator":  "P1149",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema no consiste en que la organización desconozca buenas prácticas de Producto. Consiste en que todavía no existe una forma común y suficientemente estable para convertirlas en comportamiento cotidiano.",
                                            "source":  {
                                                           "locator":  "P1150",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1151",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Operating System debe enfocarse menos en introducir conceptos nuevos y más en convertir los conceptos existentes en reglas operativas mínimas.",
                                            "source":  {
                                                           "locator":  "P1152",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1125",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-2-existen-multiples-fuentes-de-demanda-pero-no-una-representacion-comun-de-las-oportunidades",
                         "title":  "Hallazgo transversal 2 — Existen múltiples fuentes de demanda, pero no una representación común de las oportunidades",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1155",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante las entrevistas se identificaron señales provenientes de:",
                                            "source":  {
                                                           "locator":  "P1156",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "clientes;",
                                                          "Customer Success;",
                                                          "Soporte;",
                                                          "Marketing;",
                                                          "liderazgo;",
                                                          "Producto;",
                                                          "tecnología;",
                                                          "datos y dashboards."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1157",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX también reportó múltiples formas en las que el trabajo puede llegar hacia Desarrollo.",
                                            "source":  {
                                                           "locator":  "P1165",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1166",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La diversidad de señales es positiva.",
                                            "source":  {
                                                           "locator":  "P1167",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema es que las necesidades pueden llegar con diferentes niveles de:",
                                            "source":  {
                                                           "locator":  "P1168",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "detalle;",
                                                          "urgencia;",
                                                          "evidencia;",
                                                          "entendimiento del usuario;",
                                                          "solución preconcebida."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1169",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto dificulta compararlas objetivamente.",
                                            "source":  {
                                                           "locator":  "P1174",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1175",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF necesita diferenciar claramente:",
                                            "source":  {
                                                           "locator":  "P1176",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuente de una señal",
                                            "source":  {
                                                           "locator":  "P1177",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "locator":  "P1178",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "forma en que la organización representa y evalúa una oportunidad.",
                                            "source":  {
                                                           "locator":  "P1179",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Operating Model deberá proporcionar un lenguaje común para convertir señales heterogéneas en problemas comparables.",
                                            "source":  {
                                                           "locator":  "P1180",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1154",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-3-discovery-existe-pero-el-nivel-de-incertidumbre-que-llega-a-delivery-es-variable",
                         "title":  "Hallazgo transversal 3 — Discovery existe, pero el nivel de incertidumbre que llega a Delivery es variable",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1183",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX reportó utilización de:",
                                            "source":  {
                                                           "locator":  "P1184",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "investigación;",
                                                          "entrevistas;",
                                                          "prototipos;",
                                                          "MVP;",
                                                          "validaciones con clientes."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1185",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto también realiza actividades de entendimiento de problemas.",
                                            "source":  {
                                                           "locator":  "P1190",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, la participación de Discovery y UX no es uniforme para todas las iniciativas.",
                                            "source":  {
                                                           "locator":  "P1191",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo reportó necesidades de aclaración y cambios durante el proceso de construcción.",
                                            "source":  {
                                                           "locator":  "P1192",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1193",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe ausencia de Discovery.",
                                            "source":  {
                                                           "locator":  "P1194",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe variabilidad en la profundidad y consistencia de Discovery.",
                                            "source":  {
                                                           "locator":  "P1195",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Como consecuencia, iniciativas diferentes pueden llegar a Desarrollo con distintos niveles de claridad respecto de:",
                                            "source":  {
                                                           "locator":  "P1196",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "problema;",
                                                          "usuario;",
                                                          "reglas;",
                                                          "experiencia;",
                                                          "outcome;",
                                                          "evidencia."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1197",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1203",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principal objetivo no es aumentar documentación.",
                                            "source":  {
                                                           "locator":  "P1204",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es establecer un mínimo de evidencia antes de comprometer capacidad de Delivery.",
                                            "source":  {
                                                           "locator":  "P1205",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1182",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-4-la-priorizacion-ocurre-pero-la-logica-de-decision-esta-distribuida",
                         "title":  "Hallazgo transversal 4 — La priorización ocurre, pero la lógica de decisión está distribuida",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1208",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto utiliza información relacionada con clientes, solicitudes, alcance, uso y necesidades.",
                                            "source":  {
                                                           "locator":  "P1209",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo incorpora:",
                                            "source":  {
                                                           "locator":  "P1210",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "capacidad;",
                                                          "dependencias;",
                                                          "viabilidad."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1211",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo también participa en decisiones relacionadas con prioridades.",
                                            "source":  {
                                                           "locator":  "P1214",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1215",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no carece de priorización.",
                                            "source":  {
                                                           "locator":  "P1216",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Carece de una lógica transversal suficientemente explícita que permita explicar por qué una oportunidad avanza respecto de otra.",
                                            "source":  {
                                                           "locator":  "P1217",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los criterios existen, pero están distribuidos entre distintas funciones.",
                                            "source":  {
                                                           "locator":  "P1218",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1219",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema a resolver no es crear una fórmula compleja.",
                                            "source":  {
                                                           "locator":  "P1220",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es establecer un modelo común que combine:",
                                            "source":  {
                                                           "locator":  "P1221",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome + evidencia + alcance + valor + viabilidad.",
                                            "source":  {
                                                           "locator":  "P1222",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1207",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-5-la-colaboracion-existe-pero-los-decision-rights-permanecen-parcialmente-ambiguos",
                         "title":  "Hallazgo transversal 5 — La colaboración existe, pero los Decision Rights permanecen parcialmente ambiguos",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1225",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo de células busca responsabilidad compartida sobre los Outcomes.",
                                            "source":  {
                                                           "locator":  "P1226",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran participación de diferentes actores en:",
                                            "source":  {
                                                           "locator":  "P1227",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "definir;",
                                                          "diseñar;",
                                                          "priorizar;",
                                                          "construir;",
                                                          "liberar;",
                                                          "acompañar;",
                                                          "medir."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1228",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, las responsabilidades pueden variar según el tipo de iniciativa y su contexto.",
                                            "source":  {
                                                           "locator":  "P1235",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1236",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La multidisciplinariedad ha avanzado más rápido que la claridad de decisión.",
                                            "source":  {
                                                           "locator":  "P1237",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto genera una tensión frecuente:",
                                            "source":  {
                                                           "locator":  "P1238",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todos participan del resultado, pero no siempre está igualmente claro quién toma cada decisión.",
                                            "source":  {
                                                           "locator":  "P1239",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1240",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Operating System deberá separar:",
                                            "source":  {
                                                           "locator":  "P1241",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "colaboración compartida",
                                            "source":  {
                                                           "locator":  "P1242",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "locator":  "P1243",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "accountability explícita.",
                                            "source":  {
                                                           "locator":  "P1244",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1224",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-6-el-valor-se-reconoce-como-objetivo-pero-release-y-value-todavia-no-estan-completamente-desacoplados-operacionalmente",
                         "title":  "Hallazgo transversal 6 — El valor se reconoce como objetivo, pero Release y Value todavía no están completamente desacoplados operacionalmente",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1247",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha definido conceptualmente que una funcionalidad no está terminada cuando se desarrolla, sino cuando el usuario logra su objetivo.",
                                            "source":  {
                                                           "locator":  "P1248",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success observa utilización y adopción.",
                                            "source":  {
                                                           "locator":  "P1249",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards permiten observar uso de licencias, usuarios, proyectos y módulos.",
                                            "source":  {
                                                           "locator":  "P1250",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aun así, las entrevistas muestran que todavía se está construyendo la capacidad para conectar consistentemente cada entrega con:",
                                            "source":  {
                                                           "locator":  "P1251",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "primer valor;",
                                                          "adopción;",
                                                          "adherencia;",
                                                          "outcome."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1252",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1256",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha avanzado conceptualmente desde:",
                                            "source":  {
                                                           "locator":  "P1257",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Done = desarrollado",
                                            "source":  {
                                                           "locator":  "P1258",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "locator":  "P1259",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Done = valor obtenido.",
                                            "source":  {
                                                           "locator":  "P1260",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La transición operacional todavía está en construcción.",
                                            "source":  {
                                                           "locator":  "P1261",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1262",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ciclo de Producto debe extender formalmente la responsabilidad más allá de producción.",
                                            "source":  {
                                                           "locator":  "P1263",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1246",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-7-la-organizacion-dispone-de-informacion-valiosa-pero-el-aprendizaje-esta-distribuido",
                         "title":  "Hallazgo transversal 7 — La organización dispone de información valiosa, pero el aprendizaje está distribuido",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1266",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diferentes funciones poseen información complementaria:",
                                            "source":  {
                                                           "locator":  "P1267",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-010",
                                                          "caption":  "Hallazgo transversal 7 — La organización dispone de información valiosa, pero el aprendizaje está distribuido",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Función",
                                                                          "Señal disponible"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Producto",
                                                                           "Iniciativas, objetivos, decisiones"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Investigación y comportamiento del usuario"
                                                                       ],
                                                                       [
                                                                           "Desarrollo",
                                                                           "Restricciones y comportamiento técnico"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Operación, confiabilidad y deuda"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Incidentes, consultas y fricciones"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Adopción y comportamiento de cuentas"
                                                                       ],
                                                                       [
                                                                           "Marketing",
                                                                           "Mercado y posicionamiento"
                                                                       ],
                                                                       [
                                                                           "Dashboards",
                                                                           "Uso, licencias, usuarios, proyectos"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T10",
                                                                         "title":  "5. Hallazgos Transversales"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1268",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema no es únicamente de disponibilidad de datos.",
                                            "source":  {
                                                           "locator":  "P1269",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es un problema de convergencia y utilización del aprendizaje.",
                                            "source":  {
                                                           "locator":  "P1270",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización aprende en múltiples puntos, pero ese aprendizaje no siempre termina convertido en una decisión común de Producto.",
                                            "source":  {
                                                           "locator":  "P1271",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1272",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El futuro modelo deberá cerrar explícitamente el ciclo:",
                                            "source":  {
                                                           "locator":  "P1273",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Observar → interpretar → decidir → actuar → volver a medir.",
                                            "source":  {
                                                           "locator":  "P1274",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1265",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-8-existen-senales-de-dependencia-operativa-del-cliente",
                         "title":  "Hallazgo transversal 8 — Existen señales de dependencia operativa del cliente",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1277",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE reportó situaciones donde determinadas operaciones requieren intervención de SEIF.",
                                            "source":  {
                                                           "locator":  "P1278",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success describió dependencia relevante del administrador del cliente y necesidades de acompañamiento/configuración.",
                                            "source":  {
                                                           "locator":  "P1279",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1280",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dos perspectivas diferentes convergen sobre un mismo fenómeno:",
                                            "source":  {
                                                           "locator":  "P1281",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Parte de la obtención de valor depende de intervención o conocimiento especializado.",
                                            "source":  {
                                                           "locator":  "P1282",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe todavía evidencia para cuantificar el impacto sobre churn, costos o ingresos.",
                                            "source":  {
                                                           "locator":  "P1283",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí existe evidencia suficiente para considerar la autonomía del cliente como dimensión relevante del producto.",
                                            "source":  {
                                                           "locator":  "P1284",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1285",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evolución del producto debe considerar no solamente nuevas capacidades, sino también la reducción de:",
                                            "source":  {
                                                           "locator":  "P1286",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "dependencia;",
                                                          "configuración compleja;",
                                                          "intervención manual;",
                                                          "necesidad de acompañamiento."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1287",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1276",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-9-la-deuda-tecnica-no-puede-permanecer-separada-de-la-gestion-de-producto",
                         "title":  "Hallazgo transversal 9 — La deuda técnica no puede permanecer separada de la gestión de Producto",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1293",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE manifestó explícitamente la existencia de deuda técnica relevante.",
                                            "source":  {
                                                           "locator":  "P1294",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo y SRE participan en decisiones relacionadas con viabilidad, capacidad y sostenibilidad.",
                                            "source":  {
                                                           "locator":  "P1295",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1296",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La deuda técnica es una condición real del sistema de entrega.",
                                            "source":  {
                                                           "locator":  "P1297",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe evidencia suficiente para afirmar que sea la causa directa de la baja adopción o del churn.",
                                            "source":  {
                                                           "locator":  "P1298",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, sí representa competencia por capacidad y riesgo para la evolución sostenible del producto.",
                                            "source":  {
                                                           "locator":  "P1299",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1300",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La deuda técnica debe ingresar al mismo sistema de decisiones donde se evalúan oportunidades funcionales, sin convertirse en un backlog técnico completamente aislado del negocio.",
                                            "source":  {
                                                           "locator":  "P1301",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1292",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-10-la-organizacion-presenta-riesgo-de-fatiga-por-cambio",
                         "title":  "Hallazgo transversal 10 — La organización presenta riesgo de fatiga por cambio",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1304",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo describió diferentes cambios de:",
                                            "source":  {
                                                           "locator":  "P1305",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "metodologías;",
                                                          "estructuras;",
                                                          "mecanismos de planificación;",
                                                          "formas de trabajo."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1306",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En el kickoff, liderazgo también reconoció que SEIF tiende a complejizar los métodos y posteriormente encuentra dificultades para sostenerlos.",
                                            "source":  {
                                                           "locator":  "P1310",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1311",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización no presenta falta de iniciativa de mejora.",
                                            "source":  {
                                                           "locator":  "P1312",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Presenta el riesgo contrario:",
                                            "source":  {
                                                           "locator":  "P1313",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "modificar el sistema antes de que una práctica alcance estabilidad suficiente.",
                                            "source":  {
                                                           "locator":  "P1314",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1315",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El nuevo Product Operating System deberá introducir menos componentes y exigir mayor consistencia.",
                                            "source":  {
                                                           "locator":  "P1316",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1303",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-11-las-celulas-mejoraron-la-orientacion-al-resultado-pero-necesitan-reglas-operativas-comunes",
                         "title":  "Hallazgo transversal 11 — Las células mejoraron la orientación al resultado, pero necesitan reglas operativas comunes",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1319",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF está organizando equipos alrededor de Outcomes mediante células multidisciplinarias.",
                                            "source":  {
                                                           "locator":  "P1320",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran participación variable de Producto, UX, Desarrollo, SRE, CS y otras funciones según cada iniciativa.",
                                            "source":  {
                                                           "locator":  "P1321",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1322",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las células resuelven parte del problema de estructura, pero no definen por sí mismas:",
                                            "source":  {
                                                           "locator":  "P1323",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "entrada de trabajo;",
                                                          "criterios de prioridad;",
                                                          "decision rights;",
                                                          "readiness;",
                                                          "métricas;",
                                                          "mecanismos de aprendizaje."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1324",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1330",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La siguiente evolución no requiere rediseñar inmediatamente las células.",
                                            "source":  {
                                                           "locator":  "P1331",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Requiere establecer cómo deben operar independientemente de quién participe en ellas.",
                                            "source":  {
                                                           "locator":  "P1332",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1318",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-transversal-12-las-herramientas-reflejan-la-fragmentacion-del-modelo-actual",
                         "title":  "Hallazgo transversal 12 — Las herramientas reflejan la fragmentación del modelo actual",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P1335",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto utiliza hojas de cálculo y otros mecanismos de gestión.",
                                            "source":  {
                                                           "locator":  "P1336",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo opera con herramientas técnicas propias.",
                                            "source":  {
                                                           "locator":  "P1337",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La documentación, dashboards y retroalimentación se encuentran distribuidos en distintos espacios.",
                                            "source":  {
                                                           "locator":  "P1338",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se identifican traslados manuales de información entre herramientas.",
                                            "source":  {
                                                           "locator":  "P1339",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1340",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fragmentación de herramientas no constituye la causa primaria.",
                                            "source":  {
                                                           "locator":  "P1341",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es una manifestación del modelo actual.",
                                            "source":  {
                                                           "locator":  "P1342",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mientras no exista claridad sobre:",
                                            "source":  {
                                                           "locator":  "P1343",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué información debe existir, quién la actualiza y cómo se relaciona, una nueva herramienta únicamente trasladaría la fragmentación.",
                                            "source":  {
                                                           "locator":  "P1344",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación",
                                            "source":  {
                                                           "locator":  "P1345",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El orden correcto es:",
                                            "source":  {
                                                           "locator":  "P1346",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operating Model → Information Model → Workflow → Tooling.",
                                            "source":  {
                                                           "locator":  "P1347",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1334",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     },
                     {
                         "id":  "sintesis-de-hallazgos-transversales",
                         "title":  "Síntesis de hallazgos transversales",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los hallazgos pueden agruparse en seis temas sistémicos:",
                                            "source":  {
                                                           "locator":  "P1350",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-011",
                                                          "caption":  "Síntesis de hallazgos transversales",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Tema",
                                                                          "Hallazgo consolidado",
                                                                          "Severidad diagnóstica"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Foco",
                                                                           "Demanda y prioridades provenientes de múltiples fuentes",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "Evidencia",
                                                                           "Discovery y validación existen, pero son variables",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "Decisión",
                                                                           "Criterios y responsabilidades distribuidos",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "Flujo",
                                                                           "Interfaces entre capacidades no suficientemente estandarizadas",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "Aprendizaje",
                                                                           "Datos y feedback distribuidos",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "Sostenibilidad",
                                                                           "Deuda técnica, dependencia operativa y fatiga de cambio",
                                                                           "Alta"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T11",
                                                                         "title":  "5. Hallazgos Transversales"
                                                                     },
                                                          "assessmentLabel":  "Valoración del assessment — pendiente de validación",
                                                          "validationStatus":  "pending"
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La lectura conjunta indica que el problema dominante no es funcional sino sistémico.",
                                            "source":  {
                                                           "locator":  "P1351",
                                                           "title":  "5. Hallazgos Transversales"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1349",
                                             "title":  "5. Hallazgos Transversales"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "current-state",
                    "root-causes",
                    "maturity"
                ],
    "source":  {
                   "title":  "5. Hallazgos Transversales",
                   "locator":  "P1121–P1351",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
