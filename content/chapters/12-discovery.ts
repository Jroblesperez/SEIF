import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "discovery",
    "group":  "Operating Model",
    "title":  "Product Discovery",
    "sourceTitle":  "12. Product Discovery Model",
    "eyebrow":  "12 · Discover",
    "summary":  "Discovery convierte señales y oportunidades en decisiones respaldadas por evidencia proporcional al riesgo antes de comprometer capacidad significativa de Delivery.",
    "takeaway":  "Discovery no termina cuando existe un diseño: termina cuando SEIF puede decidir Proceed, Adjust, Explore More o Stop con evidencia proporcional al riesgo.",
    "executive":  {
                      "keyFindings":  [
                                          "Discovery ya existe en SEIF; el cambio es hacerlo consistente y proporcional al riesgo.",
                                          "Problem Discovery y Solution Validation son momentos distintos dentro del modelo fuente.",
                                          "La Opportunity es la unidad de Discovery y la evidencia se separa de supuestos e hipótesis.",
                                          "El éxito se mide por velocidad y costo de aprendizaje, no por volumen de entrevistas o prototipos."
                                      ],
                      "implication":  "El capítulo propone un sistema de aprendizaje ejecutable. Roles, autoridad, métricas, WIP, cadencias y tooling conservan sus validaciones abiertas.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "flow",
                      "sources":  [
                                      {
                                          "title":  "12. Product Discovery Model",
                                          "locator":  "P3568–P4511"
                                      }
                                  ]
                  },
    "clientValidations":  [
                              {
                                  "id":  "CL-04",
                                  "subject":  "Mapeo de Product y roles participantes",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-05",
                                  "subject":  "Authority del Discovery Decision Gate",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-10",
                                  "subject":  "Arquitectura futura de tooling para Discovery",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              }
                          ],
    "operatingConcepts":  [
                              {
                                  "id":  "product-discovery-system",
                                  "title":  "Product Discovery proporcional al riesgo",
                                  "canonicalLayers":  [
                                                          "DISCOVER",
                                                          "EVIDENCE",
                                                          "DECIDE",
                                                          "LEARN"
                                                      ],
                                  "sourceChapters":  [
                                                         "12"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3568–P4511"
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
                                                 "CL-10",
                                                 "CL-11"
                                             ]
                              },
                              {
                                  "id":  "discovery-evidence-quality",
                                  "title":  "Evidence quality A–D",
                                  "canonicalLayers":  [
                                                          "DISCOVER",
                                                          "EVIDENCE"
                                                      ],
                                  "sourceChapters":  [
                                                         "12"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3849–P3893"
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
                                                       "TOOL":  "SOURCE MISSING"
                                                   },
                                  "gapIds":  [

                                             ]
                              },
                              {
                                  "id":  "discovery-feedback-loop",
                                  "title":  "Discovery feedback loop",
                                  "canonicalLayers":  [
                                                          "DISCOVER",
                                                          "ADOPT",
                                                          "LEARN"
                                                      ],
                                  "sourceChapters":  [
                                                         "12"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P4038–P4059; P4183–P4193; P4393–P4397"
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
                              }
                          ],
    "operatingStages":  [
                            {
                                "canonicalStage":  "DISCOVER",
                                "sourceSubStages":  [
                                                        {
                                                            "title":  "SIGNAL",
                                                            "locator":  "P3590",
                                                            "relationship":  "SOURCE SUB-STAGE"
                                                        },
                                                        {
                                                            "title":  "FRAME",
                                                            "locator":  "P3590",
                                                            "relationship":  "SOURCE SUB-STAGE"
                                                        },
                                                        {
                                                            "title":  "DISCOVER",
                                                            "locator":  "P3592",
                                                            "relationship":  "SOURCE TERMINOLOGY"
                                                        },
                                                        {
                                                            "title":  "VALIDATE",
                                                            "locator":  "P3595",
                                                            "relationship":  "SOURCE SUB-STAGE"
                                                        }
                                                    ],
                                "purpose":  "Reducir incertidumbre del problema y de la hipótesis de solución antes de invertir capacidad significativa.",
                                "triggers":  [
                                                 "Signal u Opportunity relevante"
                                             ],
                                "inputs":  [
                                               "Signal",
                                               "Opportunity",
                                               "evidencia disponible"
                                           ],
                                "steps":  [
                                              "FRAME",
                                              "DISCOVER",
                                              "VALIDATE"
                                          ],
                                "outputs":  [
                                                "PROCEED",
                                                "ADJUST",
                                                "EXPLORE MORE",
                                                "STOP"
                                            ],
                                "source":  {
                                               "title":  "12. Product Discovery Model",
                                               "locator":  "P3588–P3602; P4087–P4121"
                                           }
                            }
                        ],
    "sourceOperatingSequence":  [
                                    {
                                        "title":  "SIGNAL",
                                        "locator":  "P3590",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    },
                                    {
                                        "title":  "FRAME",
                                        "locator":  "P3590",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    },
                                    {
                                        "title":  "DISCOVER",
                                        "locator":  "P3592",
                                        "relationship":  "SOURCE TERMINOLOGY"
                                    },
                                    {
                                        "title":  "DECIDE",
                                        "locator":  "P3590",
                                        "relationship":  "SOURCE TERMINOLOGY"
                                    },
                                    {
                                        "title":  "VALIDATE",
                                        "locator":  "P3595",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    },
                                    {
                                        "title":  "DELIVER",
                                        "locator":  "P3590",
                                        "relationship":  "SOURCE TERMINOLOGY"
                                    },
                                    {
                                        "title":  "RELEASE",
                                        "locator":  "P3590",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    },
                                    {
                                        "title":  "ADOPT",
                                        "locator":  "P3590",
                                        "relationship":  "SOURCE TERMINOLOGY"
                                    },
                                    {
                                        "title":  "MEASURE \u0026 LEARN",
                                        "locator":  "P3590",
                                        "relationship":  "SOURCE SUB-STAGE"
                                    }
                                ],
    "operatingRoles":  [
                           {
                               "id":  "head-producto",
                               "sourceRole":  "Product — source wording",
                               "purpose":  "Framing, Outcome, priorización y decisión de inversión.",
                               "responsibilities":  [
                                                        "Framing",
                                                        "Outcome",
                                                        "priorización",
                                                        "decisión de inversión"
                                                    ],
                               "canonicalStages":  [
                                                       "DISCOVER",
                                                       "DECIDE"
                                                   ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "DECISION":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "METRIC":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "12. Product Discovery Model",
                                                          "locator":  "P3792–P3799"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "ux-ui",
                               "sourceRole":  "UX/UI",
                               "purpose":  "Entendimiento del usuario, journey, interacción, prototipado y validación de experiencia.",
                               "responsibilities":  [
                                                        "Research",
                                                        "journey",
                                                        "prototipado",
                                                        "validación"
                                                    ],
                               "canonicalStages":  [
                                                       "DISCOVER"
                                                   ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "DECISION":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "METRIC":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "12. Product Discovery Model",
                                                          "locator":  "P3800–P3806"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "desarrollo",
                               "sourceRole":  "Desarrollo",
                               "purpose":  "Participa cuando existe incertidumbre técnica relevante.",
                               "responsibilities":  [
                                                        "Factibilidad",
                                                        "arquitectura",
                                                        "integración",
                                                        "complejidad"
                                                    ],
                               "canonicalStages":  [
                                                       "DISCOVER",
                                                       "DELIVER"
                                                   ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "DECISION":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "METRIC":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "12. Product Discovery Model",
                                                          "locator":  "P3807–P3812"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "sre",
                               "sourceRole":  "SRE",
                               "purpose":  "Participa cuando existen implicaciones operacionales o de confiabilidad.",
                               "responsibilities":  [
                                                        "Confiabilidad",
                                                        "operación",
                                                        "seguridad",
                                                        "observabilidad",
                                                        "escalabilidad",
                                                        "deuda"
                                                    ],
                               "canonicalStages":  [
                                                       "DISCOVER",
                                                       "DELIVER"
                                                   ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "DECISION":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "METRIC":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "12. Product Discovery Model",
                                                          "locator":  "P3813–P3820"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "customer-success",
                               "sourceRole":  "Customer Success",
                               "purpose":  "Aporta señales y contexto antes, facilita evidencia durante y aporta señales de adopción después del release.",
                               "responsibilities":  [
                                                        "Adopción",
                                                        "implementación",
                                                        "comportamiento",
                                                        "criterios de éxito"
                                                    ],
                               "canonicalStages":  [
                                                       "DISCOVER",
                                                       "ADOPT",
                                                       "LEARN"
                                                   ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "DECISION":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "METRIC":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "12. Product Discovery Model",
                                                          "locator":  "P3821–P3828; P4195–P4205"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "soporte",
                               "sourceRole":  "Soporte",
                               "purpose":  "Aporta incidentes, fricciones, consultas y patrones repetitivos.",
                               "responsibilities":  [
                                                        "Detectar patrones de tickets"
                                                    ],
                               "canonicalStages":  [
                                                       "DISCOVER"
                                                   ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "DECISION":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "METRIC":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "12. Product Discovery Model",
                                                          "locator":  "P3829–P3834; P4207–P4224"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           },
                           {
                               "id":  "marketing",
                               "sourceRole":  "Marketing",
                               "purpose":  "Participa cuando la incertidumbre afecta segmento, mercado, posicionamiento o propuesta de valor.",
                               "responsibilities":  [
                                                        "Señales de mercado",
                                                        "validación de relevancia comercial"
                                                    ],
                               "canonicalStages":  [
                                                       "DISCOVER"
                                                   ],
                               "mappingStatus":  "ROLE MAPPING PENDING",
                               "completeness":  {
                                                    "WHAT":  "SOURCE COMPLETE",
                                                    "WHY":  "SOURCE COMPLETE",
                                                    "WHO":  "SOURCE COMPLETE",
                                                    "HOW":  "SOURCE PARTIAL",
                                                    "INPUT":  "SOURCE PARTIAL",
                                                    "OUTPUT":  "SOURCE PARTIAL",
                                                    "DECISION":  "SOURCE PARTIAL",
                                                    "ARTIFACT":  "SOURCE PARTIAL",
                                                    "WHEN":  "SOURCE MISSING",
                                                    "METRIC":  "SOURCE MISSING",
                                                    "TOOL":  "SOURCE MISSING",
                                                    "EXAMPLE":  "SOURCE MISSING"
                                                },
                               "sourceLocators":  [
                                                      {
                                                          "title":  "12. Product Discovery Model",
                                                          "locator":  "P3835–P3841; P4226–P4236"
                                                      }
                                                  ],
                               "clientValidationIds":  [
                                                           "CL-04"
                                                       ]
                           }
                       ],
    "discoveryConcepts":  [
                              {
                                  "id":  "trigger",
                                  "kind":  "TRIGGER",
                                  "title":  "Señal que merece investigación",
                                  "purpose":  "Iniciar aprendizaje desde una observación, problema o anomalía sin convertirla automáticamente en Feature.",
                                  "trigger":  "Aparece una señal relevante",
                                  "inputs":  [
                                                 "señales de cliente, operación, mercado, datos o tecnología"
                                             ],
                                  "activities":  [
                                                     "capturar contexto",
                                                     "determinar si merece framing"
                                                 ],
                                  "outputs":  [
                                                  "Signal contextualizada"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "fuente de señal"
                                            ],
                                  "artifacts":  [
                                                    "Signal"
                                                ],
                                  "evidenceExpected":  [
                                                           "observación disponible"
                                                       ],
                                  "decisionEnabled":  "Investigar o no",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3570–P3586; P3643–P3657"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "signal",
                                  "kind":  "SIGNAL",
                                  "title":  "SIGNAL",
                                  "purpose":  "Hacer visible algo relevante observado durante la operación.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "observación"
                                             ],
                                  "activities":  [
                                                     "capturar durante la operación"
                                                 ],
                                  "outputs":  [
                                                  "Signal"
                                              ],
                                  "roles":  [
                                                "CS",
                                                "Soporte",
                                                "Marketing",
                                                "Analytics",
                                                "Product"
                                            ],
                                  "artifacts":  [
                                                    "Signal"
                                                ],
                                  "evidenceExpected":  [
                                                           "hecho observado o fuente identificable"
                                                       ],
                                  "decisionEnabled":  "Convertir en Opportunity cuando se formula el problema",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3683–P3689; P4183–P4188"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "opportunity",
                                  "kind":  "PROBLEM / OPPORTUNITY",
                                  "title":  "Opportunity",
                                  "purpose":  "Representar una situación donde un actor puede obtener un resultado mejor.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "Signal",
                                                 "contexto",
                                                 "evidencia disponible"
                                             ],
                                  "activities":  [
                                                     "identificar actor, resultado, impedimento, impacto y evidencia"
                                                 ],
                                  "outputs":  [
                                                  "Opportunity Statement"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "UX/UI",
                                                "fuente de evidencia"
                                            ],
                                  "artifacts":  [
                                                    "Opportunity Card"
                                                ],
                                  "evidenceExpected":  [
                                                           "problema observado e impacto"
                                                       ],
                                  "decisionEnabled":  "Explorar, ajustar, esperar o detener",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3638–P3681"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "framing",
                                  "kind":  "FRAMING",
                                  "title":  "Problem framing",
                                  "purpose":  "Eliminar ambigüedad antes de plantear una solución.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "Opportunity"
                                             ],
                                  "activities":  [
                                                     "separar solicitud, problema y solución",
                                                     "hacer visibles unknowns"
                                                 ],
                                  "outputs":  [
                                                  "Opportunity en FRAMING / DISCOVERY"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "UX/UI"
                                            ],
                                  "artifacts":  [
                                                    "Opportunity Card",
                                                    "Discovery Board"
                                                ],
                                  "evidenceExpected":  [
                                                           "quién, qué intenta lograr, impedimento, impacto y evidencia"
                                                       ],
                                  "decisionEnabled":  "Ingresar a Discovery o Wait / Stop",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3659–P3668; P4154–P4169"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "assumption",
                                  "kind":  "ASSUMPTION",
                                  "title":  "Assumption Mapping",
                                  "purpose":  "Identificar creencias importantes con poca evidencia para probar primero la incertidumbre que podría invalidar la inversión.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "Hypothesis",
                                                 "Evidence Map"
                                             ],
                                  "activities":  [
                                                     "comparar importancia y evidencia"
                                                 ],
                                  "outputs":  [
                                                  "Key Assumptions priorizados"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "UX/UI",
                                                "Desarrollo/SRE según riesgo"
                                            ],
                                  "artifacts":  [
                                                    "Opportunity Card",
                                                    "Evidence Map"
                                                ],
                                  "evidenceExpected":  [
                                                           "nivel de evidencia disponible"
                                                       ],
                                  "decisionEnabled":  "Seleccionar qué validar primero",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3972–P3981"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "hypothesis",
                                  "kind":  "HYPOTHESIS",
                                  "title":  "Hypothesis Model",
                                  "purpose":  "Proponer una intervención separando lo conocido de lo que se cree que funcionará.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "Opportunity",
                                                 "Outcome",
                                                 "assumptions"
                                             ],
                                  "activities":  [
                                                     "formular solución/cambio, usuario, Outcome y evidencia esperada"
                                                 ],
                                  "outputs":  [
                                                  "Hypothesis"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "UX/UI",
                                                "Desarrollo/SRE según incertidumbre"
                                            ],
                                  "artifacts":  [
                                                    "Opportunity Card"
                                                ],
                                  "evidenceExpected":  [
                                                           "señal observable esperada"
                                                       ],
                                  "decisionEnabled":  "Validar, ajustar o descartar",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3962–P3970"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "research",
                                  "kind":  "RESEARCH",
                                  "title":  "Investigación proporcional al riesgo",
                                  "purpose":  "Reducir incertidumbre del problema, comportamiento, experiencia, mercado o solución con técnicas proporcionales.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "pregunta de aprendizaje",
                                                 "nivel de riesgo"
                                             ],
                                  "activities":  [
                                                     "analytics, tickets, entrevistas, observación, journey o research estructurado según riesgo"
                                                 ],
                                  "outputs":  [
                                                  "evidencia utilizable"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "UX/UI",
                                                "CS",
                                                "Soporte",
                                                "Marketing"
                                            ],
                                  "artifacts":  [
                                                    "Evidence Map"
                                                ],
                                  "evidenceExpected":  [
                                                           "evidencia proporcional al riesgo"
                                                       ],
                                  "decisionEnabled":  "Aceptar, modificar o descartar hipótesis",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3721–P3784"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "experiment",
                                  "kind":  "EXPERIMENT",
                                  "title":  "Cheapest Validation",
                                  "purpose":  "Comprar evidencia progresivamente mediante el mecanismo de menor costo capaz de responder la pregunta.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "hipótesis riesgosa",
                                                 "pregunta de validación"
                                             ],
                                  "activities":  [
                                                     "seleccionar y ejecutar el nivel mínimo de la Validation Ladder"
                                                 ],
                                  "outputs":  [
                                                  "resultado observado"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "UX/UI",
                                                "Desarrollo/SRE cuando aplica"
                                            ],
                                  "artifacts":  [
                                                    "Prototype / Experiment",
                                                    "Evidence Map"
                                                ],
                                  "evidenceExpected":  [
                                                           "respuesta observable a la pregunta"
                                                       ],
                                  "decisionEnabled":  "Escalar la inversión o cambiar la hipótesis",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3983–P4016"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "evidence",
                                  "kind":  "EVIDENCE",
                                  "title":  "Evidence Map y jerarquía A–D",
                                  "purpose":  "Separar KNOWN, ASSUMED y UNKNOWN y ponderar la naturaleza de la evidencia sin scores de confianza.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "señales, investigación y validación"
                                             ],
                                  "activities":  [
                                                     "clasificar conocimiento y fuente de evidencia"
                                                 ],
                                  "outputs":  [
                                                  "Evidence Map actualizada"
                                              ],
                                  "roles":  [
                                                "quien posee evidencia relevante"
                                            ],
                                  "artifacts":  [
                                                    "Evidence Map"
                                                ],
                                  "evidenceExpected":  [
                                                           "A comportamiento; B usuario; C comercial/operacional; D opinión/hipótesis"
                                                       ],
                                  "decisionEnabled":  "Determinar si la incertidumbre es aceptable",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P3849–P3893"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "synthesis",
                                  "kind":  "SYNTHESIS",
                                  "title":  "Síntesis de evidencia",
                                  "purpose":  "Consolidar patrones y resultados para mantener conectados problema, evidencia, Outcome e hipótesis.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "research, feedback, datos y resultados"
                                             ],
                                  "activities":  [
                                                     "research synthesis",
                                                     "pattern detection",
                                                     "comparar expected vs actual"
                                                 ],
                                  "outputs":  [
                                                  "evidencia conectada y aprendizaje"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "UX/UI"
                                            ],
                                  "artifacts":  [
                                                    "Evidence Map",
                                                    "Product Discovery Canvas"
                                                ],
                                  "evidenceExpected":  [
                                                           "patrones trazables a fuentes"
                                                       ],
                                  "decisionEnabled":  "Preparar Discovery Decision Gate",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P4018–P4036; P4399–P4420"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "decision",
                                  "kind":  "DECISION",
                                  "title":  "Discovery Decision Gate",
                                  "purpose":  "Finalizar Discovery por evidencia suficiente para decidir, no por terminar diseño o documentación.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "problem, user, Outcome, evidence, risk, validation, measurement"
                                             ],
                                  "activities":  [
                                                     "revisar preguntas críticas"
                                                 ],
                                  "outputs":  [
                                                  "PROCEED",
                                                  "ADJUST",
                                                  "EXPLORE MORE",
                                                  "STOP"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "participantes con evidencia"
                                            ],
                                  "artifacts":  [
                                                    "Opportunity Card"
                                                ],
                                  "evidenceExpected":  [
                                                           "evidencia proporcional al riesgo"
                                                       ],
                                  "decisionEnabled":  "Proceed / Adjust / Explore More / Stop",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P4087–P4121"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "learning",
                                  "kind":  "LEARNING",
                                  "title":  "Feedback loop",
                                  "purpose":  "Usar evidencia previa y posterior al release para cambiar la acción y alimentar nuevas oportunidades.",
                                  "trigger":  "",
                                  "inputs":  [
                                                 "evidencia de validación o post-release"
                                             ],
                                  "activities":  [
                                                     "learn",
                                                     "adjust",
                                                     "validate again",
                                                     "Outcome Review"
                                                 ],
                                  "outputs":  [
                                                  "new learning",
                                                  "nueva decisión o Opportunity"
                                              ],
                                  "roles":  [
                                                "Product",
                                                "UX/UI",
                                                "CS",
                                                "Analytics"
                                            ],
                                  "artifacts":  [
                                                    "Evidence Map",
                                                    "Learning Card — conexión parcial"
                                                ],
                                  "evidenceExpected":  [
                                                           "expected vs actual"
                                                       ],
                                  "decisionEnabled":  "Ajustar, validar nuevamente o decidir inversión",
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "12. Product Discovery Model",
                                                             "locator":  "P4038–P4059; P4183–P4193; P4393–P4397"
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
                                                       "EVIDENCE QUALITY":  "SOURCE COMPLETE",
                                                       "EXIT / DECISION CRITERIA":  "SOURCE COMPLETE",
                                                       "FEEDBACK LOOP":  "SOURCE COMPLETE",
                                                       "WHO":  "SOURCE PARTIAL",
                                                       "WHEN":  "SOURCE PARTIAL",
                                                       "METRIC":  "SOURCE PARTIAL",
                                                       "TOOL":  "SOURCE MISSING"
                                                   }
                              }
                          ],
    "discoveryFlowConnections":  [
                                     {
                                         "from":  "Signal",
                                         "to":  "Opportunity",
                                         "status":  "SUPPORTED CONNECTION",
                                         "rationale":  "El Discovery Funnel convierte la señal en problema.",
                                         "source":  {
                                                        "title":  "12. Product Discovery Model",
                                                        "locator":  "P3683–P3690"
                                                    }
                                     },
                                     {
                                         "from":  "Opportunity",
                                         "to":  "Outcome",
                                         "status":  "PARTIAL CONNECTION",
                                         "rationale":  "La fuente intercala Evidence antes de definir Outcome.",
                                         "source":  {
                                                        "title":  "12. Product Discovery Model",
                                                        "locator":  "P3688–P3696"
                                                    }
                                     },
                                     {
                                         "from":  "Outcome",
                                         "to":  "Bet",
                                         "status":  "PARTIAL CONNECTION",
                                         "rationale":  "La fuente requiere Hypothesis, Validation y Decision antes de Delivery Bet.",
                                         "source":  {
                                                        "title":  "12. Product Discovery Model",
                                                        "locator":  "P3694–P3707"
                                                    }
                                     },
                                     {
                                         "from":  "Bet",
                                         "to":  "Delivery",
                                         "status":  "PARTIAL CONNECTION",
                                         "rationale":  "Delivery Bet representa el compromiso posterior a la decisión, pero la conexión no se define como relación de artefactos.",
                                         "source":  {
                                                        "title":  "12. Product Discovery Model",
                                                        "locator":  "P3703–P3707"
                                                    }
                                     },
                                     {
                                         "from":  "Delivery",
                                         "to":  "Evidence",
                                         "status":  "PARTIAL CONNECTION",
                                         "rationale":  "La evidencia post-release aparece después de Release/Adoption, no directamente después de Delivery.",
                                         "source":  {
                                                        "title":  "12. Product Discovery Model",
                                                        "locator":  "P4390–P4396"
                                                    }
                                     },
                                     {
                                         "from":  "Evidence",
                                         "to":  "Learning",
                                         "status":  "SUPPORTED CONNECTION",
                                         "rationale":  "La fuente conecta evidencia observada con Learn/New Learning.",
                                         "source":  {
                                                        "title":  "12. Product Discovery Model",
                                                        "locator":  "P4038–P4056; P4393–P4397"
                                                    }
                                     },
                                     {
                                         "from":  "Learning",
                                         "to":  "Decision",
                                         "status":  "PARTIAL CONNECTION",
                                         "rationale":  "El loop de prototipo produce Delivery decision; el loop post-release vuelve a comenzar sin explicitar un Decision Log.",
                                         "source":  {
                                                        "title":  "12. Product Discovery Model",
                                                        "locator":  "P4050–P4056; P4393–P4397"
                                                    }
                                     }
                                 ],
    "discoveryEvidenceModel":  [
                                   {
                                       "term":  "ASSUMPTION",
                                       "definition":  "Creencia cuya importancia para que la solución funcione se contrasta con el nivel de evidencia disponible.",
                                       "sourceStatus":  "SOURCE COMPLETE",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3972–P3981"
                                                  }
                                   },
                                   {
                                       "term":  "HYPOTHESIS",
                                       "definition":  "Propuesta de solución o cambio que se espera permita a un usuario lograr un Outcome y que declara la evidencia esperada.",
                                       "sourceStatus":  "SOURCE COMPLETE",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3962–P3970"
                                                  }
                                   },
                                   {
                                       "term":  "EVIDENCE",
                                       "definition":  "Información que permite separar KNOWN, ASSUMED y UNKNOWN y respaldar una decisión proporcional al riesgo.",
                                       "qualityModel":  [
                                                            "Nivel A — Comportamiento observado",
                                                            "Nivel B — Evidencia directa del usuario",
                                                            "Nivel C — Evidencia comercial/operacional",
                                                            "Nivel D — Opinión / hipótesis interna; origen válido, no evidencia suficiente de problema"
                                                        ],
                                       "sourceStatus":  "SOURCE COMPLETE",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3849–P3893"
                                                  }
                                   },
                                   {
                                       "term":  "INSIGHT",
                                       "sourceStatus":  "SOURCE MISSING"
                                   },
                                   {
                                       "term":  "DECISION",
                                       "definition":  "Resultado explícito de Discovery: PROCEED, ADJUST, EXPLORE MORE o STOP.",
                                       "sourceStatus":  "SOURCE COMPLETE",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P4109–P4121"
                                                  }
                                   }
                               ],
    "discoveryGates":  [
                           {
                               "id":  "proceed",
                               "decision":  "PROCEED",
                               "trigger":  "Discovery Decision Gate: evidencia suficiente para tomar una decisión explícita.",
                               "inputs":  [
                                              "Problem",
                                              "User",
                                              "Outcome",
                                              "Evidence",
                                              "Risk",
                                              "Validation",
                                              "Measurement"
                                          ],
                               "evidenceRequired":  [
                                                        "evidencia del problema",
                                                        "actor claro",
                                                        "Outcome definido",
                                                        "importancia respaldada",
                                                        "incertidumbres críticas identificadas",
                                                        "hipótesis más riesgosas suficientemente probadas",
                                                        "señal post-release definida"
                                                    ],
                               "participants":  [
                                                    "Product",
                                                    "participantes que poseen evidencia o reducen incertidumbre crítica"
                                                ],
                               "decisionOwner":  "Product — fuente; autoridad organizacional pendiente de validación",
                               "possibleOutputs":  [
                                                       "PROCEED",
                                                       "Existe evidencia suficiente; la oportunidad puede convertirse en Delivery Bet."
                                                   ],
                               "source":  {
                                              "title":  "12. Product Discovery Model",
                                              "locator":  "P4087–P4121"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "adjust",
                               "decision":  "ADJUST",
                               "trigger":  "Discovery Decision Gate: evidencia suficiente para tomar una decisión explícita.",
                               "inputs":  [
                                              "Problem",
                                              "User",
                                              "Outcome",
                                              "Evidence",
                                              "Risk",
                                              "Validation",
                                              "Measurement"
                                          ],
                               "evidenceRequired":  [
                                                        "evidencia del problema",
                                                        "actor claro",
                                                        "Outcome definido",
                                                        "importancia respaldada",
                                                        "incertidumbres críticas identificadas",
                                                        "hipótesis más riesgosas suficientemente probadas",
                                                        "señal post-release definida"
                                                    ],
                               "participants":  [
                                                    "Product",
                                                    "participantes que poseen evidencia o reducen incertidumbre crítica"
                                                ],
                               "decisionOwner":  "Product — fuente; autoridad organizacional pendiente de validación",
                               "possibleOutputs":  [
                                                       "ADJUST",
                                                       "El problema sigue siendo relevante, pero la hipótesis necesita modificación."
                                                   ],
                               "source":  {
                                              "title":  "12. Product Discovery Model",
                                              "locator":  "P4087–P4121"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "explore-more",
                               "decision":  "EXPLORE MORE",
                               "trigger":  "Discovery Decision Gate: evidencia suficiente para tomar una decisión explícita.",
                               "inputs":  [
                                              "Problem",
                                              "User",
                                              "Outcome",
                                              "Evidence",
                                              "Risk",
                                              "Validation",
                                              "Measurement"
                                          ],
                               "evidenceRequired":  [
                                                        "evidencia del problema",
                                                        "actor claro",
                                                        "Outcome definido",
                                                        "importancia respaldada",
                                                        "incertidumbres críticas identificadas",
                                                        "hipótesis más riesgosas suficientemente probadas",
                                                        "señal post-release definida"
                                                    ],
                               "participants":  [
                                                    "Product",
                                                    "participantes que poseen evidencia o reducen incertidumbre crítica"
                                                ],
                               "decisionOwner":  "Product — fuente; autoridad organizacional pendiente de validación",
                               "possibleOutputs":  [
                                                       "EXPLORE MORE",
                                                       "Permanece una incertidumbre crítica que requiere aprendizaje adicional."
                                                   ],
                               "source":  {
                                              "title":  "12. Product Discovery Model",
                                              "locator":  "P4087–P4121"
                                          },
                               "validationStatus":  "pending"
                           },
                           {
                               "id":  "stop",
                               "decision":  "STOP",
                               "trigger":  "Discovery Decision Gate: evidencia suficiente para tomar una decisión explícita.",
                               "inputs":  [
                                              "Problem",
                                              "User",
                                              "Outcome",
                                              "Evidence",
                                              "Risk",
                                              "Validation",
                                              "Measurement"
                                          ],
                               "evidenceRequired":  [
                                                        "evidencia del problema",
                                                        "actor claro",
                                                        "Outcome definido",
                                                        "importancia respaldada",
                                                        "incertidumbres críticas identificadas",
                                                        "hipótesis más riesgosas suficientemente probadas",
                                                        "señal post-release definida"
                                                    ],
                               "participants":  [
                                                    "Product",
                                                    "participantes que poseen evidencia o reducen incertidumbre crítica"
                                                ],
                               "decisionOwner":  "Product — fuente; autoridad organizacional pendiente de validación",
                               "possibleOutputs":  [
                                                       "STOP",
                                                       "La evidencia no justifica inversión adicional."
                                                   ],
                               "source":  {
                                              "title":  "12. Product Discovery Model",
                                              "locator":  "P4087–P4121"
                                          },
                               "validationStatus":  "pending"
                           }
                       ],
    "discoveryTechniques":  [
                                {
                                    "id":  "existing-evidence",
                                    "name":  "Existing Evidence / data analysis",
                                    "purpose":  "Responder primero con evidencia ya disponible.",
                                    "whenUseful":  "Antes de generar nueva investigación o cuando el riesgo es bajo.",
                                    "evidenceGenerated":  "Analytics, tickets, datos y conversaciones existentes.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P3732–P3738; P3983–P3988"
                                               }
                                },
                                {
                                    "id":  "interviews",
                                    "name":  "Entrevistas",
                                    "purpose":  "Obtener evidencia directa del usuario.",
                                    "whenUseful":  "Cuando la incertidumbre está en problema, comportamiento o necesidad.",
                                    "evidenceGenerated":  "Evidencia Nivel B.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P3748–P3756; P3876–P3880"
                                               }
                                },
                                {
                                    "id":  "observation",
                                    "name":  "Observación",
                                    "purpose":  "Ver comportamiento y fricción en contexto.",
                                    "whenUseful":  "Cuando lo declarado puede diferir de lo que ocurre.",
                                    "evidenceGenerated":  "Comportamiento observado y evidencia directa.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P3876–P3880; P3919–P3928"
                                               }
                                },
                                {
                                    "id":  "journey",
                                    "name":  "Journey analysis",
                                    "purpose":  "Entender objetivo, pasos, fricción, dependencia, abandono y momento de éxito.",
                                    "whenUseful":  "Para journeys existentes o incertidumbre end-to-end.",
                                    "evidenceGenerated":  "Fricciones y Moments of Truth.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P3919–P3960"
                                               }
                                },
                                {
                                    "id":  "concept",
                                    "name":  "Sketch / Concept",
                                    "purpose":  "Validar comprensión conceptual antes de construir interacción completa.",
                                    "whenUseful":  "Cuando una representación ligera puede responder la pregunta.",
                                    "evidenceGenerated":  "Reacción y comprensión conceptual.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P3993–P3996"
                                               }
                                },
                                {
                                    "id":  "prototype",
                                    "name":  "Interactive Prototype",
                                    "purpose":  "Validar experiencia, Outcome, fricción, reglas y autonomía mediante un flujo integrado.",
                                    "whenUseful":  "Cuando existe incertidumbre de solución o experiencia.",
                                    "evidenceGenerated":  "Evidencia de cliente sobre capacidad de lograr el resultado.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P3997–P4000; P4038–P4085"
                                               }
                                },
                                {
                                    "id":  "technical-spike",
                                    "name":  "Technical Spike / Simulation",
                                    "purpose":  "Reducir incertidumbre técnica crítica.",
                                    "whenUseful":  "Cuando existen dudas de factibilidad, arquitectura, integración u operación.",
                                    "evidenceGenerated":  "Factibilidad, constraints y riesgos técnicos.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P4001–P4003; P4238–P4248"
                                               }
                                },
                                {
                                    "id":  "concierge",
                                    "name":  "Concierge / Manual Test",
                                    "purpose":  "Probar el resultado sin automatizar completamente.",
                                    "whenUseful":  "Cuando el resultado puede validarse manualmente con menor inversión.",
                                    "evidenceGenerated":  "Respuesta real sin software completo.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P4005–P4007"
                                               }
                                },
                                {
                                    "id":  "mvp",
                                    "name":  "MVP",
                                    "purpose":  "Obtener evidencia en condiciones reales con software mínimo.",
                                    "whenUseful":  "Solo cuando niveles más económicos no resuelven la incertidumbre.",
                                    "evidenceGenerated":  "Comportamiento en condiciones reales.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P4009–P4011"
                                               }
                                },
                                {
                                    "id":  "ai-assisted",
                                    "name":  "AI-assisted synthesis / prototype",
                                    "purpose":  "Reducir Learning Lead Time acelerando síntesis, patrones, hipótesis, prototipos, reglas y edge cases.",
                                    "whenUseful":  "Como acelerador; el cliente o datos continúan aportando la evidencia.",
                                    "evidenceGenerated":  "No genera validación por sí sola.",
                                    "example":  "",
                                    "source":  {
                                                   "title":  "12. Product Discovery Model",
                                                   "locator":  "P4018–P4059"
                                               }
                                }
                            ],
    "discoveryCadences":  [
                              {
                                  "name":  "Captura de señales",
                                  "cadenceType":  "CONTINUOUS",
                                  "purpose":  "Capturar señales durante la operación.",
                                  "participants":  [
                                                       "fuentes operativas",
                                                       "Product"
                                                   ],
                                  "source":  {
                                                 "title":  "12. Product Discovery Model",
                                                 "locator":  "P4183–P4186"
                                             }
                              },
                              {
                                  "name":  "Revisión de señales y oportunidades",
                                  "cadenceType":  "SCHEDULED",
                                  "purpose":  "Producto revisa nuevas señales y oportunidades activas semanalmente.",
                                  "participants":  [
                                                       "Product"
                                                   ],
                                  "source":  {
                                                 "title":  "12. Product Discovery Model",
                                                 "locator":  "P4187–P4188"
                                             }
                              },
                              {
                                  "name":  "Revisión de evidencia y prototipos",
                                  "cadenceType":  "SCHEDULED",
                                  "purpose":  "Revisar quincenalmente evidencia relevante y prototipos cuando existen.",
                                  "participants":  [
                                                       "participantes según evidencia/incertidumbre"
                                                   ],
                                  "source":  {
                                                 "title":  "12. Product Discovery Model",
                                                 "locator":  "P4189–P4190"
                                             }
                              },
                              {
                                  "name":  "Outcome Review",
                                  "cadenceType":  "EVENT-DRIVEN",
                                  "purpose":  "Los resultados posteriores alimentan nuevas oportunidades dentro del Operating Cadence.",
                                  "source":  {
                                                 "title":  "12. Product Discovery Model",
                                                 "locator":  "P4191–P4193"
                                             }
                              },
                              {
                                  "name":  "Discovery Decision Gate",
                                  "cadenceType":  "GATE",
                                  "purpose":  "Decidir cuando existe evidencia proporcional al riesgo; no al terminar una ceremonia o sprint.",
                                  "participants":  [
                                                       "Product",
                                                       "participantes pertinentes"
                                                   ],
                                  "source":  {
                                                 "title":  "12. Product Discovery Model",
                                                 "locator":  "P4087–P4121"
                                             }
                              }
                          ],
    "artifactUses":  [
                         {
                             "artifactId":  "signal",
                             "artifactName":  "Signal",
                             "relationship":  "READS",
                             "usage":  "Discovery recibe señales capturadas durante la operación y las convierte en problemas cuando corresponde.",
                             "source":  {
                                            "title":  "12. Product Discovery Model",
                                            "locator":  "P3683–P3690; P4183–P4188"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "opportunity-card",
                             "artifactName":  "Opportunity Card",
                             "relationship":  "UPDATES",
                             "usage":  "Artefacto central por oportunidad: Problem, User/Segment, Evidence, Outcome, Success Signal, Key Assumptions, Validation y Decision.",
                             "source":  {
                                            "title":  "12. Product Discovery Model",
                                            "locator":  "P4132–P4152"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "evidence-map",
                             "artifactName":  "Evidence Map",
                             "relationship":  "UPDATES",
                             "usage":  "Distingue KNOWN, ASSUMED y UNKNOWN y evoluciona a medida que se obtiene evidencia.",
                             "source":  {
                                            "title":  "12. Product Discovery Model",
                                            "locator":  "P3849–P3862"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "source-discovery-board",
                             "artifactName":  "Discovery Board",
                             "relationship":  "SOURCE TERMINOLOGY CONFLICT",
                             "usage":  "Artefacto adicional de la fuente para representar aprendizaje y estados de oportunidades; no se incorpora automáticamente al catálogo canónico.",
                             "source":  {
                                            "title":  "12. Product Discovery Model",
                                            "locator":  "P4154–P4169"
                                        },
                             "validationStatus":  "pending"
                         },
                         {
                             "artifactId":  "source-product-discovery-canvas",
                             "artifactName":  "Product Discovery Canvas — SEIF",
                             "relationship":  "SOURCE TERMINOLOGY CONFLICT",
                             "usage":  "Vista fuente adicional que resume Discovery; requiere revisión antes de decidir si es vista o artefacto independiente.",
                             "source":  {
                                            "title":  "12. Product Discovery Model",
                                            "locator":  "P4478–P4480"
                                        },
                             "validationStatus":  "pending"
                         }
                     ],
    "antiPatternAssessments":  [
                                   {
                                       "antiPattern":  "Discovery as a one-time phase",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "La fuente niega Discovery waterfall y define actividad concurrente y continua.",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3709–P3719; P4183–P4193"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Discovery disconnected from Outcomes",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Outcome y Success Criteria son condiciones operativas del modelo.",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3895–P3917"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Discovery disconnected from evidence",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Evidence Map, jerarquía A–D y el Decision Gate exigen evidencia proporcional al riesgo.",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3849–P3893; P4087–P4107"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Discovery ending in feature specification",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "La fuente comienza con Opportunity y termina en una decisión, no en una Feature specification.",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3638–P3657; P4087–P4121"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Mandatory research theatre",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Las técnicas son proporcionales al riesgo y Research Theater aparece como anti-patrón explícito.",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3721–P3784; P4332–P4335"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Handoff from Discovery team to Delivery team",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Discovery es multidisciplinario y puede operar concurrentemente con Delivery; la fuente no define un equipo separado de handoff.",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3709–P3719; P3792–P3847"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Output-based success",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Discovery Done depende de evidencia para decidir, no de entrevistas, pantallas, prototipo o documento terminados.",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P4345–P4352"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Evidence collected but not used for decisions",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Research Theater y Data Theater se rechazan explícitamente; toda validación debe producir decisión.",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P4325–P4343; P4506–P4507"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Customer feedback arriving only after release",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "El assessment reconoce feedback tardío como riesgo actual; el TO-BE introduce validación antes de inversión y evidencia posterior.",
                                       "source":  {
                                                      "title":  "12. Product Discovery Model",
                                                      "locator":  "P3578–P3584; P4038–P4059"
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
                                            "text":  "El SEIF Product Discovery Model define cómo una oportunidad pasa desde una señal o problema identificado hasta una decisión suficientemente respaldada para invertir capacidad de Delivery.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3570"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo responde directamente a los hallazgos del assessment:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3571"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "SEIF ya realiza actividades de Discovery;",
                                                          "Producto y UX investigan necesidades y problemas;",
                                                          "UX utiliza entrevistas, prototipos y validaciones;",
                                                          "Customer Success y Soporte poseen señales directas del cliente;",
                                                          "Marketing aporta información de mercado;",
                                                          "Desarrollo y SRE aportan factibilidad, restricciones y riesgo técnico;",
                                                          "la profundidad del Discovery varía entre iniciativas;",
                                                          "parte de la incertidumbre continúa llegando a Desarrollo;",
                                                          "el feedback puede producirse cuando ya existe una inversión significativa;",
                                                          "existen múltiples fuentes de demanda con diferentes niveles de evidencia."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3572–P3581"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el problema no es crear Discovery desde cero.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3582"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cambio requerido es:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3583"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "convertir Discovery de una capacidad disponible en un mecanismo consistente de reducción de incertidumbre antes de invertir.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3584"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Discovery Model no constituye una fase previa obligatoriamente extensa.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3585"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es un sistema de aprendizaje proporcional al riesgo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3586"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3569"
                                         }
                                     ]
                     },
                     {
                         "id":  "rol-de-discovery-dentro-del-product-operating-system",
                         "title":  "Rol de Discovery dentro del Product Operating System",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro del Operating Model definido para SEIF:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3589"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL → FRAME → DISCOVER → DECIDE → VALIDATE → DELIVER → RELEASE → ADOPT → MEASURE \u0026 LEARN",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3590"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery ocupa dos momentos relacionados pero diferentes.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3591"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCOVER",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3592"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Busca responder:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3593"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Entendemos suficientemente el problema y vale la pena resolverlo?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3594"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALIDATE",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3595"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Busca responder:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3596"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Tenemos evidencia suficiente de que nuestra hipótesis de solución puede producir el resultado esperado?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3597"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta separación evita mezclar:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3598"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem Discovery",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3599"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "con:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3600"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solution Validation.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3601"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una organización puede comprender correctamente un problema y aun así diseñar una solución equivocada.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3602"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3588"
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
                                            "text":  "El flujo histórico puede producir una secuencia cercana a:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3605"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente solicita",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3606"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3607"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF interpreta",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3608"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3609"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se define funcionalidad",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3610"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3611"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se desarrolla",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3612"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3613"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente revisa",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3614"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3615"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se ajusta",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3616"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo TO-BE introduce aprendizaje antes de la inversión significativa:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3617"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3618"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3619"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3620"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3621"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3622"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3623"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3624"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3625"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hypothesis",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3626"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3627"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototype / Experiment",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3628"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3629"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Evidence",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3630"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3631"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3632"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3633"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3634"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La diferencia fundamental es:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3635"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo deja de ser el mecanismo principal para descubrir si la solución era correcta.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3636"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3604"
                                         }
                                     ]
                     },
                     {
                         "id":  "unidad-de-discovery-opportunity",
                         "title":  "Unidad de Discovery: Opportunity",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery no comienza con una Feature.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3639"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comienza con una:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3640"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3641"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Opportunity representa una situación donde existe evidencia de que un usuario, cliente, segmento o SEIF puede obtener un resultado mejor.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3642"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una oportunidad puede originarse en:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3643"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "comportamiento observado;",
                                                          "feedback;",
                                                          "solicitud;",
                                                          "ticket;",
                                                          "pérdida de adopción;",
                                                          "dato;",
                                                          "necesidad comercial;",
                                                          "problema operacional;",
                                                          "oportunidad de mercado;",
                                                          "restricción tecnológica;",
                                                          "dependencia manual;",
                                                          "deuda técnica con impacto relevante."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3644–P3655"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una solicitud puede originar una Opportunity.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3656"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No constituye automáticamente la definición de la Opportunity.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3657"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3638"
                                         }
                                     ]
                     },
                     {
                         "id":  "opportunity-statement",
                         "title":  "Opportunity Statement",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La representación mínima de una oportunidad será:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3660"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "[Actor] tiene dificultad para [resultado esperado] porque [problema observado], generando [impacto], según [evidencia disponible].",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3661"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es producir una redacción perfecta.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3662"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es eliminar ambigüedad respecto de:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3663"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "quién",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3664"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué intenta lograr",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3665"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué lo impide",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3666"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "por qué importa",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3667"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "qué evidencia existe",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3668"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3659"
                                         }
                                     ]
                     },
                     {
                         "id":  "ejemplo-aplicado-al-contexto-de-seif",
                         "title":  "Ejemplo aplicado al contexto de SEIF",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una solicitud puede llegar como:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3671"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Necesitamos mejorar el módulo de rondas.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3672"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eso no constituye todavía una oportunidad suficientemente definida.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3673"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La investigación puede revelar diferentes problemas:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3674"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "vigilantes que no saben si una marcación fue registrada;",
                                                          "supervisores que requieren consultas adicionales;",
                                                          "clientes que no confían suficientemente en el reporte;",
                                                          "administradores que requieren apoyo de SEIF para configurar determinadas operaciones."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3675–P3678"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada uno representa un problema diferente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3679"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3680"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "una solicitud de mejora de módulo puede contener múltiples oportunidades y no debe convertirse automáticamente en una única iniciativa de Delivery.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3681"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3670"
                                         }
                                     ]
                     },
                     {
                         "id":  "discovery-funnel",
                         "title":  "Discovery Funnel",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo utiliza un funnel deliberadamente simple.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3684"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. SIGNAL",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3685"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Algo relevante fue observado.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3686"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3687"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. OPPORTUNITY",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3688"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La señal se convierte en problema.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3689"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3690"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. EVIDENCE",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3691"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se determina qué sabemos y qué estamos suponiendo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3692"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3693"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. OUTCOME",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3694"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se define qué cambio buscamos.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3695"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3696"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. HYPOTHESIS",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3697"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se plantean alternativas de solución.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3698"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3699"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. VALIDATION",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3700"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se reduce incertidumbre mediante el mecanismo más económico posible.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3701"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3702"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. DECISION",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3703"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Proceed / Adjust / Explore / Stop",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3704"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3705"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. DELIVERY BET",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3706"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo entonces se compromete capacidad significativa.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3707"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3683"
                                         }
                                     ]
                     },
                     {
                         "id":  "discovery-no-es-una-fase-waterfall",
                         "title":  "Discovery no es una fase waterfall",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no establece:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3710"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery completo",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3711"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3712"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diseño completo",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3713"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3714"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo completo",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3715"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery y Delivery pueden operar de forma concurrente sobre diferentes niveles de incertidumbre.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3716"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mientras una solución validada está en Delivery, Producto y UX pueden investigar la siguiente oportunidad.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3717"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, existe una restricción:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3718"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "una iniciativa no debe ingresar a construcción significativa manteniendo incertidumbres críticas que podían resolverse de forma más rápida y económica antes de desarrollar.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3719"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3709"
                                         }
                                     ]
                     },
                     {
                         "id":  "discovery-por-nivel-de-riesgo",
                         "title":  "Discovery por nivel de riesgo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidencia que SEIF necesita disciplina sin agregar burocracia.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3722"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, Discovery se clasifica en tres niveles.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3723"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery Level 0 — Fast Track",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3724"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aplica cuando:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3725"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "el problema está demostrado;",
                                                          "el cambio es pequeño;",
                                                          "existe bajo riesgo;",
                                                          "la solución es conocida;",
                                                          "el impacto técnico es limitado;",
                                                          "la reversibilidad es alta."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3726–P3731"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia mínima",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3732"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem + Outcome + criterio de éxito.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3733"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos de mecanismos",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3734"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "datos existentes;",
                                                          "evidencia de Soporte;",
                                                          "evidencia de comportamiento;",
                                                          "validación rápida interna cuando sea suficiente."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3735–P3738"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3739"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision rápida.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3740"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3721"
                                         }
                                     ]
                     },
                     {
                         "id":  "discovery-level-1-lightweight-discovery",
                         "title":  "Discovery Level 1 — Lightweight Discovery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aplica cuando existe incertidumbre moderada respecto de:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3743"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "problema;",
                                                          "comportamiento;",
                                                          "experiencia;",
                                                          "solución."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3744–P3747"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede utilizar:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3748"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "revisión de analytics;",
                                                          "tickets;",
                                                          "entrevistas puntuales;",
                                                          "conversación estructurada con CS;",
                                                          "análisis del journey;",
                                                          "wireframe;",
                                                          "prototipo;",
                                                          "validación con clientes."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3749–P3756"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado esperado",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3757"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia suficiente para aceptar, modificar o descartar la hipótesis.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3758"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3742"
                                         }
                                     ]
                     },
                     {
                         "id":  "discovery-level-2-structured-discovery",
                         "title":  "Discovery Level 2 — Structured Discovery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aplica cuando existe:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3761"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "alta inversión;",
                                                          "nueva capacidad;",
                                                          "cambio significativo del producto;",
                                                          "alto riesgo técnico;",
                                                          "alto riesgo operacional;",
                                                          "incertidumbre relevante de mercado;",
                                                          "impacto importante sobre clientes;",
                                                          "dificultad elevada para revertir la decisión."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3762–P3769"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede incluir:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3770"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "research estructurado;",
                                                          "múltiples entrevistas;",
                                                          "análisis cuantitativo;",
                                                          "journey completo;",
                                                          "análisis de comportamiento;",
                                                          "prototipado;",
                                                          "pruebas de usabilidad;",
                                                          "experimentos;",
                                                          "validación comercial;",
                                                          "technical spike;",
                                                          "análisis SRE;",
                                                          "MVP cuando corresponda."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3771–P3782"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3783"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decisión de inversión respaldada por evidencia proporcional al riesgo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3784"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3760"
                                         }
                                     ]
                     },
                     {
                         "id":  "risk-based-discovery",
                         "title":  "Risk-Based Discovery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El nivel de Discovery se determina por incertidumbre, no por jerarquía de quien solicita.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3787"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las cuatro dimensiones principales son:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3788"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-027",
                                                          "caption":  "Risk-Based Discovery",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Riesgo",
                                                                          "Pregunta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Value Risk",
                                                                           "¿El usuario realmente necesita resolverlo?"
                                                                       ],
                                                                       [
                                                                           "Usability Risk",
                                                                           "¿Puede utilizar la solución adecuadamente?"
                                                                       ],
                                                                       [
                                                                           "Feasibility Risk",
                                                                           "¿Podemos construirla y operarla razonablemente?"
                                                                       ],
                                                                       [
                                                                           "Viability Risk",
                                                                           "¿Tiene sentido para SEIF como negocio/producto?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "12. Product Discovery Model",
                                                                         "locator":  "T27"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando el riesgo es bajo, Discovery debe ser rápido.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3789"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando el riesgo es alto, construir directamente representa una apuesta más costosa.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3790"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3786"
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
                                            "text":  "Discovery es multidisciplinario, pero no requiere que toda la célula participe permanentemente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3793"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3794"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Responde por:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3795"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "framing;",
                                                          "Outcome;",
                                                          "priorización;",
                                                          "decisión de inversión."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3796–P3799"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX/UI",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3800"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Responde por:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3801"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "entendimiento del usuario;",
                                                          "journey;",
                                                          "interacción;",
                                                          "prototipado;",
                                                          "validación de experiencia."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3802–P3806"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3807"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa cuando existe incertidumbre de:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3808"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "factibilidad;",
                                                          "arquitectura;",
                                                          "integración;",
                                                          "complejidad."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3809–P3812"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3813"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa cuando existen implicaciones de:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3814"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "confiabilidad;",
                                                          "operación;",
                                                          "seguridad;",
                                                          "observabilidad;",
                                                          "escalabilidad;",
                                                          "deuda técnica."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3815–P3820"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3821"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporta evidencia de:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3822"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "adopción;",
                                                          "implementación;",
                                                          "necesidades;",
                                                          "comportamiento del cliente;",
                                                          "dependencia;",
                                                          "criterios de éxito."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3823–P3828"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3829"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporta:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3830"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "incidentes;",
                                                          "fricciones;",
                                                          "consultas;",
                                                          "patrones repetitivos."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3831–P3834"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3835"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participa principalmente cuando existe incertidumbre de:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3836"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "segmento;",
                                                          "mercado;",
                                                          "posicionamiento;",
                                                          "adquisición;",
                                                          "propuesta de valor."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3837–P3841"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3792"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo de Product y demás roles fuente a roles organizacionales futuros",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "regla-de-participacion",
                         "title":  "Regla de participación",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no convierte Discovery en una reunión de siete áreas.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3844"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La regla es:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3845"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "participa quien posee evidencia o puede reducir una incertidumbre crítica.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3846"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto protege la velocidad y evita transformar colaboración multidisciplinaria en sobrecoordinación.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3847"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3843"
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
                                            "text":  "Cada oportunidad debe diferenciar explícitamente:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3850"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "KNOWN",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3851"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe evidencia.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3852"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ASSUMED",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3853"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe una hipótesis todavía no validada.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3854"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UNKNOWN",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3855"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe suficiente información.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3856"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta separación es crítica porque evita presentar supuestos como hechos.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3857"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo del Discovery es mover progresivamente elementos desde:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3858"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UNKNOWN / ASSUMED",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3859"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3860"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "KNOWN",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3861"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hasta alcanzar un nivel de incertidumbre aceptable para decidir.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3862"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3849"
                                         }
                                     ]
                     },
                     {
                         "id":  "evidence-hierarchy",
                         "title":  "Evidence Hierarchy",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No toda evidencia tiene el mismo peso.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3865"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo reconoce diferentes niveles.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3866"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel A — Comportamiento observado",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3867"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3868"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "analytics;",
                                                          "uso real;",
                                                          "abandono;",
                                                          "tickets;",
                                                          "errores;",
                                                          "intervención manual;",
                                                          "datos operacionales."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3869–P3875"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel B — Evidencia directa del usuario",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3876"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "entrevistas;",
                                                          "observación;",
                                                          "pruebas de usabilidad;",
                                                          "feedback estructurado."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3877–P3880"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel C — Evidencia comercial/operacional",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3881"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "CS;",
                                                          "Marketing;",
                                                          "oportunidades;",
                                                          "comportamiento de cuentas;",
                                                          "soporte."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3882–P3886"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel D — Opinión / hipótesis interna",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3887"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "percepción;",
                                                          "idea;",
                                                          "intuición;",
                                                          "solicitud no investigada."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3888–P3891"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Nivel D es válido como origen de investigación.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3892"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe confundirse con evidencia suficiente de problema.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3893"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3864"
                                         }
                                     ]
                     },
                     {
                         "id":  "outcome-definition",
                         "title":  "Outcome Definition",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vez suficientemente entendido el problema, Producto define el Outcome.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3896"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Outcome debe describir:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3897"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "un cambio observable en el comportamiento, capacidad o resultado del usuario o negocio.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3898"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3899"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Crear nuevo dashboard.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3900"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3901"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Permitir que [rol] identifique [situación] sin requerir [reproceso/intervención].\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3902"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya ha establecido correctamente esta distinción en su metodología actual.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3903"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Discovery Model la convierte en condición operativa.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3904"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3895"
                                         }
                                     ]
                     },
                     {
                         "id":  "outcome-success-criteria-moment-of-truth",
                         "title":  "Outcome → Success Criteria → Moment of Truth",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo conserva la estructura ya desarrollada por SEIF:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3907"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3908"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3909"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Success Criteria por rol",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3910"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3911"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Journey",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3912"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3913"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Moment of Truth",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3914"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3915"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evento medible",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3916"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La diferencia TO-BE es que esta estructura se utiliza durante Discovery para orientar la solución, no únicamente para documentarla después.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3917"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3906"
                                         }
                                     ]
                     },
                     {
                         "id":  "journey-como-instrumento-de-discovery",
                         "title":  "Journey como instrumento de Discovery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Journey no se utiliza para representar todos los detalles del sistema.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3920"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se utiliza para entender:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3921"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "qué intenta lograr el usuario;",
                                                          "qué pasos atraviesa;",
                                                          "dónde existe fricción;",
                                                          "dónde depende de SEIF;",
                                                          "dónde abandona;",
                                                          "dónde percibe éxito."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3922–P3927"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para cada etapa relevante se observa:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3928"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-028",
                                                          "caption":  "Journey como instrumento de Discovery",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Pregunta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Goal",
                                                                           "¿Qué intenta lograr?"
                                                                       ],
                                                                       [
                                                                           "Action",
                                                                           "¿Qué hace?"
                                                                       ],
                                                                       [
                                                                           "Friction",
                                                                           "¿Qué lo dificulta?"
                                                                       ],
                                                                       [
                                                                           "Dependency",
                                                                           "¿Necesita intervención?"
                                                                       ],
                                                                       [
                                                                           "Evidence",
                                                                           "¿Cómo sabemos que ocurre?"
                                                                       ],
                                                                       [
                                                                           "Moment of Truth",
                                                                           "¿Dónde percibe éxito o fracaso?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "12. Product Discovery Model",
                                                                         "locator":  "T28"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3919"
                                         }
                                     ]
                     },
                     {
                         "id":  "friction-discovery",
                         "title":  "Friction Discovery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran que una parte importante de la oportunidad de SEIF se encuentra en reducir fricción y dependencia.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3931"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, Discovery debe observar explícitamente:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3932"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer friction",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3933"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pasos, confusión, errores, abandono.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3934"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operational friction",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3935"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trabajo manual de CS, Soporte o SRE.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3936"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical friction",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3937"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Restricciones, deuda y complejidad.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3938"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Commercial friction",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3939"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Barreras que dificultan adopción o percepción de valor.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3940"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una misma oportunidad puede manifestarse en varias capas.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3941"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3930"
                                         }
                                     ]
                     },
                     {
                         "id":  "customer-autonomy-lens",
                         "title":  "Customer Autonomy Lens",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Toda oportunidad relacionada con journeys existentes incorpora una pregunta adicional:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3944"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede el cliente lograr este resultado de forma autónoma?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3945"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se clasifica:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3946"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SELF-SERVICE",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3947"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3948"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ASSISTED",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3949"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3950"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DEPENDENT",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3951"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La existencia de procesos \"Dependent\" no significa automáticamente que sean incorrectos.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3952"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí constituye una señal que debe hacerse visible.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3953"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite detectar oportunidades donde mejorar producto puede reducir simultáneamente:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3954"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "TTV;",
                                                          "tickets;",
                                                          "carga de CS;",
                                                          "intervención SRE;",
                                                          "reproceso;",
                                                          "fricción del cliente."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3955–P3960"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3943"
                                         }
                                     ]
                     },
                     {
                         "id":  "hypothesis-model",
                         "title":  "Hypothesis Model",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery no busca producir una única solución inmediatamente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3963"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Convierte la oportunidad en hipótesis.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3964"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Formato:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3965"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Creemos que [solución/cambio] permitirá a [usuario] lograr [Outcome]. Sabremos que funciona cuando observemos [evidencia].",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3966"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto separa:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3967"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "lo que sabemos",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3968"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3969"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "lo que creemos que funcionará.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3970"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3962"
                                         }
                                     ]
                     },
                     {
                         "id":  "assumption-mapping",
                         "title":  "Assumption Mapping",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de construir, las hipótesis se analizan según:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3973"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Importancia para que la solución funcione",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3974"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "×",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3975"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel de evidencia disponible",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3976"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los supuestos:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3977"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "muy importantes + poco demostrados",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3978"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "constituyen las primeras hipótesis a validar.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3979"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se comienza necesariamente por diseñar toda la solución.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3980"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se comienza por atacar la incertidumbre que podría invalidarla.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3981"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3972"
                                         }
                                     ]
                     },
                     {
                         "id":  "validation-ladder",
                         "title":  "Validation Ladder",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La validación utiliza el mecanismo de menor costo capaz de responder la pregunta.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3984"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 1",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3985"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existing Evidence",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3986"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Analytics, tickets, datos, conversaciones existentes.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3987"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3988"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3989"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interview / Observation",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3990"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contacto directo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3991"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3992"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3993"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sketch / Concept",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3994"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validación conceptual.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3995"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3996"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 4",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3997"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interactive Prototype",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3998"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validación de experiencia.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P3999"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4000"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 5",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4001"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Technical Spike / Simulation",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4002"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validación técnica.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4003"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4004"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 6",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4005"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Concierge / Manual Test",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4006"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Probar el resultado sin automatizar completamente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4007"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4008"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 7",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4009"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MVP",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4010"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Software mínimo en condiciones reales.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4011"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4012"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 8",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4013"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Full Investment",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4014"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo cuando el aprendizaje anterior lo justifica.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4015"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es comprar evidencia progresivamente, no comprar software prematuramente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4016"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P3983"
                                         }
                                     ]
                     },
                     {
                         "id":  "ai-assisted-discovery",
                         "title":  "AI-Assisted Discovery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La IA se incorpora específicamente para reducir el Learning Lead Time.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4019"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dentro de SEIF puede acelerar:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4020"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Research synthesis",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4021"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Consolidación de entrevistas y feedback.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4022"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pattern detection",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4023"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Agrupación de problemas recurrentes.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4024"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Journey generation",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4025"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primera representación del journey basada en evidencia existente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4026"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hypothesis generation",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4027"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Alternativas para resolver un problema.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4028"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototype acceleration",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4029"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Generación rápida de interfaces o experiencias simuladas.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4030"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Business Rules",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4031"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estructuración inicial de reglas y escenarios.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4032"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Edge Cases",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4033"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Identificación preliminar de escenarios que deben validarse.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4034"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback Analysis",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4035"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clasificación de comentarios de usuarios.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4036"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4018"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Relación futura de Analytics, IA y tooling con Discovery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "ai-prototype-loop",
                         "title":  "AI Prototype Loop",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para oportunidades con incertidumbre de solución, el ciclo objetivo es:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4039"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4040"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4041"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4042"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4043"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AI-assisted prototype",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4044"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4045"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Internal review",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4046"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4047"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer validation",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4048"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4049"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learn",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4050"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4051"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adjust prototype",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4052"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4053"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validate again",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4054"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4055"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery decision",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4056"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este mecanismo responde directamente al riesgo observado de obtener feedback cuando la inversión técnica ya es significativa.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4057"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La IA reduce el costo del prototipo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4058"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cliente continúa proporcionando la evidencia.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4059"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4038"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Relación futura de Analytics, IA y tooling con Discovery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "prototype-review-unificada-por-modulo",
                         "title":  "Prototype Review unificada por módulo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La validación no debe fragmentarse en múltiples conversaciones aisladas.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4062"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando una solución afecta un módulo, la revisión busca mostrar al cliente o usuario un flujo suficientemente integrado para evaluar el resultado.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4063"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La pregunta no es:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4064"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"¿Le gusta esta pantalla?\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4065"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La pregunta es:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4066"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"¿Puede lograr el resultado esperado mediante este flujo?\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4067"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita optimizar componentes individualmente sin validar la experiencia end-to-end.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4068"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4061"
                                         }
                                     ]
                     },
                     {
                         "id":  "que-se-valida",
                         "title":  "Qué se valida",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una revisión de prototipo puede observar:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4071"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comprensión",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4072"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El usuario entiende qué debe hacer?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4073"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usabilidad",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4074"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede hacerlo?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4075"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4076"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El flujo le permite alcanzar el resultado?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4077"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Moment of Truth",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4078"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Reconoce claramente que lo logró?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4079"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4080"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde se detiene o necesita ayuda?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4081"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Business Rules",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4082"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Las reglas reflejan correctamente la operación?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4083"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Autonomy",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4084"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Puede completar el flujo sin intervención adicional?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4085"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4070"
                                         }
                                     ]
                     },
                     {
                         "id":  "discovery-decision-gate",
                         "title":  "Discovery Decision Gate",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery no termina porque se terminó el diseño.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4088"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Termina cuando existe suficiente evidencia para una decisión.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4089"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El gate responde:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4090"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4091"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Existe suficiente evidencia del problema?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4092"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "User",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4093"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Está claro quién lo experimenta?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4094"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4095"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Está definido el cambio esperado?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4096"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4097"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La importancia está respaldada?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4098"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Risk",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4099"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Las incertidumbres críticas fueron identificadas?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4100"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validation",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4101"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Las hipótesis más riesgosas fueron suficientemente probadas?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4102"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Measurement",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4103"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Sabemos qué observar después del release?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4104"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si la respuesta crítica sigue siendo desconocida, la decisión no es automáticamente desarrollar.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4105"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede ser:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4106"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explore More.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4107"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4087"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision owner, participantes y autoridad del Discovery Gate",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "decisiones-de-salida",
                         "title":  "Decisiones de salida",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todo Discovery debe terminar explícitamente en una de cuatro decisiones.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4110"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PROCEED",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4111"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe evidencia suficiente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4112"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La oportunidad puede convertirse en Delivery Bet.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4113"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADJUST",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4114"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema sigue siendo relevante, pero la hipótesis necesita modificación.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4115"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EXPLORE MORE",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4116"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe potencial, pero permanece una incertidumbre crítica.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4117"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "STOP",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4118"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia no justifica inversión adicional.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4119"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "STOP constituye un resultado válido de Discovery.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4120"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evitar una inversión incorrecta genera valor.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4121"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4109"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision owner, participantes y autoridad del Discovery Gate",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "discovery-readiness-vs-delivery-readiness",
                         "title":  "Discovery Readiness vs Delivery Readiness",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estos conceptos permanecen separados.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4124"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery Ready",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4125"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe suficiente señal para justificar investigación.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4126"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No significa que deba construirse.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4127"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery Ready",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4128"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe suficiente evidencia y claridad para comprometer capacidad técnica relevante.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4129"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita que una idea aceptada para investigación se interprete automáticamente como compromiso de construcción.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4130"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4123"
                                         }
                                     ]
                     },
                     {
                         "id":  "minimum-discovery-artifact",
                         "title":  "Minimum Discovery Artifact",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para evitar sobreprocesamiento, SEIF utiliza un único artefacto central por oportunidad.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4133"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity Card",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4134"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contiene:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4135"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problem",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4136"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurre?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4137"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "User / Segment",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4138"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿A quién?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4139"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4140"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué sabemos?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4141"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4142"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué queremos cambiar?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4143"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Success Signal",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4144"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo sabremos que cambió?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4145"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Key Assumptions",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4146"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué estamos suponiendo?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4147"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validation",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4148"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo lo probamos?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4149"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4150"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decidimos?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4151"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No requiere documentos extensos adicionales salvo que el nivel de riesgo lo justifique.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4152"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4132"
                                         }
                                     ]
                     },
                     {
                         "id":  "discovery-board",
                         "title":  "Discovery Board",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo de oportunidades puede representarse mediante estados simples:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4155"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNALS",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4156"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4157"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "FRAMING",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4158"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4159"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DISCOVERY",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4160"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4161"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALIDATING",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4162"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4163"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "READY FOR DECISION",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4164"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4165"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRIORITIZED",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4166"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "o:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4167"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "WAIT / STOP",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4168"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El board representa aprendizaje, no tareas de diseño.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4169"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4154"
                                         }
                                     ]
                     },
                     {
                         "id":  "wip-de-discovery",
                         "title":  "WIP de Discovery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment identifica riesgo de pérdida de foco.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4172"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, Discovery también debe limitar trabajo en curso.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4173"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es mantener muchas oportunidades simultáneamente \"en investigación\".",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4174"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El comportamiento esperado es:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4175"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "explorar pocas oportunidades, obtener evidencia rápidamente y decidir.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4176"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una Opportunity sin movimiento debe ser:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4177"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "reactivada;",
                                                          "puesta en Wait;",
                                                          "o cerrada."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4178–P4180"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe permanecer indefinidamente abierta.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4181"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4171"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-09",
                                                       "subject":  "Límite numérico de WIP a establecer mediante baseline/piloto",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "discovery-cadence",
                         "title":  "Discovery Cadence",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo no requiere un comité adicional.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4184"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Continuous",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4185"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las señales se capturan durante la operación.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4186"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Weekly",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4187"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto revisa nuevas señales y oportunidades activas.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4188"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Biweekly",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4189"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se revisa evidencia de las oportunidades relevantes y prototipos cuando existen.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4190"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Review",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4191"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los resultados posteriores alimentan nuevas oportunidades.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4192"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La cadencia debe integrarse con el Operating Cadence definido previamente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4193"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4183"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-11",
                                                       "subject":  "Cadencia propuesta y participantes",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "integracion-con-customer-success",
                         "title":  "Integración con Customer Success",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS constituye una fuente crítica del Discovery porque observa al cliente en condiciones reales.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4196"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su participación se estructura en tres momentos.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4197"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de Discovery",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4198"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporta señales y contexto.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4199"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante Discovery",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4200"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Facilita acceso a evidencia y clientes cuando corresponde.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4201"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Después del Release",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4202"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporta señales de activación, adopción y adherencia.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4203"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS no se convierte en proxy permanente del cliente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4204"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando la incertidumbre requiere contacto directo con el usuario, el modelo privilegia evidencia directa.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4205"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4195"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo de Product y demás roles fuente a roles organizacionales futuros",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "integracion-con-soporte",
                         "title":  "Integración con Soporte",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte se convierte en fuente sistemática de Product Intelligence.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4208"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los tickets pueden generar señales cuando presentan:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4209"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "recurrencia;",
                                                          "concentración por módulo;",
                                                          "dependencia;",
                                                          "confusión;",
                                                          "errores de uso;",
                                                          "intervención manual."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4210–P4215"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es convertir cada ticket en Opportunity.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4216"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es identificar patrones.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4217"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ticket individual",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4218"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4219"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pattern",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4220"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4221"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4222"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4223"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4224"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4207"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo de Product y demás roles fuente a roles organizacionales futuros",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "integracion-con-marketing",
                         "title":  "Integración con Marketing",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing participa cuando la incertidumbre se encuentra en:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4227"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "segmento;",
                                                          "posicionamiento;",
                                                          "propuesta de valor;",
                                                          "demanda;",
                                                          "entendimiento del mercado."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4228–P4232"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite validar no solamente:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4233"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"¿Podemos construirlo?\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4234"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "sino también:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4235"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"¿Existe una necesidad suficientemente relevante y entendible en el mercado objetivo?\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4236"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4226"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo de Product y demás roles fuente a roles organizacionales futuros",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "integracion-con-desarrollo-y-sre",
                         "title":  "Integración con Desarrollo y SRE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo y SRE participan temprano cuando una hipótesis puede tener restricciones relevantes.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4239"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita descubrir tardíamente:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4240"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "inviabilidad;",
                                                          "complejidad;",
                                                          "dependencia;",
                                                          "riesgo;",
                                                          "necesidad de observabilidad;",
                                                          "impacto de arquitectura."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4241–P4246"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, participación temprana no significa estimar detalladamente cada idea.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4247"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es detectar constraints y riesgos críticos, no convertir Discovery en refinamiento técnico prematuro.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4248"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4238"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo de Product y demás roles fuente a roles organizacionales futuros",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "integracion-con-product-analytics",
                         "title":  "Integración con Product Analytics",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards actuales se convierten en una fuente permanente de Discovery.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4251"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La lectura cambia de:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4252"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"¿Cuánto utilizan el producto?\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4253"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4254"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"¿Qué comportamiento requiere explicación?\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4255"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos de señales:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4256"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "módulos adquiridos con baja utilización;",
                                                          "usuarios que nunca activan;",
                                                          "diferencias relevantes entre clientes;",
                                                          "caída de adherencia;",
                                                          "uso alto acompañado de tickets;",
                                                          "operaciones que requieren intervención;",
                                                          "TTV elevado."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4257–P4263"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada anomalía puede generar una pregunta.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4264"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No cada anomalía requiere una feature.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4265"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4250"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-10",
                                                       "subject":  "Relación futura de Analytics, IA y tooling con Discovery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "north-star-como-generador-de-discovery",
                         "title":  "North Star como generador de Discovery",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La futura North Star no funciona únicamente como indicador ejecutivo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4268"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actúa como sistema de orientación.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4269"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando una población no alcanza consistentemente el valor representado por la North Star:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4270"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4271"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "se identifica el segmento;",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4272"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4273"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "se observa el journey;",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4274"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4275"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "se identifica fricción;",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4276"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4277"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "se genera Opportunity;",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4278"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4279"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "se ejecuta Discovery;",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4280"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4281"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "se valida una hipótesis;",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4282"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4283"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "se mide nuevamente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4284"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De esta forma, crecimiento y Product Discovery quedan conectados.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4285"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4267"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-06",
                                                       "subject":  "North Star candidate y conexión con Discovery",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "discovery-metrics",
                         "title":  "Discovery Metrics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es medir cuántas entrevistas realiza UX.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4288"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eso convertiría actividad en productividad aparente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4289"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las métricas deben observar capacidad de aprendizaje.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4290"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-029",
                                                          "caption":  "Discovery Metrics",
                                                          "kind":  "scorecard",
                                                          "headers":  [
                                                                          "Métrica",
                                                                          "Propósito"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Opportunity → Decision Time",
                                                                           "Velocidad para decidir"
                                                                       ],
                                                                       [
                                                                           "Learning Lead Time",
                                                                           "Tiempo hasta evidencia útil"
                                                                       ],
                                                                       [
                                                                           "% Opportunities with Evidence",
                                                                           "Calidad del framing"
                                                                       ],
                                                                       [
                                                                           "% High-risk Bets validated pre-Delivery",
                                                                           "Reducción temprana de incertidumbre"
                                                                       ],
                                                                       [
                                                                           "Validation → Change Rate",
                                                                           "Cuántas hipótesis cambian antes de construir"
                                                                       ],
                                                                       [
                                                                           "Discovery Stop Rate",
                                                                           "Capacidad para detener apuestas sin valor"
                                                                       ],
                                                                       [
                                                                           "Post-Release Outcome Success",
                                                                           "Calidad de las decisiones"
                                                                       ],
                                                                       [
                                                                           "Post-Release Rework linked to misunderstood need",
                                                                           "Calidad del Discovery"
                                                                       ],
                                                                       [
                                                                           "Customer Evidence Coverage",
                                                                           "Nivel de contacto con evidencia real"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "12. Product Discovery Model",
                                                                         "locator":  "T29"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se establecen targets iniciales sin baseline.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4291"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4287"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, instrumentación, baseline y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metrica-critica-learning-lead-time",
                         "title":  "Métrica crítica: Learning Lead Time",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment identificó como problema sistémico el tiempo necesario para obtener feedback y aprender.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4294"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4295"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Lead Time",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4296"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "se convierte en una métrica central del Discovery Model.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4297"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se define como:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4298"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "tiempo transcurrido desde que una hipótesis relevante está suficientemente formulada hasta que SEIF obtiene evidencia suficiente para tomar una decisión.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4299"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto es diferente de:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4300"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Lead Time de Desarrollo;",
                                                          "Cycle Time;",
                                                          "TTV."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4301–P4303"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La reducción del Learning Lead Time permite equivocarse:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4304"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "antes",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4305"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4306"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "más barato.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4307"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4293"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, instrumentación, baseline y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metrica-critica-cost-of-learning",
                         "title":  "Métrica crítica: Cost of Learning",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo incorpora además una dimensión económica:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4310"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánta capacidad consume SEIF antes de descubrir que una hipótesis debe cambiar?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4311"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No requiere inicialmente una contabilidad compleja.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4312"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La comparación conceptual es:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4313"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entrevista",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4314"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\u003c",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4315"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototipo",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4316"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\u003c",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4317"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MVP",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4318"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\u003c",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4319"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feature completa",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4320"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\u003c",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4321"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feature completa + retrabajo",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4322"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo del Discovery Model es desplazar aprendizaje hacia la izquierda.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4323"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4309"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, instrumentación, baseline y ownership de métricas",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "anti-patrones-que-el-modelo-elimina",
                         "title":  "Anti-patrones que el modelo elimina",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feature Factory",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4326"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Pidieron esto, construyámoslo.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4327"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Proxy Customer",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4328"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"CS dijo que el cliente necesita esto, por tanto ya está validado.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4329"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prototype Theater",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4330"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"El prototipo se ve bien, por tanto está validado.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4331"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery Waterfall",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4332"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Pasemos tres meses investigando antes de construir.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4333"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Research Theater",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4334"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Realizamos entrevistas, pero no cambió ninguna decisión.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4335"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Backlog Cemetery",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4336"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Guardemos todas las ideas por si algún día se hacen.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4337"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Consensus Governance",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4338"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Todos deben aprobar todo.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4339"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Development as Discovery",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4340"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Construyamos y después vemos si funciona.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4341"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Data Theater",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4342"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"El dashboard muestra el dato, pero no genera una decisión.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4343"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4325"
                                         }
                                     ]
                     },
                     {
                         "id":  "definition-of-discovery-done",
                         "title":  "Definition of Discovery Done",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery no está terminado porque:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4346"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "terminó una entrevista;",
                                                          "UX creó pantallas;",
                                                          "existe un prototipo;",
                                                          "se completó un documento."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4347–P4350"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery está suficientemente terminado para decidir cuando:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4351"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF entiende el problema, conoce las incertidumbres críticas y posee evidencia proporcional al riesgo para decidir si invertir, ajustar, continuar explorando o detenerse.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4352"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4345"
                                         }
                                     ]
                     },
                     {
                         "id":  "modelo-de-madurez-del-discovery",
                         "title":  "Modelo de madurez del Discovery",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-030",
                                                          "caption":  "Modelo de madurez del Discovery",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Comportamiento"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1 — Inicial",
                                                                           "Construcción basada principalmente en solicitudes y opiniones"
                                                                       ],
                                                                       [
                                                                           "2 — Repetible",
                                                                           "Se realizan Discovery y validaciones, pero varían según contexto"
                                                                       ],
                                                                       [
                                                                           "3 — Definido",
                                                                           "Opportunity, evidencia, Outcome, riesgo y validación forman parte consistente del ciclo"
                                                                       ],
                                                                       [
                                                                           "4 — Gestionado",
                                                                           "Learning Lead Time, calidad de apuestas y outcomes son medidos"
                                                                       ],
                                                                       [
                                                                           "5 — Optimizado",
                                                                           "La organización optimiza continuamente su sistema de aprendizaje"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "12. Product Discovery Model",
                                                                         "locator":  "T30"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado SEIF",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4355"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4356"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target inicial",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4357"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4358"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe necesidad inmediata de diseñar un sistema Nivel 4–5 antes de estabilizar Nivel 3.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4359"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4354"
                                         }
                                     ]
                     },
                     {
                         "id":  "product-discovery-model-to-be",
                         "title":  "Product Discovery Model TO-BE",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo completo queda definido como:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4362"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SIGNAL",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4363"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué observamos?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4364"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4365"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OPPORTUNITY",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4366"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué problema podría existir?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4367"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4368"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "EVIDENCE",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4369"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué sabemos y qué estamos suponiendo?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4370"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4371"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4372"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué comportamiento o resultado queremos cambiar?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4373"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4374"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RISK",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4375"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué necesitamos aprender antes de invertir?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4376"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4377"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "HYPOTHESIS",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4378"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué creemos que puede funcionar?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4379"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4380"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CHEAPEST VALIDATION",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4381"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuál es la forma más económica de obtener evidencia?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4382"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4383"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CUSTOMER / DATA EVIDENCE",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4384"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió realmente?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4385"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4386"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DECISION",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4387"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Proceed / Adjust / Explore / Stop",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4388"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4389"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DELIVERY BET",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4390"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Menor inversión capaz de generar valor y aprendizaje",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4391"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4392"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "POST-RELEASE EVIDENCE",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4393"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El Outcome ocurrió?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4394"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4395"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NEW LEARNING",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4396"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4397"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4361"
                                         }
                                     ]
                     },
                     {
                         "id":  "flujo-de-informacion-objetivo",
                         "title":  "Flujo de información objetivo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo busca preservar un hilo único de trazabilidad:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4400"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4401"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Opportunity",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4402"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Evidence",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4403"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Outcome",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4404"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Hypothesis",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4405"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Experiment / Prototype",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4406"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Decision",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4407"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Delivery",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4408"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Release",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4409"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Adoption",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4410"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ Outcome",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4411"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite posteriormente responder:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4412"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué construimos esto?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4413"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia existía?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4414"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué creíamos que ocurriría?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4415"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué entregamos?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4416"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió realmente?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4417"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué aprendimos?",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4418"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actualmente estas respuestas existen distribuidas entre diferentes personas, herramientas y conversaciones.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4419"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El TO-BE busca mantenerlas conectadas.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4420"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4399"
                                         }
                                     ]
                     },
                     {
                         "id":  "minimum-viable-discovery-para-seif",
                         "title":  "Minimum Viable Discovery para SEIF",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dado el tamaño actual de la organización, el modelo mínimo no requiere una nueva área, un nuevo comité ni un proceso extenso.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4423"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para una Opportunity relevante, SEIF necesita solamente:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4424"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Una Opportunity Card",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4425"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema + usuario + evidencia + Outcome.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4426"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Un nivel de Discovery",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4427"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "0, 1 o 2 según riesgo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4428"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Una hipótesis",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4429"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué creemos que puede producir el cambio.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4430"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Una validación proporcional",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4431"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Datos, entrevista, prototipo, experimento o MVP.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4432"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Una decisión explícita",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4433"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Proceed / Adjust / Explore / Stop.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4434"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Una métrica posterior",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4435"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cómo sabremos si realmente funcionó.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4436"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ese conjunto constituye el Minimum Viable Discovery System.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4437"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4422"
                                         }
                                     ]
                     },
                     {
                         "id":  "ejemplo-end-to-end-control-de-rondas",
                         "title":  "Ejemplo end-to-end — Control de Rondas",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El módulo utilizado por SEIF en su propia metodología permite representar el modelo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4440"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4441"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen fricciones asociadas al cumplimiento y demostración de rondas.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4442"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Opportunity",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4443"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El vigilante necesita completar correctamente su ronda y saber que quedó registrada.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4444"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4445"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe consolidarse evidencia disponible de uso, feedback, tickets y comportamiento relacionado.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4446"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4447"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"Permitir demostrar, sin reprocesos operativos, que las rondas se ejecutan correctamente.\"",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4448"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Success Criterion",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4449"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El vigilante completa su ronda y recibe confirmación clara.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4450"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Moment of Truth",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4451"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema confirma que la ronda fue completada correctamente.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4452"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Key Assumptions",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4453"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fricción específica debe identificarse mediante evidencia antes de determinar una solución.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4454"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hypothesis",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4455"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La hipótesis dependerá del problema identificado y no se fija en este assessment sin evidencia adicional.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4456"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validation",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4457"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El mecanismo dependerá del tipo de hipótesis:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4458"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "datos;",
                                                          "entrevista;",
                                                          "journey;",
                                                          "prototipo;",
                                                          "prueba de usabilidad;",
                                                          "experimento."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4459–P4464"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4465"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Proceed / Adjust / Explore / Stop.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4466"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Post-release",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4467"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Medir:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4468"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "TTV;",
                                                          "rondas correctamente completadas;",
                                                          "fricción;",
                                                          "tickets;",
                                                          "intervención;",
                                                          "adherencia."
                                                      ],
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4469–P4474"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ejemplo muestra una diferencia crítica:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4475"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "el Outcome ya está definido; la solución no debe darse por definida hasta comprender qué impide actualmente alcanzarlo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4476"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4439"
                                         }
                                     ]
                     },
                     {
                         "id":  "product-discovery-canvas-seif",
                         "title":  "Product Discovery Canvas — SEIF",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Discovery completo puede resumirse en una única vista:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4479"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-031",
                                                          "caption":  "Product Discovery Canvas — SEIF",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Pregunta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Signal",
                                                                           "¿Qué observamos?"
                                                                       ],
                                                                       [
                                                                           "User",
                                                                           "¿A quién afecta?"
                                                                       ],
                                                                       [
                                                                           "Problem",
                                                                           "¿Qué intenta lograr y qué lo impide?"
                                                                       ],
                                                                       [
                                                                           "Evidence",
                                                                           "¿Qué demuestra que ocurre?"
                                                                       ],
                                                                       [
                                                                           "Impact",
                                                                           "¿Por qué importa?"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "¿Qué queremos cambiar?"
                                                                       ],
                                                                       [
                                                                           "Success",
                                                                           "¿Cómo sabremos que mejoró?"
                                                                       ],
                                                                       [
                                                                           "Assumptions",
                                                                           "¿Qué estamos suponiendo?"
                                                                       ],
                                                                       [
                                                                           "Risk",
                                                                           "¿Qué supuesto podría invalidar la inversión?"
                                                                       ],
                                                                       [
                                                                           "Hypothesis",
                                                                           "¿Qué creemos que puede funcionar?"
                                                                       ],
                                                                       [
                                                                           "Validation",
                                                                           "¿Cómo obtenemos evidencia al menor costo?"
                                                                       ],
                                                                       [
                                                                           "Result",
                                                                           "¿Qué aprendimos?"
                                                                       ],
                                                                       [
                                                                           "Decision",
                                                                           "¿Proceed, Adjust, Explore o Stop?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "12. Product Discovery Model",
                                                                         "locator":  "T31"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este canvas constituye suficiente estructura para operar inicialmente el Discovery sin crear documentación adicional innecesaria.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4480"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4478"
                                         }
                                     ]
                     },
                     {
                         "id":  "resultado-organizacional-esperado",
                         "title":  "Resultado organizacional esperado",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Discovery Model modifica la relación entre Producto, UX y Desarrollo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4483"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AS-IS predominante",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4484"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Necesidad → diseño/construcción → feedback",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4485"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TO-BE",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4486"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema → evidencia → hipótesis → aprendizaje barato → inversión",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4487"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es que SEIF deje de equivocarse.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4488"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eso no es realista en desarrollo de producto.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4489"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4490"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "detectar hipótesis equivocadas antes, con menor inversión y con evidencia más clara.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4491"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4482"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-final-del-product-discovery-model",
                         "title":  "Diagnóstico final del Product Discovery Model",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no necesita \"implementar Discovery\".",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4494"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery ya existe.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4495"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Necesita convertirlo en un sistema operativo consistente que proteja capacidad de Desarrollo y reduzca el Learning Lead Time.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4496"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El cambio central queda definido por cinco movimientos:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4497"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De solicitudes a oportunidades",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4498"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una petición inicia una investigación; no define automáticamente la solución.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4499"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De opinión a evidencia",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4500"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La jerarquía o cercanía con el cliente no sustituye validación.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4501"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De diseño a hipótesis",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4502"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un prototipo representa algo que SEIF cree que puede funcionar, no una solución confirmada.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4503"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De construcción a aprendizaje barato",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4504"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La inversión técnica significativa ocurre después de reducir las incertidumbres críticas cuando sea viable hacerlo.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4505"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De feedback a decisión",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4506"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Toda validación debe producir una decisión explícita.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4507"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El SEIF Product Discovery Model queda, por tanto, resumido en una regla operativa:",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4508"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de invertir significativamente en construir, SEIF debe saber qué problema intenta resolver, qué evidencia demuestra que importa, qué resultado espera modificar y cuál es la forma más económica de reducir la incertidumbre crítica.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4509"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El resultado esperado no es más Discovery.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4510"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es menos inversión desperdiciada, feedback más temprano y mejores decisiones de Producto.",
                                            "source":  {
                                                           "title":  "12. Product Discovery Model",
                                                           "locator":  "P4511"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "12. Product Discovery Model",
                                             "locator":  "P4493"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "design-principles",
                    "operating-model",
                    "roles",
                    "artifacts",
                    "prioritization",
                    "feedback-loop",
                    "value-stream"
                ],
    "source":  {
                   "title":  "12. Product Discovery Model",
                   "locator":  "P3568–P4511",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
