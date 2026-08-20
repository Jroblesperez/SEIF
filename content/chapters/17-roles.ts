import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "roles",
    "group":  "Operating Model",
    "title":  "Roles, responsabilidades y derechos de decisión",
    "sourceTitle":  "17. Roles, Responsabilidades y Ownership",
    "eyebrow":  "17 · Ownership",
    "summary":  "El modelo fuente distribuye ownership según la naturaleza de la decisión y separa contribución, decisión y respuesta por el resultado.",
    "takeaway":  "Ownership no significa ejecutar todo: exige distinguir quién contribuye, quién decide y quién responde por el resultado.",
    "executive":  {
                      "keyFindings":  [
                                          "La fuente conserva roles y capacidades existentes sin proponer una reorganización automática.",
                                          "Producto responde por problema, Outcome, prioridad y decisión de aprendizaje; cada especialidad responde por la calidad de su capacidad.",
                                          "La fuente incluye una matriz de decisiones y un RACI ligero explícitos.",
                                          "Los mapeos organizacionales y la autoridad efectiva siguen pendientes de validación del cliente."
                                      ],
                      "implication":  "El capítulo ofrece un contrato operativo propuesto; no constituye un organigrama aprobado ni resuelve Head de Producto, Product Owner, Outcome Owner o Domain Owner.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "cards",
                      "sources":  [
                                      {
                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                          "locator":  "P8443–P9220"
                                      }
                                  ]
                  },
    "operatingConcepts":  [
                              {
                                  "id":  "role-contract",
                                  "title":  "Contrato operativo de roles",
                                  "canonicalLayers":  [
                                                          "ROLES",
                                                          "GOVERNANCE",
                                                          "DECIDE"
                                                      ],
                                  "sourceChapters":  [
                                                         "17"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                                             "locator":  "P8510–P9205"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "EXAMPLE":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "INPUT":  "SOURCE PARTIAL",
                                                       "OUTPUT":  "SOURCE PARTIAL",
                                                       "ARTIFACT":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   },
                                  "gapIds":  [
                                                 "CL-04",
                                                 "CL-05"
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
                                            "text":  "El SEIF Roles \u0026 Ownership Model define quién responde por las decisiones críticas del Product Operating System, cómo colaboran las capacidades actuales y dónde termina la responsabilidad de cada función.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8445"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidenció que SEIF ya opera mediante colaboración transversal y células multidisciplinarias. También mostró que Producto, UX, Desarrollo, SRE, Soporte, Marketing y Customer Success participan en diferentes momentos del ciclo de valor.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8446"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha no corresponde a ausencia de roles.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8447"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha se encuentra en la diferencia entre:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8448"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "participar en una iniciativa",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8449"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8450"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "responder por una decisión o resultado específico.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8451"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no propone crear una nueva estructura organizacional.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8452"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No incorpora PMO, Product Operations dedicado, Portfolio Manager ni nuevas capas jerárquicas.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8453"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su objetivo es clarificar ownership sobre decisiones y resultados utilizando los roles que SEIF ya posee.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8454"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8444"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-central",
                         "title":  "Principio central",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo se rige por una regla:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8457"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Responsabilidad compartida sobre el Outcome no significa responsabilidad ambigua sobre las decisiones.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8458"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF puede continuar trabajando mediante células multidisciplinarias.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8459"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, para cada decisión crítica debe existir un Accountable claramente identificable.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8460"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La lógica es:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8461"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todos pueden contribuir.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8462"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todos deciden todo.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8463"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una persona o función responde por cada decisión.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8464"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8456"
                                         }
                                     ]
                     },
                     {
                         "id":  "diferencia-entre-role-contribution-y-ownership",
                         "title":  "Diferencia entre Role, Contribution y Ownership",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Role",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8467"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Representa la capacidad funcional de una persona dentro de la organización.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8468"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos existentes en SEIF:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8469"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Producto;",
                                                          "UX/UI;",
                                                          "Desarrollo;",
                                                          "SRE;",
                                                          "Soporte;",
                                                          "Customer Success;",
                                                          "Marketing."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8470–P8476"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contribution",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8477"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Representa la participación de una capacidad en una iniciativa.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8478"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8479"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE puede participar en Discovery cuando existe riesgo técnico relevante.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8480"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto no convierte a SRE en responsable de Product Discovery.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8481"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ownership",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8482"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Representa accountability sobre una decisión o resultado.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8483"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8484"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto responde por definir el Outcome.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8485"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX puede contribuir.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8486"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success puede aportar evidencia.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8487"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo puede cuestionar factibilidad.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8488"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero la definición y mantenimiento del Outcome permanece bajo ownership de Producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8489"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8466"
                                         }
                                     ]
                     },
                     {
                         "id":  "tipos-de-ownership",
                         "title":  "Tipos de ownership",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Operating System distingue cinco tipos de ownership.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8492"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Problem Ownership",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8493"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde porque el problema esté correctamente entendido?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8494"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Outcome Ownership",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8495"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde porque exista un resultado explícito y medible?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8496"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Solution Ownership",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8497"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde por diseñar y construir la solución adecuada?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8498"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Operational Ownership",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8499"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde porque la solución pueda operar confiablemente?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8500"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Value Ownership",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8501"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde porque exista evidencia de adopción y Outcome?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8502"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta separación evita trasladar toda la responsabilidad hacia una única área.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8503"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8491"
                                         }
                                     ]
                     },
                     {
                         "id":  "ownership-end-to-end",
                         "title":  "Ownership end-to-end",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ciclo de valor queda distribuido de la siguiente manera:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8506"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-055",
                                                          "caption":  "Ownership end-to-end",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Etapa",
                                                                          "Accountability principal"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Signal",
                                                                           "Función que identifica la señal"
                                                                       ],
                                                                       [
                                                                           "Opportunity Framing",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Product Discovery",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "UX Research / Validation",
                                                                           "UX"
                                                                       ],
                                                                       [
                                                                           "Outcome Definition",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Prioritization",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Feasibility",
                                                                           "Desarrollo"
                                                                       ],
                                                                       [
                                                                           "Technical Risk",
                                                                           "Desarrollo / SRE según contexto"
                                                                       ],
                                                                       [
                                                                           "Solution Delivery",
                                                                           "Desarrollo"
                                                                       ],
                                                                       [
                                                                           "Release Readiness",
                                                                           "Desarrollo + SRE"
                                                                       ],
                                                                       [
                                                                           "Customer Activation",
                                                                           "Customer Success"
                                                                       ],
                                                                       [
                                                                           "Adoption Management",
                                                                           "Customer Success"
                                                                       ],
                                                                       [
                                                                           "Product Outcome",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Product Feedback Integration",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Support Resolution",
                                                                           "Soporte"
                                                                       ],
                                                                       [
                                                                           "Reliability",
                                                                           "SRE"
                                                                       ],
                                                                       [
                                                                           "Market Intelligence",
                                                                           "Marketing"
                                                                       ],
                                                                       [
                                                                           "Product Marketing",
                                                                           "Marketing + Producto"
                                                                       ],
                                                                       [
                                                                           "Learning Decision",
                                                                           "Producto"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "17. Roles, Responsabilidades y Ownership",
                                                                         "locator":  "T55"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La tabla no implica que una función opere de manera aislada.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8507"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Representa quién responde porque el resultado de esa etapa ocurra.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8508"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8505"
                                         }
                                     ]
                     },
                     {
                         "id":  "head-de-producto",
                         "title":  "Head de Producto",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito dentro del Operating System",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8511"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La Head de Producto constituye el principal owner del sistema de decisiones de Producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8512"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su responsabilidad no consiste en producir todos los artefactos ni resolver todos los problemas personalmente.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8513"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Responde por garantizar que SEIF invierta capacidad sobre problemas suficientemente entendidos y conectados con Outcomes.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8514"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountabilities principales",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8515"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "consolidar Signals relevantes;",
                                                          "convertir Signals en Opportunities;",
                                                          "asegurar claridad del problema;",
                                                          "definir Outcomes;",
                                                          "definir criterios de éxito junto con las capacidades correspondientes;",
                                                          "liderar priorización;",
                                                          "mantener foco;",
                                                          "definir o validar Bets;",
                                                          "integrar feedback;",
                                                          "conducir decisiones posteriores al aprendizaje;",
                                                          "mantener trazabilidad entre problema, inversión y resultado."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8516–P8526"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es accountable por",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8527"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "arquitectura técnica;",
                                                          "implementación;",
                                                          "operación;",
                                                          "resolución de incidentes;",
                                                          "diseño detallado de interfaces;",
                                                          "ejecución de Customer Success."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8528–P8533"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta que debe poder responder",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8534"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué SEIF está invirtiendo capacidad en esto y qué resultado espera modificar?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8535"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8510"
                                         }
                                     ]
                     },
                     {
                         "id":  "product-ownership-project-management",
                         "title":  "Product Ownership ≠ Project Management",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Owner del modelo no se define como administrador de cronograma.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8538"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas y el antecedente histórico de SEIF muestran que parte del modelo anterior estuvo orientado a requerimientos, funcionalidades y cumplimiento.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8539"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE separa:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8540"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery Management",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8541"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo avanza el trabajo?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8542"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8543"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Ownership",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8544"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué estamos haciendo este trabajo y qué resultado debería producir?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8545"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto debe proteger la segunda pregunta.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8546"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8537"
                                         }
                                     ]
                     },
                     {
                         "id":  "ux-ui",
                         "title":  "UX/UI",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito dentro del Operating System",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8549"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX responde por reducir incertidumbre relacionada con:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8550"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "comportamiento del usuario;",
                                                          "experiencia;",
                                                          "usabilidad;",
                                                          "journey;",
                                                          "Momentos de Verdad."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8551–P8555"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidenció que UX ya realiza investigación, prototipado y validación.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8556"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo institucionaliza esta capacidad.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8557"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountabilities principales",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8558"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "investigación de usuario cuando corresponda;",
                                                          "journey;",
                                                          "fricción;",
                                                          "hipótesis de experiencia;",
                                                          "diseño de interacción;",
                                                          "prototipado;",
                                                          "validación de usabilidad;",
                                                          "validación de Momentos de Verdad;",
                                                          "evidencia cualitativa asociada al comportamiento."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8559–P8567"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa en",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8568"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Opportunity Framing;",
                                                          "definición de criterios de éxito;",
                                                          "Discovery;",
                                                          "prototipado;",
                                                          "Delivery;",
                                                          "reviews con usuarios;",
                                                          "aprendizaje posterior."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8569–P8575"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es accountable por",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8576"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "prioridad de inversión;",
                                                          "arquitectura técnica;",
                                                          "estrategia comercial;",
                                                          "adopción de cuentas."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8577–P8580"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta que debe poder responder",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8581"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede el usuario alcanzar el criterio de éxito mediante esta experiencia y qué evidencia lo demuestra?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8582"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8548"
                                         }
                                     ]
                     },
                     {
                         "id":  "desarrollo",
                         "title":  "Desarrollo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito dentro del Operating System",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8585"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo responde por convertir Bets validadas y priorizadas en capacidades técnicas sostenibles.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8586"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no evidencia que Desarrollo deba convertirse en mero receptor de requerimientos.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8587"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE lo integra tempranamente cuando existe incertidumbre técnica.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8588"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountabilities principales",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8589"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "factibilidad técnica;",
                                                          "diseño técnico;",
                                                          "implementación;",
                                                          "calidad técnica;",
                                                          "estimación y descomposición;",
                                                          "gestión de dependencias técnicas;",
                                                          "testing técnico correspondiente;",
                                                          "mantenimiento de sostenibilidad del código;",
                                                          "visibilidad de deuda técnica;",
                                                          "preparación técnica para release."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8590–P8599"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa en",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8600"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Discovery cuando existe riesgo de factibilidad;",
                                                          "validación técnica;",
                                                          "Definition of Ready;",
                                                          "Definition of Done;",
                                                          "priorización mediante perspectiva de capacidad;",
                                                          "análisis de deuda;",
                                                          "aprendizaje post-release."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8601–P8607"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es accountable por",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8608"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "definición del Outcome;",
                                                          "prioridad de negocio;",
                                                          "adopción;",
                                                          "validación comercial."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8609–P8612"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta que debe poder responder",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8613"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuál es la forma técnicamente sostenible de habilitar esta Bet y qué riesgos debemos hacer visibles antes de comprometernos?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8614"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8584"
                                         }
                                     ]
                     },
                     {
                         "id":  "sre",
                         "title":  "SRE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito dentro del Operating System",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8617"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE responde porque las capacidades críticas puedan operar con niveles adecuados de confiabilidad, recuperación y observabilidad.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8618"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante el assessment, SRE identificó deuda técnica y dependencias operativas relevantes.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8619"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE integra esa información al sistema de Producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8620"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountabilities principales",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8621"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "confiabilidad;",
                                                          "observabilidad técnica;",
                                                          "disponibilidad;",
                                                          "resiliencia;",
                                                          "recuperación;",
                                                          "riesgo operacional;",
                                                          "capacidades de release cuando correspondan;",
                                                          "señales técnicas de producción;",
                                                          "visibilidad de deuda operacional/técnica;",
                                                          "sostenibilidad de operación."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8622–P8631"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa en",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8632"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Discovery cuando existe riesgo operacional;",
                                                          "análisis de factibilidad;",
                                                          "Release Readiness;",
                                                          "gestión de incidentes;",
                                                          "aprendizaje técnico;",
                                                          "decisiones sobre deuda relevante."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8633–P8638"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es accountable por",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8639"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Product Outcome;",
                                                          "priorización funcional;",
                                                          "diseño de experiencia;",
                                                          "adopción de cliente."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8640–P8643"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta que debe poder responder",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8644"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Podemos operar, observar y recuperar esta capacidad con un nivel de riesgo aceptable?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8645"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8616"
                                         }
                                     ]
                     },
                     {
                         "id":  "soporte",
                         "title":  "Soporte",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito dentro del Operating System",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8648"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte responde por resolver problemas operativos reportados por usuarios y convertir patrones recurrentes en señales visibles para Producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8649"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidenció que Soporte posee contacto directo con fricciones reales del producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8650"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountabilities principales",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8651"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "recepción de solicitudes/incidentes;",
                                                          "clasificación;",
                                                          "resolución o escalamiento;",
                                                          "captura de contexto;",
                                                          "identificación de recurrencias;",
                                                          "señalización de patrones;",
                                                          "mantenimiento del conocimiento necesario para resolver casos."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8652–P8658"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa en",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8659"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Product Signals;",
                                                          "identificación de fricción;",
                                                          "Release Readiness cuando corresponda;",
                                                          "post-release feedback;",
                                                          "Product Learning."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8660–P8664"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es accountable por",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8665"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "decidir roadmap;",
                                                          "definir solución de Producto;",
                                                          "priorizar Features."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8666–P8668"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta que debe poder responder",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8669"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problemas están experimentando recurrentemente los usuarios y qué patrones necesitan ser investigados por Producto?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8670"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8647"
                                         }
                                     ]
                     },
                     {
                         "id":  "customer-success",
                         "title":  "Customer Success",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito dentro del Operating System",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8673"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success responde por acompañar la obtención de valor del cliente a través de:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8674"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "configuración → activación → adopción → adherencia.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8675"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidenció conocimiento relevante de:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8676"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "implementación;",
                                                          "utilización;",
                                                          "comportamiento del cliente;",
                                                          "dependencia;",
                                                          "necesidades de acompañamiento."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8677–P8681"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountabilities principales",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8682"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "acompañamiento de implementación;",
                                                          "gestión de activación;",
                                                          "seguimiento de TTV;",
                                                          "monitoreo de adopción;",
                                                          "monitoreo de adherencia;",
                                                          "detección de cuentas con señales de riesgo;",
                                                          "identificación de barreras;",
                                                          "identificación de señales de expansión;",
                                                          "retroalimentación estructurada hacia Producto."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8683–P8691"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa en",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8692"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Discovery;",
                                                          "definición de criterios de éxito;",
                                                          "Customer Reviews;",
                                                          "Growth Experiments;",
                                                          "Outcome Reviews;",
                                                          "Product Feedback."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8693–P8698"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es accountable por",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8699"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "compensar permanentemente limitaciones del producto;",
                                                          "diseñar Features;",
                                                          "priorizar roadmap;",
                                                          "resolver deuda técnica."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8700–P8703"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta que debe poder responder",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8704"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El cliente está alcanzando y sosteniendo el valor esperado y qué está impidiendo que lo haga cuando no ocurre?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8705"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8672"
                                         }
                                     ]
                     },
                     {
                         "id":  "marketing",
                         "title":  "Marketing",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito dentro del Operating System",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8708"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing aporta inteligencia de mercado y comunicación de valor.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8709"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad observada durante el assessment se encuentra en evolución y manifestó interés en participar más temprano en validación.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8710"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountabilities principales",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8711"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "señales de mercado;",
                                                          "posicionamiento;",
                                                          "propuesta de valor comunicada;",
                                                          "Product Marketing;",
                                                          "apoyo a lanzamientos;",
                                                          "comunicación de nuevas capacidades;",
                                                          "campañas de adopción cuando existe una causa validada;",
                                                          "evidencia sobre respuesta del mercado."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8712–P8719"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa en",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8720"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Discovery de mercado;",
                                                          "validación de propuesta de valor;",
                                                          "Growth;",
                                                          "Launch Planning;",
                                                          "Adoption Campaigns;",
                                                          "Expansion Signals."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8721–P8726"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es accountable por",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8727"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "priorización final de Producto;",
                                                          "definición funcional;",
                                                          "Delivery."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8728–P8730"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta que debe poder responder",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8731"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El mercado y los clientes entienden el valor que SEIF habilita y qué señales externas deberían modificar nuestras decisiones?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8732"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8707"
                                         }
                                     ]
                     },
                     {
                         "id":  "liderazgo",
                         "title":  "Liderazgo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito dentro del Operating System",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8735"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El liderazgo proporciona dirección estratégica y resuelve trade-offs que exceden el nivel de una célula o de Producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8736"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El kickoff evidencia una participación activa del liderazgo en la evolución del modelo de Producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8737"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE evita convertir liderazgo en aprobador cotidiano.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8738"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountabilities principales",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8739"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "dirección estratégica;",
                                                          "objetivos de compañía;",
                                                          "restricciones;",
                                                          "prioridades corporativas;",
                                                          "balance entre Run / Grow / Transform;",
                                                          "decisiones de inversión de alto impacto;",
                                                          "resolución de trade-offs críticos;",
                                                          "patrocinio del Operating Model."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8740–P8747"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa cuando existe",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8748"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "impacto estratégico;",
                                                          "riesgo corporativo;",
                                                          "inversión relevante;",
                                                          "conflicto importante de capacidad;",
                                                          "cambio de dirección."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8749–P8753"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No necesita participar en",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8754"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cada Opportunity;",
                                                          "cada Discovery;",
                                                          "cada decisión de diseño;",
                                                          "cada release."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8755–P8758"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta que debe poder responder",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8759"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La asignación de capacidad de SEIF refleja las prioridades estratégicas que la organización ha decidido perseguir?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8760"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8734"
                                         }
                                     ]
                     },
                     {
                         "id":  "outcome-owner",
                         "title":  "Outcome Owner",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada Outcome activo debe tener un Outcome Owner.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8763"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En el modelo actual, esta responsabilidad pertenece principalmente a Producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8764"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Outcome Owner responde por:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8765"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "claridad del Outcome;",
                                                          "alineación;",
                                                          "criterio de éxito;",
                                                          "métrica;",
                                                          "decisiones relacionadas;",
                                                          "integración de evidencia;",
                                                          "revisión de resultado."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8766–P8772"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No significa que Producto controle las tareas.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8773"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Significa que alguien responde por la pregunta:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8774"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Estamos realmente consiguiendo el resultado que justificó esta inversión?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8775"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8762"
                                         }
                                     ]
                     },
                     {
                         "id":  "bet-owner",
                         "title":  "Bet Owner",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada Bet priorizada debe tener un responsable de mantener su coherencia durante el ciclo.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8778"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En la mayoría de iniciativas de producto:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8779"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto actúa como Bet Owner desde la perspectiva de valor.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8780"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo mantiene ownership técnico.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8781"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX mantiene ownership de experiencia.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8782"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita que una Bet se convierta en una transferencia secuencial.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8783"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8777"
                                         }
                                     ]
                     },
                     {
                         "id":  "technical-owner",
                         "title":  "Technical Owner",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para apuestas con impacto técnico relevante debe existir claridad sobre Technical Ownership.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8786"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Responde por:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8787"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "decisiones técnicas;",
                                                          "sostenibilidad;",
                                                          "riesgos;",
                                                          "dependencias;",
                                                          "deuda generada;",
                                                          "evolución técnica."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8788–P8793"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Technical Owner puede provenir de Desarrollo o de SRE según la naturaleza de la iniciativa.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8794"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Blueprint no fija un cargo nuevo.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8795"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Define una responsabilidad que debe quedar explícita en cada caso relevante.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8796"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8785"
                                         }
                                     ]
                     },
                     {
                         "id":  "customer-outcome-owner",
                         "title":  "Customer Outcome Owner",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La responsabilidad debe diferenciarse.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8799"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8800"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operational owner de:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8801"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "activación;",
                                                          "adopción;",
                                                          "seguimiento de cuenta."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8802–P8804"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8805"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountable por:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8806"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome del producto;",
                                                          "barreras sistémicas;",
                                                          "decisiones de mejora."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8807–P8809"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8810"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS responde porque el proceso de adopción ocurra; Producto responde porque el producto permita realmente obtener el valor esperado.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8811"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8798"
                                         }
                                     ]
                     },
                     {
                         "id":  "cell-ownership",
                         "title":  "Cell Ownership",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las células continúan siendo unidades multidisciplinarias.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8814"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE cambia su contrato.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8815"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una célula no es owner de “un listado de tareas”.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8816"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es owner de:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8817"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome + Bets + Learning",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8818"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una célula debe conocer permanentemente:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8819"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "métrica;",
                                                          "problema;",
                                                          "evidencia;",
                                                          "Bet actual;",
                                                          "riesgos;",
                                                          "WIP;",
                                                          "siguiente decisión."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8820–P8827"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto mantiene la responsabilidad colectiva sobre el resultado sin generar ambigüedad de decisiones específicas.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8828"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8813"
                                         }
                                     ]
                     },
                     {
                         "id":  "cell-lead-captain",
                         "title":  "Cell Lead / Captain",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El kickoff evidenció la existencia de figuras que lideran o acompañan células.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8831"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE no redefine arbitrariamente este rol.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8832"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su responsabilidad operacional debe concentrarse en:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8833"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "mantener foco;",
                                                          "facilitar avance;",
                                                          "visibilizar bloqueos;",
                                                          "proteger WIP;",
                                                          "asegurar cadencias;",
                                                          "escalar decisiones pendientes."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8834–P8839"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No sustituye:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8840"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Head de Producto;",
                                                          "líder técnico;",
                                                          "UX;",
                                                          "SRE;",
                                                          "CS."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8841–P8845"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta principal",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8846"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué está impidiendo que esta célula avance hacia su Outcome?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8847"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8830"
                                         }
                                     ]
                     },
                     {
                         "id":  "ownership-por-etapa",
                         "title":  "Ownership por etapa",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ciclo completo queda:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8850"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-056",
                                                          "caption":  "Ownership por etapa",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Etapa",
                                                                          "Accountable",
                                                                          "Contributors"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Signal",
                                                                           "Fuente",
                                                                           "Cualquier área"
                                                                       ],
                                                                       [
                                                                           "Frame",
                                                                           "Producto",
                                                                           "Fuente + UX/CS/Soporte/Marketing"
                                                                       ],
                                                                       [
                                                                           "Discover",
                                                                           "Producto",
                                                                           "UX + capacidades según riesgo"
                                                                       ],
                                                                       [
                                                                           "User Research",
                                                                           "UX",
                                                                           "Producto + usuarios"
                                                                       ],
                                                                       [
                                                                           "Define Outcome",
                                                                           "Producto",
                                                                           "Célula"
                                                                       ],
                                                                       [
                                                                           "Define Success Criteria",
                                                                           "Producto",
                                                                           "UX + CS"
                                                                       ],
                                                                       [
                                                                           "Validate Solution",
                                                                           "Producto + UX",
                                                                           "Usuario + Tech"
                                                                       ],
                                                                       [
                                                                           "Prioritize",
                                                                           "Producto",
                                                                           "Tech + liderazgo según impacto"
                                                                       ],
                                                                       [
                                                                           "Feasibility",
                                                                           "Desarrollo",
                                                                           "SRE"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "Desarrollo",
                                                                           "Producto + UX"
                                                                       ],
                                                                       [
                                                                           "Technical Quality",
                                                                           "Desarrollo",
                                                                           "SRE según caso"
                                                                       ],
                                                                       [
                                                                           "Release Readiness",
                                                                           "Desarrollo/SRE",
                                                                           "Producto + Soporte"
                                                                       ],
                                                                       [
                                                                           "Release",
                                                                           "Desarrollo/SRE",
                                                                           "—"
                                                                       ],
                                                                       [
                                                                           "Activation",
                                                                           "CS",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Adoption",
                                                                           "CS",
                                                                           "Producto + Marketing"
                                                                       ],
                                                                       [
                                                                           "Reliability",
                                                                           "SRE",
                                                                           "Desarrollo"
                                                                       ],
                                                                       [
                                                                           "Support",
                                                                           "Soporte",
                                                                           "SRE/Dev según caso"
                                                                       ],
                                                                       [
                                                                           "Product Analytics",
                                                                           "Producto",
                                                                           "Tech/CS"
                                                                       ],
                                                                       [
                                                                           "Outcome Review",
                                                                           "Producto",
                                                                           "Célula"
                                                                       ],
                                                                       [
                                                                           "Learning Decision",
                                                                           "Producto",
                                                                           "Célula + liderazgo cuando aplique"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "17. Roles, Responsabilidades y Ownership",
                                                                         "locator":  "T56"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8849"
                                         }
                                     ]
                     },
                     {
                         "id":  "decision-rights-matrix",
                         "title":  "Decision Rights Matrix",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones críticas del sistema quedan distribuidas así:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8853"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-057",
                                                          "caption":  "Decision Rights Matrix",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Pregunta de decisión",
                                                                          "Decide",
                                                                          "Debe consultar"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "¿Esta Signal merece Framing?",
                                                                           "Producto",
                                                                           "Fuente"
                                                                       ],
                                                                       [
                                                                           "¿Necesita Discovery adicional?",
                                                                           "Producto",
                                                                           "UX"
                                                                       ],
                                                                       [
                                                                           "¿Qué Outcome se persigue?",
                                                                           "Producto",
                                                                           "Célula"
                                                                       ],
                                                                       [
                                                                           "¿Qué evidencia falta?",
                                                                           "Producto + UX",
                                                                           "Área poseedora de evidencia"
                                                                       ],
                                                                       [
                                                                           "¿La experiencia funciona?",
                                                                           "UX",
                                                                           "Producto + usuario"
                                                                       ],
                                                                       [
                                                                           "¿Es técnicamente viable?",
                                                                           "Desarrollo",
                                                                           "SRE"
                                                                       ],
                                                                       [
                                                                           "¿Es operacionalmente aceptable?",
                                                                           "SRE",
                                                                           "Desarrollo"
                                                                       ],
                                                                       [
                                                                           "¿Debe priorizarse ahora?",
                                                                           "Producto",
                                                                           "Tech + liderazgo según contexto"
                                                                       ],
                                                                       [
                                                                           "¿Puede comenzar Delivery?",
                                                                           "Producto + Desarrollo",
                                                                           "UX/SRE según riesgo"
                                                                       ],
                                                                       [
                                                                           "¿Cómo se implementa técnicamente?",
                                                                           "Desarrollo",
                                                                           "SRE"
                                                                       ],
                                                                       [
                                                                           "¿Puede liberarse técnicamente?",
                                                                           "Desarrollo/SRE",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "¿Está siendo adoptado?",
                                                                           "CS",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "¿El Outcome se logró?",
                                                                           "Producto",
                                                                           "CS + UX + datos"
                                                                       ],
                                                                       [
                                                                           "¿Se escala, ajusta o detiene?",
                                                                           "Producto",
                                                                           "Célula"
                                                                       ],
                                                                       [
                                                                           "¿Debe escalarse a liderazgo?",
                                                                           "Outcome Owner",
                                                                           "Liderazgo"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "17. Roles, Responsabilidades y Ownership",
                                                                         "locator":  "T57"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8852"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Accountability organizacional y derechos de decisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "raci-ligero-del-ciclo",
                         "title":  "RACI ligero del ciclo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo utiliza RACI únicamente para clarificar relaciones críticas.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8856"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "A = Accountable",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8857"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "R = Responsible / ejecuta",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8858"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "C = Consulted",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8859"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "I = Informed",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8860"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-058",
                                                          "caption":  "RACI ligero del ciclo",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Actividad",
                                                                          "Producto",
                                                                          "UX",
                                                                          "Dev",
                                                                          "SRE",
                                                                          "Soporte",
                                                                          "CS",
                                                                          "Marketing"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Opportunity Framing",
                                                                           "A/R",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "C"
                                                                       ],
                                                                       [
                                                                           "User Discovery",
                                                                           "A",
                                                                           "R",
                                                                           "C",
                                                                           "C",
                                                                           "I",
                                                                           "C",
                                                                           "C"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "A/R",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "I",
                                                                           "C",
                                                                           "C"
                                                                       ],
                                                                       [
                                                                           "Solution Validation",
                                                                           "A",
                                                                           "R",
                                                                           "C",
                                                                           "C",
                                                                           "I",
                                                                           "C",
                                                                           "C"
                                                                       ],
                                                                       [
                                                                           "Prioritization",
                                                                           "A/R",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "I",
                                                                           "C",
                                                                           "C"
                                                                       ],
                                                                       [
                                                                           "Technical Feasibility",
                                                                           "C",
                                                                           "C",
                                                                           "A/R",
                                                                           "C",
                                                                           "I",
                                                                           "I",
                                                                           "I"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "C",
                                                                           "C",
                                                                           "A/R",
                                                                           "C",
                                                                           "I",
                                                                           "I",
                                                                           "I"
                                                                       ],
                                                                       [
                                                                           "Release Reliability",
                                                                           "I",
                                                                           "I",
                                                                           "R",
                                                                           "A/R",
                                                                           "C",
                                                                           "I",
                                                                           "I"
                                                                       ],
                                                                       [
                                                                           "Support",
                                                                           "I",
                                                                           "I",
                                                                           "C",
                                                                           "C",
                                                                           "A/R",
                                                                           "C",
                                                                           "I"
                                                                       ],
                                                                       [
                                                                           "Activation",
                                                                           "C",
                                                                           "C",
                                                                           "I",
                                                                           "I",
                                                                           "C",
                                                                           "A/R",
                                                                           "C"
                                                                       ],
                                                                       [
                                                                           "Adoption",
                                                                           "C",
                                                                           "C",
                                                                           "I",
                                                                           "I",
                                                                           "C",
                                                                           "A/R",
                                                                           "C"
                                                                       ],
                                                                       [
                                                                           "Market Communication",
                                                                           "C",
                                                                           "C",
                                                                           "I",
                                                                           "I",
                                                                           "I",
                                                                           "C",
                                                                           "A/R"
                                                                       ],
                                                                       [
                                                                           "Outcome Evaluation",
                                                                           "A/R",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "C"
                                                                       ],
                                                                       [
                                                                           "Learning",
                                                                           "A",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "C",
                                                                           "C"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "17. Roles, Responsabilidades y Ownership",
                                                                         "locator":  "T58"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La matriz no debe convertirse en un procedimiento rígido.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8861"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su objetivo es eliminar las principales ambigüedades del AS-IS.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8862"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8855"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Accountability organizacional y derechos de decisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "handoffs-convertidos-en-colaboracion",
                         "title":  "Handoffs convertidos en colaboración",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo AS-IS mostraba interfaces como:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8865"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto → UX",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8866"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX → Desarrollo",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8867"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo → SRE",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8868"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release → CS",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8869"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE reemplaza progresivamente el concepto de handoff por shared context.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8870"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto + UX",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8871"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trabajan sobre problema y Outcome.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8872"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX + Desarrollo",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8873"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trabajan sobre experiencia y factibilidad.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8874"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo + SRE",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8875"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trabajan sobre calidad y operabilidad.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8876"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto + CS",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8877"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trabajan sobre Outcome y adopción.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8878"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS + Soporte + Producto",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8879"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trabajan sobre patrones de fricción.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8880"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El trabajo continúa moviéndose entre especialidades.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8881"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El contexto no debe reiniciarse cada vez que cambia de función.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8882"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8864"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Accountability organizacional y derechos de decisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "accountability-en-las-interfaces",
                         "title":  "Accountability en las interfaces",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada transición tiene una pregunta de ownership.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8885"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal → Opportunity",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8886"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto: ¿comprendimos qué significa la señal?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8887"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity → Discovery",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8888"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto: ¿vale la pena reducir esta incertidumbre?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8889"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery → Validation",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8890"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto + UX: ¿sabemos qué hipótesis necesita probarse?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8891"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validation → Delivery",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8892"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto: ¿existe evidencia suficiente de valor?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8893"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo: ¿existe claridad suficiente de factibilidad?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8894"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery → Release",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8895"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo/SRE: ¿está preparado técnica y operacionalmente?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8896"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release → Adoption",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8897"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS: ¿la población relevante está avanzando hacia valor?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8898"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption → Outcome",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8899"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto: ¿la capacidad está produciendo el resultado esperado?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8900"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome → Learning",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8901"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto: ¿qué decisión cambia con la evidencia obtenida?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8902"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8884"
                                         }
                                     ]
                     },
                     {
                         "id":  "ownership-de-metricas",
                         "title":  "Ownership de métricas",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Toda métrica relevante requiere owner.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8905"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-059",
                                                          "caption":  "Ownership de métricas",
                                                          "kind":  "scorecard",
                                                          "headers":  [
                                                                          "Métrica",
                                                                          "Owner principal"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Outcome Metric",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Criterio de éxito",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "UX Friction",
                                                                           "UX"
                                                                       ],
                                                                       [
                                                                           "TTV",
                                                                           "Producto + CS"
                                                                       ],
                                                                       [
                                                                           "Activation",
                                                                           "CS"
                                                                       ],
                                                                       [
                                                                           "Adoption",
                                                                           "CS"
                                                                       ],
                                                                       [
                                                                           "Adherence",
                                                                           "Producto + CS"
                                                                       ],
                                                                       [
                                                                           "License Utilization",
                                                                           "CS / Producto según uso"
                                                                       ],
                                                                       [
                                                                           "Customer Autonomy",
                                                                           "Producto + CS"
                                                                       ],
                                                                       [
                                                                           "DORA",
                                                                           "Desarrollo / SRE"
                                                                       ],
                                                                       [
                                                                           "Reliability",
                                                                           "SRE"
                                                                       ],
                                                                       [
                                                                           "Tickets / Friction",
                                                                           "Soporte"
                                                                       ],
                                                                       [
                                                                           "Learning Lead Time",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Decision Lead Time",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Flow Metrics",
                                                                           "Desarrollo / célula"
                                                                       ],
                                                                       [
                                                                           "Market Signals",
                                                                           "Marketing"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "17. Roles, Responsabilidades y Ownership",
                                                                         "locator":  "T59"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Owner\" significa responsable por observar y provocar acción cuando corresponde.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8906"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No necesariamente responsable técnico de calcular la métrica.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8907"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8904"
                                         }
                                     ]
                     },
                     {
                         "id":  "ownership-de-datos",
                         "title":  "Ownership de datos",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidenció información distribuida.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8910"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE necesita separar:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8911"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Data Producer",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8912"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quién genera la señal.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8913"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Data Steward",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8914"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quién protege significado y calidad.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8915"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Owner",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8916"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quién utiliza el dato para decidir.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8917"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8918"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tickets",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8919"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producer: Soporte.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8920"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Steward: Soporte.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8921"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Owner cuando se convierte en patrón de Producto: Producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8922"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8923"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8924"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producer: producto/analytics.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8925"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Steward: Producto/CS según la definición.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8926"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Owner: Producto + CS según la acción.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8927"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita que la propiedad técnica de un dato se confunda con la propiedad de la decisión.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8928"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8909"
                                         }
                                     ]
                     },
                     {
                         "id":  "ownership-de-deuda-tecnica",
                         "title":  "Ownership de deuda técnica",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE manifestó deuda técnica relevante.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8931"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo establece:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8932"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo/SRE",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8933"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner de identificación, diagnóstico y propuesta técnica.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8934"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8935"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa cuando la deuda afecta:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8936"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "capacidad;",
                                                          "confiabilidad;",
                                                          "escalabilidad;",
                                                          "experiencia;",
                                                          "inversión futura."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8937–P8942"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8943"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa cuando requiere trade-off material de capacidad o riesgo.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8944"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La deuda técnica no necesita Product Ownership sobre su solución técnica.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8945"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí necesita visibilidad sobre su impacto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8946"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8930"
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
                         "id":  "ownership-de-customer-feedback",
                         "title":  "Ownership de Customer Feedback",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El feedback no pertenece exclusivamente a Customer Success.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8949"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8950"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner del contexto de cuenta.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8951"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8952"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner del contexto de incidente/fricción.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8953"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8954"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner de evidencia de comportamiento y experiencia.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8955"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8956"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner de señal de mercado.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8957"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8958"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner de integrar esas señales en Opportunities y decisiones.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8959"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto responde directamente al hallazgo de información distribuida.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8960"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8948"
                                         }
                                     ]
                     },
                     {
                         "id":  "ownership-de-growth",
                         "title":  "Ownership de Growth",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Growth no se crea como un área independiente dentro de este Blueprint.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8963"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El contexto y tamaño de SEIF no justifican una nueva estructura.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8964"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Growth funciona como capacidad transversal.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8965"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8966"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner de Outcome y Growth Bet.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8967"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8968"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner de señales de adopción, riesgo y expansión en cuentas.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8969"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8970"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner de comunicación y señales de mercado.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8971"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8972"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner de fricción del journey.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8973"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8974"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner de habilitación técnica.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8975"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Así Growth utiliza la estructura actual.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8976"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8962"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership de Growth, Expansion y Product Marketing",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ownership-de-product-marketing",
                         "title":  "Ownership de Product Marketing",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing y Producto comparten contexto, pero no accountability.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8979"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto responde",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8980"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema y Outcome representa la capacidad?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8981"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing responde",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8982"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo se comunica ese valor al segmento relevante?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8983"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS aporta",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8984"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo lo recibe el cliente existente?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8985"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita lanzar funcionalidades comunicando únicamente:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8986"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“nueva Feature disponible”.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8987"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La comunicación debe traducir capacidad a valor.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8988"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8978"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership de Growth, Expansion y Product Marketing",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ownership-de-decisiones-urgentes",
                         "title":  "Ownership de decisiones urgentes",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo reconoce situaciones donde el ciclo normal no aplica.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8991"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incidente crítico",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8992"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE/Desarrollo responde por Restore.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8993"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Después de restaurar",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8994"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se analiza:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8995"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "causa;",
                                                          "recurrencia;",
                                                          "impacto;",
                                                          "necesidad de Opportunity."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P8996–P8999"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto entra cuando el problema requiere una decisión de inversión o modificación de Producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9000"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita que un incidente crítico espere gobierno de Producto para restauración.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9001"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P8990"
                                         }
                                     ]
                     },
                     {
                         "id":  "escalamiento",
                         "title":  "Escalamiento",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una decisión se escala cuando excede el authority del owner correspondiente.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9004"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Criterios de escalamiento:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9005"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "conflicto entre Outcomes estratégicos;",
                                                          "riesgo corporativo relevante;",
                                                          "inversión extraordinaria;",
                                                          "restricción contractual;",
                                                          "dependencia externa crítica;",
                                                          "cambio material de estrategia."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9006–P9011"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se escala porque exista desacuerdo menor.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9012"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El propósito del Decision Rights Model es precisamente resolver decisiones al nivel más cercano posible al trabajo.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9013"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9003"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Accountability organizacional y derechos de decisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "delegation-principle",
                         "title":  "Delegation Principle",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo aplica:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9016"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "la decisión debe tomarse en el nivel más cercano a la evidencia, siempre que ese nivel posea authority suficiente para asumir sus consecuencias.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9017"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9018"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX no necesita aprobación ejecutiva para ajustes de interacción dentro de una Bet validada.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9019"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo no necesita aprobación de Producto para cada decisión técnica interna.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9020"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto no necesita aprobación ejecutiva para cada Opportunity.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9021"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo conserva decisiones estratégicas.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9022"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce Decision Lead Time.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9023"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9015"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Accountability organizacional y derechos de decisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "role-of-data-analytics",
                         "title":  "Role of Data / Analytics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no evidenció una función Data formal que justifique asignarle ownership organizacional específico.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9026"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad de analytics debe, por tanto, operar transversalmente utilizando las capacidades actuales.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9027"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto responde por:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9028"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "qué necesita medirse desde perspectiva de Outcome."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9029–P9029"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tecnología responde por:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9030"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cómo instrumentar cuando corresponda."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9031–P9031"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS aporta:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9032"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "interpretación de cuenta."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9033–P9033"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE aporta:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9034"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "observabilidad técnica."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9035–P9035"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura futura podrá evolucionar si SEIF desarrolla una capacidad Data dedicada.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9036"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9025"
                                         }
                                     ]
                     },
                     {
                         "id":  "product-operations-como-capacidad-no-cargo",
                         "title":  "Product Operations como capacidad, no cargo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment muestra necesidades propias de Product Operations:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9039"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "trazabilidad;",
                                                          "métricas;",
                                                          "cadencias;",
                                                          "tooling;",
                                                          "documentación;",
                                                          "governance;",
                                                          "learning."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9040–P9046"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, el tamaño de SEIF no justifica crear inicialmente un rol Product Operations dedicado.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9047"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En el TO-BE:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9048"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Operations existe como capacidad distribuida dentro del Product Operating System.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9049"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La Head de Producto lidera su operación.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9050"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las herramientas y automatizaciones reducen carga administrativa.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9051"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La necesidad de un rol dedicado podrá revisarse posteriormente si aumenta complejidad y escala.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9052"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9038"
                                         }
                                     ]
                     },
                     {
                         "id":  "roles-que-no-se-crean",
                         "title":  "Roles que no se crean",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Blueprint no introduce actualmente:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9055"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Portfolio Manager;",
                                                          "Product Ops Manager;",
                                                          "Agile Coach permanente;",
                                                          "Scrum Master por célula;",
                                                          "PMO;",
                                                          "VMO;",
                                                          "Release Manager;",
                                                          "Growth Team independiente;",
                                                          "Change Office."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9056–P9064"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe evidencia suficiente que justifique estas estructuras para el tamaño actual de SEIF.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9065"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las capacidades necesarias se asignan utilizando roles existentes.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9066"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9054"
                                         }
                                     ]
                     },
                     {
                         "id":  "ownership-anti-patterns",
                         "title":  "Ownership Anti-Patterns",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo busca eliminar cinco comportamientos.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9069"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Everyone Owns Everything",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9070"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Responsabilidad colectiva sin accountability.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9071"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Owns Everything",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9072"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto convertido en cuello de botella.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9073"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Development Is an Order Taker",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9074"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tecnología limitada a ejecutar requerimientos.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9075"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS Owns Adoption Problems Alone",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9076"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success compensando problemas sistémicos.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9077"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE as Final Gate",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9078"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE apareciendo únicamente al final para aprobar despliegues.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9079"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE distribuye ownership según naturaleza de la decisión.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9080"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9068"
                                         }
                                     ]
                     },
                     {
                         "id":  "role-overload",
                         "title":  "Role Overload",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una compañía pequeña tiene riesgo de asignar demasiadas responsabilidades a pocas personas.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9083"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo protege este riesgo mediante:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9084"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "pocas ceremonias;",
                                                          "artefactos mínimos;",
                                                          "decisiones distribuidas;",
                                                          "automatización;",
                                                          "participación contextual;",
                                                          "eliminación de aprobaciones innecesarias."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9085–P9090"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La multidisciplinariedad no significa que todas las personas participen en todas las actividades.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9091"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9082"
                                         }
                                     ]
                     },
                     {
                         "id":  "participation-by-exception",
                         "title":  "Participation by Exception",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La regla operacional es:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9094"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "participa quien aporta evidencia, expertise o authority necesario para resolver la incertidumbre actual.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9095"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9096"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing no necesita asistir a una discusión de arquitectura.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9097"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE no necesita participar en toda validación UX.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9098"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX no necesita intervenir en un cambio puramente operacional sin impacto de experiencia.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9099"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS no necesita estar en toda sesión técnica.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9100"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce coordinación innecesaria.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9101"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9093"
                                         }
                                     ]
                     },
                     {
                         "id":  "role-clarity-canvas",
                         "title":  "Role Clarity Canvas",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada rol del Operating System debe poder responder cinco preguntas:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9104"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Purpose",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9105"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué participa?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9106"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountabilities",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9107"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué resultados responde?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9108"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decisions",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9109"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué puede decidir?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9110"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contributions",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9111"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde aporta sin ser accountable?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9112"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Measures",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9113"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué señales debe observar?",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9114"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este canvas es suficiente para documentar roles sin construir manuales extensos.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9115"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9103"
                                         }
                                     ]
                     },
                     {
                         "id":  "cell-charter-minimo",
                         "title":  "Cell Charter mínimo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada célula activa debe contener:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9118"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-060",
                                                          "caption":  "Cell Charter mínimo",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Elemento",
                                                                          "Definición"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Outcome",
                                                                           "Resultado buscado"
                                                                       ],
                                                                       [
                                                                           "Outcome Owner",
                                                                           "Responsable de Producto"
                                                                       ],
                                                                       [
                                                                           "Cell Lead",
                                                                           "Facilitación/foco"
                                                                       ],
                                                                       [
                                                                           "Tech Owner",
                                                                           "Responsabilidad técnica"
                                                                       ],
                                                                       [
                                                                           "UX Participation",
                                                                           "Cuando corresponda"
                                                                       ],
                                                                       [
                                                                           "CS Participation",
                                                                           "Cuando corresponda"
                                                                       ],
                                                                       [
                                                                           "Metric",
                                                                           "Evidencia de resultado"
                                                                       ],
                                                                       [
                                                                           "Bet",
                                                                           "Hipótesis actual"
                                                                       ],
                                                                       [
                                                                           "Decision Rights",
                                                                           "Decisiones delegadas"
                                                                       ],
                                                                       [
                                                                           "WIP",
                                                                           "Trabajo actualmente activo"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "17. Roles, Responsabilidades y Ownership",
                                                                         "locator":  "T60"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite operar células de manera diferente según Outcome manteniendo un contrato común.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9119"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9117"
                                         }
                                     ]
                     },
                     {
                         "id":  "ownership-review",
                         "title":  "Ownership Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La claridad de ownership debe revisarse mediante comportamiento real.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9122"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Señales de ownership deficiente:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9123"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "decisiones esperan constantemente a Jonathan;",
                                                          "Producto debe aprobar microdecisiones;",
                                                          "Desarrollo recibe instrucciones sin contexto;",
                                                          "CS debe resolver manualmente la misma fricción;",
                                                          "varios roles creen ser responsables de la misma decisión;",
                                                          "nadie revisa una métrica cuando cambia;",
                                                          "releases quedan sin owner de adopción;",
                                                          "iniciativas permanecen activas sin Outcome Owner."
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9124–P9131"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas señales deberán observarse durante la implementación.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9132"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9121"
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
                         "id":  "metricas-de-ownership",
                         "title":  "Métricas de ownership",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo puede medir su efectividad inicialmente mediante:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9135"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-061",
                                                          "caption":  "Métricas de ownership",
                                                          "kind":  "scorecard",
                                                          "headers":  [
                                                                          "Métrica",
                                                                          "Qué indica"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Decision Lead Time",
                                                                           "Claridad y velocidad de ownership"
                                                                       ],
                                                                       [
                                                                           "Escalation Rate",
                                                                           "Cuánto depende el sistema de jerarquía"
                                                                       ],
                                                                       [
                                                                           "Blocked by Decision Time",
                                                                           "Espera por autoridad"
                                                                       ],
                                                                       [
                                                                           "% Outcomes with Owner",
                                                                           "Claridad de accountability"
                                                                       ],
                                                                       [
                                                                           "% Metrics with Owner",
                                                                           "Responsabilidad sobre señales"
                                                                       ],
                                                                       [
                                                                           "% Bets with Tech Owner",
                                                                           "Claridad técnica"
                                                                       ],
                                                                       [
                                                                           "Unplanned Escalations",
                                                                           "Ambigüedad organizacional"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "17. Roles, Responsabilidades y Ownership",
                                                                         "locator":  "T61"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se asignan targets sin baseline.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9136"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9134"
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
                                                          "id":  "source-table-062",
                                                          "caption":  "AS-IS → TO-BE",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "AS-IS observado",
                                                                          "TO-BE"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Responsabilidad",
                                                                           "Compartida en células",
                                                                           "Shared Outcome + explicit decisions"
                                                                       ],
                                                                       [
                                                                           "Producto",
                                                                           "Central en iniciativas",
                                                                           "Owner de problema, Outcome y decisión"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Diseño/validación",
                                                                           "Owner de evidencia de experiencia"
                                                                       ],
                                                                       [
                                                                           "Desarrollo",
                                                                           "Construcción + capacidad",
                                                                           "Owner de factibilidad y solución técnica"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Operación/release",
                                                                           "Owner de confiabilidad y riesgo operacional"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Resolución",
                                                                           "Owner de señal operativa y patrones"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Implementación/adopción",
                                                                           "Owner operacional del customer value journey"
                                                                       ],
                                                                       [
                                                                           "Marketing",
                                                                           "Mercado/comunicación",
                                                                           "Market Intelligence + Product Marketing"
                                                                       ],
                                                                       [
                                                                           "Liderazgo",
                                                                           "Participación frecuente según contexto",
                                                                           "Strategic trade-offs"
                                                                       ],
                                                                       [
                                                                           "Célula",
                                                                           "Equipo multidisciplinario",
                                                                           "Outcome + Bet + Learning"
                                                                       ],
                                                                       [
                                                                           "Decisiones",
                                                                           "Distribuidas",
                                                                           "Decision Rights"
                                                                       ],
                                                                       [
                                                                           "Métricas",
                                                                           "Diferentes áreas",
                                                                           "Explicit metric ownership"
                                                                       ],
                                                                       [
                                                                           "Escalamiento",
                                                                           "Dependiente del contexto",
                                                                           "Defined escalation triggers"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "17. Roles, Responsabilidades y Ownership",
                                                                         "locator":  "T62"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9138"
                                         }
                                     ]
                     },
                     {
                         "id":  "maturity-model-de-roles-ownership",
                         "title":  "Maturity Model de Roles \u0026 Ownership",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-063",
                                                          "caption":  "Maturity Model de Roles \u0026 Ownership",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Comportamiento"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1 — Inicial",
                                                                           "Las responsabilidades dependen principalmente de personas y contexto"
                                                                       ],
                                                                       [
                                                                           "2 — Repetible",
                                                                           "Los roles son conocidos, pero las decisiones pueden solaparse"
                                                                       ],
                                                                       [
                                                                           "3 — Definido",
                                                                           "Outcome Ownership, Decision Rights y accountability están explícitos"
                                                                       ],
                                                                       [
                                                                           "4 — Gestionado",
                                                                           "Se mide Decision Lead Time, bloqueos y escalamiento"
                                                                       ],
                                                                       [
                                                                           "5 — Optimizado",
                                                                           "La autonomía de decisión evoluciona continuamente basada en desempeño"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "17. Roles, Responsabilidades y Ownership",
                                                                         "locator":  "T63"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado SEIF",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9141"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con base en las entrevistas:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9142"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9143"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target inicial",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9144"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9145"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El target no requiere modificar la estructura organizacional.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9146"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Requiere clarificar el contrato operativo de las capacidades actuales.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9147"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9140"
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
                                            "text":  "El modelo puede comenzar mediante seis acciones.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9150"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Nombrar Outcome Owner",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9151"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada Outcome activo.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9152"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Nombrar Tech Owner",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9153"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada Bet de impacto técnico relevante.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9154"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Publicar Decision Rights",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9155"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En una única página.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9156"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Incorporar ownership en Outcome Card",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9157"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin crear otro documento.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9158"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Asignar owner a métricas críticas",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9159"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV, adopción, DORA, fricción y Outcome.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9160"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Medir decisiones bloqueadas",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9161"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante las primeras semanas para localizar ambigüedad real.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9162"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas acciones requieren poco overhead y atacan directamente el diagnóstico.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9163"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9149"
                                         }
                                     ]
                     },
                     {
                         "id":  "modelo-consolidado-de-ownership",
                         "title":  "Modelo consolidado de ownership",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema puede resumirse de la siguiente manera:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9166"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRODUCTO",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9167"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owns:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9168"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem → Outcome → Priority → Learning Decision",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9169"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9170"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owns:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9171"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "User Evidence → Experience → Validation",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9172"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DESARROLLO",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9173"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owns:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9174"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feasibility → Technical Solution → Quality",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9175"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9176"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owns:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9177"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reliability → Operability → Recovery",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9178"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CUSTOMER SUCCESS",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9179"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owns:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9180"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation → Adoption → Account Value Journey",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9181"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SOPORTE",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9182"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owns:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9183"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resolution → Friction Signals → Patterns",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9184"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MARKETING",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9185"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owns:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9186"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Market Signals → Value Communication",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9187"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LIDERAZGO",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9188"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owns:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9189"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Strategic Direction → Major Trade-offs",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9190"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La célula conecta todas estas capacidades alrededor de:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9191"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9192"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9165"
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
                                            "text":  "El assessment no evidencia que SEIF necesite más roles.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9195"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia que necesita mayor claridad sobre el tipo de responsabilidad que ya poseen los roles existentes.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9196"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La estructura multidisciplinaria de células es compatible con el modelo futuro siempre que SEIF separe claramente:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9197"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "quién contribuye",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9198"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9199"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "quién decide",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9200"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9201"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "quién responde por el resultado.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9202"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo de ownership queda sustentado en cuatro reglas:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9203"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Producto responde por el problema y el Outcome.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9204"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Cada especialidad responde por la calidad de su capacidad.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9205"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Customer Success responde operacionalmente por acompañar el journey hacia valor, pero Producto continúa respondiendo por las barreras sistémicas del producto.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9206"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Liderazgo interviene en dirección y trade-offs estratégicos, no en la microgestión del ciclo.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9207"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El SEIF Roles \u0026 Ownership Model permite pasar de:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9208"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "colaboración multidisciplinaria con responsabilidades parcialmente distribuidas",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9209"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9210"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "colaboración multidisciplinaria con accountability explícita.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9211"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo final no es aumentar control.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9212"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es reducir:",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9213"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "esperas por decisión;",
                                                          "escalamiento innecesario;",
                                                          "dependencia de liderazgo;",
                                                          "handoffs;",
                                                          "ambigüedad;",
                                                          "ownership difuso;"
                                                      ],
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9214–P9219"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "manteniendo la capacidad de las células para trabajar como un equipo alrededor de Outcomes compartidos.",
                                            "source":  {
                                                           "title":  "17. Roles, Responsabilidades y Ownership",
                                                           "locator":  "P9220"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "17. Roles, Responsabilidades y Ownership",
                                             "locator":  "P9194"
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
                    "governance",
                    "artifacts",
                    "jira"
                ],
    "source":  {
                   "title":  "17. Roles, Responsabilidades y Ownership",
                   "locator":  "P8443–P9220",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               },
    "operatingRoles":  [
                           {
                               "id":  "head-producto",
                               "sourceRole":  "Head de Producto",
                               "purpose":  "Owner principal del sistema de decisiones de Producto.",
                               "responsibilities":  [
                                                        "Signals, Opportunities, Outcomes, éxito, priorización, foco, Bets, feedback, learning y trazabilidad"
                                                    ],
                               "decisionRights":  [
                                                      "Problem → Outcome → Priority → Learning Decision"
                                                  ],
                               "interactions":  [
                                                    "UX",
                                                    "Desarrollo",
                                                    "SRE",
                                                    "CS",
                                                    "Soporte",
                                                    "Marketing",
                                                    "Liderazgo"
                                                ],
                               "canonicalStages":  [
                                                       "DISCOVER",
                                                       "DECIDE",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "ACCOUNTABLE",
                                                 "DECISION OWNER"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8510–P8535"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "ux-ui",
                               "sourceRole":  "UX/UI",
                               "purpose":  "Owner de comportamiento, experiencia, usabilidad y journey.",
                               "responsibilities":  [
                                                        "Investigación",
                                                        "prototipado",
                                                        "validación de experiencia"
                                                    ],
                               "decisionRights":  [
                                                      "Ajustes de interacción dentro de una Bet validada"
                                                  ],
                               "interactions":  [
                                                    "Producto",
                                                    "usuarios",
                                                    "Desarrollo"
                                                ],
                               "canonicalStages":  [
                                                       "DISCOVER",
                                                       "DELIVER",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "RESPONSIBLE",
                                                 "CONTRIBUTOR"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8548–P8582"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "desarrollo",
                               "sourceRole":  "Desarrollo",
                               "purpose":  "Owner de factibilidad, solución técnica y calidad.",
                               "responsibilities":  [
                                                        "Diseño e implementación técnica",
                                                        "estimación y dependencias",
                                                        "testing, deuda y release readiness"
                                                    ],
                               "decisionRights":  [
                                                      "Decisiones técnicas internas"
                                                  ],
                               "interactions":  [
                                                    "Producto",
                                                    "UX",
                                                    "SRE"
                                                ],
                               "canonicalStages":  [
                                                       "DECIDE",
                                                       "DELIVER"
                                                   ],
                               "semantics":  [
                                                 "RESPONSIBLE",
                                                 "DECISION OWNER"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8584–P8614"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "sre",
                               "sourceRole":  "SRE",
                               "purpose":  "Owner de confiabilidad, operabilidad y recuperación.",
                               "responsibilities":  [
                                                        "Observabilidad",
                                                        "disponibilidad y resiliencia",
                                                        "riesgo operacional y readiness"
                                                    ],
                               "decisionRights":  [
                                                      "Restore ante incidente crítico",
                                                      "aceptabilidad operacional"
                                                  ],
                               "interactions":  [
                                                    "Desarrollo",
                                                    "Producto",
                                                    "Soporte"
                                                ],
                               "canonicalStages":  [
                                                       "DELIVER",
                                                       "ADOPT",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "RESPONSIBLE",
                                                 "DECISION OWNER"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8616–P8645"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "soporte",
                               "sourceRole":  "Soporte",
                               "purpose":  "Owner de resolución, contexto de fricción y patrones.",
                               "responsibilities":  [
                                                        "Resolver reportes operacionales",
                                                        "capturar contexto, recurrencia y señales"
                                                    ],
                               "decisionRights":  [

                                                  ],
                               "interactions":  [
                                                    "CS",
                                                    "Producto",
                                                    "SRE"
                                                ],
                               "canonicalStages":  [
                                                       "DISCOVER",
                                                       "ADOPT",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "RESPONSIBLE",
                                                 "CONTRIBUTOR"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8647–P8670"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "customer-success",
                               "sourceRole":  "Customer Success",
                               "purpose":  "Owner del journey de valor de cuenta desde implementación hasta adopción.",
                               "responsibilities":  [
                                                        "Activación, adopción y adherencia",
                                                        "riesgos, barreras y señales de expansión"
                                                    ],
                               "decisionRights":  [
                                                      "Acción operativa de adopción"
                                                  ],
                               "interactions":  [
                                                    "Producto",
                                                    "Soporte",
                                                    "Marketing"
                                                ],
                               "canonicalStages":  [
                                                       "ADOPT",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "RESPONSIBLE",
                                                 "CONTRIBUTOR"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8672–P8705"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04",
                                                           "CL-13"
                                                       ]
                           },
                           {
                               "id":  "marketing",
                               "sourceRole":  "Marketing",
                               "purpose":  "Owner de señales de mercado y comunicación de valor.",
                               "responsibilities":  [
                                                        "Market intelligence",
                                                        "posicionamiento, lanzamiento y comunicación de adopción"
                                                    ],
                               "decisionRights":  [

                                                  ],
                               "interactions":  [
                                                    "Producto",
                                                    "CS"
                                                ],
                               "canonicalStages":  [
                                                       "DISCOVER",
                                                       "ADOPT"
                                                   ],
                               "semantics":  [
                                                 "RESPONSIBLE",
                                                 "CONTRIBUTOR"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8707–P8732"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04",
                                                           "CL-13"
                                                       ]
                           },
                           {
                               "id":  "liderazgo",
                               "sourceRole":  "Liderazgo",
                               "purpose":  "Owner de dirección estratégica y trade-offs mayores.",
                               "responsibilities":  [
                                                        "Dirección, restricciones, prioridades corporativas y sponsorship"
                                                    ],
                               "decisionRights":  [
                                                      "Inversión de alto impacto",
                                                      "trade-offs estratégicos"
                                                  ],
                               "interactions":  [
                                                    "Producto",
                                                    "células"
                                                ],
                               "canonicalStages":  [
                                                       "DECIDE"
                                                   ],
                               "semantics":  [
                                                 "ACCOUNTABLE",
                                                 "DECISION OWNER"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8734–P8760"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04",
                                                           "CL-05"
                                                       ]
                           },
                           {
                               "id":  "outcome-owner",
                               "sourceRole":  "Outcome Owner",
                               "purpose":  "Mantiene claridad, alineación, métrica, evidencia y revisión de un Outcome activo.",
                               "responsibilities":  [
                                                        "Claridad y alineación",
                                                        "success metric",
                                                        "evidencia y review"
                                                    ],
                               "decisionRights":  [
                                                      "Decisiones del Outcome según authority pendiente"
                                                  ],
                               "interactions":  [
                                                    "Célula",
                                                    "Liderazgo"
                                                ],
                               "canonicalStages":  [
                                                       "DECIDE",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "ACCOUNTABLE",
                                                 "DECISION OWNER"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8762–P8775"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "bet-owner",
                               "sourceRole":  "Bet Owner",
                               "purpose":  "Distribuye ownership de valor, técnica y experiencia dentro de una Bet.",
                               "responsibilities":  [
                                                        "Producto: valor",
                                                        "Desarrollo: técnica",
                                                        "UX: experiencia"
                                                    ],
                               "decisionRights":  [

                                                  ],
                               "interactions":  [
                                                    "Producto",
                                                    "Desarrollo",
                                                    "UX"
                                                ],
                               "canonicalStages":  [
                                                       "DECIDE",
                                                       "DELIVER"
                                                   ],
                               "semantics":  [
                                                 "RESPONSIBLE",
                                                 "CONTRIBUTOR"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8777–P8783"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "technical-owner",
                               "sourceRole":  "Technical Owner",
                               "purpose":  "Capacidad contextual de Dev o SRE, no un cargo nuevo.",
                               "responsibilities":  [
                                                        "Decisiones técnicas, sostenibilidad, riesgos, dependencias y deuda"
                                                    ],
                               "decisionRights":  [
                                                      "Solución técnica"
                                                  ],
                               "interactions":  [
                                                    "Desarrollo",
                                                    "SRE",
                                                    "Producto"
                                                ],
                               "canonicalStages":  [
                                                       "DECIDE",
                                                       "DELIVER"
                                                   ],
                               "semantics":  [
                                                 "DECISION OWNER",
                                                 "RESPONSIBLE"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8785–P8796"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "customer-outcome-owner",
                               "sourceRole":  "Customer Outcome Owner",
                               "purpose":  "Separa la operación de adopción de la accountability por el Outcome de Producto.",
                               "responsibilities":  [
                                                        "CS: activación, adopción y journey de cuenta",
                                                        "Producto: Outcome y barreras sistémicas"
                                                    ],
                               "decisionRights":  [

                                                  ],
                               "interactions":  [
                                                    "Customer Success",
                                                    "Producto"
                                                ],
                               "canonicalStages":  [
                                                       "ADOPT",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "ACCOUNTABLE",
                                                 "RESPONSIBLE"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8798–P8811"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "cell-lead",
                               "sourceRole":  "Cell Lead / Captain",
                               "purpose":  "Protege foco y flujo sin reemplazar las decisiones de las especialidades.",
                               "responsibilities":  [
                                                        "Foco, flow, blockers, WIP, cadence y escalation"
                                                    ],
                               "decisionRights":  [

                                                  ],
                               "interactions":  [
                                                    "Célula",
                                                    "Outcome Owner"
                                                ],
                               "canonicalStages":  [
                                                       "DECIDE",
                                                       "DELIVER",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "FACILITATOR",
                                                 "CONTRIBUTOR"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P8830–P8847"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04",
                                                           "CL-05",
                                                           "CL-11"
                                                       ]
                           },
                           {
                               "id":  "data-analytics",
                               "sourceRole":  "Data / Analytics (capacidad transversal)",
                               "purpose":  "La fuente no evidencia una función Data formal con ownership organizacional específico.",
                               "responsibilities":  [
                                                        "Producto define qué medir",
                                                        "Tecnología instrumenta cuando corresponde",
                                                        "CS y SRE aportan contexto"
                                                    ],
                               "decisionRights":  [

                                                  ],
                               "interactions":  [
                                                    "Producto",
                                                    "Tecnología",
                                                    "CS",
                                                    "SRE"
                                                ],
                               "canonicalStages":  [
                                                       "ADOPT",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "CONTRIBUTOR"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P9025–P9036"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "product-operations",
                               "sourceRole":  "Product Operations (capacidad, no cargo)",
                               "purpose":  "Capacidad distribuida de trazabilidad, métricas, cadencias, tooling, documentación, governance y learning.",
                               "responsibilities":  [
                                                        "Operación liderada por Head de Producto",
                                                        "automatización reduce carga administrativa"
                                                    ],
                               "decisionRights":  [

                                                  ],
                               "interactions":  [
                                                    "Head de Producto",
                                                    "capacidades actuales"
                                                ],
                               "canonicalStages":  [
                                                       "DISCOVER",
                                                       "DECIDE",
                                                       "DELIVER",
                                                       "ADOPT",
                                                       "LEARN"
                                                   ],
                               "semantics":  [
                                                 "FACILITATOR",
                                                 "CONTRIBUTOR"
                                             ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "17. Roles, Responsabilidades y Ownership",
                                                          "locator":  "P9038–P9052"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           }
                       ],
    "decisionRights":  [
                           {
                               "id":  "signal-worth-framing",
                               "decision":  "¿La señal merece framing?",
                               "stage":  "DISCOVER",
                               "decisionOwner":  "Producto / fuente de señal",
                               "participants":  [
                                                    "Producto / fuente de señal"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "needs-discovery",
                               "decision":  "¿Requiere Discovery?",
                               "stage":  "DISCOVER",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "UX"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "define-outcome",
                               "decision":  "¿Cuál es el Outcome?",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "célula"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "evidence-sufficient",
                               "decision":  "¿Falta evidencia?",
                               "stage":  "DISCOVER",
                               "decisionOwner":  "Producto + UX",
                               "participants":  [
                                                    "holder de evidencia"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "experience-valid",
                               "decision":  "¿La experiencia es válida?",
                               "stage":  "DISCOVER",
                               "decisionOwner":  "UX",
                               "participants":  [
                                                    "Producto + usuario"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "technical-feasibility",
                               "decision":  "¿Es factible?",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Desarrollo / SRE",
                               "participants":  [
                                                    "Producto"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "operational-acceptability",
                               "decision":  "¿Es operacionalmente aceptable?",
                               "stage":  "DELIVER",
                               "decisionOwner":  "SRE",
                               "participants":  [
                                                    "Desarrollo"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "prioritize",
                               "decision":  "¿Se prioriza?",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "Tecnología + contexto de Liderazgo"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "start-delivery",
                               "decision":  "¿Comienza Delivery?",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto + Desarrollo",
                               "participants":  [
                                                    "UX / SRE según riesgo"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "technical-implementation",
                               "decision":  "¿Cómo se implementa técnicamente?",
                               "stage":  "DELIVER",
                               "decisionOwner":  "Desarrollo / SRE",
                               "participants":  [
                                                    "Producto"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "technical-release",
                               "decision":  "¿Está técnicamente listo para Release?",
                               "stage":  "DELIVER",
                               "decisionOwner":  "Desarrollo / SRE",
                               "participants":  [
                                                    "Producto"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "adoption-action",
                               "decision":  "¿Qué acción de adopción corresponde?",
                               "stage":  "ADOPT",
                               "decisionOwner":  "Customer Success",
                               "participants":  [
                                                    "Producto"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "outcome-achieved",
                               "decision":  "¿Se logró el Outcome?",
                               "stage":  "LEARN",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "CS + UX + data"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "next-learning-decision",
                               "decision":  "¿Escalar, ajustar o detener?",
                               "stage":  "LEARN",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "célula"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "strategic-escalation",
                               "decision":  "¿Debe escalarse la decisión?",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Outcome Owner / Liderazgo",
                               "participants":  [
                                                    "participantes según autoridad"
                                                ],
                               "source":  {
                                              "title":  "17. Roles, Responsabilidades y Ownership",
                                              "locator":  "T57"
                                          },
                               "validationStatus":  "pending"
                           }
                       ],
    "clientValidations":  [
                              {
                                  "id":  "CL-04",
                                  "subject":  "Mapeo entre roles fuente y futuros roles canónicos",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-05",
                                  "subject":  "Accountability organizacional y derechos de decisión",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              }
                          ]
} satisfies Chapter;
