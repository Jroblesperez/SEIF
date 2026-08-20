import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "maturity",
    "group":  "Assessment",
    "title":  "Maturity Assessment",
    "sourceTitle":  "7. Maturity Assessment",
    "eyebrow":  "07 · Capacidades",
    "summary":  "La valoración del assessment describe el grado de repetibilidad y definición observado por capacidad.",
    "takeaway":  "Los valores numéricos son una valoración del assessment pendiente de validación; no un baseline aprobado por SEIF.",
    "executive":  {
                      "primaryVisual":  "maturity-heatmap",
                      "keyFindings":  [
                                          "La escala conserva cinco niveles sin transformaciones.",
                                          "Las capacidades se valoran de manera independiente.",
                                          "El detalle canónico de madurez vive en este capítulo.",
                                          "No se calculan promedios ni valores faltantes."
                                      ],
                      "sources":  [
                                      {
                                          "locator":  "P1590–P1717",
                                          "title":  "7. Maturity Assessment"
                                      }
                                  ],
                      "evidenceConfidence":  "unreviewed",
                      "implication":  "La madurez debe orientar preguntas de mejora y validación, no calificar equipos ni presentarse como medición aprobada.",
                      "evidenceStatus":  "pending"
                  },
    "sections":  [
                     {
                         "id":  "proposito-del-assessment-de-madurez",
                         "title":  "Propósito del assessment de madurez",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evaluación de madurez determina qué tan institucionalizadas se encuentran las capacidades que soportan actualmente el ciclo de Producto de SEIF.",
                                            "source":  {
                                                           "locator":  "P1592",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La madurez no evalúa la calidad individual de las personas ni el nivel técnico de cada equipo. Evalúa si una capacidad depende principalmente de conocimiento individual y acuerdos contextuales o si opera mediante prácticas compartidas, repetibles, medibles y sostenibles.",
                                            "source":  {
                                                           "locator":  "P1593",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La escala utilizada es:",
                                            "source":  {
                                                           "locator":  "P1594",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-013",
                                                          "caption":  "Propósito del assessment de madurez",
                                                          "kind":  "maturity",
                                                          "headers":  [
                                                                          "Nivel",
                                                                          "Denominación",
                                                                          "Característica"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1",
                                                                           "Inicial",
                                                                           "La práctica es reactiva, informal o depende principalmente de individuos"
                                                                       ],
                                                                       [
                                                                           "2",
                                                                           "Repetible",
                                                                           "La práctica existe y se utiliza, pero su aplicación varía según equipo, iniciativa o contexto"
                                                                       ],
                                                                       [
                                                                           "3",
                                                                           "Definido",
                                                                           "Existe una forma común de operar, con responsabilidades, criterios y artefactos conocidos"
                                                                       ],
                                                                       [
                                                                           "4",
                                                                           "Gestionado",
                                                                           "La capacidad se mide sistemáticamente y las métricas generan decisiones y acciones"
                                                                       ],
                                                                       [
                                                                           "5",
                                                                           "Optimizado",
                                                                           "La organización aprende, experimenta y mejora continuamente la capacidad con evidencia"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T13",
                                                                         "title":  "7. Maturity Assessment"
                                                                     },
                                                          "assessmentLabel":  "Valoración del assessment — pendiente de validación",
                                                          "validationStatus":  "pending"
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia obtenida durante las entrevistas concentra a SEIF principalmente en Nivel 2 — Repetible, con algunas capacidades aproximándose a Nivel 3.",
                                            "source":  {
                                                           "locator":  "P1595",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto es coherente con el diagnóstico general: las prácticas existen, pero todavía no operan bajo un sistema común suficientemente estabilizado.",
                                            "source":  {
                                                           "locator":  "P1596",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1591",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "maturity-heatmap-consolidado",
                         "title":  "Maturity Heatmap consolidado",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-014",
                                                          "caption":  "Maturity Heatmap consolidado",
                                                          "kind":  "maturity",
                                                          "headers":  [
                                                                          "Capacidad",
                                                                          "Madurez AS-IS",
                                                                          "Evidencia del assessment",
                                                                          "Diagnóstico"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Estrategia de Producto",
                                                                           "2.5 / 5",
                                                                           "Existe orientación explícita hacia Outcomes, TTV, adherencia y criterios de éxito",
                                                                           "La intención estratégica está definida; falta convertirla en reglas operativas comunes"
                                                                       ],
                                                                       [
                                                                           "Outcome Management",
                                                                           "2 / 5",
                                                                           "El concepto se utiliza y está documentado metodológicamente",
                                                                           "La aplicación y medición no son todavía uniformes entre iniciativas"
                                                                       ],
                                                                       [
                                                                           "Demand / Opportunity Intake",
                                                                           "2 / 5",
                                                                           "La demanda llega desde clientes, CS, Soporte, Marketing, liderazgo, Producto y Tecnología",
                                                                           "Las señales existen, pero no se representan bajo un estándar común"
                                                                       ],
                                                                       [
                                                                           "Product Discovery",
                                                                           "2 / 5",
                                                                           "Producto y UX realizan investigación, entrevistas, prototipos y validaciones",
                                                                           "Existe capacidad, pero la profundidad y obligatoriedad varían"
                                                                       ],
                                                                       [
                                                                           "UX Research \u0026 Validation",
                                                                           "2.5 / 5",
                                                                           "Se utilizan prototipos, validaciones y actividades de investigación",
                                                                           "Prácticas relevantes ya están presentes; falta integración end-to-end consistente"
                                                                       ],
                                                                       [
                                                                           "Priorización",
                                                                           "2 / 5",
                                                                           "Producto considera cliente, uso, alcance y necesidad; Desarrollo considera capacidad y dependencias",
                                                                           "Los criterios existen, pero están distribuidos"
                                                                       ],
                                                                       [
                                                                           "Gestión de células",
                                                                           "2 / 5",
                                                                           "Existen células multidisciplinarias orientadas a objetivos",
                                                                           "La estructura existe; faltan reglas homogéneas de operación y decisión"
                                                                       ],
                                                                       [
                                                                           "Delivery Management",
                                                                           "2 / 5",
                                                                           "Desarrollo cuenta con prácticas de planificación, construcción y gestión de capacidad",
                                                                           "La forma de trabajo ha cambiado en diferentes momentos y requiere estabilización"
                                                                       ],
                                                                       [
                                                                           "Reliability / SRE",
                                                                           "2.5 / 5",
                                                                           "Existe capacidad explícita de SRE, gestión operativa y conciencia de deuda técnica",
                                                                           "Capacidad especializada presente; necesita mayor integración con decisiones de Producto"
                                                                       ],
                                                                       [
                                                                           "Gestión de deuda técnica",
                                                                           "2 / 5",
                                                                           "SRE reconoce deuda técnica relevante",
                                                                           "La deuda es visible, pero no se evidenció un mecanismo transversal para balancearla con inversión funcional"
                                                                       ],
                                                                       [
                                                                           "Soporte / Product Feedback",
                                                                           "2 / 5",
                                                                           "Soporte posee conocimiento directo de incidencias y fricciones",
                                                                           "La señal existe; su conversión sistemática en aprendizaje de Producto es limitada"
                                                                       ],
                                                                       [
                                                                           "Customer Success",
                                                                           "2 / 5",
                                                                           "CS acompaña implementación, uso y adopción y eleva solicitudes",
                                                                           "Existe gestión de cliente; falta consolidar activación, adherencia, riesgo y valor como sistema"
                                                                       ],
                                                                       [
                                                                           "Customer Autonomy",
                                                                           "1.5–2 / 5",
                                                                           "SRE y CS describieron dependencias operativas y de administración",
                                                                           "La autonomía todavía no opera como una dimensión explícita de Producto"
                                                                       ],
                                                                       [
                                                                           "Marketing / Market Intelligence",
                                                                           "2 / 5",
                                                                           "Marketing está estructurándose y plantea validación temprana de mercado",
                                                                           "La capacidad existe en evolución, todavía con integración parcial al ciclo de Producto"
                                                                       ],
                                                                       [
                                                                           "Product Analytics",
                                                                           "2 / 5",
                                                                           "Existen dashboards de clientes, licencias, usuarios, proyectos, módulos y uso",
                                                                           "Se ha ganado visibilidad; todavía falta conectar consistentemente señal con acción"
                                                                       ],
                                                                       [
                                                                           "Learning Loop",
                                                                           "2 / 5",
                                                                           "Existen datos y feedback en diferentes áreas",
                                                                           "El aprendizaje está distribuido y no converge siempre en una decisión común"
                                                                       ],
                                                                       [
                                                                           "Governance / Decision Rights",
                                                                           "2 / 5",
                                                                           "Diferentes funciones participan en decisión y ejecución",
                                                                           "La colaboración existe; accountability y derechos de decisión requieren mayor definición"
                                                                       ],
                                                                       [
                                                                           "Tooling / Traceability",
                                                                           "1.5 / 5",
                                                                           "Información distribuida entre hojas de cálculo, herramientas técnicas, dashboards y documentación",
                                                                           "No existe trazabilidad end-to-end consolidada"
                                                                       ],
                                                                       [
                                                                           "Change Management",
                                                                           "2 / 5",
                                                                           "Desarrollo y liderazgo describen diferentes cambios de forma de trabajo a lo largo del tiempo",
                                                                           "Existe capacidad de cambio, pero con riesgo de introducir variaciones antes de estabilizar prácticas"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T14",
                                                                         "title":  "7. Maturity Assessment"
                                                                     },
                                                          "assessmentLabel":  "Valoración del assessment — pendiente de validación",
                                                          "validationStatus":  "pending"
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1598",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "lectura-de-madurez-por-dominio",
                         "title":  "Lectura de madurez por dominio",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dominio A — Dirección y gestión de Producto",
                                            "source":  {
                                                           "locator":  "P1601",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Madurez predominante: Nivel 2",
                                            "source":  {
                                                           "locator":  "P1602",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha avanzado significativamente en lenguaje y orientación estratégica. La adopción de Outcomes, TTV, adherencia y criterios de éxito demuestra que la organización ya reconoce que entregar funcionalidades no equivale a generar valor.",
                                            "source":  {
                                                           "locator":  "P1603",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha se encuentra en la operacionalización.",
                                            "source":  {
                                                           "locator":  "P1604",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe evidencia de que todas las iniciativas recorran de manera sistemática una misma secuencia de:",
                                            "source":  {
                                                           "locator":  "P1605",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema → evidencia → Outcome → criterio de éxito → validación → medición.",
                                            "source":  {
                                                           "locator":  "P1606",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1607",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La estrategia de Producto está más madura que el sistema utilizado para ejecutarla.",
                                            "source":  {
                                                           "locator":  "P1608",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1600",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "dominio-b-discovery-y-validacion",
                         "title":  "Dominio B — Discovery y validación",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Madurez predominante: Nivel 2, con prácticas puntuales cercanas a Nivel 3",
                                            "source":  {
                                                           "locator":  "P1611",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX y Producto ya realizan actividades propias de una práctica madura de Discovery:",
                                            "source":  {
                                                           "locator":  "P1612",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "investigación;",
                                                          "entrevistas;",
                                                          "entendimiento de problemáticas;",
                                                          "prototipado;",
                                                          "validación."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1613",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe evidencia de que estas prácticas estén ausentes.",
                                            "source":  {
                                                           "locator":  "P1618",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La diferencia radica en su consistencia y en el momento en que se utilizan.",
                                            "source":  {
                                                           "locator":  "P1619",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1620",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery funciona actualmente como una capacidad disponible, no todavía como una disciplina mínima común que reduzca incertidumbre antes del Delivery.",
                                            "source":  {
                                                           "locator":  "P1621",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1610",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "dominio-c-priorizacion-y-gobierno",
                         "title":  "Dominio C — Priorización y gobierno",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Madurez predominante: Nivel 2",
                                            "source":  {
                                                           "locator":  "P1624",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran criterios reales de decisión:",
                                            "source":  {
                                                           "locator":  "P1625",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto incorpora perspectiva de cliente, uso, alcance y necesidad.",
                                            "source":  {
                                                           "locator":  "P1626",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo incorpora capacidad, dependencia y factibilidad.",
                                            "source":  {
                                                           "locator":  "P1627",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo aporta contexto estratégico.",
                                            "source":  {
                                                           "locator":  "P1628",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La debilidad no está en ausencia de criterio, sino en la falta de un mecanismo común que integre estas perspectivas y deje trazabilidad de la decisión.",
                                            "source":  {
                                                           "locator":  "P1629",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1630",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La decisión depende todavía más de la interacción entre actores que de una regla organizacional explícita y repetible.",
                                            "source":  {
                                                           "locator":  "P1631",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1623",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "dominio-d-delivery-y-confiabilidad",
                         "title":  "Dominio D — Delivery y confiabilidad",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Madurez predominante: Nivel 2–3",
                                            "source":  {
                                                           "locator":  "P1634",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo y SRE representan capacidades establecidas dentro de SEIF.",
                                            "source":  {
                                                           "locator":  "P1635",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe experiencia acumulada en:",
                                            "source":  {
                                                           "locator":  "P1636",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "planificación;",
                                                          "desarrollo;",
                                                          "despliegue;",
                                                          "operación;",
                                                          "confiabilidad;",
                                                          "métricas DORA;",
                                                          "sostenibilidad técnica."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1637",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La entrevista de Desarrollo evidenció cambios sucesivos en mecanismos de trabajo, mientras que SRE señaló deuda técnica relevante.",
                                            "source":  {
                                                           "locator":  "P1644",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1645",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad técnica existe, pero el sistema de entrega se encuentra condicionado por dos elementos:",
                                            "source":  {
                                                           "locator":  "P1646",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "variabilidad upstream y necesidad de estabilización del modelo de trabajo.",
                                            "source":  {
                                                           "locator":  "P1647",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe evidencia suficiente para clasificar Delivery como causa primaria de los tiempos de iteración observados.",
                                            "source":  {
                                                           "locator":  "P1648",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1633",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "dominio-e-customer-value",
                         "title":  "Dominio E — Customer Value",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Madurez predominante: Nivel 2",
                                            "source":  {
                                                           "locator":  "P1651",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success ya trabaja sobre implementación, acompañamiento y utilización.",
                                            "source":  {
                                                           "locator":  "P1652",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización también ha conceptualizado:",
                                            "source":  {
                                                           "locator":  "P1653",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "TTV;",
                                                          "activación;",
                                                          "adherencia;",
                                                          "criterios de éxito."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1654",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, todavía no se evidenció un sistema consolidado que conecte para cada cliente o capacidad:",
                                            "source":  {
                                                           "locator":  "P1658",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implementado → Activado → Adoptado → Adherente → En riesgo / Saludable.",
                                            "source":  {
                                                           "locator":  "P1659",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1660",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha comenzado a pasar de Customer Support/Implementation hacia Customer Value Management, pero la capacidad todavía se encuentra en construcción.",
                                            "source":  {
                                                           "locator":  "P1661",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1650",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "dominio-f-datos-y-aprendizaje",
                         "title":  "Dominio F — Datos y aprendizaje",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Madurez predominante: Nivel 2",
                                            "source":  {
                                                           "locator":  "P1664",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los dashboards actuales representan un cambio importante respecto del modelo histórico descrito durante el kickoff.",
                                            "source":  {
                                                           "locator":  "P1665",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización ya puede observar información que anteriormente no estaba disponible o consolidada.",
                                            "source":  {
                                                           "locator":  "P1666",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, el nivel siguiente de madurez requiere convertir:",
                                            "source":  {
                                                           "locator":  "P1667",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "dato → diagnóstico → decisión → acción → verificación.",
                                            "source":  {
                                                           "locator":  "P1668",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1669",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha mejorado su observabilidad del producto más rápido que su capacidad de operar sistemáticamente a partir de esa observabilidad.",
                                            "source":  {
                                                           "locator":  "P1670",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1663",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "dominio-g-organizacion-y-sostenibilidad-del-cambio",
                         "title":  "Dominio G — Organización y sostenibilidad del cambio",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Madurez predominante: Nivel 2",
                                            "source":  {
                                                           "locator":  "P1673",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF demuestra alta disposición al cambio.",
                                            "source":  {
                                                           "locator":  "P1674",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización ha probado:",
                                            "source":  {
                                                           "locator":  "P1675",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "diferentes metodologías;",
                                                          "células;",
                                                          "nuevos conceptos;",
                                                          "mecanismos de planificación;",
                                                          "métricas;",
                                                          "formas de organización."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1676",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evidencia no muestra inmovilidad organizacional.",
                                            "source":  {
                                                           "locator":  "P1682",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Muestra el riesgo opuesto.",
                                            "source":  {
                                                           "locator":  "P1683",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P1684",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF tiene capacidad para cambiar, pero todavía necesita fortalecer su capacidad para estabilizar.",
                                            "source":  {
                                                           "locator":  "P1685",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La consolidación constituye actualmente una capacidad de transformación tan importante como la experimentación.",
                                            "source":  {
                                                           "locator":  "P1686",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1672",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "perfil-global-de-madurez",
                         "title":  "Perfil global de madurez",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización presenta el siguiente patrón:",
                                            "source":  {
                                                           "locator":  "P1689",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 1 — Inicial: puntual, principalmente en trazabilidad integral y algunas dimensiones de autonomía.",
                                            "source":  {
                                                           "locator":  "P1690",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 2 — Repetible: nivel dominante.",
                                            "source":  {
                                                           "locator":  "P1691",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 3 — Definido: existen elementos aislados y prácticas específicas, pero no todavía como Operating System completo.",
                                            "source":  {
                                                           "locator":  "P1692",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 4 — Gestionado: no existe evidencia suficiente para asignar este nivel a una capacidad end-to-end.",
                                            "source":  {
                                                           "locator":  "P1693",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nivel 5 — Optimizado: no corresponde al estado actual observado.",
                                            "source":  {
                                                           "locator":  "P1694",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico consolidado",
                                            "source":  {
                                                           "locator":  "P1695",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no enfrenta una brecha de madurez causada por ausencia de capacidades básicas. El desafío es llevar capacidades actualmente repetibles a un Nivel 3 definido, conectado y estable.",
                                            "source":  {
                                                           "locator":  "P1696",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El salto requerido es fundamentalmente de:",
                                            "source":  {
                                                           "locator":  "P1697",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "variabilidad → consistencia",
                                            "source":  {
                                                           "locator":  "P1698",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "prácticas aisladas → sistema",
                                            "source":  {
                                                           "locator":  "P1699",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "información → decisiones",
                                            "source":  {
                                                           "locator":  "P1700",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "colaboración → ownership",
                                            "source":  {
                                                           "locator":  "P1701",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "release → valor",
                                            "source":  {
                                                           "locator":  "P1702",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1688",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     },
                     {
                         "id":  "brecha-de-madurez-prioritaria",
                         "title":  "Brecha de madurez prioritaria",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La diferencia entre AS-IS y un estado sostenible no requiere que todas las capacidades lleguen a Nivel 4 o 5.",
                                            "source":  {
                                                           "locator":  "P1705",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Para el tamaño y contexto actual de SEIF, la brecha crítica se concentra en alcanzar Nivel 3 — Definido en:",
                                            "source":  {
                                                           "locator":  "P1706",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Opportunity Intake.",
                                                          "Discovery.",
                                                          "Priorización.",
                                                          "Decision Rights.",
                                                          "Delivery Readiness.",
                                                          "Release Readiness.",
                                                          "Adopción.",
                                                          "Learning Loop.",
                                                          "Product Analytics accionable.",
                                                          "Trazabilidad del ciclo."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1707",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diagnóstico no evidencia necesidad de sofisticación adicional antes de consolidar estas bases.",
                                            "source":  {
                                                           "locator":  "P1717",
                                                           "title":  "7. Maturity Assessment"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1704",
                                             "title":  "7. Maturity Assessment"
                                         }
                                     ]
                     }
                 ],
    "editorialNotices":  [
                              {
                                  "title":  "Valoración del assessment — pendiente de validación",
                                  "status":  "PENDING VALIDATION",
                                  "detail":  "Todo score, nivel, maturity rating y perfil global de este capítulo es una valoración del assessment; no es un baseline aprobado por SEIF."
                              }
                          ],
    "clientValidations":  [
                               {
                                   "id":  "CL-01",
                                   "subject":  "19 dimensiones + perfil global de madurez",
                                   "status":  "CLIENT VALIDATION REQUIRED"
                               }
                           ],
    "related":  [
                    "current-state",
                    "root-causes",
                    "roadmap"
                ],
    "source":  {
                   "title":  "7. Maturity Assessment",
                   "locator":  "P1590–P1717",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
