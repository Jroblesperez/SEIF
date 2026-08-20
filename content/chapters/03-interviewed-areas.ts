import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "interviews",
    "group":  "Assessment",
    "title":  "Áreas entrevistadas",
    "sourceTitle":  "3. Áreas Entrevistadas",
    "eyebrow":  "03 · Alcance",
    "summary":  "El assessment incorpora perspectivas funcionales distribuidas a lo largo del ciclo de producto.",
    "takeaway":  "La cobertura permite reconstruir gran parte del flujo, pero los vacíos identificados deben permanecer visibles.",
    "executive":  {
                      "sources":  [
                                      {
                                          "locator":  "P561–P716",
                                          "title":  "3. Áreas Entrevistadas"
                                      }
                                  ],
                      "implication":  "Los hallazgos transversales deben conservar su fuente funcional y no atribuirse a toda SEIF sin convergencia suficiente.",
                      "evidenceStatus":  "pending",
                      "evidenceConfidence":  "medium",
                      "keyFindings":  [
                                          "Producto, UX/UI, Desarrollo, SRE, Soporte, Marketing y Customer Success aportaron perspectivas.",
                                          "Cada función observa una parte diferente del flujo de valor.",
                                          "La cobertura lograda y la cobertura pendiente están documentadas por separado."
                                      ]
                  },
    "sections":  [
                     {
                         "id":  "cobertura",
                         "title":  "Cobertura",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La primera etapa buscó cubrir el flujo completo de generación de valor, desde la identificación del problema hasta la adopción y aprendizaje posterior al release.",
                                            "source":  {
                                                           "locator":  "P563",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se realizaron espacios con las siguientes capacidades:",
                                            "source":  {
                                                           "locator":  "P564",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-006",
                                                          "caption":  "Cobertura",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Área / Capacidad",
                                                                          "Perspectiva buscada",
                                                                          "Aporte al assessment"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Producto",
                                                                           "Estrategia, demanda, outcomes, priorización y gestión del producto",
                                                                           "Entender cómo nacen y se gestionan las iniciativas"
                                                                       ],
                                                                       [
                                                                           "UX/UI",
                                                                           "Investigación, experiencia, prototipado y validación",
                                                                           "Entender cómo se reduce incertidumbre antes de desarrollar"
                                                                       ],
                                                                       [
                                                                           "Desarrollo",
                                                                           "Refinamiento, construcción, capacidad y dependencias",
                                                                           "Entender cómo las iniciativas se convierten en software"
                                                                       ],
                                                                       [
                                                                           "SRE",
                                                                           "Release, confiabilidad, operación y deuda técnica",
                                                                           "Entender cómo el producto llega y se mantiene en producción"
                                                                       ],
                                                                       [
                                                                           "Soporte",
                                                                           "Incidentes, consultas y fricciones recurrentes",
                                                                           "Entender dónde falla o genera dificultad el producto"
                                                                       ],
                                                                       [
                                                                           "Marketing",
                                                                           "Mercado, posicionamiento y validación de oportunidades",
                                                                           "Entender señales externas y comunicación de valor"
                                                                       ],
                                                                       [
                                                                           "Customer Success",
                                                                           "Implementación, adopción, acompañamiento y feedback",
                                                                           "Entender si el cliente realmente obtiene y sostiene valor"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T6",
                                                                         "title":  "3. Áreas Entrevistadas"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P562",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "producto",
                         "title":  "Producto",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito de la entrevista",
                                            "source":  {
                                                           "locator":  "P567",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comprender:",
                                            "source":  {
                                                           "locator":  "P568",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cómo opera actualmente Producto;",
                                                          "de dónde llegan las necesidades;",
                                                          "cómo se convierten en iniciativas;",
                                                          "cómo se priorizan;",
                                                          "qué evidencia se utiliza;",
                                                          "qué documentación existe;",
                                                          "cómo se relaciona Producto con las demás funciones."
                                                      ],
                                            "source":  {
                                                           "locator":  "P569",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por qué era crítico",
                                            "source":  {
                                                           "locator":  "P576",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto actúa como nodo central entre:",
                                            "source":  {
                                                           "locator":  "P577",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "cliente, negocio, UX, Desarrollo, CS y liderazgo.",
                                            "source":  {
                                                           "locator":  "P578",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Su entrevista permitió establecer la primera visión del ciclo completo.",
                                            "source":  {
                                                           "locator":  "P579",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P566",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "ux-ui",
                         "title":  "UX/UI",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "locator":  "P582",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comprender cómo SEIF:",
                                            "source":  {
                                                           "locator":  "P583",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "investiga usuarios;",
                                                          "entiende problemas;",
                                                          "diseña journeys;",
                                                          "crea prototipos;",
                                                          "valida soluciones;",
                                                          "trabaja con Producto y Desarrollo."
                                                      ],
                                            "source":  {
                                                           "locator":  "P584",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporte principal",
                                            "source":  {
                                                           "locator":  "P590",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Permitió comprobar que SEIF ya posee prácticas de Discovery y validación, aunque su aplicación no es uniforme.",
                                            "source":  {
                                                           "locator":  "P591",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por tanto, el diseño futuro debe estandarizar y conectar esas capacidades, no reemplazarlas.",
                                            "source":  {
                                                           "locator":  "P592",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P581",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "desarrollo",
                         "title":  "Desarrollo",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "locator":  "P595",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comprender:",
                                            "source":  {
                                                           "locator":  "P596",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cómo recibe trabajo;",
                                                          "cómo se refinan las iniciativas;",
                                                          "cómo se asigna capacidad;",
                                                          "qué información necesita;",
                                                          "dónde aparece retrabajo;",
                                                          "qué dependencias existen;",
                                                          "cómo ha evolucionado la forma de trabajo."
                                                      ],
                                            "source":  {
                                                           "locator":  "P597",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporte principal",
                                            "source":  {
                                                           "locator":  "P604",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La conversación permitió identificar que parte del reto no consiste únicamente en optimizar Desarrollo, sino en mejorar la calidad y estabilidad de las interfaces anteriores al Delivery.",
                                            "source":  {
                                                           "locator":  "P605",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También permitió detectar la importancia de estabilizar el modelo de trabajo y evitar otra transformación metodológica pesada.",
                                            "source":  {
                                                           "locator":  "P606",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P594",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "sre",
                         "title":  "SRE",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "locator":  "P609",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comprender:",
                                            "source":  {
                                                           "locator":  "P610",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cómo se realizan releases;",
                                                          "cómo se gestiona confiabilidad;",
                                                          "qué información llega desde Desarrollo;",
                                                          "qué dependencias operativas existen;",
                                                          "qué deuda técnica conoce la organización;",
                                                          "cómo se observa el comportamiento del producto."
                                                      ],
                                            "source":  {
                                                           "locator":  "P611",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporte principal",
                                            "source":  {
                                                           "locator":  "P617",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE aportó una perspectiva necesaria sobre:",
                                            "source":  {
                                                           "locator":  "P618",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "sostenibilidad técnica + operación + autonomía del cliente.",
                                            "source":  {
                                                           "locator":  "P619",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto evita diseñar un modelo de Producto desconectado de las restricciones reales del sistema.",
                                            "source":  {
                                                           "locator":  "P620",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P608",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "soporte",
                         "title":  "Soporte",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE y Soporte fueron abordados conjuntamente en el espacio correspondiente.",
                                            "source":  {
                                                           "locator":  "P623",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "locator":  "P624",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entender:",
                                            "source":  {
                                                           "locator":  "P625",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "incidencias;",
                                                          "consultas;",
                                                          "patrones repetitivos;",
                                                          "workarounds;",
                                                          "fuentes frecuentes de fricción;",
                                                          "mecanismos actuales de escalamiento;",
                                                          "cómo esa información llega a Producto."
                                                      ],
                                            "source":  {
                                                           "locator":  "P626",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporte principal",
                                            "source":  {
                                                           "locator":  "P633",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Permitió reconocer que Soporte no es únicamente una función reactiva.",
                                            "source":  {
                                                           "locator":  "P634",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es también una fuente de Product Intelligence.",
                                            "source":  {
                                                           "locator":  "P635",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los tickets y consultas pueden convertirse en señales estructuradas de:",
                                            "source":  {
                                                           "locator":  "P636",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "fricción;",
                                                          "deuda de experiencia;",
                                                          "problemas recurrentes;",
                                                          "oportunidades de automatización."
                                                      ],
                                            "source":  {
                                                           "locator":  "P637",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P622",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "marketing",
                         "title":  "Marketing",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "locator":  "P643",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comprender:",
                                            "source":  {
                                                           "locator":  "P644",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cómo se observa el mercado;",
                                                          "cómo se recopilan señales externas;",
                                                          "cómo se comunican capacidades;",
                                                          "cómo participa Marketing en lanzamientos;",
                                                          "qué relación mantiene con Producto;",
                                                          "cómo podría contribuir a validación temprana."
                                                      ],
                                            "source":  {
                                                           "locator":  "P645",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporte principal",
                                            "source":  {
                                                           "locator":  "P651",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing planteó la oportunidad de validar necesidades y tracción antes de consumir capacidad relevante de Desarrollo.",
                                            "source":  {
                                                           "locator":  "P652",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto es consistente con el futuro modelo de reducción temprana de incertidumbre.",
                                            "source":  {
                                                           "locator":  "P653",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P642",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "customer-success",
                         "title":  "Customer Success",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito",
                                            "source":  {
                                                           "locator":  "P656",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entender qué ocurre después de que la solución llega al cliente.",
                                            "source":  {
                                                           "locator":  "P657",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Se evaluó:",
                                            "source":  {
                                                           "locator":  "P658",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "implementación;",
                                                          "onboarding;",
                                                          "utilización;",
                                                          "adopción;",
                                                          "acompañamiento;",
                                                          "dependencias;",
                                                          "feedback;",
                                                          "solicitudes;",
                                                          "relación con Producto."
                                                      ],
                                            "source":  {
                                                           "locator":  "P659",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Aporte principal",
                                            "source":  {
                                                           "locator":  "P668",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success permitió incorporar al modelo una distinción crítica:",
                                            "source":  {
                                                           "locator":  "P669",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Release no equivale a valor.",
                                            "source":  {
                                                           "locator":  "P670",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ciclo solamente puede considerarse completo cuando existe evidencia de que el cliente está utilizando y obteniendo valor de la capacidad entregada.",
                                            "source":  {
                                                           "locator":  "P671",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P655",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "perspectiva-de-liderazgo",
                         "title":  "Perspectiva de liderazgo",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Además de las entrevistas funcionales, el kickoff proporcionó la perspectiva del liderazgo sobre el reto.",
                                            "source":  {
                                                           "locator":  "P674",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Jonathan estableció explícitamente que el objetivo es construir una capacidad de Producto sostenible, que Lizbeth sea dueña del reto y que el modelo resultante sea suficientemente simple para que las células puedan operarlo. También solicitó evitar modelos sobredimensionados para el tamaño de SEIF.",
                                            "source":  {
                                                           "locator":  "P675",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esta perspectiva actúa como restricción de diseño del Blueprint.",
                                            "source":  {
                                                           "locator":  "P676",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P673",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "cobertura-lograda-del-value-stream",
                         "title":  "Cobertura lograda del Value Stream",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Con estas entrevistas tenemos cobertura de prácticamente todo el ciclo:",
                                            "source":  {
                                                           "locator":  "P679",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MERCADO / CLIENTE",
                                            "source":  {
                                                           "locator":  "P680",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P681",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MARKETING / CS / SOPORTE",
                                            "source":  {
                                                           "locator":  "P682",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P683",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRODUCTO",
                                            "source":  {
                                                           "locator":  "P684",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P685",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX / DISCOVERY",
                                            "source":  {
                                                           "locator":  "P686",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P687",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DESARROLLO",
                                            "source":  {
                                                           "locator":  "P688",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P689",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE / RELEASE",
                                            "source":  {
                                                           "locator":  "P690",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P691",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CLIENTE",
                                            "source":  {
                                                           "locator":  "P692",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P693",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS / SOPORTE",
                                            "source":  {
                                                           "locator":  "P694",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P695",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DATOS / FEEDBACK",
                                            "source":  {
                                                           "locator":  "P696",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P697",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "PRODUCTO",
                                            "source":  {
                                                           "locator":  "P698",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Eso nos permite realizar un diagnóstico transversal y no exclusivamente funcional.",
                                            "source":  {
                                                           "locator":  "P699",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P678",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "cobertura-pendiente",
                         "title":  "Cobertura pendiente",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Hay una perspectiva que no considero bloqueante, pero sí debemos dejar registrada:",
                                            "source":  {
                                                           "locator":  "P702",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comercial — [V]",
                                            "source":  {
                                                           "locator":  "P703",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se realizó una entrevista específica con Comercial dentro del conjunto actual.",
                                            "source":  {
                                                           "locator":  "P704",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Parte de su perspectiva aparece indirectamente a través de Producto, Marketing, CS y liderazgo.",
                                            "source":  {
                                                           "locator":  "P705",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, todavía podría ser útil validar posteriormente:",
                                            "source":  {
                                                           "locator":  "P706",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cómo se construye la promesa comercial;",
                                                          "cómo ocurre el handoff Comercial → CS;",
                                                          "qué expectativas se generan;",
                                                          "cómo llegan solicitudes provenientes de oportunidades comerciales;",
                                                          "cómo se conecta expansión con Producto."
                                                      ],
                                            "source":  {
                                                           "locator":  "P707",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Recomendación: no abrir una nueva fase de assessment por esto. Validarlo mediante una sesión puntual solamente si el diseño del modelo identifica una dependencia crítica.",
                                            "source":  {
                                                           "locator":  "P712",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [
                                          {
                                              "id":  "ch03-p703-v",
                                              "sourceMark":  "V",
                                              "classification":  "H1",
                                              "statement":  "Comercial —",
                                              "sourceLocator":  "P703",
                                              "sourceArea":  "3. Áreas Entrevistadas",
                                              "supports":  [
                                                               "interviews"
                                                           ],
                                              "confidence":  "unreviewed",
                                              "validationStatus":  "pending"
                                          }
                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P701",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     },
                     {
                         "id":  "evaluacion-de-cobertura",
                         "title":  "Evaluación de cobertura",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-007",
                                                          "caption":  "Evaluación de cobertura",
                                                          "kind":  "simple",
                                                          "headers":  [
                                                                          "Dominio del ciclo",
                                                                          "Cobertura"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Estrategia / liderazgo",
                                                                           "🟢 Alta"
                                                                       ],
                                                                       [
                                                                           "Product Management",
                                                                           "🟢 Alta"
                                                                       ],
                                                                       [
                                                                           "Discovery",
                                                                           "🟢 Alta"
                                                                       ],
                                                                       [
                                                                           "UX",
                                                                           "🟢 Alta"
                                                                       ],
                                                                       [
                                                                           "Development",
                                                                           "🟢 Alta"
                                                                       ],
                                                                       [
                                                                           "Reliability / Release",
                                                                           "🟢 Alta"
                                                                       ],
                                                                       [
                                                                           "Support",
                                                                           "🟢 Alta"
                                                                       ],
                                                                       [
                                                                           "Customer Success",
                                                                           "🟢 Alta"
                                                                       ],
                                                                       [
                                                                           "Marketing / Market Signals",
                                                                           "🟢 Alta"
                                                                       ],
                                                                       [
                                                                           "Comercial",
                                                                           "🟡 Parcial"
                                                                       ],
                                                                       [
                                                                           "Analytics",
                                                                           "🟢 Transversal"
                                                                       ],
                                                                       [
                                                                           "Adopción",
                                                                           "🟢 Alta"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T7",
                                                                         "title":  "3. Áreas Entrevistadas"
                                                                     }
                                                      }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Conclusión",
                                            "source":  {
                                                           "locator":  "P715",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La cobertura conseguida es suficiente para construir el Assessment AS-IS y diseñar el Product Operating Model v0.1.",
                                            "source":  {
                                                           "locator":  "P716",
                                                           "title":  "3. Áreas Entrevistadas"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P714",
                                             "title":  "3. Áreas Entrevistadas"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "methodology",
                    "current-state",
                    "evidence-map"
                ],
    "source":  {
                   "title":  "3. Áreas Entrevistadas",
                   "locator":  "P561–P716",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
