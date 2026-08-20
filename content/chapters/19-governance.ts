import type { Chapter } from "@/types/content";
export const chapter = {
    "slug":  "governance",
    "group":  "Operating Model",
    "title":  "Minimum Viable Governance y cadencias de decisión",
    "sourceTitle":  "19. Rituales de Gobierno",
    "eyebrow":  "19 · Governance",
    "summary":  "Un sistema ligero de revisiones que convierte evidencia en decisiones, acción y nueva evidencia sin crear comités por defecto.",
    "takeaway":  "Una reunión sólo gobierna cuando puede tomar una decisión explícita y modificar el sistema.",
    "executive":  {
                      "keyFindings":  [
                                          "Cuatro espacios recurrentes forman el gobierno mínimo; tres reviews adicionales son contextuales.",
                                          "Outcome Review conecta métricas, aprendizaje y decisión.",
                                          "Portfolio Review puede modificar Outcomes, WIP y capacidad, sujeto a derechos por validar.",
                                          "Escalation es una excepción y su autoridad permanece CL-05."
                                      ],
                      "implication":  "SEIF puede gobernar por excepción y reducir status reporting, preservando decisiones y evidencia.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "loop",
                      "sources":  [
                                      {
                                          "title":  "19. Rituales de Gobierno",
                                          "locator":  "P10243–P11069"
                                      }
                                  ]
                  },
    "clientValidations":  [
                              {
                                  "id":  "CL-04",
                                  "subject":  "Role mapping",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-05",
                                  "subject":  "Decision rights y autoridad",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-09",
                                  "subject":  "WIP limits",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-10",
                                  "subject":  "Tool architecture",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-11",
                                  "subject":  "Governance cadences",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-12",
                                  "subject":  "Capacity / debt policy",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              }
                          ],
    "operatingConcepts":  [
                              {
                                  "id":  "minimum-viable-governance",
                                  "title":  "Minimum Viable Governance — proposed operating cadence",
                                  "canonicalLayers":  [
                                                          "GOVERNANCE",
                                                          "ROLES",
                                                          "METRICS",
                                                          "EVIDENCE",
                                                          "CONTINUOUS IMPROVEMENT"
                                                      ],
                                  "sourceChapters":  [
                                                         "19"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "19. Rituales de Gobierno",
                                                             "locator":  "P10243–P11069"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE COMPLETE",
                                                       "WHEN":  "SOURCE COMPLETE",
                                                       "INPUT":  "SOURCE COMPLETE",
                                                       "EVIDENCE":  "SOURCE COMPLETE",
                                                       "OUTPUT":  "SOURCE COMPLETE",
                                                       "ARTIFACT":  "SOURCE COMPLETE",
                                                       "METRIC":  "SOURCE COMPLETE",
                                                       "DECISION RIGHT":  "SOURCE PARTIAL",
                                                       "REVISIT CONDITION":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE PARTIAL",
                                                       "ESCALATION":  "SOURCE PARTIAL"
                                                   },
                                  "gapIds":  [
                                                 "CL-04",
                                                 "CL-05",
                                                 "CL-09",
                                                 "CL-10",
                                                 "CL-11",
                                                 "CL-12",
                                                 "CL-18"
                                             ]
                              }
                          ],
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
                           }
                       ],
    "decisionRights":  [
                           {
                               "id":  "gov-flow-exceptions",
                               "decision":  "Asignar bloqueos, terminar antes de iniciar y cambiar prioridad explícitamente",
                               "stage":  "DELIVER",
                               "trigger":  "WIP, aging, bloqueo, dependencia o decisión pendiente",
                               "inputs":  [
                                              "Outcome Board",
                                              "flow evidence"
                                          ],
                               "participants":  [
                                                    "Producto",
                                                    "Cell Lead / Captain",
                                                    "Desarrollo",
                                                    "roles contextuales"
                                                ],
                               "output":  "Owner, decisión o cambio explícito",
                               "source":  {
                                              "title":  "19. Rituales de Gobierno",
                                              "locator":  "P10280–P10335"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "gov-outcome-bet",
                               "decision":  "SCALE / CONTINUE / ADJUST / EXPLORE / STOP",
                               "stage":  "LEARN",
                               "trigger":  "Monthly Outcome Review",
                               "inputs":  [
                                              "Outcome",
                                              "metrics",
                                              "adoption",
                                              "feedback",
                                              "learning"
                                          ],
                               "decisionOwner":  "Head de Producto — source wording; organizational authority pending CL-05",
                               "participants":  [
                                                    "Producto",
                                                    "UX/UI",
                                                    "Desarrollo",
                                                    "Customer Success",
                                                    "roles contextuales"
                                                ],
                               "decisionCriteria":  [
                                                        "Expected vs Actual",
                                                        "Evidence",
                                                        "Adoption",
                                                        "Friction",
                                                        "Reliability",
                                                        "Business signals",
                                                        "Learning"
                                                    ],
                               "output":  "Decisión por Bet y cambios al sistema",
                               "escalation":  "Strategic escalation when applicable; authority pending CL-05",
                               "source":  {
                                              "title":  "19. Rituales de Gobierno",
                                              "locator":  "P10504–P10582"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "gov-portfolio-capacity",
                               "decision":  "Mantener/cambiar Outcomes, reducir strategic WIP, reasignar capacidad o detener Bets",
                               "stage":  "DECIDE",
                               "trigger":  "Quarterly Direction \u0026 Portfolio Review",
                               "inputs":  [
                                              "Strategic Outcomes",
                                              "Outcome evidence",
                                              "Run/Grow/Transform",
                                              "technical sustainability",
                                              "capacity"
                                          ],
                               "participants":  [
                                                    "Liderazgo",
                                                    "Head de Producto",
                                                    "liderazgo técnico",
                                                    "roles contextuales"
                                                ],
                               "decisionCriteria":  [
                                                        "strategic alignment",
                                                        "evidence",
                                                        "capacity trade-offs",
                                                        "risk"
                                                    ],
                               "output":  "Sistema de inversión modificado",
                               "source":  {
                                              "title":  "19. Rituales de Gobierno",
                                              "locator":  "P10586–P10638"
                                          },
                               "validationStatus":  "pending"
                           }
                       ],
    "governanceMechanisms":  [
                                 {
                                     "id":  "flow-review",
                                     "name":  "Weekly Flow Review",
                                     "layer":  "DELIVERY",
                                     "purpose":  "Proteger flujo y actuar sobre WIP, bloqueos y decisiones pendientes.",
                                     "cadence":  "weekly",
                                     "contextual":  false,
                                     "inputs":  [
                                                    "Outcome Board",
                                                    "WIP",
                                                    "blocked work",
                                                    "aging",
                                                    "pending decisions",
                                                    "releases",
                                                    "risks"
                                                ],
                                     "evidenceReviewed":  [
                                                              "flow",
                                                              "blocking",
                                                              "dependencies"
                                                          ],
                                     "participants":  [
                                                          "Producto",
                                                          "Cell Lead / Captain",
                                                          "Desarrollo",
                                                          "roles contextuales"
                                                      ],
                                     "possibleDecisions":  [
                                                               "assign blockers",
                                                               "finish before start",
                                                               "explicit priority change",
                                                               "justified escalation"
                                                           ],
                                     "outputs":  [
                                                     "owners",
                                                     "assigned decisions",
                                                     "work changes"
                                                 ],
                                     "artifactsUpdated":  [
                                                              "Outcome Board",
                                                              "Decision Log"
                                                          ],
                                     "source":  {
                                                    "title":  "19. Rituales de Gobierno",
                                                    "locator":  "P10280–P10343"
                                                },
                                     "validationStatus":  "pending",
                                     "completeness":  {
                                                          "WHAT":  "SOURCE COMPLETE",
                                                          "WHY":  "SOURCE COMPLETE",
                                                          "WHO":  "SOURCE COMPLETE",
                                                          "WHEN":  "SOURCE COMPLETE",
                                                          "INPUT":  "SOURCE COMPLETE",
                                                          "EVIDENCE":  "SOURCE COMPLETE",
                                                          "OUTPUT":  "SOURCE COMPLETE",
                                                          "ARTIFACT":  "SOURCE COMPLETE",
                                                          "METRIC":  "SOURCE COMPLETE",
                                                          "REVISIT CONDITION":  "SOURCE PARTIAL",
                                                          "TOOL":  "SOURCE PARTIAL",
                                                          "DECISION RIGHT":  "SOURCE MISSING",
                                                          "ESCALATION":  "SOURCE MISSING"
                                                      }
                                 },
                                 {
                                     "id":  "opportunity-review",
                                     "name":  "Opportunity \u0026 Discovery Review",
                                     "layer":  "OUTCOME / PRODUCT",
                                     "purpose":  "Decidir qué merece exploración o priorización.",
                                     "cadence":  "biweekly",
                                     "contextual":  false,
                                     "inputs":  [
                                                    "Signals",
                                                    "Opportunities",
                                                    "Evidence"
                                                ],
                                     "evidenceReviewed":  [
                                                              "customer evidence",
                                                              "hypotheses"
                                                          ],
                                     "participants":  [
                                                          "Producto",
                                                          "UX/UI",
                                                          "roles contextuales"
                                                      ],
                                     "possibleDecisions":  [
                                                               "continue discovery",
                                                               "reframe",
                                                               "prioritize",
                                                               "stop"
                                                           ],
                                     "outputs":  [
                                                     "Opportunity updates",
                                                     "decisions"
                                                 ],
                                     "artifactsUpdated":  [
                                                              "Outcome Board",
                                                              "Decision Log"
                                                          ],
                                     "source":  {
                                                    "title":  "19. Rituales de Gobierno",
                                                    "locator":  "P10345–P10416"
                                                },
                                     "validationStatus":  "pending",
                                     "completeness":  {
                                                          "WHAT":  "SOURCE COMPLETE",
                                                          "WHY":  "SOURCE COMPLETE",
                                                          "WHO":  "SOURCE COMPLETE",
                                                          "WHEN":  "SOURCE COMPLETE",
                                                          "INPUT":  "SOURCE COMPLETE",
                                                          "EVIDENCE":  "SOURCE COMPLETE",
                                                          "OUTPUT":  "SOURCE COMPLETE",
                                                          "ARTIFACT":  "SOURCE COMPLETE",
                                                          "METRIC":  "SOURCE COMPLETE",
                                                          "REVISIT CONDITION":  "SOURCE PARTIAL",
                                                          "TOOL":  "SOURCE PARTIAL",
                                                          "DECISION RIGHT":  "SOURCE MISSING",
                                                          "ESCALATION":  "SOURCE MISSING"
                                                      }
                                 },
                                 {
                                     "id":  "customer-review",
                                     "name":  "Customer / Prototype Review",
                                     "layer":  "ADOPTION / LEARNING",
                                     "purpose":  "Obtener evidencia contextual cuando la iniciativa lo requiere.",
                                     "cadence":  "event-driven",
                                     "contextual":  true,
                                     "inputs":  [
                                                    "prototype",
                                                    "hypothesis"
                                                ],
                                     "evidenceReviewed":  [
                                                              "customer behavior",
                                                              "feedback"
                                                          ],
                                     "participants":  [
                                                          "Customers",
                                                          "UX/UI",
                                                          "Producto"
                                                      ],
                                     "possibleDecisions":  [
                                                               "adjust",
                                                               "continue evidence gathering"
                                                           ],
                                     "outputs":  [
                                                     "Evidence Map updates"
                                                 ],
                                     "artifactsUpdated":  [
                                                              "Outcome Board",
                                                              "Decision Log"
                                                          ],
                                     "source":  {
                                                    "title":  "19. Rituales de Gobierno",
                                                    "locator":  "P10417–P10462"
                                                },
                                     "validationStatus":  "pending",
                                     "completeness":  {
                                                          "WHAT":  "SOURCE COMPLETE",
                                                          "WHY":  "SOURCE COMPLETE",
                                                          "WHO":  "SOURCE COMPLETE",
                                                          "WHEN":  "SOURCE COMPLETE",
                                                          "INPUT":  "SOURCE COMPLETE",
                                                          "EVIDENCE":  "SOURCE COMPLETE",
                                                          "OUTPUT":  "SOURCE COMPLETE",
                                                          "ARTIFACT":  "SOURCE COMPLETE",
                                                          "METRIC":  "SOURCE COMPLETE",
                                                          "REVISIT CONDITION":  "SOURCE PARTIAL",
                                                          "TOOL":  "SOURCE PARTIAL",
                                                          "DECISION RIGHT":  "SOURCE MISSING",
                                                          "ESCALATION":  "SOURCE MISSING"
                                                      }
                                 },
                                 {
                                     "id":  "release-review",
                                     "name":  "Release Readiness Review",
                                     "layer":  "DELIVERY",
                                     "purpose":  "Revisar readiness y riesgo sin aprobación jerárquica.",
                                     "cadence":  "event-driven",
                                     "contextual":  true,
                                     "inputs":  [
                                                    "release evidence",
                                                    "quality",
                                                    "reliability"
                                                ],
                                     "evidenceReviewed":  [
                                                              "release readiness"
                                                          ],
                                     "participants":  [
                                                          "Producto",
                                                          "Desarrollo",
                                                          "SRE",
                                                          "roles contextuales"
                                                      ],
                                     "possibleDecisions":  [
                                                               "release",
                                                               "adjust",
                                                               "hold when evidence requires"
                                                           ],
                                     "outputs":  [
                                                     "release decision"
                                                 ],
                                     "artifactsUpdated":  [
                                                              "Outcome Board",
                                                              "Decision Log"
                                                          ],
                                     "source":  {
                                                    "title":  "19. Rituales de Gobierno",
                                                    "locator":  "P10463–P10503"
                                                },
                                     "validationStatus":  "pending",
                                     "completeness":  {
                                                          "WHAT":  "SOURCE COMPLETE",
                                                          "WHY":  "SOURCE COMPLETE",
                                                          "WHO":  "SOURCE COMPLETE",
                                                          "WHEN":  "SOURCE COMPLETE",
                                                          "INPUT":  "SOURCE COMPLETE",
                                                          "EVIDENCE":  "SOURCE COMPLETE",
                                                          "OUTPUT":  "SOURCE COMPLETE",
                                                          "ARTIFACT":  "SOURCE COMPLETE",
                                                          "METRIC":  "SOURCE COMPLETE",
                                                          "REVISIT CONDITION":  "SOURCE PARTIAL",
                                                          "TOOL":  "SOURCE PARTIAL",
                                                          "DECISION RIGHT":  "SOURCE MISSING",
                                                          "ESCALATION":  "SOURCE MISSING"
                                                      }
                                 },
                                 {
                                     "id":  "outcome-review",
                                     "name":  "Monthly Outcome Review",
                                     "layer":  "OUTCOME / PRODUCT",
                                     "purpose":  "Decidir si Outcomes y Bets producen resultado y qué cambia.",
                                     "cadence":  "monthly",
                                     "contextual":  false,
                                     "inputs":  [
                                                    "Outcome",
                                                    "baseline",
                                                    "Outcome Metric",
                                                    "TTV",
                                                    "Activation",
                                                    "Adoption",
                                                    "Adherence",
                                                    "friction",
                                                    "reliability",
                                                    "feedback",
                                                    "learning"
                                                ],
                                     "evidenceReviewed":  [
                                                              "Expected",
                                                              "Actual",
                                                              "Evidence",
                                                              "Business signals"
                                                          ],
                                     "participants":  [
                                                          "Producto",
                                                          "UX/UI",
                                                          "Desarrollo",
                                                          "Customer Success",
                                                          "roles contextuales"
                                                      ],
                                     "possibleDecisions":  [
                                                               "SCALE",
                                                               "CONTINUE",
                                                               "ADJUST",
                                                               "EXPLORE",
                                                               "STOP"
                                                           ],
                                     "outputs":  [
                                                     "decision per Bet",
                                                     "new Opportunities",
                                                     "priority/adoption/product changes",
                                                     "stopped items"
                                                 ],
                                     "artifactsUpdated":  [
                                                              "Outcome Board",
                                                              "Decision Log"
                                                          ],
                                     "source":  {
                                                    "title":  "19. Rituales de Gobierno",
                                                    "locator":  "P10504–P10584"
                                                },
                                     "validationStatus":  "pending",
                                     "completeness":  {
                                                          "WHAT":  "SOURCE COMPLETE",
                                                          "WHY":  "SOURCE COMPLETE",
                                                          "WHO":  "SOURCE COMPLETE",
                                                          "WHEN":  "SOURCE COMPLETE",
                                                          "INPUT":  "SOURCE COMPLETE",
                                                          "EVIDENCE":  "SOURCE COMPLETE",
                                                          "OUTPUT":  "SOURCE COMPLETE",
                                                          "ARTIFACT":  "SOURCE COMPLETE",
                                                          "METRIC":  "SOURCE COMPLETE",
                                                          "REVISIT CONDITION":  "SOURCE PARTIAL",
                                                          "TOOL":  "SOURCE PARTIAL",
                                                          "DECISION RIGHT":  "SOURCE PARTIAL",
                                                          "ESCALATION":  "SOURCE PARTIAL"
                                                      },
                                     "decisionOwner":  "Head de Producto",
                                     "escalation":  "strategic escalation when applicable"
                                 },
                                 {
                                     "id":  "portfolio-review",
                                     "name":  "Quarterly Direction \u0026 Portfolio Review",
                                     "layer":  "STRATEGIC",
                                     "purpose":  "Revisar alineación de capacidad, estrategia y evidencia.",
                                     "cadence":  "quarterly",
                                     "contextual":  false,
                                     "inputs":  [
                                                    "Strategic Outcomes",
                                                    "Outcome Performance",
                                                    "investment",
                                                    "Run/Grow/Transform",
                                                    "market/customer signals",
                                                    "technical sustainability",
                                                    "capacity"
                                                ],
                                     "evidenceReviewed":  [
                                                              "Outcome and portfolio evidence"
                                                          ],
                                     "participants":  [
                                                          "Liderazgo",
                                                          "Head de Producto",
                                                          "liderazgo técnico",
                                                          "roles contextuales"
                                                      ],
                                     "possibleDecisions":  [
                                                               "maintain/change Outcomes",
                                                               "reduce strategic WIP",
                                                               "reallocate capacity",
                                                               "stop Bets",
                                                               "adjust Run/Grow/Transform"
                                                           ],
                                     "outputs":  [
                                                     "changed investment system"
                                                 ],
                                     "artifactsUpdated":  [
                                                              "Outcome Board",
                                                              "Decision Log"
                                                          ],
                                     "source":  {
                                                    "title":  "19. Rituales de Gobierno",
                                                    "locator":  "P10586–P10638"
                                                },
                                     "validationStatus":  "pending",
                                     "completeness":  {
                                                          "WHAT":  "SOURCE COMPLETE",
                                                          "WHY":  "SOURCE COMPLETE",
                                                          "WHO":  "SOURCE COMPLETE",
                                                          "WHEN":  "SOURCE COMPLETE",
                                                          "INPUT":  "SOURCE COMPLETE",
                                                          "EVIDENCE":  "SOURCE COMPLETE",
                                                          "OUTPUT":  "SOURCE COMPLETE",
                                                          "ARTIFACT":  "SOURCE COMPLETE",
                                                          "METRIC":  "SOURCE COMPLETE",
                                                          "REVISIT CONDITION":  "SOURCE PARTIAL",
                                                          "TOOL":  "SOURCE PARTIAL",
                                                          "DECISION RIGHT":  "SOURCE PARTIAL",
                                                          "ESCALATION":  "SOURCE MISSING"
                                                      },
                                     "decisionOwner":  "SOURCE ROLE — authority pending CL-05"
                                 },
                                 {
                                     "id":  "incident-learning",
                                     "name":  "Incident / Problem Learning Review",
                                     "layer":  "OPERATIONAL",
                                     "purpose":  "Transformar incidentes o patrones relevantes en aprendizaje sistémico.",
                                     "cadence":  "event-driven",
                                     "contextual":  true,
                                     "inputs":  [
                                                    "incident",
                                                    "recurring problem"
                                                ],
                                     "evidenceReviewed":  [
                                                              "root cause",
                                                              "recovery",
                                                              "technical evidence"
                                                          ],
                                     "participants":  [
                                                          "SRE",
                                                          "Desarrollo",
                                                          "Soporte",
                                                          "Producto/CS contextuales"
                                                      ],
                                     "possibleDecisions":  [
                                                               "corrective action",
                                                               "Opportunity when applicable"
                                                           ],
                                     "outputs":  [
                                                     "learning",
                                                     "corrective action",
                                                     "Opportunity"
                                                 ],
                                     "artifactsUpdated":  [
                                                              "Outcome Board",
                                                              "Decision Log"
                                                          ],
                                     "source":  {
                                                    "title":  "19. Rituales de Gobierno",
                                                    "locator":  "P10640–P10670"
                                                },
                                     "validationStatus":  "pending",
                                     "completeness":  {
                                                          "WHAT":  "SOURCE COMPLETE",
                                                          "WHY":  "SOURCE COMPLETE",
                                                          "WHO":  "SOURCE COMPLETE",
                                                          "WHEN":  "SOURCE COMPLETE",
                                                          "INPUT":  "SOURCE COMPLETE",
                                                          "EVIDENCE":  "SOURCE COMPLETE",
                                                          "OUTPUT":  "SOURCE COMPLETE",
                                                          "ARTIFACT":  "SOURCE COMPLETE",
                                                          "METRIC":  "SOURCE COMPLETE",
                                                          "REVISIT CONDITION":  "SOURCE PARTIAL",
                                                          "TOOL":  "SOURCE PARTIAL",
                                                          "DECISION RIGHT":  "SOURCE MISSING",
                                                          "ESCALATION":  "SOURCE MISSING"
                                                      }
                                 }
                             ],
    "governanceConnections":  [
                                  {
                                      "from":  "EVIDENCE",
                                      "to":  "REVIEW",
                                      "status":  "SUPPORTED",
                                      "rationale":  "Los rituales consumen evidencia ya existente.",
                                      "source":  {
                                                     "title":  "19. Rituales de Gobierno",
                                                     "locator":  "P10676–P10698"
                                                 }
                                  },
                                  {
                                      "from":  "REVIEW",
                                      "to":  "DECISION",
                                      "status":  "SUPPORTED",
                                      "rationale":  "Outcome y portfolio reviews exigen decisiones explícitas.",
                                      "source":  {
                                                     "title":  "19. Rituales de Gobierno",
                                                     "locator":  "P10544–P10582; P10628–P10638"
                                                 }
                                  },
                                  {
                                      "from":  "DECISION",
                                      "to":  "ACTION",
                                      "status":  "SUPPORTED",
                                      "rationale":  "Outputs modifican prioridad, Bet, capacidad o trabajo.",
                                      "source":  {
                                                     "title":  "19. Rituales de Gobierno",
                                                     "locator":  "P10329–P10335; P10574–P10582"
                                                 }
                                  },
                                  {
                                      "from":  "ACTION",
                                      "to":  "NEW EVIDENCE",
                                      "status":  "PARTIAL",
                                      "rationale":  "El ciclo retorna a nueva dirección y señales, sin condición universal de revisita.",
                                      "source":  {
                                                     "title":  "19. Rituales de Gobierno",
                                                     "locator":  "P10676–P10698"
                                                 }
                                  }
                              ],
    "escalationRules":  [
                            {
                                "trigger":  "Afecta varios Outcomes prioritarios",
                                "destination":  "Producto / Tech o Liderazgo según impacto",
                                "authority":  "SOURCE PARTIAL — CL-05",
                                "expectedDecision":  "Resolver trade-off",
                                "timeExpectation":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "19. Rituales de Gobierno",
                                               "locator":  "P10716–P10735"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "trigger":  "Cambio estratégico, capacidad significativa, riesgo material u obligación contractual",
                                "destination":  "Liderazgo",
                                "authority":  "SOURCE PARTIAL — CL-05",
                                "expectedDecision":  "Inversión, riesgo o dirección",
                                "timeExpectation":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "19. Rituales de Gobierno",
                                               "locator":  "P10716–P10735"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "trigger":  "Conflicto supera authority del owner o Decision Rights",
                                "destination":  "Siguiente nivel aplicable",
                                "authority":  "SOURCE PARTIAL — CL-05",
                                "expectedDecision":  "Resolver excepción",
                                "timeExpectation":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "19. Rituales de Gobierno",
                                               "locator":  "P10716–P10735"
                                           },
                                "validationStatus":  "pending"
                            }
                        ],
    "governanceArtifactUses":  [
                                   {
                                       "artifactId":  "outcome-card",
                                       "artifactName":  "Outcome Card",
                                       "usedBy":  [
                                                      "Outcome Review"
                                                  ],
                                       "reviewedWhen":  "monthly",
                                       "updatedWhen":  "decision changes Outcome",
                                       "decisionSupported":  "continue, adjust, scale or stop",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10738–P10740"
                                                  }
                                   },
                                   {
                                       "artifactId":  "bet-card",
                                       "artifactName":  "Bet Card",
                                       "usedBy":  [
                                                      "Outcome Review",
                                                      "Flow Review"
                                                  ],
                                       "reviewedWhen":  "monthly / weekly as applicable",
                                       "updatedWhen":  "Bet changes",
                                       "decisionSupported":  "Bet decision",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10544–P10582; P10738–P10740"
                                                  }
                                   },
                                   {
                                       "artifactId":  "outcome-board",
                                       "artifactName":  "Outcome Board",
                                       "usedBy":  [
                                                      "Flow Review",
                                                      "Outcome Review",
                                                      "Portfolio Review"
                                                  ],
                                       "reviewedWhen":  "cadence-specific",
                                       "updatedWhen":  "state/evidence changes",
                                       "decisionSupported":  "flow, Outcome and capacity decisions",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10317–P10335; P10738–P10740"
                                                  }
                                   },
                                   {
                                       "artifactId":  "evidence-map",
                                       "artifactName":  "Evidence Map",
                                       "usedBy":  [
                                                      "Opportunity Review",
                                                      "Customer Review",
                                                      "Outcome Review"
                                                  ],
                                       "reviewedWhen":  "evidence review",
                                       "updatedWhen":  "new evidence arrives",
                                       "decisionSupported":  "investigate, continue, adjust or stop",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10345–P10462; P10738–P10740"
                                                  }
                                   },
                                   {
                                       "artifactId":  "learning-card",
                                       "artifactName":  "Learning Card",
                                       "usedBy":  [
                                                      "Outcome Review",
                                                      "Incident Review"
                                                  ],
                                       "reviewedWhen":  "learning review",
                                       "updatedWhen":  "learning changes",
                                       "decisionSupported":  "learning-based action",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10504–P10670"
                                                  }
                                   },
                                   {
                                       "artifactId":  "decision-log",
                                       "artifactName":  "Decision Log",
                                       "usedBy":  [
                                                      "all decision reviews"
                                                  ],
                                       "reviewedWhen":  "when decision context is needed",
                                       "updatedWhen":  "a material decision occurs",
                                       "decisionSupported":  "traceability and revisit",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10765–P10790"
                                                  }
                                   }
                               ],
    "governanceTooling":  [
                              {
                                  "tool":  "Jira",
                                  "classification":  "SOURCE RECOMMENDATION",
                                  "relationship":  "Estados, relaciones y evidencia para rituales; no configuración aprobada.",
                                  "source":  {
                                                 "title":  "19. Rituales de Gobierno",
                                                 "locator":  "P10742–P10764"
                                             },
                                  "validationStatus":  "pending"
                              },
                              {
                                  "tool":  "Confluence",
                                  "classification":  "SOURCE RECOMMENDATION",
                                  "relationship":  "Decisiones y contexto, sin documentos duplicados para reuniones.",
                                  "source":  {
                                                 "title":  "19. Rituales de Gobierno",
                                                 "locator":  "P10765–P10790"
                                             },
                                  "validationStatus":  "pending"
                              },
                              {
                                  "tool":  "Dashboards / analytics",
                                  "classification":  "SOURCE RECOMMENDATION",
                                  "relationship":  "Evidencia preparada para decisiones; dashboard no equivale a governance.",
                                  "source":  {
                                                 "title":  "19. Rituales de Gobierno",
                                                 "locator":  "P10833–P10861; P10924–P10933"
                                             },
                                  "validationStatus":  "pending"
                              },
                              {
                                  "tool":  "AI / Rovo",
                                  "classification":  "H1 / TO VALIDATE",
                                  "relationship":  "Gobierno de IA sujeto a reglas y validación; no arquitectura implementada.",
                                  "source":  {
                                                 "title":  "19. Rituales de Gobierno",
                                                 "locator":  "P10982–P10998"
                                             },
                                  "validationStatus":  "pending"
                              }
                          ],
    "antiPatternAssessments":  [
                                   {
                                       "antiPattern":  "Meeting = governance",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Sin output, Flow Review es informativo.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10329–P10336"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Status reporting theatre",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "No se reconstruye estado ni se revisa ticket por ticket.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10315–P10343"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Committee proliferation",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "La fuente rechaza una capa adicional de comités.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10672–P10674"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Approval bureaucracy",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Release Review no es aprobación jerárquica.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10496–P10503"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Dashboard = governance",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Las métricas deben activar investigación y decisión.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10924–P10933"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Decision without owner",
                                       "status":  "OPERATING MODEL RISK",
                                       "rationale":  "Sólo algunos rituales nombran owner; CL-05 permanece abierto.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10504–P10522; P10895–P10897"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Governance without revisit condition",
                                       "status":  "OPERATING MODEL RISK",
                                       "rationale":  "No existe condición universal de revisita por decisión.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10676–P10698"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "WIP without explicit constraint",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Se ordena reducir WIP, pero no existe límite numérico aprobado.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10301–P10314; P10628–P10637"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Capacity allocation without evidence",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Portfolio Review exige Outcomes y evidencia; porcentajes permanecen ausentes.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10586–P10638"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Escalation as default behavior",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Nivel 3 es excepción, no ruta predeterminada.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10716–P10735"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Governance detached from customer learning",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Customer signals y learning alimentan Outcome y Portfolio reviews.",
                                       "source":  {
                                                      "title":  "19. Rituales de Gobierno",
                                                      "locator":  "P10676–P10698"
                                                  }
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
                                            "text":  "Los Rituales de Gobierno del SEIF Product Operating System definen los espacios mínimos necesarios para tomar decisiones, proteger el foco, revisar evidencia y cerrar ciclos de aprendizaje.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10245"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment muestra que SEIF no necesita más reuniones por sí mismas.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10246"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La necesidad observada es otra:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10247"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "existen múltiples fuentes de demanda;",
                                                          "las decisiones se distribuyen entre varias funciones;",
                                                          "las células trabajan sobre Outcomes;",
                                                          "Discovery y validación existen, pero con profundidad variable;",
                                                          "el feedback está distribuido;",
                                                          "los datos existen, pero no siempre desembocan en una decisión;",
                                                          "la organización ha experimentado diferentes formas de trabajo y existe riesgo de sobrecargar el sistema con nuevas ceremonias."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10248–P10254"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el gobierno debe operar bajo una restricción clara:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10255"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "cada ritual debe existir porque habilita una decisión que no puede resolverse mejor de otra forma.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10256"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10244"
                                         }
                                     ]
                     },
                     {
                         "id":  "principio-rector",
                         "title":  "Principio rector",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo de gobierno se basa en cinco reglas:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10259"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Menos rituales, más decisiones",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10260"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un espacio que no produce una decisión, aprendizaje o desbloqueo debe revisarse.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10261"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Información asíncrona, decisión síncrona",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10262"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los datos, dashboards, contexto y documentos pueden prepararse antes.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10263"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El tiempo conjunto debe utilizarse para decidir.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10264"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. La cadencia depende del tipo de decisión",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10265"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las decisiones requieren la misma frecuencia.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10266"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Participación por necesidad",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10267"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las áreas participan en todos los espacios.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10268"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Ningún ritual reemplaza ownership",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10269"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una reunión no debe existir porque “nadie sabe quién decide”.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10270"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10258"
                                         }
                                     ]
                     },
                     {
                         "id":  "arquitectura-de-gobierno",
                         "title":  "Arquitectura de gobierno",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo se estructura en cuatro niveles de cadencia.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10273"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-068",
                                                          "caption":  "Arquitectura de gobierno",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Cadencia",
                                                                          "Foco"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Operacional",
                                                                           "Semanal",
                                                                           "Flujo, bloqueos y WIP"
                                                                       ],
                                                                       [
                                                                           "Producto",
                                                                           "Quincenal",
                                                                           "Opportunities, Discovery y decisiones"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "Mensual",
                                                                           "Valor, adopción y aprendizaje"
                                                                       ],
                                                                       [
                                                                           "Estratégico",
                                                                           "Trimestral",
                                                                           "Dirección, portafolio y trade-offs"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "19. Rituales de Gobierno",
                                                                         "locator":  "T68"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adicionalmente existen reviews contextuales:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10274"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Customer Review;",
                                                          "Release Review;",
                                                          "Incident Review;"
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10275–P10277"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "solo cuando el riesgo o la naturaleza de la iniciativa lo requieren.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10278"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10272"
                                         }
                                     ]
                     },
                     {
                         "id":  "ritual-1-weekly-flow-review",
                         "title":  "Ritual 1 — Weekly Flow Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10281"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Proteger el flujo de trabajo y evitar acumulación de WIP, bloqueos y decisiones pendientes.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10282"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cadencia",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10283"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Semanal.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10284"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Duración objetivo",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10285"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "30–45 minutos.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10286"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participantes base",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10287"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Producto;",
                                                          "líder/capitán de célula;",
                                                          "Desarrollo."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10288–P10290"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participación contextual:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10291"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "UX;",
                                                          "SRE;",
                                                          "CS;"
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10292–P10294"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "cuando exista un bloqueo que requiera su intervención.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10295"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta central",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10296"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué está impidiendo que los Outcomes activos avancen hacia evidencia o valor?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10297"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10280"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "que-se-revisa-en-flow-review",
                         "title":  "Qué se revisa en Flow Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El espacio se concentra en:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10300"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcomes activos",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10301"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Seguimos trabajando sobre las prioridades acordadas?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10302"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "WIP",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10303"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto trabajo se encuentra realmente en curso?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10304"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aging",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10305"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué lleva demasiado tiempo activo?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10306"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Blocked Work",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10307"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué no puede avanzar?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10308"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Blockers",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10309"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decisión está pendiente y quién debe tomarla?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10310"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dependencies",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10311"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué dependencia está generando espera?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10312"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Upcoming Releases",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10313"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué necesita atención?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10314"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ritual no debe convertirse en revisión ticket por ticket.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10315"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10299"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "inputs-del-flow-review",
                         "title":  "Inputs del Flow Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La información debe estar preparada antes del espacio:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10318"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "board actualizado;",
                                                          "WIP;",
                                                          "elementos bloqueados;",
                                                          "Aging Work;",
                                                          "decisiones pendientes;",
                                                          "releases próximos;",
                                                          "riesgos relevantes."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10319–P10325"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El meeting no se utiliza para reconstruir el estado del trabajo.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10326"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se utiliza para actuar sobre él.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10327"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10317"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "outputs-del-flow-review",
                         "title":  "Outputs del Flow Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada Flow Review debe terminar con:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10330"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "bloqueos con owner;",
                                                          "decisiones asignadas;",
                                                          "trabajo que debe terminarse antes de iniciar nuevo;",
                                                          "escalaciones justificadas;",
                                                          "cambios de prioridad explícitos cuando existan."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10331–P10335"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si no existe ningún output, el espacio fue principalmente informativo.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10336"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10329"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "anti-patron-del-flow-review",
                         "title":  "Anti-patrón del Flow Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe convertirse en:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10339"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué hiciste ayer?”",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10340"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ese tipo de conversación mide actividad individual.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10341"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El foco correcto es:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10342"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué está ocurriendo con el sistema de flujo?”",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10343"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10338"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ritual-2-opportunity-discovery-review",
                         "title":  "Ritual 2 — Opportunity \u0026 Discovery Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10346"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tomar decisiones sobre nuevas Opportunities y sobre las que se encuentran en Discovery o Validation.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10347"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cadencia",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10348"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quincenal.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10349"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Duración",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10350"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "45–60 minutos, dependiendo del volumen real de Opportunities.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10351"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10352"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Head de Producto.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10353"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participantes base",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10354"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Producto;",
                                                          "UX."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10355–P10356"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participación contextual:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10357"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Desarrollo;",
                                                          "SRE;",
                                                          "CS;",
                                                          "Soporte;",
                                                          "Marketing;",
                                                          "liderazgo;"
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10358–P10363"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "solo cuando la Opportunity requiere esa perspectiva.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10364"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10345"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "preguntas-del-opportunity-discovery-review",
                         "title":  "Preguntas del Opportunity \u0026 Discovery Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada Opportunity relevante:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10367"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿Qué problema existe?",
                                                          "¿Quién lo experimenta?",
                                                          "¿Qué evidencia tenemos?",
                                                          "¿Qué Outcome podría modificarse?",
                                                          "¿Qué incertidumbre permanece?",
                                                          "¿Qué riesgo es crítico?",
                                                          "¿Qué validación realizamos?",
                                                          "¿Qué aprendimos?",
                                                          "¿Qué decisión corresponde?"
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10368–P10376"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones posibles son:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10377"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explore",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10378"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prioritize",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10379"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Wait",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10380"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discard",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10381"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10366"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "que-no-se-revisa",
                         "title":  "Qué NO se revisa",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ritual no debe utilizarse para:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10384"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "estimar cada historia;",
                                                          "revisar tareas de Desarrollo;",
                                                          "revisar diseños completos por defecto;",
                                                          "presentar status;",
                                                          "obtener aprobación ejecutiva de cada iniciativa."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10385–P10389"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su función es reducir incertidumbre y decidir inversión.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10390"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10383"
                                         }
                                     ]
                     },
                     {
                         "id":  "inputs-del-opportunity-review",
                         "title":  "Inputs del Opportunity Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Opportunity Card;",
                                                          "Evidence Map;",
                                                          "Outcome propuesto;",
                                                          "resultados de Discovery;",
                                                          "prototipo cuando corresponda;",
                                                          "evaluación de riesgos;",
                                                          "factibilidad de alto nivel;",
                                                          "señales de mercado/cliente relevantes."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10393–P10400"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La profundidad depende del nivel de riesgo de la Opportunity.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10401"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10392"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "outputs-del-opportunity-review",
                         "title":  "Outputs del Opportunity Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada Opportunity debe salir con uno de estos estados:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10404"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Explore;",
                                                          "Prioritize;",
                                                          "Wait;",
                                                          "Discard."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10405–P10408"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando se prioriza:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10409"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome Owner;",
                                                          "Bet;",
                                                          "siguiente paso;",
                                                          "capacidad requerida;",
                                                          "Review Trigger."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10410–P10414"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No deben existir Opportunities activas indefinidamente sin decisión.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10415"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10403"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ritual-3-customer-prototype-review",
                         "title":  "Ritual 3 — Customer / Prototype Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10418"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Obtener evidencia directa sobre una hipótesis antes de realizar o ampliar una inversión.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10419"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cadencia",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10420"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por necesidad.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10421"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es una reunión recurrente obligatoria.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10422"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participantes",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10423"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Según el caso:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10424"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Producto;",
                                                          "UX;",
                                                          "cliente/usuario;",
                                                          "CS;",
                                                          "Desarrollo si se necesita validar factibilidad."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10425–P10429"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta central",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10430"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede el usuario alcanzar el resultado esperado mediante esta propuesta y qué evidencia obtenemos de ello?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10431"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10417"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "diseno-del-customer-review",
                         "title":  "Diseño del Customer Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La sesión debe estructurarse alrededor de:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10434"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Context",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10435"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué intentamos entender?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10436"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10437"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué debería lograr el usuario?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10438"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scenario",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10439"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿En qué situación?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10440"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototype / Increment",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10441"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué observamos?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10442"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Moment of Truth",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10443"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde debería percibir éxito?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10444"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10445"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió realmente?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10446"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se busca simplemente aprobación.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10447"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10433"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "anti-patron-del-customer-review",
                         "title":  "Anti-patrón del Customer Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evitar:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10450"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Le gusta?”",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10451"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10452"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Está de acuerdo?”",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10453"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas preguntas generan opinión.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10454"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El foco debe estar en comportamiento:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10455"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿qué intenta hacer?;",
                                                          "¿qué entiende?;",
                                                          "¿dónde duda?;",
                                                          "¿qué esperaba?;",
                                                          "¿logró completar el objetivo?;",
                                                          "¿necesitó ayuda?"
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10456–P10461"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10449"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ritual-4-release-readiness-review",
                         "title":  "Ritual 4 — Release Readiness Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10464"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar si una Bet relevante puede liberarse de manera segura, operable y observable.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10465"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cadencia",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10466"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por riesgo / por release relevante.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10467"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe existir como comité obligatorio para todos los cambios.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10468"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participantes",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10469"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Desarrollo;",
                                                          "SRE;",
                                                          "Producto."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10470–P10472"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando corresponda:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10473"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Soporte;",
                                                          "CS."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10474–P10475"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10463"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "preguntas-del-release-review",
                         "title":  "Preguntas del Release Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10478"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La capacidad cumple las condiciones técnicas necesarias?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10479"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operational",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10480"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede operarse y recuperarse?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10481"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Measurement",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10482"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Podemos observar qué ocurre?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10483"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Support",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10484"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Soporte conoce lo necesario?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10485"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10486"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿CS sabe qué población debe activar y qué criterio observar?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10487"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Risk",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10488"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué riesgo residual aceptamos?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10489"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La salida es:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10490"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10491"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10492"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Not Ready",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10493"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "con causa explícita.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10494"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10477"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "release-review-no-es-aprobacion-jerarquica",
                         "title":  "Release Review no es aprobación jerárquica",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe requerir presencia de liderazgo salvo que exista riesgo material de negocio.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10497"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La decisión se mantiene en el nivel donde existe conocimiento suficiente:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10498"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Desarrollo;",
                                                          "SRE;",
                                                          "Producto."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10499–P10501"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto protege velocidad y ownership.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10502"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10496"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ritual-5-monthly-outcome-review",
                         "title":  "Ritual 5 — Monthly Outcome Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10505"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar si los Outcomes activos están produciendo el resultado esperado y qué decisión corresponde.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10506"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este es uno de los rituales más importantes del Product Operating System.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10507"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cadencia",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10508"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mensual.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10509"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10510"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Head de Producto.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10511"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participantes base",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10512"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Producto;",
                                                          "UX;",
                                                          "Desarrollo;",
                                                          "CS."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10513–P10516"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participación contextual:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10517"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "SRE;",
                                                          "Soporte;",
                                                          "Marketing;",
                                                          "liderazgo."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10518–P10521"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10504"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "preguntas-del-outcome-review",
                         "title":  "Preguntas del Outcome Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada Outcome activo:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10524"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10525"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué queríamos que ocurriera?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10526"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actual",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10527"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10528"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10529"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia tenemos?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10530"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10531"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Los usuarios están alcanzando activación y adherencia?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10532"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10533"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué los está frenando?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10534"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reliability",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10535"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Existen problemas técnicos relevantes?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10536"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Business",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10537"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Existe alguna señal de impacto de negocio?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10538"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10539"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué aprendimos?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10540"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10541"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué hacemos ahora?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10542"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10523"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "decisiones-del-outcome-review",
                         "title":  "Decisiones del Outcome Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada Outcome o Bet debe terminar en una decisión:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10545"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SCALE",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10546"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia respalda ampliar.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10547"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CONTINUE",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10548"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La dirección sigue siendo válida y requiere más evidencia.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10549"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADJUST",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10550"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe modificarse la Bet.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10551"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EXPLORE",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10552"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Apareció nueva incertidumbre.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10553"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "STOP",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10554"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia no justifica continuar.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10555"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es evitar mantener iniciativas por inercia.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10556"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10544"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "inputs-del-outcome-review",
                         "title":  "Inputs del Outcome Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El contenido mínimo es:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10559"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "baseline;",
                                                          "Outcome Metric;",
                                                          "TTV;",
                                                          "Activation;",
                                                          "Adoption;",
                                                          "Adherence;",
                                                          "principales señales de fricción;",
                                                          "reliability relevante;",
                                                          "feedback de clientes;",
                                                          "learning de la Bet."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10560–P10570"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las métricas estarán disponibles inicialmente.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10571"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo comienza con las existentes y aumenta instrumentación progresivamente.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10572"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10558"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "outputs-del-outcome-review",
                         "title":  "Outputs del Outcome Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "decisión por Bet;",
                                                          "nuevas Opportunities;",
                                                          "cambios en prioridad;",
                                                          "ajustes de adopción;",
                                                          "ajustes de Producto;",
                                                          "hipótesis que deben validarse;",
                                                          "elementos que se detienen;",
                                                          "escalaciones estratégicas cuando corresponda."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10575–P10582"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este ritual es el principal mecanismo que conecta:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10583"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "métricas → aprendizaje → decisión.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10584"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10574"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ritual-6-quarterly-direction-portfolio-review",
                         "title":  "Ritual 6 — Quarterly Direction \u0026 Portfolio Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10587"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Revisar si la asignación de capacidad de SEIF continúa alineada con las prioridades estratégicas y con la evidencia obtenida.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10588"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cadencia",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10589"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trimestral.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10590"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participantes",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10591"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "liderazgo;",
                                                          "Head de Producto;",
                                                          "liderazgo técnico;",
                                                          "responsables relevantes según agenda."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10592–P10595"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta central",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10596"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Estamos invirtiendo la capacidad limitada de SEIF en los Outcomes que mejor justifican esa inversión?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10597"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10586"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "contenido-del-quarterly-review",
                         "title":  "Contenido del Quarterly Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Strategic Outcomes",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10600"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué resultados estratégicos siguen siendo prioritarios?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10601"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Performance",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10602"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué está funcionando?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10603"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Investment",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10604"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde se está consumiendo capacidad?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10605"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Run / Grow / Transform",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10606"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo se distribuye realmente la inversión?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10607"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Market",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10608"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué cambió?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10609"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10610"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué señales importantes aparecieron?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10611"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical Sustainability",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10612"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué riesgos o deuda requieren atención?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10613"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacity",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10614"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué trade-offs deben resolverse?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10615"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Stop / Start / Continue",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10616"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué debe cambiar para el siguiente periodo?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10617"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10599"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "lo-que-no-debe-convertirse-en-quarterly-review",
                         "title":  "Lo que no debe convertirse en Quarterly Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe ser:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10620"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "demo general;",
                                                          "status detallado;",
                                                          "revisión de backlog;",
                                                          "reunión de seguimiento de proyectos;",
                                                          "espacio para revisar cada ticket."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10621–P10625"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El foco es la asignación estratégica de capacidad.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10626"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10619"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "decisiones-del-quarterly-review",
                         "title":  "Decisiones del Quarterly Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El espacio debe poder decidir:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10629"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "mantener Outcomes;",
                                                          "cambiar Outcomes;",
                                                          "reducir WIP estratégico;",
                                                          "reasignar capacidad;",
                                                          "detener Bets;",
                                                          "elevar deuda/riesgo;",
                                                          "priorizar nuevas Opportunity Areas;",
                                                          "ajustar balance Run / Grow / Transform."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10630–P10637"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La salida debe modificar el sistema.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10638"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10628"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ritual-7-incident-problem-learning-review",
                         "title":  "Ritual 7 — Incident / Problem Learning Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10641"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Transformar incidentes relevantes o problemas recurrentes en aprendizaje del sistema.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10642"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cadencia",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10643"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por evento significativo o patrón.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10644"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participantes",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10645"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "SRE;",
                                                          "Desarrollo;",
                                                          "Soporte."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10646–P10648"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Según impacto:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10649"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Producto;",
                                                          "CS."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10650–P10651"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Secuencia",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10652"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Restore",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10653"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10654"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Understand",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10655"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10656"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10657"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10658"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Corrective Action",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10659"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10660"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10661"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10662"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity cuando aplique",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10663"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10640"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "principio-de-no-culpa",
                         "title":  "Principio de no culpa",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El foco es:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10666"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué condición del sistema permitió que esto ocurriera y qué debemos cambiar?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10667"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10668"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Quién cometió el error?”",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10669"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto es coherente con la utilización correcta de DORA y con un modelo de aprendizaje organizacional.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10670"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10665"
                                         }
                                     ]
                     },
                     {
                         "id":  "cadencia-consolidada",
                         "title":  "Cadencia consolidada",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-069",
                                                          "caption":  "Cadencia consolidada",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Ritual",
                                                                          "Frecuencia",
                                                                          "Duración",
                                                                          "Owner",
                                                                          "Decisión principal"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Flow Review",
                                                                           "Semanal",
                                                                           "30–45 min",
                                                                           "Célula / líder",
                                                                           "Desbloquear flujo"
                                                                       ],
                                                                       [
                                                                           "Opportunity \u0026 Discovery Review",
                                                                           "Quincenal",
                                                                           "45–60 min",
                                                                           "Producto",
                                                                           "Explore / Prioritize / Wait / Discard"
                                                                       ],
                                                                       [
                                                                           "Customer Review",
                                                                           "Contextual",
                                                                           "30–60 min",
                                                                           "Producto/UX",
                                                                           "Validar / ajustar"
                                                                       ],
                                                                       [
                                                                           "Release Readiness",
                                                                           "Contextual",
                                                                           "Según riesgo",
                                                                           "Dev/SRE",
                                                                           "Release / Not Ready"
                                                                       ],
                                                                       [
                                                                           "Outcome Review",
                                                                           "Mensual",
                                                                           "60–90 min",
                                                                           "Producto",
                                                                           "Scale / Continue / Adjust / Stop"
                                                                       ],
                                                                       [
                                                                           "Direction \u0026 Portfolio Review",
                                                                           "Trimestral",
                                                                           "90–120 min",
                                                                           "Liderazgo",
                                                                           "Reasignación estratégica"
                                                                       ],
                                                                       [
                                                                           "Incident Learning Review",
                                                                           "Contextual",
                                                                           "Según impacto",
                                                                           "SRE",
                                                                           "Acción correctiva / Learning"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "19. Rituales de Gobierno",
                                                                         "locator":  "T69"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este conjunto constituye el gobierno base.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10673"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se requiere una capa adicional de comités.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10674"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10672"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "information-flow-entre-rituales",
                         "title":  "Information Flow entre rituales",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los rituales no operan de forma aislada.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10677"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura es:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10678"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer / Support / Analytics Signals",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10679"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10680"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10681"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué merece explorarse o priorizarse?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10682"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10683"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10684"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo está avanzando la Bet?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10685"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10686"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer / Release Reviews",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10687"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia o readiness tenemos?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10688"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10689"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10690"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Funcionó?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10691"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10692"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quarterly Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10693"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde debe invertirse capacidad?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10694"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10695"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nueva dirección",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10696"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10697"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El gobierno se convierte así en un ciclo de decisión.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10698"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10676"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "gobierno-por-excepcion",
                         "title":  "Gobierno por excepción",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF es una organización pequeña.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10701"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el modelo debe privilegiar:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10702"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Governance by Exception",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10703"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando todo está dentro de parámetros aceptables:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10704"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "el equipo continúa.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10705"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando aparece:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10706"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "riesgo;",
                                                          "desviación;",
                                                          "bloqueo;",
                                                          "evidencia contradictoria;",
                                                          "conflicto de capacidad;",
                                                          "incumplimiento de guardrail;"
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10707–P10712"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "se escala el nivel de conversación.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10713"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita revisar manualmente todo el sistema.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10714"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10700"
                                         }
                                     ]
                     },
                     {
                         "id":  "decision-escalation-ladder",
                         "title":  "Decision Escalation Ladder",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones deben resolverse en el nivel más bajo posible.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10717"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 1 — Célula",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10718"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decisiones de ejecución y trade-offs locales.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10719"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Producto / Tech",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10720"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prioridad, factibilidad y decisiones de Bet.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10721"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Liderazgo",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10722"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trade-offs estratégicos, inversión o riesgo material.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10723"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe Nivel 3 como ruta predeterminada.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10724"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es excepción.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10725"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10716"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "reglas-de-escalamiento",
                         "title":  "Reglas de escalamiento",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una decisión se escala cuando:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10728"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "afecta varios Outcomes prioritarios;",
                                                          "implica cambio estratégico;",
                                                          "requiere capacidad significativa no disponible;",
                                                          "existe riesgo material;",
                                                          "existe obligación contractual relevante;",
                                                          "supera authority del owner;",
                                                          "el conflicto no puede resolverse mediante los Decision Rights establecidos."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10729–P10735"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La simple existencia de desacuerdo no justifica escalamiento.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10736"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10727"
                                         }
                                     ]
                     },
                     {
                         "id":  "artefactos-utilizados-por-ritual",
                         "title":  "Artefactos utilizados por ritual",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada ritual debe utilizar información ya existente en el Operating System.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10739"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-070",
                                                          "caption":  "Artefactos utilizados por ritual",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Ritual",
                                                                          "Artefactos"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Flow Review",
                                                                           "Outcome Board + WIP + Blockers"
                                                                       ],
                                                                       [
                                                                           "Opportunity Review",
                                                                           "Opportunity Card + Evidence Map"
                                                                       ],
                                                                       [
                                                                           "Customer Review",
                                                                           "Journey + Prototype + Validation Questions"
                                                                       ],
                                                                       [
                                                                           "Release Review",
                                                                           "Release Readiness"
                                                                       ],
                                                                       [
                                                                           "Outcome Review",
                                                                           "Outcome Card + Metric Tree + Learning Card"
                                                                       ],
                                                                       [
                                                                           "Quarterly Review",
                                                                           "Outcome Portfolio + Investment View"
                                                                       ],
                                                                       [
                                                                           "Incident Review",
                                                                           "Incident / Problem Record + Learning"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "19. Rituales de Gobierno",
                                                                         "locator":  "T70"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No deben crearse documentos distintos únicamente para preparar reuniones.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10740"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10738"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "rituales-y-jira",
                         "title":  "Rituales y Jira",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vez implementado el tooling, Jira debe producir automáticamente buena parte del contexto operacional para los rituales.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10743"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10744"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "WIP;",
                                                          "Aging;",
                                                          "bloqueos;",
                                                          "estados."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10745–P10748"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10749"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Opportunities;",
                                                          "Evidence status;",
                                                          "decision state."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10750–P10752"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10753"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcomes;",
                                                          "Bets;",
                                                          "releases;",
                                                          "métricas relacionadas cuando estén integradas."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10754–P10757"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Portfolio Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10758"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcomes activos;",
                                                          "capacidad;",
                                                          "estado;",
                                                          "dependencies."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10759–P10762"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es reducir preparación manual.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10763"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10742"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "confluence-y-decisiones",
                         "title":  "Confluence y decisiones",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Confluence puede mantener contexto para decisiones que requieren narrativa:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10766"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Opportunity discovery;",
                                                          "Outcome definition;",
                                                          "Decision Log;",
                                                          "Learning Card;",
                                                          "incident learning;",
                                                          "Quarterly decisions."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10767–P10772"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe replicar en páginas manuales el estado que ya existe en Jira.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10773"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10765"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "decision-log",
                         "title":  "Decision Log",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones materiales del gobierno deben dejar trazabilidad mínima.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10776"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Formato:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10777"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10778"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué se decidió?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10779"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10780"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Con qué información?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10781"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Rationale",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10782"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10783"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trade-off",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10784"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué dejamos de hacer?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10785"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10786"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién responde?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10787"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review Trigger",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10788"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué podría hacernos revisar la decisión?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10789"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto elimina la dependencia de memoria organizacional.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10790"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10775"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "reglas-de-reunion-lean",
                         "title":  "Reglas de reunión Lean",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todo ritual del Product Operating System debe cumplir:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10793"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Agenda orientada a decisiones",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10794"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No a actualizaciones.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10795"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pre-read cuando sea necesario",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10796"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El contexto se revisa antes.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10797"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Timebox",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10798"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El espacio tiene límite.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10799"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Required participants only",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10800"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participación contextual.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10801"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision captured",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10802"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Toda decisión relevante queda visible.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10803"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actions with owner",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10804"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una acción sin owner no constituye salida.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10805"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Stop when done",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10806"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si se resolvió el objetivo, termina la reunión.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10807"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10792"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "meeting-load",
                         "title":  "Meeting Load",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diseño no debe incrementar significativamente el tiempo total de reuniones.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10810"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Parte de los rituales existentes puede:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10811"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "fusionarse;",
                                                          "renombrarse;",
                                                          "eliminarse;",
                                                          "reutilizarse."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10812–P10815"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Operating Model define propósitos, no exige duplicar espacios actuales.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10816"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La implementación deberá mapear:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10817"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "reuniones existentes → propósito futuro",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10818"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y eliminar redundancias.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10819"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10809"
                                         }
                                     ]
                     },
                     {
                         "id":  "ritual-rationalization",
                         "title":  "Ritual Rationalization",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante la implementación, cada reunión recurrente actual deberá clasificarse:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10822"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "KEEP",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10823"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiene un propósito necesario y produce decisiones.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10824"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MERGE",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10825"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Duplica otra conversación.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10826"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "REDESIGN",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10827"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es necesaria, pero actualmente funciona como status.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10828"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "REMOVE",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10829"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No produce suficiente valor.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10830"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto aplica directamente el principio Lean al gobierno.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10831"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10821"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias propuestas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metricas-de-gobierno",
                         "title":  "Métricas de gobierno",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo puede observar su efectividad mediante:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10834"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-071",
                                                          "caption":  "Métricas de gobierno",
                                                          "kind":  "scorecard",
                                                          "headers":  [
                                                                          "Métrica",
                                                                          "Qué diagnostica"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Decision Lead Time",
                                                                           "Velocidad para resolver decisiones"
                                                                       ],
                                                                       [
                                                                           "Blocked by Decision Time",
                                                                           "Costo de governance"
                                                                       ],
                                                                       [
                                                                           "Escalation Rate",
                                                                           "Dependencia jerárquica"
                                                                       ],
                                                                       [
                                                                           "% Reviews ending in explicit decision",
                                                                           "Calidad de ritual"
                                                                       ],
                                                                       [
                                                                           "Priority Change Rate",
                                                                           "Estabilidad"
                                                                       ],
                                                                       [
                                                                           "Meeting Hours / Cell",
                                                                           "Overhead"
                                                                       ],
                                                                       [
                                                                           "Action Closure Rate",
                                                                           "Ejecución de decisiones"
                                                                       ],
                                                                       [
                                                                           "Outcome Review Coverage",
                                                                           "Cierre del ciclo"
                                                                       ],
                                                                       [
                                                                           "Stale Opportunities",
                                                                           "Decisiones no tomadas"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "19. Rituales de Gobierno",
                                                                         "locator":  "T71"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se fijan targets sin baseline.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10835"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10833"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "senales-de-sobre-gobierno",
                         "title":  "Señales de sobre-gobierno",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo debe corregirse si aparecen:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10838"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "demasiados asistentes;",
                                                          "decisiones repetidas en varias reuniones;",
                                                          "necesidad de aprobación ejecutiva frecuente;",
                                                          "preparación manual excesiva;",
                                                          "muchos artefactos;",
                                                          "personas pasando más tiempo reportando que decidiendo;",
                                                          "Opportunities detenidas por reuniones;",
                                                          "releases esperando comités sin riesgo real;",
                                                          "múltiples reuniones con la misma información."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10839–P10847"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas señales indicarían que el Product Operating System está generando el problema que busca resolver.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10848"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10837"
                                         }
                                     ]
                     },
                     {
                         "id":  "senales-de-sub-gobierno",
                         "title":  "Señales de sub-gobierno",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "También existe el riesgo contrario.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10851"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Señales:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10852"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "prioridades cambian continuamente;",
                                                          "decisiones sin owner;",
                                                          "Outcomes activos sin review;",
                                                          "trabajo bloqueado durante largos periodos;",
                                                          "Opportunities sin decisión;",
                                                          "releases sin observabilidad;",
                                                          "feedback recurrente sin respuesta;",
                                                          "liderazgo interviniendo constantemente para resolver ambigüedad."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10853–P10860"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es equilibrio.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10861"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10850"
                                         }
                                     ]
                     },
                     {
                         "id":  "minimum-viable-governance",
                         "title":  "Minimum Viable Governance",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El gobierno mínimo de SEIF queda reducido a cuatro espacios recurrentes:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10864"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Semanal",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10865"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10866"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quincenal",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10867"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity \u0026 Discovery Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10868"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mensual",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10869"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10870"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trimestral",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10871"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Direction \u0026 Portfolio Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10872"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los demás espacios son contextuales:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10873"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10874"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release Readiness",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10875"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incident Learning",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10876"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este diseño es consistente con la necesidad de mantener un sistema ligero.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10877"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10863"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ejemplo-de-ciclo-mensual",
                         "title":  "Ejemplo de ciclo mensual",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Semana 1",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10880"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Review.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10881"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Oportunidades continúan Discovery.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10882"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Semana 2",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10883"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Review + Opportunity Review.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10884"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se prioriza una Bet.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10885"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Semana 3",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10886"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Review.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10887"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototipo/customer validation cuando aplica.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10888"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Semana 4",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10889"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Review + Outcome Review.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10890"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se revisa evidencia de Bets previamente liberadas.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10891"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se trata de una secuencia rígida.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10892"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ilustra cómo el sistema puede funcionar sin llenar el calendario de nuevas reuniones.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10893"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10879"
                                         }
                                     ]
                     },
                     {
                         "id":  "roles-en-gobierno",
                         "title":  "Roles en gobierno",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-072",
                                                          "caption":  "Roles en gobierno",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Rol",
                                                                          "Participación principal"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Head de Producto",
                                                                           "Opportunity, Outcome, Direction"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Discovery y Customer Reviews"
                                                                       ],
                                                                       [
                                                                           "Desarrollo",
                                                                           "Flow, factibilidad y Delivery"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Release, reliability e incident learning"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Signals e incident patterns"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Adoption y Outcome"
                                                                       ],
                                                                       [
                                                                           "Marketing",
                                                                           "Market Signals y Growth"
                                                                       ],
                                                                       [
                                                                           "Liderazgo",
                                                                           "Quarterly Direction y excepciones estratégicas"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "19. Rituales de Gobierno",
                                                                         "locator":  "T72"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participar “principalmente” no implica exclusividad.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10896"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10895"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles fuente",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "gobierno-y-celulas",
                         "title":  "Gobierno y células",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las células mantienen autonomía para ejecución.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10899"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El gobierno no les indica cómo resolver técnicamente una Bet.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10900"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Define:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10901"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "qué Outcome persiguen;",
                                                          "qué límites tienen;",
                                                          "qué evidencia deben generar;",
                                                          "qué decisiones les pertenecen;",
                                                          "qué condiciones requieren escalamiento."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10902–P10906"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto constituye:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10907"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrails over Control",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10908"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es dar claridad suficiente para aumentar autonomía.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10909"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10898"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles fuente",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "gobierno-de-prioridades",
                         "title":  "Gobierno de prioridades",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un cambio de prioridad fuera de la cadencia normal puede ocurrir cuando existe evidencia suficiente.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10912"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero debe hacerse explícito:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10913"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "New priority",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10914"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué entra?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10915"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Displaced work",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10916"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué sale?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10917"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Impact",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10918"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué Outcome se retrasa?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10919"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reason",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10920"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué nueva evidencia justifica el cambio?",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10921"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto protege a SEIF de la urgencia invisible.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10922"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10911"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-09",
                                                       "subject":  "Límites numéricos de WIP",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "gobierno-de-metricas",
                         "title":  "Gobierno de métricas",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Outcome Review actúa como principal ritual de gobierno de métricas.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10925"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las métricas no se presentan solamente.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10926"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada desviación relevante debe responder:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10927"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿es real?;",
                                                          "¿qué significa?;",
                                                          "¿qué evidencia adicional necesitamos?;",
                                                          "¿quién investiga?;",
                                                          "¿qué decisión podría cambiar?"
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10928–P10932"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto convierte KPI Review en management.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10933"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10924"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "gobierno-de-deuda-tecnica",
                         "title":  "Gobierno de deuda técnica",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La deuda técnica relevante debe aparecer en los espacios correspondientes cuando:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10936"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "afecta confiabilidad;",
                                                          "limita Delivery;",
                                                          "genera incidentes;",
                                                          "impide evolución;",
                                                          "incrementa dependencia;",
                                                          "representa riesgo relevante."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10937–P10942"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No necesita una ceremonia paralela permanente.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10943"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede entrar:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10944"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Review para bloqueos,",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10945"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome/Portfolio Review para inversión,",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10946"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incident Review para causas.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10947"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto integra sostenibilidad técnica con el sistema.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10948"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10935"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-12",
                                                       "subject":  "Política de capacidad y deuda",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "gobierno-de-adopcion",
                         "title":  "Gobierno de adopción",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La adopción se revisa dentro del Outcome Review.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10951"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS aporta:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10952"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Activation;",
                                                          "TTV;",
                                                          "Adoption;",
                                                          "Adherence;",
                                                          "Risk;",
                                                          "fricción."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10953–P10958"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto integra la lectura con:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10959"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "UX;",
                                                          "Soporte;",
                                                          "reliability;",
                                                          "Bets."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10960–P10964"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita crear un comité separado de adopción salvo que posteriormente el volumen lo justifique.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10965"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10950"
                                         }
                                     ]
                     },
                     {
                         "id":  "gobierno-de-growth",
                         "title":  "Gobierno de Growth",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Growth utiliza los mismos mecanismos.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10968"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una oportunidad de Growth:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10969"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10970"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10971"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10972"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10973"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Experiment / Bet",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10974"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10975"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10976"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10977"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scale / Adjust / Stop",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10978"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No necesita una metodología paralela.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10979"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto mantiene coherencia con el Operating System.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10980"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10967"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "gobierno-de-ia",
                         "title":  "Gobierno de IA",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El uso de IA en Discovery, prototipado, análisis de feedback y Delivery debe respetar ownership existente.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10983"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La IA puede:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10984"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "acelerar;",
                                                          "sintetizar;",
                                                          "generar opciones;",
                                                          "preparar información."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10985–P10988"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se convierte en Decision Owner.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10989"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones sobre:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10990"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "problema;",
                                                          "prioridad;",
                                                          "Outcome;",
                                                          "aceptación de riesgo;",
                                                          "release;",
                                                          "aprendizaje;"
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10991–P10996"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "continúan bajo accountability humana.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P10997"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10982"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
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
                                                          "id":  "source-table-073",
                                                          "caption":  "AS-IS → TO-BE",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "AS-IS observado",
                                                                          "TO-BE"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Reuniones",
                                                                           "Diferentes espacios según función",
                                                                           "Ritual architecture"
                                                                       ],
                                                                       [
                                                                           "Status",
                                                                           "Parte relevante de coordinación",
                                                                           "Asynchronous context"
                                                                       ],
                                                                       [
                                                                           "Decisiones",
                                                                           "Distribuidas",
                                                                           "Decision-focused rituals"
                                                                       ],
                                                                       [
                                                                           "Escalamiento",
                                                                           "Contextual",
                                                                           "Defined escalation"
                                                                       ],
                                                                       [
                                                                           "Flow",
                                                                           "Múltiples prioridades",
                                                                           "Weekly Flow Review"
                                                                       ],
                                                                       [
                                                                           "Discovery",
                                                                           "Variable",
                                                                           "Biweekly Opportunity Review"
                                                                       ],
                                                                       [
                                                                           "Cliente",
                                                                           "Feedback en diferentes momentos",
                                                                           "Contextual Customer Review"
                                                                       ],
                                                                       [
                                                                           "Release",
                                                                           "Técnico",
                                                                           "Risk-based Release Review"
                                                                       ],
                                                                       [
                                                                           "Outcomes",
                                                                           "Conceptuales",
                                                                           "Monthly Outcome Review"
                                                                       ],
                                                                       [
                                                                           "Estrategia",
                                                                           "Liderazgo",
                                                                           "Quarterly Direction"
                                                                       ],
                                                                       [
                                                                           "Incidentes",
                                                                           "Operacionales",
                                                                           "Incident Learning"
                                                                       ],
                                                                       [
                                                                           "Métricas",
                                                                           "Dashboards",
                                                                           "Metrics → Decisions"
                                                                       ],
                                                                       [
                                                                           "Meeting Load",
                                                                           "No consolidado",
                                                                           "Minimum Viable Governance"
                                                                       ],
                                                                       [
                                                                           "Ownership",
                                                                           "Parcialmente distribuido",
                                                                           "Owner per decision"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "19. Rituales de Gobierno",
                                                                         "locator":  "T73"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P10999"
                                         }
                                     ]
                     },
                     {
                         "id":  "maturity-model-de-gobierno",
                         "title":  "Maturity Model de gobierno",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-074",
                                                          "caption":  "Maturity Model de gobierno",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Comportamiento"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1 — Inicial",
                                                                           "Decisiones reactivas y reuniones principalmente informativas"
                                                                       ],
                                                                       [
                                                                           "2 — Repetible",
                                                                           "Existen espacios recurrentes, pero propósito y ownership pueden variar"
                                                                       ],
                                                                       [
                                                                           "3 — Definido",
                                                                           "Cadencias, Decision Rights y outputs están explícitos"
                                                                       ],
                                                                       [
                                                                           "4 — Gestionado",
                                                                           "Se mide Decision Lead Time, escalamiento y overhead"
                                                                       ],
                                                                       [
                                                                           "5 — Optimizado",
                                                                           "El gobierno se ajusta continuamente según evidencia y autonomía"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "19. Rituales de Gobierno",
                                                                         "locator":  "T74"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado SEIF",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11002"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con base en el assessment:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11003"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11004"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target inicial",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11005"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11006"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cambio requerido no es aumentar la cantidad de reuniones.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11007"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es clarificar:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11008"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "para qué existe cada espacio, qué decisión pertenece allí y quién responde.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11009"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P11001"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-18",
                                                       "subject":  "Valoración del assessment — madurez pendiente de validación",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "quick-wins-de-implementacion",
                         "title":  "Quick Wins de implementación",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo puede comenzar mediante ocho acciones:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11012"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Inventariar reuniones actuales",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11013"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin crear nuevas todavía.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11014"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Clasificar Keep / Merge / Redesign / Remove",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11015"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aplicando Lean.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11016"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Convertir una reunión semanal existente en Flow Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11017"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eliminar status persona por persona.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11018"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Consolidar un Opportunity Review quincenal",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11019"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para decisiones de Producto.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11020"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Crear Outcome Review mensual",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11021"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilizando métricas ya disponibles.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11022"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Publicar Decision Rights",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11023"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para evitar escalamiento innecesario.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11024"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. Registrar decisiones materiales",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11025"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con un Decision Log mínimo.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11026"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. Medir Meeting Load y Decision Lead Time",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11027"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante el piloto.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11028"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas acciones permiten validar el modelo sin generar una transformación ceremonial.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11029"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P11011"
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
                                            "text":  "El SEIF Governance Model queda resumido en:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11032"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OPERATE",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11033"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Weekly Flow Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11034"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11035"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DECIDE",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11036"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Biweekly Opportunity \u0026 Discovery Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11037"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11038"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LEARN",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11039"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Monthly Outcome Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11040"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11041"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DIRECT",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11042"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quarterly Direction \u0026 Portfolio Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11043"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "con mecanismos contextuales:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11044"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALIDATE — Customer Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11045"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PROTECT — Release Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11046"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RECOVER \u0026 LEARN — Incident Review",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11047"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todo soportado por:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11048"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Rights + Evidence + Metrics + Ownership + Decision Log.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11049"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P11031"
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
                                            "text":  "El assessment no evidencia que SEIF necesite una nueva capa formal de gobierno.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11052"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia que necesita convertir espacios de coordinación en un sistema pequeño y explícito de decisiones.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11053"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema a resolver no es:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11054"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“faltan reuniones.”",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11055"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11056"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“algunas decisiones, señales y responsabilidades todavía dependen demasiado del contexto y de la interacción entre personas.”",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11057"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo futuro busca que una célula sepa:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11058"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "qué puede decidir;",
                                                          "cuándo debe validar;",
                                                          "cuándo debe escalar;",
                                                          "dónde revisar el flujo;",
                                                          "cuándo revisar el Outcome;",
                                                          "qué evidencia necesita;",
                                                          "quién responde."
                                                      ],
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11059–P11065"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principio final es:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11066"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Gobernar no significa centralizar decisiones. Significa crear suficiente claridad para que las decisiones correctas puedan tomarse en el nivel correcto, con la evidencia correcta y en el momento correcto.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11067"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, la evolución propuesta para SEIF es:",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11068"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MENOS CEREMONIAS → MÁS CLARIDAD → DECISIONES MÁS RÁPIDAS → MAYOR AUTONOMÍA → MEJOR APRENDIZAJE.",
                                            "source":  {
                                                           "title":  "19. Rituales de Gobierno",
                                                           "locator":  "P11069"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "19. Rituales de Gobierno",
                                             "locator":  "P11051"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     }
                 ],
    "related":  [
                    "value-stream",
                    "design-principles",
                    "operating-model",
                    "discovery",
                    "prioritization",
                    "delivery",
                    "adoption-growth",
                    "feedback-loop",
                    "roles",
                    "north-star",
                    "artifacts"
                ],
    "source":  {
                   "title":  "19. Rituales de Gobierno",
                   "locator":  "P10243–P11069",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
