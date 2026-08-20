import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "artifacts",
    "group":  "Operating Model",
    "title":  "Artefactos mínimos",
    "sourceTitle":  "20. Artefactos Mínimos",
    "eyebrow":  "20 · Business objects",
    "summary":  "Ocho artefactos fuente conservan el contexto mínimo para conectar señales, problemas, Outcomes, Bets, ejecución, evidencia, aprendizaje y decisiones.",
    "takeaway":  "El artefacto mínimo es el que permite entender por qué importa, qué sabemos, qué falta, qué se decidió, quién responde y qué ocurre después.",
    "executive":  {
                      "keyFindings":  [
                                          "La fuente define ocho artefactos core y objetos embebidos cuando agregan evidencia o contexto.",
                                          "Los campos se capturan únicamente donde el documento los especifica.",
                                          "El lifecycle fuente evoluciona desde Signal hasta Decision y vuelve a comenzar.",
                                          "La relación con Jira permanece lógica y recomendada; no define issue types ni workflows aprobados."
                                      ],
                      "implication":  "Los objetos forman una gramática operativa propuesta. Ownership, tooling y campos operacionales conservan sus validaciones abiertas.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "cards",
                      "sources":  [
                                      {
                                          "title":  "20. Artefactos Mínimos",
                                          "locator":  "P11070–P12078"
                                      }
                                  ]
                  },
    "operatingConcepts":  [
                              {
                                  "id":  "minimum-artifacts",
                                  "title":  "Sistema de artefactos mínimos",
                                  "canonicalLayers":  [
                                                          "DISCOVER",
                                                          "DECIDE",
                                                          "DELIVER",
                                                          "ADOPT",
                                                          "LEARN",
                                                          "EVIDENCE"
                                                      ],
                                  "sourceChapters":  [
                                                         "20"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "20. Artefactos Mínimos",
                                                             "locator":  "P11128–P11866"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE COMPLETE",
                                                       "INPUT":  "SOURCE COMPLETE",
                                                       "OUTPUT":  "SOURCE COMPLETE",
                                                       "ARTIFACT":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "EXAMPLE":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE PARTIAL"
                                                   },
                                  "gapIds":  [
                                                 "CL-04",
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
                                            "text":  "El SEIF Minimum Viable Artifact Model define el conjunto mínimo de artefactos necesarios para operar el Product Operating System diseñado en este assessment.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11072"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diagnóstico no evidencia que SEIF necesite más documentación. La organización ya produce información desde Producto, UX, Desarrollo, SRE, Customer Success, Soporte y Marketing.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11073"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La necesidad es diferente:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11074"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "convertir información distribuida en pocos artefactos compartidos que permitan entender, decidir, ejecutar, medir y aprender sin agregar burocracia.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11075"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para una organización del tamaño de SEIF, el riesgo de diseñar un Operating Model excesivamente sofisticado es relevante.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11076"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, este modelo se construye bajo un principio Lean:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11077"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si un artefacto no mejora una decisión, el flujo o el aprendizaje, no debe existir.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11078"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11071"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-de-diseno",
                         "title":  "Principio de diseño",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los artefactos del TO-BE deben cumplir seis condiciones:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11081"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Tener propósito",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11082"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada artefacto responde una pregunta específica.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11083"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Tener owner",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11084"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Alguien responde por mantenerlo útil.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11085"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Tener ciclo de vida",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11086"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se documenta una vez para quedar obsoleto.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11087"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Evitar duplicación",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11088"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una información debe tener una fuente principal.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11089"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Mantenerse ligero",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11090"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La profundidad depende del riesgo.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11091"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Conectarse",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11092"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los artefactos deben formar una cadena de trazabilidad.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11093"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura es:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11094"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11095"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ OPPORTUNITY",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11096"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ OUTCOME",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11097"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ BET",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11098"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ DELIVERY",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11099"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ RELEASE",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11100"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ EVIDENCE",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11101"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ LEARNING",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11102"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ DECISION",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11103"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se requieren documentos independientes para cada paso.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11104"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11080"
                                         }
                                     ]
                     },
                     {
                         "id":  "minimum-viable-documentation",
                         "title":  "Minimum Viable Documentation",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF debe operar bajo:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11107"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Documentar lo suficiente para preservar contexto y mejorar decisiones; no documentar para demostrar que el proceso ocurrió.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11108"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto implica que una iniciativa pequeña y reversible puede requerir:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11109"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "una Opportunity breve;",
                                                          "una hipótesis;",
                                                          "una métrica;",
                                                          "una decisión."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11110–P11113"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mientras una iniciativa:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11114"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "costosa;",
                                                          "irreversible;",
                                                          "técnicamente compleja;",
                                                          "operacionalmente riesgosa;"
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11115–P11118"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "requiere mayor profundidad.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11119"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11120"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Documentation ∝ Risk + Uncertainty + Investment",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11121"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las Bets requieren el mismo nivel documental.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11122"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11106"
                                         }
                                     ]
                     },
                     {
                         "id":  "arquitectura-de-artefactos",
                         "title":  "Arquitectura de artefactos",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Operating System requiere inicialmente ocho artefactos principales:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11125"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-075",
                                                          "caption":  "Arquitectura de artefactos",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "#",
                                                                          "Artefacto",
                                                                          "Pregunta que responde"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1",
                                                                           "Signal",
                                                                           "¿Qué observamos?"
                                                                       ],
                                                                       [
                                                                           "2",
                                                                           "Opportunity Card",
                                                                           "¿Qué problema merece atención?"
                                                                       ],
                                                                       [
                                                                           "3",
                                                                           "Evidence Map",
                                                                           "¿Qué sabemos realmente?"
                                                                       ],
                                                                       [
                                                                           "4",
                                                                           "Outcome Card",
                                                                           "¿Qué resultado queremos modificar?"
                                                                       ],
                                                                       [
                                                                           "5",
                                                                           "Bet Card",
                                                                           "¿Qué creemos que puede producirlo?"
                                                                       ],
                                                                       [
                                                                           "6",
                                                                           "Outcome Board",
                                                                           "¿Dónde está nuestra inversión ahora?"
                                                                       ],
                                                                       [
                                                                           "7",
                                                                           "Learning Card",
                                                                           "¿Qué ocurrió y qué aprendimos?"
                                                                       ],
                                                                       [
                                                                           "8",
                                                                           "Decision Log",
                                                                           "¿Qué decidimos y por qué?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "20. Artefactos Mínimos",
                                                                         "locator":  "T75"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El resto de información debe integrarse dentro de estos artefactos o generarse automáticamente desde las herramientas.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11126"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11124"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefacto-1-signal",
                         "title":  "Artefacto 1 — Signal",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11129"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capturar una señal relevante sin convertirla prematuramente en requerimiento.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11130"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Signal puede provenir de:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11131"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cliente;",
                                                          "Customer Success;",
                                                          "Soporte;",
                                                          "UX;",
                                                          "Marketing;",
                                                          "Producto;",
                                                          "analytics;",
                                                          "Desarrollo;",
                                                          "SRE."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11132–P11140"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contenido mínimo",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11141"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Source",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11142"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿De dónde proviene?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11143"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actor",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11144"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién experimenta la situación?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11145"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11146"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11147"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Context",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11148"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿En qué situación?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11149"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Module / Journey",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11150"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11151"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11152"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué respaldo existe?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11153"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Impact",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11154"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué consecuencia observable genera?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11155"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11128"
                                         }
                                     ]
                     },
                     {
                         "id":  "lo-que-signal-no-debe-contener-obligatoriamente",
                         "title":  "Lo que Signal no debe contener obligatoriamente",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Signal no necesita:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11158"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "solución;",
                                                          "estimación;",
                                                          "prioridad;",
                                                          "historia de usuario;",
                                                          "Business Case;",
                                                          "aprobación."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11159–P11164"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11165"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Clientes solicitan X.”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11166"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "es una señal.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11167"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todavía no significa:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11168"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Debemos construir X.”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11169"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta separación es fundamental.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11170"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11157"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefacto-2-opportunity-card",
                         "title":  "Artefacto 2 — Opportunity Card",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11173"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Convertir Signals y Patterns en un problema suficientemente claro para decidir si merece investigación o inversión.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11174"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contenido mínimo",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11175"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11176"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema existe?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11177"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actor / Segment",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11178"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién lo experimenta?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11179"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Context",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11180"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuándo ocurre?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11181"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11182"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia existe?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11183"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Impact",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11184"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué consecuencia genera?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11185"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Link",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11186"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué resultado podría estar afectando?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11187"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence Strength",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11188"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Weak / Emerging / Strong / Validated.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11189"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Unknowns",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11190"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué necesitamos entender?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11191"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision State",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11192"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explore / Prioritize / Wait / Discard.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11193"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11172"
                                         }
                                     ]
                     },
                     {
                         "id":  "opportunity-card-regla-fundamental",
                         "title":  "Opportunity Card — regla fundamental",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe comenzar con:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11196"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Construir…”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11197"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Implementar…”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11198"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Crear…”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11199"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Agregar…”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11200"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe comenzar con el problema.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11201"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11202"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incorrecto",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11203"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Crear nueva funcionalidad de configuración.”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11204"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Correcto",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11205"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Clientes requieren intervención recurrente para completar la configuración necesaria para obtener valor.”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11206"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La primera frase prescribe.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11207"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La segunda permite Discovery.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11208"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11195"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefacto-3-evidence-map",
                         "title":  "Artefacto 3 — Evidence Map",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11211"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Consolidar evidencia distribuida alrededor de una Opportunity.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11212"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Evidence Map evita que la decisión dependa de la fuente que habla más fuerte.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11213"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estructura",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11214"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-076",
                                                          "caption":  "Artefacto 3 — Evidence Map",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Fuente",
                                                                          "Señal / Evidencia",
                                                                          "Fuerza",
                                                                          "Qué indica"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Customer",
                                                                           "Feedback",
                                                                           "Weak/Emerging/...",
                                                                           "Interpretación"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Observación",
                                                                           "—",
                                                                           "—"
                                                                       ],
                                                                       [
                                                                           "Support",
                                                                           "Tickets",
                                                                           "—",
                                                                           "—"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Research",
                                                                           "—",
                                                                           "—"
                                                                       ],
                                                                       [
                                                                           "Analytics",
                                                                           "Behavior",
                                                                           "—",
                                                                           "—"
                                                                       ],
                                                                       [
                                                                           "Development",
                                                                           "Technical",
                                                                           "—",
                                                                           "—"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Operational",
                                                                           "—",
                                                                           "—"
                                                                       ],
                                                                       [
                                                                           "Marketing",
                                                                           "Market",
                                                                           "—",
                                                                           "—"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "20. Artefactos Mínimos",
                                                                         "locator":  "T76"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las filas deben estar completas.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11215"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11210"
                                         }
                                     ]
                     },
                     {
                         "id":  "evidence-map-no-es-un-informe",
                         "title":  "Evidence Map no es un informe",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su propósito es responder:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11218"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Tenemos suficiente evidencia para decidir o necesitamos aprender algo más?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11219"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, puede ser una sección dentro de la Opportunity Card.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11220"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No necesariamente una página separada.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11221"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11217"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefacto-4-outcome-card",
                         "title":  "Artefacto 4 — Outcome Card",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11224"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Definir el resultado que justifica la inversión.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11225"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La Outcome Card es uno de los artefactos centrales del Operating System.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11226"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contenido mínimo",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11227"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11228"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué cambio observable buscamos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11229"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actor / Population",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11230"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿En quién?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11231"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Current State / Baseline",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11232"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurre actualmente?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11233"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Success Criteria",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11234"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo sabemos que el usuario logró valor?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11235"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Metric",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11236"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué señal representa el resultado?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11237"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Leading Indicators",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11238"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué comportamiento podría anticiparlo?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11239"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrails",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11240"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué no debemos deteriorar?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11241"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Owner",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11242"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11243"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review Frequency",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11244"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuándo revisamos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11245"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11223"
                                         }
                                     ]
                     },
                     {
                         "id":  "outcome-card-extendida",
                         "title":  "Outcome Card extendida",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando la iniciativa lo requiera puede incorporar:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11248"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Journey;",
                                                          "Moment of Truth;",
                                                          "TTV;",
                                                          "Activation;",
                                                          "Adoption;",
                                                          "Adherence;",
                                                          "segmentación;",
                                                          "riesgos;",
                                                          "relación con North Star."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11249–P11257"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es obligatorio completar todos los elementos para cada caso.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11258"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se utiliza lo necesario para decidir y medir.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11259"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11247"
                                         }
                                     ]
                     },
                     {
                         "id":  "ejemplo-control-de-rondas",
                         "title":  "Ejemplo — Control de Rondas",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilizando exclusivamente la definición existente de SEIF:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11262"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11263"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Permitir demostrar, sin reprocesos operativos, que las rondas se ejecutan correctamente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11264"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Vigilante — Success Criteria",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11265"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Completa su ronda y recibe confirmación clara.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11266"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Supervisor",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11267"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Verifica cumplimiento sin reprocesos ni consultas adicionales.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11268"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente / Gerente",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11269"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recibe un reporte confiable que demuestra el servicio prestado.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11270"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11271"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primer login → primera ronda completada correctamente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11272"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este ejemplo demuestra que SEIF ya posee parte del contenido requerido.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11273"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE busca convertirlo en un artefacto operacional.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11274"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11261"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefacto-5-bet-card",
                         "title":  "Artefacto 5 — Bet Card",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11277"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hacer explícita la hipótesis de inversión.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11278"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Bet representa:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11279"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "una intervención que creemos que puede modificar un Outcome.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11280"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No equivale necesariamente a una Feature.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11281"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede ser:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11282"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cambio de UX;",
                                                          "automatización;",
                                                          "simplificación;",
                                                          "cambio funcional;",
                                                          "intervención de onboarding;",
                                                          "comunicación;",
                                                          "cambio técnico;",
                                                          "eliminación de fricción;",
                                                          "experimento."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11283–P11291"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11276"
                                         }
                                     ]
                     },
                     {
                         "id":  "estructura-minima-de-bet",
                         "title":  "Estructura mínima de Bet",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "We believe",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11294"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué creemos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11295"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "For",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11296"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Para quién?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11297"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "By",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11298"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué intervención realizaremos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11299"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We expect",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11300"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué debería cambiar?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11301"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11302"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué señal observaremos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11303"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrails",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11304"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué no debe deteriorarse?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11305"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review Trigger",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11306"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuándo decidiremos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11307"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11308"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde por mantener coherencia de la Bet?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11309"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11293"
                                         }
                                     ]
                     },
                     {
                         "id":  "bet-project-charter",
                         "title":  "Bet ≠ Project Charter",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No necesita inicialmente:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11312"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "documento extenso;",
                                                          "presupuesto detallado;",
                                                          "cronograma completo;",
                                                          "comité;",
                                                          "aprobación múltiple."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11313–P11317"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para una Bet pequeña, el artefacto puede ocupar una sola pantalla.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11318"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La profundidad aumenta con:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11319"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cost + Risk + Irreversibility + Uncertainty.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11320"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11311"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefacto-6-outcome-board",
                         "title":  "Artefacto 6 — Outcome Board",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11323"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dar visibilidad al flujo real de inversión.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11324"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Outcome Board no debe organizarse únicamente alrededor de tareas.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11325"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe permitir observar:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11326"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunities",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11327"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Discovery",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11328"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Prioritized",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11329"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Delivery",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11330"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Released",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11331"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Measuring",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11332"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Learned",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11333"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La terminación del desarrollo no representa el final del flujo.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11334"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11322"
                                         }
                                     ]
                     },
                     {
                         "id":  "que-debe-mostrar-el-outcome-board",
                         "title":  "Qué debe mostrar el Outcome Board",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada elemento relevante:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11337"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "Opportunity;",
                                                          "Bet;",
                                                          "owner;",
                                                          "estado;",
                                                          "WIP;",
                                                          "blockers;",
                                                          "Aging;",
                                                          "Review Trigger;",
                                                          "decisión pendiente."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11338–P11347"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La implementación detallada puede realizarse posteriormente en Jira.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11348"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11336"
                                         }
                                     ]
                     },
                     {
                         "id":  "que-no-debe-convertirse-en-outcome-board",
                         "title":  "Qué no debe convertirse en Outcome Board",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe ser un duplicado del backlog técnico.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11351"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El backlog técnico responde:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11352"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué trabajo necesita realizar Desarrollo?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11353"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Outcome Board responde:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11354"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde está la inversión y qué estamos esperando aprender o conseguir?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11355"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ambos niveles deben relacionarse.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11356"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No confundirse.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11357"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11350"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefacto-7-learning-card",
                         "title":  "Artefacto 7 — Learning Card",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11360"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cerrar el ciclo después de una Bet.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11361"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contenido",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11362"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We believed",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11363"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué creíamos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11364"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Because",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11365"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia respaldaba esa creencia?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11366"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We expected",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11367"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué resultado esperábamos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11368"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We observed",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11369"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11370"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We learned",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11371"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué cambió en nuestro entendimiento?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11372"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11373"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scale / Continue / Adjust / Explore / Stop.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11374"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11359"
                                         }
                                     ]
                     },
                     {
                         "id":  "definition-of-learned",
                         "title":  "Definition of Learned",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Learning Card se considera completa cuando:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11377"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "existía una hipótesis;",
                                                          "existía una señal esperada;",
                                                          "se obtuvo evidencia;",
                                                          "se comparó esperado vs observado;",
                                                          "se explicitó aprendizaje;",
                                                          "se tomó una decisión."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11378–P11383"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin decisión:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11384"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "el ciclo permanece abierto.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11385"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11376"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefacto-8-decision-log",
                         "title":  "Artefacto 8 — Decision Log",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11388"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Preservar las decisiones materiales del Product Operating System.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11389"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no necesita registrar cada decisión cotidiana.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11390"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo aquellas cuyo contexto será importante posteriormente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11391"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estructura mínima",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11392"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11393"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué se decidió?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11394"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Date",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11395"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuándo?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11396"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Context",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11397"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema resolvía?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11398"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11399"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia existía?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11400"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Rationale",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11401"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11402"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trade-off",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11403"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué se dejó de hacer o qué riesgo se aceptó?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11404"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11405"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11406"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review Trigger",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11407"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia podría hacer que revisemos esta decisión?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11408"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11387"
                                         }
                                     ]
                     },
                     {
                         "id":  "que-decisiones-deben-registrarse",
                         "title":  "Qué decisiones deben registrarse",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ejemplo:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11411"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "priorización relevante;",
                                                          "descarte de Opportunity;",
                                                          "cambio de Outcome;",
                                                          "aceptación de riesgo;",
                                                          "inversión significativa;",
                                                          "stop de una Bet;",
                                                          "trade-off técnico relevante;",
                                                          "cambio de dirección."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11412–P11419"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No registrar:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11420"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "microdecisiones;",
                                                          "conversaciones operacionales;",
                                                          "decisiones triviales reversibles."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11421–P11423"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11410"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-embebidos",
                         "title":  "Artefactos embebidos",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Algunos elementos necesarios no requieren convertirse en artefactos independientes.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11426"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Deben incorporarse donde corresponda.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11427"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Journey Map",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11428"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro de Discovery/Outcome cuando aporta valor.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11429"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Moment of Truth",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11430"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro del Journey.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11431"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11432"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro del Outcome Metric Tree.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11433"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Business Rules",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11434"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro de la definición funcional correspondiente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11435"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Risks",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11436"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro de Opportunity/Bet.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11437"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Acceptance Criteria",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11438"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro del trabajo de Delivery.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11439"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release Readiness",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11440"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro del flujo de release.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11441"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metrics",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11442"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro de Outcome Card / dashboards.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11443"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce proliferación documental.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11444"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11425"
                                         }
                                     ]
                     },
                     {
                         "id":  "journey-map-uso-selectivo",
                         "title":  "Journey Map — uso selectivo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Journey Map es necesario cuando comprender el recorrido es crítico para la Opportunity.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11447"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe producirse para toda modificación.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11448"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe responder:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11449"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde ocurre el problema y dónde debería ocurrir el valor?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11450"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contenido:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11451"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actor",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11452"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11453"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Goal",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11454"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11455"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Steps",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11456"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11457"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11458"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11459"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Moment of Truth",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11460"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11461"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Success Event",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11462"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para Control de Rondas, SEIF ya posee esta lógica.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11463"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11446"
                                         }
                                     ]
                     },
                     {
                         "id":  "prototype",
                         "title":  "Prototype",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El prototipo tampoco necesita convertirse en documento formal.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11466"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es un artefacto de aprendizaje.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11467"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su propósito es:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11468"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "reducir incertidumbre antes de comprometer desarrollo.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11469"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede ser:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11470"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "wireframe;",
                                                          "flujo;",
                                                          "mockup;",
                                                          "simulación;",
                                                          "prototipo navegable;",
                                                          "representación generada con IA."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11471–P11476"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe vincularse con:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11477"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity → Hypothesis → Validation → Evidence.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11478"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11465"
                                         }
                                     ]
                     },
                     {
                         "id":  "uso-de-ia-en-artefactos",
                         "title":  "Uso de IA en artefactos",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La IA puede reducir significativamente el costo administrativo del Operating System.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11481"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede apoyar:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11482"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "sintetizar entrevistas;",
                                                          "agrupar Signals;",
                                                          "preparar Opportunity Cards;",
                                                          "resumir Evidence Maps;",
                                                          "generar variantes de prototipos;",
                                                          "convertir decisiones en Decision Logs;",
                                                          "resumir Outcome Reviews;",
                                                          "preparar historias y criterios;",
                                                          "detectar información faltante."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11483–P11491"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La regla es:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11492"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "IA prepara y sintetiza; el owner valida y decide.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11493"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11480"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-de-delivery",
                         "title":  "Artefactos de Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Operating System no elimina los artefactos técnicos necesarios.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11496"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo puede mantener:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11497"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "historias;",
                                                          "tareas;",
                                                          "bugs;",
                                                          "criterios de aceptación;",
                                                          "documentación técnica;",
                                                          "ADRs cuando correspondan;",
                                                          "tests;",
                                                          "release information."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11498–P11505"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero estos artefactos pertenecen al nivel de Delivery.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11506"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No deben convertirse en sustitutos de:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11507"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Opportunity;",
                                                          "Outcome;",
                                                          "Bet;",
                                                          "Learning."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11508–P11511"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una historia explica qué construir.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11512"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No explica necesariamente por qué invertir.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11513"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11495"
                                         }
                                     ]
                     },
                     {
                         "id":  "user-story-uso-correcto",
                         "title":  "User Story — uso correcto",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no necesita convertir toda necesidad en:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11516"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Como usuario quiero…”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11517"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La User Story puede ser útil para Delivery.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11518"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero no reemplaza Discovery.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11519"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La cadena correcta es:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11520"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11521"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11522"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11523"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11524"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11525"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11526"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11527"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11528"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "User Story / Delivery Item",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11529"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11530"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Request",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11531"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11532"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "User Story",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11533"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11534"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Development",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11535"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11515"
                                         }
                                     ]
                     },
                     {
                         "id":  "acceptance-criteria",
                         "title":  "Acceptance Criteria",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los criterios de aceptación responden:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11538"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La solución cumple el comportamiento esperado?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11539"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El criterio de éxito responde:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11540"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El usuario obtuvo valor?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11541"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ambos deben permanecer separados.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11542"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Feature puede cumplir todos sus Acceptance Criteria y no generar Outcome.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11543"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11537"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-de-sre",
                         "title":  "Artefactos de SRE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE mantiene los artefactos técnicos necesarios para:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11546"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "observabilidad;",
                                                          "incidentes;",
                                                          "reliability;",
                                                          "recovery;",
                                                          "riesgos;",
                                                          "deuda."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11547–P11552"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todos necesitan integrarse al nivel de Producto.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11553"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo se eleva información cuando afecta:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11554"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "cliente;",
                                                          "riesgo;",
                                                          "capacidad;",
                                                          "inversión."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11555–P11559"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita sobrecargar el Product Operating System con detalle técnico innecesario.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11560"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11545"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-de-customer-success",
                         "title":  "Artefactos de Customer Success",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS no necesita duplicar la documentación de Producto.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11563"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su información relevante debe alimentar:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11564"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Signal;",
                                                          "Adoption;",
                                                          "TTV;",
                                                          "Adherence;",
                                                          "Customer Autonomy;",
                                                          "Evidence Map."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11565–P11570"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El contexto específico de cuenta puede permanecer en las herramientas correspondientes.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11571"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto necesita la señal agregada.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11572"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todo el historial operacional.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11573"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11562"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-de-soporte",
                         "title":  "Artefactos de Soporte",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ticket continúa siendo el artefacto operacional de Soporte.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11576"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11577"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ticket ≠ Opportunity",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11578"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo correcto es:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11579"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tickets",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11580"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11581"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pattern",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11582"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11583"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11584"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11585"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11586"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita convertir el backlog de Soporte en roadmap de Producto.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11587"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11575"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-de-marketing",
                         "title":  "Artefactos de Marketing",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing puede mantener artefactos propios de:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11590"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "campañas;",
                                                          "mensajes;",
                                                          "segmentos;",
                                                          "contenidos."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11591–P11594"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La integración con Product Operating System ocurre mediante:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11595"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Market Signals;",
                                                          "Growth Opportunities;",
                                                          "Product Marketing;",
                                                          "Adoption Evidence."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11596–P11599"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se requiere duplicar sus artefactos dentro de Producto.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11600"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11589"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-de-gobierno",
                         "title":  "Artefactos de gobierno",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los rituales del capítulo 19 consumen los artefactos existentes.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11603"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Weekly Flow Review",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11604"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Board.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11605"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity Review",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11606"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity Card + Evidence.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11607"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Review",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11608"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototype + Journey cuando corresponda.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11609"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Review",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11610"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Card + Metrics + Learning.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11611"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quarterly Review",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11612"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Portfolio + North Star / Metric Tree.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11613"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11614"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "los rituales no deben generar una segunda capa de presentaciones.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11615"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11602"
                                         }
                                     ]
                     },
                     {
                         "id":  "regla-no-powerpoint-para-operar",
                         "title":  "Regla: No PowerPoint para operar",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las presentaciones pueden utilizarse para:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11618"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "comunicación ejecutiva;",
                                                          "estrategia;",
                                                          "clientes;",
                                                          "decisiones extraordinarias."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11619–P11622"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No deberían ser necesarias para cada ritual operacional.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11623"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El estado del sistema debe estar disponible en:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11624"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Jira;",
                                                          "dashboards;",
                                                          "Confluence cuando requiera narrativa."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11625–P11627"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce preparación manual.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11628"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11617"
                                         }
                                     ]
                     },
                     {
                         "id":  "source-of-truth",
                         "title":  "Source of Truth",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo propone una separación clara.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11631"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Jira",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11632"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuente de verdad para:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11633"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "estado;",
                                                          "ownership;",
                                                          "workflow;",
                                                          "WIP;",
                                                          "relaciones;",
                                                          "ejecución;",
                                                          "decisiones de flujo."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11634–P11640"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Confluence",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11641"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuente de contexto para:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11642"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Discovery;",
                                                          "Evidence;",
                                                          "decisiones complejas;",
                                                          "aprendizajes;",
                                                          "documentación narrativa."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11643–P11647"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Analytics / BI",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11648"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuente de:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11649"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "comportamiento;",
                                                          "Outcome metrics;",
                                                          "adopción;",
                                                          "North Star;",
                                                          "tendencias."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11650–P11654"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "JSM",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11655"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuente de:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11656"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "solicitudes;",
                                                          "incidentes;",
                                                          "patrones de soporte."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11657–P11659"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura evita replicar toda la información en todas las plataformas.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11660"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11630"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura de tooling y relación con business objects",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "arquitectura-logica-en-jira",
                         "title":  "Arquitectura lógica en Jira",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una evolución posible del modelo lógico es:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11663"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11664"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11665"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OPPORTUNITY",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11666"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11667"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BET",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11668"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11669"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EPIC / DELIVERY",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11670"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11671"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "STORY / TASK / BUG",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11672"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "con relaciones laterales hacia:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11673"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11674"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11675"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11676"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11677"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No implica necesariamente crear todos estos elementos como nuevos Issue Types desde el primer día.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11678"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La implementación debe comenzar con la configuración mínima viable.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11679"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11662"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura de tooling y relación con business objects",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "jira-principio-de-configuracion",
                         "title":  "Jira — principio de configuración",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF debe evitar convertir Jira en una representación completa de la organización.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11682"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principio es:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11683"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "configurar Jira alrededor del flujo de decisiones y trabajo que realmente necesita visibilidad.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11684"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evitar:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11685"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "demasiados Issue Types;",
                                                          "workflows diferentes sin necesidad;",
                                                          "custom fields excesivos;",
                                                          "estados redundantes;",
                                                          "permisos complejos;",
                                                          "múltiples proyectos para resolver problemas organizacionales."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11686–P11691"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura detallada debe diseñarse durante implementación.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11692"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11681"
                                         }
                                     ]
                     },
                     {
                         "id":  "confluence-templates-minimos",
                         "title":  "Confluence — Templates mínimos",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si se utiliza Confluence, los templates iniciales pueden limitarse a:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11695"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity / Discovery",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11696"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema + Evidence + Unknowns + Decision.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11697"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11698"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome + Metrics + Owner + Review.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11699"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11700"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected + Actual + Learning + Decision.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11701"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11702"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision + Evidence + Rationale + Review Trigger.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11703"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuatro templates son suficientes para iniciar.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11704"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11694"
                                         }
                                     ]
                     },
                     {
                         "id":  "dashboard-minimo",
                         "title":  "Dashboard mínimo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe existir un dashboard por cada rol desde el primer día.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11707"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La primera arquitectura puede limitarse a:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11708"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Outcome Dashboard",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11709"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para Producto y liderazgo.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11710"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Flow Dashboard",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11711"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para células.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11712"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Product Health Dashboard",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11713"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV / Activation / Adoption / Adherence / Friction.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11714"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Technical Health Dashboard",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11715"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DORA / Reliability.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11716"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards se amplían cuando existe una pregunta de gestión que lo justifique.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11717"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11706"
                                         }
                                     ]
                     },
                     {
                         "id":  "artifact-ownership",
                         "title":  "Artifact Ownership",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-077",
                                                          "caption":  "Artifact Ownership",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Artefacto",
                                                                          "Owner"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Signal",
                                                                           "Fuente"
                                                                       ],
                                                                       [
                                                                           "Opportunity Card",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Evidence Map",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Journey",
                                                                           "UX"
                                                                       ],
                                                                       [
                                                                           "Outcome Card",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Prototype",
                                                                           "UX / Producto según contexto"
                                                                       ],
                                                                       [
                                                                           "Bet Card",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Delivery Items",
                                                                           "Desarrollo"
                                                                       ],
                                                                       [
                                                                           "Outcome Board",
                                                                           "Producto / célula"
                                                                       ],
                                                                       [
                                                                           "Release Readiness",
                                                                           "Desarrollo/SRE"
                                                                       ],
                                                                       [
                                                                           "Learning Card",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Decision Log",
                                                                           "Decision Owner"
                                                                       ],
                                                                       [
                                                                           "Adoption Metrics",
                                                                           "CS"
                                                                       ],
                                                                       [
                                                                           "Reliability Metrics",
                                                                           "SRE"
                                                                       ],
                                                                       [
                                                                           "Support Patterns",
                                                                           "Soporte"
                                                                       ],
                                                                       [
                                                                           "Market Signals",
                                                                           "Marketing"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "20. Artefactos Mínimos",
                                                                         "locator":  "T77"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner no significa autor único.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11720"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Significa accountable por su utilidad.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11721"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11719"
                                         }
                                     ]
                     },
                     {
                         "id":  "artifact-lifecycle",
                         "title":  "Artifact Lifecycle",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los artefactos deben evolucionar junto con la inversión.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11724"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11725"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nace cuando aparece una observación relevante.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11726"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11727"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11728"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando existe un problema que merece atención.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11729"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11730"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11731"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando existe una dirección de valor.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11732"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11733"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11734"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando SEIF decide intervenir.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11735"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11736"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11737"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando se compromete construcción.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11738"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11739"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11740"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando el usuario/sistema responde.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11741"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11742"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11743"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando interpretamos el resultado.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11744"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11745"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11746"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando cambia la acción.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11747"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ciclo vuelve a comenzar.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11748"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11723"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-que-deben-desaparecer",
                         "title":  "Artefactos que deben desaparecer",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un Operating Model Lean también define qué no producir.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11751"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF debe evitar institucionalizar:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11752"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "documentos de requerimientos extensos por defecto;",
                                                          "Business Cases para cambios pequeños;",
                                                          "reportes manuales de status;",
                                                          "minutas detalladas de todas las reuniones;",
                                                          "presentaciones semanales de avance;",
                                                          "documentación duplicada Jira/Confluence;",
                                                          "múltiples backlogs por función para la misma iniciativa;",
                                                          "matrices RACI por cada Feature;",
                                                          "planes detallados cuando existe alta incertidumbre;",
                                                          "documentación creada exclusivamente para “cumplir metodología”."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11753–P11762"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce Overprocessing Waste.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11763"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11750"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-que-no-deben-duplicarse",
                         "title":  "Artefactos que no deben duplicarse",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Priority",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11766"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una fuente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11767"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11768"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una fuente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11769"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Status",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11770"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una fuente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11771"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11772"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una definición.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11773"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11774"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una definición.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11775"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11776"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un registro.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11777"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11778"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede provenir de múltiples fuentes, pero debe vincularse al mismo problema.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11779"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La duplicación genera divergencia.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11780"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11765"
                                         }
                                     ]
                     },
                     {
                         "id":  "artifact-quality",
                         "title":  "Artifact Quality",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La calidad no se mide por longitud.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11783"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un buen artefacto permite que otra persona entienda:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11784"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Why",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11785"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué importa?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11786"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "What",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11787"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué sabemos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11788"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Unknown",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11789"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué falta?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11790"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11791"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decidimos?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11792"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11793"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11794"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Next",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11795"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurre después?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11796"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si responde estas preguntas, probablemente es suficiente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11797"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11782"
                                         }
                                     ]
                     },
                     {
                         "id":  "artifact-freshness",
                         "title":  "Artifact Freshness",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un artefacto desactualizado puede ser peor que no tenerlo.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11800"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11801"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome Card se actualiza cuando cambia Outcome o métrica;",
                                                          "Opportunity cambia con evidencia;",
                                                          "Bet cambia con decisión;",
                                                          "Learning se cierra al revisar resultados;",
                                                          "Decision Log permanece histórico;",
                                                          "Board representa estado actual."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11802–P11807"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se recomienda establecer revisiones documentales periódicas sin necesidad.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11808"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La actualización ocurre cuando cambia la realidad.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11809"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11799"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-y-trazabilidad",
                         "title":  "Artefactos y trazabilidad",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La trazabilidad mínima debe permitir navegar:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11812"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué existe esta Story?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11813"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11814"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11815"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11816"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11817"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11818"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11819"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11820"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence / Signal",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11821"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Y posteriormente:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11822"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió después del Release?",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11823"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11824"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11825"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11826"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11827"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11828"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11829"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta trazabilidad representa uno de los principales beneficios del modelo.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11830"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11811"
                                         }
                                     ]
                     },
                     {
                         "id":  "ejemplo-end-to-end",
                         "title":  "Ejemplo end-to-end",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilizando Control de Rondas como referencia:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11833"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11834"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usuarios/clientes presentan una fricción determinada dentro del journey.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11835"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11836"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OPPORTUNITY",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11837"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se formula el problema sin prescribir solución.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11838"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11839"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EVIDENCE",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11840"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se integran señales de cliente, CS, Soporte, UX y comportamiento cuando estén disponibles.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11841"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11842"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11843"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Permitir demostrar, sin reprocesos operativos, que las rondas se ejecutan correctamente.”",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11844"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11845"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BET",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11846"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se formula una hipótesis de intervención.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11847"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11848"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PROTOTYPE",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11849"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se valida cuando existe incertidumbre de experiencia.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11850"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11851"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DELIVERY",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11852"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se implementan slices.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11853"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11854"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RELEASE",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11855"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se libera con observabilidad.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11856"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11857"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "METRIC",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11858"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se observa criterio de éxito, TTV y adherencia.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11859"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11860"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LEARNING",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11861"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected vs Actual.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11862"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11863"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DECISION",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11864"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scale / Continue / Adjust / Explore / Stop.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11865"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El artefacto existe para mantener esta cadena visible.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11866"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11832"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-y-north-star",
                         "title":  "Artefactos y North Star",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El capítulo 18 no requiere crear un documento independiente denominado “North Star”.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11869"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La North Star debe vivir dentro de:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11870"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Metric Architecture;",
                                                          "dashboards;",
                                                          "Outcome Portfolio;",
                                                          "reviews ejecutivas."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11871–P11874"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada Outcome Card muestra su conexión con la North Star cuando sea relevante.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11875"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita convertir estrategia de métricas en documentación aislada.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11876"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11868"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-y-gobierno",
                         "title":  "Artefactos y gobierno",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El capítulo 19 estableció cuatro rituales recurrentes.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11879"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los artefactos mínimos los soportan directamente:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11880"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-078",
                                                          "caption":  "Artefactos y gobierno",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Ritual",
                                                                          "Artefacto principal"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Flow Review",
                                                                           "Outcome Board"
                                                                       ],
                                                                       [
                                                                           "Opportunity Review",
                                                                           "Opportunity Card"
                                                                       ],
                                                                       [
                                                                           "Outcome Review",
                                                                           "Outcome + Learning Card"
                                                                       ],
                                                                       [
                                                                           "Quarterly Review",
                                                                           "Outcome Portfolio + Metric Tree"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "20. Artefactos Mínimos",
                                                                         "locator":  "T78"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite una regla simple:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11881"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "si un ritual requiere construir manualmente una presentación recurrente para saber qué ocurre, el sistema de información todavía no está suficientemente integrado.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11882"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11878"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-y-roles-ownership",
                         "title":  "Artefactos y Roles \u0026 Ownership",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada artefacto materializa accountability.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11885"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11886"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity / Outcome / Bet / Learning.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11887"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11888"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Journey / Evidence / Prototype.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11889"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11890"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery / Technical Design.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11891"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11892"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reliability / Operational Evidence.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11893"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11894"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption / Customer Evidence.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11895"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11896"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tickets / Patterns.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11897"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11898"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Market Signals.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11899"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11900"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Strategic Decisions.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11901"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El artefacto no reemplaza al owner.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11902"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hace visible su responsabilidad.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11903"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11884"
                                         }
                                     ]
                     },
                     {
                         "id":  "maturity-assessment",
                         "title":  "Maturity Assessment",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-079",
                                                          "caption":  "Maturity Assessment",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Comportamiento"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1 — Inicial",
                                                                           "Información principalmente en conversaciones, personas y herramientas separadas"
                                                                       ],
                                                                       [
                                                                           "2 — Repetible",
                                                                           "Existen artefactos y documentación funcional, pero con estructuras y usos diferentes"
                                                                       ],
                                                                       [
                                                                           "3 — Definido",
                                                                           "Existe un conjunto mínimo compartido conectado end-to-end"
                                                                       ],
                                                                       [
                                                                           "4 — Gestionado",
                                                                           "Artefactos se generan parcialmente desde tooling y datos"
                                                                       ],
                                                                       [
                                                                           "5 — Optimizado",
                                                                           "Información fluye automáticamente y el trabajo documental manual es mínimo"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "20. Artefactos Mínimos",
                                                                         "locator":  "T79"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado SEIF",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11906"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con base en el assessment:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11907"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11908"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe una base relevante:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11909"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "outcomes documentados;",
                                                          "criterios de éxito;",
                                                          "journeys;",
                                                          "reglas;",
                                                          "dashboards;",
                                                          "métricas;",
                                                          "documentación funcional/técnica;",
                                                          "información de clientes y soporte."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11910–P11917"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha es integración y simplificación.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11918"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target inicial",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11919"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11920"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No mediante más documentos.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11921"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mediante menos artefactos, mejor conectados.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11922"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11905"
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
                                                          "id":  "source-table-080",
                                                          "caption":  "AS-IS → TO-BE",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "AS-IS observado",
                                                                          "TO-BE"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Información",
                                                                           "Distribuida",
                                                                           "Connected artifacts"
                                                                       ],
                                                                       [
                                                                           "Feedback",
                                                                           "Múltiples fuentes",
                                                                           "Signal"
                                                                       ],
                                                                       [
                                                                           "Problemas",
                                                                           "Contextuales",
                                                                           "Opportunity Card"
                                                                       ],
                                                                       [
                                                                           "Evidencia",
                                                                           "Distribuida",
                                                                           "Evidence Map"
                                                                       ],
                                                                       [
                                                                           "Outcomes",
                                                                           "Conceptualmente definidos",
                                                                           "Outcome Card"
                                                                       ],
                                                                       [
                                                                           "Soluciones",
                                                                           "Funcionalidades/iniciativas",
                                                                           "Bet"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Research/prototypes",
                                                                           "Linked evidence"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "Trabajo técnico",
                                                                           "Connected to Bet"
                                                                       ],
                                                                       [
                                                                           "Release",
                                                                           "Entrega",
                                                                           "Start of measurement"
                                                                       ],
                                                                       [
                                                                           "Métricas",
                                                                           "Dashboards",
                                                                           "Linked to Outcome"
                                                                       ],
                                                                       [
                                                                           "Aprendizaje",
                                                                           "Distribuido",
                                                                           "Learning Card"
                                                                       ],
                                                                       [
                                                                           "Decisiones",
                                                                           "Contextuales",
                                                                           "Decision Log"
                                                                       ],
                                                                       [
                                                                           "Status",
                                                                           "Diferentes fuentes",
                                                                           "Outcome Board"
                                                                       ],
                                                                       [
                                                                           "Documentación",
                                                                           "Por función",
                                                                           "Minimum viable documentation"
                                                                       ],
                                                                       [
                                                                           "Tooling",
                                                                           "Múltiples fuentes",
                                                                           "Defined source of truth"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "20. Artefactos Mínimos",
                                                                         "locator":  "T80"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11924"
                                         }
                                     ]
                     },
                     {
                         "id":  "quick-wins",
                         "title":  "Quick Wins",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La implementación puede comenzar sin rediseñar todas las herramientas.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11927"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Crear Opportunity Card",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11928"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una página / template.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11929"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Incorporar Evidence dentro de Opportunity",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11930"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evitar un documento adicional inicialmente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11931"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Crear Outcome Card",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11932"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una página.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11933"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Crear Bet Card",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11934"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede ser un objeto ligero en Jira.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11935"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Crear Learning Card",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11936"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una página o sección asociada a la Bet.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11937"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Crear Decision Log único",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11938"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No uno por área.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11939"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. Utilizar el board actual como piloto",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11940"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de rediseñar Jira completamente.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11941"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. Seleccionar un Outcome real",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11942"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Control de Rondas u otro priorizado por SEIF.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11943"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "9. Ejecutar el ciclo completo",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11944"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal → Learning.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11945"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "10. Eliminar artefactos redundantes",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11946"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo después de validar el nuevo modelo.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11947"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11926"
                                         }
                                     ]
                     },
                     {
                         "id":  "minimum-viable-artifact-set-para-piloto",
                         "title":  "Minimum Viable Artifact Set para piloto",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para iniciar el Product Operating System no se necesitan ocho artefactos separados.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11950"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El piloto puede operar con solo:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11951"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Opportunity Card",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11952"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incluye:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11953"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal + Evidence.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11954"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Outcome Card",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11955"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incluye:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11956"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome + Metrics.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11957"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Bet",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11958"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incluye:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11959"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hypothesis + Review Trigger.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11960"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Outcome Board",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11961"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incluye:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11962"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow + WIP + ownership.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11963"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Learning / Decision",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11964"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incluye:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11965"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected + Actual + Decision.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11966"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11967"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "cinco artefactos son suficientes para validar el modelo.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11968"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11949"
                                         }
                                     ]
                     },
                     {
                         "id":  "evolucion-recomendada",
                         "title":  "Evolución recomendada",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fase 1 — Pilot",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11971"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5 artefactos.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11972"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fase 2 — Stabilize",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11973"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Separar componentes cuando el volumen lo justifique.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11974"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fase 3 — Automate",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11975"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Jira + Confluence + dashboards.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11976"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fase 4 — Intelligence",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11977"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "IA para:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11978"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "clustering;",
                                                          "síntesis;",
                                                          "búsqueda;",
                                                          "generación;",
                                                          "detección de patrones."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11979–P11983"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita automatizar un modelo que todavía no ha sido validado.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11984"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11970"
                                         }
                                     ]
                     },
                     {
                         "id":  "definition-of-useful-artifact",
                         "title":  "Definition of Useful Artifact",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un artefacto del SEIF Product Operating System es útil únicamente cuando:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11987"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "tiene una pregunta que resolver;",
                                                          "posee owner;",
                                                          "contiene información vigente;",
                                                          "está conectado con el flujo;",
                                                          "es utilizado en una decisión;",
                                                          "no duplica innecesariamente otra fuente."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11988–P11993"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si no cumple estas condiciones:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11994"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "debe simplificarse, integrarse o eliminarse.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11995"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11986"
                                         }
                                     ]
                     },
                     {
                         "id":  "modelo-consolidado",
                         "title":  "Modelo consolidado",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema documental mínimo queda:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11998"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNALS",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P11999"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12000"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12001"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "┌───────────────────────┐",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12002"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│   OPPORTUNITY CARD    │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12003"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Problem               │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12004"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Evidence              │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12005"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Unknowns              │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12006"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Decision              │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12007"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "└──────────┬────────────┘",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12008"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12009"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12010"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "┌───────────────────────┐",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12011"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│     OUTCOME CARD      │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12012"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Outcome               │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12013"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Success Criteria      │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12014"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Metrics               │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12015"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Guardrails            │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12016"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Owner                 │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12017"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "└──────────┬────────────┘",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12018"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12019"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12020"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "┌───────────────────────┐",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12021"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│          BET          │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12022"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Hypothesis            │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12023"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Intervention          │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12024"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Expected Evidence     │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12025"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Review Trigger        │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12026"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "└──────────┬────────────┘",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12027"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12028"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12029"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DELIVERY",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12030"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12031"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12032"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RELEASE",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12033"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12034"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12035"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EVIDENCE",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12036"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12037"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12038"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "┌───────────────────────┐",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12039"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│  LEARNING / DECISION  │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12040"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Expected vs Actual    │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12041"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Learning              │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12042"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│ Decision              │",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12043"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "└──────────┬────────────┘",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12044"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12045"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "└──────────────↺",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12046"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todo el sistema es visible mediante:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12047"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME BOARD",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12048"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y medido mediante:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12049"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NORTH STAR \u0026 METRIC TREE.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12050"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P11997"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-final",
                         "title":  "Diagnóstico final",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no evidencia un problema de falta de documentación en SEIF.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12053"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia un riesgo diferente:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12054"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "que la evolución del modelo operativo genere más artefactos de los que una organización pequeña necesita para tomar buenas decisiones.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12055"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya cuenta con conceptos sólidos:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12056"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcomes;",
                                                          "criterios de éxito;",
                                                          "Momentos de Verdad;",
                                                          "journeys;",
                                                          "TTV;",
                                                          "adherencia;",
                                                          "reglas de negocio;",
                                                          "métricas;",
                                                          "DORA."
                                                      ],
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12057–P12065"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El siguiente paso no consiste en agregar capas documentales.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12066"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Consiste en conectar estos elementos a las decisiones reales del ciclo de Producto.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12067"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, el diseño TO-BE establece una arquitectura deliberadamente pequeña:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12068"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OPPORTUNITY → OUTCOME → BET → DELIVERY → LEARNING → DECISION.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12069"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con Signal y Evidence alimentando el inicio, Outcome Board haciendo visible el flujo y North Star \u0026 Metric Tree mostrando si el sistema está generando valor.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12070"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evolución buscada es:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12071"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DOCUMENTAR ACTIVIDAD",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12072"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ PRESERVAR CONTEXTO",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12073"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ HABILITAR DECISIONES",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12074"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ GENERAR APRENDIZAJE",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12075"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ AUTOMATIZAR TRAZABILIDAD.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12076"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principio final para SEIF es:",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12077"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El mejor artefacto no es el más completo. Es el mínimo artefacto que permite tomar una mejor decisión sin perder el contexto que la organización necesitará después.",
                                            "source":  {
                                                           "title":  "20. Artefactos Mínimos",
                                                           "locator":  "P12078"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "20. Artefactos Mínimos",
                                             "locator":  "P12052"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "design-principles",
                    "operating-model",
                    "discovery",
                    "prioritization",
                    "delivery",
                    "adoption-growth",
                    "feedback-loop",
                    "roles",
                    "governance",
                    "jira"
                ],
    "source":  {
                   "title":  "20. Artefactos Mínimos",
                   "locator":  "P11070–P12078",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               },
    "operatingArtifacts":  [
                               {
                                   "id":  "signal",
                                   "name":  "Signal",
                                   "purpose":  "Capturar una observación relevante sin convertirla prematuramente en requerimiento.",
                                   "taxonomy":  [
                                                    "DISCOVERY",
                                                    "EVIDENCE"
                                                ],
                                   "canonicalStages":  [
                                                           "DISCOVER"
                                                       ],
                                   "owner":  "Fuente de señal",
                                   "requiredFields":  [
                                                          "Source",
                                                          "Actor",
                                                          "Signal",
                                                          "Context",
                                                          "Module / Journey",
                                                          "Evidence",
                                                          "Observable impact"
                                                      ],
                                   "lifecycle":  [
                                                     "Nace cuando aparece una observación relevante"
                                                 ],
                                   "lifecycleCompleteness":  "SOURCE PARTIAL",
                                   "decisionEnabled":  "¿La señal merece framing?",
                                   "contentClass":  "recommendation",
                                   "completeness":  {
                                                        "WHAT":  "SOURCE COMPLETE",
                                                        "WHY":  "SOURCE COMPLETE",
                                                        "ARTIFACT":  "SOURCE COMPLETE",
                                                        "DECISION":  "SOURCE COMPLETE",
                                                        "HOW":  "SOURCE PARTIAL",
                                                        "WHO":  "SOURCE PARTIAL",
                                                        "WHEN":  "SOURCE PARTIAL",
                                                        "INPUT":  "SOURCE PARTIAL",
                                                        "OUTPUT":  "SOURCE PARTIAL",
                                                        "METRIC":  "SOURCE PARTIAL",
                                                        "TOOL":  "SOURCE PARTIAL",
                                                        "EXAMPLE":  "SOURCE PARTIAL"
                                                    },
                                   "sourceLocators":  [
                                                          {
                                                              "title":  "20. Artefactos Mínimos",
                                                              "locator":  "P11128–P11155"
                                                          }
                                                      ],
                                   "clientValidationIds":  [
                                                               "CL-04"
                                                           ]
                               },
                               {
                                   "id":  "opportunity-card",
                                   "name":  "Opportunity Card",
                                   "purpose":  "Convertir señales y patrones en un problema suficientemente claro para decidir atención.",
                                   "taxonomy":  [
                                                    "DISCOVERY",
                                                    "DECISION"
                                                ],
                                   "canonicalStages":  [
                                                           "DISCOVER",
                                                           "DECIDE"
                                                       ],
                                   "owner":  "Producto",
                                   "requiredFields":  [
                                                          "Problem",
                                                          "Actor / Segment",
                                                          "Context",
                                                          "Evidence",
                                                          "Impact",
                                                          "Outcome Link",
                                                          "Evidence Strength",
                                                          "Unknowns",
                                                          "Decision State"
                                                      ],
                                   "lifecycle":  [
                                                     "Cuando existe un problema que merece atención"
                                                 ],
                                   "lifecycleCompleteness":  "SOURCE PARTIAL",
                                   "decisionEnabled":  "Explore / Prioritize / Wait / Discard",
                                   "contentClass":  "recommendation",
                                   "completeness":  {
                                                        "WHAT":  "SOURCE COMPLETE",
                                                        "WHY":  "SOURCE COMPLETE",
                                                        "ARTIFACT":  "SOURCE COMPLETE",
                                                        "DECISION":  "SOURCE COMPLETE",
                                                        "HOW":  "SOURCE PARTIAL",
                                                        "WHO":  "SOURCE PARTIAL",
                                                        "WHEN":  "SOURCE PARTIAL",
                                                        "INPUT":  "SOURCE PARTIAL",
                                                        "OUTPUT":  "SOURCE PARTIAL",
                                                        "METRIC":  "SOURCE PARTIAL",
                                                        "TOOL":  "SOURCE PARTIAL",
                                                        "EXAMPLE":  "SOURCE PARTIAL"
                                                    },
                                   "sourceLocators":  [
                                                          {
                                                              "title":  "20. Artefactos Mínimos",
                                                              "locator":  "P11172–P11193"
                                                          }
                                                      ],
                                   "clientValidationIds":  [
                                                               "CL-04"
                                                           ]
                               },
                               {
                                   "id":  "evidence-map",
                                   "name":  "Evidence Map",
                                   "purpose":  "Consolidar evidencia distribuida vinculada al mismo problema; no es un reporte separado por defecto.",
                                   "taxonomy":  [
                                                    "EVIDENCE",
                                                    "DISCOVERY"
                                                ],
                                   "canonicalStages":  [
                                                           "DISCOVER"
                                                       ],
                                   "owner":  "Producto",
                                   "requiredFields":  [
                                                          "Source",
                                                          "Signal / Evidence",
                                                          "Strength",
                                                          "What it indicates"
                                                      ],
                                   "lifecycle":  [
                                                     "Cuando el usuario o sistema responde"
                                                 ],
                                   "lifecycleCompleteness":  "SOURCE PARTIAL",
                                   "decisionEnabled":  "Determinar qué se sabe y qué falta",
                                   "contentClass":  "recommendation",
                                   "completeness":  {
                                                        "WHAT":  "SOURCE COMPLETE",
                                                        "WHY":  "SOURCE COMPLETE",
                                                        "ARTIFACT":  "SOURCE COMPLETE",
                                                        "DECISION":  "SOURCE COMPLETE",
                                                        "HOW":  "SOURCE PARTIAL",
                                                        "WHO":  "SOURCE PARTIAL",
                                                        "WHEN":  "SOURCE PARTIAL",
                                                        "INPUT":  "SOURCE PARTIAL",
                                                        "OUTPUT":  "SOURCE PARTIAL",
                                                        "METRIC":  "SOURCE PARTIAL",
                                                        "TOOL":  "SOURCE PARTIAL",
                                                        "EXAMPLE":  "SOURCE PARTIAL"
                                                    },
                                   "sourceLocators":  [
                                                          {
                                                              "title":  "20. Artefactos Mínimos",
                                                              "locator":  "P11210–P11221"
                                                          }
                                                      ],
                                   "clientValidationIds":  [
                                                               "CL-04"
                                                           ]
                               },
                               {
                                   "id":  "outcome-card",
                                   "name":  "Outcome Card",
                                   "purpose":  "Definir el resultado de valor, población, línea base, criterios, métrica y guardrails.",
                                   "taxonomy":  [
                                                    "STRATEGY",
                                                    "GOVERNANCE"
                                                ],
                                   "canonicalStages":  [
                                                           "DECIDE",
                                                           "LEARN"
                                                       ],
                                   "owner":  "Producto",
                                   "requiredFields":  [
                                                          "Outcome",
                                                          "Actor / Population",
                                                          "Current State / Baseline",
                                                          "Success Criteria",
                                                          "Outcome Metric",
                                                          "Leading Indicators",
                                                          "Guardrails",
                                                          "Outcome Owner",
                                                          "Review Frequency"
                                                      ],
                                   "lifecycle":  [
                                                     "Cuando existe una dirección de valor"
                                                 ],
                                   "lifecycleCompleteness":  "SOURCE PARTIAL",
                                   "decisionEnabled":  "Alinear dirección de valor y revisar resultado",
                                   "contentClass":  "recommendation",
                                   "completeness":  {
                                                        "WHAT":  "SOURCE COMPLETE",
                                                        "WHY":  "SOURCE COMPLETE",
                                                        "ARTIFACT":  "SOURCE COMPLETE",
                                                        "DECISION":  "SOURCE COMPLETE",
                                                        "HOW":  "SOURCE PARTIAL",
                                                        "WHO":  "SOURCE PARTIAL",
                                                        "WHEN":  "SOURCE PARTIAL",
                                                        "INPUT":  "SOURCE PARTIAL",
                                                        "OUTPUT":  "SOURCE PARTIAL",
                                                        "METRIC":  "SOURCE PARTIAL",
                                                        "TOOL":  "SOURCE PARTIAL",
                                                        "EXAMPLE":  "SOURCE PARTIAL"
                                                    },
                                   "sourceLocators":  [
                                                          {
                                                              "title":  "20. Artefactos Mínimos",
                                                              "locator":  "P11223–P11245"
                                                          }
                                                      ],
                                   "clientValidationIds":  [
                                                               "CL-04"
                                                           ]
                               },
                               {
                                   "id":  "bet-card",
                                   "name":  "Bet Card",
                                   "purpose":  "Hacer explícita una hipótesis de inversión, evidencia esperada, guardrails y trigger de revisión.",
                                   "taxonomy":  [
                                                    "DECISION",
                                                    "DELIVERY"
                                                ],
                                   "canonicalStages":  [
                                                           "DECIDE",
                                                           "DELIVER"
                                                       ],
                                   "owner":  "Producto",
                                   "requiredFields":  [
                                                          "We believe",
                                                          "For",
                                                          "By",
                                                          "We expect",
                                                          "Evidence",
                                                          "Guardrails",
                                                          "Review Trigger",
                                                          "Owner"
                                                      ],
                                   "lifecycle":  [
                                                     "Cuando SEIF decide intervenir"
                                                 ],
                                   "lifecycleCompleteness":  "SOURCE PARTIAL",
                                   "decisionEnabled":  "Start / Continue / Adjust / Stop / Scale",
                                   "contentClass":  "recommendation",
                                   "completeness":  {
                                                        "WHAT":  "SOURCE COMPLETE",
                                                        "WHY":  "SOURCE COMPLETE",
                                                        "ARTIFACT":  "SOURCE COMPLETE",
                                                        "DECISION":  "SOURCE COMPLETE",
                                                        "HOW":  "SOURCE PARTIAL",
                                                        "WHO":  "SOURCE PARTIAL",
                                                        "WHEN":  "SOURCE PARTIAL",
                                                        "INPUT":  "SOURCE PARTIAL",
                                                        "OUTPUT":  "SOURCE PARTIAL",
                                                        "METRIC":  "SOURCE PARTIAL",
                                                        "TOOL":  "SOURCE PARTIAL",
                                                        "EXAMPLE":  "SOURCE PARTIAL"
                                                    },
                                   "sourceLocators":  [
                                                          {
                                                              "title":  "20. Artefactos Mínimos",
                                                              "locator":  "P11276–P11309"
                                                          }
                                                      ],
                                   "clientValidationIds":  [
                                                               "CL-04"
                                                           ]
                               },
                               {
                                   "id":  "outcome-board",
                                   "name":  "Outcome Board",
                                   "purpose":  "Mostrar portafolio, flujo, WIP, blockers, aging, reviews y decisiones pendientes.",
                                   "taxonomy":  [
                                                    "GOVERNANCE",
                                                    "DELIVERY"
                                                ],
                                   "canonicalStages":  [
                                                           "DECIDE",
                                                           "DELIVER",
                                                           "ADOPT",
                                                           "LEARN"
                                                       ],
                                   "owner":  "Producto / célula",
                                   "requiredFields":  [
                                                          "Outcome",
                                                          "Opportunity",
                                                          "Bet",
                                                          "Owner",
                                                          "State",
                                                          "WIP",
                                                          "Blockers",
                                                          "Aging",
                                                          "Review Trigger",
                                                          "Pending Decision"
                                                      ],
                                   "lifecycle":  [
                                                     "Opportunities",
                                                     "Discovery",
                                                     "Prioritized",
                                                     "Delivery",
                                                     "Released",
                                                     "Measuring",
                                                     "Learned"
                                                 ],
                                   "lifecycleCompleteness":  "SOURCE PARTIAL",
                                   "decisionEnabled":  "Desbloquear, priorizar y revisar inversión",
                                   "contentClass":  "recommendation",
                                   "completeness":  {
                                                        "WHAT":  "SOURCE COMPLETE",
                                                        "WHY":  "SOURCE COMPLETE",
                                                        "ARTIFACT":  "SOURCE COMPLETE",
                                                        "DECISION":  "SOURCE COMPLETE",
                                                        "HOW":  "SOURCE PARTIAL",
                                                        "WHO":  "SOURCE PARTIAL",
                                                        "WHEN":  "SOURCE PARTIAL",
                                                        "INPUT":  "SOURCE PARTIAL",
                                                        "OUTPUT":  "SOURCE PARTIAL",
                                                        "METRIC":  "SOURCE PARTIAL",
                                                        "TOOL":  "SOURCE PARTIAL",
                                                        "EXAMPLE":  "SOURCE PARTIAL"
                                                    },
                                   "sourceLocators":  [
                                                          {
                                                              "title":  "20. Artefactos Mínimos",
                                                              "locator":  "P11322–P11347"
                                                          }
                                                      ],
                                   "clientValidationIds":  [
                                                               "CL-04"
                                                           ]
                               },
                               {
                                   "id":  "learning-card",
                                   "name":  "Learning Card",
                                   "purpose":  "Comparar expectativa y observación para producir aprendizaje y una decisión posterior.",
                                   "taxonomy":  [
                                                    "LEARNING",
                                                    "EVIDENCE"
                                                ],
                                   "canonicalStages":  [
                                                           "LEARN"
                                                       ],
                                   "owner":  "Producto",
                                   "requiredFields":  [
                                                          "We believed",
                                                          "Because",
                                                          "Expected",
                                                          "Observed",
                                                          "Learned",
                                                          "Decision"
                                                      ],
                                   "lifecycle":  [
                                                     "Cuando interpretamos el resultado"
                                                 ],
                                   "lifecycleCompleteness":  "SOURCE PARTIAL",
                                   "decisionEnabled":  "Scale / Continue / Adjust / Explore / Stop",
                                   "contentClass":  "recommendation",
                                   "completeness":  {
                                                        "WHAT":  "SOURCE COMPLETE",
                                                        "WHY":  "SOURCE COMPLETE",
                                                        "ARTIFACT":  "SOURCE COMPLETE",
                                                        "DECISION":  "SOURCE COMPLETE",
                                                        "HOW":  "SOURCE PARTIAL",
                                                        "WHO":  "SOURCE PARTIAL",
                                                        "WHEN":  "SOURCE PARTIAL",
                                                        "INPUT":  "SOURCE PARTIAL",
                                                        "OUTPUT":  "SOURCE PARTIAL",
                                                        "METRIC":  "SOURCE PARTIAL",
                                                        "TOOL":  "SOURCE PARTIAL",
                                                        "EXAMPLE":  "SOURCE PARTIAL"
                                                    },
                                   "sourceLocators":  [
                                                          {
                                                              "title":  "20. Artefactos Mínimos",
                                                              "locator":  "P11359–P11385"
                                                          }
                                                      ],
                                   "clientValidationIds":  [
                                                               "CL-04"
                                                           ]
                               },
                               {
                                   "id":  "decision-log",
                                   "name":  "Decision Log",
                                   "purpose":  "Conservar contexto, evidencia, rationale, trade-off, owner y review trigger de decisiones relevantes.",
                                   "taxonomy":  [
                                                    "DECISION",
                                                    "GOVERNANCE"
                                                ],
                                   "canonicalStages":  [
                                                           "DECIDE",
                                                           "LEARN"
                                                       ],
                                   "owner":  "Decision owner",
                                   "requiredFields":  [
                                                          "Decision",
                                                          "Date",
                                                          "Context",
                                                          "Evidence",
                                                          "Rationale",
                                                          "Trade-off",
                                                          "Owner",
                                                          "Review Trigger"
                                                      ],
                                   "lifecycle":  [
                                                     "Cuando cambia la acción"
                                                 ],
                                   "lifecycleCompleteness":  "SOURCE PARTIAL",
                                   "decisionEnabled":  "Registrar qué y por qué se decidió",
                                   "contentClass":  "recommendation",
                                   "completeness":  {
                                                        "WHAT":  "SOURCE COMPLETE",
                                                        "WHY":  "SOURCE COMPLETE",
                                                        "ARTIFACT":  "SOURCE COMPLETE",
                                                        "DECISION":  "SOURCE COMPLETE",
                                                        "HOW":  "SOURCE PARTIAL",
                                                        "WHO":  "SOURCE PARTIAL",
                                                        "WHEN":  "SOURCE PARTIAL",
                                                        "INPUT":  "SOURCE PARTIAL",
                                                        "OUTPUT":  "SOURCE PARTIAL",
                                                        "METRIC":  "SOURCE PARTIAL",
                                                        "TOOL":  "SOURCE PARTIAL",
                                                        "EXAMPLE":  "SOURCE PARTIAL"
                                                    },
                                   "sourceLocators":  [
                                                          {
                                                              "title":  "20. Artefactos Mínimos",
                                                              "locator":  "P11387–P11423"
                                                          }
                                                      ],
                                   "clientValidationIds":  [
                                                               "CL-04"
                                                           ]
                               }
                           ],
    "artifactRelationships":  [
                                  {
                                      "from":  "Signal",
                                      "to":  "Opportunity",
                                      "relationship":  "la observación se formula como problema",
                                      "source":  {
                                                     "title":  "20. Artefactos Mínimos",
                                                     "locator":  "P11725–P11729"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "from":  "Opportunity",
                                      "to":  "Outcome",
                                      "relationship":  "el problema se vincula a dirección de valor",
                                      "source":  {
                                                     "title":  "20. Artefactos Mínimos",
                                                     "locator":  "P11728–P11732"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "from":  "Outcome",
                                      "to":  "Bet",
                                      "relationship":  "SEIF decide intervenir",
                                      "source":  {
                                                     "title":  "20. Artefactos Mínimos",
                                                     "locator":  "P11731–P11735"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "from":  "Bet",
                                      "to":  "Delivery",
                                      "relationship":  "se compromete construcción",
                                      "source":  {
                                                     "title":  "20. Artefactos Mínimos",
                                                     "locator":  "P11734–P11738"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "from":  "Delivery",
                                      "to":  "Evidence",
                                      "relationship":  "usuario o sistema responde",
                                      "source":  {
                                                     "title":  "20. Artefactos Mínimos",
                                                     "locator":  "P11737–P11741"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "from":  "Evidence",
                                      "to":  "Learning",
                                      "relationship":  "se interpreta el resultado",
                                      "source":  {
                                                     "title":  "20. Artefactos Mínimos",
                                                     "locator":  "P11740–P11744"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "from":  "Learning",
                                      "to":  "Decision",
                                      "relationship":  "el aprendizaje cambia la acción",
                                      "source":  {
                                                     "title":  "20. Artefactos Mínimos",
                                                     "locator":  "P11743–P11747"
                                                 },
                                      "validationStatus":  "pending"
                                  }
                              ],
    "clientValidations":  [
                              {
                                  "id":  "CL-04",
                                  "subject":  "Ownership de artefactos y mapeo de roles",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-10",
                                  "subject":  "Arquitectura de tooling y relación con business objects",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              }
                          ]
} satisfies Chapter;
