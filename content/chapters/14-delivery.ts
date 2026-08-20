import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "delivery",
    "group":  "Operating Model",
    "title":  "DELIVER: Delivery \u0026 Release Model",
    "sourceTitle":  "14. Delivery \u0026 Release Model",
    "eyebrow":  "14 · Deliver",
    "summary":  "Convierte una Bet comprometida en slices valiosas, confiables y observables, separando construcción, release, adopción y evidencia de Outcome.",
    "takeaway":  "Technical Done, Released, Adopted y Value Validated son estados distintos: Release expone una hipótesis al contexto real, no demuestra valor.",
    "executive":  {
                      "keyFindings":  [
                                          "Delivery entra con una Bet priorizada y Delivery Readiness suficiente, no con una feature simplemente aprobada.",
                                          "Smallest Valuable Slice reduce tiempo, riesgo y feedback tardío sin confundir pequeño con valioso.",
                                          "DORA y flow metrics diagnostican capacidad del sistema; no miden productividad individual ni valor de producto.",
                                          "Release exige readiness técnica, operacional y de medición, y abre observación de Adoption y Outcome."
                                      ],
                      "implication":  "El TO-BE propone disciplina de flujo y confiabilidad. Límites WIP, authority, métricas, cadencias, tooling y definiciones de Adoption permanecen pendientes de validación.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "flow",
                      "sources":  [
                                      {
                                          "title":  "14. Delivery \u0026 Release Model",
                                          "locator":  "P5297–P6370"
                                      }
                                  ]
                  },
    "clientValidations":  [
                              {
                                  "id":  "CL-05",
                                  "subject":  "Decision rights de release",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-08",
                                  "subject":  "Activation, Adoption y TTV",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-09",
                                  "subject":  "WIP numérico",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-10",
                                  "subject":  "Tooling",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              }
                          ],
    "operatingConcepts":  [
                              {
                                  "id":  "delivery-release-system",
                                  "title":  "DELIVER — Delivery \u0026 Release Model",
                                  "canonicalLayers":  [
                                                          "DELIVER",
                                                          "ADOPT",
                                                          "LEARN",
                                                          "ROLES",
                                                          "METRICS",
                                                          "EVIDENCE",
                                                          "TOOLING / JIRA"
                                                      ],
                                  "sourceChapters":  [
                                                         "14"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "14. Delivery \u0026 Release Model",
                                                             "locator":  "P5297–P6370"
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
                                                 "CL-04",
                                                 "CL-05",
                                                 "CL-07",
                                                 "CL-08",
                                                 "CL-09",
                                                 "CL-10",
                                                 "CL-11",
                                                 "CL-12"
                                             ]
                              }
                          ],
    "deliverySemantics":  [
                              {
                                  "term":  "DONE",
                                  "definition":  "Technical Done: la capacidad está correctamente construida; no implica release ni valor.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "14. Delivery \u0026 Release Model",
                                                 "locator":  "P5665–P5690"
                                             }
                              },
                              {
                                  "term":  "READY FOR RELEASE",
                                  "definition":  "Estado posterior a validación con readiness técnica, operacional y de medición por comprobar.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "14. Delivery \u0026 Release Model",
                                                 "locator":  "P5490–P5507; P5706–P5726"
                                             }
                              },
                              {
                                  "term":  "RELEASED",
                                  "definition":  "La capacidad está disponible en producción; no demuestra adopción ni Outcome.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "14. Delivery \u0026 Release Model",
                                                 "locator":  "P5679–P5690"
                                             }
                              },
                              {
                                  "term":  "IN PRODUCTION",
                                  "definition":  "Código desplegado o capacidad liberada en el contexto real; Deployment y Release pueden separarse.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "14. Delivery \u0026 Release Model",
                                                 "locator":  "P5728–P5745"
                                             }
                              },
                              {
                                  "term":  "AVAILABLE",
                                  "definition":  "Capacidad habilitada para usuarios después de Release; la fuente no define un estado independiente adicional.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "14. Delivery \u0026 Release Model",
                                                 "locator":  "P5733–P5737"
                                             }
                              },
                              {
                                  "term":  "ADOPTED",
                                  "definition":  "Existe uso recurrente relevante.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "14. Delivery \u0026 Release Model",
                                                 "locator":  "P5679–P5690"
                                             }
                              },
                              {
                                  "term":  "VALUE VALIDATED",
                                  "definition":  "Existe evidencia de que el comportamiento esperado modificó el Outcome.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "14. Delivery \u0026 Release Model",
                                                 "locator":  "P5490–P5504; P6246–P6255"
                                             }
                              }
                          ],
    "deliveryConcepts":  [
                             {
                                 "id":  "commitment",
                                 "kind":  "COMMITMENT",
                                 "title":  "Bet priorizada y capacidad comprometida",
                                 "what":  "Delivery comienza con una Bet priorizada y suficientemente validada.",
                                 "why":  "Evita ingresar una feature aprobada sin Outcome, evidencia o scope acotado.",
                                 "activities":  [
                                                    "comprobar Delivery Readiness"
                                                ],
                                 "outputs":  [
                                                 "Delivery Bet"
                                             ],
                                 "participants":  [
                                                      "Producto",
                                                      "Desarrollo"
                                                  ],
                                 "decision":  "Comprometer capacidad",
                                 "metric":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5316–P5326; P5390–P5414"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "delivery-object",
                                 "kind":  "DELIVERY OBJECT",
                                 "title":  "Delivery Bet",
                                 "what":  "Inversión acotada que puede modificar un Outcome.",
                                 "why":  "Conecta decisión y trabajo sin documentación extensa.",
                                 "activities":  [
                                                    "definir Problem, Outcome, User, Evidence, Hypothesis, Success Signal, Scope y Risks"
                                                ],
                                 "outputs":  [
                                                 "Bet lista"
                                             ],
                                 "participants":  [

                                                  ],
                                 "decision":  "",
                                 "metric":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5390–P5397; T38"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "decomposition",
                                 "kind":  "WORK DECOMPOSITION",
                                 "title":  "Outcome → Bet → Valuable Slices",
                                 "what":  "Descompone una inversión en incrementos que producen evidencia.",
                                 "why":  "Reduce el tiempo entre empezar y aprender.",
                                 "activities":  [
                                                    "vertical slicing"
                                                ],
                                 "outputs":  [
                                                 "Valuable Slices"
                                             ],
                                 "participants":  [

                                                  ],
                                 "decision":  "",
                                 "metric":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5429–P5487"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "valuable-slice",
                                 "kind":  "VALUABLE SLICE",
                                 "title":  "Smallest Valuable Slice",
                                 "what":  "Incremento pequeño pero capaz de producir comportamiento observable, capacidad utilizable, evidencia y aprendizaje.",
                                 "why":  "Small no equivale a Valuable.",
                                 "activities":  [
                                                    "reducir tiempo, riesgo, complejidad y feedback tardío"
                                                ],
                                 "outputs":  [
                                                 "working increment"
                                             ],
                                 "participants":  [

                                                  ],
                                 "decision":  "",
                                 "metric":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5429–P5487"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "wip",
                                 "kind":  "WORK IN PROGRESS",
                                 "title":  "Finish before starting more",
                                 "what":  "Limita trabajo simultáneo mediante Pull y WIP visible sin fijar número fuente.",
                                 "why":  "Reduce inventario, espera y pérdida de foco.",
                                 "activities":  [
                                                    "calibrar con throughput, bloqueos, dependencias y Cycle Time"
                                                ],
                                 "outputs":  [
                                                 "WIP visible"
                                             ],
                                 "participants":  [

                                                  ],
                                 "decision":  "Tomar nuevo trabajo cuando exista capacidad",
                                 "metric":  "WIP",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5387–P5388; P5511–P5536"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "flow",
                                 "kind":  "FLOW",
                                 "title":  "Flujo real del trabajo",
                                 "what":  "READY → IN DELIVERY → VALIDATING → READY FOR RELEASE → RELEASED → OBSERVING → VALUE VALIDATED.",
                                 "why":  "Representa estados del trabajo, no departamentos.",
                                 "activities":  [
                                                    "pull",
                                                    "build",
                                                    "test",
                                                    "observe"
                                                ],
                                 "outputs":  [
                                                 "incremento liberable"
                                             ],
                                 "participants":  [
                                                      "Producto",
                                                      "UX/UI",
                                                      "Desarrollo",
                                                      "SRE"
                                                  ],
                                 "decision":  "Avanzar según evidencia",
                                 "metric":  "Cycle Time / Throughput",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5490–P5508"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "dependency",
                                 "kind":  "DEPENDENCY",
                                 "title":  "Dependencias visibles",
                                 "what":  "La espera por dependencias se separa del tiempo activo.",
                                 "why":  "Permite diagnosticar fricción sistémica.",
                                 "activities":  [
                                                    "clasificar dependencia"
                                                ],
                                 "outputs":  [
                                                 "causa visible"
                                             ],
                                 "participants":  [

                                                  ],
                                 "decision":  "Resolver o escalar según riesgo",
                                 "metric":  "Blocked Time",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5538–P5565"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "blocker",
                                 "kind":  "BLOCKER",
                                 "title":  "BLOCKED como condición",
                                 "what":  "Bloqueo Product, UX, Technical, SRE/Infrastructure, External u Organizational.",
                                 "why":  "Evita convertir BLOCKED en destino permanente.",
                                 "activities":  [
                                                    "hacer visible",
                                                    "medir espera"
                                                ],
                                 "outputs":  [
                                                 "bloqueo resuelto"
                                             ],
                                 "participants":  [

                                                  ],
                                 "decision":  "Desbloquear antes de iniciar más",
                                 "metric":  "Blocked Time",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5505–P5507; P5538–P5565"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "quality",
                                 "kind":  "QUALITY",
                                 "title":  "Quality built-in",
                                 "what":  "Calidad funcional, de experiencia, técnica y operacional integrada en Delivery.",
                                 "why":  "Pasar pruebas funcionales no garantiza production readiness.",
                                 "activities":  [
                                                    "fast feedback",
                                                    "integration validation",
                                                    "critical journey validation"
                                                ],
                                 "outputs":  [
                                                 "Technical Done"
                                             ],
                                 "participants":  [
                                                      "UX/UI",
                                                      "Desarrollo",
                                                      "SRE"
                                                  ],
                                 "decision":  "Aceptar Technical Done según riesgo",
                                 "metric":  "defectos / rework",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5376–P5378; P5639–P5677"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "validation",
                                 "kind":  "VALIDATION",
                                 "title":  "Continuous validation",
                                 "what":  "Producto, UX y Tecnología revisan incrementos útiles antes de completar inversiones significativas.",
                                 "why":  "Reduce handoff y feedback tardío.",
                                 "activities":  [
                                                    "review working increment"
                                                ],
                                 "outputs":  [
                                                 "Evidence",
                                                 "Decision"
                                             ],
                                 "participants":  [
                                                      "Producto",
                                                      "UX/UI",
                                                      "Desarrollo",
                                                      "Customer Success",
                                                      "SRE"
                                                  ],
                                 "decision":  "Continuar o ajustar",
                                 "metric":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5571–P5601; P5818–P5851"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "release-readiness",
                                 "kind":  "RELEASE READINESS",
                                 "title":  "Readiness técnica, operacional y de medición",
                                 "what":  "Comprueba funcionamiento, operación/recuperación y observabilidad posterior.",
                                 "why":  "Release seguro necesita más que código terminado.",
                                 "activities":  [
                                                    "Technical Readiness",
                                                    "Operational Readiness",
                                                    "Measurement Readiness"
                                                ],
                                 "outputs":  [
                                                 "release decision"
                                             ],
                                 "participants":  [
                                                      "Producto",
                                                      "Desarrollo",
                                                      "SRE"
                                                  ],
                                 "decision":  "Release / hold",
                                 "metric":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5706–P5726; P6060–P6073"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "release",
                                 "kind":  "RELEASE",
                                 "title":  "Release como capacidad del sistema",
                                 "what":  "Liberación repetible de cambios pequeños, recuperables y observables.",
                                 "why":  "Release no es Outcome.",
                                 "activities":  [
                                                    "release",
                                                    "progressive exposure"
                                                ],
                                 "outputs":  [
                                                 "capacidad disponible"
                                             ],
                                 "participants":  [
                                                      "Producto",
                                                      "Desarrollo",
                                                      "SRE"
                                                  ],
                                 "decision":  "Release; exposición progresiva o rollback lógico cuando aplique",
                                 "metric":  "Deployment Frequency",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5693–P5704; P5763–P5773"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "production",
                                 "kind":  "PRODUCTION",
                                 "title":  "Deploy ≠ Release",
                                 "what":  "Deployment pone código disponible técnicamente; Release habilita capacidad a usuarios.",
                                 "why":  "Permite exposición progresiva y reducción de riesgo.",
                                 "activities":  [
                                                    "deploy",
                                                    "habilitar",
                                                    "observar",
                                                    "expandir"
                                                ],
                                 "outputs":  [
                                                 "general availability"
                                             ],
                                 "participants":  [
                                                      "Desarrollo",
                                                      "SRE"
                                                  ],
                                 "decision":  "Expand / rollback lógico",
                                 "metric":  "",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5728–P5761"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "technical-feedback",
                                 "kind":  "TECHNICAL FEEDBACK",
                                 "title":  "Change Failure e Incident Learning",
                                 "what":  "Incidentes, rollback y corrección urgente alimentan calidad, testing, arquitectura y observabilidad.",
                                 "why":  "No son fracaso individual.",
                                 "activities":  [
                                                    "restore",
                                                    "understand",
                                                    "root cause",
                                                    "corrective action"
                                                ],
                                 "outputs":  [
                                                 "system learning"
                                             ],
                                 "participants":  [
                                                      "Desarrollo",
                                                      "SRE"
                                                  ],
                                 "decision":  "Corrective action",
                                 "metric":  "Change Failure Rate / MTTR",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5854–P5878; P6091–P6111"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             },
                             {
                                 "id":  "post-release",
                                 "kind":  "POST-RELEASE OBSERVATION",
                                 "title":  "Observe antes de concluir valor",
                                 "what":  "Compara Expected, Actual, Friction, Technical Health y Adoption.",
                                 "why":  "Conecta Release con Adoption y Learning.",
                                 "activities":  [
                                                    "activation observation",
                                                    "feedback",
                                                    "friction detection"
                                                ],
                                 "outputs":  [
                                                 "continue",
                                                 "adjust",
                                                 "scale",
                                                 "stop"
                                             ],
                                 "participants":  [
                                                      "Producto",
                                                      "Customer Success",
                                                      "Soporte",
                                                      "Desarrollo",
                                                      "SRE"
                                                  ],
                                 "decision":  "Continue / adjust / scale / stop",
                                 "metric":  "Release → First Evidence",
                                 "sourceLocators":  [
                                                        {
                                                            "title":  "14. Delivery \u0026 Release Model",
                                                            "locator":  "P5802–P5816; P5908–P5957; P6075–P6088"
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
                                                      "FLOW":  "SOURCE COMPLETE",
                                                      "QUALITY":  "SOURCE COMPLETE",
                                                      "RELEASE CRITERIA":  "SOURCE COMPLETE",
                                                      "RECOVERY":  "SOURCE COMPLETE",
                                                      "POST-RELEASE OBSERVATION":  "SOURCE COMPLETE",
                                                      "TOOL":  "SOURCE PARTIAL"
                                                  }
                             }
                         ],
    "commitmentDeliveryConnections":  [
                                          {
                                              "element":  "Decision",
                                              "status":  "SUPPORTED",
                                              "rationale":  "El flujo fuente conecta Decision con Bet y Delivery.",
                                              "source":  {
                                                             "title":  "14. Delivery \u0026 Release Model",
                                                             "locator":  "P5299–P5301; P6306–P6310"
                                                         }
                                          },
                                          {
                                              "element":  "Commitment",
                                              "status":  "SUPPORTED",
                                              "rationale":  "Delivery Readiness comprueba claridad suficiente para comprometer capacidad.",
                                              "source":  {
                                                             "title":  "14. Delivery \u0026 Release Model",
                                                             "locator":  "P5399–P5414"
                                                         }
                                          },
                                          {
                                              "element":  "Bet",
                                              "status":  "SUPPORTED",
                                              "rationale":  "La entrada explícita es una Delivery Bet priorizada y validada.",
                                              "source":  {
                                                             "title":  "14. Delivery \u0026 Release Model",
                                                             "locator":  "P5319; P5390–P5397"
                                                         }
                                          },
                                          {
                                              "element":  "Capacity",
                                              "status":  "PARTIAL",
                                              "rationale":  "La capacidad condiciona Pull, WIP e inicio; no hay porcentajes ni límite rígido.",
                                              "source":  {
                                                             "title":  "14. Delivery \u0026 Release Model",
                                                             "locator":  "P5511–P5536; P5975–P5986"
                                                         }
                                          },
                                          {
                                              "element":  "Delivery Object",
                                              "status":  "SUPPORTED",
                                              "rationale":  "Delivery Bet y Valuable Slice son objetos lógicos fuente.",
                                              "source":  {
                                                             "title":  "14. Delivery \u0026 Release Model",
                                                             "locator":  "P5390–P5397; P5429–P5467"
                                                         }
                                          },
                                          {
                                              "element":  "Epic / Slice / Story / Task",
                                              "status":  "PARTIAL",
                                              "rationale":  "La jerarquía aparece como recomendación conceptual de tooling, no como arquitectura aprobada.",
                                              "source":  {
                                                             "title":  "14. Delivery \u0026 Release Model",
                                                             "locator":  "P6163–P6175"
                                                         }
                                          },
                                          {
                                              "element":  "Release",
                                              "status":  "SUPPORTED",
                                              "rationale":  "El modelo consolidado traza Bet → Delivery → Release.",
                                              "source":  {
                                                             "title":  "14. Delivery \u0026 Release Model",
                                                             "locator":  "P6268–P6303"
                                                         }
                                          }
                                      ],
    "deliveryObjects":  [
                            {
                                "sourceTerm":  "Delivery Bet",
                                "purpose":  "Entrada acotada a Delivery",
                                "parentChildRelationship":  "Outcome → Bet",
                                "decisionRelationship":  "Resultado de priorización y compromiso",
                                "releaseRelationship":  "Se descompone antes de Release",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5390–P5397; T38"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Smallest Valuable Slice",
                                "purpose":  "Menor incremento capaz de producir comportamiento observable, evidencia y aprendizaje",
                                "parentChildRelationship":  "Bet → Valuable Slice",
                                "lifecycle":  [
                                                  "IN DELIVERY",
                                                  "VALIDATING",
                                                  "READY FOR RELEASE",
                                                  "RELEASED",
                                                  "OBSERVING"
                                              ],
                                "decisionRelationship":  "Permite validar/ajustar la Bet",
                                "releaseRelationship":  "Puede convertirse en incremento liberable",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5429–P5507"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Epic / Valuable Slice",
                                "purpose":  "Nivel conceptual de descomposición",
                                "parentChildRelationship":  "Bet / Initiative → Epic / Valuable Slice",
                                "decisionRelationship":  "Trazabilidad hacia Bet/Outcome",
                                "releaseRelationship":  "No definido como unidad obligatoria de release",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P6163–P6175"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Story / Task / Bug",
                                "purpose":  "Trabajo de implementación en jerarquía conceptual",
                                "parentChildRelationship":  "Epic / Valuable Slice → Story / Task / Bug",
                                "decisionRelationship":  "No es unidad de inversión",
                                "releaseRelationship":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P6163–P6175"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Change",
                                "purpose":  "Cambio técnico medido desde commit hasta producción",
                                "decisionRelationship":  "Puede generar release, hold o corrective action",
                                "releaseRelationship":  "Deployment / Release",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5854–P5876; P5728–P5745"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Release",
                                "purpose":  "Capacidad habilitada para usuarios",
                                "lifecycle":  [
                                                  "progressive exposure",
                                                  "general availability",
                                                  "observe"
                                              ],
                                "decisionRelationship":  "Release Decision",
                                "releaseRelationship":  "No equivale a Adoption ni Outcome",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5679–P5704; P5747–P5773"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Technical Debt",
                                "purpose":  "Trabajo embedded, dedicated o preventive",
                                "decisionRelationship":  "Priorizado por impacto, riesgo, recurrencia, costo y oportunidad",
                                "releaseRelationship":  "Puede integrarse en cambios o iniciativa explícita",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5959–P5973"
                                           },
                                "validationStatus":  "pending"
                            }
                        ],
    "valuableSliceAssessment":  {
                                    "sourceStatus":  "SOURCE COMPLETE",
                                    "optimizes":  [
                                                      "VALUE",
                                                      "LEARNING",
                                                      "RISK",
                                                      "FLOW"
                                                  ],
                                    "definition":  "Slice pequeña para reducir tiempo, riesgo, complejidad y feedback tardío, y completa para producir comportamiento observable, capacidad utilizable, evidencia y aprendizaje.",
                                    "risks":  [
                                                  {
                                                      "risk":  "Feature decomposition without customer value",
                                                      "status":  "NOT PRESENT",
                                                      "rationale":  "Small no equivale a Valuable."
                                                  },
                                                  {
                                                      "risk":  "Technical slicing only",
                                                      "status":  "NOT PRESENT",
                                                      "rationale":  "La fuente favorece vertical slicing y experiencia observable."
                                                  },
                                                  {
                                                      "risk":  "Big-batch delivery",
                                                      "status":  "SOURCE RISK",
                                                      "rationale":  "El AS-IS y los principios TO-BE señalan lotes grandes como riesgo."
                                                  }
                                              ],
                                    "source":  {
                                                   "title":  "14. Delivery \u0026 Release Model",
                                                   "locator":  "P5429–P5487"
                                               }
                                },
    "releaseDecisions":  [
                             {
                                 "decision":  "Release",
                                 "trigger":  "Cambio relevante alcanza Release Readiness",
                                 "inputs":  [
                                                "Technical Readiness",
                                                "Operational Readiness",
                                                "Measurement Readiness"
                                            ],
                                 "participants":  [
                                                      "Producto",
                                                      "Desarrollo",
                                                      "SRE cuando corresponda"
                                                  ],
                                 "criteria":  [
                                                  "representa la Bet",
                                                  "calidad técnica suficiente",
                                                  "riesgo operacional aceptable"
                                              ],
                                 "outputs":  [
                                                 "Release decision"
                                             ],
                                 "evidence":  [
                                                  "quality",
                                                  "operability",
                                                  "measurement readiness"
                                              ],
                                 "source":  {
                                                "title":  "14. Delivery \u0026 Release Model",
                                                "locator":  "P5706–P5726; P5763–P5773"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "decision":  "Expand / Observe / Rollback lógico",
                                 "trigger":  "Exposición progresiva cuando el riesgo lo justifique",
                                 "inputs":  [
                                                "technical signals",
                                                "product signals"
                                            ],
                                 "participants":  [
                                                      "Producto",
                                                      "Desarrollo",
                                                      "SRE"
                                                  ],
                                 "criteria":  [
                                                  "comportamiento observado",
                                                  "riesgo"
                                              ],
                                 "outputs":  [
                                                 "Expand",
                                                 "Observe",
                                                 "Rollback lógico"
                                             ],
                                 "evidence":  [
                                                  "observability",
                                                  "customer behavior"
                                              ],
                                 "source":  {
                                                "title":  "14. Delivery \u0026 Release Model",
                                                "locator":  "P5728–P5761"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "decision":  "Continue / Adjust / Scale / Stop",
                                 "trigger":  "Evidencia post-release suficiente",
                                 "inputs":  [
                                                "Expected",
                                                "Actual",
                                                "Friction",
                                                "Technical Health",
                                                "Adoption"
                                            ],
                                 "participants":  [
                                                      "Producto",
                                                      "Customer Success",
                                                      "Desarrollo",
                                                      "SRE cuando corresponda"
                                                  ],
                                 "criteria":  [
                                                  "evidencia técnica y de producto"
                                              ],
                                 "outputs":  [
                                                 "Continue",
                                                 "Adjust",
                                                 "Scale",
                                                 "Stop"
                                             ],
                                 "evidence":  [
                                                  "activation",
                                                  "friction",
                                                  "technical health",
                                                  "Outcome evidence"
                                              ],
                                 "source":  {
                                                "title":  "14. Delivery \u0026 Release Model",
                                                "locator":  "P6075–P6088"
                                            },
                                 "validationStatus":  "pending"
                             }
                         ],
    "artifactUses":  [
                         {
                             "artifactId":  "bet-card",
                             "artifactName":  "Bet Card / Delivery Bet",
                             "relationship":  "SOURCE TERMINOLOGY CONFLICT",
                             "usage":  "Chapter 14 nombra Delivery Bet y define contenido mínimo, pero no usa literalmente Bet Card.",
                             "source":  {
                                            "title":  "14. Delivery \u0026 Release Model",
                                            "locator":  "P5390–P5397; T38"
                                        },
                             "validationStatus":  "pending"
                         }
                     ],
    "deliveryCadences":  [
                             {
                                 "name":  "Continuous Delivery flow",
                                 "cadenceType":  "OPERATING CADENCE",
                                 "purpose":  "Pull, build, test, validate y observe trabajo en flujo.",
                                 "frequency":  "continuous",
                                 "source":  {
                                                "title":  "14. Delivery \u0026 Release Model",
                                                "locator":  "P5490–P5536"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Early Customer Review",
                                 "cadenceType":  "EVENT-DRIVEN ACTIVITY",
                                 "purpose":  "Validar incrementos integrados útiles antes de completar la inversión.",
                                 "source":  {
                                                "title":  "14. Delivery \u0026 Release Model",
                                                "locator":  "P5818–P5829"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Unified Module Review",
                                 "cadenceType":  "MEETING CADENCE",
                                 "purpose":  "Revisar Outcome, Journey, increment, Moment of Truth, Evidence y Decision.",
                                 "source":  {
                                                "title":  "14. Delivery \u0026 Release Model",
                                                "locator":  "P5831–P5851"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Flow Review",
                                 "cadenceType":  "MEETING CADENCE",
                                 "purpose":  "Observar WIP, Aging, bloqueos, dependencias, releases, riesgos y decisiones.",
                                 "frequency":  "weekly · 30–45 minutes proposed",
                                 "source":  {
                                                "title":  "14. Delivery \u0026 Release Model",
                                                "locator":  "P6029–P6058"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Release Review",
                                 "cadenceType":  "DECISION CADENCE",
                                 "purpose":  "Verificar Value, Quality, Operational Risk, Measurement y Adoption según riesgo.",
                                 "frequency":  "event-driven; no meeting required for every release",
                                 "source":  {
                                                "title":  "14. Delivery \u0026 Release Model",
                                                "locator":  "P6060–P6073"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Post-Release Observation",
                                 "cadenceType":  "EVENT-DRIVEN ACTIVITY",
                                 "purpose":  "Comparar Expected, Actual, Friction, Technical Health y Adoption.",
                                 "source":  {
                                                "title":  "14. Delivery \u0026 Release Model",
                                                "locator":  "P6075–P6088"
                                            },
                                 "validationStatus":  "pending"
                             }
                         ],
    "deliveryMetrics":  [
                            {
                                "name":  "Deployment Frequency",
                                "metricClass":  "DORA",
                                "definition":  "Frecuencia con que se ponen cambios en producción.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5866–P5878"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Lead Time for Changes",
                                "metricClass":  "DORA",
                                "definition":  "Tiempo desde commit hasta producción.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5866–P5878"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Change Failure Rate",
                                "metricClass":  "DORA",
                                "definition":  "Proporción de cambios que genera degradación o requiere intervención.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5866–P5878"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Time to Restore Service (MTTR)",
                                "metricClass":  "DORA",
                                "definition":  "Tiempo para recuperar el servicio.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5866–P5878"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Cycle Time",
                                "metricClass":  "FLOW",
                                "definition":  "Tiempo desde inicio de trabajo hasta finalización.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5880–P5895"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Throughput",
                                "metricClass":  "FLOW",
                                "definition":  "Elementos terminados por periodo.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5880–P5895"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "WIP",
                                "metricClass":  "FLOW",
                                "definition":  "Trabajo simultáneamente activo.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5880–P5895"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Blocked Time",
                                "metricClass":  "FLOW",
                                "definition":  "Tiempo detenido por dependencia o decisión.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5555–P5565; P5880–P5895"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Flow Efficiency",
                                "metricClass":  "FLOW",
                                "definition":  "Relación entre tiempo activo y tiempo total.",
                                "formula":  "Touch Time / total elapsed time",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5880–P5895"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Aging Work in Progress",
                                "metricClass":  "FLOW",
                                "definition":  "Antigüedad de elementos abiertos actuales.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5880–P5895"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Post-release defects",
                                "metricClass":  "QUALITY",
                                "definition":  "Defectos observados después de release.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5897–P5906"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Rework",
                                "metricClass":  "QUALITY",
                                "definition":  "Trabajo reconstruido o corregido.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5897–P5906"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Change-related incidents",
                                "metricClass":  "RELIABILITY",
                                "definition":  "Incidentes asociados a cambios.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5897–P5906"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Quality escapes",
                                "metricClass":  "QUALITY",
                                "definition":  "Fallas que escaparon los controles previos.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5897–P5906"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Rollback",
                                "metricClass":  "RELEASE",
                                "definition":  "Releases que requieren reversión.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5897–P5906"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Critical journey errors",
                                "metricClass":  "QUALITY",
                                "definition":  "Errores sobre journeys críticos.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5897–P5906"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Release → Activation Time",
                                "metricClass":  "VALUE",
                                "definition":  "Tiempo hasta que un usuario elegible alcanza activación.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5908–P5921"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Release → First Evidence",
                                "metricClass":  "VALUE",
                                "definition":  "Tiempo hasta obtener evidencia útil.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5908–P5921"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Adoption",
                                "metricClass":  "VALUE",
                                "definition":  "Uso relevante de la capacidad.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5908–P5921"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Support after Release",
                                "metricClass":  "VALUE",
                                "definition":  "Fricción generada después de release.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5908–P5921"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Outcome Achievement",
                                "metricClass":  "VALUE",
                                "definition":  "Cambio observado en el resultado esperado.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5908–P5921"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Decision → Production",
                                "metricClass":  "FLOW",
                                "definition":  "Velocidad de Delivery desde decisión hasta producción.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5923–P5938"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Opportunity → Outcome Evidence",
                                "metricClass":  "VALUE",
                                "definition":  "Tiempo end-to-end hasta evidencia del Outcome.",
                                "formula":  "",
                                "decisionEnabled":  "Diagnosticar y ajustar el sistema, no evaluar individuos",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5923–P5938"
                                           },
                                "validationStatus":  "pending"
                            }
                        ],
    "releaseAdoptConnections":  [
                                    {
                                        "element":  "Instrumentation",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Measurement Readiness exige evento, métrica, criterio y responsable cuando corresponda.",
                                        "source":  {
                                                       "title":  "14. Delivery \u0026 Release Model",
                                                       "locator":  "P5716–P5726"
                                                   }
                                    },
                                    {
                                        "element":  "Activation measurement",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Release → Activation Time y el handoff observan activación.",
                                        "source":  {
                                                       "title":  "14. Delivery \u0026 Release Model",
                                                       "locator":  "P5802–P5816; P5908–P5921"
                                                   }
                                    },
                                    {
                                        "element":  "Customer communication",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Release Communication define contexto mínimo para CS y Soporte.",
                                        "source":  {
                                                       "title":  "14. Delivery \u0026 Release Model",
                                                       "locator":  "P5775–P5800"
                                                   }
                                    },
                                    {
                                        "element":  "Adoption observation",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Released, Activated, Adopted y Outcome Validated se distinguen.",
                                        "source":  {
                                                       "title":  "14. Delivery \u0026 Release Model",
                                                       "locator":  "P5679–P5690; P6075–P6088"
                                                   }
                                    },
                                    {
                                        "element":  "TTV",
                                        "status":  "PARTIAL",
                                        "rationale":  "Aparece en Flow Metrics Model, pero su definición operacional pertenece al capítulo futuro de Adoption.",
                                        "source":  {
                                                       "title":  "14. Delivery \u0026 Release Model",
                                                       "locator":  "P5941–P5957"
                                                   }
                                    },
                                    {
                                        "element":  "Feedback",
                                        "status":  "SUPPORTED",
                                        "rationale":  "CS/Product feedback y Early Customer Reviews alimentan ajuste.",
                                        "source":  {
                                                       "title":  "14. Delivery \u0026 Release Model",
                                                       "locator":  "P5802–P5851"
                                                   }
                                    },
                                    {
                                        "element":  "Support signals",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Release Communication define Support signal y Support Readiness.",
                                        "source":  {
                                                       "title":  "14. Delivery \u0026 Release Model",
                                                       "locator":  "P5775–P5800"
                                                   }
                                    },
                                    {
                                        "element":  "Learning trigger",
                                        "status":  "SUPPORTED",
                                        "rationale":  "Post-release evidence habilita Continue, Adjust, Scale o Stop.",
                                        "source":  {
                                                       "title":  "14. Delivery \u0026 Release Model",
                                                       "locator":  "P6075–P6088"
                                                   }
                                    }
                                ],
    "deliveryTooling":  [
                            {
                                "tool":  "Jira",
                                "classification":  "RECOMMENDATION",
                                "relationship":  "Representar flujo real, WIP, bloqueos y trazabilidad Bet/Outcome; no es configuración aprobada.",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P6150–P6190"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "tool":  "CI/CD",
                                "classification":  "RECOMMENDATION",
                                "relationship":  "Build, test y deployment repetibles.",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P6113–P6133"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "tool":  "Testing automation",
                                "classification":  "RECOMMENDATION",
                                "relationship":  "Automatizar progresivamente donde exista retorno y riesgo relevante.",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5651–P5663; P6113–P6133"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "tool":  "Observability / monitoring",
                                "classification":  "RECOMMENDATION",
                                "relationship":  "Technical y Product Observability para operación y validación.",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P6011–P6027; P6113–P6133"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "tool":  "Feature flags / progressive delivery",
                                "classification":  "H1 / TO VALIDATE",
                                "relationship":  "Separar Deployment de Release cuando riesgo e incertidumbre lo justifiquen.",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P5728–P5761"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "tool":  "Delivery dashboards",
                                "classification":  "RECOMMENDATION",
                                "relationship":  "Flow, Reliability, Delivery y Value Connection; no medir personas.",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P6192–P6227"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "tool":  "AI-assisted engineering",
                                "classification":  "H1 / TO VALIDATE",
                                "relationship":  "Acelera tareas; engineering controls quality.",
                                "source":  {
                                               "title":  "14. Delivery \u0026 Release Model",
                                               "locator":  "P6135–P6148"
                                           },
                                "validationStatus":  "pending"
                            }
                        ],
    "antiPatternAssessments":  [
                                   {
                                       "antiPattern":  "Release = Done",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Technical Done, Released, Activated, Adopted y Outcome Validated se distinguen.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5679–P5690"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Release = Value",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Release is not Outcome es principio explícito.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5381–P5386; P6246–P6255"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Large batch delivery",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "El TO-BE responde a Large Initiative/Large Epic y favorece lotes pequeños.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5374–P5375; P5429–P5471"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Too much WIP",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "WIP excesivo incrementa espera y pérdida de foco; no existe baseline numérico.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5387–P5388; P5525–P5536"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Feature factory",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "La entrada no debe ser Feature aprobada y el éxito no es entregar tickets.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5390–P5397; P6366–P6370"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Status-driven delivery",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Delivery Review cambia actividad por flujo y no recorre ticket por ticket.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P6029–P6058"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Story points as productivity",
                                       "status":  "OPERATING MODEL RISK",
                                       "rationale":  "La fuente prohíbe métricas sistémicas como evaluación individual, pero no trata story points de forma explícita.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P6213–P6227"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "DORA as individual performance",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "DORA y flow metrics diagnostican el sistema, no individuos.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5866–P5878; P6213–P6227"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Technical handoff to SRE",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "SRE participa temprano y proporcionalmente al riesgo.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5603–P5620"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Quality as final-phase testing",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Quality built-in y cuatro dimensiones de calidad.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5376–P5378; P5639–P5663"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Release without instrumentation",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Measurement Readiness es tratamiento TO-BE y observabilidad actual se describe fragmentada.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5706–P5726; T42"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Release without adoption observation",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "El handoff tradicional se rechaza y se propone observación posterior.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5802–P5816"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Long-lived branches / integration delay",
                                       "status":  "OPERATING MODEL RISK",
                                       "rationale":  "La fuente recomienda código integrado y CI/CD, pero no evalúa ramas de larga duración.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5665–P5675; P6113–P6129"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Dependency queues",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Waiting, handoffs y dependencias se identifican como desperdicio y causa de bloqueo.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "P5538–P5568; T39"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Rework hidden as normal flow",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Rework es waste y métrica de calidad explícita.",
                                       "source":  {
                                                      "title":  "14. Delivery \u0026 Release Model",
                                                      "locator":  "T39; P5897–P5906"
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
                                            "text":  "El SEIF Delivery \u0026 Release Model define cómo una apuesta ya priorizada y suficientemente validada se convierte en software operable, observable y disponible para generar el Outcome esperado.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5299"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo conecta directamente:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5300"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery → Decision → Delivery → Release → Adoption → Outcome",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5301"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y responde a los hallazgos identificados durante las entrevistas:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5302"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Desarrollo recibe iniciativas con diferentes niveles de claridad;",
                                                          "existen dependencias entre Producto, UX, Desarrollo, SRE y Soporte;",
                                                          "la incertidumbre funcional puede continuar durante Delivery;",
                                                          "SRE identifica deuda técnica y necesidades de sostenibilidad;",
                                                          "existen métricas DORA conceptualmente incorporadas al modelo SEIF;",
                                                          "el release técnico no garantiza adopción ni valor;",
                                                          "CS y Soporte reciben señales relevantes después de la entrega;",
                                                          "existen oportunidades para obtener feedback antes de completar inversiones significativas;",
                                                          "la organización requiere mejorar flujo y predictibilidad sin agregar una capa pesada de gestión."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5303–P5311"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es introducir una nueva metodología de desarrollo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5312"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es establecer las condiciones mínimas mediante las cuales SEIF puede:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5313"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "entregar cambios pequeños, valiosos, confiables, observables y capaces de generar aprendizaje.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5314"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5298"
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
                                            "text":  "El flujo definido anteriormente es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5317"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL → FRAME → DISCOVER → DECIDE → VALIDATE → DELIVER → RELEASE → ADOPT → MEASURE \u0026 LEARN",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5318"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery comienza cuando existe una Bet priorizada con suficiente reducción de incertidumbre.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5319"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release no representa el final del ciclo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5320"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Representa el punto donde la hipótesis empieza a enfrentarse con comportamiento real.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5321"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5322"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery reduce incertidumbre antes de construir.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5323"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery convierte la hipótesis en capacidad operativa.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5324"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release expone esa capacidad al contexto real.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5325"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption y Measurement determinan si generó valor.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5326"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5316"
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
                                            "text":  "El cambio requerido no es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5329"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Waterfall → Agile",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5330"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ni:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5331"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scrum → Kanban",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5332"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ni:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5333"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "más ceremonias → mejor Delivery.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5334"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cambio es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5335"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AS-IS predominante",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5336"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scope",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5337"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5338"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Development",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5339"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5340"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Testing",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5341"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5342"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5343"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5344"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5345"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TO-BE",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5346"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validated Bet",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5347"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5348"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery Readiness",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5349"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5350"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Small Valuable Slice",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5351"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5352"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Build + Test + Observe",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5353"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5354"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release Readiness",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5355"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5356"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5357"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5358"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5359"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5360"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Evidence",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5361"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5362"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learn",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5363"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La unidad de progreso deja de ser únicamente:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5364"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“trabajo desarrollado”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5365"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y pasa a ser:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5366"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“capacidad entregada que puede producir y demostrar valor.”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5367"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5328"
                                         }
                                     ]
                     },
                     {
                         "id":  "principios-del-delivery-model",
                         "title":  "Principios del Delivery Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo se rige por ocho principios.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5370"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Flow over utilization",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5371"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es mantener a todas las personas ocupadas.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5372"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es mover valor a través del sistema.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5373"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Small batches",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5374"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entregas pequeñas reducen riesgo y aceleran aprendizaje.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5375"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Quality built-in",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5376"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La calidad no constituye una etapa posterior.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5377"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Forma parte de Delivery.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5378"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Reduce uncertainty before commitment",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5379"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La incertidumbre que puede resolverse económicamente antes de desarrollar no debe trasladarse innecesariamente a Delivery.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5380"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Reliability is part of the product",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5381"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad que no opera confiablemente no genera valor sostenible.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5382"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Release is not Outcome",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5383"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desplegar no demuestra valor.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5384"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. Observability before learning",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5385"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si SEIF no puede observar qué ocurrió, no puede validar la hipótesis.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5386"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. Finish before starting more",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5387"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El WIP excesivo incrementa espera, dependencias y pérdida de foco.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5388"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5369"
                                         }
                                     ]
                     },
                     {
                         "id":  "entrada-a-delivery-delivery-bet",
                         "title":  "Entrada a Delivery — Delivery Bet",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La entrada a Delivery no debe ser simplemente:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5391"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Feature aprobada.”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5392"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe existir una Delivery Bet.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5393"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Delivery Bet representa:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5394"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "una inversión acotada que SEIF realiza porque existe evidencia suficiente para creer que puede modificar un Outcome.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5395"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contiene como mínimo:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5396"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-038",
                                                          "caption":  "Entrada a Delivery — Delivery Bet",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Elemento",
                                                                          "Pregunta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Problem",
                                                                           "¿Qué problema estamos resolviendo?"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "¿Qué queremos cambiar?"
                                                                       ],
                                                                       [
                                                                           "User",
                                                                           "¿Para quién?"
                                                                       ],
                                                                       [
                                                                           "Evidence",
                                                                           "¿Qué respalda la inversión?"
                                                                       ],
                                                                       [
                                                                           "Hypothesis",
                                                                           "¿Qué creemos que funcionará?"
                                                                       ],
                                                                       [
                                                                           "Success Signal",
                                                                           "¿Cómo sabremos si funcionó?"
                                                                       ],
                                                                       [
                                                                           "Scope",
                                                                           "¿Cuál es la menor capacidad necesaria?"
                                                                       ],
                                                                       [
                                                                           "Risks",
                                                                           "¿Qué puede impedirlo?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "14. Delivery \u0026 Release Model",
                                                                         "locator":  "T38"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto conecta Product Discovery con Delivery sin requerir documentación extensa.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5397"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5390"
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
                                            "text":  "Delivery Readiness no constituye una aprobación burocrática.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5400"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es una comprobación de que el equipo posee suficiente claridad para comprometer capacidad.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5401"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Bet está suficientemente preparada cuando existe respuesta razonable a:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5402"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿Qué problema estamos resolviendo?",
                                                          "¿Qué Outcome buscamos?",
                                                          "¿Quién obtiene el valor?",
                                                          "¿Qué evidencia respalda la apuesta?",
                                                          "¿Qué hipótesis estamos implementando?",
                                                          "¿Cuál es el alcance inicial?",
                                                          "¿Qué reglas de negocio son críticas?",
                                                          "¿Qué experiencia necesita protegerse?",
                                                          "¿Qué riesgos técnicos conocemos?",
                                                          "¿Cómo observaremos el resultado?"
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5403–P5412"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las respuestas requieren el mismo nivel de detalle.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5413"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La profundidad depende del riesgo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5414"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5399"
                                         }
                                     ]
                     },
                     {
                         "id":  "delivery-readiness-specification-complete",
                         "title":  "Delivery Readiness ≠ Specification Complete",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no exige especificaciones completas antes de desarrollar.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5417"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto recrearía un modelo secuencial.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5418"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La condición es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5419"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "suficiente claridad para iniciar el siguiente incremento sin trasladar incertidumbre crítica evitable al equipo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5420"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los detalles pueden evolucionar durante Delivery.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5421"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema aparece cuando cuestiones fundamentales continúan abiertas:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5422"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "qué problema se resuelve;",
                                                          "para quién;",
                                                          "qué resultado se espera;",
                                                          "qué reglas críticas existen;",
                                                          "qué significa éxito."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5423–P5427"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5416"
                                         }
                                     ]
                     },
                     {
                         "id":  "smallest-valuable-slice",
                         "title":  "Smallest Valuable Slice",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una iniciativa no debe ingresar automáticamente a Delivery como un bloque completo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5430"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe descomponerse en:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5431"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Smallest Valuable Slices",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5432"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una slice debe ser suficientemente pequeña para reducir:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5433"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "tiempo;",
                                                          "riesgo;",
                                                          "complejidad;",
                                                          "feedback tardío;"
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5434–P5437"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "pero suficientemente completa para producir:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5438"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "comportamiento observable;",
                                                          "capacidad utilizable;",
                                                          "evidencia;",
                                                          "aprendizaje."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5439–P5442"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5443"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Small ≠ Valuable.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5444"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una tarea técnica pequeña no constituye necesariamente una entrega de valor.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5445"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5429"
                                         }
                                     ]
                     },
                     {
                         "id":  "feature-decomposition",
                         "title":  "Feature Decomposition",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo busca evolucionar de:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5448"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Large Initiative",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5449"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5450"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Large Epic",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5451"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5452"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Many Technical Tasks",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5453"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5454"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5455"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5456"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5457"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5458"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Valuable Slice 1",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5459"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5460"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5461"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5462"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Valuable Slice 2",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5463"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5464"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5465"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5466"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Valuable Slice N",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5467"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es reducir el tiempo entre:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5468"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“empezamos”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5469"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5470"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“aprendimos algo útil”.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5471"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5447"
                                         }
                                     ]
                     },
                     {
                         "id":  "vertical-slicing",
                         "title":  "Vertical Slicing",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando sea viable, las slices deben atravesar el flujo necesario para producir una experiencia observable.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5474"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se evita descomponer exclusivamente por capas:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5475"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Frontend",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5476"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5477"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Backend",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5478"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5479"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Database",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5480"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5481"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Testing",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5482"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "porque ninguna capa aislada necesariamente produce valor observable.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5483"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El patrón objetivo es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5484"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Small user/business capability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5485"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "que puede requerir:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5486"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX + Frontend + Backend + Data + Test + Observability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5487"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "en una misma slice.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5488"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5473"
                                         }
                                     ]
                     },
                     {
                         "id":  "delivery-flow-to-be",
                         "title":  "Delivery Flow TO-BE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo lógico recomendado es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5491"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "READY",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5492"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5493"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "IN DELIVERY",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5494"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5495"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALIDATING",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5496"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5497"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "READY FOR RELEASE",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5498"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5499"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RELEASED",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5500"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5501"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OBSERVING",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5502"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5503"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALUE VALIDATED",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5504"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando corresponda, puede existir:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5505"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BLOCKED",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5506"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "como condición visible, no como destino permanente.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5507"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo debe representar estados reales del trabajo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5508"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No departamentos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5509"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5490"
                                         }
                                     ]
                     },
                     {
                         "id":  "pull-system",
                         "title":  "Pull System",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE opera bajo principio Pull:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5512"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "el equipo toma nuevo trabajo cuando posee capacidad para hacerlo avanzar.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5513"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5514"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“se asigna trabajo porque una persona está disponible.”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5515"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce un desperdicio Lean crítico:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5516"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Inventory of Work",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5517"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trabajo iniciado que todavía no genera valor.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5518"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una alta utilización individual puede coexistir con un Lead Time organizacional deficiente.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5519"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, SEIF debe optimizar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5520"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5521"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "antes que:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5522"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resource Utilization.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5523"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5511"
                                         }
                                     ]
                     },
                     {
                         "id":  "wip-limits",
                         "title":  "WIP Limits",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Delivery Model incorpora límites explícitos de trabajo en curso.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5526"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no proporciona baseline suficiente para definir un número rígido.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5527"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, los límites se calibran utilizando:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5528"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "tamaño del equipo;",
                                                          "throughput;",
                                                          "bloqueos;",
                                                          "dependencias;",
                                                          "Cycle Time."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5529–P5533"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La regla inicial es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5534"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "si una célula acumula trabajo iniciado sin terminar, no debe resolver el problema iniciando más trabajo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5535"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe identificar qué impide terminar.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5536"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5525"
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
                         "id":  "gestion-de-bloqueos",
                         "title":  "Gestión de bloqueos",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todo bloqueo relevante debe hacerse visible.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5539"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un bloqueo se clasifica inicialmente en:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5540"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5541"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Falta decisión o claridad.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5542"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5543"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Falta validación o definición de experiencia.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5544"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5545"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Arquitectura, código, integración o dependencia.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5546"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE / Infrastructure",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5547"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entorno, operación, seguridad, observabilidad.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5548"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "External",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5549"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente, proveedor o dependencia externa.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5550"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Organizational",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5551"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prioridad, capacidad o decisión.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5552"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta clasificación permitirá posteriormente identificar dependencias estructurales, no solamente casos individuales.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5553"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5538"
                                         }
                                     ]
                     },
                     {
                         "id":  "blocked-time",
                         "title":  "Blocked Time",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Además del Cycle Time, SEIF debe observar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5556"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Blocked Time",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5557"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "tiempo durante el cual un elemento no puede avanzar debido a una dependencia o decisión.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5558"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un Lead Time elevado puede no deberse a que Desarrollo “trabaja lento”.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5559"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede estar compuesto principalmente por espera.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5560"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La separación:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5561"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Touch Time",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5562"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "vs.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5563"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Wait Time",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5564"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "es fundamental para identificar desperdicio Lean real.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5565"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5555"
                                         }
                                     ]
                     },
                     {
                         "id":  "waste-en-delivery",
                         "title":  "Waste en Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo observa ocho desperdicios relevantes.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5568"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-039",
                                                          "caption":  "Waste en Delivery",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Waste",
                                                                          "Manifestación"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Waiting",
                                                                           "Espera por decisiones, ambientes o dependencias"
                                                                       ],
                                                                       [
                                                                           "WIP",
                                                                           "Demasiado trabajo iniciado"
                                                                       ],
                                                                       [
                                                                           "Handoffs",
                                                                           "Transferencias entre funciones"
                                                                       ],
                                                                       [
                                                                           "Rework",
                                                                           "Reconstrucción por entendimiento tardío"
                                                                       ],
                                                                       [
                                                                           "Overproduction",
                                                                           "Construir más de lo necesario"
                                                                       ],
                                                                       [
                                                                           "Overprocessing",
                                                                           "Procesos o documentación sin valor proporcional"
                                                                       ],
                                                                       [
                                                                           "Defects",
                                                                           "Fallas y correcciones"
                                                                       ],
                                                                       [
                                                                           "Unused Learning",
                                                                           "Feedback disponible que no modifica decisiones"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "14. Delivery \u0026 Release Model",
                                                                         "locator":  "T39"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo del Delivery Model es reducir estos desperdicios sistemáticamente.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5569"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5567"
                                         }
                                     ]
                     },
                     {
                         "id":  "relacion-producto-desarrollo-durante-delivery",
                         "title":  "Relación Producto–Desarrollo durante Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto no desaparece después del refinamiento.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5572"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante Delivery responde principalmente por:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5573"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "decisiones funcionales;",
                                                          "Outcome;",
                                                          "trade-offs;",
                                                          "scope;",
                                                          "criterios de éxito."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5574–P5578"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo responde principalmente por:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5579"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "diseño técnico;",
                                                          "implementación;",
                                                          "calidad;",
                                                          "sostenibilidad;",
                                                          "estimación técnica;",
                                                          "factibilidad."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5580–P5585"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La relación no debe operar como:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5586"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto especifica → Desarrollo ejecuta.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5587"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opera como:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5588"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto y Tecnología resuelven conjuntamente una Bet desde responsabilidades diferentes.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5589"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5571"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles participantes en Delivery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "relacion-ux-desarrollo-durante-delivery",
                         "title":  "Relación UX–Desarrollo durante Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX tampoco finaliza su responsabilidad al entregar diseños.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5592"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante Delivery debe existir capacidad para:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5593"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "resolver casos no previstos;",
                                                          "validar comportamiento;",
                                                          "revisar implementación;",
                                                          "proteger Momentos de Verdad;",
                                                          "ajustar experiencia cuando nueva evidencia lo requiera."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5594–P5598"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5599"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Design → Handoff → Interpretation → Rework.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5600"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es continuidad de contexto.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5601"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5591"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles participantes en Delivery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "relacion-sre-delivery",
                         "title":  "Relación SRE–Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran que SRE posee una perspectiva crítica sobre:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5604"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "estabilidad;",
                                                          "deuda;",
                                                          "operación;",
                                                          "sostenibilidad."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5605–P5608"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En el TO-BE, SRE participa de forma proporcional al riesgo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5609"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Especialmente cuando una Bet afecta:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5610"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "disponibilidad;",
                                                          "infraestructura;",
                                                          "rendimiento;",
                                                          "escalabilidad;",
                                                          "seguridad;",
                                                          "integraciones críticas;",
                                                          "observabilidad;",
                                                          "resiliencia."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5611–P5618"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE no constituye únicamente una función posterior al desarrollo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5619"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su participación temprana evita trasladar riesgo operacional hacia producción.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5620"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5603"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles participantes en Delivery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "reliability-by-design",
                         "title":  "Reliability by Design",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cambios relevantes, Delivery debe preguntarse:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5623"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Availability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5624"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurre si esta capacidad falla?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5625"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Observability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5626"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo detectaremos el problema?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5627"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recovery",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5628"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo se recupera?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5629"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dependency",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5630"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué componentes externos necesita?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5631"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacity",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5632"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Existen implicaciones de carga?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5633"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Supportability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5634"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Soporte podrá entender y atender el comportamiento?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5635"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las iniciativas requieren el mismo análisis.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5636"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El nivel se determina por riesgo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5637"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5622"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling y automatización",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "quality-model",
                         "title":  "Quality Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La calidad se gestiona en cuatro dimensiones.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5640"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Functional Quality",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5641"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad hace lo esperado.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5642"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Experience Quality",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5643"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario puede lograr el resultado sin fricción innecesaria.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5644"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical Quality",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5645"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La solución es mantenible y sostenible.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5646"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operational Quality",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5647"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede operar, observarse y recuperarse.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5648"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una entrega puede pasar pruebas funcionales y aun no estar preparada para producción si falla en las demás dimensiones.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5649"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5639"
                                         }
                                     ]
                     },
                     {
                         "id":  "testing-strategy",
                         "title":  "Testing Strategy",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no prescribe herramientas específicas.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5652"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí establece el principio:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5653"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "automatizar progresivamente aquello que se ejecuta repetidamente y cuya falla representa riesgo relevante.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5654"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La estrategia debe evolucionar hacia:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5655"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fast automated feedback",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5656"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5657"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Integration validation",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5658"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5659"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Critical journey validation",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5660"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5661"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Production observability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5662"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las pruebas manuales continúan siendo válidas donde el costo de automatización no se justifique.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5663"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5651"
                                         }
                                     ]
                     },
                     {
                         "id":  "definition-of-done-tecnica",
                         "title":  "Definition of Done técnica",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La Definition of Done debe representar las condiciones necesarias para considerar una slice técnicamente terminada.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5666"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Según el tipo de cambio puede incluir:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5667"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "código integrado;",
                                                          "revisión completada;",
                                                          "pruebas relevantes;",
                                                          "reglas críticas verificadas;",
                                                          "observabilidad incorporada;",
                                                          "documentación operacional cuando aplique;",
                                                          "seguridad considerada;",
                                                          "mecanismo de rollback o recuperación cuando sea necesario."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5668–P5675"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe convertirse en un checklist universal excesivo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5676"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe proteger riesgo real.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5677"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5665"
                                         }
                                     ]
                     },
                     {
                         "id":  "technical-done-product-done",
                         "title":  "Technical Done ≠ Product Done",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo distingue:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5680"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical Done",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5681"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad está correctamente construida.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5682"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Released",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5683"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad está disponible en producción.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5684"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activated",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5685"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario logró utilizarla inicialmente.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5686"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopted",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5687"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe uso recurrente relevante.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5688"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Validated",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5689"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe evidencia del resultado esperado.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5690"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto elimina la ambigüedad del término “terminado”.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5691"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5679"
                                         }
                                     ]
                     },
                     {
                         "id":  "release-model",
                         "title":  "Release Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El release se gestiona como una capacidad del sistema, no como un evento excepcional.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5694"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es poder liberar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5695"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "cambios pequeños",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5696"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "con bajo riesgo",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5697"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de manera repetible",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5698"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "con capacidad de recuperación",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5699"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5700"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "con evidencia posterior.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5701"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un proceso de release pesado tiende a aumentar tamaño de lote.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5702"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un tamaño de lote grande incrementa riesgo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5703"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, la evolución debe favorecer releases más pequeños y frecuentes cuando la arquitectura y operación lo permitan.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5704"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5693"
                                         }
                                     ]
                     },
                     {
                         "id":  "release-readiness",
                         "title":  "Release Readiness",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de liberar un cambio relevante deben existir tres tipos de readiness.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5707"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Technical Readiness",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5708"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Funciona y cumple las condiciones técnicas necesarias?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5709"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Operational Readiness",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5710"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede SEIF operarlo y responder si algo falla?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5711"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Measurement Readiness",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5712"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Podemos observar qué ocurrió después del release?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5713"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La tercera dimensión es especialmente importante para conectar Delivery con Product Discovery.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5714"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5706"
                                         }
                                     ]
                     },
                     {
                         "id":  "measurement-readiness",
                         "title":  "Measurement Readiness",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Bet no debería llegar a producción sin haber definido, cuando corresponda:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5717"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "evento relevante;",
                                                          "métrica;",
                                                          "baseline disponible;",
                                                          "criterio de éxito;",
                                                          "señal de fricción;",
                                                          "responsable de observación."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5718–P5723"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No significa instrumentar todo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5724"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Significa instrumentar aquello necesario para responder:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5725"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Funcionó nuestra hipótesis?”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5726"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5716"
                                         }
                                     ]
                     },
                     {
                         "id":  "feature-flags-y-liberacion-progresiva",
                         "title":  "Feature Flags y liberación progresiva",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cambios de mayor incertidumbre o riesgo, SEIF debe evolucionar hacia mecanismos que permitan separar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5729"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Deployment",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5730"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5731"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5732"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Conceptualmente:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5733"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Deploy",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5734"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Código disponible técnicamente.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5735"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5736"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidad habilitada para usuarios.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5737"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto puede permitir:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5738"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "habilitación gradual;",
                                                          "prueba con clientes seleccionados;",
                                                          "validación temprana;",
                                                          "reducción de riesgo;",
                                                          "rollback lógico;",
                                                          "experimentación."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5739–P5744"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La implementación técnica específica deberá definirse con Desarrollo y SRE.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5745"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5728"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling y automatización",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "progressive-delivery",
                         "title":  "Progressive Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando el riesgo lo justifique:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5748"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Internal",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5749"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5750"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Selected users / customers",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5751"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5752"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Limited exposure",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5753"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5754"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Observe",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5755"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5756"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expand",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5757"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5758"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "General availability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5759"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto es especialmente relevante para cambios donde SEIF necesita confirmar comportamiento antes de exposición completa.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5760"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las funcionalidades requieren progressive delivery.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5761"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5747"
                                         }
                                     ]
                     },
                     {
                         "id":  "release-decision",
                         "title":  "Release Decision",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La decisión de release no debe pertenecer exclusivamente a Producto ni exclusivamente a Tecnología.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5764"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las responsabilidades se separan.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5765"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5766"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La capacidad representa la Bet que queremos poner frente al usuario?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5767"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5768"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La solución posee calidad técnica suficiente?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5769"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5770"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El riesgo operacional es aceptable cuando corresponda?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5771"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La decisión no necesita convertirse en comité.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5772"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe existir claridad de accountability según el tipo de riesgo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5773"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5763"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Authority y accountability de decisiones de release",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "release-communication",
                         "title":  "Release Communication",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS y Soporte necesitan contexto suficiente sobre cambios relevantes.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5776"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es producir documentación extensa por cada release.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5777"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La información mínima es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5778"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "What changed",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5779"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué cambió?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5780"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Who is affected",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5781"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿A quién afecta?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5782"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected value",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5783"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué debería mejorar?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5784"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Known considerations",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5785"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué deben conocer?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5786"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Support signal",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5787"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué comportamiento debería escalarse?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5788"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto cierra una brecha entre Delivery y operación.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5789"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5775"
                                         }
                                     ]
                     },
                     {
                         "id":  "support-readiness",
                         "title":  "Support Readiness",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cambios con impacto relevante en cliente, Soporte debe poder responder:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5792"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "qué cambió;",
                                                          "comportamiento esperado;",
                                                          "errores conocidos relevantes;",
                                                          "cómo identificar el problema;",
                                                          "cuándo escalar;",
                                                          "a quién escalar."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5793–P5798"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El propósito no es convertir Soporte en especialista técnico de cada release.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5799"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es evitar que el conocimiento de una nueva capacidad permanezca únicamente en quienes la construyeron.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5800"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5791"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles participantes en Delivery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "release-adoption-handoff",
                         "title":  "Release → Adoption Handoff",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo elimina el handoff tradicional:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5803"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Ya está en producción; ahora le corresponde a CS.”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5804"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El patrón TO-BE es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5805"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5806"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5807"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation observation",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5808"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5809"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS/Product feedback",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5810"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5811"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction detection",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5812"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5813"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adjustment",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5814"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto continúa siendo accountable por el Outcome.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5815"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS lidera el acompañamiento operacional de adopción.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5816"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5802"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones de Activation, Adoption, TTV y evidencia posterior",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "early-customer-reviews",
                         "title":  "Early Customer Reviews",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una de las oportunidades relevantes identificadas es evitar esperar hasta la finalización completa para obtener feedback.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5819"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE utiliza revisiones tempranas en dos momentos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5820"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de Delivery",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5821"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototipos y experimentos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5822"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante Delivery",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5823"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incrementos suficientemente integrados cuando exista algo útil que validar.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5824"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La revisión debe realizarse por flujo/módulo, no por componentes técnicos aislados.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5825"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La pregunta es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5826"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Este incremento permite avanzar hacia el resultado esperado?”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5827"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5828"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Terminamos las tareas comprometidas?”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5829"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5818"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles participantes en Delivery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, participantes y triggers operativos",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "unified-module-review",
                         "title":  "Unified Module Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para módulos relevantes, SEIF puede utilizar una revisión integrada con:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5832"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Producto;",
                                                          "UX;",
                                                          "Desarrollo;",
                                                          "cliente/usuario cuando corresponda;",
                                                          "CS;",
                                                          "SRE si existe impacto operacional."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5833–P5838"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No requiere que todos participen siempre.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5839"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La revisión busca observar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5840"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5841"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5842"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Journey",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5843"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5844"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Working increment",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5845"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5846"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Moment of Truth",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5847"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5848"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5849"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5850"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5851"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce feedback fragmentado.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5852"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5831"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, participantes y triggers operativos",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "change-failure",
                         "title":  "Change Failure",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un release que genera incidentes, rollback o corrección urgente representa información sobre la capacidad del sistema.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5855"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe interpretarse como fracaso individual.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5856"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe alimentar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5857"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "calidad;",
                                                          "testing;",
                                                          "arquitectura;",
                                                          "observabilidad;",
                                                          "tamaño de lote;",
                                                          "proceso de release."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5858–P5863"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta lógica se conecta con DORA.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5864"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5854"
                                         }
                                     ]
                     },
                     {
                         "id":  "dora-dentro-del-delivery-model",
                         "title":  "DORA dentro del Delivery Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya reconoce conceptualmente los indicadores DORA.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5867"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE los incorpora como métricas del sistema de entrega, no como métricas individuales.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5868"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Deployment Frequency",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5869"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Con qué frecuencia podemos poner cambios en producción?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5870"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lead Time for Changes",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5871"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tarda un cambio desde commit hasta producción?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5872"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Change Failure Rate",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5873"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué proporción de cambios genera degradación o requiere intervención?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5874"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Time to Restore Service",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5875"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué tan rápido recuperamos el servicio?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5876"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas métricas permiten diagnosticar capacidad técnica de entrega.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5877"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No determinan si el producto genera valor.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5878"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5866"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, target y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metricas-de-flujo-complementarias",
                         "title":  "Métricas de flujo complementarias",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "DORA por sí solo no muestra todo el flujo Product → Delivery.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5881"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo incorpora:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5882"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cycle Time",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5883"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiempo desde inicio de trabajo hasta finalización.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5884"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Throughput",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5885"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cantidad de elementos terminados por periodo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5886"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "WIP",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5887"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trabajo simultáneamente activo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5888"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Blocked Time",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5889"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiempo detenido.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5890"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Efficiency",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5891"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Relación entre tiempo activo y tiempo total.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5892"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aging Work in Progress",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5893"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuánto tiempo llevan abiertos los elementos actuales.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5894"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas métricas permiten localizar fricción sistémica.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5895"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5880"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, target y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling y automatización",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metricas-de-calidad",
                         "title":  "Métricas de calidad",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Además de DORA:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5898"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "defectos post-release;",
                                                          "rework;",
                                                          "incidentes asociados a cambios;",
                                                          "escapes de calidad;",
                                                          "rollback;",
                                                          "errores sobre journeys críticos."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5899–P5904"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es generar un dashboard masivo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5905"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Inicialmente deben seleccionarse pocas métricas capaces de producir decisiones.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5906"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5897"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, target y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metricas-delivery-value",
                         "title":  "Métricas Delivery → Value",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Delivery Model debe conectarse con Producto.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5909"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, se observa también:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5910"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release → Activation Time",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5911"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tarda un usuario elegible en alcanzar activación después de release?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5912"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release → First Evidence",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5913"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tarda SEIF en obtener evidencia útil?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5914"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5915"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La capacidad se utiliza de manera relevante?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5916"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Support after Release",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5917"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué fricción genera?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5918"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Achievement",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5919"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El comportamiento esperado realmente cambió?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5920"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta conexión evita optimizar Delivery de manera aislada.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5921"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5908"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, target y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metrica-critica-end-to-end-lead-time",
                         "title":  "Métrica crítica — End-to-End Lead Time",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF debe evolucionar progresivamente hacia la medición de:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5924"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "End-to-End Lead Time",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5925"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No solamente:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5926"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Commit → Production",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5927"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "sino también:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5928"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision → Production",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5929"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y posteriormente:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5930"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity → Outcome Evidence.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5931"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite distinguir tres velocidades:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5932"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Speed",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5933"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tardamos en decidir?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5934"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery Speed",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5935"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tardamos en construir?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5936"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Speed",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5937"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tardamos en saber si funcionó?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5938"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una organización puede tener buen Delivery y continuar aprendiendo lentamente.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5939"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5923"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, target y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "flow-metrics-model",
                         "title":  "Flow Metrics Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema completo puede observarse así:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5942"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5943"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Opportunity-to-Decision",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5944"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5945"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Decision-to-Start",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5946"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Start",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5947"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Cycle Time",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5948"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Commit",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5949"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ DORA Lead Time",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5950"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5951"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Release-to-Activation",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5952"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5953"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ TTV / Adoption",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5954"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5955"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Learning",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5956"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite localizar exactamente dónde está la espera.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5957"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5941"
                                         }
                                     ]
                     },
                     {
                         "id":  "deuda-tecnica-dentro-de-delivery",
                         "title":  "Deuda técnica dentro de Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La deuda técnica no debe tratarse únicamente mediante iniciativas separadas.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5960"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen tres mecanismos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5961"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Embedded",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5962"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mejora realizada mientras se modifica la zona afectada.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5963"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dedicated",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5964"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Iniciativa explícita cuando el riesgo o magnitud lo justifica.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5965"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Preventive",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5966"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prácticas que evitan generar nueva deuda.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5967"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La decisión depende de:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5968"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "impacto;",
                                                          "riesgo;",
                                                          "recurrencia;",
                                                          "costo;",
                                                          "oportunidad."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5969–P5973"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5959"
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
                         "id":  "capacity-allocation",
                         "title":  "Capacity Allocation",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no proporciona evidencia suficiente para fijar porcentajes rígidos de capacidad.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5976"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se establece, por ejemplo:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5977"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“20% obligatorio para deuda.”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5978"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La distribución debe hacerse visible entre:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5979"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "evolución;",
                                                          "mantenimiento;",
                                                          "deuda;",
                                                          "incidentes;",
                                                          "soporte técnico;",
                                                          "trabajo no planificado."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5980–P5985"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vez obtenida la línea base, SEIF podrá decidir conscientemente cómo ajustar capacidad.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5986"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5975"
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
                         "id":  "unplanned-work",
                         "title":  "Unplanned Work",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El trabajo no planificado debe medirse.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5989"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No porque deba desaparecer.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5990"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sino porque representa una señal sobre la salud del sistema.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5991"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un porcentaje persistentemente alto puede evidenciar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5992"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "calidad;",
                                                          "deuda;",
                                                          "interrupciones;",
                                                          "soporte;",
                                                          "arquitectura;",
                                                          "operación;",
                                                          "priorización reactiva."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P5993–P5999"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin visibilidad, ese consumo de capacidad puede interpretarse erróneamente como baja predictibilidad de Desarrollo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6000"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P5988"
                                         }
                                     ]
                     },
                     {
                         "id":  "sre-y-sostenibilidad",
                         "title":  "SRE y sostenibilidad",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE aporta al Delivery Model una perspectiva que debe mantenerse separada de Producto.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6003"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto responde:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6004"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué Outcome debemos perseguir?”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6005"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE ayuda a responder:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6006"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Podemos operar este sistema con el nivel de confiabilidad necesario?”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6007"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ambas preguntas son necesarias.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6008"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un producto que genera valor pero no puede sostenerlo tiene un problema de producto.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6009"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6002"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles participantes en Delivery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "observability",
                         "title":  "Observability",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La observabilidad debe evolucionar en dos direcciones.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6012"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical Observability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6013"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "disponibilidad;",
                                                          "errores;",
                                                          "rendimiento;",
                                                          "incidentes;",
                                                          "dependencias."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6014–P6018"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Observability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6019"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "eventos;",
                                                          "journeys;",
                                                          "activación;",
                                                          "fricción;",
                                                          "criterios de éxito."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6020–P6024"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La unión de ambas permite responder:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6025"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿El usuario no logró el Outcome porque la experiencia no funcionó o porque el sistema falló?”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6026"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta distinción es crítica.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6027"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6011"
                                         }
                                     ]
                     },
                     {
                         "id":  "delivery-review",
                         "title":  "Delivery Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La revisión de Delivery no debe convertirse en un reporte de personas.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6030"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe observar el sistema.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6031"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Preguntas:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6032"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿Qué Outcome estamos habilitando?",
                                                          "¿Qué está realmente en curso?",
                                                          "¿Qué lleva demasiado tiempo?",
                                                          "¿Dónde existe espera?",
                                                          "¿Qué está bloqueado?",
                                                          "¿Qué riesgo está creciendo?",
                                                          "¿Qué podemos terminar antes de iniciar algo nuevo?",
                                                          "¿Qué necesitamos aprender en el siguiente release?"
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6033–P6040"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto cambia la conversación de:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6041"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "actividad",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6042"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6043"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "flujo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6044"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6029"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, participantes y triggers operativos",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "flow-review-semanal",
                         "title":  "Flow Review semanal",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Operating Model ya definió un Flow Review semanal.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6047"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desde Delivery, el foco es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6048"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "WIP;",
                                                          "Aging;",
                                                          "bloqueos;",
                                                          "dependencias;",
                                                          "releases próximos;",
                                                          "riesgos;",
                                                          "decisiones pendientes."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6049–P6055"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Duración objetivo:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6056"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "30–45 minutos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6057"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe utilizarse para recorrer ticket por ticket.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6058"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6046"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, participantes y triggers operativos",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "release-review",
                         "title":  "Release Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se requiere una reunión para cada release.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6061"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cambios relevantes, la revisión debe verificar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6062"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6063"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué Outcome habilita?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6064"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quality",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6065"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cumple condiciones necesarias?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6066"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operational Risk",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6067"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede operarse?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6068"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Measurement",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6069"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Podemos observar el resultado?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6070"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6071"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Quién necesita conocer o acompañar el cambio?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6072"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El nivel de formalidad depende del riesgo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6073"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6060"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias, participantes y triggers operativos",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "post-release-learning",
                         "title":  "Post-Release Learning",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Después del release, el equipo debe observar evidencia suficiente para responder:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6076"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6077"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué esperábamos?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6078"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actual",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6079"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6080"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6081"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problemas aparecieron?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6082"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical Health",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6083"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo se comportó el sistema?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6084"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6085"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Los usuarios comenzaron a obtener valor?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6086"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6087"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Continuamos, ajustamos, escalamos o detenemos?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6088"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto conecta Delivery con el Learning Loop.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6089"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6075"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones de Activation, Adoption, TTV y evidencia posterior",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "incident-learning-loop",
                         "title":  "Incident → Learning Loop",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los incidentes relevantes siguen:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6092"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incident",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6093"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6094"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Restore",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6095"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6096"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Understand",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6097"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6098"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6099"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6100"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Corrective Action",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6101"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6102"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "System Learning",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6103"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La acción correctiva puede producir:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6104"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cambio técnico;",
                                                          "automatización;",
                                                          "observabilidad;",
                                                          "modificación de proceso;",
                                                          "nueva Opportunity;",
                                                          "deuda priorizada."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6105–P6110"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es evitar que incidentes recurrentes sean tratados como eventos independientes.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6111"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6091"
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
                                            "text":  "La automatización debe enfocarse en eliminar espera y errores repetitivos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6114"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Áreas candidatas:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6115"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CI/CD",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6116"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Build, test y deployment repetibles.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6117"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quality",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6118"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pruebas automatizadas donde exista retorno.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6119"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Environment",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6120"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Provisionamiento y configuración.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6121"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6122"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Automatización de pasos repetitivos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6123"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Observability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6124"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Alertas y eventos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6125"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Traceability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6126"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Relacionar Bet → Delivery → Release.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6127"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reporting",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6128"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Generación automática de métricas de flujo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6129"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Communication",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6130"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Notificaciones relevantes a CS/Soporte.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6131"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es automatizar por madurez tecnológica.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6132"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es reducir friction, waiting y failure risk.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6133"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6113"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling y automatización",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "uso-de-ia-en-delivery",
                         "title":  "Uso de IA en Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La IA puede reducir tiempo de ciclo en actividades específicas:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6136"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "generación asistida de código;",
                                                          "análisis de código;",
                                                          "generación de casos de prueba;",
                                                          "documentación técnica;",
                                                          "análisis de logs;",
                                                          "síntesis de incidentes;",
                                                          "generación de release notes;",
                                                          "identificación de patrones de defectos;",
                                                          "apoyo al análisis de impacto."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6137–P6145"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La regla es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6146"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AI accelerates work; engineering controls quality.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6147"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El uso de IA no modifica accountability técnica ni elimina revisión.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6148"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6135"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling y automatización",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
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
                                            "text":  "Para el Delivery Model, Jira debe representar el flujo real y permitir medirlo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6151"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La configuración debe privilegiar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6152"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "pocos estados;",
                                                          "relaciones claras;",
                                                          "WIP visible;",
                                                          "bloqueos visibles;",
                                                          "fechas derivadas del flujo;",
                                                          "conexión con Outcome/Bet;",
                                                          "automatización de transiciones donde exista evidencia técnica;",
                                                          "dashboards de flujo."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6153–P6160"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se recomienda convertir Jira en una representación de cada microactividad del equipo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6161"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6150"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling y automatización",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "jerarquia-logica",
                         "title":  "Jerarquía lógica",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La estructura recomendada conceptualmente es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6164"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6165"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6166"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet / Initiative",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6167"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6168"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Epic / Valuable Slice",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6169"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6170"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Story / Task / Bug",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6171"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La trazabilidad debe permitir navegar en ambas direcciones:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6172"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué trabajo implementa este Outcome?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6173"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6174"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué estamos ejecutando este trabajo?",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6175"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6163"
                                         }
                                     ]
                     },
                     {
                         "id":  "workflow-recomendado",
                         "title":  "Workflow recomendado",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un workflow inicial puede mantenerse deliberadamente pequeño:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6178"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "READY",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6179"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ IN PROGRESS",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6180"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ VALIDATING",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6181"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ READY FOR RELEASE",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6182"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ DONE",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6183"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "con:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6184"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BLOCKED",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6185"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "como condición visible cuando aplique.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6186"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se recomienda crear estados separados para cada persona o función.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6187"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo a evitar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6188"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Backend Done → Waiting Frontend → UX Review → QA Queue → SRE Queue",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6189"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eso institucionalizaría los handoffs en lugar de reducirlos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6190"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6177"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling y automatización",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "dashboards-de-delivery",
                         "title":  "Dashboards de Delivery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El dashboard mínimo debe permitir observar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6193"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6194"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Cycle Time;",
                                                          "Throughput;",
                                                          "WIP;",
                                                          "Aging;",
                                                          "Blocked Time."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6195–P6199"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reliability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6200"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Change Failure Rate;",
                                                          "MTTR;",
                                                          "incidentes relevantes."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6201–P6203"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6204"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Deployment Frequency;",
                                                          "Lead Time for Changes."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6205–P6206"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value Connection",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6207"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Bet;",
                                                          "Outcome;",
                                                          "estado de adopción cuando sea posible."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6208–P6210"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El dashboard no debe utilizarse para evaluar productividad individual.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6211"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6192"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, target y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "delivery-metrics-vs-individual-performance",
                         "title":  "Delivery Metrics vs Individual Performance",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya establece correctamente que DORA no debe utilizarse para castigo individual.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6214"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El mismo principio aplica al resto de métricas de flujo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6215"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cycle Time alto no significa automáticamente:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6216"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“un desarrollador fue lento.”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6217"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede significar:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6218"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "dependencia;",
                                                          "espera;",
                                                          "scope;",
                                                          "WIP;",
                                                          "revisión;",
                                                          "ambiente;",
                                                          "arquitectura;",
                                                          "decisión tardía."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6219–P6226"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las métricas diagnostican el sistema.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6227"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6213"
                                         }
                                     ]
                     },
                     {
                         "id":  "predictability",
                         "title":  "Predictability",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La predictibilidad no se obtiene obligando al equipo a estimar con mayor precisión.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6230"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se mejora mediante:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6231"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "reducción de tamaño;",
                                                          "menor WIP;",
                                                          "menor variabilidad;",
                                                          "mejor Discovery;",
                                                          "eliminación de bloqueos;",
                                                          "estabilidad del sistema;",
                                                          "datos históricos."
                                                      ],
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6232–P6238"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con suficiente información, SEIF podrá utilizar throughput y Cycle Time histórico para mejorar forecasting.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6239"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se recomienda introducir modelos complejos antes de contar con baseline confiable.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6240"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6229"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, target y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "delivery-health-metrics",
                         "title":  "Delivery Health Metrics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El conjunto inicial recomendado es deliberadamente limitado:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6243"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-040",
                                                          "caption":  "Delivery Health Metrics",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Métrica"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Flow",
                                                                           "Cycle Time"
                                                                       ],
                                                                       [
                                                                           "Flow",
                                                                           "WIP"
                                                                       ],
                                                                       [
                                                                           "Flow",
                                                                           "Blocked Time"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "Lead Time for Changes"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "Deployment Frequency"
                                                                       ],
                                                                       [
                                                                           "Quality",
                                                                           "Change Failure Rate"
                                                                       ],
                                                                       [
                                                                           "Reliability",
                                                                           "MTTR"
                                                                       ],
                                                                       [
                                                                           "Learning",
                                                                           "Release → First Evidence"
                                                                       ],
                                                                       [
                                                                           "Value",
                                                                           "Release → Activation"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "14. Delivery \u0026 Release Model",
                                                                         "locator":  "T40"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas métricas conectan Tecnología con Producto sin mezclarlas.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6244"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6242"
                                         }
                                     ]
                     },
                     {
                         "id":  "definition-of-release-success",
                         "title":  "Definition of Release Success",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un release no es exitoso únicamente porque:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6247"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“salió sin incidentes.”",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6248"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen tres niveles.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6249"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Level 1 — Technical Success",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6250"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se desplegó correctamente.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6251"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Level 2 — Adoption Success",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6252"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El usuario puede utilizarlo y comienza a hacerlo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6253"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Level 3 — Outcome Success",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6254"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe evidencia de que modifica el resultado esperado.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6255"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF debe progresivamente aprender a distinguir los tres.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6256"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6246"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones de Activation, Adoption, TTV y evidencia posterior",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "modelo-de-madurez-delivery-release",
                         "title":  "Modelo de madurez Delivery \u0026 Release",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-041",
                                                          "caption":  "Modelo de madurez Delivery \u0026 Release",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Comportamiento"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1 — Inicial",
                                                                           "Delivery reactivo, grandes lotes, releases de alto esfuerzo"
                                                                       ],
                                                                       [
                                                                           "2 — Repetible",
                                                                           "Prácticas existentes, métricas parciales y variabilidad en el flujo"
                                                                       ],
                                                                       [
                                                                           "3 — Definido",
                                                                           "Flow común, readiness, WIP, DORA y release observable"
                                                                       ],
                                                                       [
                                                                           "4 — Gestionado",
                                                                           "Flujo predecible, automatización, progressive delivery y decisiones basadas en métricas"
                                                                       ],
                                                                       [
                                                                           "5 — Optimizado",
                                                                           "Continuous Delivery y aprendizaje end-to-end optimizado"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "14. Delivery \u0026 Release Model",
                                                                         "locator":  "T41"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado SEIF",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6259"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con base exclusivamente en las entrevistas:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6260"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6261"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target inicial",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6262"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6263"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe evidencia suficiente para justificar que el objetivo inmediato sea Continuous Delivery Nivel 5.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6264"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6258"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-14",
                                                       "subject":  "Valoración del assessment — madurez Delivery pendiente de validación",
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
                                                          "id":  "source-table-042",
                                                          "caption":  "AS-IS → TO-BE",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "AS-IS observado",
                                                                          "TO-BE"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Entrada a Delivery",
                                                                           "Claridad variable",
                                                                           "Delivery Bet"
                                                                       ],
                                                                       [
                                                                           "Scope",
                                                                           "Puede evolucionar durante ejecución",
                                                                           "Small Valuable Slices"
                                                                       ],
                                                                       [
                                                                           "WIP",
                                                                           "Demanda concurrente",
                                                                           "WIP explícito"
                                                                       ],
                                                                       [
                                                                           "Dependencias",
                                                                           "Distribuidas",
                                                                           "Bloqueos visibles"
                                                                       ],
                                                                       [
                                                                           "Producto–Dev",
                                                                           "Colaboración con variabilidad",
                                                                           "Accountability continuo"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Participación existente",
                                                                           "Validación continua"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Operación + deuda",
                                                                           "Reliability by Design"
                                                                       ],
                                                                       [
                                                                           "Calidad",
                                                                           "Prácticas técnicas",
                                                                           "Quality Built-in"
                                                                       ],
                                                                       [
                                                                           "Release",
                                                                           "Evento técnico",
                                                                           "Capability del sistema"
                                                                       ],
                                                                       [
                                                                           "Observabilidad",
                                                                           "Principalmente técnica/fragmentada",
                                                                           "Technical + Product"
                                                                       ],
                                                                       [
                                                                           "DORA",
                                                                           "Conceptualmente definido",
                                                                           "Operacionalizado"
                                                                       ],
                                                                       [
                                                                           "Feedback",
                                                                           "Puede llegar tarde",
                                                                           "Reviews tempranas"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Recibe efecto del release",
                                                                           "Support Readiness"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Acompaña posterior",
                                                                           "Adoption integrado"
                                                                       ],
                                                                       [
                                                                           "Done",
                                                                           "Desarrollo terminado",
                                                                           "Technical → Released → Value"
                                                                       ],
                                                                       [
                                                                           "Métricas",
                                                                           "Diferentes vistas",
                                                                           "Flow → Reliability → Value"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "14. Delivery \u0026 Release Model",
                                                                         "locator":  "T42"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6266"
                                         }
                                     ]
                     },
                     {
                         "id":  "delivery-release-model-consolidado",
                         "title":  "Delivery \u0026 Release Model consolidado",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo completo queda representado así:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6269"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRIORITIZED BET",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6270"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6271"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DELIVERY READINESS",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6272"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem + Outcome + Evidence + Scope + Risks",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6273"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6274"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SMALL VALUABLE SLICE",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6275"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menor incremento capaz de producir aprendizaje",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6276"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6277"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DELIVERY",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6278"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Build + Test + Observe",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6279"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6280"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CONTINUOUS VALIDATION",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6281"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto + UX + Tech",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6282"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6283"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RELEASE READINESS",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6284"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical + Operational + Measurement",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6285"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6286"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RELEASE",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6287"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Exposición controlada cuando aplique",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6288"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6289"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OBSERVE",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6290"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical + Product signals",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6291"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6292"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ACTIVATE",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6293"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primer uso relevante",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6294"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6295"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADOPT",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6296"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Uso recurrente",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6297"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6298"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6299"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado observable",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6300"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6301"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LEARN",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6302"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scale / Continue / Adjust / Stop",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6303"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6304"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6268"
                                         }
                                     ]
                     },
                     {
                         "id":  "flujo-end-to-end-de-gestion",
                         "title":  "Flujo end-to-end de gestión",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Delivery Model no debe optimizarse aisladamente.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6307"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La cadena completa que SEIF necesita gestionar es:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6308"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity → Decision → Bet → Delivery → Release → Activation → Outcome → Learning",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6309"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada segmento responde una pregunta diferente:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6310"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-043",
                                                          "caption":  "Flujo end-to-end de gestión",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Etapa",
                                                                          "Pregunta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Opportunity",
                                                                           "¿Qué problema existe?"
                                                                       ],
                                                                       [
                                                                           "Decision",
                                                                           "¿Merece inversión?"
                                                                       ],
                                                                       [
                                                                           "Bet",
                                                                           "¿Qué creemos que funcionará?"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "¿Podemos construirlo eficientemente?"
                                                                       ],
                                                                       [
                                                                           "Release",
                                                                           "¿Podemos ponerlo en operación de forma segura?"
                                                                       ],
                                                                       [
                                                                           "Activation",
                                                                           "¿El usuario logra comenzar a obtener valor?"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "¿Cambió el resultado?"
                                                                       ],
                                                                       [
                                                                           "Learning",
                                                                           "¿Qué hacemos ahora?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "14. Delivery \u0026 Release Model",
                                                                         "locator":  "T43"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6306"
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
                                            "text":  "El Delivery \u0026 Release Model no requiere una transformación tecnológica completa para comenzar.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6313"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los primeros cambios pueden concentrarse en:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6314"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Hacer visible WIP y Blocked Work.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6315"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Definir Delivery Readiness mínimo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6316"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Conectar cada Epic relevante con una Bet y Outcome.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6317"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Reducir tamaño de los elementos de Delivery.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6318"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Definir Release Readiness mínimo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6319"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Seleccionar 4–6 métricas de flujo y confiabilidad existentes.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6320"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. Incorporar CS/Soporte al contexto de releases relevantes.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6321"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. Ejecutar revisiones tempranas sobre incrementos de alto riesgo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6322"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "9. Medir Release → First Evidence.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6323"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "10. Identificar una automatización de CI/CD o release con alto costo manual y bajo riesgo de implementación.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6324"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estos cambios permiten mejorar el sistema sin introducir una transformación masiva.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6325"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6312"
                                         }
                                     ]
                     },
                     {
                         "id":  "riesgos-del-to-be",
                         "title":  "Riesgos del TO-BE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La implementación debe evitar cinco riesgos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6328"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Process Inflation",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6329"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Convertir readiness en checklist burocrático.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6330"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Jira Inflation",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6331"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Crear demasiados estados, campos y workflows.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6332"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric Theater",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6333"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Crear dashboards sin decisiones asociadas.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6334"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE Gatekeeping",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6335"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Convertir confiabilidad en una aprobación tardía en lugar de diseño temprano.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6336"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Agile Theater",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6337"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoptar nuevas ceremonias sin reducir WIP, espera, tamaño de lote o feedback tardío.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6338"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El éxito del modelo no depende de que SEIF “haga más Agile”.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6339"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Depende de que el trabajo fluya mejor y produzca aprendizaje más rápido.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6340"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6327"
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
                                            "text":  "El Delivery \u0026 Release Model busca producir cinco cambios sistémicos.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6343"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menor Time to Market",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6344"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mediante lotes más pequeños y menor espera.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6345"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menor Rework",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6346"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mediante Discovery y validación temprana.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6347"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mayor Predictibilidad",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6348"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mediante WIP, flow metrics y reducción de variabilidad.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6349"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mayor Reliability",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6350"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mediante calidad, SRE y observabilidad incorporadas al flujo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6351"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menor Time to Learning",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6352"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mediante releases observables conectados con Outcomes.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6353"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6342"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-final-del-delivery-release-model",
                         "title":  "Diagnóstico final del Delivery \u0026 Release Model",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas no justifican concluir que SEIF necesita reemplazar su metodología de desarrollo.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6356"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha principal se encuentra en cómo se conecta el sistema de Delivery con las decisiones de Producto, el riesgo técnico, el release, la adopción y la evidencia posterior.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6357"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, el TO-BE no introduce un framework adicional.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6358"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Introduce una disciplina de flujo:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6359"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no iniciar sin suficiente claridad;",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6360"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no construir más de lo necesario para aprender;",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6361"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no ocultar trabajo bloqueado;",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6362"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no optimizar utilización individual a costa del flujo;",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6363"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no liberar sin capacidad razonable de operación y observación;",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6364"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no considerar el release como evidencia de valor.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6365"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El SEIF Delivery \u0026 Release Model queda resumido en:",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6366"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALIDATED BET → SMALL VALUABLE SLICE → BUILD → VALIDATE → RELEASE → OBSERVE → ADOPT → OUTCOME → LEARN ↺",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6367"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evolución buscada es pasar de administrar principalmente trabajo en desarrollo a administrar un flujo end-to-end de valor y aprendizaje.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6368"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El criterio final de éxito no será que Desarrollo entregue más tickets.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6369"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Será que SEIF reduzca el tiempo y la fricción necesarios para convertir una decisión de Producto en valor observable para el cliente, manteniendo confiabilidad y sostenibilidad técnica.",
                                            "source":  {
                                                           "title":  "14. Delivery \u0026 Release Model",
                                                           "locator":  "P6370"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "14. Delivery \u0026 Release Model",
                                             "locator":  "P6355"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling y automatización",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     }
                 ],
    "related":  [
                    "value-stream",
                    "operating-model",
                    "prioritization",
                    "roles",
                    "artifacts",
                    "adoption-growth",
                    "feedback-loop",
                    "jira"
                ],
    "source":  {
                   "title":  "14. Delivery \u0026 Release Model",
                   "locator":  "P5297–P6370",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
