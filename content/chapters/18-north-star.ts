import type { Chapter } from "@/types/content";
export const chapter = {
    "slug":  "north-star",
    "group":  "Operating Model",
    "title":  "North Star candidate y arquitectura de métricas",
    "sourceTitle":  "18. North Star \u0026 Metric Tree",
    "eyebrow":  "18 · Metrics",
    "summary":  "Conecta valor de cliente, Outcomes, señales de adopción, salud operativa y resultados de negocio sin confundir habilitadores con valor.",
    "takeaway":  "Clientes con Valor Recurrente sigue siendo una hipótesis medible, no una KPI corporativa aprobada.",
    "executive":  {
                      "keyFindings":  [
                                          "La North Star es candidata H1 pendiente de validación.",
                                          "Outcome y Customer Value permanecen separados de Delivery y Operational Health.",
                                          "No existe baseline ni target corporativo confiable.",
                                          "Cada métrica necesita definición, owner, fuente, frecuencia, umbral y acción antes de gobernar."
                                      ],
                      "implication":  "SEIF puede validar un Metric Tree progresivo sin fabricar precisión.",
                      "evidenceConfidence":  "medium",
                      "evidenceStatus":  "pending",
                      "primaryVisual":  "tree",
                      "sources":  [
                                      {
                                          "title":  "18. North Star \u0026 Metric Tree",
                                          "locator":  "P9221–P10242"
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
                                  "id":  "CL-07",
                                  "subject":  "Metric contracts y definiciones operacionales",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              },
                              {
                                  "id":  "CL-08",
                                  "subject":  "Activation, TTV, Adoption y Adherence",
                                  "status":  "CLIENT VALIDATION REQUIRED"
                              }
                          ],
    "operatingConcepts":  [
                              {
                                  "id":  "north-star-metric-system",
                                  "title":  "North Star Candidate y Metric Tree",
                                  "canonicalLayers":  [
                                                          "STRATEGY / OUTCOMES",
                                                          "METRICS",
                                                          "EVIDENCE",
                                                          "LEARN"
                                                      ],
                                  "sourceChapters":  [
                                                         "18"
                                                     ],
                                  "sourceLocators":  [
                                                         {
                                                             "title":  "18. North Star \u0026 Metric Tree",
                                                             "locator":  "P9221–P10242"
                                                         }
                                                     ],
                                  "contentClass":  "hypothesis",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE PARTIAL",
                                                       "POPULATION":  "SOURCE PARTIAL",
                                                       "DATA SOURCE":  "SOURCE PARTIAL",
                                                       "OWNER":  "SOURCE PARTIAL",
                                                       "CADENCE":  "SOURCE PARTIAL",
                                                       "BUSINESS LINKAGE":  "SOURCE PARTIAL",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING"
                                                   },
                                  "gapIds":  [
                                                 "CL-06",
                                                 "CL-07",
                                                 "CL-08",
                                                 "CL-17"
                                             ]
                              }
                          ],
    "northStarCriteria":  [
                              {
                                  "criterion":  "Customer value representation",
                                  "status":  "SUPPORTED",
                                  "rationale":  "La candidata representa clientes que alcanzan y sostienen criterios de éxito.",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9272–P9287"
                                             }
                              },
                              {
                                  "criterion":  "Recurring behavior",
                                  "status":  "SUPPORTED",
                                  "rationale":  "Incorpora Adherence y no sólo Activation.",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9280–P9287"
                                             }
                              },
                              {
                                  "criterion":  "Relationship to product Outcomes",
                                  "status":  "SUPPORTED",
                                  "rationale":  "El árbol ubica Outcomes específicos bajo la candidata.",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9339–P9387"
                                             }
                              },
                              {
                                  "criterion":  "Actionability",
                                  "status":  "SUPPORTED",
                                  "rationale":  "Puede descomponerse en señales accionables por células.",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9303–P9304"
                                             }
                              },
                              {
                                  "criterion":  "Measurability",
                                  "status":  "PARTIAL",
                                  "rationale":  "La instrumentación y calidad de eventos deben validarse.",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9814–P9854"
                                             }
                              },
                              {
                                  "criterion":  "Sensitivity to change",
                                  "status":  "PARTIAL",
                                  "rationale":  "La fuente propone cohortes y observación, no sensibilidad validada.",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9841–P9851"
                                             }
                              },
                              {
                                  "criterion":  "Resistance to vanity behavior",
                                  "status":  "SUPPORTED",
                                  "rationale":  "Rechaza clientes activos, login y actividad como valor.",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9274–P9278; P9926–P9942"
                                             }
                              },
                              {
                                  "criterion":  "Connection to sustainable business value",
                                  "status":  "PARTIAL",
                                  "rationale":  "Retención, expansión y MRR son relaciones por comprobar.",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9297–P9313"
                                             }
                              }
                          ],
    "metricDefinitions":  [
                              {
                                  "id":  "customer-recurring-value",
                                  "name":  "Customer Recurring Value Rate",
                                  "family":  "VALUE",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Porcentaje de clientes activos que cumplen el criterio mínimo de valor recurrente definido para su contexto.",
                                  "formula":  "Clientes activos con valor recurrente / clientes activos elegibles",
                                  "numerator":  "Clientes activos con valor recurrente",
                                  "denominator":  "Clientes activos elegibles",
                                  "population":  "Clientes activos elegibles",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "UNCLASSIFIED",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9316–P9327"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE COMPLETE",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "outcome-achievement",
                                  "name":  "Outcome Achievement",
                                  "family":  "OUTCOME",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Consistencia con la que ocurre el Outcome específico por módulo o Value Stream.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "UNCLASSIFIED",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9466–P9473"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "activation",
                                  "name":  "Activation",
                                  "family":  "ADOPTION",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Población elegible que alcanzó su primer criterio de éxito.",
                                  "formula":  "Usuarios activados / usuarios elegibles",
                                  "numerator":  "Usuarios activados",
                                  "denominator":  "Usuarios elegibles",
                                  "population":  "Usuarios elegibles",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9487–P9495"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE COMPLETE",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "ttv",
                                  "name":  "Time to Value (TTV)",
                                  "family":  "TTV",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Tiempo desde inicio hasta primer criterio de éxito.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9497–P9507"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "adoption",
                                  "name":  "Adoption",
                                  "family":  "ADOPTION",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Uso relevante recurrente coherente con valor esperado, por módulo.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9509–P9517"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "adherence",
                                  "name":  "Adherence",
                                  "family":  "ADHERENCE",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Sostenimiento del comportamiento de éxito durante el tiempo esperado.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9519–P9526"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "autonomy",
                                  "name":  "Customer Autonomy",
                                  "family":  "CUSTOMER AUTONOMY",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Self-Service, Assisted o Dependent; dependencia recurrente como señal crítica.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9528–P9539"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "friction",
                                  "name":  "Friction",
                                  "family":  "OPERATIONAL",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Señales que explican por qué un Outcome no ocurre; no constituyen Outcome.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9541–P9553"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "reliability",
                                  "name":  "Reliability",
                                  "family":  "RELIABILITY",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Health driver técnico según capacidad disponible.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9555–P9569"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "dora",
                                  "name":  "DORA",
                                  "family":  "DORA",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Capacidad de Delivery que habilita experimentar y aprender; no demuestra valor.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9571–P9586"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "flow",
                                  "name":  "Lead Time / Cycle Time / Throughput / WIP / Blocked Time",
                                  "family":  "FLOW",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Capacidad del sistema, no productividad individual.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9588–P9603"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "decision-lead-time",
                                  "name":  "Decision Lead Time",
                                  "family":  "DECISION",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Tiempo esperando una decisión.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9588–P9603"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "learning-lead-time",
                                  "name":  "Learning Lead Time",
                                  "family":  "LEARNING",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Tiempo para convertir incertidumbre en evidencia suficiente para decidir.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9605–P9618"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "business",
                                  "name":  "MRR / Churn / Retention / Expansion",
                                  "family":  "BUSINESS",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Resultados económicos que muestran qué ocurrió, sin explicar necesariamente por qué.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LAGGING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9442–P9455"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "mrr",
                                  "name":  "MRR",
                                  "family":  "BUSINESS",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Valor recurrente contratado.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LAGGING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9442–P9455"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "churn",
                                  "name":  "Churn",
                                  "family":  "BUSINESS",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Pérdida de clientes o ingreso según definición de negocio.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LAGGING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9442–P9455"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "retention",
                                  "name":  "Retention",
                                  "family":  "RETENTION",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Continuidad de la relación; no prueba por sí sola Product Value.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LAGGING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9442–P9455"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "expansion",
                                  "name":  "Expansion",
                                  "family":  "EXPANSION",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Crecimiento dentro de clientes existentes; causalidad con Product Value pendiente.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LAGGING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9442–P9455"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "ltv-cac",
                                  "name":  "LTV / CAC",
                                  "family":  "BUSINESS",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Podrá incorporarse cuando sea relevante y exista información suficiente.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LAGGING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9452–P9453"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "availability",
                                  "name":  "Availability",
                                  "family":  "RELIABILITY",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Disponibilidad como health driver según capacidad técnica.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9555–P9569"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "incidents",
                                  "name":  "Incidents",
                                  "family":  "RELIABILITY",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Incidentes como señal de confiabilidad.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9555–P9569"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "restore-time",
                                  "name":  "Time to Restore",
                                  "family":  "RELIABILITY",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Tiempo de recuperación como señal de confiabilidad.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9555–P9569"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "error-rate",
                                  "name":  "Error Rate",
                                  "family":  "QUALITY",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Errores como señal de salud técnica.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9555–P9569"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "performance",
                                  "name":  "Performance",
                                  "family":  "OPERATIONAL",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Performance como health driver según capacidad técnica.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9555–P9569"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "lead-time",
                                  "name":  "Lead Time",
                                  "family":  "FLOW",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Tiempo de flujo.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9588–P9603"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "cycle-time",
                                  "name":  "Cycle Time",
                                  "family":  "FLOW",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Tiempo activo de ejecución.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9588–P9603"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "throughput",
                                  "name":  "Throughput",
                                  "family":  "FLOW",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Cantidad de trabajo completado por periodo; no productividad individual.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9588–P9603"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "wip",
                                  "name":  "WIP",
                                  "family":  "FLOW",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Trabajo simultáneo; límite numérico pendiente CL-09.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9588–P9603"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "blocked-time",
                                  "name":  "Blocked Time",
                                  "family":  "FLOW",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Tiempo detenido.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9588–P9603"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "release-first-evidence",
                                  "name":  "Release → First Evidence",
                                  "family":  "LEARNING",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Velocidad de aprendizaje posterior.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9605–P9618"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "bets-with-evidence",
                                  "name":  "Bets with Evidence",
                                  "family":  "LEARNING",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Señal de disciplina de inversión.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9605–P9618"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "learning-decision",
                                  "name":  "Learning → Decision",
                                  "family":  "LEARNING",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Capacidad de actuar sobre lo aprendido.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "LEADING",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9605–P9618"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "failure-demand",
                                  "name":  "Failure Demand",
                                  "family":  "OPERATIONAL",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Guardrail potencial para evitar mayor soporte al optimizar.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9883–P9914"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              },
                              {
                                  "id":  "incorrect-exceptions",
                                  "name":  "Excepciones incorrectamente omitidas",
                                  "family":  "QUALITY",
                                  "purpose":  "Informar diagnóstico y decisión sin sustituir evidencia de Outcome.",
                                  "definition":  "Counter metric del ejemplo conceptual de rondas completadas.",
                                  "formula":  "SOURCE MISSING",
                                  "numerator":  "SOURCE MISSING",
                                  "denominator":  "SOURCE MISSING",
                                  "population":  "SOURCE MISSING",
                                  "timeWindow":  "SOURCE MISSING",
                                  "dataSource":  "SOURCE MISSING",
                                  "owner":  "SOURCE MISSING",
                                  "reviewCadence":  "SOURCE MISSING",
                                  "baseline":  "SOURCE MISSING",
                                  "target":  "SOURCE MISSING",
                                  "threshold":  "SOURCE MISSING",
                                  "decisionEnabled":  "Investigar cambio, decidir acción y observar resultado",
                                  "indicatorType":  "CONTEXTUAL",
                                  "valueClass":  "PENDING VALIDATION",
                                  "source":  {
                                                 "title":  "18. North Star \u0026 Metric Tree",
                                                 "locator":  "P9916–P9924"
                                             },
                                  "validationStatus":  "pending",
                                  "completeness":  {
                                                       "WHAT":  "SOURCE COMPLETE",
                                                       "WHY":  "SOURCE COMPLETE",
                                                       "DEFINITION":  "SOURCE COMPLETE",
                                                       "DECISION":  "SOURCE COMPLETE",
                                                       "FORMULA":  "SOURCE MISSING",
                                                       "POPULATION":  "SOURCE MISSING",
                                                       "DATA SOURCE":  "SOURCE MISSING",
                                                       "OWNER":  "SOURCE MISSING",
                                                       "CADENCE":  "SOURCE MISSING",
                                                       "BASELINE":  "SOURCE MISSING",
                                                       "TARGET":  "SOURCE MISSING",
                                                       "BUSINESS LINKAGE":  "SOURCE MISSING"
                                                   }
                              }
                          ],
    "metricTree":  [
                       {
                           "level":  "NORTH STAR CANDIDATE",
                           "metrics":  [
                                           "Customers with Recurring Value"
                                       ],
                           "relationship":  "Puente candidato entre Customer Value y Business Measures; no causalidad aprobada.",
                           "source":  {
                                          "title":  "18. North Star \u0026 Metric Tree",
                                          "locator":  "P9390–P9417"
                                      }
                       },
                       {
                           "level":  "OUTCOME METRICS",
                           "metrics":  [
                                           "Outcome Achievement"
                                       ],
                           "relationship":  "Outcomes específicos contribuyen, no equivalen, a la candidata.",
                           "source":  {
                                          "title":  "18. North Star \u0026 Metric Tree",
                                          "locator":  "P9466–P9473"
                                      }
                       },
                       {
                           "level":  "ADOPTION METRICS",
                           "metrics":  [
                                           "Activation",
                                           "TTV",
                                           "Adoption",
                                           "Adherence",
                                           "Customer Autonomy"
                                       ],
                           "relationship":  "Señales de comportamiento y recurrencia.",
                           "source":  {
                                          "title":  "18. North Star \u0026 Metric Tree",
                                          "locator":  "P9487–P9539"
                                      }
                       },
                       {
                           "level":  "OPERATIONAL HEALTH",
                           "metrics":  [
                                           "Friction",
                                           "Reliability",
                                           "Quality"
                                       ],
                           "relationship":  "Drivers que explican salud, no valor por sí solos.",
                           "source":  {
                                          "title":  "18. North Star \u0026 Metric Tree",
                                          "locator":  "P9541–P9569"
                                      }
                       },
                       {
                           "level":  "DELIVERY HEALTH",
                           "metrics":  [
                                           "Flow",
                                           "DORA",
                                           "Decision Lead Time"
                                       ],
                           "relationship":  "Capacidad del sistema; habilita pero no demuestra Product Value.",
                           "source":  {
                                          "title":  "18. North Star \u0026 Metric Tree",
                                          "locator":  "P9571–P9603"
                                      }
                       },
                       {
                           "level":  "BUSINESS MEASURES",
                           "metrics":  [
                                           "MRR",
                                           "Retention",
                                           "Expansion",
                                           "Churn"
                                       ],
                           "relationship":  "Resultados lagging; conexión causal pendiente.",
                           "source":  {
                                          "title":  "18. North Star \u0026 Metric Tree",
                                          "locator":  "P9390–P9417; P9442–P9455"
                                      }
                       }
                   ],
    "antiPatternAssessments":  [
                                   {
                                       "antiPattern":  "North Star theatre",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "La candidata todavía requiere instrumentación, cohortes y validación.",
                                       "source":  {
                                                      "title":  "18. North Star \u0026 Metric Tree",
                                                      "locator":  "P9814–P9854"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "DORA = value",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "DORA habilita; no demuestra Product Outcomes.",
                                       "source":  {
                                                      "title":  "18. North Star \u0026 Metric Tree",
                                                      "locator":  "P9571–P9586"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Velocity = productivity",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Flow no se usa como productividad individual.",
                                       "source":  {
                                                      "title":  "18. North Star \u0026 Metric Tree",
                                                      "locator":  "P9588–P9603"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Activity = Outcome",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Actividad y login se separan de Outcome.",
                                       "source":  {
                                                      "title":  "18. North Star \u0026 Metric Tree",
                                                      "locator":  "P9509–P9517"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Metric overload",
                                       "status":  "SOURCE RISK",
                                       "rationale":  "La fuente advierte que no todo indicador se revisa en toda cadencia.",
                                       "source":  {
                                                      "title":  "18. North Star \u0026 Metric Tree",
                                                      "locator":  "P9981–P10009"
                                                  }
                                   },
                                   {
                                       "antiPattern":  "Dashboard = governance",
                                       "status":  "NOT PRESENT",
                                       "rationale":  "Una métrica sólo gobierna al conectar señal, investigación, decisión y acción.",
                                       "source":  {
                                                      "title":  "18. North Star \u0026 Metric Tree",
                                                      "locator":  "P9692–P9710"
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
                                            "text":  "El SEIF North Star \u0026 Metric Tree define cómo la organización conecta la promesa de valor al cliente con el comportamiento real de los usuarios, la salud del producto, la capacidad de entrega y los resultados del negocio.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9223"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment evidencia que SEIF ya dispone de múltiples métricas:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9224"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "licencias contratadas y utilizadas;",
                                                          "usuarios;",
                                                          "utilización por módulos;",
                                                          "comportamiento visible en dashboards;",
                                                          "TTV;",
                                                          "adherencia;",
                                                          "criterios de éxito;",
                                                          "señales de Customer Success;",
                                                          "tickets de Soporte;",
                                                          "indicadores operacionales;",
                                                          "métricas DORA;",
                                                          "MRR y churn como indicadores de negocio."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9225–P9236"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha no está principalmente en ausencia de medición.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9237"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha está en la arquitectura de métricas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9238"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actualmente existen indicadores capaces de responder preguntas parciales, pero todavía no existe evidencia de un sistema consolidado que permita conectar de manera explícita:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9239"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "comportamiento → valor → Outcome → retención/expansión → resultado de negocio.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9240"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo del North Star \u0026 Metric Tree es construir esa conexión.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9241"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9222"
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
                                            "text":  "SEIF no necesita una métrica que represente toda la compañía.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9244"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Necesita una métrica que represente de manera suficientemente fuerte el valor recurrente que el cliente obtiene del producto.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9245"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9246"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La North Star no debe medir cuánto se usa SEIF. Debe aproximarse a cuánto valor recurrente está siendo generado mediante SEIF.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9247"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto descarta como North Star aislada:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9248"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "número de usuarios;",
                                                          "logins;",
                                                          "licencias vendidas;",
                                                          "cantidad de módulos;",
                                                          "tickets;",
                                                          "funcionalidades entregadas;",
                                                          "story points;",
                                                          "releases;",
                                                          "número de rondas sin contexto."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9249–P9257"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todas pueden ser métricas útiles.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9258"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ninguna demuestra por sí misma valor.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9259"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9243"
                                         }
                                     ]
                     },
                     {
                         "id":  "restriccion-del-assessment",
                         "title":  "Restricción del assessment",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas permiten definir el modelo de North Star, pero no existe todavía evidencia suficiente para declarar una fórmula corporativa definitiva.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9262"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hacerlo en esta fase implicaría inventar una relación causal que aún no ha sido validada.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9263"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, este Blueprint establece:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9264"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "la definición conceptual;",
                                                          "la arquitectura de métricas;",
                                                          "las hipótesis de medición;",
                                                          "el mecanismo para seleccionar la North Star definitiva;",
                                                          "el primer piloto recomendado."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9265–P9269"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fórmula final deberá validarse con datos reales.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9270"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9261"
                                         }
                                     ]
                     },
                     {
                         "id":  "hipotesis-de-north-star-para-seif",
                         "title":  "Hipótesis de North Star para SEIF",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La hipótesis inicial que mejor representa el modelo identificado es:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9273"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clientes con Valor Recurrente",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9274"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Definida conceptualmente como:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9275"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "proporción de clientes activos que alcanzan y sostienen los criterios de éxito definidos para las capacidades relevantes que tienen implementadas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9276"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No significa simplemente clientes activos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9277"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Significa clientes donde existe evidencia de que SEIF está cumpliendo su promesa operacional.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9278"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9272"
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
                         "id":  "por-que-clientes-con-valor-recurrente",
                         "title":  "Por qué “Clientes con Valor Recurrente”",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta hipótesis cumple mejor las condiciones observadas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9281"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer-centric",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9282"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Representa lo que obtiene el cliente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9283"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome-oriented",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9284"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No depende únicamente de actividad.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9285"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recurring",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9286"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incorpora adherencia, no solamente activación.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9287"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cross-functional",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9288"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede ser influenciada por:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9289"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Producto;",
                                                          "UX;",
                                                          "Desarrollo;",
                                                          "SRE;",
                                                          "Customer Success;",
                                                          "Soporte;",
                                                          "Marketing."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9290–P9296"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Business-relevant",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9297"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Permite posteriormente analizar relación con:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9298"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "retención;",
                                                          "churn;",
                                                          "expansión;",
                                                          "MRR."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9299–P9302"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actionable",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9303"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede descomponerse hasta señales sobre las que las células pueden actuar.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9304"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9280"
                                         }
                                     ]
                     },
                     {
                         "id":  "lo-que-todavia-debe-validarse",
                         "title":  "Lo que todavía debe validarse",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se afirma en este Blueprint que:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9307"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Clientes con Valor Recurrente causa retención.”",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9308"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tampoco que:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9309"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“mayor adherencia produce automáticamente mayor MRR.”",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9310"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas son hipótesis razonables que SEIF debe poder comprobar con sus propios datos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9311"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura propuesta permitirá responder:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9312"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Los clientes que obtienen valor recurrente presentan mejores resultados de retención y expansión que aquellos que no lo hacen?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9313"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta pregunta es estratégica.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9314"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9306"
                                         }
                                     ]
                     },
                     {
                         "id":  "north-star-candidate",
                         "title":  "North Star Candidate",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La primera definición operacional candidata queda:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9317"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NSM — Customer Recurring Value Rate",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9318"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Concepto:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9319"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "porcentaje de clientes activos que cumplen el criterio mínimo de valor recurrente definido para su contexto.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9320"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Conceptualmente:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9321"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clientes activos con valor recurrente",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9322"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "÷",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9323"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clientes activos elegibles",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9324"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La complejidad está en definir correctamente:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9325"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“valor recurrente”.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9326"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Y esa definición no debe ser arbitraria.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9327"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9316"
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
                         "id":  "que-significa-valor-recurrente",
                         "title":  "Qué significa “Valor Recurrente”",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un cliente posee evidencia de valor recurrente cuando:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9330"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "las capacidades relevantes están configuradas;",
                                                          "la población relevante alcanza activación;",
                                                          "existe adopción suficiente;",
                                                          "los criterios de éxito se mantienen;",
                                                          "no existe una dependencia operacional incompatible con el Outcome esperado."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9331–P9335"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todos los módulos necesitan contribuir con el mismo peso.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9336"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La primera versión debe evitar una fórmula compleja.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9337"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9329"
                                         }
                                     ]
                     },
                     {
                         "id":  "north-star-por-niveles",
                         "title":  "North Star por niveles",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La arquitectura distingue tres niveles.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9340"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Company North Star",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9341"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Representa valor recurrente a nivel compañía.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9342"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Outcome Metrics",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9343"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Representan resultados específicos por producto/módulo/journey.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9344"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operational Drivers",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9345"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Representan los factores que explican los Outcomes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9346"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita intentar gestionar toda SEIF mediante un único número.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9347"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9339"
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
                         "id":  "arquitectura-completa",
                         "title":  "Arquitectura completa",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "BUSINESS OUTCOMES",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9350"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retention | Expansion | MRR | Churn",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9351"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9352"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9353"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NORTH STAR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9354"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customers with",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9355"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recurring Value",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9356"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9357"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9358"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRODUCT OUTCOME METRICS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9359"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9360"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "┌─────────────────┼──────────────────┐",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9361"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│                 │                  │",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9362"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ACTIVATION         ADOPTION          ADHERENCE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9363"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲                 ▲                  ▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9364"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "└─────────────────┼──────────────────┘",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9365"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9366"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9367"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9368"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9369"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CONFIGURATION",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9370"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9371"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9372"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ELIGIBILITY",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9373"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "───── HEALTH DRIVERS ─────",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9375"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX Friction | Autonomy | Reliability",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9377"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Support | Quality | Performance",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9378"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "───── DELIVERY DRIVERS ─────",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9380"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lead Time | Deployment Frequency",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9382"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CFR | Restore Time",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9383"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La lectura debe realizarse de abajo hacia arriba.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9384"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las capacidades operacionales habilitan experiencia.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9385"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La experiencia habilita comportamiento.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9386"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El comportamiento genera Outcomes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9387"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los Outcomes deberían contribuir al resultado de negocio.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9388"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9349"
                                         }
                                     ]
                     },
                     {
                         "id":  "metric-tree-corporativo",
                         "title":  "Metric Tree corporativo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El árbol propuesto queda:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9391"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BUSINESS VALUE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9392"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retention / Expansion / MRR / Churn",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9393"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9394"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NORTH STAR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9395"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customers with Recurring Value",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9396"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9397"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CUSTOMER VALUE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9398"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Achievement",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9399"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9400"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALUE BEHAVIOR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9401"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherence",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9402"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9403"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRODUCT BEHAVIOR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9404"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9405"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9406"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "FIRST VALUE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9407"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9408"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9409"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SPEED TO VALUE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9410"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9411"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9412"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "READINESS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9413"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Configured / Eligible",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9414"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "En paralelo:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9415"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction + Reliability + Autonomy + Quality",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9416"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "actúan como drivers.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9417"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9390"
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
                         "id":  "leading-vs-lagging-indicators",
                         "title":  "Leading vs Lagging Indicators",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una de las principales funciones del Metric Tree es separar indicadores adelantados y rezagados.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9420"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Leading Indicators",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9421"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Permiten intervenir antes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9422"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9423"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "TTV;",
                                                          "activación;",
                                                          "adopción;",
                                                          "adherencia;",
                                                          "fricción;",
                                                          "dependencia;",
                                                          "errores;",
                                                          "tickets antes del TTV."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9424–P9431"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lagging Indicators",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9432"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Confirman resultados posteriormente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9433"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9434"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "churn;",
                                                          "renovación;",
                                                          "expansión;",
                                                          "MRR;",
                                                          "contracción."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9435–P9439"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es evitar gestionar únicamente mirando el retrovisor.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9440"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9419"
                                         }
                                     ]
                     },
                     {
                         "id":  "business-metrics",
                         "title":  "Business Metrics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "En la parte superior permanecen las métricas económicas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9443"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MRR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9444"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Valor recurrente contratado.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9445"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Churn",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9446"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pérdida de clientes o ingreso según definición de negocio.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9447"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retention",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9448"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Continuidad de la relación.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9449"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Expansion",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9450"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Crecimiento dentro de clientes existentes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9451"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LTV / CAC",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9452"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Podrán incorporarse cuando sean relevantes y exista información suficiente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9453"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas métricas indican qué ocurrió con el negocio.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9454"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No explican necesariamente por qué.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9455"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9442"
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
                         "id":  "north-star",
                         "title":  "North Star",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La North Star intenta conectar negocio con valor de cliente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9458"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe responder:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9459"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Está creciendo la cantidad/proporción de clientes que obtiene recurrentemente el valor central que SEIF promete?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9460"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No reemplaza MRR.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9461"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No reemplaza churn.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9462"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No reemplaza Outcomes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9463"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actúa como puente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9464"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9457"
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
                         "id":  "outcome-metrics",
                         "title":  "Outcome Metrics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada módulo o Value Stream debe mantener su propio Outcome.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9467"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo ya documentado por SEIF:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9468"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Control de Rondas",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9469"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“Permitir demostrar, sin reprocesos operativos, que las rondas se ejecutan correctamente.”",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9470"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La métrica de Outcome debe demostrar qué tan consistentemente esto ocurre.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9471"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No necesariamente será igual a la North Star.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9472"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Contribuye a ella.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9473"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9466"
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
                         "id":  "criterios-de-exito-por-rol",
                         "title":  "Criterios de éxito por rol",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo actual de SEIF correctamente reconoce que diferentes roles obtienen valor de maneras diferentes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9476"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para Control de Rondas:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9477"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Vigilante",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9478"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Completa correctamente su ronda.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9479"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Coordinador / Supervisor",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9480"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede verificar cumplimiento sin reproceso.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9481"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cliente / Gerente",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9482"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Obtiene evidencia confiable del servicio.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9483"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, una métrica agregada de “uso de Control de Rondas” sería insuficiente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9484"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Metric Tree debe conservar estas diferencias.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9485"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9475"
                                         }
                                     ]
                     },
                     {
                         "id":  "activation",
                         "title":  "Activation",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation mide:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9488"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La población elegible alcanzó su primer criterio de éxito?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9489"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo existente:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9490"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "primer_recorrido_completado_ok",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9491"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La métrica puede expresarse como:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9492"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usuarios activados / usuarios elegibles",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9493"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation es una métrica adelantada.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9494"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Permite identificar problemas antes de que aparezcan en retención.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9495"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9487"
                                         }
                                     ]
                     },
                     {
                         "id":  "ttv",
                         "title":  "TTV",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV responde:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9498"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánto tarda el usuario en obtener el primer valor?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9499"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El framework actual de SEIF ya define correctamente:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9500"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "inicio → primer criterio de éxito.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9501"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Metric Tree utiliza TTV como driver de Activation.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9502"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si TTV aumenta:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9503"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ puede deteriorarse Activation.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9504"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si Activation cae:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9505"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ puede deteriorarse Adoption.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9506"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La causalidad específica deberá validarse con datos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9507"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9497"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones de Adoption y TTV",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "adoption",
                         "title":  "Adoption",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption responde:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9510"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La población relevante continúa utilizando la capacidad de una forma coherente con el valor esperado?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9511"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se define mediante login.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9512"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe definirse por módulo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9513"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9514"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "rondas correctamente completadas",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9515"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "puede ser una señal de adopción más fuerte que:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9516"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "veces que el vigilante abrió la aplicación.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9517"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9509"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones de Adoption y TTV",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "adherence",
                         "title":  "Adherence",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherence responde:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9520"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El comportamiento de éxito se mantiene durante el tiempo esperado?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9521"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La adherencia conecta uso con recurrencia.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9522"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para SEIF esta métrica es crítica porque permite diferenciar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9523"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "first success",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9524"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "de:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9525"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "sustained value.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9526"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9519"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-08",
                                                       "subject":  "Definiciones de Adoption y TTV",
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
                                            "text":  "El assessment evidenció dependencias donde determinadas actividades requieren acompañamiento o intervención.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9529"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9530"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Autonomy",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9531"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "entra como driver de salud.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9532"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clasificación inicial:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9533"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Self-Service;",
                                                          "Assisted;",
                                                          "Dependent."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9534–P9536"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No debe asumirse que Assisted es negativo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9537"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La señal crítica es:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9538"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "dependencia recurrente que impide escalar o deteriora el journey.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9539"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9528"
                                         }
                                     ]
                     },
                     {
                         "id":  "friction",
                         "title":  "Friction",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction debe observarse mediante múltiples señales.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9542"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9543"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "drop-off;",
                                                          "errores;",
                                                          "reintentos;",
                                                          "tickets;",
                                                          "intervención de CS;",
                                                          "dificultad observada por UX;",
                                                          "tiempo innecesario;",
                                                          "reproceso."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9544–P9551"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fricción ayuda a explicar por qué un Outcome no ocurre.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9552"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No constituye por sí misma el Outcome.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9553"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9541"
                                         }
                                     ]
                     },
                     {
                         "id":  "reliability",
                         "title":  "Reliability",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE aporta una dimensión fundamental.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9556"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un producto puede poseer:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9557"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "buen diseño;",
                                                          "buen onboarding;",
                                                          "necesidad real;"
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9558–P9560"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y aun así destruir valor si no es confiable.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9561"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, Reliability actúa como Health Driver.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9562"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Métricas pueden incluir:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9563"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "disponibilidad;",
                                                          "incidentes;",
                                                          "tiempo de recuperación;",
                                                          "error rate;",
                                                          "performance;"
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9564–P9568"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "según la capacidad técnica disponible.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9569"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9555"
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
                         "id":  "dora-dentro-del-metric-tree",
                         "title":  "DORA dentro del Metric Tree",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "DORA permanece separado de Product Outcomes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9572"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La relación es:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9573"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DORA",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9574"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9575"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery Capability",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9576"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9577"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Experimentation / Reliability",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9578"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9579"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Outcomes",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9580"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DORA habilita.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9581"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No demuestra valor.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9582"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el árbol evita errores como:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9583"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“aumentamos Deployment Frequency, por lo tanto mejoró el producto.”",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9584"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La conclusión válida sería:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9585"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "“aumentó nuestra capacidad de entregar y aprender; ahora debemos observar si los Outcomes cambiaron.”",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9586"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9571"
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
                         "id":  "delivery-metrics",
                         "title":  "Delivery Metrics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Además de DORA, el Operating System necesita métricas de flujo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9589"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lead Time",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9590"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiempo de flujo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9591"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cycle Time",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9592"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiempo activo de ejecución.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9593"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Throughput",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9594"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cantidad de trabajo completado por periodo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9595"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "WIP",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9596"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trabajo simultáneo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9597"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Blocked Time",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9598"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiempo detenido.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9599"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Lead Time",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9600"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiempo esperando una decisión.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9601"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas métricas explican la capacidad del sistema.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9602"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No son métricas de productividad individual.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9603"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9588"
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
                         "id":  "learning-metrics",
                         "title":  "Learning Metrics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El capítulo 16 incorporó otra dimensión:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9606"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Lead Time",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9607"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiempo para convertir incertidumbre en evidencia suficiente para decidir.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9608"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release → First Evidence",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9609"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Velocidad de aprendizaje posterior.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9610"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Bets with Evidence",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9611"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Disciplina de inversión.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9612"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning → Decision",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9613"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidad de actuar sobre lo aprendido.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9614"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Operating System necesita optimizar simultáneamente:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9615"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery Speed",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9616"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9617"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Speed.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9618"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9605"
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
                         "id":  "metric-tree-completo",
                         "title":  "Metric Tree completo",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo consolidado puede visualizarse como:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9621"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BUSINESS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9622"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MRR | Retention | Expansion | Churn",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9623"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9624"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9625"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NORTH STAR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9626"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customers with Recurring Value",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9627"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9628"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9629"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OUTCOME ACHIEVEMENT",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9630"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9631"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "┌─────────────┼─────────────┐",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9632"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│             │             │",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9633"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADHERENCE       AUTONOMY       QUALITY",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9634"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲             ▲             ▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9635"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│             │             │",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9636"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADOPTION       FRICTION     RELIABILITY",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9637"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9638"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9639"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ACTIVATION",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9640"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9641"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9642"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9643"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9644"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9645"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CONFIGURED",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9646"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9647"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9648"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ELIGIBLE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9649"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRODUCT SYSTEM ENABLERS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9652"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery ─ Decision ─ Delivery ─ Learning",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9654"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "▲",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9656"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "│",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9657"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "FLOW + DORA + TECHNICAL HEALTH METRICS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9659"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9620"
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
                         "id":  "metric-ownership",
                         "title":  "Metric Ownership",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aplicando el capítulo 17:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9662"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-064",
                                                          "caption":  "Metric Ownership",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Métrica",
                                                                          "Owner principal"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Business",
                                                                           "MRR / Churn / Expansion",
                                                                           "Liderazgo / negocio"
                                                                       ],
                                                                       [
                                                                           "North Star",
                                                                           "Recurring Value",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "Outcome Achievement",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "Success Criteria",
                                                                           "Por rol",
                                                                           "Producto"
                                                                       ],
                                                                       [
                                                                           "TTV",
                                                                           "Time to Value",
                                                                           "Producto + CS"
                                                                       ],
                                                                       [
                                                                           "Activation",
                                                                           "First Success",
                                                                           "CS"
                                                                       ],
                                                                       [
                                                                           "Adoption",
                                                                           "Relevant Use",
                                                                           "CS + Producto"
                                                                       ],
                                                                       [
                                                                           "Adherence",
                                                                           "Sustained Value",
                                                                           "Producto + CS"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Friction",
                                                                           "UX"
                                                                       ],
                                                                       [
                                                                           "Customer",
                                                                           "Autonomy",
                                                                           "CS + Producto"
                                                                       ],
                                                                       [
                                                                           "Support",
                                                                           "Recurrent Friction",
                                                                           "Soporte"
                                                                       ],
                                                                       [
                                                                           "Reliability",
                                                                           "Operational Health",
                                                                           "SRE"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "Flow",
                                                                           "Desarrollo / célula"
                                                                       ],
                                                                       [
                                                                           "DORA",
                                                                           "Delivery Capability",
                                                                           "Desarrollo / SRE"
                                                                       ],
                                                                       [
                                                                           "Learning",
                                                                           "Learning Lead Time",
                                                                           "Producto"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "18. North Star \u0026 Metric Tree",
                                                                         "locator":  "T64"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El owner debe poder explicar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9663"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "qué significa la métrica;",
                                                          "qué cambio requiere atención;",
                                                          "quién debe actuar."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9664–P9666"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9661"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles fuente",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metric-contract",
                         "title":  "Metric Contract",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada métrica crítica necesita un contrato mínimo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9669"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Name",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9670"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nombre único.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9671"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Definition",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9672"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué mide.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9673"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Purpose",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9674"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por qué importa.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9675"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Formula",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9676"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cómo se calcula.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9677"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Population",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9678"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sobre quién aplica.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9679"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Source",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9680"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "De dónde proviene.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9681"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Frequency",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9682"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada cuánto se actualiza.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9683"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9684"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quién responde.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9685"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Threshold",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9686"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuándo requiere atención.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9687"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Action",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9688"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qué ocurre cuando cruza el umbral.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9689"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita discusiones donde distintas áreas utilizan el mismo nombre para conceptos diferentes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9690"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9668"
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
                         "id":  "una-metrica-sin-accion-no-es-gestion",
                         "title":  "Una métrica sin acción no es gestión",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El dashboard TO-BE debe conectar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9693"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9694"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9695"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Threshold",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9696"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9697"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9698"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9699"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9700"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9701"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Investigation",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9702"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9703"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9704"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9705"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Action",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9706"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9707"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Result",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9708"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9709"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ningún KPI crítico debería existir únicamente porque puede ser medido.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9710"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9692"
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
                         "id":  "dashboard-architecture",
                         "title":  "Dashboard Architecture",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no necesita un dashboard único gigantesco.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9713"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Necesita diferentes niveles de decisión.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9714"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Level 1 — Executive",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9715"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Máximo foco en:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9716"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "North Star;",
                                                          "Outcome;",
                                                          "Retention;",
                                                          "Expansion;",
                                                          "Churn;",
                                                          "principales riesgos."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9717–P9722"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Level 2 — Product",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9723"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "TTV;",
                                                          "Activation;",
                                                          "Adoption;",
                                                          "Adherence;",
                                                          "Friction;",
                                                          "Learning."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9724–P9730"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Level 3 — Operational",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9731"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "journeys;",
                                                          "errores;",
                                                          "tickets;",
                                                          "reliability;",
                                                          "flow;",
                                                          "DORA;",
                                                          "WIP."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9732–P9738"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada nivel responde preguntas diferentes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9739"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9712"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
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
                         "id":  "executive-dashboard",
                         "title":  "Executive Dashboard",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El dashboard ejecutivo debería responder:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9742"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALUE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9743"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Más clientes están obteniendo valor recurrente?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9744"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BUSINESS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9745"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Ese comportamiento coincide con retención y crecimiento?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9746"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RISK",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9747"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Dónde se deteriora el valor?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9748"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "INVESTMENT",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9749"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué Outcomes consumen capacidad?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9750"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "LEARNING",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9751"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decisiones relevantes cambiaron con evidencia?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9752"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo no es proporcionar toda la información disponible.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9753"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es facilitar decisiones.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9754"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9741"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
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
                         "id":  "product-dashboard",
                         "title":  "Product Dashboard",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por Outcome:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9757"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9758"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9759"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target population",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9760"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9761"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9762"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9763"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9764"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9765"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adoption",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9766"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9767"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adherence",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9768"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9769"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9770"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9771"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Result",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9772"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto permite detectar exactamente dónde investigar.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9773"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9756"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
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
                         "id":  "operational-dashboard",
                         "title":  "Operational Dashboard",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe contener drivers que permitan actuar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9776"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "errores;",
                                                          "incidentes;",
                                                          "performance;",
                                                          "tickets;",
                                                          "bloqueos;",
                                                          "Lead Time;",
                                                          "WIP;",
                                                          "Deployment Frequency;",
                                                          "Change Failure Rate;",
                                                          "Restore Time."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9777–P9786"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El dashboard operacional no debe mezclarse indiscriminadamente con indicadores ejecutivos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9787"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9775"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
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
                         "id":  "north-star-por-modulo",
                         "title":  "North Star por módulo",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se recomienda crear una North Star distinta para cada módulo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9790"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los módulos necesitan:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9791"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Metrics.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9792"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La North Star permanece a nivel compañía/producto.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9793"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9794"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "North Star",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9795"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clientes con valor recurrente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9796"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Control de Rondas",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9797"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Metric específica.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9798"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Otro módulo",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9799"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Metric correspondiente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9800"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ambos contribuyen potencialmente a la North Star.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9801"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto preserva coherencia sin forzar una métrica idéntica sobre experiencias distintas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9802"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9789"
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
                         "id":  "module-value-score",
                         "title":  "Module Value Score",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se recomienda inicialmente crear una puntuación matemática compleja de valor por módulo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9805"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una fórmula con múltiples pesos puede producir una sensación falsa de precisión.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9806"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primero SEIF necesita aprender:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9807"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "qué eventos son confiables;",
                                                          "qué comportamiento representa valor;",
                                                          "qué datos están disponibles;",
                                                          "qué relación existe con retención."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9808–P9811"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo posteriormente tendría sentido evaluar un índice compuesto.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9812"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9804"
                                         }
                                     ]
                     },
                     {
                         "id":  "north-star-validation-framework",
                         "title":  "North Star Validation Framework",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La North Star candidata debe validarse mediante cinco preguntas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9815"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Value",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9816"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Representa algo que el cliente realmente valora?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9817"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Frequency",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9818"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Ocurre con suficiente frecuencia para poder gestionarla?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9819"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Influence",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9820"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Producto puede influir en ella?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9821"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Business Connection",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9822"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Existe o puede comprobarse relación con retención/expansión?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9823"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Measurability",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9824"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿SEIF puede medirla de forma confiable?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9825"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si falla materialmente en estas condiciones:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9826"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "→ debe ajustarse.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9827"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9814"
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
                         "id":  "proceso-para-validar-la-north-star",
                         "title":  "Proceso para validar la North Star",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 1 — Seleccionar módulo piloto",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9830"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Control de Rondas es un candidato natural porque el framework existente ya contiene:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9831"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "roles;",
                                                          "criterios de éxito;",
                                                          "journey;",
                                                          "TTV;",
                                                          "adherencia;",
                                                          "eventos conceptuales."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9832–P9838"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 2 — Instrumentar",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9839"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validar disponibilidad y calidad de eventos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9840"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 3 — Construir cohortes",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9841"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clientes/usuarios con distintos niveles de valor.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9842"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 4 — Observar",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9843"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comparar comportamiento.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9844"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 5 — Correlacionar",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9845"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evaluar relación con:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9846"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "soporte;",
                                                          "retención;",
                                                          "expansión;",
                                                          "utilización."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9847–P9850"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 6 — Ajustar definición",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9851"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eliminar señales que no aporten.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9852"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 7 — Escalar",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9853"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Extender progresivamente a otros módulos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9854"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9829"
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
                         "id":  "control-de-rondas-metric-tree-piloto",
                         "title":  "Control de Rondas — Metric Tree piloto",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilizando exclusivamente definiciones ya presentes en el modelo SEIF:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9857"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BUSINESS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9858"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retención / expansión del cliente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9859"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9860"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CUSTOMER OUTCOME",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9861"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Demostrar sin reprocesos que las rondas se ejecutan correctamente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9862"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9863"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CLIENT / MANAGER SUCCESS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9864"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reporte confiable que demuestra servicio prestado.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9865"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9866"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SUPERVISOR SUCCESS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9867"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Verificación sin reprocesos ni consultas adicionales.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9868"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9869"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VIGILANTE SUCCESS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9870"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ronda completada correctamente con confirmación.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9871"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9872"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ADHERENCE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9873"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "% rondas completadas correctamente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9874"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9875"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ACTIVATION",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9876"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primer recorrido completado correctamente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9877"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9878"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9879"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primer login → primera ronda completada correctamente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9880"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este es un Metric Tree ya suficientemente concreto para comenzar a probar el modelo.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9881"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9856"
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
                         "id":  "guardrail-metrics",
                         "title":  "Guardrail Metrics",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Optimizar una métrica puede deteriorar otra dimensión.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9884"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, cada Outcome necesita Guardrails.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9885"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo conceptual:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9886"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF podría intentar reducir TTV.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9887"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero no debería hacerlo a costa de:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9888"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "menor confiabilidad;",
                                                          "más errores;",
                                                          "mayor riesgo;",
                                                          "mayor soporte;",
                                                          "pérdida de integridad del servicio."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9889–P9893"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9894"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Primary Metric",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9895"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrails",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9897"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La optimización debe respetar ambas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9898"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9883"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
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
                         "id":  "guardrails-potenciales",
                         "title":  "Guardrails potenciales",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dependiendo del Outcome:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9901"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reliability",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9902"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No deteriorar disponibilidad.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9903"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quality",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9904"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No aumentar fallos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9905"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Support",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9906"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No aumentar Failure Demand.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9907"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Security",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9908"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No comprometer controles.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9909"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Experience",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9910"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No incrementar fricción en otro rol.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9911"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Operational Cost",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9912"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No crear dependencia manual excesiva.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9913"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto es particularmente relevante en una plataforma relacionada con gestión de seguridad.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9914"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9900"
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
                         "id":  "counter-metrics",
                         "title":  "Counter Metrics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cuando SEIF experimente sobre una métrica, debe preguntarse:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9917"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué podría empeorar si logramos optimizar esto de la forma incorrecta?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9918"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9919"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Objective",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9920"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incrementar % de rondas completadas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9921"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Counter Metric",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9922"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Excepciones incorrectamente omitidas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9923"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Así se evita gaming del indicador.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9924"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9916"
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
                         "id":  "metricas-que-seif-debe-evitar-como-objetivo-individual",
                         "title":  "Métricas que SEIF debe evitar como objetivo individual",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No deben utilizarse para evaluar productividad individual:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9927"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "story points;",
                                                          "commits;",
                                                          "tickets cerrados;",
                                                          "bugs resueltos;",
                                                          "releases;",
                                                          "deployments;",
                                                          "líneas de código;",
                                                          "velocidad individual."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9928–P9935"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas métricas pueden generar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9936"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "gaming;",
                                                          "optimización local;",
                                                          "reducción de colaboración;",
                                                          "ocultamiento de problemas."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9937–P9940"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema mide capacidad y Outcome.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9941"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No actividad individual.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9942"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9926"
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
                         "id":  "metricas-de-celula",
                         "title":  "Métricas de célula",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una célula debe trabajar con un conjunto reducido.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9945"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Idealmente:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9946"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1 Outcome Metric",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9947"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué resultado perseguimos?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9948"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1–2 Leading Metrics",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9949"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué comportamiento anticipa el resultado?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9950"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1–2 Guardrails",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9951"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué no debemos deteriorar?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9952"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow Metrics",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9953"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solo las necesarias para detectar problemas de Delivery.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9954"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objetivo es evitar Metric Overload.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9955"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9944"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-04",
                                                       "subject":  "Mapeo organizacional de roles fuente",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "outcome-card-metrics",
                         "title":  "Outcome Card + Metrics",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La Outcome Card definida previamente debe incorporar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9958"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9959"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9960"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Baseline",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9961"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Metric",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9962"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Leading Indicators",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9963"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Guardrails",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9964"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidence Source",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9965"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9966"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Review Frequency",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9967"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita separar estrategia y medición.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9968"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9957"
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
                         "id":  "targets",
                         "title":  "Targets",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no proporciona baseline suficiente para establecer objetivos numéricos corporativos confiables.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9971"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, no se recomienda inventar metas como:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9972"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "95% de North Star;",
                                                          "80% de adopción;",
                                                          "5 minutos de TTV global;",
                                                          "2% de churn."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9973–P9976"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las metas deben definirse después de:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9977"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "instrumentar → observar → establecer baseline → segmentar → decidir target.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9978"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La excepción son metas ya definidas explícitamente por SEIF, como las existentes en el ejemplo metodológico de Control de Rondas, que deberán validarse con datos reales antes de utilizarlas como compromiso de gestión.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9979"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9970"
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
                         "id":  "metric-review-cadence",
                         "title":  "Metric Review Cadence",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Semanal",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9982"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Drivers operacionales:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9983"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "fricción;",
                                                          "flow;",
                                                          "reliability;",
                                                          "señales críticas."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9984–P9987"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Quincenal",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9988"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome / Discovery:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9989"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "leading indicators;",
                                                          "experimentos;",
                                                          "aprendizaje."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9990–P9992"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Mensual",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9993"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Product Health:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9994"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "TTV;",
                                                          "activation;",
                                                          "adoption;",
                                                          "adherence;",
                                                          "Outcome;",
                                                          "North Star cuando exista baseline."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P9995–P10000"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trimestral",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10001"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Business:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10002"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "North Star;",
                                                          "retención;",
                                                          "expansión;",
                                                          "churn;",
                                                          "inversión;",
                                                          "Outcomes estratégicos."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10003–P10008"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todos los indicadores deben revisarse en todas las reuniones.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10009"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P9981"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
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
                         "id":  "metric-decision-loop",
                         "title":  "Metric Decision Loop",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada revisión debe utilizar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10012"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "OBSERVE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10013"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué cambió?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10014"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10015"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DIAGNOSE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10016"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué podría estar ocurriendo?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10017"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10018"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "INVESTIGATE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10019"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué evidencia falta?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10020"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10021"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DECIDE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10022"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué haremos?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10023"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10024"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ACT",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10025"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejecutar.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10026"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10027"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MEASURE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10028"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurrió?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10029"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10030"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto conecta el Metric Tree con el Feedback \u0026 Learning Loop.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10031"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10011"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-05",
                                                       "subject":  "Decision rights y autoridad organizacional",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   }
                                               ]
                     },
                     {
                         "id":  "metric-governance",
                         "title":  "Metric Governance",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para una organización del tamaño de SEIF, no se recomienda crear un comité formal de gobierno de datos para este propósito.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10034"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El gobierno mínimo requiere:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10035"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "definiciones compartidas;",
                                                          "owner;",
                                                          "fuente;",
                                                          "fórmula;",
                                                          "frecuencia;",
                                                          "trazabilidad;",
                                                          "revisión de calidad."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10036–P10042"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto lidera el significado de métricas de Outcome.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10043"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada capacidad funcional mantiene las métricas bajo su dominio.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10044"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10033"
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
                         "id":  "instrumentation-gap",
                         "title":  "Instrumentation Gap",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una de las primeras actividades de implementación debe ser identificar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10047"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Available",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10048"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ya se mide.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10049"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Derivable",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10050"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede calcularse con datos existentes.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10051"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Instrumentation Required",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10052"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Requiere nuevos eventos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10053"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Qualitative",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10054"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Requiere evidencia cualitativa.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10055"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita diseñar un sistema teórico imposible de implementar.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10056"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10046"
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
                         "id":  "metric-inventory",
                         "title":  "Metric Inventory",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El primer inventario debe clasificar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10059"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-065",
                                                          "caption":  "Metric Inventory",
                                                          "kind":  "scorecard",
                                                          "headers":  [
                                                                          "Métrica",
                                                                          "Disponible",
                                                                          "Calidad",
                                                                          "Owner",
                                                                          "Acción"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Licencias contratadas",
                                                                           "Validar",
                                                                           "Validar",
                                                                           "Definir",
                                                                           "Mantener"
                                                                       ],
                                                                       [
                                                                           "Licencias utilizadas",
                                                                           "Validar",
                                                                           "Validar",
                                                                           "Definir",
                                                                           "Integrar"
                                                                       ],
                                                                       [
                                                                           "Usuarios activos",
                                                                           "Validar",
                                                                           "Validar",
                                                                           "Definir",
                                                                           "Reinterpretar"
                                                                       ],
                                                                       [
                                                                           "TTV",
                                                                           "Validar instrumentación",
                                                                           "Por determinar",
                                                                           "Producto/CS",
                                                                           "Pilotar"
                                                                       ],
                                                                       [
                                                                           "Activation",
                                                                           "Validar eventos",
                                                                           "Por determinar",
                                                                           "CS",
                                                                           "Instrumentar"
                                                                       ],
                                                                       [
                                                                           "Adoption",
                                                                           "Parcial",
                                                                           "Por determinar",
                                                                           "CS/Producto",
                                                                           "Definir"
                                                                       ],
                                                                       [
                                                                           "Adherence",
                                                                           "Conceptual",
                                                                           "Por determinar",
                                                                           "Producto/CS",
                                                                           "Operacionalizar"
                                                                       ],
                                                                       [
                                                                           "Friction",
                                                                           "Distribuida",
                                                                           "Variable",
                                                                           "UX/Soporte",
                                                                           "Integrar"
                                                                       ],
                                                                       [
                                                                           "Reliability",
                                                                           "Existente parcialmente",
                                                                           "Validar",
                                                                           "SRE",
                                                                           "Integrar"
                                                                       ],
                                                                       [
                                                                           "DORA",
                                                                           "Validar disponibilidad",
                                                                           "Por determinar",
                                                                           "Dev/SRE",
                                                                           "Baseline"
                                                                       ],
                                                                       [
                                                                           "Churn",
                                                                           "Existente negocio",
                                                                           "Validar definición",
                                                                           "Negocio",
                                                                           "Correlacionar"
                                                                       ],
                                                                       [
                                                                           "MRR",
                                                                           "Existente negocio",
                                                                           "Validar definición",
                                                                           "Negocio",
                                                                           "Correlacionar"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "18. North Star \u0026 Metric Tree",
                                                                         "locator":  "T65"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La columna “Validar” es deliberada.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10060"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas no permiten afirmar calidad técnica de cada fuente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10061"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10058"
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
                         "id":  "ai-metric-intelligence",
                         "title":  "AI \u0026 Metric Intelligence",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una vez consolidada la arquitectura, IA puede apoyar:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10064"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "detección de anomalías;",
                                                          "resúmenes ejecutivos;",
                                                          "explicación de variaciones;",
                                                          "correlación exploratoria;",
                                                          "identificación de cohortes;",
                                                          "detección de patrones;",
                                                          "alertas;",
                                                          "preparación de Outcome Reviews."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10065–P10072"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10073"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "la IA no debe inventar causalidad a partir de correlaciones.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10074"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10075"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Si baja adherencia coincide con churn, esto genera una hipótesis.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10076"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No demuestra automáticamente causalidad.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10077"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10063"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
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
                         "id":  "north-star-dashboard-to-be",
                         "title":  "North Star Dashboard TO-BE",
                         "contentClass":  "hypothesis",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El nivel ejecutivo puede estructurarse conceptualmente así:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10080"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "NORTH STAR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10081"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "% Customers with Recurring Value",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10082"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Trend",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10083"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑ / ↓",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10084"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "VALUE FUNNEL",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10085"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eligible → Activated → Adopted → Adherent",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10086"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "BUSINESS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10087"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retention | Expansion | Churn | MRR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10088"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "HEALTH",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10089"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Friction | Autonomy | Reliability",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10090"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRODUCT",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10091"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Top Outcomes",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10092"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "ALERT",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10093"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principales desviaciones que requieren decisión.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10094"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No más de lo necesario para decidir.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10095"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10079"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-06",
                                                       "subject":  "North Star candidate",
                                                       "status":  "CLIENT VALIDATION REQUIRED"
                                                   },
                                                   {
                                                       "id":  "CL-07",
                                                       "subject":  "Definiciones operacionales, baseline, targets y ownership",
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
                         "id":  "anti-patrones",
                         "title":  "Anti-patrones",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo elimina explícitamente:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10098"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Vanity Metrics",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10099"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Actividad presentada como valor.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10100"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric Explosion",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10101"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decenas de KPIs sin jerarquía.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10102"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dashboard Theater",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10103"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dashboards sin decisiones.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10104"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target Without Baseline",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10105"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metas arbitrarias.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10106"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric Without Owner",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10107"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nadie responde cuando cambia.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10108"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric Without Action",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10109"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe umbral ni intervención.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10110"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Output Metrics as Success",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10111"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Features o releases tratados como Outcome.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10112"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Individual Productivity Metrics",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10113"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Métricas sistémicas utilizadas para juzgar personas.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10114"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Correlation = Causation",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10115"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Inferir causalidad sin evidencia.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10116"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10097"
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
                                                          "id":  "source-table-066",
                                                          "caption":  "Maturity Assessment",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Comportamiento"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1 — Inicial",
                                                                           "Predominan métricas de actividad y reportes aislados"
                                                                       ],
                                                                       [
                                                                           "2 — Repetible",
                                                                           "Existen dashboards, métricas de uso y conceptos de valor, pero permanecen parcialmente desconectados"
                                                                       ],
                                                                       [
                                                                           "3 — Definido",
                                                                           "North Star, Outcome Metrics, drivers y owners están conectados"
                                                                       ],
                                                                       [
                                                                           "4 — Gestionado",
                                                                           "Métricas generan decisiones sistemáticas y existe análisis de cohortes"
                                                                       ],
                                                                       [
                                                                           "5 — Optimizado",
                                                                           "El sistema predice riesgos, experimenta y optimiza continuamente valor"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "18. North Star \u0026 Metric Tree",
                                                                         "locator":  "T66"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado SEIF",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10119"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con base en las entrevistas y artefactos analizados:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10120"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10121"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya posee una base superior a un modelo puramente inicial porque:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10122"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "existen dashboards;",
                                                          "se mide utilización;",
                                                          "se han definido conceptos de TTV;",
                                                          "existen criterios de éxito;",
                                                          "existe adherencia como concepto;",
                                                          "se reconocen métricas DORA."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10123–P10128"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha está en convertir esas piezas en un sistema integrado.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10129"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Target inicial",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10130"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10131"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10118"
                                         }
                                     ],
                         "clientValidations":  [
                                                   {
                                                       "id":  "CL-17",
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
                                                          "id":  "source-table-067",
                                                          "caption":  "AS-IS → TO-BE",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "AS-IS observado",
                                                                          "TO-BE"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Métricas",
                                                                           "Múltiples indicadores",
                                                                           "Metric Architecture"
                                                                       ],
                                                                       [
                                                                           "Uso",
                                                                           "Visible",
                                                                           "Driver, no Outcome"
                                                                       ],
                                                                       [
                                                                           "Licencias",
                                                                           "Contratadas/utilizadas",
                                                                           "Funnel + diagnostic signal"
                                                                       ],
                                                                       [
                                                                           "TTV",
                                                                           "Definido conceptualmente",
                                                                           "Operacional"
                                                                       ],
                                                                       [
                                                                           "Activation",
                                                                           "Implícita/conceptual",
                                                                           "Métrica explícita"
                                                                       ],
                                                                       [
                                                                           "Adoption",
                                                                           "Medida parcialmente",
                                                                           "Behavior-based"
                                                                       ],
                                                                       [
                                                                           "Adherence",
                                                                           "Conceptual",
                                                                           "Sustained Value"
                                                                       ],
                                                                       [
                                                                           "Outcome",
                                                                           "Definido metodológicamente",
                                                                           "Medido"
                                                                       ],
                                                                       [
                                                                           "North Star",
                                                                           "No consolidada",
                                                                           "Recurring Value hypothesis"
                                                                       ],
                                                                       [
                                                                           "Business",
                                                                           "MRR/churn",
                                                                           "Conectado con Product Value"
                                                                       ],
                                                                       [
                                                                           "DORA",
                                                                           "Reconocido",
                                                                           "Delivery Enabler"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Fricción",
                                                                           "Health Driver"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Adopción",
                                                                           "Value Driver"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Tickets",
                                                                           "Friction Driver"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Operación",
                                                                           "Reliability Driver"
                                                                       ],
                                                                       [
                                                                           "Dashboard",
                                                                           "Reporting",
                                                                           "Decision System"
                                                                       ],
                                                                       [
                                                                           "Ownership",
                                                                           "Distribuido",
                                                                           "Metric Owners"
                                                                       ],
                                                                       [
                                                                           "Targets",
                                                                           "Parciales",
                                                                           "Baseline-driven"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "title":  "18. North Star \u0026 Metric Tree",
                                                                         "locator":  "T67"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10133"
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
                                            "text":  "El modelo no requiere construir inicialmente una plataforma de analytics sofisticada.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10136"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Seleccionar Control de Rondas como piloto",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10137"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aprovechar el trabajo conceptual existente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10138"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Crear Metric Contract",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10139"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10140"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "TTV;",
                                                          "Activation;",
                                                          "Adoption;",
                                                          "Adherence."
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10141–P10145"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Mapear eventos existentes",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10146"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Identificar qué puede medirse hoy.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10147"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Construir baseline",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10148"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin imponer targets inicialmente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10149"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Segmentar por cliente/rol",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10150"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evitar promedios engañosos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10151"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Relacionar utilización con Outcome",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10152"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar si la métrica actual representa valor.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10153"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. Incorporar Guardrails",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10154"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción, reliability y soporte.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10155"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. Crear primer Outcome Dashboard",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10156"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con datos disponibles.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10157"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "9. Correlacionar con retención",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10158"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin asumir causalidad.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10159"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "10. Validar hipótesis de North Star",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10160"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Antes de institucionalizarla.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10161"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10135"
                                         }
                                     ]
                     },
                     {
                         "id":  "secuencia-de-implementacion",
                         "title":  "Secuencia de implementación",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La implementación debe ser Lean:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10164"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 1",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10165"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric Inventory",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10166"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué existe?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10167"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 2",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10168"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric Definition",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10169"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué significa?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10170"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 3",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10171"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Metric Tree Pilot",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10172"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cómo se conecta?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10173"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 4",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10174"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Instrumentation",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10175"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué falta medir?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10176"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 5",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10177"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Baseline",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10178"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué ocurre actualmente?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10179"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 6",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10180"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Review",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10181"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué decisiones permite?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10182"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 7",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10183"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "North Star Validation",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10184"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Predice o representa valor?",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10185"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Paso 8",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10186"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Scale",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10187"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Extender gradualmente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10188"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se recomienda instrumentar todos los módulos simultáneamente.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10189"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10163"
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
                         "id":  "modelo-consolidado",
                         "title":  "Modelo consolidado",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El SEIF North Star \u0026 Metric Tree queda estructurado en cinco capas:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10192"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "L1 — BUSINESS",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10193"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Retention | Expansion | MRR | Churn",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10194"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10195"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "L2 — NORTH STAR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10196"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customers with Recurring Value",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10197"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10198"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "L3 — PRODUCT VALUE",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10199"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome Achievement | Adherence",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10200"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10201"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "L4 — CUSTOMER BEHAVIOR",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10202"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Activation | Adoption | TTV",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10203"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↑",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10204"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "L5 — SYSTEM HEALTH",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10205"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX Friction | Autonomy | Support | Reliability | Quality",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10206"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "soportado transversalmente por:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10207"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery + Decision + Delivery + Learning Metrics.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10208"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10191"
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
                                            "text":  "El assessment evidencia que SEIF ha comenzado correctamente a cambiar la conversación desde actividad hacia valor.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10211"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Conceptos como:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10212"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome;",
                                                          "criterio de éxito;",
                                                          "Momento de Verdad;",
                                                          "TTV;",
                                                          "adherencia;",
                                                          "DORA;"
                                                      ],
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10213–P10218"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "demuestran esa intención.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10219"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, definir los conceptos no garantiza que la organización esté gestionando mediante ellos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10220"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El siguiente salto de madurez consiste en conectarlos.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10221"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF debe poder navegar desde:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10222"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "un resultado financiero",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10223"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10224"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "el Outcome que lo podría explicar",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10225"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10226"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "el comportamiento del usuario",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10227"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10228"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "el journey donde se produce",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10229"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacia:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10230"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "la fricción que puede modificarse",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10231"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y regresar posteriormente para comprobar si la intervención produjo el resultado esperado.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10232"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ello, el Metric Tree no es principalmente un dashboard.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10233"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10234"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "un modelo causal de gestión que SEIF deberá validar con evidencia.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10235"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La hipótesis inicial de North Star queda definida como:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10236"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Clientes con Valor Recurrente: proporción de clientes activos que alcanzan y sostienen los criterios de éxito relevantes mediante SEIF.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10237"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pero se mantiene deliberadamente como hipótesis a validar, no como verdad establecida.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10238"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principio final del modelo es:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10239"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Negocio mide si SEIF crece. Producto mide si el cliente obtiene valor. Operación mide si SEIF puede entregar ese valor de manera confiable. El Metric Tree conecta las tres conversaciones.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10240"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Y la evolución buscada es:",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10241"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DATA → METRIC → SIGNAL → INSIGHT → DECISION → ACTION → OUTCOME → BUSINESS IMPACT.",
                                            "source":  {
                                                           "title":  "18. North Star \u0026 Metric Tree",
                                                           "locator":  "P10242"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "title":  "18. North Star \u0026 Metric Tree",
                                             "locator":  "P10210"
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
                    "governance",
                    "artifacts"
                ],
    "source":  {
                   "title":  "18. North Star \u0026 Metric Tree",
                   "locator":  "P9221–P10242",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
