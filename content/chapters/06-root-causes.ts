import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "root-causes",
    "group":  "Assessment",
    "title":  "Causas sistémicas probables",
    "sourceTitle":  "6. Root Cause Analysis",
    "eyebrow":  "06 · Diagnóstico sistémico",
    "summary":  "El assessment propone causas sistémicas probables para explicar los patrones observados.",
    "takeaway":  "Son inferencias soportadas por la evidencia disponible; no causalidad experimentalmente demostrada.",
    "executive":  {
                      "primaryVisual":  "cards",
                      "keyFindings":  [
                                          "Las oportunidades no siempre se representan mediante un modelo común.",
                                          "Discovery no funciona todavía como un gate consistente.",
                                          "Los derechos de decisión y las interfaces operativas requieren mayor explicitud.",
                                          "El learning loop posterior al release no se cierra de forma uniforme."
                                      ],
                      "sources":  [
                                      {
                                          "locator":  "P1353–P1589",
                                          "title":  "6. Root Cause Analysis"
                                      }
                                  ],
                      "evidenceConfidence":  "medium",
                      "implication":  "Las causas deben utilizarse como hipótesis diagnósticas para orientar intervención y validación, sin convertirlas en hechos causales.",
                      "evidenceStatus":  "pending"
                  },
    "sections":  [
                     {
                         "id":  "enfoque",
                         "title":  "Enfoque",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El análisis de causa raíz diferencia claramente:",
                                            "source":  {
                                                           "locator":  "P1355",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "síntomas visibles;",
                                                          "mecanismos que generan esos síntomas;",
                                                          "condiciones estructurales."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1356",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se atribuye causalidad cuando las entrevistas no proporcionan evidencia suficiente.",
                                            "source":  {
                                                           "locator":  "P1359",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el diagnóstico identifica causas raíz organizacionales respaldadas por la triangulación de entrevistas, sin afirmar relaciones financieras o comerciales todavía no demostradas.",
                                            "source":  {
                                                           "locator":  "P1360",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1354",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "problema-sistemico-central",
                         "title":  "Problema sistémico central",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El problema central identificado es:",
                                            "source":  {
                                                           "locator":  "P1363",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no dispone todavía de un sistema operativo común y estable que gobierne de extremo a extremo cómo una señal se convierte en una decisión, una solución, valor medible y aprendizaje.",
                                            "source":  {
                                                           "locator":  "P1364",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este problema explica de forma más completa los diferentes síntomas observados que cualquier diagnóstico centrado exclusivamente en un área.",
                                            "source":  {
                                                           "locator":  "P1365",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1362",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-1-ausencia-de-un-modelo-comun-para-representar-oportunidades",
                         "title":  "Root Cause 1 — Ausencia de un modelo común para representar oportunidades",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relacionada",
                                            "source":  {
                                                           "locator":  "P1368",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "La demanda proviene de múltiples fuentes.",
                                                          "UX identifica diversas formas de llegada de trabajo.",
                                                          "CS eleva solicitudes de clientes hacia Producto.",
                                                          "Marketing incorpora señales de mercado.",
                                                          "Tecnología genera necesidades técnicas."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1369",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Causa raíz",
                                            "source":  {
                                                           "locator":  "P1374",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las señales no necesariamente se convierten inicialmente en una unidad común de análisis.",
                                            "source":  {
                                                           "locator":  "P1375",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede llegar:",
                                            "source":  {
                                                           "locator":  "P1376",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "una solicitud;",
                                                          "una idea;",
                                                          "una urgencia;",
                                                          "un ticket;",
                                                          "una necesidad técnica;",
                                                          "una oportunidad comercial."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1377",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Efecto",
                                            "source":  {
                                                           "locator":  "P1383",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las oportunidades llegan a etapas posteriores con diferente calidad de información.",
                                            "source":  {
                                                           "locator":  "P1384",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto dificulta:",
                                            "source":  {
                                                           "locator":  "P1385",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "comparar;",
                                                          "priorizar;",
                                                          "validar;",
                                                          "rechazar;",
                                                          "posponer."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1386",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause Statement",
                                            "source":  {
                                                           "locator":  "P1391",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización escucha múltiples fuentes, pero todavía no transforma consistentemente esas señales en oportunidades estructuradas alrededor de problema, usuario, evidencia e impacto.",
                                            "source":  {
                                                           "locator":  "P1392",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch06-root-cause-1-ausencia-de-un-modelo-comun-para-representar-oportunidades-e3",
                                              "sourceMark":  null,
                                              "classification":  "E3",
                                              "statement":  "Root Cause 1 — Ausencia de un modelo común para representar oportunidades. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental.",
                                              "sourceLocator":  "P1367",
                                              "sourceArea":  "6. Root Cause Analysis",
                                              "supports":  [
                                                               "root-causes"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1367",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-2-discovery-no-funciona-todavia-como-gate-consistente-de-reduccion-de-incertidumbre",
                         "title":  "Root Cause 2 — Discovery no funciona todavía como gate consistente de reducción de incertidumbre",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relacionada",
                                            "source":  {
                                                           "locator":  "P1395",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX realiza research, prototipado y validación.",
                                            "source":  {
                                                           "locator":  "P1396",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto investiga necesidades.",
                                            "source":  {
                                                           "locator":  "P1397",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La profundidad del proceso varía según la iniciativa.",
                                            "source":  {
                                                           "locator":  "P1398",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo recibe trabajos con diferentes niveles de claridad.",
                                            "source":  {
                                                           "locator":  "P1399",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Causa raíz",
                                            "source":  {
                                                           "locator":  "P1400",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery funciona como conjunto de prácticas disponibles, pero no como una condición común que determine cuándo una iniciativa tiene suficiente evidencia para avanzar.",
                                            "source":  {
                                                           "locator":  "P1401",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Efecto",
                                            "source":  {
                                                           "locator":  "P1402",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Parte de la incertidumbre puede trasladarse hacia Desarrollo.",
                                            "source":  {
                                                           "locator":  "P1403",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto aumenta la necesidad de:",
                                            "source":  {
                                                           "locator":  "P1404",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "aclaraciones;",
                                                          "cambios;",
                                                          "decisiones tardías;",
                                                          "validación posterior."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1405",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause Statement",
                                            "source":  {
                                                           "locator":  "P1409",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF posee capacidad de Discovery, pero todavía no utiliza un estándar mínimo común para determinar qué incertidumbre debe resolverse antes de comprometer capacidad de construcción.",
                                            "source":  {
                                                           "locator":  "P1410",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch06-root-cause-2-discovery-no-funciona-todavia-como-gate-consistente-de-reduccion-de-incertidumbre-e3",
                                              "sourceMark":  null,
                                              "classification":  "E3",
                                              "statement":  "Root Cause 2 — Discovery no funciona todavía como gate consistente de reducción de incertidumbre. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental.",
                                              "sourceLocator":  "P1394",
                                              "sourceArea":  "6. Root Cause Analysis",
                                              "supports":  [
                                                               "root-causes"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1394",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-3-los-decision-rights-no-estan-completamente-explicitados",
                         "title":  "Root Cause 3 — Los Decision Rights no están completamente explicitados",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relacionada",
                                            "source":  {
                                                           "locator":  "P1413",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto participa en priorización.",
                                            "source":  {
                                                           "locator":  "P1414",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo incorpora capacidad y viabilidad.",
                                            "source":  {
                                                           "locator":  "P1415",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo participa en determinadas decisiones.",
                                            "source":  {
                                                           "locator":  "P1416",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las células distribuyen responsabilidad sobre resultados.",
                                            "source":  {
                                                           "locator":  "P1417",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Causa raíz",
                                            "source":  {
                                                           "locator":  "P1418",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La colaboración transversal existe, pero las decisiones principales del ciclo no siempre cuentan con una asignación explícita y estable de accountability.",
                                            "source":  {
                                                           "locator":  "P1419",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Efecto",
                                            "source":  {
                                                           "locator":  "P1420",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se incrementa la posibilidad de:",
                                            "source":  {
                                                           "locator":  "P1421",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "decisiones negociadas caso a caso;",
                                                          "escalamiento;",
                                                          "ambigüedad;",
                                                          "cambio de prioridad;",
                                                          "pérdida de velocidad."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1422",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause Statement",
                                            "source":  {
                                                           "locator":  "P1427",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha avanzado hacia responsabilidad compartida por Outcomes sin completar todavía la definición de quién responde por las decisiones críticas del ciclo de producto.",
                                            "source":  {
                                                           "locator":  "P1428",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch06-root-cause-3-los-decision-rights-no-estan-completamente-explicitados-e3",
                                              "sourceMark":  null,
                                              "classification":  "E3",
                                              "statement":  "Root Cause 3 — Los Decision Rights no están completamente explicitados. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental.",
                                              "sourceLocator":  "P1412",
                                              "sourceArea":  "6. Root Cause Analysis",
                                              "supports":  [
                                                               "root-causes"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1412",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-4-la-priorizacion-no-opera-todavia-como-un-sistema-transversal-unico",
                         "title":  "Root Cause 4 — La priorización no opera todavía como un sistema transversal único",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relacionada",
                                            "source":  {
                                                           "locator":  "P1431",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto considera:",
                                            "source":  {
                                                           "locator":  "P1432",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "clientes;",
                                                          "uso;",
                                                          "alcance;",
                                                          "solicitudes."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1433",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo considera:",
                                            "source":  {
                                                           "locator":  "P1437",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "capacidad;",
                                                          "dependencias;",
                                                          "factibilidad."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1438",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo aporta contexto estratégico.",
                                            "source":  {
                                                           "locator":  "P1441",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Causa raíz",
                                            "source":  {
                                                           "locator":  "P1442",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los elementos necesarios para tomar buenas decisiones existen, pero se encuentran distribuidos.",
                                            "source":  {
                                                           "locator":  "P1443",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Efecto",
                                            "source":  {
                                                           "locator":  "P1444",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Puede existir dificultad para responder sistemáticamente:",
                                            "source":  {
                                                           "locator":  "P1445",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué hacemos esto ahora?",
                                            "source":  {
                                                           "locator":  "P1446",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y:",
                                            "source":  {
                                                           "locator":  "P1447",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué estamos dejando de hacer al tomar esta decisión?",
                                            "source":  {
                                                           "locator":  "P1448",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause Statement",
                                            "source":  {
                                                           "locator":  "P1449",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La priorización dispone de criterios útiles, pero todavía no existe un mecanismo común que combine valor, evidencia, alcance y viabilidad en una decisión comparable y trazable.",
                                            "source":  {
                                                           "locator":  "P1450",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch06-root-cause-4-la-priorizacion-no-opera-todavia-como-un-sistema-transversal-unico-e3",
                                              "sourceMark":  null,
                                              "classification":  "E3",
                                              "statement":  "Root Cause 4 — La priorización no opera todavía como un sistema transversal único. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental.",
                                              "sourceLocator":  "P1430",
                                              "sourceArea":  "6. Root Cause Analysis",
                                              "supports":  [
                                                               "root-causes"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1430",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-5-las-interfaces-entre-funciones-no-tienen-contratos-operativos-minimos",
                         "title":  "Root Cause 5 — Las interfaces entre funciones no tienen contratos operativos mínimos",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relacionada",
                                            "source":  {
                                                           "locator":  "P1453",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ciclo atraviesa:",
                                            "source":  {
                                                           "locator":  "P1454",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto → UX → Desarrollo → SRE → CS/Soporte → Producto.",
                                            "source":  {
                                                           "locator":  "P1455",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas muestran variabilidad en la información intercambiada y en la participación de las funciones.",
                                            "source":  {
                                                           "locator":  "P1456",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Causa raíz",
                                            "source":  {
                                                           "locator":  "P1457",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Cada capacidad ha desarrollado su propia forma de operar, pero las transiciones entre capacidades no disponen todavía de criterios mínimos comunes.",
                                            "source":  {
                                                           "locator":  "P1458",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos de preguntas no completamente estandarizadas:",
                                            "source":  {
                                                           "locator":  "P1459",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿qué necesita UX para comenzar?;",
                                                          "¿qué debe saber Desarrollo antes de comprometer capacidad?;",
                                                          "¿qué requiere SRE antes de liberar?;",
                                                          "¿qué debe recibir CS para impulsar adopción?;",
                                                          "¿qué aprendizaje debe retornar a Producto?"
                                                      ],
                                            "source":  {
                                                           "locator":  "P1460",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Efecto",
                                            "source":  {
                                                           "locator":  "P1465",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aparecen:",
                                            "source":  {
                                                           "locator":  "P1466",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "handoffs;",
                                                          "aclaraciones;",
                                                          "pérdida de contexto;",
                                                          "información duplicada;",
                                                          "retrasos;",
                                                          "interpretación."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1467",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause Statement",
                                            "source":  {
                                                           "locator":  "P1473",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La principal fragmentación del sistema se encuentra en las interfaces entre capacidades, no necesariamente en la capacidad individual de cada área.",
                                            "source":  {
                                                           "locator":  "P1474",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch06-root-cause-5-las-interfaces-entre-funciones-no-tienen-contratos-operativos-minimos-e3",
                                              "sourceMark":  null,
                                              "classification":  "E3",
                                              "statement":  "Root Cause 5 — Las interfaces entre funciones no tienen contratos operativos mínimos. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental.",
                                              "sourceLocator":  "P1452",
                                              "sourceArea":  "6. Root Cause Analysis",
                                              "supports":  [
                                                               "root-causes"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1452",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-6-el-ciclo-de-aprendizaje-posterior-al-release-no-esta-completamente-cerrado",
                         "title":  "Root Cause 6 — El ciclo de aprendizaje posterior al release no está completamente cerrado",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relacionada",
                                            "source":  {
                                                           "locator":  "P1477",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS tiene datos de adopción.",
                                            "source":  {
                                                           "locator":  "P1478",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte conoce fricciones.",
                                            "source":  {
                                                           "locator":  "P1479",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE dispone de señales operativas.",
                                            "source":  {
                                                           "locator":  "P1480",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX obtiene feedback.",
                                            "source":  {
                                                           "locator":  "P1481",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing conoce señales de mercado.",
                                            "source":  {
                                                           "locator":  "P1482",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto dispone de dashboards.",
                                            "source":  {
                                                           "locator":  "P1483",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Causa raíz",
                                            "source":  {
                                                           "locator":  "P1484",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización genera múltiples señales posteriores a la entrega, pero todavía no existe un mecanismo transversal consistente que responda:",
                                            "source":  {
                                                           "locator":  "P1485",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Qué aprendimos y qué decisión tomaremos como consecuencia?",
                                            "source":  {
                                                           "locator":  "P1486",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Efecto",
                                            "source":  {
                                                           "locator":  "P1487",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La información puede permanecer:",
                                            "source":  {
                                                           "locator":  "P1488",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "distribuida;",
                                                          "reactiva;",
                                                          "anecdótica;",
                                                          "desconectada de la priorización futura."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1489",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause Statement",
                                            "source":  {
                                                           "locator":  "P1493",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF tiene múltiples mecanismos de observación, pero todavía no un Learning Loop común que transforme sistemáticamente evidencia posterior al release en decisiones de Producto.",
                                            "source":  {
                                                           "locator":  "P1494",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch06-root-cause-6-el-ciclo-de-aprendizaje-posterior-al-release-no-esta-completamente-cerrado-e3",
                                              "sourceMark":  null,
                                              "classification":  "E3",
                                              "statement":  "Root Cause 6 — El ciclo de aprendizaje posterior al release no está completamente cerrado. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental.",
                                              "sourceLocator":  "P1476",
                                              "sourceArea":  "6. Root Cause Analysis",
                                              "supports":  [
                                                               "root-causes"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1476",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-7-la-autonomia-del-cliente-no-ha-sido-gestionada-como-dimension-explicita-del-producto",
                         "title":  "Root Cause 7 — La autonomía del cliente no ha sido gestionada como dimensión explícita del producto",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relacionada",
                                            "source":  {
                                                           "locator":  "P1497",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE reporta dependencias operativas.",
                                            "source":  {
                                                           "locator":  "P1498",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success reporta codependencia del administrador y acompañamiento significativo.",
                                            "source":  {
                                                           "locator":  "P1499",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Causa raíz",
                                            "source":  {
                                                           "locator":  "P1500",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinadas capacidades del producto requieren conocimiento, configuración o intervención adicional para ser utilizadas.",
                                            "source":  {
                                                           "locator":  "P1501",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Efecto",
                                            "source":  {
                                                           "locator":  "P1502",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se incrementa potencialmente la dependencia de:",
                                            "source":  {
                                                           "locator":  "P1503",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Customer Success;",
                                                          "Soporte;",
                                                          "conocimiento especializado;",
                                                          "operación interna de SEIF."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1504",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se ha cuantificado todavía el impacto.",
                                            "source":  {
                                                           "locator":  "P1508",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause Statement",
                                            "source":  {
                                                           "locator":  "P1509",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La autonomía del cliente no ha sido utilizada históricamente como criterio explícito y transversal de diseño, adopción y escalabilidad.",
                                            "source":  {
                                                           "locator":  "P1510",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch06-root-cause-7-la-autonomia-del-cliente-no-ha-sido-gestionada-como-dimension-explicita-del-producto-e3",
                                              "sourceMark":  null,
                                              "classification":  "E3",
                                              "statement":  "Root Cause 7 — La autonomía del cliente no ha sido gestionada como dimensión explícita del producto. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental.",
                                              "sourceLocator":  "P1496",
                                              "sourceArea":  "6. Root Cause Analysis",
                                              "supports":  [
                                                               "root-causes"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1496",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-8-la-medicion-se-desarrollo-mas-como-visibilidad-que-como-mecanismo-de-gestion",
                         "title":  "Root Cause 8 — La medición se desarrolló más como visibilidad que como mecanismo de gestión",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relacionada",
                                            "source":  {
                                                           "locator":  "P1513",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF construyó dashboards de:",
                                            "source":  {
                                                           "locator":  "P1514",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "licencias;",
                                                          "usuarios;",
                                                          "proyectos;",
                                                          "módulos;",
                                                          "uso."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1515",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se están incorporando TTV, adherencia y criterios de éxito.",
                                            "source":  {
                                                           "locator":  "P1520",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Causa raíz",
                                            "source":  {
                                                           "locator":  "P1521",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La capacidad de medición se encuentra en evolución.",
                                            "source":  {
                                                           "locator":  "P1522",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aún no existe para todas las métricas una conexión sistemática:",
                                            "source":  {
                                                           "locator":  "P1523",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "indicador → umbral → owner → acción → resultado.",
                                            "source":  {
                                                           "locator":  "P1524",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Efecto",
                                            "source":  {
                                                           "locator":  "P1525",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Un dashboard puede revelar un problema sin provocar necesariamente una acción repetible.",
                                            "source":  {
                                                           "locator":  "P1526",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause Statement",
                                            "source":  {
                                                           "locator":  "P1527",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha avanzado en observabilidad del producto más rápido que en el modelo operativo necesario para convertir métricas en decisiones.",
                                            "source":  {
                                                           "locator":  "P1528",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch06-root-cause-8-la-medicion-se-desarrollo-mas-como-visibilidad-que-como-mecanismo-de-gestion-e3",
                                              "sourceMark":  null,
                                              "classification":  "E3",
                                              "statement":  "Root Cause 8 — La medición se desarrolló más como visibilidad que como mecanismo de gestión. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental.",
                                              "sourceLocator":  "P1512",
                                              "sourceArea":  "6. Root Cause Analysis",
                                              "supports":  [
                                                               "root-causes"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1512",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-9-cambios-sucesivos-han-reducido-la-oportunidad-de-estabilizar-las-practicas",
                         "title":  "Root Cause 9 — Cambios sucesivos han reducido la oportunidad de estabilizar las prácticas",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relacionada",
                                            "source":  {
                                                           "locator":  "P1531",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo relata diferentes mecanismos y metodologías utilizados a lo largo del tiempo.",
                                            "source":  {
                                                           "locator":  "P1532",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo reconoce que SEIF tiende a construir modelos demasiado complejos que posteriormente son difíciles de sostener.",
                                            "source":  {
                                                           "locator":  "P1533",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Causa raíz",
                                            "source":  {
                                                           "locator":  "P1534",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe una tendencia organizacional a introducir soluciones metodológicas cuando el sistema presenta fricción.",
                                            "source":  {
                                                           "locator":  "P1535",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Efecto",
                                            "source":  {
                                                           "locator":  "P1536",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización puede acumular:",
                                            "source":  {
                                                           "locator":  "P1537",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "nuevos conceptos;",
                                                          "nuevas reglas;",
                                                          "nuevas ceremonias;"
                                                      ],
                                            "source":  {
                                                           "locator":  "P1538",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "sin retirar o estabilizar suficientemente las anteriores.",
                                            "source":  {
                                                           "locator":  "P1541",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Root Cause Statement",
                                            "source":  {
                                                           "locator":  "P1542",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Parte de la variabilidad actual está asociada a una evolución continua de las formas de trabajo sin suficiente tiempo de estabilización y simplificación.",
                                            "source":  {
                                                           "locator":  "P1543",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch06-root-cause-9-cambios-sucesivos-han-reducido-la-oportunidad-de-estabilizar-las-practicas-e3",
                                              "sourceMark":  null,
                                              "classification":  "E3",
                                              "statement":  "Root Cause 9 — Cambios sucesivos han reducido la oportunidad de estabilizar las prácticas. Inferencia soportada por los patrones y evidencias descritos en la sección; no demuestra causalidad experimental.",
                                              "sourceLocator":  "P1530",
                                              "sourceArea":  "6. Root Cause Analysis",
                                              "supports":  [
                                                               "root-causes"
                                                           ],
                                              "confidence":  "medium",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1530",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "root-cause-tree-consolidado",
                         "title":  "Root Cause Tree consolidado",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El diagnóstico completo puede representarse así:",
                                            "source":  {
                                                           "locator":  "P1546",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SÍNTOMAS OBSERVADOS",
                                            "source":  {
                                                           "locator":  "P1547",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Prioridades variablesFeedback tardíoRetrabajoDependencia del clienteInformación dispersaBaja trazabilidadDificultad para operacionalizar Outcomes",
                                            "source":  {
                                                           "locator":  "P1548",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P1549",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CAUSAS OPERATIVAS",
                                            "source":  {
                                                           "locator":  "P1550",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Demandas representadas de formas diferentesDiscovery variableCriterios de priorización distribuidosHandoffs sin criterios mínimosLearning loop incompleto",
                                            "source":  {
                                                           "locator":  "P1551",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P1552",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CAUSAS ESTRUCTURALES",
                                            "source":  {
                                                           "locator":  "P1553",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. No existe aún un Product Operating System común.",
                                            "source":  {
                                                           "locator":  "P1554",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Decision Rights parcialmente definidos.",
                                            "source":  {
                                                           "locator":  "P1555",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Datos, feedback y conocimiento no convergen en un único ciclo de decisión.",
                                            "source":  {
                                                           "locator":  "P1556",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. La organización ha evolucionado mediante sucesivos cambios de forma de trabajo.",
                                            "source":  {
                                                           "locator":  "P1557",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P1558",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CONSECUENCIA SISTÉMICA",
                                            "source":  {
                                                           "locator":  "P1559",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El desempeño del ciclo depende excesivamente del contexto, de las personas participantes y de acuerdos realizados iniciativa por iniciativa.",
                                            "source":  {
                                                           "locator":  "P1560",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1545",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "causas-que-no-pueden-afirmarse",
                         "title":  "Causas que NO pueden afirmarse",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El assessment no proporciona evidencia suficiente para concluir que:",
                                            "source":  {
                                                           "locator":  "P1563",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "la baja adopción sea causada por UX;",
                                                          "la deuda técnica sea la causa del churn;",
                                                          "Desarrollo sea la causa de los ciclos prolongados;",
                                                          "Customer Success sea responsable de la dependencia del cliente;",
                                                          "las células sean la causa de la pérdida de foco;",
                                                          "la falta de Jira sea la causa de la fragmentación;",
                                                          "los clientes personalizados sean la causa principal de la deuda actual;",
                                                          "el tamaño del equipo sea insuficiente."
                                                      ],
                                            "source":  {
                                                           "locator":  "P1564",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas relaciones podrán investigarse posteriormente si son relevantes, pero no forman parte del diagnóstico demostrado en esta etapa.",
                                            "source":  {
                                                           "locator":  "P1572",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1562",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "priorizacion-de-causas-raiz",
                         "title":  "Priorización de causas raíz",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "No todas las causas requieren el mismo nivel de intervención.",
                                            "source":  {
                                                           "locator":  "P1575",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-012",
                                                          "caption":  "Priorización de causas raíz",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Root Cause",
                                                                          "Impacto sistémico",
                                                                          "Capacidad de intervención",
                                                                          "Prioridad"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Modelo común de oportunidades",
                                                                           "Alto",
                                                                           "Alta",
                                                                           "P1"
                                                                       ],
                                                                       [
                                                                           "Discovery mínimo consistente",
                                                                           "Alto",
                                                                           "Alta",
                                                                           "P1"
                                                                       ],
                                                                       [
                                                                           "Decision Rights",
                                                                           "Alto",
                                                                           "Alta",
                                                                           "P1"
                                                                       ],
                                                                       [
                                                                           "Priorización transversal",
                                                                           "Alto",
                                                                           "Alta",
                                                                           "P1"
                                                                       ],
                                                                       [
                                                                           "Interfaces entre funciones",
                                                                           "Alto",
                                                                           "Alta",
                                                                           "P1"
                                                                       ],
                                                                       [
                                                                           "Learning Loop",
                                                                           "Alto",
                                                                           "Media-Alta",
                                                                           "P1"
                                                                       ],
                                                                       [
                                                                           "Autonomía del cliente",
                                                                           "Alto",
                                                                           "Media",
                                                                           "P2"
                                                                       ],
                                                                       [
                                                                           "Métricas → decisiones",
                                                                           "Alto",
                                                                           "Media-Alta",
                                                                           "P1"
                                                                       ],
                                                                       [
                                                                           "Estabilización del cambio",
                                                                           "Alto",
                                                                           "Alta",
                                                                           "P1"
                                                                       ],
                                                                       [
                                                                           "Deuda técnica",
                                                                           "Relevante",
                                                                           "Requiere profundización",
                                                                           "P2"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T12",
                                                                         "title":  "6. Root Cause Analysis"
                                                                     },
                                                          "assessmentLabel":  "Valoración del assessment — pendiente de validación",
                                                          "validationStatus":  "pending"
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "P1 representa causas que el Product Operating System debe abordar directamente.",
                                            "source":  {
                                                           "locator":  "P1576",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "P2 representa condiciones que el Operating Model debe incorporar, pero cuya solución requiere análisis o ejecución específica.",
                                            "source":  {
                                                           "locator":  "P1577",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1574",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-causal-final",
                         "title":  "Diagnóstico causal final",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El análisis no apunta a una falla individual ni a una metodología equivocada.",
                                            "source":  {
                                                           "locator":  "P1580",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Apunta a una causa estructural:",
                                            "source":  {
                                                           "locator":  "P1581",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ha construido capacidades funcionales y ha avanzado conceptualmente hacia Outcomes, pero todavía no ha consolidado las reglas compartidas que convierten esas capacidades en un sistema end-to-end.",
                                            "source":  {
                                                           "locator":  "P1582",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto produce cuatro brechas fundamentales:",
                                            "source":  {
                                                           "locator":  "P1583",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Señal → EvidenciaNo todas las oportunidades llegan representadas de la misma manera.",
                                            "source":  {
                                                           "locator":  "P1584",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Evidencia → DecisiónLos criterios y derechos de decisión están distribuidos.",
                                            "source":  {
                                                           "locator":  "P1585",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Decisión → ValorEl nivel de Discovery, validación y preparación puede variar.",
                                            "source":  {
                                                           "locator":  "P1586",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Valor → AprendizajeLos datos y señales posteriores a la entrega todavía no convergen consistentemente en una decisión.",
                                            "source":  {
                                                           "locator":  "P1587",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el Blueprint no deberá responder con más estructura organizacional.",
                                            "source":  {
                                                           "locator":  "P1588",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Deberá resolver específicamente estas cuatro conexiones mediante un Product Operating System ligero, trazable y ejecutable por el equipo actual de SEIF.",
                                            "source":  {
                                                           "locator":  "P1589",
                                                           "title":  "6. Root Cause Analysis"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P1579",
                                             "title":  "6. Root Cause Analysis"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "current-state",
                    "findings",
                    "maturity"
                ],
    "source":  {
                   "title":  "6. Root Cause Analysis",
                   "locator":  "P1353–P1589",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
