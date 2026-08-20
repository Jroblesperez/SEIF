import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "feedback-loop",
    "group":  "Operating Model",
    "title":  "LEARN: Feedback \u0026 Learning Loop",
    "sourceTitle":  "16. Feedback \u0026 Learning Loop",
    "eyebrow":  "16 · Learn",
    "summary":  "Convierte señales distribuidas en patrones, evidencia, insight, aprendizaje y decisiones que reabren Opportunity, Discovery y DECIDE.",
    "takeaway":  "Una señal no es evidencia; una evidencia no es decisión; el aprendizaje no se completa hasta cambiar una decisión.",
    "executive":  {
                      "keyFindings":  [
                                          "SEIF posee múltiples sensores; la brecha es integrarlos en un sistema de aprendizaje.",
                                          "Chapter 16 introduce INSIGHT como término fuente explícito sin alterar Chapter 12.",
                                          "Tickets y solicitudes permanecen señales, nunca features o prioridades automáticas.",
                                          "SCALE, CONTINUE, ADJUST, EXPLORE y STOP cierran el loop con authority pendiente."
                                      ],
                      "implication":  "El loop reduce deuda de feedback y aprendizaje mediante trazabilidad, síntesis y decisiones explícitas.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "loop",
                      "sources":  [
                                      {
                                          "title":  "16. Feedback \u0026 Learning Loop",
                                          "locator":  "P7299–P8442"
                                      }
                                  ]
                  },
    "clientValidations":  [
                              {
                                  "id":  "CL-05",
                                  "subject":  "Authority de decisiones de aprendizaje",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-10",
                                  "subject":  "Tooling lógico",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-11",
                                  "subject":  "Cadencias y Review Triggers",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              }
                          ],
    "operatingConcepts":  [
                              {
                                  "id":  "feedback-learning-system",
                                  "title":  "LEARN — Feedback \u0026 Learning Loop",
                                  "canonicalLayers":  [
                                                          "LEARN",
                                                          "DISCOVER",
                                                          "DECIDE",
                                                          "EVIDENCE",
                                                          "CONTINUOUS IMPROVEMENT"
                                                      ],
                                  "sourceChapters":  [
                                                         "16"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "16. Feedback \u0026 Learning Loop",
                                                             "locator":  "P7299–P8442"
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
                                                       "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                       "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                       "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                       "DECISION LOOP":  "SOURCE COMPLETE",
                                                       "TOOL":  "SOURCE PARTIAL",
                                                       "BUSINESS LINKAGE":  "SOURCE PARTIAL",
                                                       "ACTIVATION CRITERIA":  "SOURCE MISSING",
                                                       "TTV DEFINITION":  "SOURCE MISSING",
                                                       "ADHERENCE CRITERIA":  "SOURCE MISSING"
                                                   },
                                  "gapIds":  [
                                                 "CL-04",
                                                 "CL-05",
                                                 "CL-07",
                                                 "CL-10",
                                                 "CL-11",
                                                 "CL-16"
                                             ]
                              }
                          ],
    "feedbackSignals":  [
                            {
                                "signal":  "Problemas, prioridades y Outcomes",
                                "sourceRole":  "Product",
                                "trigger":  "feedback/evidence requiring integration",
                                "format":  "Opportunity / Evidence",
                                "decisionEnabled":  "Discovery or priority change",
                                "artifact":  "Evidence Map",
                                "source":  {
                                               "title":  "16. Feedback \u0026 Learning Loop",
                                               "locator":  "P7360–P7382; P7995–P8008"
                                           }
                            },
                            {
                                "signal":  "Comportamiento, journeys, fricción y Momentos de Verdad",
                                "sourceRole":  "UX/UI",
                                "format":  "research / validation",
                                "decisionEnabled":  "experience hypothesis",
                                "artifact":  "Evidence Map",
                                "source":  {
                                               "title":  "16. Feedback \u0026 Learning Loop",
                                               "locator":  "P7360–P7382; P8010–P8020"
                                           }
                            },
                            {
                                "signal":  "Adopción, barreras, dependencia y contexto de cuenta",
                                "sourceRole":  "Customer Success",
                                "format":  "structured account observation",
                                "decisionEnabled":  "Opportunity / adoption intervention",
                                "artifact":  "Signal",
                                "source":  {
                                               "title":  "16. Feedback \u0026 Learning Loop",
                                               "locator":  "P7360–P7382; P8022–P8036"
                                           }
                            },
                            {
                                "signal":  "Tickets, recurrencia, módulo, journey y causa",
                                "sourceRole":  "Support",
                                "trigger":  "recurring friction",
                                "format":  "ticket pattern",
                                "decisionEnabled":  "investigate pattern, not feature",
                                "artifact":  "Signal",
                                "source":  {
                                               "title":  "16. Feedback \u0026 Learning Loop",
                                               "locator":  "P7360–P7382; P8038–P8048"
                                           }
                            },
                            {
                                "signal":  "Percepción, mensajes, objeciones, segmentos y campañas",
                                "sourceRole":  "Marketing",
                                "format":  "market / communication feedback",
                                "decisionEnabled":  "positioning or Opportunity",
                                "artifact":  "Signal",
                                "source":  {
                                               "title":  "16. Feedback \u0026 Learning Loop",
                                               "locator":  "P7360–P7382; P8050–P8059"
                                           }
                            },
                            {
                                "signal":  "Deuda, limitaciones, recurrencia técnica y complejidad",
                                "sourceRole":  "Development",
                                "format":  "technical evidence",
                                "decisionEnabled":  "technical Opportunity",
                                "artifact":  "Signal",
                                "source":  {
                                               "title":  "16. Feedback \u0026 Learning Loop",
                                               "locator":  "P7360–P7382; P8061–P8077"
                                           }
                            },
                            {
                                "signal":  "Incidentes, confiabilidad, operación y deuda",
                                "sourceRole":  "SRE",
                                "trigger":  "operational behavior",
                                "format":  "operational evidence",
                                "decisionEnabled":  "reliability Opportunity",
                                "artifact":  "Signal",
                                "source":  {
                                               "title":  "16. Feedback \u0026 Learning Loop",
                                               "locator":  "P7360–P7382; P8061–P8077"
                                           }
                            },
                            {
                                "signal":  "Comportamiento cuantitativo",
                                "sourceRole":  "Analytics / Dashboards",
                                "format":  "behavioral data",
                                "decisionEnabled":  "investigation trigger",
                                "artifact":  "Signal",
                                "source":  {
                                               "title":  "16. Feedback \u0026 Learning Loop",
                                               "locator":  "P7360–P7382"
                                           }
                            },
                            {
                                "signal":  "Necesidad expresada, comportamiento y resultado",
                                "sourceRole":  "Customers / Users",
                                "format":  "interview / request / review / behavior",
                                "decisionEnabled":  "investigate underlying need",
                                "artifact":  "Signal",
                                "source":  {
                                               "title":  "16. Feedback \u0026 Learning Loop",
                                               "locator":  "P7472–P7529"
                                           }
                            }
                        ],
    "signalLearningChain":  [
                                {
                                    "element":  "SIGNAL",
                                    "status":  "SUPPORTED",
                                    "rationale":  "Observación que todavía no determina acción.",
                                    "source":  {
                                                   "title":  "16. Feedback \u0026 Learning Loop",
                                                   "locator":  "P7422–P7464"
                                               }
                                },
                                {
                                    "element":  "PATTERN",
                                    "status":  "SUPPORTED",
                                    "rationale":  "Agrupación de señales con mayor fuerza.",
                                    "source":  {
                                                   "title":  "16. Feedback \u0026 Learning Loop",
                                                   "locator":  "P7554–P7567"
                                               }
                                },
                                {
                                    "element":  "EVIDENCE",
                                    "status":  "SUPPORTED",
                                    "rationale":  "Señales contrastadas y clasificadas por fuerza.",
                                    "source":  {
                                                   "title":  "16. Feedback \u0026 Learning Loop",
                                                   "locator":  "P7569–P7593"
                                               }
                                },
                                {
                                    "element":  "INSIGHT",
                                    "status":  "SUPPORTED",
                                    "rationale":  "Chapter 16 introduce explícitamente INSIGHT; Chapter 12 permanece sin modificación.",
                                    "source":  {
                                                   "title":  "16. Feedback \u0026 Learning Loop",
                                                   "locator":  "P7419–P7440; P8146–P8197"
                                               }
                                },
                                {
                                    "element":  "LEARNING",
                                    "status":  "SUPPORTED",
                                    "rationale":  "Resultado explícito de comparar hipótesis, acción y evidencia.",
                                    "source":  {
                                                   "title":  "16. Feedback \u0026 Learning Loop",
                                                   "locator":  "P7705–P7721; P8380–P8391"
                                               }
                                },
                                {
                                    "element":  "DECISION",
                                    "status":  "SUPPORTED",
                                    "rationale":  "El aprendizaje se completa cuando modifica una decisión.",
                                    "source":  {
                                                   "title":  "16. Feedback \u0026 Learning Loop",
                                                   "locator":  "P7882–P7894; P8380–P8391"
                                               }
                                }
                            ],
    "learningConcepts":  [
                             {
                                 "id":  "expected",
                                 "title":  "Expected Result",
                                 "purpose":  "Explicitar qué debería ocurrir antes de observar.",
                                 "inputs":  [
                                                "hypothesis",
                                                "expected signal"
                                            ],
                                 "outputs":  [
                                                 "comparison baseline"
                                             ],
                                 "decision":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "16. Feedback \u0026 Learning Loop",
                                                            "locator":  "P7705–P7721; P7862–P7880"
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
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL",
                                                      "BUSINESS LINKAGE":  "SOURCE PARTIAL",
                                                      "ACTIVATION CRITERIA":  "SOURCE MISSING",
                                                      "TTV DEFINITION":  "SOURCE MISSING",
                                                      "ADHERENCE CRITERIA":  "SOURCE MISSING"
                                                  }
                             },
                             {
                                 "id":  "actual",
                                 "title":  "Actual Result",
                                 "purpose":  "Registrar qué ocurrió realmente.",
                                 "inputs":  [
                                                "behavior",
                                                "technical/product signals"
                                            ],
                                 "outputs":  [
                                                 "observed result"
                                             ],
                                 "decision":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "16. Feedback \u0026 Learning Loop",
                                                            "locator":  "P7705–P7721; P7862–P7880"
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
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL",
                                                      "BUSINESS LINKAGE":  "SOURCE PARTIAL",
                                                      "ACTIVATION CRITERIA":  "SOURCE MISSING",
                                                      "TTV DEFINITION":  "SOURCE MISSING",
                                                      "ADHERENCE CRITERIA":  "SOURCE MISSING"
                                                  }
                             },
                             {
                                 "id":  "evidence",
                                 "title":  "Evidence",
                                 "purpose":  "Contrastar señales, comportamiento y sistema.",
                                 "inputs":  [
                                                "explicit",
                                                "behavioral",
                                                "operational",
                                                "business feedback"
                                            ],
                                 "outputs":  [
                                                 "evidence strength"
                                             ],
                                 "decision":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "16. Feedback \u0026 Learning Loop",
                                                            "locator":  "P7569–P7593; P7824–P7835"
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
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL",
                                                      "BUSINESS LINKAGE":  "SOURCE PARTIAL",
                                                      "ACTIVATION CRITERIA":  "SOURCE MISSING",
                                                      "TTV DEFINITION":  "SOURCE MISSING",
                                                      "ADHERENCE CRITERIA":  "SOURCE MISSING"
                                                  }
                             },
                             {
                                 "id":  "difference",
                                 "title":  "Difference",
                                 "purpose":  "Comparar Expected vs Actual y qué cambió/no cambió.",
                                 "inputs":  [
                                                "expected",
                                                "actual"
                                            ],
                                 "outputs":  [
                                                 "difference"
                                             ],
                                 "decision":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "16. Feedback \u0026 Learning Loop",
                                                            "locator":  "P7862–P7880"
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
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL",
                                                      "BUSINESS LINKAGE":  "SOURCE PARTIAL",
                                                      "ACTIVATION CRITERIA":  "SOURCE MISSING",
                                                      "TTV DEFINITION":  "SOURCE MISSING",
                                                      "ADHERENCE CRITERIA":  "SOURCE MISSING"
                                                  }
                             },
                             {
                                 "id":  "learning",
                                 "title":  "Learning",
                                 "purpose":  "Convertir evidencia en comprensión explícita asociada a Bet/Opportunity.",
                                 "inputs":  [
                                                "difference",
                                                "evidence"
                                            ],
                                 "outputs":  [
                                                 "Learning Card",
                                                 "insight"
                                             ],
                                 "decision":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "16. Feedback \u0026 Learning Loop",
                                                            "locator":  "P7705–P7721; P8380–P8391"
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
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL",
                                                      "BUSINESS LINKAGE":  "SOURCE PARTIAL",
                                                      "ACTIVATION CRITERIA":  "SOURCE MISSING",
                                                      "TTV DEFINITION":  "SOURCE MISSING",
                                                      "ADHERENCE CRITERIA":  "SOURCE MISSING"
                                                  }
                             },
                             {
                                 "id":  "decision",
                                 "title":  "Decision",
                                 "purpose":  "Cerrar el loop modificando la acción.",
                                 "inputs":  [
                                                "learning",
                                                "evidence"
                                            ],
                                 "outputs":  [
                                                 "SCALE",
                                                 "CONTINUE",
                                                 "ADJUST",
                                                 "EXPLORE",
                                                 "STOP"
                                             ],
                                 "decision":  "Scale / Continue / Adjust / Explore / Stop",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "16. Feedback \u0026 Learning Loop",
                                                            "locator":  "P7882–P7894"
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
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL",
                                                      "BUSINESS LINKAGE":  "SOURCE PARTIAL",
                                                      "ACTIVATION CRITERIA":  "SOURCE MISSING",
                                                      "TTV DEFINITION":  "SOURCE MISSING",
                                                      "ADHERENCE CRITERIA":  "SOURCE MISSING"
                                                  }
                             }
                         ],
    "learningDecisions":  [
                              {
                                  "decision":  "SCALE",
                                  "trigger":  "Outcome Review / Review Trigger con evidencia suficiente",
                                  "evidence":  [
                                                   "Expected",
                                                   "Actual",
                                                   "Evidence",
                                                   "Difference",
                                                   "Learning"
                                               ],
                                  "participants":  [
                                                       "Product",
                                                       "roles fuente según evidencia"
                                                   ],
                                  "output":  "La evidencia respalda ampliar.",
                                  "revisitCondition":  "Review Trigger según tiempo, volumen, evento o threshold definido; sin periodo universal",
                                  "source":  {
                                                 "title":  "16. Feedback \u0026 Learning Loop",
                                                 "locator":  "P7837–P7894"
                                             },
                                  "validationStatus":  "pending"
                              },
                              {
                                  "decision":  "CONTINUE",
                                  "trigger":  "Outcome Review / Review Trigger con evidencia suficiente",
                                  "evidence":  [
                                                   "Expected",
                                                   "Actual",
                                                   "Evidence",
                                                   "Difference",
                                                   "Learning"
                                               ],
                                  "participants":  [
                                                       "Product",
                                                       "roles fuente según evidencia"
                                                   ],
                                  "output":  "La hipótesis sigue válida y necesita más tiempo/evidencia.",
                                  "revisitCondition":  "Review Trigger según tiempo, volumen, evento o threshold definido; sin periodo universal",
                                  "source":  {
                                                 "title":  "16. Feedback \u0026 Learning Loop",
                                                 "locator":  "P7837–P7894"
                                             },
                                  "validationStatus":  "pending"
                              },
                              {
                                  "decision":  "ADJUST",
                                  "trigger":  "Outcome Review / Review Trigger con evidencia suficiente",
                                  "evidence":  [
                                                   "Expected",
                                                   "Actual",
                                                   "Evidence",
                                                   "Difference",
                                                   "Learning"
                                               ],
                                  "participants":  [
                                                       "Product",
                                                       "roles fuente según evidencia"
                                                   ],
                                  "output":  "La dirección parece válida y necesita modificación.",
                                  "revisitCondition":  "Review Trigger según tiempo, volumen, evento o threshold definido; sin periodo universal",
                                  "source":  {
                                                 "title":  "16. Feedback \u0026 Learning Loop",
                                                 "locator":  "P7837–P7894"
                                             },
                                  "validationStatus":  "pending"
                              },
                              {
                                  "decision":  "EXPLORE",
                                  "trigger":  "Outcome Review / Review Trigger con evidencia suficiente",
                                  "evidence":  [
                                                   "Expected",
                                                   "Actual",
                                                   "Evidence",
                                                   "Difference",
                                                   "Learning"
                                               ],
                                  "participants":  [
                                                       "Product",
                                                       "roles fuente según evidencia"
                                                   ],
                                  "output":  "Apareció nueva incertidumbre.",
                                  "revisitCondition":  "Review Trigger según tiempo, volumen, evento o threshold definido; sin periodo universal",
                                  "source":  {
                                                 "title":  "16. Feedback \u0026 Learning Loop",
                                                 "locator":  "P7837–P7894"
                                             },
                                  "validationStatus":  "pending"
                              },
                              {
                                  "decision":  "STOP",
                                  "trigger":  "Outcome Review / Review Trigger con evidencia suficiente",
                                  "evidence":  [
                                                   "Expected",
                                                   "Actual",
                                                   "Evidence",
                                                   "Difference",
                                                   "Learning"
                                               ],
                                  "participants":  [
                                                       "Product",
                                                       "roles fuente según evidencia"
                                                   ],
                                  "output":  "La evidencia no justifica continuar.",
                                  "revisitCondition":  "Review Trigger según tiempo, volumen, evento o threshold definido; sin periodo universal",
                                  "source":  {
                                                 "title":  "16. Feedback \u0026 Learning Loop",
                                                 "locator":  "P7837–P7894"
                                             },
                                  "validationStatus":  "pending"
                              }
                          ],
    "feedbackLoopConnections":  [
                                    {
                                        "element":  "Learning → Opportunity",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Learning puede generar nueva Opportunity.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P7322–P7358"
                                                   }
                                    },
                                    {
                                        "element":  "Learning → Outcome",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Outcome Review compara resultado esperado y real.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P7862–P7880"
                                                   }
                                    },
                                    {
                                        "element":  "Learning → Bet",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Puede modificar, continuar, escalar o detener una Bet.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P7322–P7358; P8124–P8129"
                                                   }
                                    },
                                    {
                                        "element":  "Learning → Discovery",
                                        "status":  "SUPPORTED",
                                        "rationale":  "EXPLORE y nueva incertidumbre reabren Discovery.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P7882–P7894; P8110–P8122"
                                                   }
                                    },
                                    {
                                        "element":  "Learning → DECIDE",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Evidence modifica Explore, Prioritize, Wait, Discard o Reframe.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P8110–P8122"
                                                   }
                                    }
                                ],
    "artifactUses":  [
                         {
                             "artifactId":  "evidence-map",
                             "artifactName":  "Evidence Map",
                             "relationship":  "UPDATES",
                             "usage":  "Artefacto vivo por Opportunity con fuentes y fuerza de evidencia.",
                             "source":  {
                                            "title":  "16. Feedback \u0026 Learning Loop",
                                            "locator":  "P7700–P7703; T49"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "learning-card",
                             "artifactName":  "Learning Card",
                             "relationship":  "CREATES",
                             "usage":  "Cierra We believed → We observed → We learned → Therefore.",
                             "source":  {
                                            "title":  "16. Feedback \u0026 Learning Loop",
                                            "locator":  "P7705–P7721"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "decision-log",
                             "artifactName":  "Decision Log",
                             "relationship":  "READS",
                             "usage":  "Mantiene contexto narrativo de decisiones junto al aprendizaje.",
                             "source":  {
                                            "title":  "16. Feedback \u0026 Learning Loop",
                                            "locator":  "P8233–P8244"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "source-customer-feedback-repository",
                             "artifactName":  "Customer Feedback Repository",
                             "relationship":  "SOURCE TERMINOLOGY CONFLICT",
                             "usage":  "Fuente lógica compartida de evidencia, no necesariamente nueva plataforma.",
                             "source":  {
                                            "title":  "16. Feedback \u0026 Learning Loop",
                                            "locator":  "P7684–P7697"
                                        },
                             "validationStatus":  "pending"
                         }
                     ],
    "adoptionLearningMetrics":  [
                                    {
                                        "name":  "Signal → Opportunity Time",
                                        "metricClass":  "LEARNING",
                                        "definition":  "Tiempo para procesar señales hasta Opportunity.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Learning Lead Time",
                                        "metricClass":  "LEARNING",
                                        "definition":  "Tiempo desde incertidumbre relevante hasta evidencia suficiente para decidir.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50; P7896–P7906"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% Opportunities with multiple evidence sources",
                                        "metricClass":  "LEARNING",
                                        "definition":  "Calidad y triangulación de evidencia.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% Bets with explicit hypothesis",
                                        "metricClass":  "LEARNING",
                                        "definition":  "Disciplina experimental.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% Bets with Review Trigger",
                                        "metricClass":  "LEARNING",
                                        "definition":  "Capacidad de cerrar el loop.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Release → First Evidence",
                                        "metricClass":  "LEARNING",
                                        "definition":  "Velocidad post-release.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% Bets with documented learning",
                                        "metricClass":  "LEARNING",
                                        "definition":  "Cierre explícito del aprendizaje.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Scale / Adjust / Stop Rate",
                                        "metricClass":  "LEARNING",
                                        "definition":  "Capacidad de actuar sobre evidencia.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Repeated Friction Rate",
                                        "metricClass":  "SUPPORT / FRICTION",
                                        "definition":  "Problemas que reaparecen.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Feedback → Decision Conversion",
                                        "metricClass":  "LEARNING",
                                        "definition":  "Utilidad real del feedback.",
                                        "decisionEnabled":  "Mejorar síntesis y decisiones, no volumen documental",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "T50"
                                                   },
                                        "validationStatus":  "pending"
                                    }
                                ],
    "learningCadences":  [
                             {
                                 "name":  "Continuous signals",
                                 "activityType":  "DATA COLLECTION",
                                 "frequency":  "continuous",
                                 "purpose":  "Capturar señales materialmente relevantes desde sensores organizacionales.",
                                 "source":  {
                                                "title":  "16. Feedback \u0026 Learning Loop",
                                                "locator":  "P7300–P7320; P7472–P7510"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Weekly Flow Review",
                                 "activityType":  "REVIEW",
                                 "frequency":  "weekly",
                                 "purpose":  "Bloqueos y señales críticas.",
                                 "source":  {
                                                "title":  "16. Feedback \u0026 Learning Loop",
                                                "locator":  "T54"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Biweekly Opportunity Review",
                                 "activityType":  "DECISION",
                                 "frequency":  "biweekly",
                                 "purpose":  "Evidence, Discovery y decisiones.",
                                 "source":  {
                                                "title":  "16. Feedback \u0026 Learning Loop",
                                                "locator":  "T54"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Customer Review",
                                 "activityType":  "LEARNING",
                                 "frequency":  "when needed",
                                 "purpose":  "Validación de comportamiento, no aceptación contractual.",
                                 "source":  {
                                                "title":  "16. Feedback \u0026 Learning Loop",
                                                "locator":  "P7775–P7805; T54"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Monthly Outcome Review",
                                 "activityType":  "DECISION",
                                 "frequency":  "monthly",
                                 "purpose":  "Expected vs Actual vs Learning.",
                                 "source":  {
                                                "title":  "16. Feedback \u0026 Learning Loop",
                                                "locator":  "P7862–P7880; T54"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Quarterly Direction Review",
                                 "activityType":  "DECISION",
                                 "frequency":  "quarterly",
                                 "purpose":  "Aprendizaje estratégico y reasignación.",
                                 "source":  {
                                                "title":  "16. Feedback \u0026 Learning Loop",
                                                "locator":  "T54"
                                            },
                                 "validationStatus":  "pending"
                             }
                         ],
    "adoptionLearningTooling":  [
                                    {
                                        "tool":  "Jira",
                                        "classification":  "RECOMMENDATION",
                                        "relationship":  "Trazabilidad Signal → Opportunity → Outcome → Bet → Delivery → Evidence/Learning; no toda signal es issue.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P8199–P8214"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "tool":  "Jira Service Management",
                                        "classification":  "RECOMMENDATION",
                                        "relationship":  "Request/Incident → Module → Journey → Category → Pattern → Product Signal.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P8216–P8230"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "tool":  "Confluence",
                                        "classification":  "RECOMMENDATION",
                                        "relationship":  "Contexto narrativo de Evidence Map, Decision Log, Learning Card y reviews.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P8233–P8244"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "tool":  "Rovo / AI",
                                        "classification":  "H1 / TO VALIDATE",
                                        "relationship":  "Clustering, síntesis y retrieval; no sustituye juicio de Producto.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P8246–P8264"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "tool":  "AI Feedback Agent",
                                        "classification":  "H1 / TO VALIDATE",
                                        "relationship":  "Evolución futura posterior a taxonomía, ownership, calidad y criterios.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P8266–P8285"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "tool":  "Learning dashboard",
                                        "classification":  "RECOMMENDATION",
                                        "relationship":  "Mostrar aprendizaje y decisiones, no cantidad de feedback.",
                                        "source":  {
                                                       "title":  "16. Feedback \u0026 Learning Loop",
                                                       "locator":  "P8287–P8302"
                                                   },
                                        "validationStatus":  "pending"
                                    }
                                ],
    "antiPatternAssessments":  [
                                   {
                                       "antiPattern":  "Feedback without synthesis",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "La brecha fuente es feedback distribuido sin sistema común.",
                                       "source":  {
                                                      "title":  "16. Feedback \u0026 Learning Loop",
                                                      "locator":  "P7300–P7320"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Ticket = feature",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Ticket es Signal y requiere patrón, causa y Opportunity.",
                                       "source":  {
                                                      "title":  "16. Feedback \u0026 Learning Loop",
                                                      "locator":  "P7384–P7440; P7646–P7664"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Customer request = priority",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Request se investiga hasta Need, Evidence y Opportunity.",
                                       "source":  {
                                                      "title":  "16. Feedback \u0026 Learning Loop",
                                                      "locator":  "P7512–P7529; P7622–P7644"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Learning without decision",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Definition of Learned exige decisión.",
                                       "source":  {
                                                      "title":  "16. Feedback \u0026 Learning Loop",
                                                      "locator":  "P7882–P7894; P8380–P8391"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Review meeting without learning",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "No se crea Learning Meeting; reviews deben producir evidencia o decisión.",
                                       "source":  {
                                                      "title":  "16. Feedback \u0026 Learning Loop",
                                                      "locator":  "P8079–P8090"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "No post-release measurement",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Release sin revisión aparece como Learning Debt.",
                                       "source":  {
                                                      "title":  "16. Feedback \u0026 Learning Loop",
                                                      "locator":  "P7824–P7859; P7944–P7958"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Late customer feedback",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "El TO-BE responde al feedback concentrado al final con reviews antes y durante Delivery.",
                                       "source":  {
                                                      "title":  "16. Feedback \u0026 Learning Loop",
                                                      "locator":  "P7738–P7822"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Customer only consulted pre-release",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Existen feedback durante Delivery y después de Release.",
                                       "source":  {
                                                      "title":  "16. Feedback \u0026 Learning Loop",
                                                      "locator":  "P7807–P7835"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Customer only consulted post-release",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Learning before building y prototyping preceden Delivery.",
                                       "source":  {
                                                      "title":  "16. Feedback \u0026 Learning Loop",
                                                      "locator":  "P7723–P7757"
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
                                            "text":  "El SEIF Feedback \u0026 Learning Loop define cómo las señales generadas por clientes, usuarios, Producto, UX, Customer Success, Soporte, Marketing, Desarrollo, SRE y los propios sistemas de SEIF se convierten en evidencia, aprendizaje y decisiones de Producto.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7301"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidencia que SEIF no carece de feedback.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7302"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por el contrario, existen múltiples fuentes:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7303"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "conversaciones con clientes;",
                                                          "acompañamiento de Customer Success;",
                                                          "tickets de Soporte;",
                                                          "comportamiento visible en dashboards;",
                                                          "utilización de licencias;",
                                                          "señales de adopción;",
                                                          "feedback recibido por Producto;",
                                                          "investigación y validaciones de UX;",
                                                          "observaciones de Marketing;",
                                                          "incidentes y señales operativas de SRE;",
                                                          "restricciones y deuda identificadas por Desarrollo;",
                                                          "métricas de uso;",
                                                          "criterios de éxito, TTV y adherencia definidos conceptualmente."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7304–P7316"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha está en otro punto:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7317"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "las señales existen, pero no operan todavía como un sistema unificado de aprendizaje capaz de conectar evidencia → decisión → acción → resultado.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7318"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el objetivo no es generar más feedback.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7319"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es construir la capacidad organizacional para aprender sistemáticamente del feedback que SEIF ya produce.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7320"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7300"
                                         }
                                     ]
                     },
                     {
                         "id":  "posicion-dentro-del-product-operating-system",
                         "title":  "Posición dentro del Product Operating System",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Feedback \u0026 Learning Loop atraviesa todo el sistema.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7323"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No es la última etapa.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7324"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opera permanentemente:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7325"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7326"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7327"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "FRAME",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7328"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7329"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCOVER",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7330"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7331"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DECIDE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7332"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7333"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALIDATE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7334"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7335"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DELIVER",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7336"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7337"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RELEASE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7338"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7339"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADOPT",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7340"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7341"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MEASURE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7342"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7343"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LEARN",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7344"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7345"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El aprendizaje puede generar:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7346"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "una nueva Opportunity;",
                                                          "una modificación de una Bet;",
                                                          "una decisión de continuar;",
                                                          "una decisión de escalar;",
                                                          "una corrección;",
                                                          "una nueva hipótesis;",
                                                          "una decisión de detener;",
                                                          "una intervención sobre adopción;",
                                                          "una mejora operacional;",
                                                          "una prioridad técnica."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7347–P7356"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7357"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "el output del Learning Loop no es información. Es una decisión mejor informada.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7358"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7322"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-central",
                         "title":  "Diagnóstico central",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo actual presenta un activo importante:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7361"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "las diferentes áreas están cerca de distintas partes de la realidad del cliente.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7362"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero esa fortaleza puede convertirse en fragmentación.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7363"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada función observa una parte diferente:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7364"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7365"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problemas, prioridades y Outcomes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7366"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7367"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comportamiento, journeys y fricción.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7368"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7369"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopción, implementación y contexto de cuenta.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7370"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7371"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problemas explícitos y recurrentes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7372"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7373"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Percepción, comunicación y señales de mercado.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7374"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7375"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Factibilidad, restricciones y comportamiento técnico.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7376"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7377"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estabilidad, incidentes, operación y deuda.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7378"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Analytics / Dashboards",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7379"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comportamiento cuantitativo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7380"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ninguna fuente por sí sola representa toda la realidad.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7381"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE debe conectar estas perspectivas.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7382"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7360"
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
                         "id":  "cambio-fundamental",
                         "title":  "Cambio fundamental",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cambio requerido es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7385"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7386"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback distribuido por área",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7387"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7388"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence compartida por Opportunity.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7389"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7390"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "opiniones individuales",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7391"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7392"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "señales contrastadas.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7393"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7394"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "feedback recibido",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7395"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7396"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "feedback procesado.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7397"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7398"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ticket = requerimiento",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7399"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7400"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ticket = señal.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7401"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7402"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "cliente pidió X",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7403"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7404"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "cliente experimenta Y.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7405"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7406"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "dashboard observado",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7407"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7408"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "anomalía → investigación → decisión.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7409"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7410"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "release terminado",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7411"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7412"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "release → evidencia → aprendizaje.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7413"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7414"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "retrospectiva como aprendizaje principal",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7415"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7416"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "continuous learning.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7417"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7384"
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
                                            "text":  "El Feedback \u0026 Learning Loop se estructura sobre una regla:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7420"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una señal no es evidencia suficiente. Una evidencia no es una decisión. Una decisión no es aprendizaje hasta observar su resultado.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7421"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La secuencia completa es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7422"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7423"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7424"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PATTERN",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7425"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7426"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EVIDENCE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7427"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7428"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "INSIGHT",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7429"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7430"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OPPORTUNITY",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7431"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7432"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BET",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7433"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7434"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RESULT",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7435"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7436"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LEARNING",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7437"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7438"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DECISION",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7439"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este ciclo evita que una observación aislada se convierta automáticamente en roadmap.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7440"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7419"
                                         }
                                     ]
                     },
                     {
                         "id":  "que-es-una-signal",
                         "title":  "Qué es una Signal",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Signal es cualquier observación que potencialmente indica:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7443"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "problema;",
                                                          "necesidad;",
                                                          "fricción;",
                                                          "comportamiento;",
                                                          "riesgo;",
                                                          "oportunidad;",
                                                          "cambio;",
                                                          "resultado inesperado."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7444–P7451"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos dentro del contexto SEIF:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7452"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "baja utilización de licencias;",
                                                          "usuario que no alcanza activación;",
                                                          "ticket recurrente;",
                                                          "cliente solicitando una capacidad;",
                                                          "intervención manual repetitiva de CS;",
                                                          "dificultad observada por UX;",
                                                          "caída de adherencia;",
                                                          "incidente recurrente;",
                                                          "limitación identificada por SRE;",
                                                          "oportunidad detectada por Marketing;",
                                                          "comportamiento inesperado en un dashboard."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7453–P7463"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Signal todavía no determina qué hacer.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7464"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7442"
                                         }
                                     ]
                     },
                     {
                         "id":  "taxonomia-de-senales",
                         "title":  "Taxonomía de señales",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para evitar fragmentación, SEIF debe clasificar las señales en una taxonomía simple.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7467"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-048",
                                                          "caption":  "Taxonomía de señales",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Tipo",
                                                                          "Qué representa"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Customer Need",
                                                                           "Necesidad expresada por cliente"
                                                                       ],
                                                                       [
                                                                           "User Friction",
                                                                           "Dificultad dentro de un journey"
                                                                       ],
                                                                       [
                                                                           "Adoption",
                                                                           "Problema o cambio en activación/adherencia"
                                                                       ],
                                                                       [
                                                                           "Support",
                                                                           "Patrón proveniente de tickets"
                                                                       ],
                                                                       [
                                                                           "Reliability",
                                                                           "Incidente, disponibilidad o estabilidad"
                                                                       ],
                                                                       [
                                                                           "Technical",
                                                                           "Deuda, restricción o dependencia"
                                                                       ],
                                                                       [
                                                                           "Growth",
                                                                           "Oportunidad de activación, expansión o retención"
                                                                       ],
                                                                       [
                                                                           "Market",
                                                                           "Señal proveniente del mercado"
                                                                       ],
                                                                       [
                                                                           "Business",
                                                                           "Impacto sobre ingreso, costo o riesgo"
                                                                       ],
                                                                       [
                                                                           "Unexpected Behavior",
                                                                           "Resultado diferente al esperado"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "16. Feedback \u0026 Learning Loop",
                                                                         "locator":  "T48"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La taxonomía debe mantenerse deliberadamente pequeña.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7468"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su propósito es permitir agrupación y análisis.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7469"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No crear administración adicional.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7470"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7466"
                                         }
                                     ]
                     },
                     {
                         "id":  "fuentes-de-feedback",
                         "title":  "Fuentes de feedback",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo reconoce cuatro categorías principales.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7473"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Explicit Feedback",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7474"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario o cliente expresa directamente algo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7475"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7476"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "entrevista;",
                                                          "solicitud;",
                                                          "ticket;",
                                                          "conversación;",
                                                          "encuesta;",
                                                          "sesión de validación."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7477–P7482"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Behavioral Feedback",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7483"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario demuestra algo mediante comportamiento.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7484"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7485"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "abandono;",
                                                          "baja adopción;",
                                                          "TTV;",
                                                          "adherencia;",
                                                          "frecuencia relevante;",
                                                          "journey incompleto."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7486–P7491"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Operational Feedback",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7492"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema demuestra algo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7493"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7494"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "incidentes;",
                                                          "errores;",
                                                          "performance;",
                                                          "fallas;",
                                                          "dependencia;",
                                                          "reintentos."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7495–P7500"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Business Feedback",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7501"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El resultado económico u organizacional demuestra algo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7502"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7503"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "expansión;",
                                                          "contracción;",
                                                          "churn;",
                                                          "renovación;",
                                                          "costo de soporte;",
                                                          "consumo operacional."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7504–P7509"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fortaleza aparece al combinar las cuatro.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7510"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7472"
                                         }
                                     ]
                     },
                     {
                         "id":  "feedback-truth",
                         "title":  "Feedback ≠ Truth",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una solicitud explícita del cliente representa evidencia sobre una necesidad percibida.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7513"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No necesariamente sobre la solución correcta.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7514"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ejemplo:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7515"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente solicita funcionalidad X",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7516"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La señal real puede ser:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7517"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“No puedo completar el proceso Y de manera adecuada.”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7518"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7519"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Request",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7520"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7521"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Underlying Need",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7522"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7523"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Context",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7524"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7525"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7526"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7527"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7528"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este principio protege a SEIF del crecimiento funcional basado exclusivamente en solicitudes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7529"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7512"
                                         }
                                     ]
                     },
                     {
                         "id":  "signal-intake",
                         "title":  "Signal Intake",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo necesita un mecanismo común para capturar señales relevantes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7532"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No significa centralizar todas las conversaciones en una única herramienta.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7533"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Significa que las señales con potencial de Producto puedan convertirse en un objeto visible.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7534"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La información mínima es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7535"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Source",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7536"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿De dónde viene?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7537"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actor",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7538"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién experimenta el problema?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7539"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Context",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7540"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿En qué situación?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7541"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7542"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7543"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Module / Journey",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7544"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde ocurrió?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7545"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7546"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué respaldo existe?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7547"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Frequency",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7548"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Es aislado o recurrente?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7549"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Impact",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7550"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué consecuencia genera?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7551"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No requiere una descripción de solución.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7552"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7531"
                                         }
                                     ]
                     },
                     {
                         "id":  "signal-pattern",
                         "title":  "Signal → Pattern",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una de las capacidades críticas del TO-BE será agrupar señales.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7555"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7556"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ticket A",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7557"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback de CS",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7559"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Observación UX",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7561"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Caída en funnel",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7563"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "=",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7564"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pattern",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7565"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un Pattern posee mayor fuerza que cualquiera de las señales individuales.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7566"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite que Producto deje de procesar exclusivamente solicitudes y empiece a observar problemas sistémicos.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7567"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7554"
                                         }
                                     ]
                     },
                     {
                         "id":  "evidence-strength",
                         "title":  "Evidence Strength",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo utiliza una escala simple de evidencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7570"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Weak",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7571"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una señal aislada o percepción.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7572"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Emerging",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7573"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Múltiples señales consistentes, todavía con incertidumbre.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7574"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Strong",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7575"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe comportamiento observable o múltiples fuentes independientes consistentes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7576"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validated",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7577"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia ha sido contrastada directamente mediante investigación, datos o experimento.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7578"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La escala no determina automáticamente prioridad.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7579"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determina:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7580"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "cuánta incertidumbre existe.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7581"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7569"
                                         }
                                     ]
                     },
                     {
                         "id":  "evidence-triangulation",
                         "title":  "Evidence Triangulation",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando una decisión es relevante, SEIF debe buscar triangulación cuando sea económicamente razonable.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7584"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La lógica es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7585"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "What users say",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7586"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entrevistas / feedback.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7587"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "What users do",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7588"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Behavior / analytics.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7589"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "What the system experiences",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7590"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Support / technical / operational signals.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7591"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando las tres fuentes convergen, aumenta la confianza.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7592"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando divergen, existe una oportunidad de aprendizaje.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7593"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7583"
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
                         "id":  "ejemplo-conceptual-baja-utilizacion",
                         "title":  "Ejemplo conceptual — baja utilización",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7596"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dashboard muestra utilización inferior a la esperada.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7597"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto no produce directamente:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7598"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Necesitamos mejorar onboarding.”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7599"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe activar:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7600"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quantitative signal",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7601"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7602"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Segment",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7603"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7604"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS context",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7605"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7606"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "User investigation",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7607"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7608"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product/UX evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7609"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7610"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root cause",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7611"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La causa podría estar relacionada con:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7612"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "configuración;",
                                                          "awareness;",
                                                          "UX;",
                                                          "necesidad;",
                                                          "operación del cliente;",
                                                          "dependencia;",
                                                          "valor."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7613–P7619"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo después se define una Bet.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7620"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7595"
                                         }
                                     ]
                     },
                     {
                         "id":  "ejemplo-conceptual-solicitud-de-cliente",
                         "title":  "Ejemplo conceptual — solicitud de cliente",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7623"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente solicita una funcionalidad.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7624"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Loop",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7625"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Request",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7626"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7627"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué intenta lograr?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7628"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7629"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema actual se lo impide?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7630"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7631"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Otros clientes presentan la misma necesidad?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7632"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7633"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué muestra comportamiento/soporte?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7634"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7635"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Existe alternativa sin construir la funcionalidad solicitada?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7636"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7637"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7638"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7639"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7640"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7641"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7642"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cliente continúa siendo una fuente central de evidencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7643"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero deja de ser el diseñador implícito del roadmap.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7644"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7622"
                                         }
                                     ]
                     },
                     {
                         "id":  "ejemplo-conceptual-ticket-recurrente",
                         "title":  "Ejemplo conceptual — ticket recurrente",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7647"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte recibe múltiples tickets sobre un mismo comportamiento.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7648"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no responde automáticamente:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7649"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Soporte necesita un artículo.”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7650"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primero clasifica:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7651"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Knowledge Gap",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7652"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El producto funciona, pero falta conocimiento.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7653"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usability Gap",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7654"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario no comprende el flujo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7655"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Gap",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7656"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Falta capacidad.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7657"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reliability Gap",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7658"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe una falla.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7659"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Configuration Gap",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7660"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La configuración genera dificultad.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7661"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Process Gap",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7662"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema está fuera del producto.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7663"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada causa produce una intervención distinta.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7664"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7646"
                                         }
                                     ]
                     },
                     {
                         "id":  "ejemplo-conceptual-intervencion-repetitiva-de-cs",
                         "title":  "Ejemplo conceptual — intervención repetitiva de CS",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando Customer Success ejecuta repetidamente una acción para permitir que clientes obtengan valor:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7667"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Manual Intervention",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7668"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7669"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Frequency",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7670"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7671"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Impact",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7672"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7673"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7674"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7675"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value-Adding Assistance?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7676"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7677"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Failure Demand?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7678"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si es Failure Demand:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7679"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7680"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7681"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto convierte el trabajo manual de CS en inteligencia para Producto.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7682"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7666"
                                         }
                                     ]
                     },
                     {
                         "id":  "customer-feedback-repository",
                         "title":  "Customer Feedback Repository",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF necesita una fuente lógica compartida de evidencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7685"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No necesariamente una nueva plataforma.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7686"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe permitir relacionar:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7687"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7688"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Customer / Segment",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7689"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Module",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7690"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Journey",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7691"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Problem",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7692"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Opportunity",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7693"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Outcome",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7694"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Bet",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7695"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Result",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7696"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La prioridad es la trazabilidad.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7697"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No el volumen de documentación.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7698"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7684"
                                         }
                                     ]
                     },
                     {
                         "id":  "evidence-map",
                         "title":  "Evidence Map",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Evidence Map iniciado durante el assessment evoluciona hacia un artefacto vivo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7701"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada Opportunity muestra:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7702"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-049",
                                                          "caption":  "Evidence Map",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Fuente",
                                                                          "Evidencia",
                                                                          "Fuerza",
                                                                          "Qué indica"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Customer",
                                                                           "Feedback",
                                                                           "Emerging",
                                                                           "Necesidad percibida"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Observación",
                                                                           "Strong",
                                                                           "Fricción recurrente"
                                                                       ],
                                                                       [
                                                                           "Support",
                                                                           "Tickets",
                                                                           "Strong",
                                                                           "Patrón operacional"
                                                                       ],
                                                                       [
                                                                           "Analytics",
                                                                           "Behavior",
                                                                           "Strong",
                                                                           "Drop-off"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Research",
                                                                           "Validated",
                                                                           "Causa de experiencia"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Technical",
                                                                           "Emerging/Strong",
                                                                           "Restricción o riesgo"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "16. Feedback \u0026 Learning Loop",
                                                                         "locator":  "T49"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las oportunidades requieren todas las fuentes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7703"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7700"
                                         }
                                     ]
                     },
                     {
                         "id":  "learning-card",
                         "title":  "Learning Card",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada Bet relevante debe poseer una Learning Card mínima.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7706"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We believed",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7707"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué creíamos?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7708"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Because",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7709"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia lo respaldaba?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7710"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We did",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7711"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué intervención realizamos?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7712"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We expected",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7713"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué debería ocurrir?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7714"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We observed",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7715"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió realmente?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7716"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "We learned",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7717"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué aprendimos?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7718"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Therefore",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7719"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decisión tomamos?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7720"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este artefacto cierra el ciclo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7721"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7705"
                                         }
                                     ]
                     },
                     {
                         "id":  "learning-before-building",
                         "title":  "Learning Before Building",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Discovery Model ya establece reducción de incertidumbre antes de Delivery.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7724"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Learning Loop operacionaliza ese principio.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7725"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La pregunta es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7726"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuál es la forma más económica de aprender lo necesario antes de comprometer desarrollo?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7727"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dependiendo de la incertidumbre:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7728"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "entrevista;",
                                                          "observación;",
                                                          "análisis de datos;",
                                                          "prototipo;",
                                                          "simulación;",
                                                          "experimento;",
                                                          "revisión con cliente."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7729–P7735"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todo aprendizaje necesita código.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7736"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7723"
                                         }
                                     ]
                     },
                     {
                         "id":  "prototyping-loop",
                         "title":  "Prototyping Loop",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una de las oportunidades explícitamente identificadas para SEIF es reducir la distancia entre lo que el cliente necesita y lo que finalmente se construye.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7739"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El loop objetivo es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7740"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7741"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7742"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hypothesis",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7743"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7744"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototype",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7745"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7746"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer/User Review",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7747"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7748"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7749"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7750"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adjustment",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7751"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7752"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7753"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7754"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery Decision",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7755"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce el riesgo de:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7756"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "construir completamente → mostrar → descubrir desalineación → reprocesar.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7757"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7738"
                                         }
                                     ]
                     },
                     {
                         "id":  "ia-para-prototipado-y-modelado",
                         "title":  "IA para prototipado y modelado",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro del modelo, agentes y herramientas de IA pueden utilizarse para acelerar:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7760"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "wireframes;",
                                                          "flujos;",
                                                          "prototipos;",
                                                          "variantes de solución;",
                                                          "simulación de journeys;",
                                                          "documentación inicial;",
                                                          "historias de usuario;",
                                                          "criterios de aceptación;",
                                                          "ejemplos de interacción."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7761–P7769"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El propósito no es reemplazar UX o Producto.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7770"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7771"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "reducir el costo y el tiempo necesario para convertir una hipótesis en algo que el usuario pueda evaluar.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7772"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La validación continúa siendo humana.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7773"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7759"
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
                         "id":  "unified-customer-review",
                         "title":  "Unified Customer Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para reducir feedback fragmentado, las validaciones relevantes deben orientarse por módulo, journey u Outcome.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7776"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La revisión debe presentar:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7777"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Context",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7778"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema estamos resolviendo?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7779"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7780"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué debería lograr el usuario?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7781"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototype / Increment",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7782"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué queremos observar?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7783"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Moment of Truth",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7784"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde debería percibir valor?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7785"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Questions",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7786"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué incertidumbre necesitamos resolver?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7787"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7788"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7789"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita sesiones donde simplemente se pregunta:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7790"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Te gusta?”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7791"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7775"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, ventanas y triggers de revisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "customer-review-acceptance-meeting",
                         "title":  "Customer Review ≠ Acceptance Meeting",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El propósito de la revisión temprana no es obtener aprobación contractual sobre una solución.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7794"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es generar aprendizaje.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7795"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, preguntas como:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7796"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Está bien así?”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7797"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "son menos útiles que:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7798"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿qué intentaría hacer ahora?",
                                                          "¿qué esperaba encontrar?",
                                                          "¿qué le genera duda?",
                                                          "¿qué haría después?",
                                                          "¿logró completar el objetivo?",
                                                          "¿necesitó ayuda?"
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7799–P7804"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El foco es comportamiento.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7805"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7793"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, ventanas y triggers de revisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "feedback-durante-delivery",
                         "title":  "Feedback durante Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El aprendizaje no termina cuando comienza desarrollo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7808"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las slices definidas en el Delivery Model permiten validar progresivamente.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7809"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El loop es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7810"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Working Increment",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7811"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7812"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Internal Review",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7813"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7814"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer/User Review cuando corresponda",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7815"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7816"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7817"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7818"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adjust",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7819"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7820"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Next Slice",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7821"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce el riesgo de feedback concentrado al final.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7822"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7807"
                                         }
                                     ]
                     },
                     {
                         "id":  "feedback-despues-de-release",
                         "title":  "Feedback después de Release",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Después del release existen dos fuentes principales.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7825"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quantitative",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7826"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué hicieron los usuarios?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7827"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qualitative",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7828"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué ocurrió?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7829"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo evita utilizar exclusivamente una.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7830"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ejemplo:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7831"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation decreased",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7832"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "es una señal cuantitativa.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7833"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para entenderla puede requerirse:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7834"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "entrevista / observación / soporte / CS.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7835"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7824"
                                         }
                                     ]
                     },
                     {
                         "id":  "learning-window",
                         "title":  "Learning Window",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada Bet relevante debe definir cuándo espera obtener evidencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7838"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos conceptuales:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7839"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "inmediata;",
                                                          "días;",
                                                          "semanas;",
                                                          "ciclo operacional específico."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7840–P7843"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no fija un periodo universal.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7844"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Depende del comportamiento que se quiere modificar.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7845"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lo importante es evitar:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7846"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "release sin fecha de revisión.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7847"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Toda Bet relevante debe tener un Review Trigger.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7848"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7837"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, ventanas y triggers de revisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "review-trigger",
                         "title":  "Review Trigger",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un Review Trigger puede ser:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7851"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Time-Based",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7852"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Después de determinado periodo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7853"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Volume-Based",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7854"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Después de suficiente número de interacciones.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7855"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Event-Based",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7856"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando ocurre un comportamiento específico.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7857"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Threshold-Based",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7858"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando una métrica cruza determinado nivel.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7859"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto hace explícito cuándo SEIF espera aprender.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7860"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7850"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, ventanas y triggers de revisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "outcome-review",
                         "title":  "Outcome Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Outcome Review no pregunta principalmente:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7863"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Terminamos?”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7864"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7865"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿Qué Outcome queríamos modificar?",
                                                          "¿Qué evidencia teníamos?",
                                                          "¿Qué Bet realizamos?",
                                                          "¿Qué esperábamos observar?",
                                                          "¿Qué ocurrió?",
                                                          "¿Qué cambió?",
                                                          "¿Qué no cambió?",
                                                          "¿Qué aprendimos?",
                                                          "¿Qué decisión corresponde?"
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7866–P7874"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones son:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7875"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scale",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7876"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Continue",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7877"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adjust",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7878"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explore",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7879"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Stop",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7880"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7862"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Authority y accountability de decisiones basadas en aprendizaje",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, ventanas y triggers de revisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "decision-after-learning",
                         "title":  "Decision after Learning",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El aprendizaje siempre debe cerrar con una decisión.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7883"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SCALE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7884"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia respalda ampliar.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7885"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CONTINUE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7886"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La hipótesis continúa siendo válida y requiere más tiempo/evidencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7887"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADJUST",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7888"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La dirección parece válida, pero necesita modificación.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7889"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EXPLORE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7890"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Apareció nueva incertidumbre.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7891"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "STOP",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7892"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia no justifica continuar.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7893"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin esta decisión, el Learning Loop se convierte en documentación.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7894"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7882"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Authority y accountability de decisiones basadas en aprendizaje",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "learning-velocity",
                         "title":  "Learning Velocity",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una organización de Producto no mejora únicamente entregando más rápido.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7897"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También debe aprender más rápido.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7898"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF debe evolucionar hacia la medición de:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7899"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Lead Time",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7900"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "tiempo desde que una incertidumbre relevante es identificada hasta que existe evidencia suficiente para tomar una decisión.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7901"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto complementa:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7902"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Decision Lead Time;",
                                                          "Delivery Lead Time;",
                                                          "DORA Lead Time;",
                                                          "TTV."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7903–P7906"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7896"
                                         }
                                     ]
                     },
                     {
                         "id":  "end-to-end-learning-time",
                         "title":  "End-to-End Learning Time",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema completo permite medir progresivamente:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7909"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal → Insight",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7910"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tardamos en entender?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7911"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity → Decision",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7912"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tardamos en decidir?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7913"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision → Release",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7914"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tardamos en entregar?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7915"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release → Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7916"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tardamos en observar?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7917"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence → Decision",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7918"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tardamos en aprender y actuar?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7919"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La optimización final debe ocurrir sobre toda la cadena.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7920"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7908"
                                         }
                                     ]
                     },
                     {
                         "id":  "learning-metrics",
                         "title":  "Learning Metrics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El conjunto inicial recomendado es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7923"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-050",
                                                          "caption":  "Learning Metrics",
                                                          "kind":  "scorecard",
                                                          "headers":  [
                                                                          "Métrica",
                                                                          "Qué evalúa"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Signal → Opportunity Time",
                                                                           "Capacidad de procesar señales"
                                                                       ],
                                                                       [
                                                                           "Learning Lead Time",
                                                                           "Velocidad de reducción de incertidumbre"
                                                                       ],
                                                                       [
                                                                           "% Opportunities with multiple evidence sources",
                                                                           "Calidad de evidencia"
                                                                       ],
                                                                       [
                                                                           "% Bets with explicit hypothesis",
                                                                           "Disciplina experimental"
                                                                       ],
                                                                       [
                                                                           "% Bets with Review Trigger",
                                                                           "Capacidad de cerrar loop"
                                                                       ],
                                                                       [
                                                                           "Release → First Evidence",
                                                                           "Velocidad post-release"
                                                                       ],
                                                                       [
                                                                           "% Bets with documented learning",
                                                                           "Cierre del ciclo"
                                                                       ],
                                                                       [
                                                                           "Scale / Adjust / Stop Rate",
                                                                           "Capacidad de actuar sobre evidencia"
                                                                       ],
                                                                       [
                                                                           "Repeated Friction Rate",
                                                                           "Problemas que reaparecen"
                                                                       ],
                                                                       [
                                                                           "Feedback → Decision Conversion",
                                                                           "Utilidad real del feedback"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "16. Feedback \u0026 Learning Loop",
                                                                         "locator":  "T50"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se establecen metas hasta obtener baseline.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7924"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7922"
                                         }
                                     ]
                     },
                     {
                         "id":  "feedback-quality",
                         "title":  "Feedback Quality",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe medirse el éxito mediante:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7927"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“cantidad de feedback capturado.”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7928"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Más feedback puede generar más ruido.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7929"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La calidad se evalúa por:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7930"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Relevance",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7931"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Está relacionado con un problema real?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7932"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Context",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7933"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Sabemos cuándo y dónde ocurre?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7934"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7935"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Existe respaldo?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7936"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Frequency",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7937"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Es recurrente?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7938"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Impact",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7939"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Importa?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7940"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actionability",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7941"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede convertirse en una investigación o decisión?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7942"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7926"
                                         }
                                     ]
                     },
                     {
                         "id":  "learning-debt",
                         "title":  "Learning Debt",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo introduce el concepto de:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7945"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Debt",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7946"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se produce cuando SEIF:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7947"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "libera cambios;",
                                                          "recibe señales;",
                                                          "acumula datos;",
                                                          "observa problemas;"
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7948–P7951"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "pero no convierte esa información en aprendizaje explícito.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7952"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7953"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "dashboard que nadie revisa;",
                                                          "feedback recurrente sin Opportunity;",
                                                          "experimento sin resultado documentado;",
                                                          "release sin revisión posterior;",
                                                          "ticket repetitivo sin análisis de patrón."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7954–P7958"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La deuda de aprendizaje genera decisiones futuras basadas en memoria y percepción.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7959"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7944"
                                         }
                                     ]
                     },
                     {
                         "id":  "feedback-debt",
                         "title":  "Feedback Debt",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe también:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7962"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback Debt",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7963"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se produce cuando señales relevantes permanecen distribuidas y sin procesamiento.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7964"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede manifestarse como:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7965"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "conversaciones aisladas;",
                                                          "notas individuales;",
                                                          "mensajes;",
                                                          "tickets sin categorización;",
                                                          "observaciones de CS;",
                                                          "hallazgos de UX;",
                                                          "información de Marketing;",
                                                          "conocimiento técnico."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7966–P7973"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es capturar absolutamente todo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7974"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es evitar perder señales materialmente relevantes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7975"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7961"
                                         }
                                     ]
                     },
                     {
                         "id":  "knowledge-flow",
                         "title":  "Knowledge Flow",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE busca reemplazar:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7978"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Knowledge in People",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7979"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "por:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7980"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Knowledge through the System",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7981"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "sin crear documentación excesiva.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7982"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El conocimiento crítico debe viajar mediante:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7983"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7984"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7985"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7986"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7987"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7988"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7989"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7990"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7991"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7992"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De esta forma, cuando una decisión se revisa posteriormente, existe contexto suficiente para comprenderla.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7993"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7977"
                                         }
                                     ]
                     },
                     {
                         "id":  "role-of-product",
                         "title":  "Role of Product",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto es accountable por convertir evidencia distribuida en decisiones coherentes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7996"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto incluye:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7997"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "integrar señales;",
                                                          "formular Opportunities;",
                                                          "definir incertidumbres;",
                                                          "coordinar Discovery;",
                                                          "mantener Evidence Map;",
                                                          "establecer hipótesis;",
                                                          "definir Review Trigger;",
                                                          "conducir Outcome Reviews;",
                                                          "actualizar prioridades según aprendizaje."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P7998–P8006"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto no necesita generar toda la evidencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8007"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Necesita integrarla.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8008"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P7995"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "role-of-ux",
                         "title":  "Role of UX",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX aporta evidencia sobre:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8011"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "comportamiento;",
                                                          "comprensión;",
                                                          "fricción;",
                                                          "journeys;",
                                                          "Momentos de Verdad;",
                                                          "validación de hipótesis de experiencia."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8012–P8017"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX debe ayudar a responder:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8018"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Por qué ocurre este comportamiento y cómo lo experimenta el usuario?”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8019"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su participación no se limita al diseño de interfaces.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8020"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8010"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "role-of-customer-success",
                         "title":  "Role of Customer Success",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS aporta:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8023"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "contexto de cuenta;",
                                                          "adopción;",
                                                          "barreras;",
                                                          "dependencia;",
                                                          "implementación;",
                                                          "adherencia;",
                                                          "riesgo;",
                                                          "expansión potencial."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8024–P8031"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS constituye una fuente crítica de señales.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8032"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero sus observaciones deben transformarse de:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8033"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“el cliente dice…”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8034"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8035"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“observamos este patrón, bajo este contexto, con este impacto.”",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8036"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8022"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "role-of-support",
                         "title":  "Role of Support",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte aporta volumen y recurrencia de fricción explícita.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8039"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su función dentro del Learning Loop es permitir identificar:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8040"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "patrones;",
                                                          "frecuencia;",
                                                          "módulos;",
                                                          "journeys;",
                                                          "causas;",
                                                          "escalaciones."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8041–P8046"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es que Soporte haga Product Discovery.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8047"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es que su información sea utilizable por Producto.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8048"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8038"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "role-of-marketing",
                         "title":  "Role of Marketing",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing aporta:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8051"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "señales de mercado;",
                                                          "mensajes que generan interés;",
                                                          "objeciones;",
                                                          "comprensión de propuesta de valor;",
                                                          "segmentos;",
                                                          "respuesta a comunicación;",
                                                          "campañas de adopción."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8052–P8058"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas señales complementan comportamiento dentro del producto.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8059"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8050"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "role-of-desarrollo-y-sre",
                         "title":  "Role of Desarrollo y SRE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tecnología aporta evidencia que otras funciones no pueden observar completamente:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8062"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "deuda;",
                                                          "limitaciones;",
                                                          "recurrencia técnica;",
                                                          "incidentes;",
                                                          "comportamiento del sistema;",
                                                          "restricciones;",
                                                          "costo operacional;",
                                                          "complejidad."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8063–P8070"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas señales pueden convertirse en Opportunities cuando afectan:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8071"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "confiabilidad;",
                                                          "capacidad;",
                                                          "TTV;",
                                                          "autonomía;",
                                                          "escalabilidad."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8072–P8077"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8061"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "learning-review",
                         "title":  "Learning Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se recomienda crear una nueva reunión semanal denominada “Learning Meeting”.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8080"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El aprendizaje debe integrarse en las cadencias ya definidas.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8081"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity Review",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8082"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué necesitamos aprender antes de decidir?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8083"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery Review",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8084"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia obtuvimos?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8085"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Review",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8086"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué está impidiendo aprender o entregar?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8087"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Review",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8088"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió después de la inversión?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8089"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Así se evita aumentar carga ceremonial.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8090"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8079"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, ventanas y triggers de revisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "learning-backlog",
                         "title":  "Learning Backlog",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no necesita un backlog adicional de “aprendizajes”.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8093"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las incertidumbres deben vivir asociadas a Opportunities y Bets.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8094"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8095"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8096"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reducir dependencia en configuración.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8097"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Unknown 1",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8098"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde se produce?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8099"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Unknown 2",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8100"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién necesita asistencia?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8101"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Unknown 3",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8102"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Es UX, producto o proceso?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8103"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Experiment",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8104"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Observación + prototipo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8105"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8106"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8107"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto mantiene aprendizaje conectado con decisión.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8108"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8092"
                                         }
                                     ]
                     },
                     {
                         "id":  "integration-with-decision-prioritization",
                         "title":  "Integration with Decision \u0026 Prioritization",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo del capítulo 13 definió:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8111"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome + Evidence + Reach + Value + Feasibility.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8112"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Learning Loop alimenta directamente:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8113"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8114"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando Evidence es baja:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8115"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Explore",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8116"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando aumenta:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8117"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ puede pasar a Prioritize",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8118"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando contradice la hipótesis:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8119"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Wait / Discard / Reframe",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8120"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, Discovery y priorización dejan de ser procesos separados.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8121"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia modifica la decisión.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8122"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8110"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Authority y accountability de decisiones basadas en aprendizaje",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "integration-with-delivery-release",
                         "title":  "Integration with Delivery \u0026 Release",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El capítulo 14 definió:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8125"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release → Observe → Outcome Evidence.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8126"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Learning Loop utiliza esa observación para decidir:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8127"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Continue / Adjust / Scale / Stop.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8128"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita que Delivery funcione como una fábrica de outputs.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8129"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8124"
                                         }
                                     ]
                     },
                     {
                         "id":  "integration-with-adoption-growth",
                         "title":  "Integration with Adoption \u0026 Growth",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El capítulo 15 definió:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8132"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eligible → Configured → Activated → Adopted → Adherent → Outcome.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8133"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada caída constituye una señal.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8134"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ejemplo:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8135"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eligible → Configured",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8136"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "problema potencial de implementación.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8137"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Configured → Activated",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8138"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "problema potencial de TTV.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8139"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activated → Adopted",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8140"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "problema potencial de valor recurrente.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8141"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopted → Adherent",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8142"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "problema potencial de sostenibilidad.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8143"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El funnel se convierte así en un sistema de generación de Opportunities.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8144"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8131"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "feedback-learning-architecture",
                         "title":  "Feedback \u0026 Learning Architecture",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo consolidado queda:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8147"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CUSTOMER ───────────────┐",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8148"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS ─────────────────────┤",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8149"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SUPPORT ────────────────┤",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8150"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX ─────────────────────┤",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8151"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MARKETING ──────────────┤",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8152"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRODUCT ANALYTICS ──────┤",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8153"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DEVELOPMENT ────────────┤",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8154"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE / OPERATIONS ───────┘",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8155"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8156"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8157"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNALS",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8158"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8159"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8160"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PATTERN DETECTION",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8161"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8162"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8163"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EVIDENCE MAP",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8164"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8165"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8166"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OPPORTUNITY",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8167"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8168"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8169"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCOVERY",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8170"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8171"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8172"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "INSIGHT",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8173"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8174"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8175"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DECISION",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8176"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8177"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8178"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BET",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8179"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8180"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8181"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DELIVERY / RELEASE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8182"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8183"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8184"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BEHAVIOR",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8185"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8186"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8187"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME EVIDENCE",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8188"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8189"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8190"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LEARN",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8191"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8192"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▼",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8193"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SCALE / CONTINUE / ADJUST",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8194"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "/ EXPLORE / STOP",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8195"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8196"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "└──────────────↺",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8197"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8146"
                                         }
                                     ]
                     },
                     {
                         "id":  "tooling-jira",
                         "title":  "Tooling — Jira",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Jira debe soportar trazabilidad, no convertirse en repositorio indiscriminado de feedback.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8200"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo lógico recomendado es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8201"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8202"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ relacionada con →",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8203"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8204"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ relacionada con →",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8205"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8206"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ materializada mediante →",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8207"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8208"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ implementada mediante →",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8209"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8210"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ genera →",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8211"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence / Learning",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8212"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las señales necesitan convertirse en issues de desarrollo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8213"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ese punto es fundamental.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8214"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8199"
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
                         "id":  "jira-service-management",
                         "title":  "Jira Service Management",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Jira Service Management puede aportar una fuente estructurada especialmente valiosa:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8217"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Request / Incident",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8218"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8219"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Module",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8220"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8221"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Journey",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8222"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8223"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Category",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8224"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8225"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pattern",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8226"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8227"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Signal",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8228"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando el patrón supera un umbral relevante:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8229"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Opportunity.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8230"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto conecta ITSM con Product Management sin convertir cada ticket en backlog.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8231"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8216"
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
                         "id":  "confluence",
                         "title":  "Confluence",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Confluence puede mantener los artefactos de conocimiento que necesitan contexto narrativo:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8234"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Evidence Map;",
                                                          "Discovery Summary;",
                                                          "Decision Log;",
                                                          "Learning Card;",
                                                          "Outcome Review;",
                                                          "experimentos;",
                                                          "insights relevantes."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8235–P8241"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La regla es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8242"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Jira gestiona flujo y trazabilidad. Confluence mantiene contexto y aprendizaje.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8243"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No duplicar información innecesariamente.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8244"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8233"
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
                         "id":  "rovo-e-ia-aplicada-al-learning-loop",
                         "title":  "Rovo e IA aplicada al Learning Loop",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "A medida que exista información suficientemente estructurada, capacidades de IA como Atlassian Rovo pueden apoyar el procesamiento de señales.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8247"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Casos de uso potenciales:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8248"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback Clustering",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8249"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Agrupar señales similares.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8250"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ticket Pattern Detection",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8251"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Identificar recurrencias.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8252"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence Summarization",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8253"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resumir evidencia distribuida.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8254"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Context",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8255"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Consolidar contexto previo a una revisión.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8256"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Retrieval",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8257"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Encontrar decisiones y aprendizajes anteriores.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8258"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery Preparation",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8259"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Preparar hipótesis y preguntas.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8260"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Context",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8261"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recuperar por qué una Bet fue priorizada.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8262"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La IA debe acelerar síntesis.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8263"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No sustituir juicio de Producto.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8264"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8246"
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
                         "id":  "ai-feedback-agent-evolucion-futura",
                         "title":  "AI Feedback Agent — evolución futura",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una capacidad futura podría funcionar conceptualmente como:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8267"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS + Support + UX + Analytics signals",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8268"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8269"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AI clustering",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8270"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8271"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Emerging patterns",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8272"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8273"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Human review",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8274"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8275"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity candidates",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8276"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto puede reducir el costo de procesar feedback.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8277"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, no constituye el primer paso.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8278"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primero SEIF necesita:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8279"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "taxonomía;",
                                                          "estructura;",
                                                          "ownership;",
                                                          "calidad de datos;",
                                                          "criterios de decisión."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8280–P8284"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Automatizar información desestructurada sin modelo común únicamente aceleraría el ruido.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8285"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8266"
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
                         "id":  "dashboard-de-learning",
                         "title":  "Dashboard de Learning",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El dashboard ejecutivo no debe mostrar “cantidad de feedback”.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8288"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe responder:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8289"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "What are we learning?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8290"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principales Opportunities emergentes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8291"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Where is evidence increasing?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8292"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Oportunidades que están ganando confianza.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8293"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Where are we uncertain?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8294"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bets con alta incertidumbre.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8295"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "What changed our mind?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8296"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decisiones modificadas por evidencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8297"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "What did we stop?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8298"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Inversiones detenidas.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8299"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "What worked?",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8300"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bets con Outcome demostrado.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8301"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto mide capacidad de aprendizaje, no producción documental.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8302"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8287"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
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
                                            "text":  "El Feedback \u0026 Learning Loop puede iniciar sin implementar nuevas herramientas.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8305"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Crear taxonomía mínima de Signals",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8306"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "10 categorías o menos.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8307"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Consolidar Top Signals",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8308"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto + CS + Soporte + UX + SRE.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8309"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Seleccionar Top 5 Patterns",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8310"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No solicitudes individuales.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8311"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Construir Evidence Map",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8312"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para las principales Opportunities.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8313"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Definir Evidence Strength",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8314"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Weak / Emerging / Strong / Validated.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8315"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Crear Learning Card",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8316"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada Bet prioritaria.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8317"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. Incorporar Review Trigger",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8318"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "A las Bets activas.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8319"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. Ejecutar una Unified Customer Review",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8320"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sobre un módulo prioritario.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8321"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "9. Conectar tickets recurrentes con Opportunities",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8322"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin convertirlos directamente en desarrollo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8323"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "10. Realizar primera Outcome Review",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8324"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected → Actual → Learning → Decision.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8325"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8304"
                                         }
                                     ]
                     },
                     {
                         "id":  "riesgos-de-implementacion",
                         "title":  "Riesgos de implementación",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo debe protegerse contra siete riesgos.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8328"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback Hoarding",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8329"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada área conserva su información.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8330"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback Overload",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8331"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se captura más información de la que puede procesarse.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8332"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Confirmation Bias",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8333"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo se busca evidencia que confirme la hipótesis.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8334"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "HiPPO Bias",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8335"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La opinión de mayor jerarquía sustituye evidencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8336"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Proxy Bias",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8337"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS, Producto o Comercial hablan por el usuario sin validación cuando esta es necesaria.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8338"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Analysis Paralysis",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8339"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se exige evidencia perfecta antes de actuar.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8340"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Theater",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8341"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se documentan “aprendizajes” que nunca modifican decisiones.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8342"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es eliminar incertidumbre.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8343"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es reducirla hasta un nivel razonable para decidir.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8344"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8327"
                                         }
                                     ]
                     },
                     {
                         "id":  "lean-aplicado-al-learning-loop",
                         "title":  "Lean aplicado al Learning Loop",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desde perspectiva Lean, la principal unidad de optimización no es únicamente el flujo de software.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8347"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También es el flujo de conocimiento.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8348"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los desperdicios identificables son:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8349"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-051",
                                                          "caption":  "Lean aplicado al Learning Loop",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Waste",
                                                                          "Manifestación"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Waiting",
                                                                           "Esperar demasiado para validar"
                                                                       ],
                                                                       [
                                                                           "Overprocessing",
                                                                           "Investigación sin decisión"
                                                                       ],
                                                                       [
                                                                           "Inventory",
                                                                           "Feedback acumulado sin procesar"
                                                                       ],
                                                                       [
                                                                           "Defects",
                                                                           "Construir sobre entendimiento incorrecto"
                                                                       ],
                                                                       [
                                                                           "Handoffs",
                                                                           "Contexto perdido entre áreas"
                                                                       ],
                                                                       [
                                                                           "Overproduction",
                                                                           "Features construidas antes de validar"
                                                                       ],
                                                                       [
                                                                           "Motion",
                                                                           "Buscar información dispersa"
                                                                       ],
                                                                       [
                                                                           "Unused Knowledge",
                                                                           "Evidencia disponible que no se utiliza"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "16. Feedback \u0026 Learning Loop",
                                                                         "locator":  "T51"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, Lean en SEIF debe reducir simultáneamente:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8350"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery Waste",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8351"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8352"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Waste.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8353"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8346"
                                         }
                                     ]
                     },
                     {
                         "id":  "maturity-assessment",
                         "title":  "Maturity Assessment",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-052",
                                                          "caption":  "Maturity Assessment",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Comportamiento"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1 — Inicial",
                                                                           "Feedback reactivo y principalmente anecdótico"
                                                                       ],
                                                                       [
                                                                           "2 — Repetible",
                                                                           "Existen múltiples fuentes y prácticas de validación, pero permanecen distribuidas"
                                                                       ],
                                                                       [
                                                                           "3 — Definido",
                                                                           "Signals, Evidence, Opportunities, Bets y Learning están conectados"
                                                                       ],
                                                                       [
                                                                           "4 — Gestionado",
                                                                           "Se mide Learning Lead Time y las decisiones cambian sistemáticamente con evidencia"
                                                                       ],
                                                                       [
                                                                           "5 — Optimizado",
                                                                           "Continuous Discovery y aprendizaje forman parte natural de la operación"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "16. Feedback \u0026 Learning Loop",
                                                                         "locator":  "T52"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado SEIF",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8356"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con base exclusivamente en las entrevistas:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8357"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8358"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target inicial",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8359"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8360"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo inmediato no es implementar una plataforma sofisticada de Voice of Customer ni un sistema avanzado de IA.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8361"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es construir un loop común y repetible de aprendizaje.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8362"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8355"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-16",
                                                       "subject":  "Valoración del assessment — madurez pendiente de validación",
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
                                                          "id":  "source-table-053",
                                                          "caption":  "AS-IS → TO-BE",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "AS-IS observado",
                                                                          "TO-BE"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Feedback",
                                                                           "Múltiples fuentes",
                                                                           "Signal System"
                                                                       ],
                                                                       [
                                                                           "Cliente",
                                                                           "Solicitudes + conversaciones",
                                                                           "Need + Context + Evidence"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Conocimiento de cuentas",
                                                                           "Structured Product Signals"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Tickets",
                                                                           "Friction Patterns"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Investigación/validación",
                                                                           "Evidence dentro del loop"
                                                                       ],
                                                                       [
                                                                           "Marketing",
                                                                           "Señales de mercado",
                                                                           "Market Evidence"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Riesgo/deuda/operación",
                                                                           "Technical Evidence"
                                                                       ],
                                                                       [
                                                                           "Dashboards",
                                                                           "Comportamiento visible",
                                                                           "Behavioral Signals"
                                                                       ],
                                                                       [
                                                                           "Discovery",
                                                                           "Prácticas existentes",
                                                                           "Evidence-driven"
                                                                       ],
                                                                       [
                                                                           "Prototipos",
                                                                           "Capacidad disponible",
                                                                           "Early Learning Mechanism"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "Feedback puede llegar posteriormente",
                                                                           "Incremental Feedback"
                                                                       ],
                                                                       [
                                                                           "Release",
                                                                           "Disponibilidad",
                                                                           "Start of Evidence"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "Conceptualmente definido",
                                                                           "Review sistemático"
                                                                       ],
                                                                       [
                                                                           "Learning",
                                                                           "Distribuido",
                                                                           "Learning Card"
                                                                       ],
                                                                       [
                                                                           "Decisiones",
                                                                           "Contextuales",
                                                                           "Evidence → Decision"
                                                                       ],
                                                                       [
                                                                           "Herramientas",
                                                                           "Información distribuida",
                                                                           "Trazabilidad integrada"
                                                                       ],
                                                                       [
                                                                           "IA",
                                                                           "Oportunidad emergente",
                                                                           "Learning Accelerator"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "16. Feedback \u0026 Learning Loop",
                                                                         "locator":  "T53"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8364"
                                         }
                                     ]
                     },
                     {
                         "id":  "metricas-recomendadas",
                         "title":  "Métricas recomendadas",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para evitar metric theater, la primera versión debe concentrarse en cinco indicadores:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8367"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Learning Lead Time",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8368"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Velocidad para reducir incertidumbre.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8369"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. % Bets with Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8370"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Disciplina de inversión.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8371"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Release → First Evidence",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8372"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Velocidad de aprendizaje posterior.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8373"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Repeated Friction Rate",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8374"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidad para eliminar causas recurrentes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8375"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. % Bets with explicit post-learning decision",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8376"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidad de convertir evidencia en acción.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8377"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas cinco métricas son suficientes para iniciar.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8378"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8366"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
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
                                            "text":  "Así como existe Definition of Done, SEIF necesita una definición simple de:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8381"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learned",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8382"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Bet ha producido aprendizaje cuando:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8383"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "existía una hipótesis explícita;",
                                                          "existía una señal esperada;",
                                                          "se obtuvo evidencia;",
                                                          "se comparó esperado vs observado;",
                                                          "se documentó el insight relevante;",
                                                          "se tomó una decisión."
                                                      ],
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8384–P8389"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin el punto 6:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8390"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hubo información, pero no se cerró el Learning Loop.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8391"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8380"
                                         }
                                     ]
                     },
                     {
                         "id":  "operating-cadence-consolidada",
                         "title":  "Operating Cadence consolidada",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Feedback \u0026 Learning Loop no introduce una nueva capa de ceremonias.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8394"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se integra así:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8395"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-054",
                                                          "caption":  "Operating Cadence consolidada",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Cadencia",
                                                                          "Foco"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Weekly Flow Review",
                                                                           "Bloqueos y señales críticas"
                                                                       ],
                                                                       [
                                                                           "Biweekly Opportunity Review",
                                                                           "Evidence + Discovery + decisiones"
                                                                       ],
                                                                       [
                                                                           "Customer Review",
                                                                           "Validación cuando sea necesaria"
                                                                       ],
                                                                       [
                                                                           "Monthly Outcome Review",
                                                                           "Expected vs Actual vs Learning"
                                                                       ],
                                                                       [
                                                                           "Quarterly Direction Review",
                                                                           "Aprendizaje estratégico y reasignación"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "16. Feedback \u0026 Learning Loop",
                                                                         "locator":  "T54"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto protege el principio Lean:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8396"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "más aprendizaje, no más reuniones.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8397"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8393"
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
                                            "text":  "El SEIF Feedback \u0026 Learning Loop queda resumido en:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8400"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL → PATTERN → EVIDENCE → INSIGHT → OPPORTUNITY → BET → RESULT → LEARNING → DECISION ↺",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8401"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y opera transversalmente sobre:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8402"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer + Product + UX + CS + Support + Marketing + Development + SRE + Analytics.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8403"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La regla fundamental es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8404"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ninguna señal se convierte automáticamente en solución; ninguna Bet termina en el release; ningún aprendizaje está completo hasta que modifica una decisión.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8405"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8399"
                                         }
                                     ]
                     },
                     {
                         "id":  "resultado-esperado",
                         "title":  "Resultado esperado",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo busca producir seis cambios sistémicos.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8408"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menor Rework",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8409"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validando antes y durante Delivery.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8410"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menor Feature Waste",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8411"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Construyendo sobre problemas mejor entendidos.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8412"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mayor calidad de priorización",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8413"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilizando evidencia compartida.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8414"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menor Learning Lead Time",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8415"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Obteniendo respuestas antes.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8416"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mayor conexión cliente–producto",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8417"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin convertir solicitudes individuales en roadmap automático.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8418"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mayor adaptabilidad",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8419"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cambiando decisiones cuando cambia la evidencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8420"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8407"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-final",
                         "title":  "Diagnóstico final",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no evidencia que SEIF tenga un problema de falta de cercanía con el cliente.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8423"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tampoco evidencia ausencia de datos o feedback.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8424"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia una oportunidad más estructural:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8425"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF posee múltiples sensores organizacionales, pero todavía necesita convertirlos en un único sistema de aprendizaje.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8426"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success conoce el contexto de las cuentas.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8427"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte observa la fricción explícita.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8428"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX observa comportamiento y experiencia.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8429"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto integra problemas y decisiones.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8430"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing observa mercado y comunicación.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8431"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo conoce restricciones y factibilidad.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8432"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE observa confiabilidad, deuda y operación.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8433"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards muestran comportamiento cuantitativo.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8434"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE no busca centralizar esas competencias.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8435"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Busca conectar la evidencia que producen.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8436"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, la evolución propuesta es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8437"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De una organización que recibe feedback",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8438"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "a:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8439"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "una organización que aprende sistemáticamente.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8440"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Y el principio que debe gobernar el modelo completo es:",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8441"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La velocidad de SEIF no debe medirse únicamente por qué tan rápido construye. También por qué tan rápido descubre que está construyendo lo correcto, aprende de lo que ocurre y cambia de dirección cuando la evidencia lo exige.",
                                            "source":  {
                                                           "title":  "16. Feedback \u0026 Learning Loop",
                                                           "locator":  "P8442"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "16. Feedback \u0026 Learning Loop",
                                             "locator":  "P8422"
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
                    "operating-model",
                    "discovery",
                    "prioritization",
                    "delivery",
                    "adoption-growth",
                    "roles",
                    "north-star",
                    "governance",
                    "artifacts"
                ],
    "source":  {
                   "title":  "16. Feedback \u0026 Learning Loop",
                   "locator":  "P7299–P8442",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
