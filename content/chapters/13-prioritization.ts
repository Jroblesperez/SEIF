import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "prioritization",
    "group":  "Operating Model",
    "title":  "DECIDE: priorización y decisiones de inversión",
    "sourceTitle":  "13. Decision \u0026 Prioritization Model",
    "eyebrow":  "13 · Decide",
    "summary":  "DECIDE integra evidencia, criterios, trade-offs y capacidad para convertir Opportunities en decisiones explícitas sin confundir prioridad con compromiso de ejecución.",
    "takeaway":  "Una Opportunity priorizada no está automáticamente aprobada para iniciar: Priority, Start Decision y Capacity Commitment son decisiones distintas.",
    "executive":  {
                      "keyFindings":  [
                                          "La unidad fuente de decisión es Opportunity / Bet, no tarea, ticket o solicitud.",
                                          "Outcome, Evidence, Reach, Value y Feasibility estructuran la conversación sin algoritmo rígido.",
                                          "EXPLORE, PRIORITIZE, WAIT y DISCARD evitan un backlog sin estado decisional.",
                                          "Priority se separa explícitamente de Start Decision y Capacity Commitment."
                                      ],
                      "implication":  "El modelo propone disciplina de inversión y foco. Authority, scoring, WIP, capacidad, métricas, cadencias y tooling permanecen pendientes de validación.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "flow",
                      "sources":  [
                                      {
                                          "title":  "13. Decision \u0026 Prioritization Model",
                                          "locator":  "P4512–P5296"
                                      }
                                  ]
                  },
    "clientValidations":  [
                              {
                                  "id":  "CL-05",
                                  "subject":  "Authority y accountability de decisiones",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-09",
                                  "subject":  "Límites de WIP y Outcomes activos",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-12",
                                  "subject":  "Política de capacidad, balance y deuda",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-10",
                                  "subject":  "Arquitectura futura de tooling",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              }
                          ],
    "operatingConcepts":  [
                              {
                                  "id":  "decide-system",
                                  "title":  "DECIDE — decisión de inversión trazable",
                                  "canonicalLayers":  [
                                                          "DECIDE",
                                                          "GOVERNANCE",
                                                          "ROLES",
                                                          "EVIDENCE",
                                                          "METRICS"
                                                      ],
                                  "sourceChapters":  [
                                                         "13"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "13. Decision \u0026 Prioritization Model",
                                                             "locator":  "P4512–P5296"
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
                                                 "CL-05",
                                                 "CL-07",
                                                 "CL-09",
                                                 "CL-10",
                                                 "CL-11",
                                                 "CL-12"
                                             ]
                              }
                          ],
    "decisionSemantics":  [
                              {
                                  "term":  "ASSESSMENT",
                                  "definition":  "Diagnóstico que evidencia criterios distribuidos y falta de lógica común trazable; no es la priorización misma.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "13. Decision \u0026 Prioritization Model",
                                                 "locator":  "P4513–P4525"
                                             }
                              },
                              {
                                  "term":  "PRIORITIZATION",
                                  "definition":  "Decisión razonada sobre qué problema u Opportunity merece capacidad ahora, considerando Outcome, Evidence, Reach, Value y Feasibility.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "13. Decision \u0026 Prioritization Model",
                                                 "locator":  "P4527–P4577; P5261–P5287"
                                             }
                              },
                              {
                                  "term":  "RANKING",
                                  "definition":  "Ordenar una lista no completa la priorización; la fuente rechaza que el número más alto produzca automáticamente prioridad.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "13. Decision \u0026 Prioritization Model",
                                                 "locator":  "P4731–P4742; P4886–P4898"
                                             }
                              },
                              {
                                  "term":  "SEQUENCING",
                                  "definition":  "NOW, NEXT y LATER organizan horizontes sin convertirlos en promesas detalladas.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "13. Decision \u0026 Prioritization Model",
                                                 "locator":  "P4911–P4919"
                                             }
                              },
                              {
                                  "term":  "DECISION",
                                  "definition":  "Salida explícita sobre una Opportunity: EXPLORE, PRIORITIZE, WAIT o DISCARD.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "13. Decision \u0026 Prioritization Model",
                                                 "locator":  "P4560–P4572"
                                             }
                              },
                              {
                                  "term":  "COMMITMENT",
                                  "definition":  "Inicio posterior a la prioridad cuando existe capacidad; una Opportunity priorizada puede permanecer Not Started.",
                                  "sourceStatus":  "SOURCE COMPLETE",
                                  "source":  {
                                                 "title":  "13. Decision \u0026 Prioritization Model",
                                                 "locator":  "P4886–P4898; P5248–P5254"
                                             }
                              },
                              {
                                  "term":  "CAPACITY ALLOCATION",
                                  "definition":  "Visibilidad y balance de capacidad comprometida por Outcome y Run/Grow/Transform; no se fijan porcentajes sin baseline.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "13. Decision \u0026 Prioritization Model",
                                                 "locator":  "P4766–P4788"
                                             }
                              },
                              {
                                  "term":  "FUNDING / INVESTMENT",
                                  "definition":  "La fuente habla de decisión de inversión y compromiso financiero significativo, pero no define un mecanismo de funding separado.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "13. Decision \u0026 Prioritization Model",
                                                 "locator":  "P4513–P4514; P4755–P4763"
                                             }
                              },
                              {
                                  "term":  "BACKLOG ORDERING",
                                  "definition":  "El backlog no es la unidad de decisión; guardar u ordenar oportunidades sin decisión explícita aparece como anti-patrón.",
                                  "sourceStatus":  "SOURCE PARTIAL",
                                  "source":  {
                                                 "title":  "13. Decision \u0026 Prioritization Model",
                                                 "locator":  "P4540–P4558; P4981–P4996"
                                             }
                              }
                          ],
    "decideConcepts":  [
                           {
                               "id":  "decision-trigger",
                               "kind":  "DECISION TRIGGER",
                               "title":  "Opportunity suficientemente entendida",
                               "what":  "La Opportunity llega a decisión después de señal, framing y Discovery Evidence.",
                               "why":  "Evita convertir solicitudes directamente en trabajo comprometido.",
                               "trigger":  "Opportunity lista para decisión",
                               "inputs":  [
                                              "Opportunity",
                                              "Discovery Evidence"
                                          ],
                               "criteria":  [
                                                "Opportunity estructurada",
                                                "Discovery Evidence"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "EXPLORE",
                                               "PRIORITIZE",
                                               "WAIT",
                                               "DISCARD"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4513–P4558"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           },
                           {
                               "id":  "decision-object",
                               "kind":  "DECISION OBJECT",
                               "title":  "Opportunities / Bets",
                               "what":  "La fuente prioriza Opportunities / Bets, no tareas ni tickets.",
                               "why":  "Mantiene la decisión en el nivel de problema e inversión.",
                               "trigger":  "",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "Outcome",
                                                "Evidence",
                                                "Reach",
                                                "Value",
                                                "Feasibility"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "estado decisional",
                                               "Bet seleccionada"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4540–P4558"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           },
                           {
                               "id":  "evidence-package",
                               "kind":  "EVIDENCE PACKAGE",
                               "title":  "Decision Canvas",
                               "what":  "Vista de Opportunity, Outcome, Evidence, Reach, Value, Feasibility, riesgos, decisión y rationale.",
                               "why":  "Integra criterios distribuidos en una conversación trazable.",
                               "trigger":  "Opportunity llega a decisión",
                               "inputs":  [
                                              "Opportunity Card",
                                              "Discovery Evidence"
                                          ],
                               "criteria":  [
                                                "Outcome",
                                                "Evidence",
                                                "Reach",
                                                "Value",
                                                "Feasibility",
                                                "Key Risks"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "Decision",
                                               "Rationale"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4709–P4729"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                },
                               "artifacts":  [
                                                 "Decision Canvas"
                                             ]
                           },
                           {
                               "id":  "decision-criteria",
                               "kind":  "DECISION CRITERIA",
                               "title":  "Cinco dimensiones",
                               "what":  "Outcome + Evidence + Reach + Value + Feasibility.",
                               "why":  "Hace comparable la conversación sin algoritmo rígido.",
                               "trigger":  "",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "Outcome",
                                                "Evidence",
                                                "Reach",
                                                "Value",
                                                "Feasibility"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "evaluación trazable"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4527–P4538; P4574–P4707"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           },
                           {
                               "id":  "evaluation",
                               "kind":  "EVALUATION",
                               "title":  "Escala simple",
                               "what":  "Las dimensiones pueden evaluarse Alta/Media/Baja o 1/2/3.",
                               "why":  "Aporta consistencia sin falsa precisión.",
                               "trigger":  "Comparar oportunidades",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "cinco dimensiones"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "conversación estructurada"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4731–P4742"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           },
                           {
                               "id":  "prioritization",
                               "kind":  "PRIORITIZATION",
                               "title":  "Priorizar problemas y Opportunities",
                               "what":  "Seleccionar qué problema merece capacidad ahora y por qué.",
                               "why":  "Protege foco y conecta inversión con Outcomes.",
                               "trigger":  "",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "Outcome",
                                                "Evidence",
                                                "Reach",
                                                "Value",
                                                "Feasibility",
                                                "Strategic Fit",
                                                "Urgency contextual"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "EXPLORE",
                                               "PRIORITIZE",
                                               "WAIT",
                                               "DISCARD"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4560–P4572; P5261–P5287"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           },
                           {
                               "id":  "trade-off",
                               "kind":  "TRADE-OFF",
                               "title":  "Trade-off explícito",
                               "what":  "Cada decisión y repriorización muestra qué entra, qué sale, Outcome afectado y costo de cambio.",
                               "why":  "Hace visible el costo de cambiar prioridades.",
                               "trigger":  "",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "capacidad",
                                                "Outcomes",
                                                "costo de cambio"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "trade-off registrado"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4779–P4788; P4869–P4884; P5016–P5031"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           },
                           {
                               "id":  "capacity",
                               "kind":  "CAPACITY CONSTRAINT",
                               "title":  "Priority ≠ Start Decision",
                               "what":  "La capacidad disponible condiciona el inicio; no toda Opportunity priorizada comienza inmediatamente.",
                               "why":  "Evita confundir importancia con trabajo comprometido.",
                               "trigger":  "Opportunity priorizada",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "WIP",
                                                "Active Outcomes",
                                                "capacidad comprometida"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "PRIORITIZED / NOT STARTED",
                                               "Start Decision"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4886–P4909"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           },
                           {
                               "id":  "decision",
                               "kind":  "DECISION",
                               "title":  "Explore / Prioritize / Wait / Discard",
                               "what":  "Toda Opportunity recibe un estado decisional explícito.",
                               "why":  "Evita backlog indefinido y convierte evidencia en acción.",
                               "trigger":  "Opportunity Review",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "cinco dimensiones y evidencia"
                                            ],
                               "participants":  [
                                                    "Producto",
                                                    "consultados según T34"
                                                ],
                               "decisionOwner":  "Producto — fuente; autoridad organizacional pendiente",
                               "outputs":  [
                                               "EXPLORE",
                                               "PRIORITIZE",
                                               "WAIT",
                                               "DISCARD"
                                           ],
                               "metric":  "Decision Lead Time",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4560–P4572"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                },
                               "artifacts":  [
                                                 "Decision Log"
                                             ]
                           },
                           {
                               "id":  "commitment",
                               "kind":  "COMMITMENT",
                               "title":  "Capacity Commitment",
                               "what":  "Después de priorizar y seleccionar una Bet, se compromete capacidad antes de Delivery.",
                               "why":  "Separa decisión de valor de inicio real.",
                               "trigger":  "",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "prioridad",
                                                "capacidad disponible",
                                                "trade-offs"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "BET",
                                               "CAPACITY COMMITMENT",
                                               "DELIVERY"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4886–P4898; P5248–P5254"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           },
                           {
                               "id":  "revisit",
                               "kind":  "REVISIT",
                               "title":  "Reprioritization y Review Trigger",
                               "what":  "Nueva evidencia puede desplazar, ajustar o detener iniciativas haciendo visible el costo.",
                               "why":  "Mantiene adaptabilidad sin destruir foco.",
                               "trigger":  "",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "nueva evidencia",
                                                "riesgo",
                                                "cambio estratégico",
                                                "restricción"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "repriorizar",
                                               "ajustar",
                                               "detener",
                                               "mantener"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4869–P4884; P5016–P5031; P5254–P5258"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           },
                           {
                               "id":  "stop-defer",
                               "kind":  "STOP / DEFER",
                               "title":  "WAIT, DISCARD y Kill Criteria",
                               "what":  "Diferir o detener es una decisión válida basada en evidencia y aprendizaje.",
                               "why":  "Protege capacidad frente a inversión no justificada.",
                               "trigger":  "",
                               "inputs":  [

                                          ],
                               "criteria":  [
                                                "valor",
                                                "evidencia",
                                                "alineación",
                                                "costo",
                                                "resultado observado"
                                            ],
                               "participants":  [

                                                ],
                               "decisionOwner":  "",
                               "outputs":  [
                                               "WAIT",
                                               "DISCARD",
                                               "STOP"
                                           ],
                               "metric":  "",
                               "cadence":  "",
                               "sourceLocators":  [
                                                      {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4560–P4572; P5002–P5014"
                                                      }
                                                  ],
                               "contentClass":  "recommendation",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "INPUT":  "SOURCE COMPLETE",
                                                    "OUTPUT":  "SOURCE COMPLETE",
                                                    "DECISION":  "SOURCE COMPLETE",
                                                    "DECISION CRITERIA":  "SOURCE COMPLETE",
                                                    "TRADE-OFF":  "SOURCE COMPLETE",
                                                    "CAPACITY CONSTRAINT":  "SOURCE COMPLETE",
                                                    "REVISIT CONDITION":  "SOURCE COMPLETE",
                                                    "DECISION RECORD":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "WHO":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "METRIC":  "SOURCE PARTIAL",
                                                    "EXAMPLE":  "SOURCE PARTIAL",
                                                    "TOOL":  "SOURCE MISSING"
                                                }
                           }
                       ],
    "decisionObjects":  [
                            {
                                "sourceTerm":  "Opportunity",
                                "objectType":  "problema u oportunidad estructurada",
                                "decisionApplied":  [
                                                        "EXPLORE",
                                                        "PRIORITIZE",
                                                        "WAIT",
                                                        "DISCARD"
                                                    ],
                                "artifactRelationship":  "Opportunity Card — INPUT TO DECISION",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "P4540–P4572"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Bet",
                                "objectType":  "inversión seleccionada para modificar un Outcome",
                                "decisionApplied":  [
                                                        "seleccionar",
                                                        "comprometer capacidad",
                                                        "continuar/ajustar/detener"
                                                    ],
                                "artifactRelationship":  "Bet source term; Bet Card relationship PARTIAL",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "P4543–P4557; P5248–P5258"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Technical Debt",
                                "objectType":  "riesgo/capacidad técnica con impacto",
                                "decisionApplied":  [
                                                        "comparar con evolución funcional",
                                                        "priorizar según riesgo, impacto, consecuencia, urgencia y factibilidad"
                                                    ],
                                "artifactRelationship":  "No artifact name specified",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "P4790–P4803"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Ticket / Bug Pattern",
                                "objectType":  "patrón que puede convertirse en Opportunity",
                                "decisionApplied":  [
                                                        "gestionar por criticidad",
                                                        "convertir patrón relevante en Opportunity"
                                                    ],
                                "artifactRelationship":  "Signal/Opportunity — PARTIAL",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "P4805–P4826"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Customer Request",
                                "objectType":  "señal que requiere evaluación del problema subyacente",
                                "decisionApplied":  [
                                                        "evaluar Evidence, Reach y Value",
                                                        "decidir"
                                                    ],
                                "artifactRelationship":  "Signal/Opportunity — PARTIAL",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "P4828–P4844"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Growth Opportunity",
                                "objectType":  "Opportunity derivada de Marketing, CS o analytics",
                                "decisionApplied":  [
                                                        "Discovery",
                                                        "seleccionar intervención después"
                                                    ],
                                "artifactRelationship":  "Opportunity / Bet — PARTIAL",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "P5069–P5092"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "sourceTerm":  "Capacity",
                                "objectType":  "capacidad organizacional comprometida",
                                "decisionApplied":  [
                                                        "balance Run/Grow/Transform",
                                                        "Start Decision",
                                                        "Capacity Commitment"
                                                    ],
                                "artifactRelationship":  "Outcome Board not explicitly named",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "P4766–P4788; P4886–P4909"
                                           },
                                "validationStatus":  "pending"
                            }
                        ],
    "prioritizationMethods":  [
                                  {
                                      "name":  "Five-dimension conversation",
                                      "methodClass":  "SOURCE RECOMMENDATION",
                                      "criteria":  [
                                                       "Outcome",
                                                       "Evidence",
                                                       "Reach",
                                                       "Value",
                                                       "Feasibility"
                                                   ],
                                      "purpose":  "Hacer comparable la conversación.",
                                      "caveat":  "No es algoritmo rígido.",
                                      "source":  {
                                                     "title":  "13. Decision \u0026 Prioritization Model",
                                                     "locator":  "P4527–P4538; P4574–P4707"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "name":  "Simple evaluation scale",
                                      "methodClass":  "SOURCE RECOMMENDATION",
                                      "scale":  [
                                                    "Alta / Media / Baja",
                                                    "1 / 2 / 3"
                                                ],
                                      "purpose":  "Evaluar dimensiones con consistencia inicial.",
                                      "caveat":  "Sin pesos, fórmula, normalización ni thresholds; el número no decide.",
                                      "source":  {
                                                     "title":  "13. Decision \u0026 Prioritization Model",
                                                     "locator":  "P4731–P4742"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "name":  "Initial decision matrix",
                                      "methodClass":  "EXAMPLE",
                                      "criteria":  [
                                                       "Outcome",
                                                       "Evidence",
                                                       "Reach",
                                                       "Value",
                                                       "Feasibility"
                                                   ],
                                      "purpose":  "Mostrar una vista simplificada de conversaciones posibles.",
                                      "caveat":  "T33 es ejemplo; no sustituye juicio ni constituye política.",
                                      "source":  {
                                                     "title":  "13. Decision \u0026 Prioritization Model",
                                                     "locator":  "T33"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "name":  "Light scorecard",
                                      "methodClass":  "H1 / PROPOSED",
                                      "criteria":  [
                                                       "Outcome relevance",
                                                       "Evidence",
                                                       "Reach",
                                                       "Value",
                                                       "Feasibility"
                                                   ],
                                      "scale":  [
                                                    "Baja",
                                                    "Media",
                                                    "Alta"
                                                ],
                                      "purpose":  "Comparar varias Opportunities mediante conversación estructurada.",
                                      "caveat":  "No produce automáticamente la decisión.",
                                      "source":  {
                                                     "title":  "13. Decision \u0026 Prioritization Model",
                                                     "locator":  "P5165–P5168; T36"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "name":  "Strategic Fit",
                                      "methodClass":  "SOURCE RECOMMENDATION",
                                      "criteria":  [
                                                       "objetivos vigentes",
                                                       "Outcome prioritario"
                                                   ],
                                      "purpose":  "Comprobar pertenencia a la dirección que SEIF busca fortalecer.",
                                      "caveat":  "No agrega una capa de scoring.",
                                      "source":  {
                                                     "title":  "13. Decision \u0026 Prioritization Model",
                                                     "locator":  "P4846–P4850"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "name":  "Urgency context",
                                      "methodClass":  "SOURCE RECOMMENDATION",
                                      "criteria":  [
                                                       "Real Urgency",
                                                       "Perceived Urgency"
                                                   ],
                                      "purpose":  "Hacer explícita la razón de urgencia sin reemplazar Value.",
                                      "source":  {
                                                     "title":  "13. Decision \u0026 Prioritization Model",
                                                     "locator":  "P4852–P4867"
                                                 },
                                      "validationStatus":  "pending"
                                  },
                                  {
                                      "name":  "Run / Grow / Transform visibility",
                                      "methodClass":  "SOURCE RECOMMENDATION",
                                      "criteria":  [
                                                       "Run",
                                                       "Grow",
                                                       "Transform"
                                                   ],
                                      "purpose":  "Mostrar dónde se consume capacidad.",
                                      "caveat":  "Sin porcentajes ni cuotas por falta de baseline.",
                                      "source":  {
                                                     "title":  "13. Decision \u0026 Prioritization Model",
                                                     "locator":  "P4766–P4788"
                                                 },
                                      "validationStatus":  "pending"
                                  }
                              ],
    "priorityCommitment":  {
                               "priorityDefinition":  "Opportunity cuya evidencia y valor potencial justifican comprometer capacidad, pero que aún puede quedar Not Started.",
                               "executionApprovalDefinition":  "Start Decision posterior a Priority y condicionado por capacidad disponible.",
                               "capacityCommitmentDefinition":  "Capacidad asignada a una Bet antes de Delivery; NOW representa capacidad comprometida.",
                               "distinctionStatus":  "SUPPORTED",
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "P4565–P4566; P4886–P4898; P4911–P4918; P5248–P5254"
                                          }
                           },
    "decisionRights":  [
                           {
                               "id":  "signal-opportunity",
                               "decision":  "Convertir señal en oportunidad",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "Fuente de la señal"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "need-discovery",
                               "decision":  "Determinar necesidad de Discovery",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "UX",
                                                    "área relevante"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "define-outcome",
                               "decision":  "Definir Outcome",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "Célula"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "evaluate-evidence",
                               "decision":  "Evaluar evidencia",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "UX",
                                                    "CS",
                                                    "Soporte",
                                                    "Marketing",
                                                    "Data"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "evaluate-feasibility",
                               "decision":  "Evaluar factibilidad",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Desarrollo",
                               "participants":  [
                                                    "SRE cuando aplique"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "evaluate-technical-risk",
                               "decision":  "Evaluar riesgo técnico",
                               "stage":  "DECIDE",
                               "decisionOwner":  "SRE",
                               "participants":  [
                                                    "Desarrollo",
                                                    "Producto"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "prioritize",
                               "decision":  "Priorizar",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "Tech",
                                                    "liderazgo según impacto"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "commit-capacity",
                               "decision":  "Comprometer capacidad",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Liderazgo técnico / Desarrollo",
                               "participants":  [
                                                    "Producto"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "reprioritize",
                               "decision":  "Repriorizar",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "Célula",
                                                    "liderazgo según impacto"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "stop-initiative",
                               "decision":  "Detener iniciativa",
                               "stage":  "DECIDE",
                               "decisionOwner":  "Producto",
                               "participants":  [
                                                    "Célula",
                                                    "stakeholders relevantes"
                                                ],
                               "source":  {
                                              "title":  "13. Decision \u0026 Prioritization Model",
                                              "locator":  "T34"
                                          },
                               "validationStatus":  "pending"
                           }
                       ],
    "artifactUses":  [
                         {
                             "artifactId":  "opportunity-card",
                             "artifactName":  "Opportunity Card",
                             "relationship":  "INPUT TO DECISION",
                             "usage":  "Estructura común para Opportunity y entrada al sistema de priorización.",
                             "source":  {
                                            "title":  "13. Decision \u0026 Prioritization Model",
                                            "locator":  "P4709–P4729; P5110–P5117"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "decision-log",
                             "artifactName":  "Decision Log",
                             "relationship":  "RECORD OF DECISION",
                             "usage":  "Registra Decision, Date, Evidence, Rationale, Trade-off y Review Trigger.",
                             "source":  {
                                            "title":  "13. Decision \u0026 Prioritization Model",
                                            "locator":  "P5016–P5031"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "source-decision-canvas",
                             "artifactName":  "Decision Canvas",
                             "relationship":  "SOURCE TERMINOLOGY CONFLICT",
                             "usage":  "Artefacto mínimo de decisión fuente; debe revisarse frente a Opportunity Card y Decision Log para evitar duplicación.",
                             "source":  {
                                            "title":  "13. Decision \u0026 Prioritization Model",
                                            "locator":  "P4709–P4729"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "bet-card",
                             "artifactName":  "Bet source term / Bet Card",
                             "relationship":  "OUTPUT OF DECISION",
                             "usage":  "La fuente produce una Bet después de PRIORITIZE, pero no nombra Bet Card en este capítulo.",
                             "source":  {
                                            "title":  "13. Decision \u0026 Prioritization Model",
                                            "locator":  "P4543–P4557; P5248–P5254"
                                        },
                             "validationStatus":  "pending"
                         }
                     ],
    "discoveryDecideConnections":  [
                                       {
                                           "element":  "Evidence readiness",
                                           "status":  "SUPPORTED",
                                           "rationale":  "Discovery Evidence precede Decision y Evidence es dimensión explícita.",
                                           "source":  {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4546–P4555; P4603–P4629"
                                                      }
                                       },
                                       {
                                           "element":  "Hypothesis status",
                                           "status":  "PARTIAL",
                                           "rationale":  "Bet se define como inversión seleccionada, pero Chapter 13 no exige un estado formal de hipótesis de Chapter 12.",
                                           "source":  {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4543–P4557"
                                                      }
                                       },
                                       {
                                           "element":  "Opportunity framing",
                                           "status":  "SUPPORTED",
                                           "rationale":  "La unidad llega identificada y suficientemente entendida; Decision Canvas empieza por Opportunity.",
                                           "source":  {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4513–P4514; P4709–P4716"
                                                      }
                                       },
                                       {
                                           "element":  "Outcome relationship",
                                           "status":  "SUPPORTED",
                                           "rationale":  "Outcome es primera dimensión y parte del Decision Canvas.",
                                           "source":  {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4579–P4601; P4711–P4716"
                                                      }
                                       },
                                       {
                                           "element":  "Decision trigger",
                                           "status":  "PARTIAL",
                                           "rationale":  "La fuente indica Opportunity suficientemente formulada y Ready for Decision, sin formalizar un handoff organizacional.",
                                           "source":  {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4513–P4514; P5147–P5162"
                                                      }
                                       },
                                       {
                                           "element":  "Decision criteria",
                                           "status":  "SUPPORTED",
                                           "rationale":  "Outcome, Evidence, Reach, Value y Feasibility están definidos como dimensiones comunes.",
                                           "source":  {
                                                          "title":  "13. Decision \u0026 Prioritization Model",
                                                          "locator":  "P4527–P4538; P4574–P4707"
                                                      }
                                       }
                                   ],
    "decisionRecord":  {
                           "artifactName":  "Decision Log",
                           "fields":  {
                                          "DECISION":  "SOURCE COMPLETE",
                                          "DATE / CADENCE":  "SOURCE COMPLETE",
                                          "INPUTS":  "SOURCE PARTIAL",
                                          "EVIDENCE":  "SOURCE COMPLETE",
                                          "PARTICIPANTS":  "SOURCE MISSING",
                                          "DECISION OWNER":  "SOURCE MISSING",
                                          "RATIONALE":  "SOURCE COMPLETE",
                                          "TRADE-OFF":  "SOURCE COMPLETE",
                                          "RESULT":  "SOURCE PARTIAL",
                                          "REVISIT CONDITION":  "SOURCE COMPLETE"
                                      },
                           "sourceFields":  [
                                                "Decision",
                                                "Date",
                                                "Evidence",
                                                "Rationale",
                                                "Trade-off",
                                                "Review Trigger"
                                            ],
                           "source":  {
                                          "title":  "13. Decision \u0026 Prioritization Model",
                                          "locator":  "P5016–P5031"
                                      }
                       },
    "decisionCadences":  [
                             {
                                 "name":  "Weekly Flow Review",
                                 "cadenceType":  "MEETING CADENCE",
                                 "purpose":  "Observar Outcomes activos, bloqueos, cambios críticos, WIP y decisiones pendientes.",
                                 "decisions":  [
                                                   "desbloquear",
                                                   "visibilizar cambios y decisiones pendientes"
                                               ],
                                 "source":  {
                                                "title":  "13. Decision \u0026 Prioritization Model",
                                                "locator":  "P4940–P4949"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Biweekly Opportunity Review",
                                 "cadenceType":  "MEETING CADENCE",
                                 "purpose":  "Revisar Opportunities, Discovery y Evidence.",
                                 "decisions":  [
                                                   "EXPLORE",
                                                   "PRIORITIZE",
                                                   "WAIT",
                                                   "DISCARD"
                                               ],
                                 "source":  {
                                                "title":  "13. Decision \u0026 Prioritization Model",
                                                "locator":  "P4950–P4955"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Monthly Outcome Review",
                                 "cadenceType":  "MEETING CADENCE",
                                 "purpose":  "Revisar Outcomes y aprendizaje.",
                                 "decisions":  [
                                                   "continuar",
                                                   "escalar",
                                                   "ajustar",
                                                   "detener",
                                                   "repriorizar"
                                               ],
                                 "source":  {
                                                "title":  "13. Decision \u0026 Prioritization Model",
                                                "locator":  "P4956–P4962"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Quarterly Direction Review",
                                 "cadenceType":  "MEETING CADENCE",
                                 "purpose":  "Revisar trade-offs estratégicos y balance de inversión.",
                                 "decisions":  [
                                                   "balance de inversión",
                                                   "trade-offs estratégicos"
                                               ],
                                 "source":  {
                                                "title":  "13. Decision \u0026 Prioritization Model",
                                                "locator":  "P4963–P4964"
                                            },
                                 "validationStatus":  "pending"
                             },
                             {
                                 "name":  "Fast Track operacional",
                                 "cadenceType":  "EVENT-DRIVEN",
                                 "purpose":  "Responder primero a incidentes o riesgos críticos sin esperar el ciclo completo.",
                                 "decisions":  [
                                                   "CONTAIN",
                                                   "RESTORE",
                                                   "PROTECT",
                                                   "después LEARN / ROOT CAUSE / OPPORTUNITY"
                                               ],
                                 "source":  {
                                                "title":  "13. Decision \u0026 Prioritization Model",
                                                "locator":  "P5094–P5108"
                                            },
                                 "validationStatus":  "pending"
                             }
                         ],
    "decisionMetrics":  [
                            {
                                "name":  "Opportunity → Decision Time",
                                "metricClass":  "FLOW",
                                "definition":  "Velocidad para decidir; Chapter 13 define Decision Lead Time desde Opportunity suficientemente formulada hasta decisión explícita.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "T35; P5038–P5047"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "% Opportunities with explicit Outcome",
                                "metricClass":  "VALUE",
                                "definition":  "Calidad de alineación con Outcome.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "T35"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "% Decisions with Evidence",
                                "metricClass":  "LEARNING",
                                "definition":  "Disciplina de decisión basada en evidencia.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "T35"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Active Outcomes",
                                "metricClass":  "FLOW",
                                "definition":  "Nivel de foco.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "T35"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Priority Changes per period",
                                "metricClass":  "RISK",
                                "definition":  "Estabilidad de prioridades.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "T35"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Started vs Finished Bets",
                                "metricClass":  "FLOW",
                                "definition":  "Disciplina de WIP.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "T35"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Stop / Wait Rate",
                                "metricClass":  "LEARNING",
                                "definition":  "Capacidad de decir no o todavía no.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "T35"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Outcome Success Rate",
                                "metricClass":  "VALUE",
                                "definition":  "Calidad de apuestas.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "T35"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Time to Reprioritize after new evidence",
                                "metricClass":  "LEARNING",
                                "definition":  "Capacidad adaptativa ante nueva evidencia.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "T35"
                                           },
                                "validationStatus":  "pending"
                            },
                            {
                                "name":  "Focus Ratio",
                                "metricClass":  "EFFORT",
                                "definition":  "Proporción de capacidad dedicada a Outcomes priorizados frente a trabajo no asociado o emergente.",
                                "baseline":  "SOURCE MISSING",
                                "target":  "SOURCE MISSING",
                                "source":  {
                                               "title":  "13. Decision \u0026 Prioritization Model",
                                               "locator":  "P5049–P5053"
                                           },
                                "validationStatus":  "pending"
                            }
                        ],
    "antiPatternAssessments":  [
                                   {
                                       "antiPattern":  "Everything is priority",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Aparece como anti-patrón explícito y el assessment identifica múltiples fuentes de demanda.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4515–P4522; P4991–P4992"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Priority without capacity",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "La fuente corrige el riesgo separando Priority de Start Decision y haciendo visible capacidad comprometida.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4779–P4788; P4886–P4909"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Scoring theatre",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Score Worship se rechaza y el scorecard solo estructura conversación.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4731–P4742; P4995–P4996; P5165–P5168"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "False precision",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "La fuente evita puntuación sofisticada, pesos y algoritmo rígido.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4574–P4577; P4731–P4742"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Backlog ranking presented as strategy",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Backlog Accumulation aparece como anti-patrón y priorizar no termina al ordenar una lista.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4886–P4898; P4993–P4994"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "HiPPO decision making",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "Executive Override by Default y presión jerárquica se identifican como riesgos.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4852–P4867; P4983–P4988"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Committee consensus without owner",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "La fuente rechaza comité permanente y define accountability en T34, pendiente de validación organizacional.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4749–P4764; T34"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Discovery evidence ignored",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Discovery Evidence precede Decision y Evidence es dimensión explícita.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4546–P4555; P4603–P4629"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Feature priority disconnected from Outcome",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "La unidad es Opportunity/Bet y Outcome es primera dimensión.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4540–P4558; P4579–P4601"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Decision without recorded rationale",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "La falta de lógica trazable es hallazgo del assessment; Decision Canvas y Log son tratamiento TO-BE.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4515–P4525; P4709–P4729; P5016–P5031"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Decision never revisited",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Reprioritization Rules, Kill Criteria y Review Trigger soportan revisión.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4869–P4884; P5002–P5031"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Annual planning disguised as agility",
                                       "status":  "OPERATING MODEL RISK",
                                       "rationale":  "La fuente usa horizontes y cadencias, pero no distingue explícitamente decisiones continuas de un ciclo anual de planificación.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4911–P4964"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Output commitment before evidence",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "El modelo responde al antecedente de solicitud→construcción y exige Evidence antes de Decision/Bet.",
                                       "source":  {
                                                      "title":  "13. Decision \u0026 Prioritization Model",
                                                      "locator":  "P4546–P4558; P5170–P5197"
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
                                            "text":  "El SEIF Decision \u0026 Prioritization Model define cómo una oportunidad pasa de estar identificada y suficientemente entendida a convertirse en una decisión explícita de inversión.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4514"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo responde directamente a los hallazgos del assessment:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4515"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "existen múltiples fuentes de demanda;",
                                                          "Producto ya considera clientes, uso, alcance y necesidad;",
                                                          "Desarrollo incorpora capacidad, dependencias y factibilidad;",
                                                          "liderazgo aporta contexto estratégico;",
                                                          "los criterios existen, pero están distribuidos;",
                                                          "las decisiones pueden depender del contexto y de la interacción entre actores;",
                                                          "no existe todavía una lógica común, simple y trazable para explicar por qué una iniciativa avanza y otra no."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4516–P4522"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema no es ausencia de priorización.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4523"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema es fragmentación de la lógica de decisión.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4524"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el objetivo es consolidar una forma común que permita decidir con suficiente disciplina sin introducir burocracia.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4525"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4513"
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
                                            "text":  "La priorización en SEIF no debe responder únicamente a:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4528"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué quiere el cliente?”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4529"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ni a:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4530"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué parece más importante?”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4531"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ni a:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4532"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué es más fácil de construir?”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4533"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ni a:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4534"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué tiene más presión?”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4535"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe responder a una combinación explícita de:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4536"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome + Evidence + Reach + Value + Feasibility",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4537"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este conjunto recoge los criterios ya observados durante las entrevistas y los organiza en una única lógica.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4538"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4527"
                                         }
                                     ]
                     },
                     {
                         "id":  "unidad-de-decision",
                         "title":  "Unidad de decisión",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no prioriza directamente tareas o tickets.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4541"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prioriza:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4542"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunities / Bets",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4543"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Opportunity representa un problema u oportunidad suficientemente estructurada.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4544"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Bet representa una inversión seleccionada para intentar modificar un Outcome.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4545"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La secuencia es:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4546"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4547"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4548"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4549"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4550"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery Evidence",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4551"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4552"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4553"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4554"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4555"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4556"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4557"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita que una solicitud se convierta automáticamente en trabajo comprometido.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4558"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4540"
                                         }
                                     ]
                     },
                     {
                         "id":  "que-se-decide",
                         "title":  "Qué se decide",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo reconoce cuatro decisiones posibles:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4561"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EXPLORE",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4562"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La oportunidad parece relevante, pero la evidencia es insuficiente.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4563"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implica continuar Discovery.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4564"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRIORITIZE",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4565"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe evidencia suficiente y el valor potencial justifica comprometer capacidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4566"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "WAIT",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4567"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La oportunidad es válida, pero no justifica inversión en este momento.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4568"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCARD",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4569"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La oportunidad no cuenta con suficiente valor, evidencia o alineación para continuar.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4570"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas cuatro decisiones son obligatorias.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4571"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una iniciativa no debe permanecer indefinidamente en un backlog sin estado decisional claro.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4572"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4560"
                                         }
                                     ]
                     },
                     {
                         "id":  "dimensiones-de-priorizacion",
                         "title":  "Dimensiones de priorización",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo utiliza cinco dimensiones.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4575"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-032",
                                                          "caption":  "Dimensiones de priorización",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Pregunta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Outcome",
                                                                           "¿Qué resultado estratégico, de cliente o de producto modifica?"
                                                                       ],
                                                                       [
                                                                           "Evidence",
                                                                           "¿Qué tan respaldado está el problema?"
                                                                       ],
                                                                       [
                                                                           "Reach",
                                                                           "¿A cuántos clientes, usuarios o segmentos afecta?"
                                                                       ],
                                                                       [
                                                                           "Value",
                                                                           "¿Qué valor genera, protege o habilita?"
                                                                       ],
                                                                       [
                                                                           "Feasibility",
                                                                           "¿Qué implica técnica y operacionalmente?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "13. Decision \u0026 Prioritization Model",
                                                                         "locator":  "T32"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas dimensiones no se convierten inicialmente en un algoritmo rígido.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4576"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es hacer comparable la conversación.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4577"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4574"
                                         }
                                     ]
                     },
                     {
                         "id":  "dimension-1-outcome",
                         "title":  "Dimensión 1 — Outcome",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4580"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar si la oportunidad está conectada con un resultado relevante.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4581"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La pregunta no es:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4582"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué feature permite construir?”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4583"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La pregunta es:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4584"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué resultado queremos modificar?”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4585"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Outcome puede estar relacionado con:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4586"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "adopción;",
                                                          "adherencia;",
                                                          "TTV;",
                                                          "autonomía;",
                                                          "confiabilidad;",
                                                          "retención;",
                                                          "expansión;",
                                                          "eficiencia operativa;",
                                                          "ingreso;",
                                                          "reducción de riesgo;",
                                                          "cumplimiento de un objetivo estratégico."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4587–P4597"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia en SEIF",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4598"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización ya ha definido Outcomes, criterios de éxito y TTV como parte de su modelo conceptual.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4599"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4600"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una oportunidad con Outcome poco claro tiene menor calidad de decisión porque no es posible determinar con precisión qué se espera cambiar.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4601"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4579"
                                         }
                                     ]
                     },
                     {
                         "id":  "dimension-2-evidence",
                         "title":  "Dimensión 2 — Evidence",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4604"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar cuánto de la decisión está respaldado por evidencia y cuánto depende todavía de hipótesis.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4605"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las fuentes de evidencia pueden incluir:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4606"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "comportamiento en dashboards;",
                                                          "tickets;",
                                                          "entrevistas;",
                                                          "observación;",
                                                          "feedback estructurado;",
                                                          "Customer Success;",
                                                          "Marketing;",
                                                          "Soporte;",
                                                          "SRE;",
                                                          "datos de uso;",
                                                          "experimentos;",
                                                          "prototipos;",
                                                          "validaciones."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4607–P4619"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Escala simple",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4620"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Alta",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4621"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema está respaldado por múltiples señales o comportamiento observable.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4622"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Media",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4623"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe evidencia directa, pero limitada.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4624"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Baja",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4625"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La oportunidad depende principalmente de percepción, solicitud o hipótesis.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4626"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4627"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una oportunidad con evidencia baja no necesariamente debe descartarse.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4628"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe probablemente pasar a Explore, no directamente a Prioritize.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4629"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4603"
                                         }
                                     ]
                     },
                     {
                         "id":  "dimension-3-reach",
                         "title":  "Dimensión 3 — Reach",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4632"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar qué tan amplio es el impacto potencial.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4633"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reach puede analizarse mediante:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4634"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "número de clientes;",
                                                          "número de usuarios;",
                                                          "número de proyectos;",
                                                          "módulos afectados;",
                                                          "perfiles afectados;",
                                                          "segmentos;",
                                                          "criticidad de una cuenta."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4635–P4641"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia en SEIF",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4642"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto ya utiliza factores relacionados con alcance y cantidad de clientes.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4643"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4644"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reach permite evitar una lectura binaria donde una necesidad de un cliente se compare de manera equivalente con una oportunidad que afecta a un segmento completo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4645"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, Reach no debe ser utilizado de forma aislada.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4646"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un problema que afecta pocos clientes puede ser crítico si compromete:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4647"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "ingreso;",
                                                          "operación;",
                                                          "confiabilidad;",
                                                          "riesgo estratégico."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4648–P4651"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4631"
                                         }
                                     ]
                     },
                     {
                         "id":  "dimension-4-value",
                         "title":  "Dimensión 4 — Value",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4654"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar qué valor potencial genera o protege la oportunidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4655"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value puede tomar distintas formas:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4656"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Value",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4657"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "menor fricción;",
                                                          "menor TTV;",
                                                          "mayor autonomía;",
                                                          "mayor adherencia;",
                                                          "mejor experiencia."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4658–P4662"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Business Value",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4663"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "ingresos;",
                                                          "retención;",
                                                          "expansión;",
                                                          "reducción de churn;",
                                                          "habilitación comercial."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4664–P4668"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operational Value",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4669"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "menor intervención manual;",
                                                          "menor soporte;",
                                                          "menor reproceso;",
                                                          "mayor escalabilidad."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4670–P4673"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Risk Value",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4674"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "reducción de exposición;",
                                                          "estabilidad;",
                                                          "sostenibilidad;",
                                                          "reducción de deuda crítica."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4675–P4678"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4679"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo evita reducir el valor exclusivamente a ingresos.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4680"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia de las entrevistas muestra que SEIF también enfrenta problemas de:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4681"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "adopción;",
                                                          "dependencia;",
                                                          "deuda técnica;",
                                                          "escalabilidad operacional."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4682–P4685"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, Value debe representar el impacto relevante para el sistema completo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4686"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4653"
                                         }
                                     ]
                     },
                     {
                         "id":  "dimension-5-feasibility",
                         "title":  "Dimensión 5 — Feasibility",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objetivo",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4689"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar si la oportunidad puede abordarse razonablemente con la capacidad, restricciones y riesgos actuales.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4690"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La factibilidad incluye:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4691"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "complejidad técnica;",
                                                          "dependencia;",
                                                          "arquitectura;",
                                                          "deuda;",
                                                          "riesgo operativo;",
                                                          "esfuerzo aproximado;",
                                                          "capacidad disponible;",
                                                          "reversibilidad;",
                                                          "requerimientos de SRE;",
                                                          "impacto en soporte."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4692–P4701"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia en SEIF",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4702"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo y SRE ya participan en decisiones relacionadas con capacidad, dependencias y riesgo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4703"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4704"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feasibility no debe utilizarse como una barrera técnica para decidir qué genera valor.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4705"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe utilizarse para comprender:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4706"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué implica intentar capturar ese valor.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4707"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4688"
                                         }
                                     ]
                     },
                     {
                         "id":  "decision-canvas",
                         "title":  "Decision Canvas",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada oportunidad que llegue a decisión debe poder resumirse en una vista única:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4710"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4711"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema estamos evaluando?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4712"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4713"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué resultado queremos modificar?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4714"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4715"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué sabemos?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4716"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reach",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4717"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿A quién afecta?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4718"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4719"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué genera o protege?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4720"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feasibility",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4721"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué implica?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4722"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Key Risks",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4723"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué podría invalidar la inversión?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4724"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4725"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explore / Prioritize / Wait / Discard.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4726"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Rationale",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4727"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4728"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este canvas constituye el artefacto mínimo de decisión.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4729"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4709"
                                         }
                                     ]
                     },
                     {
                         "id":  "priorizacion-sin-falsa-precision",
                         "title":  "Priorización sin falsa precisión",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo evita crear una puntuación matemática demasiado sofisticada en esta etapa.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4732"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia del assessment muestra que SEIF necesita:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4733"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "consistencia, no sofisticación.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4734"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Asignar valores numéricos extremadamente precisos a variables que todavía dependen de estimaciones generaría una ilusión de objetividad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4735"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, inicialmente las dimensiones pueden evaluarse mediante:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4736"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Alta / Media / Baja",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4737"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4738"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1 / 2 / 3",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4739"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "siempre que la conversación se mantenga trazable.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4740"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La prioridad no debe ser “el número más alto”.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4741"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La prioridad debe ser la consecuencia de una decisión razonada.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4742"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4731"
                                         }
                                     ]
                     },
                     {
                         "id":  "matriz-de-decision-inicial",
                         "title":  "Matriz de decisión inicial",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vista simplificada puede ser:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4745"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-033",
                                                          "caption":  "Matriz de decisión inicial",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Opportunity",
                                                                          "Outcome",
                                                                          "Evidence",
                                                                          "Reach",
                                                                          "Value",
                                                                          "Feasibility",
                                                                          "Decisión"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "A",
                                                                           "Alta",
                                                                           "Alta",
                                                                           "Alta",
                                                                           "Alta",
                                                                           "Media",
                                                                           "Prioritize"
                                                                       ],
                                                                       [
                                                                           "B",
                                                                           "Alta",
                                                                           "Baja",
                                                                           "Alta",
                                                                           "Alta",
                                                                           "Media",
                                                                           "Explore"
                                                                       ],
                                                                       [
                                                                           "C",
                                                                           "Media",
                                                                           "Alta",
                                                                           "Baja",
                                                                           "Media",
                                                                           "Alta",
                                                                           "Wait"
                                                                       ],
                                                                       [
                                                                           "D",
                                                                           "Baja",
                                                                           "Baja",
                                                                           "Baja",
                                                                           "Baja",
                                                                           "Baja",
                                                                           "Discard"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "13. Decision \u0026 Prioritization Model",
                                                                         "locator":  "T33"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La matriz no sustituye juicio.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4746"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lo estructura.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4747"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4744"
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
                                            "text":  "El assessment evidenció participación de diferentes actores en la toma de decisiones.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4750"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE establece accountability explícita.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4751"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-034",
                                                          "caption":  "Decision Rights",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Decisión",
                                                                          "Accountable",
                                                                          "Consultados"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Convertir señal en oportunidad",
                                                                           "Producto",
                                                                           "Fuente de la señal"
                                                                       ],
                                                                       [
                                                                           "Determinar necesidad de Discovery",
                                                                           "Producto",
                                                                           "UX + área relevante"
                                                                       ],
                                                                       [
                                                                           "Definir Outcome",
                                                                           "Producto",
                                                                           "Célula"
                                                                       ],
                                                                       [
                                                                           "Evaluar evidencia",
                                                                           "Producto",
                                                                           "UX / CS / Soporte / Marketing / Data"
                                                                       ],
                                                                       [
                                                                           "Evaluar factibilidad",
                                                                           "Desarrollo",
                                                                           "SRE cuando aplique"
                                                                       ],
                                                                       [
                                                                           "Evaluar riesgo técnico",
                                                                           "SRE",
                                                                           "Desarrollo + Producto"
                                                                       ],
                                                                       [
                                                                           "Priorizar",
                                                                           "Producto",
                                                                           "Tech + liderazgo según impacto"
                                                                       ],
                                                                       [
                                                                           "Comprometer capacidad",
                                                                           "Liderazgo técnico / Desarrollo",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Repriorizar",
                                                                           "Producto",
                                                                           "Célula + liderazgo según impacto"
                                                                       ],
                                                                       [
                                                                           "Detener iniciativa",
                                                                           "Producto",
                                                                           "Célula + stakeholders relevantes"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "13. Decision \u0026 Prioritization Model",
                                                                         "locator":  "T34"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La existencia de accountability no elimina deliberación multidisciplinaria.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4752"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evita ambigüedad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4753"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4749"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Authority, accountability y participación en decisiones",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "rol-de-liderazgo",
                         "title":  "Rol de liderazgo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo no necesita participar en todas las decisiones.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4756"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su intervención debe concentrarse en casos donde exista:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4757"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "impacto estratégico;",
                                                          "compromiso financiero significativo;",
                                                          "riesgo corporativo;",
                                                          "trade-offs entre Outcomes importantes;",
                                                          "conflicto de capacidad relevante;",
                                                          "dependencia entre apuestas críticas."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4758–P4763"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita convertir priorización en un comité permanente de aprobación.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4764"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4755"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Authority, accountability y participación en decisiones",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "portfolio-ligero",
                         "title":  "Portfolio ligero",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no necesita un proceso de portafolio corporativo complejo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4767"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí necesita visibilidad sobre tres tipos de inversión que ya aparecen en su modelo actual:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4768"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Run",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4769"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operación y continuidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4770"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Grow",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4771"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Iniciativas orientadas a crecimiento, adopción, ingreso o expansión.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4772"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Transform",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4773"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidades de evolución estructural o técnica.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4774"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La clasificación permite responder:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4775"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿En qué está consumiendo capacidad la organización?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4776"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No implica crear tres estructuras de gobierno diferentes.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4777"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4766"
                                         }
                                     ]
                     },
                     {
                         "id":  "balance-de-inversion",
                         "title":  "Balance de inversión",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no proporciona una línea base suficiente para fijar porcentajes obligatorios de capacidad entre Run, Grow y Transform.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4780"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, no se establecen cuotas artificiales.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4781"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo sí exige visibilidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4782"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En cada revisión de dirección debe poder observarse:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4783"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cuánta capacidad está comprometida;",
                                                          "en qué Outcomes;",
                                                          "con qué tipo de inversión;",
                                                          "qué trade-offs existen."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4784–P4787"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La decisión de balance se realiza con evidencia real de capacidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4788"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4779"
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
                         "id":  "priorizacion-de-deuda-tecnica",
                         "title":  "Priorización de deuda técnica",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La deuda técnica reconocida por SRE entra al mismo sistema de decisión cuando posee impacto relevante.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4791"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una deuda técnica debe expresarse mediante:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4792"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Risk",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4793"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué riesgo genera?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4794"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Impact",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4795"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué capacidad o resultado afecta?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4796"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Consequence",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4797"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurre si no se atiende?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4798"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Urgency",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4799"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuándo se vuelve crítica?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4800"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Effort / Feasibility",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4801"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué implica resolverla?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4802"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite comparar racionalmente deuda y evolución funcional sin ocultar la deuda en un backlog técnico paralelo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4803"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4790"
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
                         "id":  "priorizacion-de-bugs-e-incidentes",
                         "title":  "Priorización de bugs e incidentes",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todo bug entra al modelo de Producto.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4806"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los defectos operativos deben gestionarse según criticidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4807"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, un patrón puede convertirse en Opportunity cuando:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4808"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "es recurrente;",
                                                          "afecta adopción;",
                                                          "genera soporte repetitivo;",
                                                          "compromete un Outcome;",
                                                          "produce dependencia;",
                                                          "evidencia una deuda de experiencia;",
                                                          "representa riesgo relevante."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4809–P4815"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La secuencia es:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4816"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ticket / Bug",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4817"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4818"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pattern",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4819"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4820"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Impact",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4821"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4822"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4823"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4824"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4825"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita convertir cada ticket en feature y, al mismo tiempo, evita perder señales de producto.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4826"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4805"
                                         }
                                     ]
                     },
                     {
                         "id":  "priorizacion-de-solicitudes-de-clientes",
                         "title":  "Priorización de solicitudes de clientes",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una solicitud de cliente no se descarta por ser individual.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4829"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tampoco se prioriza automáticamente por venir de un cliente.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4830"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe evaluarse.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4831"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La secuencia es:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4832"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Request",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4833"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4834"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Underlying Problem",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4835"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4836"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4837"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4838"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reach",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4839"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4840"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4841"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4842"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4843"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto responde directamente al antecedente histórico de SEIF, donde solicitudes específicas contribuyeron a crecimiento funcional y complejidad del producto.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4844"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4828"
                                         }
                                     ]
                     },
                     {
                         "id":  "strategic-fit",
                         "title":  "Strategic Fit",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aunque Outcome constituye la principal unidad de alineación, la decisión debe también verificar:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4847"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Esta oportunidad pertenece a la dirección que SEIF quiere fortalecer?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4848"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Strategic Fit se evalúa a través de los objetivos vigentes de la organización, no mediante una capa adicional de scoring.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4849"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una iniciativa puede tener valor local y aun así no justificar capacidad si desvía al equipo de un Outcome prioritario.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4850"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4846"
                                         }
                                     ]
                     },
                     {
                         "id":  "urgencia",
                         "title":  "Urgencia",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Urgencia se mantiene como criterio contextual, pero no reemplaza Value.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4853"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe distinguirse:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4854"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Real Urgency",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4855"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "riesgo operacional;",
                                                          "compromiso contractual;",
                                                          "incidente crítico;",
                                                          "ventana de mercado;",
                                                          "obligación relevante."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4856–P4860"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Perceived Urgency",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4861"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "presión;",
                                                          "preferencia;",
                                                          "solicitud reciente;",
                                                          "jerarquía."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4862–P4865"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo exige hacer explícita la razón de urgencia.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4866"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto reduce la posibilidad de convertir presión en prioridad sin análisis.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4867"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4852"
                                         }
                                     ]
                     },
                     {
                         "id":  "reprioritization-rules",
                         "title":  "Reprioritization Rules",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las prioridades pueden cambiar.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4870"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema no es cambiar.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4871"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema es cambiar sin hacer visible el costo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4872"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una iniciativa activa puede ser desplazada cuando aparece evidencia de:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4873"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "riesgo crítico;",
                                                          "Outcome de mayor impacto;",
                                                          "falla importante de hipótesis;",
                                                          "cambio estratégico;",
                                                          "restricción técnica relevante."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4874–P4878"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada repriorización debe hacer explícito:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4879"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué entra",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4880"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué sale",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4881"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué Outcome se afecta",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4882"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué costo de cambio existe",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4883"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto protege el foco.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4884"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4869"
                                         }
                                     ]
                     },
                     {
                         "id":  "wip-como-mecanismo-de-priorizacion",
                         "title":  "WIP como mecanismo de priorización",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La priorización no termina al ordenar una lista.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4887"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También implica limitar cuántas apuestas pueden estar activas simultáneamente.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4888"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidenció múltiples fuentes de demanda y riesgo de pérdida de foco.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4889"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4890"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "una oportunidad priorizada no significa automáticamente que debe iniciarse inmediatamente.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4891"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede estar:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4892"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prioritized / Not Started",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4893"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hasta que exista capacidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4894"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo separa:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4895"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Priority",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4896"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4897"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Start Decision.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4898"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4886"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-09",
                                                       "subject":  "Límites numéricos de WIP y Outcomes activos",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "active-outcomes",
                         "title":  "Active Outcomes",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principal límite de WIP se establece a nivel de Outcome.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4901"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización debe poder ver:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4902"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcomes activos;",
                                                          "apuestas activas;",
                                                          "capacidad comprometida;",
                                                          "bloqueos;",
                                                          "tiempo sin aprendizaje."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4903–P4907"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se fija inicialmente un número rígido porque no existe una línea base suficiente.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4908"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El límite deberá calibrarse durante la operación real.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4909"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4900"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-09",
                                                       "subject":  "Límites numéricos de WIP y Outcomes activos",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "time-horizon",
                         "title":  "Time Horizon",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones se organizan en tres horizontes simples.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4912"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NOW",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4913"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidad comprometida.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4914"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NEXT",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4915"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Oportunidades suficientemente entendidas y candidatas siguientes.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4916"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LATER",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4917"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Oportunidades válidas que no justifican inversión inmediata.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4918"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta estructura es más útil para SEIF que un roadmap excesivamente detallado de largo plazo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4919"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reduce falsas promesas.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4920"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4911"
                                         }
                                     ]
                     },
                     {
                         "id":  "roadmap-basado-en-outcomes",
                         "title":  "Roadmap basado en Outcomes",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El roadmap TO-BE no debe representar únicamente funcionalidades y fechas.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4923"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe mostrar:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4924"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4925"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué resultado buscamos.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4926"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem / Opportunity",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4927"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué estamos intentando resolver.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4928"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4929"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué hipótesis estamos probando.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4930"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4931"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué sabemos hasta ahora.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4932"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Current State",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4933"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovering / Validating / Delivering / Adopting / Measuring.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4934"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expected Decision",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4935"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué debemos aprender o decidir después.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4936"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fecha sigue siendo relevante cuando existe compromiso real.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4937"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe convertirse en sustituto del aprendizaje.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4938"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4922"
                                         }
                                     ]
                     },
                     {
                         "id":  "decision-cadence",
                         "title":  "Decision Cadence",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo evita crear un comité permanente adicional.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4941"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las decisiones se integran en pocas cadencias.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4942"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Weekly Flow Review",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4943"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se observan:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4944"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcomes activos;",
                                                          "bloqueos;",
                                                          "cambios críticos;",
                                                          "WIP;",
                                                          "decisiones pendientes."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4945–P4949"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Biweekly Opportunity Review",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4950"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se revisan:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4951"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "nuevas oportunidades;",
                                                          "Discovery;",
                                                          "evidencia;",
                                                          "decisiones Explore / Prioritize / Wait / Discard."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4952–P4955"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Monthly Outcome Review",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4956"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se decide sobre:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4957"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "continuar;",
                                                          "escalar;",
                                                          "ajustar;",
                                                          "detener;",
                                                          "repriorizar."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4958–P4962"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quarterly Direction Review",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4963"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se revisan trade-offs estratégicos y balance de inversión.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4964"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4940"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias de decisión, participantes y triggers",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "opportunity-review",
                         "title":  "Opportunity Review",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La revisión de oportunidades debe responder, en orden:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4967"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿Qué problema existe?",
                                                          "¿Quién lo experimenta?",
                                                          "¿Qué evidencia tenemos?",
                                                          "¿Qué Outcome se afecta?",
                                                          "¿Qué alcance tiene?",
                                                          "¿Qué valor potencial representa?",
                                                          "¿Qué riesgos o restricciones existen?",
                                                          "¿Qué incertidumbre permanece?",
                                                          "¿Qué decisión corresponde?"
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4968–P4976"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La conversación no comienza con:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4977"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Cuánto demora Desarrollo?”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4978"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "porque esfuerzo sin contexto de valor produce una decisión incompleta.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4979"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4966"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias de decisión, participantes y triggers",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "prioritization-anti-patterns",
                         "title":  "Prioritization Anti-Patterns",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo elimina explícitamente los siguientes comportamientos.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4982"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Loudest Customer Wins",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4983"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La presión más fuerte no constituye evidencia suficiente.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4984"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Executive Override by Default",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4985"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La jerarquía no sustituye la lógica de decisión.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4986"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Highest Revenue Client Wins Automatically",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4987"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ingreso importa, pero debe entenderse el problema y el impacto sistémico.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4988"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Easy First",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4989"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bajo esfuerzo no equivale automáticamente a alta prioridad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4990"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Everything Is High Priority",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4991"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si todo es prioritario, no existe priorización.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4992"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Backlog Accumulation",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4993"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardar indefinidamente oportunidades sin decisión.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4994"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Score Worship",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4995"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Convertir una fórmula en sustituto del juicio.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4996"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sunk Cost Prioritization",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4997"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Continuar porque ya se invirtió, aun cuando la evidencia cambió.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4998"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical Debt Black Box",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P4999"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Priorizar deuda sin explicar impacto o riesgo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5000"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P4981"
                                         }
                                     ]
                     },
                     {
                         "id":  "kill-criteria",
                         "title":  "Kill Criteria",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una capacidad madura de Producto no solo define cuándo iniciar.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5003"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También define cuándo detener.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5004"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Bet puede detenerse cuando:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5005"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "el problema no se confirma;",
                                                          "el usuario no valora suficientemente el resultado;",
                                                          "la solución no modifica la métrica esperada;",
                                                          "el costo supera el valor razonable;",
                                                          "aparece una alternativa más simple;",
                                                          "el contexto cambia;",
                                                          "la oportunidad pierde alineación estratégica."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5006–P5012"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Detener una iniciativa no se considera fracaso.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5013"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se considera una decisión basada en aprendizaje.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5014"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5002"
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
                                            "text":  "Las decisiones relevantes deben conservar trazabilidad mínima.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5017"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se requiere un acta extensa.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5018"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El registro contiene:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5019"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5020"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decidimos?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5021"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Date",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5022"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuándo?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5023"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5024"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Con qué información?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5025"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Rationale",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5026"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5027"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trade-off",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5028"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué dejamos de hacer?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5029"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review Trigger",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5030"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia nos haría revisar la decisión?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5031"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite comprender posteriormente por qué se construyó una capacidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5032"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5016"
                                         }
                                     ]
                     },
                     {
                         "id":  "metricas-del-sistema-de-decision",
                         "title":  "Métricas del sistema de decisión",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Decision \u0026 Prioritization Model debe medirse por calidad y velocidad, no por volumen de decisiones.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5035"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-035",
                                                          "caption":  "Métricas del sistema de decisión",
                                                          "kind":  "scorecard",
                                                          "headers":  [
                                                                          "Métrica",
                                                                          "Qué evalúa"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Opportunity → Decision Time",
                                                                           "Velocidad para decidir"
                                                                       ],
                                                                       [
                                                                           "% Opportunities with explicit Outcome",
                                                                           "Calidad de alineación"
                                                                       ],
                                                                       [
                                                                           "% Decisions with Evidence",
                                                                           "Disciplina de decisión"
                                                                       ],
                                                                       [
                                                                           "Active Outcomes",
                                                                           "Nivel de foco"
                                                                       ],
                                                                       [
                                                                           "Priority Changes per period",
                                                                           "Estabilidad"
                                                                       ],
                                                                       [
                                                                           "Started vs Finished Bets",
                                                                           "Disciplina de WIP"
                                                                       ],
                                                                       [
                                                                           "Stop / Wait Rate",
                                                                           "Capacidad de decir no"
                                                                       ],
                                                                       [
                                                                           "Outcome Success Rate",
                                                                           "Calidad de apuestas"
                                                                       ],
                                                                       [
                                                                           "Time to Reprioritize after new evidence",
                                                                           "Capacidad adaptativa"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "13. Decision \u0026 Prioritization Model",
                                                                         "locator":  "T35"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se establecen metas hasta capturar baseline.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5036"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5034"
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
                         "id":  "metrica-critica-decision-lead-time",
                         "title":  "Métrica crítica — Decision Lead Time",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se define como:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5039"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "tiempo desde que una Opportunity está suficientemente formulada hasta que existe una decisión explícita de Explore, Prioritize, Wait o Discard.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5040"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un Decision Lead Time alto puede indicar:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5041"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "exceso de análisis;",
                                                          "falta de ownership;",
                                                          "falta de evidencia;",
                                                          "demasiados actores;",
                                                          "reuniones sin decisión."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5042–P5046"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto es distinto del Learning Lead Time y del Delivery Lead Time.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5047"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5038"
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
                         "id":  "metrica-critica-focus-ratio",
                         "title":  "Métrica crítica — Focus Ratio",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo incorpora una métrica simple de foco:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5050"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "proporción de capacidad dedicada a Outcomes explícitamente priorizados frente a trabajo no asociado o emergente.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5051"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se define todavía un target.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5052"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La métrica permitirá observar si las células realmente trabajan sobre los Outcomes seleccionados o si la demanda incidental continúa absorbiendo una proporción relevante de capacidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5053"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5049"
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
                         "id":  "priorizacion-y-north-star",
                         "title":  "Priorización y North Star",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vez validada la North Star de SEIF, la priorización podrá utilizarla como una señal adicional.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5056"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No significa que toda iniciativa deba mover directamente la North Star.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5057"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen Health Metrics y necesidades técnicas necesarias para proteger el sistema.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5058"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La lógica será:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5059"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "North Star / Strategic Outcomes",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5060"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5061"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity Areas",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5062"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5063"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bets",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5064"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5065"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product / Experience / Technical Metrics",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5066"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto conecta estrategia con inversión sin forzar una relación artificial entre cada ticket y una métrica corporativa.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5067"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5055"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-06",
                                                       "subject":  "North Star candidate como señal de priorización",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "priorizacion-de-growth",
                         "title":  "Priorización de Growth",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las oportunidades de Growth derivadas de Marketing, CS y analytics deben seguir el mismo modelo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5070"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo conceptual:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5071"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5072"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente tiene 100 licencias y utiliza significativamente menos.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5073"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5074"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5075"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe una brecha de adopción.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5076"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5077"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5078"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5079"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5080"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Posibles causas:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5081"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "onboarding;",
                                                          "configuración;",
                                                          "experiencia;",
                                                          "valor insuficiente;",
                                                          "cliente;",
                                                          "proceso;",
                                                          "dependencia."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5082–P5088"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5089"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5090"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo después se selecciona una intervención.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5091"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita asumir que baja utilización se resuelve automáticamente con una campaña, entrenamiento o nueva funcionalidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5092"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5069"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-13",
                                                       "subject":  "Ownership de Growth y Expansion",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "decision-model-para-casos-urgentes",
                         "title":  "Decision Model para casos urgentes",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los incidentes críticos no deben esperar el ciclo completo de Product Discovery.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5095"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo reconoce un Fast Track operacional.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5096"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aplica ante:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5097"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "indisponibilidad severa;",
                                                          "seguridad;",
                                                          "riesgo crítico;",
                                                          "compromiso contractual urgente;",
                                                          "problema operacional grave."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5098–P5102"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La decisión es:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5103"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contain / Restore / Protect",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5104"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "primero.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5105"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Después:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5106"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learn / Root Cause / Opportunity",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5107"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto mantiene velocidad operacional sin perder aprendizaje de Producto.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5108"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5094"
                                         }
                                     ]
                     },
                     {
                         "id":  "governance-minimo",
                         "title":  "Governance mínimo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema de priorización se gobierna mediante tres mecanismos:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5111"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Opportunity Card",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5112"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estructura común.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5113"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Decision Rights",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5114"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Accountability claro.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5115"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Decision Review",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5116"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cadencia para resolver trade-offs.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5117"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No requiere:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5118"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "comité de portafolio independiente;",
                                                          "PMO adicional;",
                                                          "proceso de aprobación multinivel;",
                                                          "documentación extensa."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5119–P5122"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto se mantiene alineado con el tamaño y la restricción de simplicidad identificada en el kickoff.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5123"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5110"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencias de decisión, participantes y triggers",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "integracion-con-jira",
                         "title":  "Integración con Jira",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vez validado el modelo, Jira puede representar:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5126"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5127"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema identificado.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5128"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5129"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado relacionado.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5130"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Status",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5131"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explore / Prioritize / Wait / Discard.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5132"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5133"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Enlaces a datos, investigación o feedback.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5134"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reach",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5135"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Segmentos/clientes impactados.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5136"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5137"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tipo de valor.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5138"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feasibility",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5139"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Valoración técnica.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5140"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bet",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5141"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Iniciativa seleccionada.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5142"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery Link",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5143"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Epic/entregables correspondientes.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5144"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite trazabilidad sin duplicar información.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5145"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5125"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling para DECIDE",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "estados-recomendados-para-opportunity",
                         "title":  "Estados recomendados para Opportunity",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo lógico puede mantenerse simple:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5148"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NEW SIGNAL",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5149"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5150"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "FRAMING",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5151"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5152"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCOVERY",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5153"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5154"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "READY FOR DECISION",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5155"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5156"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "una de cuatro salidas:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5157"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EXPLORE",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5158"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRIORITIZED",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5159"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "WAIT",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5160"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCARDED",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5161"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Opportunity priorizada posteriormente se relaciona con una Bet de Delivery.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5162"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe convertirse automáticamente en Epic desde el momento de entrada.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5163"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5147"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Arquitectura futura de tooling para DECIDE",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "scorecard-ligero",
                         "title":  "Scorecard ligero",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando SEIF necesite comparar varias oportunidades, puede utilizar un scorecard simple:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5166"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-036",
                                                          "caption":  "Scorecard ligero",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Baja",
                                                                          "Media",
                                                                          "Alta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Outcome relevance",
                                                                           "Débil",
                                                                           "Relacionada",
                                                                           "Directa"
                                                                       ],
                                                                       [
                                                                           "Evidence",
                                                                           "Percepción",
                                                                           "Evidencia limitada",
                                                                           "Evidencia fuerte"
                                                                       ],
                                                                       [
                                                                           "Reach",
                                                                           "Bajo",
                                                                           "Medio",
                                                                           "Alto"
                                                                       ],
                                                                       [
                                                                           "Value",
                                                                           "Bajo",
                                                                           "Medio",
                                                                           "Alto"
                                                                       ],
                                                                       [
                                                                           "Feasibility",
                                                                           "Difícil/riesgosa",
                                                                           "Moderada",
                                                                           "Favorable"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "13. Decision \u0026 Prioritization Model",
                                                                         "locator":  "T36"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El resultado no produce automáticamente la decisión.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5167"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Produce una conversación estructurada.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5168"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5165"
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
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5171"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un cliente solicita una nueva funcionalidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5172"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AS-IS histórico",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5173"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solicitud → requerimiento → construcción.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5174"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TO-BE",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5175"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Frame",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5176"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué intenta lograr?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5177"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5178"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5179"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Es un problema individual o aparece en otros clientes/datos?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5180"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5181"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5182"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué cambiaría si lo resolvemos?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5183"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5184"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reach",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5185"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿A quién afecta?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5186"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5187"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5188"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué genera/protege?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5189"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5190"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feasibility",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5191"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué implica?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5192"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5193"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5194"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explore / Prioritize / Wait / Discard.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5195"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La solicitud continúa siendo importante.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5196"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Deja de ser equivalente a la solución.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5197"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5170"
                                         }
                                     ]
                     },
                     {
                         "id":  "ejemplo-conceptual-deuda-tecnica",
                         "title":  "Ejemplo conceptual — deuda técnica",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5200"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE identifica deuda relevante.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5201"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Frame",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5202"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué capacidad, riesgo o restricción produce?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5203"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5204"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incidentes, dependencia, limitaciones o comportamiento técnico disponible.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5205"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5206"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué condición del sistema debe mejorar o protegerse?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5207"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Value",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5208"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Confiabilidad / capacidad / reducción de riesgo.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5209"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feasibility",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5210"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué implica resolverla?",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5211"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5212"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se compara con otras inversiones utilizando la misma conversación de trade-off.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5213"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto integra Producto y sostenibilidad sin diluir la responsabilidad técnica.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5214"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5199"
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
                         "id":  "maturity-model-de-priorizacion",
                         "title":  "Maturity Model de priorización",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-037",
                                                          "caption":  "Maturity Model de priorización",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Comportamiento"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1 — Inicial",
                                                                           "Priorización reactiva y principalmente basada en urgencia/opinión"
                                                                       ],
                                                                       [
                                                                           "2 — Repetible",
                                                                           "Existen criterios, pero varían por actor/contexto"
                                                                       ],
                                                                       [
                                                                           "3 — Definido",
                                                                           "Existe unidad común, dimensiones y Decision Rights"
                                                                       ],
                                                                       [
                                                                           "4 — Gestionado",
                                                                           "Se mide foco, estabilidad y resultado de decisiones"
                                                                       ],
                                                                       [
                                                                           "5 — Optimizado",
                                                                           "La organización mejora continuamente el sistema de asignación de capacidad"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "13. Decision \u0026 Prioritization Model",
                                                                         "locator":  "T37"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado SEIF",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5217"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5218"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target inicial",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5219"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5220"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es sofisticar scoring.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5221"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es hacer consistente la toma de decisiones.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5222"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5216"
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
                                            "text":  "El SEIF Decision \u0026 Prioritization Model queda resumido así:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5225"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5226"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5227"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OPPORTUNITY",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5228"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5229"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5230"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5231"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EVIDENCE",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5232"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5233"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "REACH",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5234"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5235"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALUE",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5236"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5237"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "FEASIBILITY",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5238"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5239"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DECISION",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5240"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EXPLORE",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5241"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5242"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRIORITIZE",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5243"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5244"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "WAIT",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5245"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5246"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCARD",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5247"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5248"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si se prioriza:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5249"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BET",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5250"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5251"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CAPACITY COMMITMENT",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5252"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5253"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DELIVERY",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5254"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5255"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME EVIDENCE",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5256"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5257"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "REVIEW PRIORITY",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5258"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5259"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5224"
                                         }
                                     ]
                     },
                     {
                         "id":  "cambio-esperado",
                         "title":  "Cambio esperado",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo transforma:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5262"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5263"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué hacemos primero?”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5264"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "A",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5265"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“¿Qué problema merece capacidad ahora y por qué?”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5266"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Transforma:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5267"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5268"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Todo está en backlog.”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5269"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "A",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5270"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Toda oportunidad tiene una decisión explícita.”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5271"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Transforma:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5272"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5273"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Impacto alto / esfuerzo medio porque así lo percibimos.”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5274"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "A",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5275"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“La decisión muestra Outcome, evidencia, alcance, valor y factibilidad.”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5276"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Transforma:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5277"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5278"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Ya empezamos, tenemos que terminar.”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5279"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "A",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5280"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“La nueva evidencia puede justificar ajustar o detener.”",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5281"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5261"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-final-del-decision-prioritization-model",
                         "title":  "Diagnóstico final del Decision \u0026 Prioritization Model",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no evidencia que SEIF carezca de capacidad para priorizar.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5284"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia que el conocimiento necesario para tomar buenas decisiones está distribuido entre varias funciones y no se integra todavía mediante un mecanismo estable y trazable.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5285"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo resuelve esa brecha mediante una regla simple:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5286"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no prioriza solicitudes; prioriza problemas y oportunidades respaldados por evidencia, conectados con Outcomes y evaluados considerando alcance, valor y factibilidad.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5287"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La calidad del modelo no se medirá por cuántos elementos logra ordenar.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5288"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se medirá por su capacidad para:",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5289"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "decir sí con razones claras;",
                                                          "decir todavía no sin perder evidencia;",
                                                          "decir exploremos más cuando persiste incertidumbre;",
                                                          "decir no cuando la inversión no se justifica;",
                                                          "proteger el foco una vez tomada la decisión;",
                                                          "cambiar de dirección cuando nueva evidencia lo requiera."
                                                      ],
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5290–P5295"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ese comportamiento constituye el paso de una priorización contextual y distribuida hacia una capacidad de decisión de Producto Nivel 3 — Definida.",
                                            "source":  {
                                                           "title":  "13. Decision \u0026 Prioritization Model",
                                                           "locator":  "P5296"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "13. Decision \u0026 Prioritization Model",
                                             "locator":  "P5283"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "value-stream",
                    "design-principles",
                    "operating-model",
                    "discovery",
                    "roles",
                    "artifacts",
                    "delivery",
                    "north-star",
                    "governance"
                ],
    "source":  {
                   "title":  "13. Decision \u0026 Prioritization Model",
                   "locator":  "P4512–P5296",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
