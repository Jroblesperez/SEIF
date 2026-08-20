import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "executive-summary",
    "group":  "Assessment",
    "title":  "Resumen ejecutivo",
    "sourceTitle":  "1. Resumen Ejecutivo",
    "eyebrow":  "01 · Diagnóstico",
    "summary":  "SEIF cuenta con capacidades y prácticas relevantes, pero todavía no operan como un único sistema integrado de producto.",
    "takeaway":  "La oportunidad consiste en integrar capacidades existentes mediante una forma ligera de capturar evidencia, decidir, entregar, lograr adopción y aprender.",
    "executive":  {
                      "primaryVisual":  "flow",
                      "keyFindings":  [
                                          "La dirección hacia Outcomes ya existe y debe preservarse.",
                                          "Las interfaces entre demanda, Discovery, decisión, Delivery, adopción y aprendizaje muestran variabilidad.",
                                          "La información relevante está distribuida entre varias funciones.",
                                          "El cambio recomendado es sistémico y no una evaluación de personas o áreas."
                                      ],
                      "sources":  [
                                      {
                                          "locator":  "P56–P364",
                                          "title":  "1. Resumen Ejecutivo"
                                      }
                                  ],
                      "evidenceConfidence":  "medium",
                      "implication":  "Diseñar un Product Operating System mínimo que conecte capacidades existentes sin introducir otro framework completo.",
                      "evidenceStatus":  "pending"
                  },
    "sections":  [
                     {
                         "id":  "contexto",
                         "title":  "Contexto",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF es una compañía tecnológica orientada a la gestión de seguridad privada, con una plataforma que soporta diferentes procesos operativos y administrativos de sus clientes.",
                                            "source":  {
                                                           "locator":  "P58",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización viene evolucionando su forma de gestionar Producto hacia conceptos como:",
                                            "source":  {
                                                           "locator":  "P59",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcomes, criterios de éxito, momentos de verdad, Time to Value, adherencia, células multidisciplinarias y métricas DORA. [E]",
                                            "source":  {
                                                           "locator":  "P60",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas realizadas con Producto, UX/UI, Desarrollo, SRE/Soporte, Marketing y Customer Success muestran que varias de estas capacidades ya existen parcial o conceptualmente dentro de SEIF, pero no funcionan todavía como un único sistema operativo integrado. [I]",
                                            "source":  {
                                                           "locator":  "P61",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p60-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Outcomes, criterios de éxito, momentos de verdad, Time to Value, adherencia, células multidisciplinarias y métricas DORA.",
                                              "sourceLocator":  "P60",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p61-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Las entrevistas realizadas con Producto, UX/UI, Desarrollo, SRE/Soporte, Marketing y Customer Success muestran que varias de estas capacidades ya existen parcial o conceptualmente dentro de SEIF, pero no funcionan todavía como un único sistema operativo integrado.",
                                              "sourceLocator":  "P61",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P57",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "conclusion-ejecutiva",
                         "title":  "Conclusión ejecutiva",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no necesita adoptar otra metodología. Necesita consolidar una forma simple, común y sostenible de convertir señales de clientes y negocio en resultados medibles. [I]",
                                            "source":  {
                                                           "locator":  "P64",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El principal reto identificado no está exclusivamente en Producto, Desarrollo, UX, SRE, Marketing o Customer Success.",
                                            "source":  {
                                                           "locator":  "P65",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La principal oportunidad está en cómo se conectan estas capacidades a través del ciclo de producto. [I]",
                                            "source":  {
                                                           "locator":  "P66",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran variabilidad principalmente en:",
                                            "source":  {
                                                           "locator":  "P67",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entrada de demanda → Discovery → decisión → validación → Delivery → Release → adopción → medición → aprendizaje.",
                                            "source":  {
                                                           "locator":  "P68",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, recomendamos construir un Product Operating System ligero, diseñado específicamente para el tamaño y contexto de SEIF. [R]",
                                            "source":  {
                                                           "locator":  "P69",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p64-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "SEIF no necesita adoptar otra metodología. Necesita consolidar una forma simple, común y sostenible de convertir señales de clientes y negocio en resultados medibles.",
                                              "sourceLocator":  "P64",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p66-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "La principal oportunidad está en cómo se conectan estas capacidades a través del ciclo de producto.",
                                              "sourceLocator":  "P66",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p69-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Por tanto, recomendamos construir un Product Operating System ligero, diseñado específicamente para el tamaño y contexto de SEIF.",
                                              "sourceLocator":  "P69",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P63",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "tesis-central-del-diagnostico",
                         "title":  "Tesis central del diagnóstico",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF presenta una situación interesante:",
                                            "source":  {
                                                           "locator":  "P72",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No parte de cero.",
                                            "source":  {
                                                           "locator":  "P73",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ya existen capacidades y prácticas relevantes. [E]",
                                            "source":  {
                                                           "locator":  "P74",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto está evolucionando hacia Outcomes.",
                                            "source":  {
                                                           "locator":  "P75",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX realiza investigación, prototipado y validaciones en determinados casos.",
                                            "source":  {
                                                           "locator":  "P76",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo posee conocimiento del dominio y mecanismos establecidos de construcción.",
                                            "source":  {
                                                           "locator":  "P77",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE gestiona despliegue, confiabilidad y conoce riesgos/deuda técnica.",
                                            "source":  {
                                                           "locator":  "P78",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte posee señales directas de problemas operativos.",
                                            "source":  {
                                                           "locator":  "P79",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success conoce patrones de adopción y acompañamiento.",
                                            "source":  {
                                                           "locator":  "P80",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing está desarrollando conocimiento de mercado y plantea validaciones antes del desarrollo.",
                                            "source":  {
                                                           "locator":  "P81",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema es la consistencia.",
                                            "source":  {
                                                           "locator":  "P82",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas capacidades no siempre están conectadas mediante criterios comunes de entrada, decisión, salida, ownership, evidencia y medición. [I]",
                                            "source":  {
                                                           "locator":  "P83",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p74-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Ya existen capacidades y prácticas relevantes.",
                                              "sourceLocator":  "P74",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p83-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Estas capacidades no siempre están conectadas mediante criterios comunes de entrada, decisión, salida, ownership, evidencia y medición.",
                                              "sourceLocator":  "P83",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P71",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "el-problema-estructural",
                         "title":  "El problema estructural",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diagnóstico preliminar puede resumirse de esta manera:",
                                            "source":  {
                                                           "locator":  "P86",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "AS-IS",
                                            "source":  {
                                                           "locator":  "P87",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Muchas señales → diferentes mecanismos → diferentes decisiones → desarrollo → release → acompañamiento → feedback distribuido",
                                            "source":  {
                                                           "locator":  "P88",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema",
                                            "source":  {
                                                           "locator":  "P89",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización dispone de conocimiento, talento y datos, pero existen interfaces variables entre las funciones que participan en la generación de valor. [I]",
                                            "source":  {
                                                           "locator":  "P90",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TO-BE",
                                            "source":  {
                                                           "locator":  "P91",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Señales → Discover → Decide → Validate → Deliver → Release → Adopt → Measure \u0026 Learn",
                                            "source":  {
                                                           "locator":  "P92",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Todo conectado mediante:",
                                            "source":  {
                                                           "locator":  "P93",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia + Outcomes + Ownership + métricas + reglas mínimas de decisión. [R]",
                                            "source":  {
                                                           "locator":  "P94",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p90-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "La organización dispone de conocimiento, talento y datos, pero existen interfaces variables entre las funciones que participan en la generación de valor.",
                                              "sourceLocator":  "P90",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p94-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Evidencia + Outcomes + Ownership + métricas + reglas mínimas de decisión.",
                                              "sourceLocator":  "P94",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P85",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "los-10-hallazgos-ejecutivos",
                         "title":  "Los 10 hallazgos ejecutivos",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estos serán la columna vertebral del Assessment.",
                                            "source":  {
                                                           "locator":  "P97",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-001",
                                                          "caption":  "Los 10 hallazgos ejecutivos",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "#",
                                                                          "Hallazgo",
                                                                          "Tipo",
                                                                          "Relevancia"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "1",
                                                                           "La evolución hacia Outcomes es consistente con la dirección que SEIF quiere tomar",
                                                                           "E/I",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "2",
                                                                           "Existe una brecha entre el conocimiento conceptual y su ejecución consistente",
                                                                           "I",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "3",
                                                                           "La organización ha experimentado diferentes formas de trabajo y existe necesidad de estabilización",
                                                                           "E/I",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "4",
                                                                           "La demanda y las necesidades llegan desde múltiples fuentes",
                                                                           "E",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "5",
                                                                           "Discovery y validación existen, pero su aplicación no es uniforme",
                                                                           "E/I",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "6",
                                                                           "Los criterios de priorización existen, pero están distribuidos entre diferentes actores",
                                                                           "E/I",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "7",
                                                                           "Existen señales de dependencia operativa del cliente respecto de SEIF",
                                                                           "E",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "8",
                                                                           "Existe información relevante del cliente distribuida entre Producto, CS, Soporte, SRE y Marketing",
                                                                           "E/I",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "9",
                                                                           "SEIF está desarrollando capacidades de medición, pero aún debe conectarlas sistemáticamente con decisiones",
                                                                           "E/I",
                                                                           "Alta"
                                                                       ],
                                                                       [
                                                                           "10",
                                                                           "El tamaño y contexto de SEIF requieren un modelo ligero, no una estructura adicional de gobierno",
                                                                           "I/R",
                                                                           "Alta"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T1",
                                                                         "title":  "1. Resumen Ejecutivo"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P96",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-1-la-direccion-hacia-outcomes-es-correcta",
                         "title":  "Hallazgo 1 — La dirección hacia Outcomes es correcta",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia [E]",
                                            "source":  {
                                                           "locator":  "P100",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El modelo actual presentado por SEIF establece explícitamente que la organización quiere pasar de:",
                                            "source":  {
                                                           "locator":  "P101",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tareas → Funcionalidades → Valor → Outcome.",
                                            "source":  {
                                                           "locator":  "P102",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También se han definido conceptos como:",
                                            "source":  {
                                                           "locator":  "P103",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Outcome.",
                                                          "Criterio de éxito.",
                                                          "Momento de verdad.",
                                                          "TTV.",
                                                          "Adherencia.",
                                                          "Indicadores DORA."
                                                      ],
                                            "source":  {
                                                           "locator":  "P104",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas con Producto muestran además interés explícito en medir resultados y no únicamente funcionalidades entregadas.",
                                            "source":  {
                                                           "locator":  "P110",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P111",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No recomendamos reemplazar esta dirección.",
                                            "source":  {
                                                           "locator":  "P112",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema no es el concepto de Outcome.",
                                            "source":  {
                                                           "locator":  "P113",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El reto es convertirlo en una práctica suficientemente simple para que pueda utilizarse de manera recurrente durante el ciclo completo de Producto.",
                                            "source":  {
                                                           "locator":  "P114",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P115",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Product Operating System deberá utilizar Outcome como unidad de alineación, pero evitando que se convierta en documentación adicional.",
                                            "source":  {
                                                           "locator":  "P116",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada iniciativa relevante deberá poder responder mínimamente:",
                                            "source":  {
                                                           "locator":  "P117",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema → Usuario → Outcome → Evidencia → Métrica.",
                                            "source":  {
                                                           "locator":  "P118",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p100-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia",
                                              "sourceLocator":  "P100",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p111-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P111",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p115-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P115",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P99",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-2-strategy-to-execution-gap",
                         "title":  "Hallazgo 2 — Strategy-to-Execution Gap",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia [E]",
                                            "source":  {
                                                           "locator":  "P121",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto manifestó dificultades para convertir conceptos y prácticas de Producto en una operación consistente.",
                                            "source":  {
                                                           "locator":  "P122",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Al mismo tiempo, SEIF maneja conceptos relativamente avanzados de Product Management, UX, SRE y métricas.",
                                            "source":  {
                                                           "locator":  "P123",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P124",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe una brecha entre:",
                                            "source":  {
                                                           "locator":  "P125",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Saber cómo debería funcionar Producto",
                                            "source":  {
                                                           "locator":  "P126",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y",
                                            "source":  {
                                                           "locator":  "P127",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacer que esa forma de trabajar ocurra consistentemente.",
                                            "source":  {
                                                           "locator":  "P128",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha no parece ser principalmente de conocimiento.",
                                            "source":  {
                                                           "locator":  "P129",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es una brecha de operacionalización.",
                                            "source":  {
                                                           "locator":  "P130",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P131",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Blueprint debe concentrarse en:",
                                            "source":  {
                                                           "locator":  "P132",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "reglas mínimas;",
                                                          "ownership;",
                                                          "decisiones;",
                                                          "artefactos mínimos;",
                                                          "métricas;",
                                                          "herramientas;",
                                                          "rituales."
                                                      ],
                                            "source":  {
                                                           "locator":  "P133",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No en incorporar más teoría.",
                                            "source":  {
                                                           "locator":  "P140",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p121-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia",
                                              "sourceLocator":  "P121",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p124-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P124",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p131-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P131",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P120",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-3-fatiga-de-cambio-necesidad-de-estabilizacion",
                         "title":  "Hallazgo 3 — Fatiga de cambio / necesidad de estabilización",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia [E]",
                                            "source":  {
                                                           "locator":  "P143",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante la entrevista con Desarrollo se mencionaron diferentes cambios de metodología y forma de organización del trabajo.",
                                            "source":  {
                                                           "locator":  "P144",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También se describieron experiencias con diferentes mecanismos de planificación, sprints, story points y estructuras.",
                                            "source":  {
                                                           "locator":  "P145",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P146",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización presenta riesgo de introducir cambios más rápido de lo que consigue institucionalizarlos.",
                                            "source":  {
                                                           "locator":  "P147",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No concluimos que los cambios anteriores hayan sido incorrectos.",
                                            "source":  {
                                                           "locator":  "P148",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Concluimos que otro framework completo incrementaría el riesgo de fragmentación.",
                                            "source":  {
                                                           "locator":  "P149",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P150",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aplicar el principio:",
                                            "source":  {
                                                           "locator":  "P151",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Minimum Viable Operating Model.",
                                            "source":  {
                                                           "locator":  "P152",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implementar pocas reglas y sostenerlas antes de agregar sofisticación.",
                                            "source":  {
                                                           "locator":  "P153",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p143-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia",
                                              "sourceLocator":  "P143",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p146-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P146",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p150-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P150",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P142",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-4-demanda-fragmentada",
                         "title":  "Hallazgo 4 — Demanda fragmentada",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia [E]",
                                            "source":  {
                                                           "locator":  "P156",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante las entrevistas se identificaron señales provenientes de:",
                                            "source":  {
                                                           "locator":  "P157",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "clientes;",
                                                          "Customer Success;",
                                                          "Soporte;",
                                                          "Marketing;",
                                                          "Producto;",
                                                          "liderazgo;",
                                                          "tecnología;",
                                                          "datos."
                                                      ],
                                            "source":  {
                                                           "locator":  "P158",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX manifestó además que existen diferentes formas mediante las cuales puede llegar trabajo hacia Desarrollo.",
                                            "source":  {
                                                           "locator":  "P166",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P167",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tener múltiples fuentes no es el problema.",
                                            "source":  {
                                                           "locator":  "P168",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una organización de Producto debe escuchar múltiples fuentes.",
                                            "source":  {
                                                           "locator":  "P169",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema aparece cuando esas señales no pasan por un mecanismo común que permita:",
                                            "source":  {
                                                           "locator":  "P170",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "entender → comparar → decidir.",
                                            "source":  {
                                                           "locator":  "P171",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P172",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Crear un:",
                                            "source":  {
                                                           "locator":  "P173",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Unified Opportunity Intake",
                                            "source":  {
                                                           "locator":  "P174",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No significa que exista un único canal físico.",
                                            "source":  {
                                                           "locator":  "P175",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Significa que todas las oportunidades relevantes terminen representadas mediante una estructura comparable:",
                                            "source":  {
                                                           "locator":  "P176",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema",
                                            "source":  {
                                                           "locator":  "P177",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usuario/segmento",
                                            "source":  {
                                                           "locator":  "P178",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuente",
                                            "source":  {
                                                           "locator":  "P179",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia disponible",
                                            "source":  {
                                                           "locator":  "P180",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Impacto esperado",
                                            "source":  {
                                                           "locator":  "P181",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p156-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia",
                                              "sourceLocator":  "P156",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p167-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P167",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p172-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P172",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P155",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-5-discovery-existe-pero-es-variable",
                         "title":  "Hallazgo 5 — Discovery existe, pero es variable",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia [E]",
                                            "source":  {
                                                           "locator":  "P184",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX indicó que ya realiza prácticas como:",
                                            "source":  {
                                                           "locator":  "P185",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "investigación;",
                                                          "entrevistas;",
                                                          "prototipos;",
                                                          "MVP;",
                                                          "validaciones con clientes."
                                                      ],
                                            "source":  {
                                                           "locator":  "P186",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto también realiza actividades de entendimiento de necesidades.",
                                            "source":  {
                                                           "locator":  "P191",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P192",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sería incorrecto afirmar:",
                                            "source":  {
                                                           "locator":  "P193",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "\"SEIF no hace Discovery.\"",
                                            "source":  {
                                                           "locator":  "P194",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí lo hace.",
                                            "source":  {
                                                           "locator":  "P195",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La oportunidad consiste en que Discovery deje de depender del caso, célula o persona y tenga un estándar mínimo compartido.",
                                            "source":  {
                                                           "locator":  "P196",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P197",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Crear el:",
                                            "source":  {
                                                           "locator":  "P198",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Minimum Discovery Standard",
                                            "source":  {
                                                           "locator":  "P199",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con cinco preguntas:",
                                            "source":  {
                                                           "locator":  "P200",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿Quién tiene el problema?",
                                                          "¿Qué problema observamos?",
                                                          "¿Qué evidencia tenemos?",
                                                          "¿Qué Outcome queremos modificar?",
                                                          "¿Cuál es la manera más económica de reducir incertidumbre?"
                                                      ],
                                            "source":  {
                                                           "locator":  "P201",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p184-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia",
                                              "sourceLocator":  "P184",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p192-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P192",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p197-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P197",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P183",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-6-la-priorizacion-necesita-una-regla-comun",
                         "title":  "Hallazgo 6 — La priorización necesita una regla común",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia [E]",
                                            "source":  {
                                                           "locator":  "P208",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto ya utiliza elementos como alcance, solicitudes, utilización y necesidades de clientes.",
                                            "source":  {
                                                           "locator":  "P209",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo considera capacidad, dependencias y viabilidad.",
                                            "source":  {
                                                           "locator":  "P210",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P211",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe ausencia total de priorización.",
                                            "source":  {
                                                           "locator":  "P212",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen criterios distribuidos.",
                                            "source":  {
                                                           "locator":  "P213",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema aparece cuando diferentes actores pueden interpretar de manera diferente qué constituye una prioridad.",
                                            "source":  {
                                                           "locator":  "P214",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P215",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No introducir inicialmente WSJF, RICE u otro framework pesado.",
                                            "source":  {
                                                           "locator":  "P216",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Utilizar cinco dimensiones:",
                                            "source":  {
                                                           "locator":  "P217",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-002",
                                                          "caption":  "Hallazgo 6 — La priorización necesita una regla común",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Pregunta"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Outcome",
                                                                           "¿Qué resultado modifica?"
                                                                       ],
                                                                       [
                                                                           "Evidence",
                                                                           "¿Qué sabemos realmente?"
                                                                       ],
                                                                       [
                                                                           "Reach",
                                                                           "¿A quién/cuántos impacta?"
                                                                       ],
                                                                       [
                                                                           "Value",
                                                                           "¿Qué valor genera?"
                                                                       ],
                                                                       [
                                                                           "Feasibility",
                                                                           "¿Qué implica hacerlo?"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T2",
                                                                         "title":  "1. Resumen Ejecutivo"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado:",
                                            "source":  {
                                                           "locator":  "P218",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Explorar / Priorizar / Esperar / Descartar.",
                                            "source":  {
                                                           "locator":  "P219",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p208-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia",
                                              "sourceLocator":  "P208",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p211-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P211",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p215-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P215",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P207",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-7-autonomia-del-cliente",
                         "title":  "Hallazgo 7 — Autonomía del cliente",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este hallazgo tiene especial relevancia porque aparece desde dos perspectivas diferentes.",
                                            "source":  {
                                                           "locator":  "P222",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia SRE [E]",
                                            "source":  {
                                                           "locator":  "P223",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE manifestó dependencias técnicas/operativas mediante las cuales determinadas acciones requieren intervención de SEIF.",
                                            "source":  {
                                                           "locator":  "P224",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia Customer Success [E]",
                                            "source":  {
                                                           "locator":  "P225",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS manifestó una dependencia importante del administrador del cliente y necesidades relevantes de acompañamiento/configuración.",
                                            "source":  {
                                                           "locator":  "P226",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P227",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ambas evidencias sugieren un posible problema transversal:",
                                            "source":  {
                                                           "locator":  "P228",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La obtención de valor puede depender excesivamente de intervención humana o conocimiento especializado.",
                                            "source":  {
                                                           "locator":  "P229",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto puede afectar potencialmente:",
                                            "source":  {
                                                           "locator":  "P230",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "TTV;",
                                                          "adopción;",
                                                          "escalabilidad;",
                                                          "costo de atención;",
                                                          "experiencia."
                                                      ],
                                            "source":  {
                                                           "locator":  "P231",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No afirmamos todavía el impacto cuantitativo. [V]",
                                            "source":  {
                                                           "locator":  "P236",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P237",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incorporar Customer Autonomy como criterio de diseño y medición.",
                                            "source":  {
                                                           "locator":  "P238",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No significa construir inmediatamente \"self-service para todo\".",
                                            "source":  {
                                                           "locator":  "P239",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Significa preguntar sistemáticamente:",
                                            "source":  {
                                                           "locator":  "P240",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué intervención podría eliminarse, simplificarse, automatizarse o incorporarse al propio producto?",
                                            "source":  {
                                                           "locator":  "P241",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p223-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia SRE",
                                              "sourceLocator":  "P223",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p225-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia Customer Success",
                                              "sourceLocator":  "P225",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p227-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P227",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p236-v",
                                              "sourceMark":  "V",
                                              "classification":  "H1",
                                              "statement":  "No afirmamos todavía el impacto cuantitativo.",
                                              "sourceLocator":  "P236",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p237-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P237",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P221",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-8-informacion-distribuida",
                         "title":  "Hallazgo 8 — Información distribuida",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia [E]",
                                            "source":  {
                                                           "locator":  "P244",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran diferentes fuentes de conocimiento:",
                                            "source":  {
                                                           "locator":  "P245",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS → adopción y conversaciones con clientes.",
                                            "source":  {
                                                           "locator":  "P246",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte → incidencias y fricciones.",
                                            "source":  {
                                                           "locator":  "P247",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE → confiabilidad y comportamiento operativo.",
                                            "source":  {
                                                           "locator":  "P248",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing → mercado.",
                                            "source":  {
                                                           "locator":  "P249",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX → investigación y validación.",
                                            "source":  {
                                                           "locator":  "P250",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto → iniciativas, objetivos y métricas.",
                                            "source":  {
                                                           "locator":  "P251",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P252",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no necesariamente tiene un problema de ausencia de información.",
                                            "source":  {
                                                           "locator":  "P253",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiene una oportunidad de convergencia del conocimiento.",
                                            "source":  {
                                                           "locator":  "P254",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P255",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diseñar un mecanismo único de aprendizaje de Producto que permita convertir señales dispersas en decisiones.",
                                            "source":  {
                                                           "locator":  "P256",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No crear un repositorio gigante.",
                                            "source":  {
                                                           "locator":  "P257",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Crear trazabilidad:",
                                            "source":  {
                                                           "locator":  "P258",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Señal → Opportunity → Outcome → Decisión → Resultado → Aprendizaje.",
                                            "source":  {
                                                           "locator":  "P259",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p244-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia",
                                              "sourceLocator":  "P244",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p252-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P252",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p255-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P255",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P243",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-9-de-dashboards-a-decisiones",
                         "title":  "Hallazgo 9 — De dashboards a decisiones",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia [E]",
                                            "source":  {
                                                           "locator":  "P262",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya dispone de dashboards sobre:",
                                            "source":  {
                                                           "locator":  "P263",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "clientes;",
                                                          "licencias;",
                                                          "utilización;",
                                                          "usuarios;",
                                                          "proyectos;",
                                                          "módulos;",
                                                          "perfiles."
                                                      ],
                                            "source":  {
                                                           "locator":  "P264",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success también utiliza referencias de adopción.",
                                            "source":  {
                                                           "locator":  "P271",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P272",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La siguiente evolución no debería ser simplemente generar más dashboards.",
                                            "source":  {
                                                           "locator":  "P273",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Debe ser:",
                                            "source":  {
                                                           "locator":  "P274",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "hacer accionables las señales existentes.",
                                            "source":  {
                                                           "locator":  "P275",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P276",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Toda métrica crítica deberá tener:",
                                            "source":  {
                                                           "locator":  "P277",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Indicador → Umbral → Owner → Acción.",
                                            "source":  {
                                                           "locator":  "P278",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplo conceptual:",
                                            "source":  {
                                                           "locator":  "P279",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopción baja",
                                            "source":  {
                                                           "locator":  "P280",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P281",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Señal de riesgo",
                                            "source":  {
                                                           "locator":  "P282",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P283",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Owner analiza causa",
                                            "source":  {
                                                           "locator":  "P284",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P285",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Onboarding / UX / configuración / funcionalidad / cliente",
                                            "source":  {
                                                           "locator":  "P286",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P287",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Acción",
                                            "source":  {
                                                           "locator":  "P288",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P289",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Seguimiento",
                                            "source":  {
                                                           "locator":  "P290",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eso convierte Analytics en gestión.",
                                            "source":  {
                                                           "locator":  "P291",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p262-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia",
                                              "sourceLocator":  "P262",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p272-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P272",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p276-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P276",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P261",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "hallazgo-10-seif-necesita-gobierno-ligero",
                         "title":  "Hallazgo 10 — SEIF necesita gobierno ligero",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia [E]",
                                            "source":  {
                                                           "locator":  "P294",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Jonathan manifestó explícitamente la necesidad de evitar procesos demasiado complejos y construir una forma de operar sostenible para una compañía pequeña.",
                                            "source":  {
                                                           "locator":  "P295",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interpretación [I]",
                                            "source":  {
                                                           "locator":  "P296",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no necesita crear:",
                                            "source":  {
                                                           "locator":  "P297",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "PMO adicional;",
                                                          "Product Operations dedicado;",
                                                          "comité por cada decisión;",
                                                          "nuevas capas jerárquicas."
                                                      ],
                                            "source":  {
                                                           "locator":  "P298",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación [R]",
                                            "source":  {
                                                           "locator":  "P302",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El gobierno deberá implementarse mediante:",
                                            "source":  {
                                                           "locator":  "P303",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Decision Rights + Gates + métricas + pocos rituales.",
                                            "source":  {
                                                           "locator":  "P304",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No mediante estructura organizacional adicional.",
                                            "source":  {
                                                           "locator":  "P305",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p294-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Evidencia",
                                              "sourceLocator":  "P294",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p296-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Interpretación",
                                              "sourceLocator":  "P296",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p302-r",
                                              "sourceMark":  "R",
                                              "classification":  null,
                                              "statement":  "Recomendación",
                                              "sourceLocator":  "P302",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P293",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-ejecutivo-consolidado",
                         "title":  "Diagnóstico ejecutivo consolidado",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Podemos resumir el Assessment así:",
                                            "source":  {
                                                           "locator":  "P308",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-003",
                                                          "caption":  "Diagnóstico ejecutivo consolidado",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Dimensión",
                                                                          "Estado observado",
                                                                          "Diagnóstico"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Estrategia",
                                                                           "Orientación hacia Outcomes",
                                                                           "Dirección correcta; operacionalización pendiente"
                                                                       ],
                                                                       [
                                                                           "Producto",
                                                                           "Capacidad existente",
                                                                           "Necesita sistema común de decisión"
                                                                       ],
                                                                       [
                                                                           "Discovery",
                                                                           "Existe",
                                                                           "Aplicación variable"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "Capacidad establecida",
                                                                           "Integración variable en ciclo"
                                                                       ],
                                                                       [
                                                                           "Priorización",
                                                                           "Existen criterios",
                                                                           "Falta convergencia"
                                                                       ],
                                                                       [
                                                                           "Delivery",
                                                                           "Capacidad existente",
                                                                           "Necesita mejores interfaces upstream"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Capacidad existente",
                                                                           "Deuda y dependencias relevantes"
                                                                       ],
                                                                       [
                                                                           "CS",
                                                                           "Conocimiento importante del cliente",
                                                                           "Necesita conectar adopción con Producto"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Información de fricción",
                                                                           "Necesita transformarse en aprendizaje reutilizable"
                                                                       ],
                                                                       [
                                                                           "Marketing",
                                                                           "Capacidad emergente",
                                                                           "Oportunidad de integrarse upstream"
                                                                       ],
                                                                       [
                                                                           "Datos",
                                                                           "Dashboards disponibles",
                                                                           "Evolucionar hacia decisiones accionables"
                                                                       ],
                                                                       [
                                                                           "Gobierno",
                                                                           "Distribuido",
                                                                           "Simplificar ownership y reglas"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T3",
                                                                         "title":  "1. Resumen Ejecutivo"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P307",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-model-preliminar",
                         "title":  "Root Cause Model preliminar",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con la evidencia disponible, no afirmaría todavía una única causa raíz.",
                                            "source":  {
                                                           "locator":  "P311",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sí podemos identificar cinco causas sistémicas probables:",
                                            "source":  {
                                                           "locator":  "P312",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RC1 — Reglas de entrada variables",
                                            "source":  {
                                                           "locator":  "P313",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las oportunidades no necesariamente se representan de una forma comparable. [I]",
                                            "source":  {
                                                           "locator":  "P314",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RC2 — Criterios de decisión distribuidos",
                                            "source":  {
                                                           "locator":  "P315",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Distintos actores poseen partes de la decisión. [I]",
                                            "source":  {
                                                           "locator":  "P316",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RC3 — Validación no sistemática",
                                            "source":  {
                                                           "locator":  "P317",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe, pero su momento y profundidad varían. [E/I]",
                                            "source":  {
                                                           "locator":  "P318",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RC4 — Interfaces entre funciones poco estandarizadas",
                                            "source":  {
                                                           "locator":  "P319",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto, UX, Desarrollo, SRE, CS, Soporte y Marketing intercambian información, pero no siempre mediante contratos operativos comunes. [I]",
                                            "source":  {
                                                           "locator":  "P320",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "RC5 — Learning loop fragmentado",
                                            "source":  {
                                                           "locator":  "P321",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La información posterior al release existe, pero está distribuida. [I]",
                                            "source":  {
                                                           "locator":  "P322",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas cinco causas son suficientes para empezar a diseñar el TO-BE.",
                                            "source":  {
                                                           "locator":  "P323",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch01-p314-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Las oportunidades no necesariamente se representan de una forma comparable.",
                                              "sourceLocator":  "P314",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p316-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Distintos actores poseen partes de la decisión.",
                                              "sourceLocator":  "P316",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p318-e",
                                              "sourceMark":  "E",
                                              "classification":  null,
                                              "statement":  "Existe, pero su momento y profundidad varían.",
                                              "sourceLocator":  "P318",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p318-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Existe, pero su momento y profundidad varían.",
                                              "sourceLocator":  "P318",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p320-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "Producto, UX, Desarrollo, SRE, CS, Soporte y Marketing intercambian información, pero no siempre mediante contratos operativos comunes.",
                                              "sourceLocator":  "P320",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          },
                                          {
                                              "id":  "ch01-p322-i",
                                              "sourceMark":  "I",
                                              "classification":  "E3",
                                              "statement":  "La información posterior al release existe, pero está distribuida.",
                                              "sourceLocator":  "P322",
                                              "sourceArea":  "1. Resumen Ejecutivo",
                                              "supports":  [
                                                               "executive-summary"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P310",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "implicacion-estrategica",
                         "title":  "Implicación estratégica",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, no vamos a optimizar cada departamento independientemente.",
                                            "source":  {
                                                           "locator":  "P326",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Vamos a optimizar el flujo:",
                                            "source":  {
                                                           "locator":  "P327",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema → Evidencia → Decisión → Solución → Valor → Aprendizaje",
                                            "source":  {
                                                           "locator":  "P328",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ese cambio es fundamental.",
                                            "source":  {
                                                           "locator":  "P329",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objeto de optimización deja de ser:",
                                            "source":  {
                                                           "locator":  "P330",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto, UX, Desarrollo o SRE.",
                                            "source":  {
                                                           "locator":  "P331",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El objeto de optimización pasa a ser:",
                                            "source":  {
                                                           "locator":  "P332",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Flow of Value",
                                            "source":  {
                                                           "locator":  "P333",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P325",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "objetivo-del-blueprint",
                         "title":  "Objetivo del Blueprint",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El futuro SEIF Product Operating System deberá conseguir cinco resultados:",
                                            "source":  {
                                                           "locator":  "P336",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Foco",
                                            "source":  {
                                                           "locator":  "P337",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reducir competencia entre señales y prioridades.",
                                            "source":  {
                                                           "locator":  "P338",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Evidencia",
                                            "source":  {
                                                           "locator":  "P339",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reducir decisiones basadas únicamente en percepción.",
                                            "source":  {
                                                           "locator":  "P340",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Velocidad de aprendizaje",
                                            "source":  {
                                                           "locator":  "P341",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Validar antes de consumir capacidad costosa.",
                                            "source":  {
                                                           "locator":  "P342",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Adopción",
                                            "source":  {
                                                           "locator":  "P343",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Extender la responsabilidad más allá del release.",
                                            "source":  {
                                                           "locator":  "P344",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Sostenibilidad",
                                            "source":  {
                                                           "locator":  "P345",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Crear un modelo suficientemente sencillo para que SEIF pueda operarlo sin consultores.",
                                            "source":  {
                                                           "locator":  "P346",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P335",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     },
                     {
                         "id":  "principios-de-diseno-aprobables",
                         "title":  "Principios de diseño aprobables",
                         "contentClass":  "recommendation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "De todo el diagnóstico se desprenden ocho principios que propongo llevar a validación con Jonathan y Lizbeth:",
                                            "source":  {
                                                           "locator":  "P349",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Un solo sistema de decisión, no una sola fuente de ideas.",
                                            "source":  {
                                                           "locator":  "P350",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Evidencia antes que opinión.",
                                            "source":  {
                                                           "locator":  "P351",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Validar barato antes de desarrollar caro.",
                                            "source":  {
                                                           "locator":  "P352",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Entregar pequeño antes de escalar.",
                                            "source":  {
                                                           "locator":  "P353",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. Release no significa valor.",
                                            "source":  {
                                                           "locator":  "P354",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. Medir para decidir, no para reportar.",
                                            "source":  {
                                                           "locator":  "P355",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. Menos procesos, mayor disciplina.",
                                            "source":  {
                                                           "locator":  "P356",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. El modelo debe funcionar cuando la consultoría termine.",
                                            "source":  {
                                                           "locator":  "P357",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los primeros seis se derivan directamente de los problemas y prácticas observados; los dos últimos son principios de diseño recomendados para responder al tamaño y contexto expresado por SEIF.",
                                            "source":  {
                                                           "locator":  "P358",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Resultado del Punto 1",
                                            "source":  {
                                                           "locator":  "P360",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con esto queda construido el Resumen Ejecutivo + diagnóstico estructural inicial del SEIF Product Operating System — Assessment \u0026 Blueprint v0.1.",
                                            "source":  {
                                                           "locator":  "P361",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Y ya tenemos una tesis defendible:",
                                            "source":  {
                                                           "locator":  "P362",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no presenta una ausencia de capacidades de Producto. Presenta capacidades valiosas que operan con distintos niveles de madurez y conexión. La oportunidad consiste en integrarlas mediante un Operating System ligero que estandarice cómo se captura evidencia, se toman decisiones, se valida antes de desarrollar, se entrega, se logra adopción y se aprende.",
                                            "source":  {
                                                           "locator":  "P363",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Punto 2 debe ser el Assessment AS-IS detallado, donde bajaremos de esta conclusión ejecutiva a cada dimensión —Estrategia, Organización, Producto, Discovery, UX, Priorización, Delivery, SRE, Soporte, CS, Marketing, Datos, Tooling y Gobierno— asignando madurez 1–5, evidencia concreta, hallazgo, riesgo y brecha TO-BE. Ese será el sustento técnico del resto del Blueprint.",
                                            "source":  {
                                                           "locator":  "P364",
                                                           "title":  "1. Resumen Ejecutivo"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P348",
                                             "title":  "1. Resumen Ejecutivo"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "current-state",
                    "findings",
                    "root-causes"
                ],
    "source":  {
                   "title":  "1. Resumen Ejecutivo",
                   "locator":  "P56–P364",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
