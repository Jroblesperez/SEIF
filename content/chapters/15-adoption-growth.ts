import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "adoption-growth",
    "group":  "Operating Model",
    "title":  "ADOPT: Adoption, valor y Growth",
    "sourceTitle":  "15. Adoption \u0026 Growth Model",
    "eyebrow":  "15 · Adopt",
    "summary":  "Distingue disponibilidad, activación, TTV, adopción, adherencia, autonomía y evidencia de Outcome antes de inferir retención o expansión.",
    "takeaway":  "Uso es señal; valor exige criterio de éxito, comportamiento relevante y Outcome observable.",
    "executive":  {
                      "keyFindings":  [
                                          "Activation exige primer criterio de éxito; login y configuración no bastan.",
                                          "TTV mide tiempo hasta primer valor, con eventos operacionales todavía pendientes de aprobación.",
                                          "Adoption es uso relevante recurrente; Adherence sostiene el criterio de éxito.",
                                          "Retention, Expansion y North Star permanecen hipótesis/relaciones por validar."
                                      ],
                      "implication":  "SEIF puede pasar de medir utilización a gestionar el ciclo de valor sin asumir causalidad comercial.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "flow",
                      "sources":  [
                                      {
                                          "title":  "15. Adoption \u0026 Growth Model",
                                          "locator":  "P6371–P7298"
                                      }
                                  ]
                  },
    "clientValidations":  [
                              {
                                  "id":  "CL-06",
                                  "subject":  "North Star candidate",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-08",
                                  "subject":  "Activation, TTV, Adoption y Adherence",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-13",
                                  "subject":  "Growth / Expansion ownership",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              }
                          ],
    "operatingConcepts":  [
                              {
                                  "id":  "adoption-value-system",
                                  "title":  "ADOPT — Adoption \u0026 Growth Model",
                                  "canonicalLayers":  [
                                                          "ADOPT",
                                                          "LEARN",
                                                          "ROLES",
                                                          "METRICS",
                                                          "EVIDENCE"
                                                      ],
                                  "sourceChapters":  [
                                                         "15"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "15. Adoption \u0026 Growth Model",
                                                             "locator":  "P6371–P7298"
                                                         }
                                                     ],
                                  "contentClass":  "recommendation",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "HOW":  "SOURCE COMPLETE",
                                                       "WHEN":  "SOURCE COMPLETE",
                                                       "INPUT":  "SOURCE COMPLETE",
                                                       "OUTPUT":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "METRIC":  "SOURCE COMPLETE",
                                                       "EXAMPLE":  "SOURCE COMPLETE",
                                                       "ACTIVATION CRITERIA":  "SOURCE COMPLETE",
                                                       "TTV DEFINITION":  "SOURCE COMPLETE",
                                                       "ADHERENCE CRITERIA":  "SOURCE COMPLETE",
                                                       "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                       "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                       "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                       "DECISION LOOP":  "SOURCE COMPLETE",
                                                       "BUSINESS LINKAGE":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "ARTIFACT":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE PARTIAL"
                                                   },
                                  "gapIds":  [
                                                 "CL-04",
                                                 "CL-05",
                                                 "CL-06",
                                                 "CL-07",
                                                 "CL-08",
                                                 "CL-10",
                                                 "CL-11",
                                                 "CL-13",
                                                 "CL-15"
                                             ]
                              }
                          ],
    "adoptionSemantics":  [
                              {
                                  "term":  "AVAILABILITY",
                                  "definition":  "Capacidad contratada/elegible y disponible; no implica configuración, activación o valor.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6403–P6418; P6453–P6471"
                                             }
                              },
                              {
                                  "term":  "ACTIVATION",
                                  "definition":  "El usuario logra su primer criterio de éxito mediante un evento observable y relevante.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6453–P6465; P6528–P6538"
                                             }
                              },
                              {
                                  "term":  "USAGE",
                                  "definition":  "Actividad o comportamiento observado; puede ser señal, pero no prueba valor u Outcome.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6540–P6551; P6568–P6586"
                                             }
                              },
                              {
                                  "term":  "ADOPTION",
                                  "definition":  "Uso recurrente relevante, consistente con el Outcome y definido por capacidad, módulo y rol.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6453–P6465; P6540–P6551"
                                             }
                              },
                              {
                                  "term":  "ADHERENCE",
                                  "definition":  "Sostenimiento del criterio de éxito durante el tiempo esperado; el periodo concreto no está definido.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6553–P6566"
                                             }
                              },
                              {
                                  "term":  "CUSTOMER AUTONOMY",
                                  "definition":  "Capacidad de obtener el resultado como Self-Service, Assisted o Dependent sin tratar toda asistencia como desperdicio.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6627–P6659"
                                             }
                              },
                              {
                                  "term":  "CUSTOMER VALUE",
                                  "definition":  "Primer éxito, resultado recurrente y Outcome observable para usuario/cliente; no equivale a actividad.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6371–P6387; P6568–P6586"
                                             }
                              },
                              {
                                  "term":  "RETENTION",
                                  "definition":  "Resultado de negocio a evaluar; la fuente no afirma causalidad con adopción o adherencia.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6764–P6797; P6882–P6890"
                                             }
                              },
                              {
                                  "term":  "EXPANSION",
                                  "definition":  "Oportunidad potencial respaldada por evidencia de valor y necesidad adicional; no está probada como Outcome.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6903–P6927"
                                             }
                              },
                              {
                                  "term":  "BUSINESS VALUE",
                                  "definition":  "Retention, Expansion y MRR aparecen como capa Business, sin fórmula causal aprobada.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P7102–P7135"
                                             }
                              }
                          ],
    "adoptionConcepts":  [
                             {
                                 "id":  "activation",
                                 "title":  "Activation",
                                 "purpose":  "Identificar la primera evidencia de valor mínimo.",
                                 "behavior":  "Primer criterio de éxito observable por capacidad.",
                                 "successCondition":  "Evento conectado al criterio de éxito.",
                                 "evidence":  [
                                                  "first success event"
                                              ],
                                 "metric":  "Activation rate",
                                 "decisionEnabled":  "Diagnosticar barrera y seleccionar intervención",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "15. Adoption \u0026 Growth Model",
                                                            "locator":  "P6528–P6538"
                                                        }
                                                    ],
                                 "contentClass":  "recommendation",
                                 "completeness":  {
                                                      "WHAT":  "SOURCE COMPLETE",
                                                      "WHY":  "SOURCE COMPLETE",
                                                      "HOW":  "SOURCE COMPLETE",
                                                      "WHEN":  "SOURCE COMPLETE",
                                                      "INPUT":  "SOURCE COMPLETE",
                                                      "OUTPUT":  "SOURCE COMPLETE",
                                                      "DECISION":  "SOURCE COMPLETE",
                                                      "METRIC":  "SOURCE COMPLETE",
                                                      "EXAMPLE":  "SOURCE COMPLETE",
                                                      "ACTIVATION CRITERIA":  "SOURCE COMPLETE",
                                                      "TTV DEFINITION":  "SOURCE COMPLETE",
                                                      "ADHERENCE CRITERIA":  "SOURCE COMPLETE",
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "BUSINESS LINKAGE":  "SOURCE COMPLETE",
                                                      "WHO":  "SOURCE PARTIAL",
                                                      "ARTIFACT":  "SOURCE PARTIAL",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "ttv",
                                 "title":  "Time to Value (TTV)",
                                 "purpose":  "Medir velocidad hasta primer valor.",
                                 "behavior":  "Transcurso desde Start Event definido hasta First Success Event.",
                                 "successCondition":  "Primer criterio de éxito del usuario.",
                                 "evidence":  [
                                                  "start event",
                                                  "first success event",
                                                  "friction signals"
                                              ],
                                 "metric":  "TTV",
                                 "decisionEnabled":  "Diagnosticar barrera y seleccionar intervención",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "15. Adoption \u0026 Growth Model",
                                                            "locator":  "P6503–P6526"
                                                        }
                                                    ],
                                 "contentClass":  "recommendation",
                                 "completeness":  {
                                                      "WHAT":  "SOURCE COMPLETE",
                                                      "WHY":  "SOURCE COMPLETE",
                                                      "HOW":  "SOURCE COMPLETE",
                                                      "WHEN":  "SOURCE COMPLETE",
                                                      "INPUT":  "SOURCE COMPLETE",
                                                      "OUTPUT":  "SOURCE COMPLETE",
                                                      "DECISION":  "SOURCE COMPLETE",
                                                      "METRIC":  "SOURCE COMPLETE",
                                                      "EXAMPLE":  "SOURCE COMPLETE",
                                                      "ACTIVATION CRITERIA":  "SOURCE COMPLETE",
                                                      "TTV DEFINITION":  "SOURCE COMPLETE",
                                                      "ADHERENCE CRITERIA":  "SOURCE COMPLETE",
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "BUSINESS LINKAGE":  "SOURCE COMPLETE",
                                                      "WHO":  "SOURCE PARTIAL",
                                                      "ARTIFACT":  "SOURCE PARTIAL",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "adoption",
                                 "title":  "Adoption",
                                 "purpose":  "Observar uso relevante recurrente consistente con el Outcome.",
                                 "behavior":  "Comportamiento esperado por módulo y rol.",
                                 "successCondition":  "Uso recurrente relevante.",
                                 "evidence":  [
                                                  "behavior",
                                                  "eligible population"
                                              ],
                                 "metric":  "Adoption rate",
                                 "decisionEnabled":  "Diagnosticar barrera y seleccionar intervención",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "15. Adoption \u0026 Growth Model",
                                                            "locator":  "P6540–P6551"
                                                        }
                                                    ],
                                 "contentClass":  "recommendation",
                                 "completeness":  {
                                                      "WHAT":  "SOURCE COMPLETE",
                                                      "WHY":  "SOURCE COMPLETE",
                                                      "HOW":  "SOURCE COMPLETE",
                                                      "WHEN":  "SOURCE COMPLETE",
                                                      "INPUT":  "SOURCE COMPLETE",
                                                      "OUTPUT":  "SOURCE COMPLETE",
                                                      "DECISION":  "SOURCE COMPLETE",
                                                      "METRIC":  "SOURCE COMPLETE",
                                                      "EXAMPLE":  "SOURCE COMPLETE",
                                                      "ACTIVATION CRITERIA":  "SOURCE COMPLETE",
                                                      "TTV DEFINITION":  "SOURCE COMPLETE",
                                                      "ADHERENCE CRITERIA":  "SOURCE COMPLETE",
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "BUSINESS LINKAGE":  "SOURCE COMPLETE",
                                                      "WHO":  "SOURCE PARTIAL",
                                                      "ARTIFACT":  "SOURCE PARTIAL",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "adherence",
                                 "title":  "Adherence",
                                 "purpose":  "Determinar si el comportamiento de valor se sostiene.",
                                 "behavior":  "Sostenimiento del criterio de éxito; periodo pendiente.",
                                 "successCondition":  "Criterio de éxito mantenido.",
                                 "evidence":  [
                                                  "sustained behavior"
                                              ],
                                 "metric":  "Adherence rate",
                                 "decisionEnabled":  "Diagnosticar barrera y seleccionar intervención",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "15. Adoption \u0026 Growth Model",
                                                            "locator":  "P6553–P6566"
                                                        }
                                                    ],
                                 "contentClass":  "recommendation",
                                 "completeness":  {
                                                      "WHAT":  "SOURCE COMPLETE",
                                                      "WHY":  "SOURCE COMPLETE",
                                                      "HOW":  "SOURCE COMPLETE",
                                                      "WHEN":  "SOURCE COMPLETE",
                                                      "INPUT":  "SOURCE COMPLETE",
                                                      "OUTPUT":  "SOURCE COMPLETE",
                                                      "DECISION":  "SOURCE COMPLETE",
                                                      "METRIC":  "SOURCE COMPLETE",
                                                      "EXAMPLE":  "SOURCE COMPLETE",
                                                      "ACTIVATION CRITERIA":  "SOURCE COMPLETE",
                                                      "TTV DEFINITION":  "SOURCE COMPLETE",
                                                      "ADHERENCE CRITERIA":  "SOURCE COMPLETE",
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "BUSINESS LINKAGE":  "SOURCE COMPLETE",
                                                      "WHO":  "SOURCE PARTIAL",
                                                      "ARTIFACT":  "SOURCE PARTIAL",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "autonomy",
                                 "title":  "Customer Autonomy",
                                 "purpose":  "Distinguir Self-Service, Assisted y Dependent.",
                                 "behavior":  "Obtención de resultado con nivel observable de intervención SEIF.",
                                 "successCondition":  "Asistencia prevista o dependencia recurrente diferenciadas.",
                                 "evidence":  [
                                                  "support dependency",
                                                  "CS intervention",
                                                  "manual operation"
                                              ],
                                 "metric":  "Autonomy classification",
                                 "decisionEnabled":  "Diagnosticar barrera y seleccionar intervención",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "15. Adoption \u0026 Growth Model",
                                                            "locator":  "P6627–P6659"
                                                        }
                                                    ],
                                 "contentClass":  "recommendation",
                                 "completeness":  {
                                                      "WHAT":  "SOURCE COMPLETE",
                                                      "WHY":  "SOURCE COMPLETE",
                                                      "HOW":  "SOURCE COMPLETE",
                                                      "WHEN":  "SOURCE COMPLETE",
                                                      "INPUT":  "SOURCE COMPLETE",
                                                      "OUTPUT":  "SOURCE COMPLETE",
                                                      "DECISION":  "SOURCE COMPLETE",
                                                      "METRIC":  "SOURCE COMPLETE",
                                                      "EXAMPLE":  "SOURCE COMPLETE",
                                                      "ACTIVATION CRITERIA":  "SOURCE COMPLETE",
                                                      "TTV DEFINITION":  "SOURCE COMPLETE",
                                                      "ADHERENCE CRITERIA":  "SOURCE COMPLETE",
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "BUSINESS LINKAGE":  "SOURCE COMPLETE",
                                                      "WHO":  "SOURCE PARTIAL",
                                                      "ARTIFACT":  "SOURCE PARTIAL",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "customer-value",
                                 "title":  "Customer value evidence",
                                 "purpose":  "Conectar actividad con Success y Outcome Metrics.",
                                 "behavior":  "Success behavior y Outcome observable.",
                                 "successCondition":  "Resultado central alcanzado y sostenido.",
                                 "evidence":  [
                                                  "success metric",
                                                  "Outcome metric"
                                              ],
                                 "metric":  "Customers achieving recurring value",
                                 "decisionEnabled":  "Diagnosticar barrera y seleccionar intervención",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "15. Adoption \u0026 Growth Model",
                                                            "locator":  "P6568–P6586; P7102–P7135"
                                                        }
                                                    ],
                                 "contentClass":  "recommendation",
                                 "completeness":  {
                                                      "WHAT":  "SOURCE COMPLETE",
                                                      "WHY":  "SOURCE COMPLETE",
                                                      "HOW":  "SOURCE COMPLETE",
                                                      "WHEN":  "SOURCE COMPLETE",
                                                      "INPUT":  "SOURCE COMPLETE",
                                                      "OUTPUT":  "SOURCE COMPLETE",
                                                      "DECISION":  "SOURCE COMPLETE",
                                                      "METRIC":  "SOURCE COMPLETE",
                                                      "EXAMPLE":  "SOURCE COMPLETE",
                                                      "ACTIVATION CRITERIA":  "SOURCE COMPLETE",
                                                      "TTV DEFINITION":  "SOURCE COMPLETE",
                                                      "ADHERENCE CRITERIA":  "SOURCE COMPLETE",
                                                      "VALUE EVIDENCE":  "SOURCE COMPLETE",
                                                      "FEEDBACK SOURCE":  "SOURCE COMPLETE",
                                                      "LEARNING TRIGGER":  "SOURCE COMPLETE",
                                                      "DECISION LOOP":  "SOURCE COMPLETE",
                                                      "BUSINESS LINKAGE":  "SOURCE COMPLETE",
                                                      "WHO":  "SOURCE PARTIAL",
                                                      "ARTIFACT":  "SOURCE PARTIAL",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             }
                         ],
    "timeToValue":  {
                        "canonicalTerm":  "Time to Value (TTV)",
                        "definition":  "Tiempo hasta que el usuario alcanza su primer criterio de éxito.",
                        "startEvent":  "Debe definirse por capacidad; la fuente no fija un evento universal.",
                        "endEvent":  "First Success Event / primer criterio de éxito.",
                        "population":  "Usuarios o clientes elegibles de la capacidad relevante; definición operacional pendiente.",
                        "momentOfTruth":  "Control de Rondas: primer recorrido completado correctamente con confirmación.",
                        "successCondition":  "Primer criterio de éxito definido para el usuario.",
                        "decisionEnabled":  "Detectar fricción en journey, configuración, onboarding, relevancia o autonomía.",
                        "source":  {
                                       "title":  "15. Adoption \u0026 Growth Model",
                                       "locator":  "P6503–P6538"
                                   },
                        "validationStatus":  "pending"
                    },
    "customerOutcomeConnections":  [
                                       {
                                           "element":  "Activation → Outcome",
                                           "status":  "SUPPORTED",
                                           "rationale":  "El evento de activación se conecta al criterio de éxito.",
                                           "source":  {
                                                          "title":  "15. Adoption \u0026 Growth Model",
                                                          "locator":  "P6528–P6538"
                                                      }
                                       },
                                       {
                                           "element":  "TTV → Outcome",
                                           "status":  "SUPPORTED",
                                           "rationale":  "TTV termina en primer criterio de éxito.",
                                           "source":  {
                                                          "title":  "15. Adoption \u0026 Growth Model",
                                                          "locator":  "P6503–P6526"
                                                      }
                                       },
                                       {
                                           "element":  "Adoption → Outcome",
                                           "status":  "SUPPORTED",
                                           "rationale":  "Adoption exige comportamiento consistente con Outcome.",
                                           "source":  {
                                                          "title":  "15. Adoption \u0026 Growth Model",
                                                          "locator":  "P6540–P6551"
                                                      }
                                       },
                                       {
                                           "element":  "Adherence → Outcome",
                                           "status":  "SUPPORTED",
                                           "rationale":  "Adherence sostiene el criterio de éxito.",
                                           "source":  {
                                                          "title":  "15. Adoption \u0026 Growth Model",
                                                          "locator":  "P6553–P6566"
                                                      }
                                       },
                                       {
                                           "element":  "Autonomy → Outcome",
                                           "status":  "PARTIAL",
                                           "rationale":  "Autonomy explica dependencia al obtener valor, pero no demuestra por sí sola el Outcome.",
                                           "source":  {
                                                          "title":  "15. Adoption \u0026 Growth Model",
                                                          "locator":  "P6627–P6659"
                                                      }
                                       }
                                   ],
    "operatingExamples":  [
                              {
                                  "name":  "Control de Rondas",
                                  "classification":  "EXAMPLE",
                                  "details":  {
                                                  "Outcome":  "SOURCE MISSING en Chapter 15",
                                                  "actors":  [
                                                                 "Vigilante",
                                                                 "Supervisor",
                                                                 "Cliente/Gerente"
                                                             ],
                                                  "journey":  "SOURCE PARTIAL",
                                                  "MomentOfTruth":  "Primer recorrido completado correctamente con confirmación",
                                                  "TTV":  "Tiempo hasta el primer criterio de éxito; sin fórmula o target",
                                                  "Adherence":  "Sostenimiento del criterio de éxito; periodo no especificado",
                                                  "successCriteria":  [
                                                                          "Vigilante: éxito operacional",
                                                                          "Supervisor: capacidad de verificar sin reproceso",
                                                                          "Cliente/Gerente: capacidad de demostrar y utilizar información confiable"
                                                                      ]
                                              },
                                  "source":  {
                                                 "title":  "15. Adoption \u0026 Growth Model",
                                                 "locator":  "P6532–P6533; P6962–P6972"
                                             }
                              }
                          ],
    "growthRelationships":  [
                                {
                                    "from":  "Adoption",
                                    "to":  "Growth",
                                    "classification":  "ASSESSMENT INTERPRETATION",
                                    "rationale":  "El modelo define Activation, Adoption, Expansion y Retention Growth sin probar causalidad.",
                                    "source":  {
                                                   "title":  "15. Adoption \u0026 Growth Model",
                                                   "locator":  "P6764–P6797"
                                               },
                                    "validationStatus":  "pending"
                                },
                                {
                                    "from":  "Adherence",
                                    "to":  "Retention",
                                    "classification":  "HYPOTHESIS",
                                    "rationale":  "Se propone que adherencia sostenida protege la relación; debe medirse.",
                                    "source":  {
                                                   "title":  "15. Adoption \u0026 Growth Model",
                                                   "locator":  "P6764–P6777; P6882–P6890"
                                               },
                                    "validationStatus":  "pending"
                                },
                                {
                                    "from":  "Customer Value",
                                    "to":  "Expansion",
                                    "classification":  "HYPOTHESIS",
                                    "rationale":  "La expansión debe basarse en evidencia de valor más oportunidad adicional; no es resultado probado.",
                                    "source":  {
                                                   "title":  "15. Adoption \u0026 Growth Model",
                                                   "locator":  "P6903–P6927"
                                               },
                                    "validationStatus":  "pending"
                                },
                                {
                                    "from":  "Adoption",
                                    "to":  "Retention",
                                    "classification":  "HYPOTHESIS",
                                    "rationale":  "La fuente rechaza afirmar que baja adopción causa churn sin historia suficiente.",
                                    "source":  {
                                                   "title":  "15. Adoption \u0026 Growth Model",
                                                   "locator":  "P6882–P6890"
                                               },
                                    "validationStatus":  "pending"
                                }
                            ],
    "northStarSupport":  {
                             "candidate":  "Recurring Value / Clientes con Valor Recurrente · NORTH STAR CANDIDATE",
                             "contentClass":  "hypothesis",
                             "supportStatus":  "PARTIAL",
                             "rationale":  "Chapters 15–16 fortalecen la dirección hacia valor recurrente y evidencia, pero no aportan fórmula corporativa ni correlación de negocio validada.",
                             "source":  {
                                            "title":  "15. Adoption \u0026 Growth Model",
                                            "locator":  "P6799–P6835; P7102–P7135"
                                        },
                             "validationStatus":  "pending"
                         },
    "adoptionLearningMetrics":  [
                                    {
                                        "name":  "Eligible users/customers",
                                        "metricClass":  "USAGE",
                                        "definition":  "Población con derecho o acceso a la capacidad.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% correctly configured",
                                        "metricClass":  "USAGE",
                                        "definition":  "Población configurada correctamente.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% reaching first success",
                                        "metricClass":  "ACTIVATION",
                                        "definition":  "Proporción que alcanza primer criterio de éxito.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45"
                                                   },
                                        "validationStatus":  "pending",
                                        "population":  "eligible population"
                                    },
                                    {
                                        "name":  "Time to Value (TTV)",
                                        "metricClass":  "TTV",
                                        "definition":  "Tiempo hasta primer valor.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45; P6503–P6526"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% relevant recurrent use",
                                        "metricClass":  "ADOPTION",
                                        "definition":  "Uso relevante según capacidad, módulo y rol.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45; P6540–P6551"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% sustaining success criteria",
                                        "metricClass":  "ADHERENCE",
                                        "definition":  "Sostenimiento del criterio de éxito; periodo pendiente.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45; P6553–P6566"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Tickets / related interventions",
                                        "metricClass":  "SUPPORT / FRICTION",
                                        "definition":  "Fricción e intervención asociadas al funnel.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% self-service / assisted / dependent",
                                        "metricClass":  "AUTONOMY",
                                        "definition":  "Clasificación operativa de autonomía.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45; P6627–P6639"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "License utilization",
                                        "metricClass":  "USAGE",
                                        "definition":  "Utilización sobre capacidad relevante; trigger de investigación.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45; P6588–P6609"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "% reaching success criteria",
                                        "metricClass":  "CUSTOMER VALUE",
                                        "definition":  "Población que alcanza criterio de éxito.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Accounts below defined threshold",
                                        "metricClass":  "SUPPORT / FRICTION",
                                        "definition":  "Cuentas bajo un umbral todavía no definido.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Accounts with additional opportunity evidence",
                                        "metricClass":  "EXPANSION",
                                        "definition":  "Cuentas con evidencia de valor y oportunidad adicional.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "T45; P6903–P6927"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Retention",
                                        "metricClass":  "RETENTION",
                                        "definition":  "Resultado de negocio cuya relación con adopción requiere evidencia histórica.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "P7102–P7135"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "Expansion",
                                        "metricClass":  "EXPANSION",
                                        "definition":  "Crecimiento respaldado por valor; causalidad no probada.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "P7102–P7135"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "name":  "MRR",
                                        "metricClass":  "RETENTION",
                                        "definition":  "Métrica Business mencionada en el Metric Tree; definición operacional no provista.",
                                        "decisionEnabled":  "Diagnosticar funnel, fricción, riesgo u oportunidad sin inferir causalidad",
                                        "baseline":  "SOURCE MISSING",
                                        "target":  "SOURCE MISSING",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "P7102–P7135"
                                                   },
                                        "validationStatus":  "pending"
                                    }
                                ],
    "learningCadences":  [
                             {
                                 "name":  "Customer Signals",
                                 "activityType":  "DATA COLLECTION",
                                 "frequency":  "weekly",
                                 "purpose":  "CS y Soporte observan excepciones y riesgos en operación habitual.",
                                 "source":  {
                                                "title":  "15. Adoption \u0026 Growth Model",
                                                "locator":  "P7057–P7078"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Growth / Discovery",
                                 "activityType":  "REVIEW",
                                 "frequency":  "biweekly",
                                 "purpose":  "Analizar Opportunities de adopción y experimentos cuando corresponda.",
                                 "source":  {
                                                "title":  "15. Adoption \u0026 Growth Model",
                                                "locator":  "P7057–P7078"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Outcome \u0026 Adoption Review",
                                 "activityType":  "DECISION",
                                 "frequency":  "monthly",
                                 "purpose":  "Observar TTV, activación, adherencia, fricción, autonomía, riesgo y aprendizajes.",
                                 "source":  {
                                                "title":  "15. Adoption \u0026 Growth Model",
                                                "locator":  "P7057–P7078"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Business / Product Direction",
                                 "activityType":  "DECISION",
                                 "frequency":  "quarterly",
                                 "purpose":  "Analizar relación todavía no validada entre valor, retention, expansion e inversión.",
                                 "source":  {
                                                "title":  "15. Adoption \u0026 Growth Model",
                                                "locator":  "P7057–P7078"
                                            },
                                 "validationStatus":  "pending"
                             }
                         ],
    "adoptionLearningTooling":  [
                                    {
                                        "tool":  "Analytics / dashboards",
                                        "classification":  "CURRENT STATE",
                                        "relationship":  "Utilización, usuarios, módulos y funnel; actividad no equivale a valor.",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "P6373–P6383; P7137–P7154"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "tool":  "Jira",
                                        "classification":  "RECOMMENDATION",
                                        "relationship":  "Trazabilidad Outcome → Bet → Delivery → Release.",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "P7188–P7203"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "tool":  "Jira Service Management",
                                        "classification":  "RECOMMENDATION",
                                        "relationship":  "Tickets → módulo → fricción → recurrencia.",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "P7188–P7203"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "tool":  "Confluence",
                                        "classification":  "RECOMMENDATION",
                                        "relationship":  "Playbook, criterios y aprendizajes.",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "P7188–P7203"
                                                   },
                                        "validationStatus":  "pending"
                                    },
                                    {
                                        "tool":  "AI",
                                        "classification":  "H1 / TO VALIDATE",
                                        "relationship":  "Clustering, patrones, resúmenes y apoyo a CS bajo reglas validadas.",
                                        "source":  {
                                                       "title":  "15. Adoption \u0026 Growth Model",
                                                       "locator":  "P7174–P7186"
                                                   },
                                        "validationStatus":  "pending"
                                    }
                                ],
    "antiPatternAssessments":  [
                                   {
                                       "antiPattern":  "Usage = Value",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Activity, Success y Outcome metrics se separan.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P6568–P6586"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Login = Activation",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Login no demuestra valor; Activation exige primer criterio de éxito.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P6519–P6538"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Release = Adoption",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "El funnel comienza tras release y distingue Activated/Adopted/Adherent.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P6389–P6418"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Adoption without success criteria",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Comportamiento y evento deben conectarse al criterio de éxito.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P6503–P6551"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Vanity metrics",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Usuarios, logins, clicks, licencias y módulos no bastan como éxito.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P7083–P7100"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "CS used as permanent workaround",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "CS as Human Middleware y Failure Demand aparecen explícitamente.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P6641–P6659; P7219–P7236"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Support hiding product friction",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Tickets se convierten en señales según funnel y patrón.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P6712–P6723"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "North Star theatre",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "No existe evidencia para fórmula corporativa única ni correlación de negocio validada.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P6799–P6811"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Retention causality assumed",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "La fuente rechaza afirmar causalidad sin historia.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P6882–P6890"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Expansion causality assumed",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Expansion requiere evidencia de valor más oportunidad adicional.",
                                       "source":  {
                                                      "title":  "15. Adoption \u0026 Growth Model",
                                                      "locator":  "P6903–P6927"
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
                                            "text":  "El SEIF Adoption \u0026 Growth Model define cómo una capacidad liberada pasa desde estar técnicamente disponible hasta convertirse en uso relevante, valor recurrente, retención y potencial expansión dentro de la base instalada.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6373"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo responde directamente a la evidencia observada durante el assessment:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6374"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "SEIF ya mide utilización de licencias, usuarios y módulos;",
                                                          "Customer Success acompaña implementación y adopción;",
                                                          "existe una diferencia relevante entre licencias contratadas y utilizadas;",
                                                          "existen usuarios creados que no necesariamente interactúan activamente con la plataforma;",
                                                          "Customer Success identifica dependencia importante del administrador del cliente;",
                                                          "SRE reporta situaciones donde determinadas operaciones requieren intervención de SEIF;",
                                                          "Marketing está desarrollando una capacidad más estructurada y puede aportar a adopción y comunicación de valor;",
                                                          "Producto ya ha incorporado conceptualmente TTV, adherencia y criterios de éxito;",
                                                          "el uso no equivale automáticamente a valor;",
                                                          "el release no representa el final del ciclo de Producto."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6375–P6384"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el reto no es únicamente incrementar actividad.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6385"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El reto es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6386"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "convertir disponibilidad en activación, activación en adopción, adopción en adherencia y adherencia en valor sostenible.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6387"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6372"
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
                                            "text":  "El flujo completo definido para SEIF es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6390"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL → FRAME → DISCOVER → DECIDE → VALIDATE → DELIVER → RELEASE → ADOPT → MEASURE \u0026 LEARN",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6391"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption \u0026 Growth comienza después del release, pero se diseña desde antes.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6392"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La adopción no puede tratarse como una responsabilidad exclusiva de Customer Success posterior a la entrega.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6393"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe ser considerada desde:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6394"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Discovery;",
                                                          "UX;",
                                                          "configuración;",
                                                          "onboarding;",
                                                          "observabilidad;",
                                                          "comunicación;",
                                                          "soporte;",
                                                          "criterios de éxito."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6395–P6402"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La lógica es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6403"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6404"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6405"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eligible",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6406"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6407"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Configured",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6408"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6409"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activated",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6410"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6411"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopted",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6412"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6413"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherent",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6414"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6415"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Achieved",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6416"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6417"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retained / Expanded",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6418"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6389"
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
                                            "text":  "El cambio requerido es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6421"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AS-IS conceptual",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6422"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feature disponible",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6423"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6424"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente informado / implementado",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6425"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6426"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Uso",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6427"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6428"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte / acompañamiento",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6429"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TO-BE",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6430"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome definido",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6431"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6432"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption target definido",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6433"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6434"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6435"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6436"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6437"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6438"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6439"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6440"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6441"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6442"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6443"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6444"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome evidence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6445"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6446"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Risk / Retention / Expansion decision",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6447"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La diferencia principal es que SEIF deja de preguntar solamente:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6448"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Lo están usando?”",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6449"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y empieza a responder:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6450"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Quién debería usarlo, alcanzó su primer valor, lo sostiene y qué significa esto para la relación con el cliente?”",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6451"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6420"
                                         }
                                     ]
                     },
                     {
                         "id":  "adoption-no-es-una-unica-metrica",
                         "title":  "Adoption no es una única métrica",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidencia que SEIF ya observa utilización y adopción.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6454"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE separa cinco estados porque representan fenómenos diferentes.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6455"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Eligible",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6456"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario o cliente tiene acceso o derecho a utilizar una capacidad.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6457"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Configured",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6458"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad está suficientemente preparada para ser utilizada.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6459"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Activated",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6460"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario logra su primer criterio de éxito.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6461"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Adopted",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6462"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario utiliza recurrentemente la capacidad de forma relevante.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6463"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Adherent",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6464"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario mantiene el comportamiento de éxito durante el tiempo esperado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6465"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una cuenta puede estar:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6466"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "contratada pero no configurada",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6467"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6468"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "configurada pero no activada",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6469"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6470"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "activada pero no adherente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6471"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada caso requiere una intervención diferente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6472"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6453"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
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
                                            "text":  "El modelo utiliza el siguiente funnel:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6475"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CONTRACTED / ELIGIBLE",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6476"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6477"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CONFIGURED",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6478"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6479"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ACTIVATED",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6480"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6481"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADOPTED",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6482"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6483"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADHERENT",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6484"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6485"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME ACHIEVED",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6486"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6487"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RETAINED / EXPANDED",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6488"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite analizar dónde se pierde valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6489"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No toda caída del funnel es un problema de Producto.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6490"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede originarse en:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6491"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "configuración;",
                                                          "onboarding;",
                                                          "experiencia;",
                                                          "implementación;",
                                                          "operación del cliente;",
                                                          "comunicación;",
                                                          "valor insuficiente;",
                                                          "dependencia;",
                                                          "restricciones técnicas."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6492–P6500"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es identificar la causa antes de decidir la intervención.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6501"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6474"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "time-to-value",
                         "title":  "Time to Value",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya ha definido TTV como:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6504"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "tiempo hasta que el usuario alcanza su primer criterio de éxito.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6505"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Adoption Model mantiene esa definición y la convierte en una métrica operacional.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6506"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada capacidad relevante deben definirse:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6507"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Start Event",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6508"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuándo comienza a tener sentido medir?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6509"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "First Success Event",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6510"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evento demuestra primer valor?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6511"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected TTV",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6512"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuál es el rango esperado?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6513"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction Signals",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6514"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué indica que el usuario está teniendo dificultades?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6515"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6516"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién observa la señal y qué hace cuando se incumple?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6517"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6503"
                                         }
                                     ]
                     },
                     {
                         "id":  "ttv-no-es-onboarding",
                         "title":  "TTV no es onboarding",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo mantiene la distinción ya desarrollada por SEIF:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6520"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Onboarding = proceso.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6521"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV = resultado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6522"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una capacitación completada no demuestra valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6523"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una cuenta configurada no demuestra valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6524"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un login no demuestra valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6525"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TTV termina cuando ocurre el primer criterio de éxito definido para el usuario.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6526"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6519"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "activation-model",
                         "title":  "Activation Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada módulo o capacidad relevante debe existir un evento de activación.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6529"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La activación responde:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6530"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuál es la primera evidencia observable de que el usuario obtuvo el valor mínimo esperado?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6531"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo ya definido por SEIF para Control de Rondas:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6532"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primer recorrido completado correctamente con confirmación.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6533"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El evento de activación debe ser:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6534"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "observable;",
                                                          "medible cuando sea viable;",
                                                          "relevante para el usuario;",
                                                          "conectado con el criterio de éxito."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6535–P6538"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6528"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "adoption-model",
                         "title":  "Adoption Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La adopción responde a una pregunta distinta:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6541"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El usuario continúa utilizando la capacidad de una forma consistente con el Outcome?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6542"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se mide únicamente mediante frecuencia.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6543"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La métrica depende de la capacidad.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6544"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos conceptuales:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6545"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "% de rondas correctamente completadas;",
                                                          "% de excepciones gestionadas;",
                                                          "frecuencia de consulta de reportes cuando esta consulta representa valor;",
                                                          "procesos completados de forma correcta;",
                                                          "usuarios activos dentro de la población elegible."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6546–P6550"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El comportamiento esperado debe definirse por módulo y rol.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6551"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6540"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "adherence-model",
                         "title":  "Adherence Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La adherencia determina si el comportamiento de valor se sostiene.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6554"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La secuencia es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6555"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6556"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primer éxito.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6557"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6558"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6559"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Uso relevante recurrente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6560"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6561"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6562"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sostenimiento del criterio de éxito.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6563"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La adherencia es particularmente importante para SEIF porque permite detectar:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6564"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Silent Churn",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6565"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clientes que continúan contratados pero cuya utilización o valor comienza a deteriorarse.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6566"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6553"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "uso-valor",
                         "title":  "Uso ≠ valor",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards actuales representan una capacidad importante para observar comportamiento.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6569"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6570"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "login",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6571"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no equivale a:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6572"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6573"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "usuario activo",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6574"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no equivale necesariamente a:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6575"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "criterio de éxito.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6576"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "módulo utilizado",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6577"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no demuestra automáticamente:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6578"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome logrado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6579"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el modelo separa:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6580"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activity Metrics",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6581"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué hizo el usuario.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6582"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Success Metrics",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6583"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué logró el usuario.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6584"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Metrics",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6585"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué cambió como consecuencia.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6586"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6568"
                                         }
                                     ]
                     },
                     {
                         "id":  "license-utilization-como-senal",
                         "title":  "License Utilization como señal",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La utilización de licencias es una señal relevante en SEIF porque existe una diferencia entre capacidad contratada y utilizada observada en los dashboards.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6589"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no interpreta automáticamente esa diferencia como:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6590"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "problema de producto;",
                                                          "riesgo de churn;",
                                                          "falta de implementación;",
                                                          "oportunidad comercial."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6591–P6594"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La utiliza como:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6595"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trigger for Investigation",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6596"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La secuencia TO-BE es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6597"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Low utilization signal",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6598"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6599"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Segment / Account",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6600"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6601"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnose",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6602"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6603"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cause",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6604"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6605"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Action",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6606"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6607"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Measure",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6608"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita responder a toda baja utilización con la misma intervención.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6609"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6588"
                                         }
                                     ]
                     },
                     {
                         "id":  "adoption-diagnosis",
                         "title":  "Adoption Diagnosis",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando una cuenta presenta adopción inferior a la esperada, el diagnóstico debe diferenciar al menos seis posibles causas.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6612"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Availability",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6613"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La capacidad realmente está disponible?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6614"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Configuration",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6615"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Está correctamente configurada?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6616"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Awareness",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6617"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El usuario conoce que existe y entiende para qué sirve?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6618"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Usability",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6619"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede utilizarla sin fricción excesiva?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6620"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Relevance",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6621"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La capacidad resuelve un problema relevante?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6622"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Autonomy",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6623"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede obtener valor sin depender excesivamente de SEIF?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6624"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La intervención se define después de identificar cuál de estas capas presenta la principal barrera.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6625"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6611"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
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
                         "id":  "customer-autonomy",
                         "title":  "Customer Autonomy",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas con SRE y Customer Success convergen en una señal clara:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6628"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "parte de la experiencia requiere intervención, configuración o conocimiento especializado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6629"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el Adoption Model incorpora:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6630"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Autonomy Index",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6631"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No como una puntuación compleja inicial, sino como una clasificación operativa.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6632"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Self-Service",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6633"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cliente logra el resultado sin intervención de SEIF.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6634"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Assisted",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6635"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Requiere acompañamiento previsto y acotado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6636"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dependent",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6637"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La operación o el valor dependen recurrentemente de intervención de SEIF.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6638"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los journeys clasificados como Dependent deben quedar visibles para Producto, UX, CS y Tecnología.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6639"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6627"
                                         }
                                     ]
                     },
                     {
                         "id":  "assisted-value-vs-failure-demand",
                         "title":  "Assisted Value vs Failure Demand",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No toda asistencia es desperdicio.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6642"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success puede agregar valor mediante:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6643"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "asesoría;",
                                                          "optimización;",
                                                          "acompañamiento estratégico;",
                                                          "identificación de oportunidades."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6644–P6647"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fricción aparece cuando CS o Soporte deben intervenir repetidamente porque:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6648"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "el usuario no entiende;",
                                                          "la configuración es demasiado compleja;",
                                                          "existe una limitación del producto;",
                                                          "un paso no puede completarse autónomamente;",
                                                          "el mismo problema reaparece."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6649–P6653"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo distingue:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6654"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value-Adding Assistance",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6655"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interacción que incrementa valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6656"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Failure Demand",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6657"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interacción necesaria para compensar una fricción del sistema.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6658"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta distinción es esencial para priorizar mejoras.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6659"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6641"
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
                         "id":  "customer-success-to-be",
                         "title":  "Customer Success TO-BE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success evoluciona desde acompañar implementaciones hacia gestionar sistemáticamente el ciclo de valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6662"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su responsabilidad operacional cubre:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6663"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Configuration",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6664"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6665"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6666"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6667"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6668"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6669"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6670"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6671"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6672"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6673"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Risk",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6674"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6675"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expansion signal",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6676"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto continúa siendo accountable por el Outcome del producto.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6677"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS hace visible si ese Outcome está llegando a las cuentas.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6678"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6661"
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
                         "id":  "responsabilidades-de-cs",
                         "title":  "Responsabilidades de CS",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success responde principalmente por:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6681"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "segmentar cuentas según estado de adopción;",
                                                          "observar señales de activación;",
                                                          "detectar cuentas que no alcanzan TTV;",
                                                          "identificar caída de adherencia;",
                                                          "diagnosticar fricción;",
                                                          "coordinar acciones con Producto;",
                                                          "facilitar acceso a clientes;",
                                                          "identificar señales de riesgo;",
                                                          "detectar oportunidades de expansión respaldadas por valor."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6682–P6690"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS no responde por corregir individualmente todos los problemas de producto.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6691"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su función es hacer visible el patrón y gestionar el éxito de la cuenta.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6692"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6680"
                                         }
                                     ]
                     },
                     {
                         "id":  "product-customer-success",
                         "title":  "Product + Customer Success",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La relación TO-BE se establece mediante un loop:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6695"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Outcome",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6696"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6697"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success Plan",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6698"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6699"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Behavior",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6700"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6701"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption Evidence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6702"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6703"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction / Risk",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6704"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6705"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Opportunity",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6706"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6707"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6708"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6709"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto elimina el modelo donde CS actúa únicamente como receptor de una solución ya terminada.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6710"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6694"
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
                         "id":  "support-adoption",
                         "title":  "Support + Adoption",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte aporta señales críticas.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6713"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los tickets deben analizarse también según su posición respecto del funnel.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6714"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Before Activation",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6715"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede indicar problemas de onboarding, configuración o UX.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6716"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "After Activation",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6717"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede indicar defectos, complejidad o dificultades de operación.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6718"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recurrent",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6719"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede indicar deuda de producto o experiencia.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6720"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "High-value user + recurring tickets",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6721"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede indicar que la capacidad genera valor, pero con costo operacional elevado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6722"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite evitar una lectura simplista donde “muchos tickets” significa automáticamente “mala funcionalidad”.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6723"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6712"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "marketing-dentro-del-adoption-model",
                         "title":  "Marketing dentro del Adoption Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La entrevista con Marketing evidenció una capacidad en evolución.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6726"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En el TO-BE, Marketing participa no solamente antes de la venta.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6727"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También puede habilitar:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6728"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Awareness",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6729"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario entiende que existe la capacidad.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6730"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value Communication",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6731"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comprende qué problema resuelve.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6732"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Launch",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6733"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El mercado o cliente conoce el cambio relevante.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6734"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption Campaigns",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6735"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Segmentos con potencial de uso reciben comunicación pertinente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6736"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Education",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6737"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contenido que reduce dependencia operativa cuando corresponda.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6738"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expansion",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6739"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidades ya existentes se comunican a clientes para quienes pueden generar valor adicional.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6740"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto constituye una capacidad de Product Marketing, no solamente comunicación corporativa.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6741"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6725"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "product-marketing-loop",
                         "title":  "Product Marketing Loop",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo conecta:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6744"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6745"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué Outcome habilitamos?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6746"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6747"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6748"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo lo comunicamos?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6749"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6750"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6751"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Lo entiende?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6752"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6753"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6754"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Lo utiliza?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6755"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6756"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6757"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Obtiene valor?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6758"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6759"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing + Product",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6760"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué aprendimos sobre posicionamiento y necesidad?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6761"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6762"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6743"
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
                         "id":  "growth-en-seif",
                         "title":  "Growth en SEIF",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Growth Model no se define como adquisición indiscriminada.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6765"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro del contexto observado, Growth tiene al menos cuatro dimensiones:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6766"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation Growth",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6767"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Más usuarios elegibles llegan al primer valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6768"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption Growth",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6769"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Más usuarios relevantes utilizan las capacidades apropiadas.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6770"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expansion Growth",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6771"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clientes con valor demostrado adoptan más usuarios, módulos o capacidades.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6772"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retention Growth",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6773"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La adherencia sostenida protege la relación.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6774"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La secuencia lógica es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6775"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "primero valor, después expansión.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6776"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6764"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "growth-loop",
                         "title":  "Growth Loop",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo objetivo es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6779"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Acquire / Contract",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6780"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6781"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activate",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6782"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6783"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Deliver Value",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6784"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6785"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adhere",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6786"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6787"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6788"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6789"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expand",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6790"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6791"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "More Value",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6792"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6793"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retain",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6794"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6795"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La expansión no debe utilizarse para compensar baja adopción inicial.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6796"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una cuenta con valor insuficiente no constituye una base saludable para expansión sostenible.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6797"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6778"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "north-star-framework",
                         "title":  "North Star Framework",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia disponible confirma la necesidad de orientar la organización hacia valor recurrente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6800"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, el assessment no proporciona todavía evidencia suficiente para fijar una fórmula corporativa única de North Star sin una validación posterior específica.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6801"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El marco queda definido de la siguiente forma:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6802"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "North Star",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6803"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe representar:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6804"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "la cantidad o proporción de clientes/usuarios que obtienen recurrentemente el resultado central que SEIF promete habilitar.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6805"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe cumplir:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6806"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "estar relacionada con valor;",
                                                          "ser observable;",
                                                          "poder evolucionar mediante Producto;",
                                                          "correlacionarse posteriormente con negocio;",
                                                          "evitar métricas puramente de actividad."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6807–P6811"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6799"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-06",
                                                       "subject":  "North Star candidate",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "north-star-tree",
                         "title":  "North Star Tree",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La estructura de medición queda:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6814"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NORTH STAR",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6815"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Valor recurrente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6816"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6817"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ACTIVATION",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6818"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Alcanzan primer valor?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6819"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6820"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6821"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tardan?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6822"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6823"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADOPTION",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6824"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Utilizan la capacidad relevante?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6825"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6826"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADHERENCE",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6827"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Sostienen el resultado?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6828"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6829"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AUTONOMY",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6830"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánta asistencia necesitan?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6831"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6832"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RETENTION / EXPANSION",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6833"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El valor se traduce en continuidad y crecimiento?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6834"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este árbol conecta Producto, CS, Marketing y negocio sin mezclar responsabilidades.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6835"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6813"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-06",
                                                       "subject":  "North Star candidate",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "customer-health-model",
                         "title":  "Customer Health Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidencia valor en evolucionar los dashboards hacia señales accionables.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6838"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Customer Health Model combina progresivamente variables observables.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6839"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La primera versión debe ser simple.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6840"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dimensiones candidatas sustentadas por las entrevistas:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6841"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilization",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6842"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Uso respecto de población/capacidad relevante.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6843"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6844"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usuarios que alcanzaron primer valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6845"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6846"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sostenimiento del comportamiento esperado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6847"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6848"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tickets, incidencias o necesidad recurrente de intervención.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6849"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Autonomy",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6850"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel de dependencia de SEIF.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6851"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se asignan pesos arbitrarios en esta fase.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6852"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primero debe construirse baseline.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6853"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6837"
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
                         "id":  "health-states",
                         "title":  "Health States",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las cuentas pueden clasificarse operacionalmente en:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6856"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Healthy",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6857"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El valor y adherencia se encuentran dentro de lo esperado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6858"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Attention",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6859"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen señales tempranas de deterioro.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6860"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "At Risk",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6861"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe una brecha significativa de adopción, adherencia o fricción.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6862"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Critical",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6863"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El valor está comprometido y requiere intervención prioritaria.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6864"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La clasificación debe producir acciones.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6865"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No un reporte.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6866"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6855"
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
                         "id":  "health-action",
                         "title":  "Health → Action",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo conceptual:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6869"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Low activation",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6870"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ revisar onboarding/configuración.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6871"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Long TTV",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6872"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ analizar journey y dependencia.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6873"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Low adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6874"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ identificar si la capacidad dejó de ser relevante o existe fricción.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6875"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "High support dependency",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6876"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Opportunity de autonomía.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6877"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "High adoption + additional unmet need",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6878"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ señal potencial de expansión.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6879"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La misma métrica puede requerir acciones diferentes según causa.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6880"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6868"
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
                         "id":  "churn-risk",
                         "title":  "Churn Risk",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo reconoce churn como resultado de negocio, pero no asume causalidad sin evidencia.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6883"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se afirma:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6884"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“baja adopción causa churn en SEIF.”",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6885"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esa relación todavía debe medirse.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6886"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE crea capacidad para evaluarla.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6887"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La hipótesis que debe poder probarse es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6888"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Las cuentas con menor activación/adherencia presentan posteriormente mayor riesgo de reducción o churn?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6889"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vez exista suficiente historia, SEIF podrá determinar correlaciones reales.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6890"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6882"
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
                         "id":  "silent-churn",
                         "title":  "Silent Churn",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo metodológico actual de SEIF ya reconoce el concepto de churn silencioso.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6893"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Adoption Model lo operacionaliza.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6894"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una cuenta puede permanecer contratada y, simultáneamente:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6895"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "perder usuarios;",
                                                          "reducir frecuencia relevante;",
                                                          "dejar de utilizar módulos;",
                                                          "depender cada vez más de asistencia;",
                                                          "perder adherencia."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6896–P6900"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas señales deben detectarse antes de la renovación.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6901"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6892"
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
                         "id":  "expansion-signals",
                         "title":  "Expansion Signals",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una oportunidad de expansión debe estar respaldada por evidencia de valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6904"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Señales potenciales:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6905"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "High adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6906"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad genera valor recurrente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6907"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "High autonomy",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6908"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cliente la opera de manera sostenible.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6909"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Additional eligible population",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6910"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen usuarios o proyectos que podrían obtener el mismo valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6911"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adjacent problem",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6912"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe otro problema relevante que SEIF ya puede resolver.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6913"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Underutilized contracted capacity with identified cause removed",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6914"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La barrera de adopción ha sido identificada y resuelta.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6915"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La expansión se basa en:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6916"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "evidence of value + additional opportunity.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6917"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6903"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "license-expansion",
                         "title":  "License Expansion",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards de licencias pueden soportar dos lecturas diferentes.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6920"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilization Gap",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6921"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cliente contrató más capacidad de la que utiliza.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6922"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto requiere diagnóstico.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6923"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expansion Opportunity",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6924"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cliente utiliza intensivamente la capacidad actual y existe población adicional con necesidad demostrada.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6925"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No deben confundirse.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6926"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Baja utilización no representa automáticamente una oportunidad de upselling.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6927"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede representar un problema previo que debe resolverse.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6928"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6919"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "module-adoption-matrix",
                         "title":  "Module Adoption Matrix",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF puede clasificar progresivamente módulos/capacidades según dos dimensiones:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6931"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reach",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6932"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "×",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6933"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6934"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultando conceptualmente en:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6935"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "High Reach / High Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6936"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Core Value.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6937"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "High Reach / Low Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6938"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción relevante o valor no sostenido.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6939"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Low Reach / High Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6940"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Valor fuerte en segmento específico.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6941"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Low Reach / Low Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6942"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Requiere investigación sobre relevancia, posicionamiento o continuidad.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6943"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta matriz utiliza comportamiento como señal.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6944"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No determina automáticamente retirar o invertir.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6945"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6930"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "cohort-analysis",
                         "title":  "Cohort Analysis",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las métricas agregadas pueden ocultar diferencias entre clientes.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6948"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Growth Model debe permitir observar cohortes por:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6949"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cliente;",
                                                          "segmento;",
                                                          "módulo;",
                                                          "rol;",
                                                          "proyecto;",
                                                          "fecha de implementación;",
                                                          "versión;",
                                                          "canal de onboarding cuando exista."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6950–P6957"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite responder:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6958"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde funciona mejor SEIF y bajo qué condiciones?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6959"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards actuales ya contienen parte de las dimensiones necesarias para evolucionar en esta dirección.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6960"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6947"
                                         }
                                     ]
                     },
                     {
                         "id":  "role-based-adoption",
                         "title":  "Role-Based Adoption",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La metodología de SEIF ya reconoce criterios de éxito diferentes por rol.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6963"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Growth Model mantiene esta separación.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6964"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En Control de Rondas, por ejemplo:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6965"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Vigilante",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6966"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "éxito operacional.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6967"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Supervisor",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6968"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "capacidad de verificar sin reproceso.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6969"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente/Gerente",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6970"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "capacidad de demostrar y utilizar información confiable.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6971"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La adopción no puede representarse únicamente mediante una métrica agregada del módulo si los roles obtienen valor de formas diferentes.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6972"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6962"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "journey-based-growth",
                         "title":  "Journey-Based Growth",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las oportunidades de Growth no se buscan exclusivamente agregando funcionalidades.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6975"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También aparecen reduciendo fricción en el journey.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6976"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La secuencia es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6977"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Journey",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6978"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6979"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Drop-off / Friction",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6980"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6981"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6982"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6983"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Experiment",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6984"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6985"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Measure",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6986"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6987"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scale",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6988"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto conecta directamente Product Discovery con Growth.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6989"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6974"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "growth-experiments",
                         "title":  "Growth Experiments",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las iniciativas de Growth deben operar como Bets.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6992"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos de tipos de experimento, no de soluciones predeterminadas:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6993"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "simplificación de onboarding;",
                                                          "cambios de configuración;",
                                                          "comunicación contextual;",
                                                          "guía dentro del producto;",
                                                          "reducción de pasos;",
                                                          "automatización;",
                                                          "modificación de experiencia;",
                                                          "campaña dirigida;",
                                                          "capacitación específica;",
                                                          "self-service."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P6994–P7003"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La selección depende del diagnóstico de causa.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7004"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P6991"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "growth-experiment-card",
                         "title":  "Growth Experiment Card",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada experimento contiene:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7007"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Segment",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7008"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿A quién?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7009"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7010"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué impide avanzar?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7011"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Baseline",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7012"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurre ahora?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7013"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hypothesis",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7014"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué creemos que puede mejorar?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7015"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Intervention",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7016"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué probaremos?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7017"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected Signal",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7018"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué debería cambiar?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7019"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Result",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7020"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7021"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7022"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scale / Adjust / Stop.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7023"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto mantiene Growth conectado con el mismo Operating System.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7024"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7006"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "product-led-growth-alcance-aplicable-a-seif",
                         "title":  "Product-Led Growth: alcance aplicable a SEIF",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia no justifica clasificar a SEIF actualmente como una organización Product-Led Growth en sentido estricto.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7027"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, existen oportunidades para incorporar principios PLG:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7028"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "menor TTV;",
                                                          "mayor autonomía;",
                                                          "valor visible;",
                                                          "onboarding más simple;",
                                                          "adopción basada en producto;",
                                                          "expansión respaldada por uso y Outcome;",
                                                          "menor dependencia operacional."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7029–P7035"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo utiliza estos principios sin imponer una transformación comercial completa que no ha sido solicitada ni evidenciada.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7036"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7026"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "roles-dentro-del-adoption-growth-model",
                         "title":  "Roles dentro del Adoption \u0026 Growth Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-044",
                                                          "caption":  "Roles dentro del Adoption \u0026 Growth Model",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Decisión / Resultado",
                                                                          "Accountable principal",
                                                                          "Participación"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Definir criterio de éxito",
                                                                           "Producto",
                                                                           "UX + CS"
                                                                       ],
                                                                       [
                                                                           "Definir evento de activación",
                                                                           "Producto",
                                                                           "Data/Tech + CS"
                                                                       ],
                                                                       [
                                                                           "Gestionar onboarding/adopción",
                                                                           "CS",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Reducir fricción UX",
                                                                           "UX",
                                                                           "Producto + CS"
                                                                       ],
                                                                       [
                                                                           "Resolver barreras técnicas",
                                                                           "Desarrollo/SRE",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Identificar patrones de soporte",
                                                                           "Soporte",
                                                                           "Producto + CS"
                                                                       ],
                                                                       [
                                                                           "Comunicación de valor",
                                                                           "Marketing",
                                                                           "Producto + CS"
                                                                       ],
                                                                       [
                                                                           "Identificar riesgo de cuenta",
                                                                           "CS",
                                                                           "Producto/Data"
                                                                       ],
                                                                       [
                                                                           "Identificar Expansion Signal",
                                                                           "CS/Comercial",
                                                                           "Producto + Marketing"
                                                                       ],
                                                                       [
                                                                           "Evaluar Outcome",
                                                                           "Producto",
                                                                           "CS + Data"
                                                                       ],
                                                                       [
                                                                           "Decidir Growth Bet",
                                                                           "Producto",
                                                                           "CS + Marketing + Tech según caso"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "15. Adoption \u0026 Growth Model",
                                                                         "locator":  "T44"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se crean cargos adicionales.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7039"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se clarifican responsabilidades.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7040"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7038"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles de Adoption y Learning",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Authority y accountability de decisiones basadas en aprendizaje",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
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
                         "id":  "adoption-review",
                         "title":  "Adoption Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La revisión de adopción no debe limitarse a preguntar:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7043"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Cuántos usuarios tenemos activos?”",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7044"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe responder:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7045"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿Qué población debería obtener valor?",
                                                          "¿Cuántos están configurados?",
                                                          "¿Cuántos se activaron?",
                                                          "¿Cuál es el TTV?",
                                                          "¿Cuántos mantienen adherencia?",
                                                          "¿Dónde se pierde el funnel?",
                                                          "¿Qué fricción explica la pérdida?",
                                                          "¿Qué cuentas requieren acción?",
                                                          "¿Qué Opportunity de Producto surge?",
                                                          "¿Qué decisión corresponde?"
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7046–P7055"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7042"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
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
                         "id":  "cadencia",
                         "title":  "Cadencia",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo se integra con las cadencias ya definidas.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7058"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Semanal — Customer Signals",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7059"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS y Soporte observan excepciones y riesgos relevantes dentro de su operación habitual.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7060"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No requiere un nuevo comité.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7061"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quincenal — Growth / Discovery",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7062"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se analizan oportunidades concretas de adopción y experimentos cuando corresponda.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7063"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mensual — Outcome \u0026 Adoption Review",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7064"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se observan:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7065"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "TTV;",
                                                          "activación;",
                                                          "adherencia;",
                                                          "fricción;",
                                                          "autonomía;",
                                                          "cuentas de riesgo;",
                                                          "aprendizajes."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7066–P7072"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trimestral — Business / Product Direction",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7073"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se analiza relación entre:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7074"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "valor;",
                                                          "retención;",
                                                          "expansión;",
                                                          "inversión de Producto."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7075–P7078"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7057"
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
                                                       "subject":  "Cadencias, ventanas y triggers de revisión",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metricas-iniciales-del-modelo",
                         "title":  "Métricas iniciales del modelo",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-045",
                                                          "caption":  "Métricas iniciales del modelo",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Métrica"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Reach",
                                                                           "Usuarios/clientes elegibles"
                                                                       ],
                                                                       [
                                                                           "Setup",
                                                                           "% correctamente configurado"
                                                                       ],
                                                                       [
                                                                           "Activation",
                                                                           "% que alcanza primer éxito"
                                                                       ],
                                                                       [
                                                                           "TTV",
                                                                           "Tiempo hasta primer valor"
                                                                       ],
                                                                       [
                                                                           "Adoption",
                                                                           "% con uso relevante"
                                                                       ],
                                                                       [
                                                                           "Adherence",
                                                                           "% que sostiene criterio de éxito"
                                                                       ],
                                                                       [
                                                                           "Friction",
                                                                           "Tickets / intervenciones relacionadas"
                                                                       ],
                                                                       [
                                                                           "Autonomy",
                                                                           "% self-service / assisted / dependent"
                                                                       ],
                                                                       [
                                                                           "License Utilization",
                                                                           "Utilización sobre capacidad relevante"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "% que alcanza criterio de éxito"
                                                                       ],
                                                                       [
                                                                           "Risk",
                                                                           "Cuentas bajo umbral definido"
                                                                       ],
                                                                       [
                                                                           "Expansion",
                                                                           "Cuentas con evidencia de oportunidad adicional"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "15. Adoption \u0026 Growth Model",
                                                                         "locator":  "T45"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se fijan targets adicionales sin baseline validado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7081"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7080"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership de métricas",
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
                         "id":  "metricas-que-no-deben-utilizarse-aisladamente",
                         "title":  "Métricas que no deben utilizarse aisladamente",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usuarios creados",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7084"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Muestra base potencial.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7085"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7086"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Logins",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7087"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Muestran actividad.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7088"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No éxito.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7089"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clicks",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7090"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Muestran interacción.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7091"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No Outcome.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7092"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Licencias contratadas",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7093"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Muestran capacidad comercial.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7094"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No adopción.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7095"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Módulos desplegados",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7096"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Muestran disponibilidad.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7097"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No adherencia.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7098"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas métricas continúan siendo útiles como denominadores o señales.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7099"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No como evidencia suficiente de éxito.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7100"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7083"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership de métricas",
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
                         "id":  "metric-tree-de-adoption-growth",
                         "title":  "Metric Tree de Adoption \u0026 Growth",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "BUSINESS",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7103"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retention / Expansion / MRR",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7104"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7105"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7106"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7107"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customers achieving recurring value",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7108"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7109"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7110"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADHERENCE",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7111"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sustained success behavior",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7112"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7113"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7114"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADOPTION",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7115"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Relevant recurrent use",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7116"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7117"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7118"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ACTIVATION",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7119"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "First success achieved",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7120"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7121"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7122"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7123"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Speed to first customer value",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7124"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7125"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7126"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CONFIGURED",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7127"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ready to obtain value",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7128"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7129"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7130"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ELIGIBLE",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7131"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contracted / available",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7132"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En paralelo:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7133"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction + Autonomy + Reliability",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7134"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "funcionan como métricas de salud que explican o protegen el funnel.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7135"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7102"
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
                         "id":  "dashboard-to-be",
                         "title":  "Dashboard TO-BE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El dashboard de adopción debe responder tres preguntas ejecutivas.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7138"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde existe oportunidad?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7139"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "brecha de activación;",
                                                          "brecha de utilización;",
                                                          "módulos con adopción baja;",
                                                          "segmentos con comportamiento diferente."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7140–P7143"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde existe riesgo?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7144"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "TTV elevado;",
                                                          "adherencia decreciente;",
                                                          "alta dependencia;",
                                                          "fricción recurrente."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7145–P7148"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde existe crecimiento saludable?",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7149"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "alto valor;",
                                                          "alta adherencia;",
                                                          "población adicional;",
                                                          "capacidades adyacentes relevantes."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7150–P7153"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto convierte dashboard en decision cockpit.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7154"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7137"
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
                         "id":  "automatizacion",
                         "title":  "Automatización",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vez definidos los eventos y umbrales, el modelo permite automatizar acciones.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7157"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos conceptuales:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7158"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No activation after expected period",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7159"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ alerta CS.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7160"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV outside threshold",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7161"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ abrir análisis de fricción.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7162"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherence drop",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7163"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ señal de riesgo.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7164"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Repeated support pattern",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7165"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ señal a Producto.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7166"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "High adherence + additional eligible users",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7167"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ señal de expansión.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7168"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dependent journey",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7169"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Opportunity de autonomía.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7170"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es automatizar detección y coordinación.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7171"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No automatizar el diagnóstico sin suficiente evidencia.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7172"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7156"
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
                         "id":  "ia-aplicada-a-adoption-growth",
                         "title":  "IA aplicada a Adoption \u0026 Growth",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La IA puede apoyar:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7175"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "agrupación de feedback;",
                                                          "clasificación de tickets;",
                                                          "detección de patrones de fricción;",
                                                          "resumen de cuentas;",
                                                          "análisis cualitativo de entrevistas;",
                                                          "identificación de señales de riesgo;",
                                                          "generación de contenido de onboarding;",
                                                          "personalización de guías;",
                                                          "recomendaciones para CS basadas en reglas definidas;",
                                                          "preparación de reviews."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7176–P7185"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La IA no debe inferir por sí sola que una cuenta está en riesgo comercial sin un modelo previamente validado con datos reales.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7186"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7174"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones operacionales de Activation, TTV, Adoption y Adherence",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling",
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
                         "id":  "jira-jsm-dentro-del-modelo",
                         "title":  "Jira / JSM dentro del modelo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vez definido el modelo de información, Jira y JSM pueden soportar la trazabilidad.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7189"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Jira",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7190"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Relacionar:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7191"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome → Bet → Delivery → Release",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7192"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "JSM",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7193"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aportar:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7194"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "tickets → módulo → tipo de fricción → recurrencia",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7195"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Analytics / dashboards",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7196"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aportar:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7197"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation → Adoption → Adherence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7198"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Confluence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7199"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mantener:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7200"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "playbook + criterios + aprendizajes.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7201"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La herramienta conecta señales.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7202"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No define qué constituye éxito.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7203"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7188"
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
                         "id":  "growth-backlog",
                         "title":  "Growth Backlog",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Growth Backlog no debe ser una nueva lista masiva de ideas.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7206"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contiene solamente oportunidades respaldadas por señales como:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7207"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "caída de funnel;",
                                                          "TTV alto;",
                                                          "baja adherencia;",
                                                          "dependencia;",
                                                          "segmentos con potencial;",
                                                          "fricción repetitiva;",
                                                          "expansión demostrable."
                                                      ],
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7208–P7214"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada elemento se gestiona utilizando:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7215"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem → Evidence → Outcome → Bet → Experiment → Result.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7216"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Así Growth utiliza el mismo sistema que Producto.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7217"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7205"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership y causalidad de Growth / Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "anti-patrones",
                         "title":  "Anti-patrones",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo elimina explícitamente los siguientes comportamientos:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7220"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usage = Success",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7221"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Asumir que actividad demuestra valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7222"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Training as Default Solution",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7223"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Responder a toda baja adopción con capacitación.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7224"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS as Human Middleware",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7225"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilizar Customer Success permanentemente para compensar limitaciones del producto.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7226"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Campaign Before Diagnosis",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7227"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Intentar resolver baja adopción mediante comunicación sin entender la causa.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7228"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expansion Before Value",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7229"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Intentar aumentar venta en cuentas con valor no demostrado.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7230"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "One Adoption Metric",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7231"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilizar una única definición de adopción para todos los módulos y roles.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7232"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dashboard Theater",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7233"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Observar brechas sin owner ni acción.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7234"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Churn Attribution Without Evidence",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7235"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Afirmar que una métrica causa churn sin correlación demostrada.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7236"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7219"
                                         }
                                     ]
                     },
                     {
                         "id":  "maturity-model",
                         "title":  "Maturity Model",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-046",
                                                          "caption":  "Maturity Model",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Comportamiento"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1 — Inicial",
                                                                           "Implementación y soporte reactivo; uso como principal señal"
                                                                       ],
                                                                       [
                                                                           "2 — Repetible",
                                                                           "Se observan adopción y utilización; acompañamiento estructurado en algunos casos"
                                                                       ],
                                                                       [
                                                                           "3 — Definido",
                                                                           "Activation, TTV, Adoption, Adherence, Health y acciones están definidos"
                                                                       ],
                                                                       [
                                                                           "4 — Gestionado",
                                                                           "Se predice riesgo, se ejecutan experimentos y se mide impacto"
                                                                       ],
                                                                       [
                                                                           "5 — Optimizado",
                                                                           "Growth loops y experiencia se optimizan continuamente con datos"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "15. Adoption \u0026 Growth Model",
                                                                         "locator":  "T46"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado SEIF",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7239"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con base en las entrevistas:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7240"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7241"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target inicial",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7242"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7243"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo inmediato no es construir modelos predictivos avanzados.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7244"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es operacionalizar el ciclo de valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7245"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7238"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-15",
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
                                                          "id":  "source-table-047",
                                                          "caption":  "AS-IS → TO-BE",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "AS-IS observado",
                                                                          "TO-BE"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Implementación",
                                                                           "Acompañamiento relevante",
                                                                           "Configured como estado explícito"
                                                                       ],
                                                                       [
                                                                           "Uso",
                                                                           "Métrica disponible",
                                                                           "Parte de un funnel"
                                                                       ],
                                                                       [
                                                                           "Activación",
                                                                           "Concepto emergente",
                                                                           "Evento de primer éxito"
                                                                       ],
                                                                       [
                                                                           "TTV",
                                                                           "Definido conceptualmente",
                                                                           "Operacional por capacidad"
                                                                       ],
                                                                       [
                                                                           "Adopción",
                                                                           "Observada",
                                                                           "Definida por comportamiento relevante"
                                                                       ],
                                                                       [
                                                                           "Adherencia",
                                                                           "Conceptual",
                                                                           "Medida recurrentemente"
                                                                       ],
                                                                       [
                                                                           "Autonomía",
                                                                           "Dependencias observadas",
                                                                           "Dimensión explícita"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Acompañamiento",
                                                                           "Gestión sistemática de valor"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Resolución",
                                                                           "Product Intelligence"
                                                                       ],
                                                                       [
                                                                           "Marketing",
                                                                           "Comunicación/mercado",
                                                                           "Product Marketing + Adoption"
                                                                       ],
                                                                       [
                                                                           "Growth",
                                                                           "Oportunidad emergente",
                                                                           "Activation + Adoption + Expansion + Retention"
                                                                       ],
                                                                       [
                                                                           "Health",
                                                                           "No consolidado",
                                                                           "Health → Action"
                                                                       ],
                                                                       [
                                                                           "Licencias",
                                                                           "Utilización",
                                                                           "Señal diagnóstica"
                                                                       ],
                                                                       [
                                                                           "Expansion",
                                                                           "Comercial",
                                                                           "Evidence-based expansion"
                                                                       ],
                                                                       [
                                                                           "Métricas",
                                                                           "Visualización",
                                                                           "Triggers + owners + acciones"
                                                                       ],
                                                                       [
                                                                           "Feedback",
                                                                           "Distribuido",
                                                                           "Product Learning Loop"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "15. Adoption \u0026 Growth Model",
                                                                         "locator":  "T47"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7247"
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
                                            "text":  "El modelo permite comenzar sin una transformación compleja.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7250"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Definir funnel para un módulo prioritario",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7251"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eligible → Configured → Activated → Adopted → Adherent.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7252"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Definir evento de activación",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7253"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usando el criterio de éxito ya existente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7254"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Medir TTV real",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7255"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sobre una muestra o módulo inicial.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7256"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Clasificar las 10 cuentas con mayor brecha de utilización",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7257"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin asumir causa.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7258"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Diagnosticar causa de la brecha",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7259"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Configuración / awareness / usability / relevance / autonomy.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7260"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Identificar Top 5 intervenciones manuales de CS",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7261"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Distinguir value-adding vs failure demand.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7262"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. Relacionar tickets con módulo y etapa del funnel",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7263"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando la información lo permita.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7264"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. Seleccionar un journey Dependiente",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7265"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Investigar oportunidad de mayor autonomía.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7266"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "9. Crear primera Outcome \u0026 Adoption Review",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7267"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con métricas existentes, sin esperar nuevos sistemas.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7268"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "10. Ejecutar un Growth Experiment pequeño",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7269"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sobre una causa ya validada.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7270"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7249"
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
                                            "text":  "El Adoption \u0026 Growth Model busca producir cinco cambios.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7273"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mayor claridad de valor",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7274"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Distinguir actividad de éxito.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7275"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menor TTV",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7276"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Identificar dónde se frena el primer valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7277"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mayor adherencia",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7278"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Gestionar valor sostenido.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7279"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mayor autonomía",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7280"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reducir dependencia operacional cuando corresponda.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7281"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Growth más saludable",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7282"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Construir expansión y retención sobre evidencia de valor.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7283"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7272"
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
                                            "text":  "El assessment evidencia que SEIF ya dispone de las piezas iniciales para gestionar adopción: dashboards de utilización, Customer Success, criterios de éxito, TTV, adherencia y conocimiento operativo del cliente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7286"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha se encuentra en integrarlas como un sistema.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7287"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el modelo no parte de:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7288"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“necesitamos que los usuarios entren más.”",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7289"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Parte de:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7290"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“necesitamos saber quién debería obtener valor, cuándo lo obtiene, si lo sostiene, dónde falla el journey y qué decisión tomamos con esa evidencia.”",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7291"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El SEIF Adoption \u0026 Growth Model queda resumido en:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7292"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ELIGIBLE → CONFIGURED → ACTIVATED → ADOPTED → ADHERENT → OUTCOME → RETAIN / EXPAND ↺",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7293"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "soportado transversalmente por:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7294"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV + Friction + Autonomy + Customer Health + Product Learning.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7295"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evolución buscada es pasar de medir principalmente utilización a gestionar sistemáticamente valor recurrente.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7296"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Y el principio rector es:",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7297"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no debe perseguir más uso por sí mismo; debe perseguir más clientes y usuarios alcanzando, sosteniendo y expandiendo resultados de valor demostrables.",
                                            "source":  {
                                                           "title":  "15. Adoption \u0026 Growth Model",
                                                           "locator":  "P7298"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "15. Adoption \u0026 Growth Model",
                                             "locator":  "P7285"
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
                    "feedback-loop",
                    "roles",
                    "north-star",
                    "governance",
                    "artifacts"
                ],
    "source":  {
                   "title":  "15. Adoption \u0026 Growth Model",
                   "locator":  "P6371–P7298",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
