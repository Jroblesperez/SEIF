import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "design-principles",
    "group":  "Operating Model",
    "title":  "Principios de diseño",
    "sourceTitle":  "10. Principios de Diseño",
    "eyebrow":  "10 · Foundations",
    "summary":  "Veinte principios conectan los hallazgos del assessment con reglas de diseño para un Product Operating System simple, trazable y orientado a Outcomes.",
    "takeaway":  "El TO-BE debe reducir incertidumbre, WIP, handoffs y coordinación innecesaria sin sustituir evidencia, accountability ni decisiones humanas.",
    "executive":  {
                      "keyFindings":  [
                                          "Problemas y Outcomes preceden a soluciones y actividad.",
                                          "La evidencia y la validación deben ser proporcionales al riesgo.",
                                          "El flujo y el aprendizaje importan más que la utilización individual.",
                                          "Tooling, automatización e IA se subordinan al modelo operativo."
                                      ],
                      "implication":  "Estos principios son recomendaciones de diseño derivadas del assessment; guían el modelo propuesto, pero no constituyen políticas ya aprobadas por SEIF.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "cards",
                      "sources":  [
                                      {
                                          "title":  "10. Principios de Diseño",
                                          "locator":  "P2423–P2736"
                                      }
                                  ]
                  },
    "operatingConcepts":  [
                              {
                                  "id":  "principios-del-sistema",
                                  "title":  "Principios del sistema",
                                  "canonicalLayers":  [
                                                          "STRATEGY / OUTCOMES",
                                                          "CONTINUOUS IMPROVEMENT"
                                                      ],
                                  "sourceChapters":  [
                                                         "10"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "10. Principios de Diseño",
                                                             "locator":  "P2424–P2728"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE COMPLETE",
                                                       "EXAMPLE":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "INPUT":  "SOURCE PARTIAL",
                                                       "OUTPUT":  "SOURCE PARTIAL",
                                                       "ARTIFACT":  "SOURCE PARTIAL",
                                                       "DECISION":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE PARTIAL"
                                                   },
                                  "gapIds":  [
                                                 "GAP-B-06",
                                                 "GAP-B-11"
                                             ]
                              },
                              {
                                  "id":  "evidencia-proporcional-al-riesgo",
                                  "title":  "Evidencia proporcional al riesgo",
                                  "canonicalLayers":  [
                                                          "DISCOVER",
                                                          "EVIDENCE"
                                                      ],
                                  "sourceChapters":  [
                                                         "10"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "10. Principios de Diseño",
                                                             "locator":  "P2457–P2486"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE COMPLETE",
                                                       "INPUT":  "SOURCE COMPLETE",
                                                       "OUTPUT":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "EXAMPLE":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "ARTIFACT":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE PARTIAL"
                                                   },
                                  "gapIds":  [

                                             ]
                              },
                              {
                                  "id":  "limit-wip",
                                  "title":  "LIMIT WIP",
                                  "canonicalLayers":  [
                                                          "DECIDE",
                                                          "DELIVER"
                                                      ],
                                  "sourceChapters":  [
                                                         "10"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "10. Principios de Diseño",
                                                             "locator":  "P2527–P2536"
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
                                                       "DECISION":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "ARTIFACT":  "SOURCE MISSING",
                                                       "TOOL":  "SOURCE MISSING",
                                                       "EXAMPLE":  "SOURCE MISSING"
                                                   },
                                  "gapIds":  [
                                                 "GAP-B-06",
                                                 "CL-09"
                                             ]
                              },
                              {
                                  "id":  "tooling-despues-del-modelo",
                                  "title":  "Tooling después del modelo",
                                  "canonicalLayers":  [
                                                          "TOOLING / JIRA"
                                                      ],
                                  "sourceChapters":  [
                                                         "10"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "10. Principios de Diseño",
                                                             "locator":  "P2618–P2652"
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
                         "id":  "proposito",
                         "title":  "Propósito",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los principios de diseño establecen las reglas que deberá respetar el futuro SEIF Product Operating System.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2425"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No constituyen una nueva metodología.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2426"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Son restricciones derivadas directamente del diagnóstico y de las condiciones expresadas por SEIF durante el assessment.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2427"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El kickoff estableció explícitamente la necesidad de diseñar un modelo simple, preciso, sostenible y adecuado para una compañía de aproximadamente 22 personas, evitando la complejidad metodológica que la organización ha experimentado anteriormente.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2428"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2424"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-1-problemas-antes-que-soluciones",
                         "title":  "Principio 1 — Problemas antes que soluciones",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2431"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo histórico descrito por SEIF estuvo fuertemente orientado a solicitudes y funcionalidades.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2432"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El nuevo modelo interno ya propone trabajar a partir de Outcomes.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2433"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2434"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Toda iniciativa debe comenzar con una comprensión del problema antes de comprometerse con una solución.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2435"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto no significa realizar semanas de investigación.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2436"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Significa distinguir explícitamente:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2437"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"El cliente pidió X\"",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2438"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2439"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"El cliente necesita lograr Y.\"",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2440"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2430"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-2-una-unica-logica-de-decision-multiples-fuentes-de-senales",
                         "title":  "Principio 2 — Una única lógica de decisión, múltiples fuentes de señales",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2443"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las señales provienen legítimamente de:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2444"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "clientes;",
                                                          "CS;",
                                                          "Soporte;",
                                                          "Marketing;",
                                                          "Producto;",
                                                          "liderazgo;",
                                                          "tecnología;",
                                                          "datos."
                                                      ],
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2445–P2452"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2453"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no debe limitar quién puede identificar una oportunidad; debe estandarizar cómo una oportunidad se convierte en decisión.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2454"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo futuro deberá permitir múltiples entradas sin crear múltiples sistemas paralelos de priorización.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2455"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2442"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-3-evidencia-proporcional-al-riesgo",
                         "title":  "Principio 3 — Evidencia proporcional al riesgo",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2458"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery y validación ya existen, pero su profundidad varía.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2459"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF también necesita iterar rápidamente y evitar procesos pesados.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2460"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2461"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las iniciativas requieren el mismo Discovery. La profundidad de validación debe ser proporcional a incertidumbre, costo y riesgo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2462"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una modificación pequeña no necesita el mismo tratamiento que:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2463"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "una nueva capacidad;",
                                                          "un producto nuevo;",
                                                          "una iniciativa que requiera meses de Desarrollo;",
                                                          "una capacidad crítica operativamente."
                                                      ],
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2464–P2467"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita convertir Discovery en burocracia.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2468"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2457"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-4-validar-barato-antes-de-desarrollar-caro",
                         "title":  "Principio 4 — Validar barato antes de desarrollar caro",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2471"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX ya utiliza prototipos y validaciones.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2472"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo reportó ciclos prolongados antes de obtener feedback en determinadas iniciativas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2473"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2474"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La incertidumbre debe reducirse utilizando el mecanismo de menor costo disponible antes de consumir capacidad significativa de Desarrollo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2475"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los mecanismos pueden incluir:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2476"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "datos existentes;",
                                                          "entrevista;",
                                                          "prototipo;",
                                                          "simulación;",
                                                          "prueba manual;",
                                                          "experimento;",
                                                          "MVP."
                                                      ],
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2477–P2483"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es prototipar todo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2484"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es aprender antes de invertir cuando la incertidumbre lo justifica.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2485"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2470"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-5-outcome-como-unidad-de-alineacion",
                         "title":  "Principio 5 — Outcome como unidad de alineación",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2488"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya ha definido Outcomes como base del nuevo modelo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2489"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2490"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las áreas pueden tener responsabilidades diferentes, pero deben poder conectarlas con un resultado compartido.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2491"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto, UX, Desarrollo, SRE y CS no necesitan tener el mismo KPI técnico.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2492"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí necesitan comprender:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2493"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué cambio del usuario o negocio pretende generar la iniciativa.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2494"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto conserva correctamente la separación ya planteada por SEIF entre:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2495"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "métricas de Producto;",
                                                          "métricas DORA;",
                                                          "métricas de CS;",
                                                          "métricas de negocio."
                                                      ],
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2496–P2499"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2487"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-6-colaboracion-compartida-accountability-explicita",
                         "title":  "Principio 6 — Colaboración compartida, accountability explícita",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2502"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las células promueven responsabilidad multidisciplinaria.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2503"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment identifica Decision Rights parcialmente distribuidos.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2504"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2505"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todos pueden contribuir al Outcome; una persona o rol debe responder por cada decisión crítica.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2506"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita dos extremos:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2507"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Silos: \"eso ya no es responsabilidad mía.\"",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2508"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ambigüedad: \"todos somos responsables.\"",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2509"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Operating System deberá definir accountability sobre decisiones, no crear jerarquía adicional.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2510"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2501"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-7-flujo-antes-que-utilizacion-individual",
                         "title":  "Principio 7 — Flujo antes que utilización individual",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2513"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización históricamente ha operado por áreas y posteriormente ha evolucionado hacia células.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2514"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DORA también se ha incorporado explícitamente como medición del sistema y no del desempeño individual.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2515"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2516"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La unidad de optimización debe ser el flujo de valor, no la ocupación individual.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2517"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una persona al 100% de utilización no garantiza un sistema rápido.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2518"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diagnóstico muestra que buena parte de la fricción ocurre durante:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2519"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "handoffs;",
                                                          "esperas;",
                                                          "cambios;",
                                                          "dependencias;",
                                                          "feedback tardío."
                                                      ],
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2520–P2524"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo deberá observar el sistema end-to-end.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2525"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2512"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-8-limitar-trabajo-en-curso-antes-de-aumentar-capacidad",
                         "title":  "Principio 8 — Limitar trabajo en curso antes de aumentar capacidad",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2528"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen múltiples fuentes de demanda y diferentes iniciativas compitiendo por capacidad.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2529"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización reconoce dificultades para mantener foco.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2530"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2531"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de incorporar más iniciativas, debe protegerse la capacidad de terminar, validar y aprender de las que ya están activas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2532"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principio no establece todavía un número específico de iniciativas porque la evidencia disponible no permite definirlo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2533"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí establece una regla:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2534"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Start less → Finish earlier → Learn sooner.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2535"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2527"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-9-release-no-equivale-a-valor",
                         "title":  "Principio 9 — Release no equivale a valor",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2538"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya define que un módulo no está terminado simplemente cuando está desarrollado.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2539"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS observa adopción y utilización.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2540"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2541"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ciclo de Producto continúa después de producción.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2542"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La secuencia conceptual será:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2543"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Released",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2544"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2545"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activated",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2546"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2547"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopted",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2548"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2549"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherent",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2550"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2551"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome achieved",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2552"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada nivel responde una pregunta distinta.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2553"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2537"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-10-autonomia-como-atributo-de-producto",
                         "title":  "Principio 10 — Autonomía como atributo de Producto",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2556"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE y CS identificaron dependencias del cliente respecto de SEIF y del administrador.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2557"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2558"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una solución debe evaluarse también por la capacidad del cliente para obtener valor con menor dependencia operacional.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2559"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto convierte autonomía en dimensión de diseño.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2560"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No implica eliminar todo acompañamiento.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2561"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implica distinguir:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2562"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "acompañamiento que genera valor",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2563"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2564"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "acompañamiento necesario porque el producto o proceso no permite autonomía.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2565"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2555"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-11-medir-para-decidir",
                         "title":  "Principio 11 — Medir para decidir",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2568"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya dispone de dashboards y ha avanzado en métricas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2569"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El gap se encuentra en convertir señales en acciones.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2570"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2571"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una métrica relevante debe conducir a una pregunta o decisión.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2572"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La cadena mínima es:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2573"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Métrica",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2574"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2575"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Señal",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2576"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2577"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2578"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2579"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decisión",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2580"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2581"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Acción",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2582"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2583"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2584"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una métrica sin mecanismo de decisión tiene valor principalmente informativo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2585"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2567"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-12-uso-no-equivale-automaticamente-a-valor",
                         "title":  "Principio 12 — Uso no equivale automáticamente a valor",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2588"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards proporcionan información de utilización.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2589"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El propio modelo metodológico de SEIF diferencia uso de adherencia y criterio de éxito.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2590"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2591"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La actividad del usuario debe interpretarse en relación con el Outcome.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2592"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2593"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Login = actividad.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2594"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Registro creado = actividad.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2595"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ronda correctamente completada = resultado funcional.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2596"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente puede demostrar cumplimiento sin reproceso = Outcome.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2597"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta distinción debe mantenerse en todo el futuro modelo de métricas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2598"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2587"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-13-datos-de-operacion-son-datos-de-producto",
                         "title":  "Principio 13 — Datos de operación son datos de Producto",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2601"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte, SRE y CS poseen señales diferentes sobre la experiencia real.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2602"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2603"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tickets, incidentes, intervención manual, fallas de adopción y dependencias son señales del producto, no únicamente de las áreas operativas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2604"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto no elimina ownership especializado.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2605"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cambia la utilización del conocimiento.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2606"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2600"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-14-tecnologia-y-deuda-participan-de-la-decision-de-producto",
                         "title":  "Principio 14 — Tecnología y deuda participan de la decisión de Producto",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2609"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE reconoce deuda técnica relevante.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2610"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo participa en análisis de factibilidad y capacidad.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2611"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2612"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La sostenibilidad técnica debe formar parte de la decisión de inversión y no existir únicamente como una conversación técnica paralela.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2613"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto no significa convertir deuda técnica en \"feature\".",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2614"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Significa hacer visible:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2615"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "riesgo + impacto + capacidad requerida.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2616"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2608"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-15-tooling-despues-del-modelo",
                         "title":  "Principio 15 — Tooling después del modelo",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2619"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ecosistema actual de información se encuentra distribuido.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2620"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diagnóstico determina que la fragmentación no es causada exclusivamente por herramientas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2621"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2622"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El orden de diseño será:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2623"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Operating Model",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2624"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2625"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Information Model",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2626"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2627"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Workflow",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2628"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2629"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Tooling",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2630"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, Jira u otra plataforma deberá implementar las reglas acordadas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2631"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No definirlas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2632"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2618"
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
                         "id":  "principio-16-automatizar-coordinacion-no-decisiones-de-producto",
                         "title":  "Principio 16 — Automatizar coordinación, no decisiones de producto",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2635"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen transferencias manuales de información entre diferentes mecanismos y herramientas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2636"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2637"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La automatización deberá enfocarse inicialmente en actividades como:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2638"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "sincronizar información;",
                                                          "alertar;",
                                                          "crear trazabilidad;",
                                                          "recopilar datos;",
                                                          "reducir doble digitación;",
                                                          "disparar acciones conocidas."
                                                      ],
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2639–P2644"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones de:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2645"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "problema;",
                                                          "valor;",
                                                          "prioridad;",
                                                          "hipótesis;",
                                                          "aprendizaje;"
                                                      ],
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2646–P2650"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "mantendrán responsabilidad humana mientras no exista evidencia que justifique otro modelo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2651"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2634"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-17-ai-como-acelerador-de-aprendizaje-no-como-sustituto-de-discovery",
                         "title":  "Principio 17 — AI como acelerador de aprendizaje, no como sustituto de Discovery",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2654"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La necesidad identificada es reducir el costo y tiempo entre problema, validación y aprendizaje.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2655"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2656"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La Inteligencia Artificial puede acelerar:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2657"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "síntesis de entrevistas;",
                                                          "identificación de patrones;",
                                                          "generación inicial de journeys;",
                                                          "estructuración de reglas;",
                                                          "construcción rápida de prototipos;",
                                                          "documentación;",
                                                          "análisis de feedback."
                                                      ],
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2658–P2664"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2665"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "un artefacto generado por IA no constituye evidencia de que el usuario necesita o utilizará la solución.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2666"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La validación con comportamiento, usuario o datos continúa siendo necesaria.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2667"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2653"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-18-minimum-viable-governance",
                         "title":  "Principio 18 — Minimum Viable Governance",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2670"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo solicitó explícitamente simplicidad y sostenibilidad.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2671"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La compañía tiene una estructura pequeña y experiencias previas de procesos excesivamente complejos.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2672"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2673"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El gobierno utilizará el menor número de mecanismos necesario para garantizar foco, calidad de decisión y accountability.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2674"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto implica preferir:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2675"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5 preguntas",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2676"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "antes que:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2677"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "25 campos.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2678"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1 responsable",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2679"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "antes que:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2680"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3 comités.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2681"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1 review con decisión",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2682"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "antes que:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2683"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "varias reuniones informativas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2684"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2669"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-19-estabilizar-antes-de-sofisticar",
                         "title":  "Principio 19 — Estabilizar antes de sofisticar",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2687"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo reportó sucesivos cambios de formas de trabajo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2688"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo reconoció una tendencia organizacional a complejizar modelos.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2689"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2690"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una práctica nueva debe estabilizarse y demostrar utilidad antes de incorporar una capa adicional de sofisticación.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2691"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evolución del modelo debe seguir:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2692"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Simple",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2693"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2694"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usado",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2695"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2696"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estable",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2697"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2698"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Medido",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2699"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2700"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mejorado",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2701"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y no:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2702"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Simple → Complejo inmediatamente.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2703"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2686"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-20-el-sistema-debe-sobrevivir-a-las-personas-que-lo-disenaron",
                         "title":  "Principio 20 — El sistema debe sobrevivir a las personas que lo diseñaron",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia origen",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2706"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo contractual definido en el kickoff es construir la capacidad interna de Producto y dejar un modelo operativo que pueda ser sostenido por SEIF.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2707"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principio",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2708"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Operating System debe poder operar sin presencia permanente del consultor y sin depender de conocimiento tácito de una sola persona.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2709"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto exige equilibrio:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2710"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "suficiente definición para ser repetible;",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2711"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "sin documentación excesiva que SEIF no pueda mantener.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2712"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2705"
                                         }
                                     ]
                     },
                     {
                         "id":  "matriz-de-trazabilidad-principio-evidencia-problema",
                         "title":  "Matriz de trazabilidad Principio → Evidencia → Problema",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-018",
                                                          "caption":  "Matriz de trazabilidad Principio → Evidencia → Problema",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Principio",
                                                                          "Evidencia que responde",
                                                                          "Problema atacado"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Problemas antes que soluciones",
                                                                           "Historia de feature factory",
                                                                           "Soluciones prematuras"
                                                                       ],
                                                                       [
                                                                           "Una lógica de decisión",
                                                                           "Múltiples fuentes",
                                                                           "Fragmentación del intake"
                                                                       ],
                                                                       [
                                                                           "Evidencia proporcional",
                                                                           "Discovery variable",
                                                                           "Burocracia / incertidumbre"
                                                                       ],
                                                                       [
                                                                           "Validar barato",
                                                                           "Prototipos + feedback tardío",
                                                                           "Learning Lead Time"
                                                                       ],
                                                                       [
                                                                           "Outcome como alineación",
                                                                           "Modelo actual de SEIF",
                                                                           "Silos de objetivo"
                                                                       ],
                                                                       [
                                                                           "Accountability explícita",
                                                                           "Células",
                                                                           "Ambigüedad"
                                                                       ],
                                                                       [
                                                                           "Flujo antes que utilización",
                                                                           "Handoffs + DORA",
                                                                           "Optimización local"
                                                                       ],
                                                                       [
                                                                           "Limitar WIP",
                                                                           "Demanda múltiple",
                                                                           "Pérdida de foco"
                                                                       ],
                                                                       [
                                                                           "Release ≠ valor",
                                                                           "CS + metodología SEIF",
                                                                           "Feature factory"
                                                                       ],
                                                                       [
                                                                           "Autonomía",
                                                                           "SRE + CS",
                                                                           "Dependencia"
                                                                       ],
                                                                       [
                                                                           "Medir para decidir",
                                                                           "Dashboards",
                                                                           "Reporting sin acción"
                                                                       ],
                                                                       [
                                                                           "Uso ≠ valor",
                                                                           "Modelo metodológico",
                                                                           "Vanity metrics"
                                                                       ],
                                                                       [
                                                                           "Operación → Producto",
                                                                           "SRE/Soporte/CS",
                                                                           "Feedback fragmentado"
                                                                       ],
                                                                       [
                                                                           "Deuda en decisión",
                                                                           "SRE",
                                                                           "Deuda aislada"
                                                                       ],
                                                                       [
                                                                           "Tooling después del modelo",
                                                                           "Herramientas distribuidas",
                                                                           "Digitalizar desorden"
                                                                       ],
                                                                       [
                                                                           "Automatizar coordinación",
                                                                           "Doble manejo de información",
                                                                           "Overprocessing"
                                                                       ],
                                                                       [
                                                                           "IA acelera aprendizaje",
                                                                           "Necesidad de validación rápida",
                                                                           "Costo de Discovery"
                                                                       ],
                                                                       [
                                                                           "Gobierno mínimo",
                                                                           "Kickoff",
                                                                           "Sobreproceso"
                                                                       ],
                                                                       [
                                                                           "Estabilizar",
                                                                           "Desarrollo + liderazgo",
                                                                           "Fatiga de cambio"
                                                                       ],
                                                                       [
                                                                           "Sostenibilidad",
                                                                           "Objetivo del kickoff",
                                                                           "Dependencia del consultor"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "10. Principios de Diseño",
                                                                         "locator":  "T18"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2714"
                                         }
                                     ]
                     },
                     {
                         "id":  "guardrails-del-futuro-operating-system",
                         "title":  "Guardrails del futuro Operating System",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "De los principios anteriores se derivan cinco límites explícitos para el diseño.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2717"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrail 1",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2718"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ningún proceso deberá existir únicamente para completar documentación.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2719"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrail 2",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2720"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ninguna iniciativa relevante deberá consumir capacidad significativa sin claridad mínima sobre problema y Outcome.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2721"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrail 3",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2722"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ningún release se considerará evidencia suficiente de éxito del producto.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2723"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrail 4",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2724"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ninguna métrica será incorporada sin definir qué decisión soporta.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2725"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrail 5",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2726"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ninguna herramienta deberá crear una capa adicional de complejidad para compensar un proceso que todavía no está definido.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2727"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2716"
                                         }
                                     ]
                     },
                     {
                         "id":  "conclusion-de-diseno",
                         "title":  "Conclusión de diseño",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diagnóstico AS-IS no conduce a un modelo más complejo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2730"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Conduce a un sistema más disciplinado y menos variable.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2731"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los principios establecen que el futuro SEIF Product Operating System deberá:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2732"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "capturar múltiples señales, entender problemas antes de construir, reducir incertidumbre temprano, tomar decisiones explícitas, limitar trabajo, incorporar sostenibilidad técnica, extender responsabilidad hasta adopción y convertir datos operativos en aprendizaje continuo.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2733"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Y deberá hacerlo bajo una restricción fundamental derivada directamente del contexto de SEIF:",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2734"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "la simplicidad no será una característica estética del modelo; será un requisito operativo para que pueda sostenerse.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2735"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con estos principios queda establecida la arquitectura conceptual necesaria para pasar al 11. Product Operating Model TO-BE, donde estas reglas se transformarán en etapas, owners, entradas, salidas, gates, métricas y decisiones concretas.",
                                            "source":  {
                                                           "title":  "10. Principios de Diseño",
                                                           "locator":  "P2736"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "10. Principios de Diseño",
                                             "locator":  "P2729"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "value-stream",
                    "root-causes",
                    "maturity",
                    "waste-friction",
                    "operating-model"
                ],
    "source":  {
                   "title":  "10. Principios de Diseño",
                   "locator":  "P2423–P2736",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
