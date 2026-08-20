import type { Chapter } from "@/types/content";

export const chapter = {
    "slug":  "value-stream",
    "group":  "Assessment",
    "title":  "Value Stream AS-IS",
    "sourceTitle":  "9. Value Stream AS-IS",
    "eyebrow":  "09 · Flujo actual",
    "summary":  "El Value Stream AS-IS reconstruye cómo una señal avanza desde su entrada hasta el feedback y el aprendizaje.",
    "takeaway":  "El flujo actual debe leerse como diagnóstico; las recomendaciones TO-BE permanecen explícitamente separadas.",
    "executive":  {
                      "primaryVisual":  "value-stream",
                      "keyFindings":  [
                                          "Las entradas al flujo son heterogéneas.",
                                          "La profundidad de Discovery y validación varía.",
                                          "Los handoffs pueden perder contexto.",
                                          "La evidencia posterior al release no converge siempre en una decisión común."
                                      ],
                      "sources":  [
                                      {
                                          "locator":  "P2041–P2422",
                                          "title":  "9. Value Stream AS-IS"
                                      }
                                  ],
                      "evidenceConfidence":  "medium",
                      "implication":  "La mejora debe optimizar el flujo completo y no únicamente la utilización o velocidad de una etapa.",
                      "evidenceStatus":  "pending"
                  },
    "sections":  [
                     {
                         "id":  "objetivo-del-analisis",
                         "title":  "Objetivo del análisis",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El Value Stream AS-IS representa cómo una señal, necesidad, problema u oportunidad recorre actualmente SEIF hasta convertirse —cuando el ciclo se completa— en una solución utilizada por un cliente y posteriormente en nueva información para Producto.",
                                            "source":  {
                                                           "locator":  "P2043",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El análisis no representa un proceso ideal ni una secuencia obligatoria. Consolida los patrones observados durante las entrevistas con Producto, UX/UI, Desarrollo, SRE/Soporte, Marketing y Customer Success.",
                                            "source":  {
                                                           "locator":  "P2044",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La principal conclusión es que SEIF sí posee un flujo end-to-end, pero las transiciones entre sus etapas operan con distintos niveles de formalización, evidencia, ownership y trazabilidad.",
                                            "source":  {
                                                           "locator":  "P2045",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2042",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "value-stream-consolidado",
                         "title":  "Value Stream consolidado",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo actual se representa de la siguiente manera:",
                                            "source":  {
                                                           "locator":  "P2048",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "MERCADO / CLIENTE / OPERACIÓN / TECNOLOGÍA",
                                            "source":  {
                                                           "locator":  "P2049",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P2050",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. SIGNAL",
                                            "source":  {
                                                           "locator":  "P2051",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Necesidad · Solicitud · Feedback · Incidente · Oportunidad · Dato",
                                            "source":  {
                                                           "locator":  "P2052",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P2053",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. INTERPRETACIÓN / PRODUCTO",
                                            "source":  {
                                                           "locator":  "P2054",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Entender necesidad · Recopilar contexto · Convertir en iniciativa",
                                            "source":  {
                                                           "locator":  "P2055",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P2056",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. DISCOVERY / UX",
                                            "source":  {
                                                           "locator":  "P2057",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Investigación · Diseño · Prototipo · Validación",
                                            "source":  {
                                                           "locator":  "P2058",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P2059",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. PRIORIZACIÓN / DECISIÓN",
                                            "source":  {
                                                           "locator":  "P2060",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Valor percibido · Clientes · Alcance · Uso · Capacidad · Dependencias",
                                            "source":  {
                                                           "locator":  "P2061",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P2062",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "5. DELIVERY",
                                            "source":  {
                                                           "locator":  "P2063",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Refinamiento · Desarrollo · Pruebas · Ajustes",
                                            "source":  {
                                                           "locator":  "P2064",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P2065",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "6. RELEASE / OPERACIÓN",
                                            "source":  {
                                                           "locator":  "P2066",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Despliegue · Estabilidad · Observabilidad · Operación",
                                            "source":  {
                                                           "locator":  "P2067",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P2068",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "7. IMPLEMENTACIÓN / ADOPCIÓN",
                                            "source":  {
                                                           "locator":  "P2069",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Configuración · Acompañamiento · Uso · Customer Success",
                                            "source":  {
                                                           "locator":  "P2070",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P2071",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "8. SOPORTE / FEEDBACK / DATOS",
                                            "source":  {
                                                           "locator":  "P2072",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tickets · Fricción · Uso · Clientes · Métricas · Mercado",
                                            "source":  {
                                                           "locator":  "P2073",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↓",
                                            "source":  {
                                                           "locator":  "P2074",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "9. APRENDIZAJE",
                                            "source":  {
                                                           "locator":  "P2075",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Nueva interpretación y nuevas decisiones",
                                            "source":  {
                                                           "locator":  "P2076",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "↺",
                                            "source":  {
                                                           "locator":  "P2077",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ciclo existe, pero no todas las iniciativas recorren las etapas con el mismo nivel de profundidad ni bajo los mismos criterios.",
                                            "source":  {
                                                           "locator":  "P2078",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2047",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-1-signal-entrada-de-demanda",
                         "title":  "Etapa 1 — Signal / Entrada de demanda",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito actual",
                                            "source":  {
                                                           "locator":  "P2081",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capturar necesidades y señales provenientes de la organización, clientes y operación.",
                                            "source":  {
                                                           "locator":  "P2082",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuentes identificadas",
                                            "source":  {
                                                           "locator":  "P2083",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas evidencian múltiples fuentes:",
                                            "source":  {
                                                           "locator":  "P2084",
                                                           "title":  "9. Value Stream AS-IS"
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
                                                          "Desarrollo/SRE;",
                                                          "dashboards y datos de uso."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2085",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tipología de señales observada",
                                            "source":  {
                                                           "locator":  "P2093",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entradas pueden adoptar formas diferentes:",
                                            "source":  {
                                                           "locator":  "P2094",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "solicitud de funcionalidad",
                                            "source":  {
                                                           "locator":  "P2095",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "necesidad del cliente",
                                            "source":  {
                                                           "locator":  "P2096",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "problema operativo",
                                            "source":  {
                                                           "locator":  "P2097",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "incidente",
                                            "source":  {
                                                           "locator":  "P2098",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "oportunidad comercial",
                                            "source":  {
                                                           "locator":  "P2099",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "idea",
                                            "source":  {
                                                           "locator":  "P2100",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "necesidad técnica",
                                            "source":  {
                                                           "locator":  "P2101",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "dato de utilización",
                                            "source":  {
                                                           "locator":  "P2102",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2103",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La amplitud de fuentes no constituye una debilidad. Por el contrario, refleja acceso a distintas perspectivas del producto.",
                                            "source":  {
                                                           "locator":  "P2104",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fricción aparece porque las señales no necesariamente llegan representadas bajo una misma unidad de análisis.",
                                            "source":  {
                                                           "locator":  "P2105",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una solicitud de cliente puede entrar más desarrollada que una señal de analytics; un problema técnico puede estar mejor definido que una necesidad de mercado; una solicitud urgente puede competir con una oportunidad respaldada por datos.",
                                            "source":  {
                                                           "locator":  "P2106",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción dominante",
                                            "source":  {
                                                           "locator":  "P2107",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Heterogeneidad del intake.",
                                            "source":  {
                                                           "locator":  "P2108",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Riesgo",
                                            "source":  {
                                                           "locator":  "P2109",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comparar soluciones solicitadas con problemas todavía no explorados como si fueran elementos equivalentes.",
                                            "source":  {
                                                           "locator":  "P2110",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2080",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-2-interpretacion-de-la-necesidad-producto",
                         "title":  "Etapa 2 — Interpretación de la necesidad / Producto",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito actual",
                                            "source":  {
                                                           "locator":  "P2113",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto actúa como uno de los principales puntos de convergencia de necesidades, solicitudes e iniciativas.",
                                            "source":  {
                                                           "locator":  "P2114",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto busca entender:",
                                            "source":  {
                                                           "locator":  "P2115",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "qué se necesita;",
                                                          "quién lo requiere;",
                                                          "cuál es el alcance;",
                                                          "qué relación tiene con el producto;",
                                                          "qué debería avanzar."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2116",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P2121",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La evolución metodológica de SEIF demuestra que Producto ya está intentando pasar de requerimientos hacia Outcomes, criterios de éxito y problemas de usuario.",
                                            "source":  {
                                                           "locator":  "P2122",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Históricamente, sin embargo, la organización reconoció un modelo más orientado a solicitudes y funcionalidades. En el kickoff se describió explícitamente el paso desde un modelo de feature factory hacia uno orientado a Outcomes.",
                                            "source":  {
                                                           "locator":  "P2123",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2124",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto se encuentra en transición entre dos lógicas:",
                                            "source":  {
                                                           "locator":  "P2125",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lógica histórica",
                                            "source":  {
                                                           "locator":  "P2126",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Solicitud → requerimiento → construcción",
                                            "source":  {
                                                           "locator":  "P2127",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lógica objetivo ya conceptualizada",
                                            "source":  {
                                                           "locator":  "P2128",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Problema → Outcome → evidencia → solución",
                                            "source":  {
                                                           "locator":  "P2129",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La transición todavía no opera consistentemente para todas las iniciativas.",
                                            "source":  {
                                                           "locator":  "P2130",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción dominante",
                                            "source":  {
                                                           "locator":  "P2131",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Convertir una señal en un problema suficientemente entendido antes de convertirlo en solución.",
                                            "source":  {
                                                           "locator":  "P2132",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2112",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-3-discovery-ux",
                         "title":  "Etapa 3 — Discovery / UX",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito actual",
                                            "source":  {
                                                           "locator":  "P2135",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Reducir incertidumbre respecto del problema y de la solución.",
                                            "source":  {
                                                           "locator":  "P2136",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidades existentes",
                                            "source":  {
                                                           "locator":  "P2137",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas con UX/UI confirmaron prácticas de:",
                                            "source":  {
                                                           "locator":  "P2138",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "investigación;",
                                                          "entrevistas;",
                                                          "entendimiento del usuario;",
                                                          "prototipado;",
                                                          "diseño;",
                                                          "MVP;",
                                                          "validación con clientes."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2139",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2146",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery existe como capacidad real.",
                                            "source":  {
                                                           "locator":  "P2147",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se trata de una práctica inexistente ni puramente teórica.",
                                            "source":  {
                                                           "locator":  "P2148",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La variabilidad se encuentra en:",
                                            "source":  {
                                                           "locator":  "P2149",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "cuándo participa UX;",
                                                          "qué profundidad requiere cada iniciativa;",
                                                          "cuándo se valida;",
                                                          "qué evidencia se considera suficiente;",
                                                          "cómo retorna el aprendizaje después del desarrollo."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2150",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado observado",
                                            "source":  {
                                                           "locator":  "P2155",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Discovery dependiente del contexto de la iniciativa.",
                                            "source":  {
                                                           "locator":  "P2156",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción dominante",
                                            "source":  {
                                                           "locator":  "P2157",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Variabilidad en la reducción de incertidumbre antes de comprometer Delivery.",
                                            "source":  {
                                                           "locator":  "P2158",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2134",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-4-priorizacion-y-decision",
                         "title":  "Etapa 4 — Priorización y decisión",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito actual",
                                            "source":  {
                                                           "locator":  "P2161",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Determinar qué iniciativas reciben atención y capacidad.",
                                            "source":  {
                                                           "locator":  "P2162",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Variables identificadas durante las entrevistas",
                                            "source":  {
                                                           "locator":  "P2163",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto considera elementos como:",
                                            "source":  {
                                                           "locator":  "P2164",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "clientes afectados;",
                                                          "necesidades;",
                                                          "uso;",
                                                          "alcance;",
                                                          "importancia de la iniciativa."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2165",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo incorpora:",
                                            "source":  {
                                                           "locator":  "P2170",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "capacidad;",
                                                          "dependencias;",
                                                          "dificultad;",
                                                          "factibilidad."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2171",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Liderazgo aporta:",
                                            "source":  {
                                                           "locator":  "P2175",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "contexto;",
                                                          "urgencia;",
                                                          "objetivos estratégicos."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2176",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2179",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF no trabaja sin criterios.",
                                            "source":  {
                                                           "locator":  "P2180",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existen múltiples criterios válidos, pero no se encuentran todavía integrados en una única lógica de decisión explícita y trazable.",
                                            "source":  {
                                                           "locator":  "P2181",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por esta razón, la prioridad puede construirse mediante negociación entre perspectivas.",
                                            "source":  {
                                                           "locator":  "P2182",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción dominante",
                                            "source":  {
                                                           "locator":  "P2183",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Criterios distribuidos.",
                                            "source":  {
                                                           "locator":  "P2184",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta que el AS-IS no responde consistentemente",
                                            "source":  {
                                                           "locator":  "P2185",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Por qué esta iniciativa recibe capacidad ahora y otra no?",
                                            "source":  {
                                                           "locator":  "P2186",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2160",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-5-delivery",
                         "title":  "Etapa 5 — Delivery",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito actual",
                                            "source":  {
                                                           "locator":  "P2189",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Convertir una iniciativa priorizada en una solución técnicamente funcional.",
                                            "source":  {
                                                           "locator":  "P2190",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidades identificadas",
                                            "source":  {
                                                           "locator":  "P2191",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo cuenta con mecanismos para:",
                                            "source":  {
                                                           "locator":  "P2192",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "analizar;",
                                                          "refinar;",
                                                          "planificar;",
                                                          "construir;",
                                                          "probar;",
                                                          "gestionar capacidad;",
                                                          "identificar dependencias."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2193",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El equipo ha operado mediante diferentes formas de organización y mecanismos de planificación a lo largo del tiempo.",
                                            "source":  {
                                                           "locator":  "P2200",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relevante",
                                            "source":  {
                                                           "locator":  "P2201",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Durante el kickoff, liderazgo indicó que determinadas iteraciones han requerido períodos prolongados de retroalimentación y ajuste, llegando en algunos casos a varios meses.",
                                            "source":  {
                                                           "locator":  "P2202",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las entrevistas de Desarrollo también evidencian cambios sucesivos de metodología y forma de trabajo.",
                                            "source":  {
                                                           "locator":  "P2203",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2204",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe evidencia para concluir que Desarrollo sea la causa primaria de los tiempos de iteración.",
                                            "source":  {
                                                           "locator":  "P2205",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo muestra que parte de la variabilidad llega desde etapas anteriores mediante:",
                                            "source":  {
                                                           "locator":  "P2206",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "claridad diferente;",
                                                          "nivel de Discovery diferente;",
                                                          "prioridades cambiantes;",
                                                          "dependencias;",
                                                          "decisiones pendientes."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2207",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción dominante",
                                            "source":  {
                                                           "locator":  "P2212",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incertidumbre upstream trasladada hacia Delivery.",
                                            "source":  {
                                                           "locator":  "P2213",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2188",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-6-release-y-operacion",
                         "title":  "Etapa 6 — Release y operación",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito actual",
                                            "source":  {
                                                           "locator":  "P2216",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Poner capacidades en producción y asegurar su operación.",
                                            "source":  {
                                                           "locator":  "P2217",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participación",
                                            "source":  {
                                                           "locator":  "P2218",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principalmente:",
                                            "source":  {
                                                           "locator":  "P2219",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Desarrollo;",
                                                          "SRE."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2220",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Capacidades existentes",
                                            "source":  {
                                                           "locator":  "P2222",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "despliegue;",
                                                          "operación;",
                                                          "monitoreo;",
                                                          "confiabilidad;",
                                                          "recuperación;",
                                                          "gestión técnica."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2223",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF también ha incorporado DORA como marco conceptual para entender la capacidad del sistema de entrega.",
                                            "source":  {
                                                           "locator":  "P2229",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia relevante",
                                            "source":  {
                                                           "locator":  "P2230",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE manifestó la existencia de deuda técnica relevante.",
                                            "source":  {
                                                           "locator":  "P2231",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También describió situaciones donde determinadas operaciones requieren intervención de SEIF.",
                                            "source":  {
                                                           "locator":  "P2232",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2233",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El release se encuentra más claramente definido como evento técnico que la medición posterior del valor generado.",
                                            "source":  {
                                                           "locator":  "P2234",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Además, la deuda técnica constituye una restricción real del sistema y compite con la evolución funcional por capacidad y atención.",
                                            "source":  {
                                                           "locator":  "P2235",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción dominante",
                                            "source":  {
                                                           "locator":  "P2236",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Conexión parcial entre sostenibilidad técnica y decisiones de Producto.",
                                            "source":  {
                                                           "locator":  "P2237",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2215",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-7-implementacion-activacion-y-adopcion",
                         "title":  "Etapa 7 — Implementación, activación y adopción",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito actual",
                                            "source":  {
                                                           "locator":  "P2240",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Llevar la solución desde producción hasta el uso real del cliente.",
                                            "source":  {
                                                           "locator":  "P2241",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Participación observada",
                                            "source":  {
                                                           "locator":  "P2242",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Principalmente:",
                                            "source":  {
                                                           "locator":  "P2243",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "Customer Success;",
                                                          "cliente/administrador;",
                                                          "Producto cuando se requiere;",
                                                          "Soporte;",
                                                          "otras capacidades dependiendo del caso."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2244",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Evidencia",
                                            "source":  {
                                                           "locator":  "P2249",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Customer Success realiza acompañamiento de implementación y uso.",
                                            "source":  {
                                                           "locator":  "P2250",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "También observa utilización respecto de lo adquirido.",
                                            "source":  {
                                                           "locator":  "P2251",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS manifestó una dependencia significativa del administrador del cliente.",
                                            "source":  {
                                                           "locator":  "P2252",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE, desde otra perspectiva, reportó dependencias operativas donde SEIF debe intervenir.",
                                            "source":  {
                                                           "locator":  "P2253",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2254",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Existe una diferencia relevante entre:",
                                            "source":  {
                                                           "locator":  "P2255",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "disponibilidad del producto",
                                            "source":  {
                                                           "locator":  "P2256",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "y",
                                            "source":  {
                                                           "locator":  "P2257",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "autonomía para obtener valor.",
                                            "source":  {
                                                           "locator":  "P2258",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El sistema actual todavía requiere acompañamiento significativo en determinados contextos.",
                                            "source":  {
                                                           "locator":  "P2259",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción dominante",
                                            "source":  {
                                                           "locator":  "P2260",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dependencia operativa y acompañamiento.",
                                            "source":  {
                                                           "locator":  "P2261",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Implicación del AS-IS",
                                            "source":  {
                                                           "locator":  "P2262",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Una capacidad desplegada no necesariamente se transforma automáticamente en adopción.",
                                            "source":  {
                                                           "locator":  "P2263",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2239",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-8-soporte-feedback-y-observacion",
                         "title":  "Etapa 8 — Soporte, feedback y observación",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito actual",
                                            "source":  {
                                                           "locator":  "P2266",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Detectar y resolver problemas posteriores al uso y conocer el comportamiento del cliente.",
                                            "source":  {
                                                           "locator":  "P2267",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fuentes de información existentes",
                                            "source":  {
                                                           "locator":  "P2268",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte",
                                            "source":  {
                                                           "locator":  "P2269",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Incidentes, consultas y dificultades.",
                                            "source":  {
                                                           "locator":  "P2270",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS",
                                            "source":  {
                                                           "locator":  "P2271",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopción, solicitudes y comportamiento del cliente.",
                                            "source":  {
                                                           "locator":  "P2272",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX",
                                            "source":  {
                                                           "locator":  "P2273",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Feedback y validación.",
                                            "source":  {
                                                           "locator":  "P2274",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE",
                                            "source":  {
                                                           "locator":  "P2275",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Comportamiento técnico.",
                                            "source":  {
                                                           "locator":  "P2276",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing",
                                            "source":  {
                                                           "locator":  "P2277",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Información de mercado.",
                                            "source":  {
                                                           "locator":  "P2278",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto",
                                            "source":  {
                                                           "locator":  "P2279",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Dashboards e iniciativas.",
                                            "source":  {
                                                           "locator":  "P2280",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Analytics",
                                            "source":  {
                                                           "locator":  "P2281",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Uso, usuarios, módulos, proyectos y licenciamiento.",
                                            "source":  {
                                                           "locator":  "P2282",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2283",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF tiene más información disponible de la que tenía históricamente.",
                                            "source":  {
                                                           "locator":  "P2284",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La limitación actual no es únicamente de captura.",
                                            "source":  {
                                                           "locator":  "P2285",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es de integración.",
                                            "source":  {
                                                           "locator":  "P2286",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción dominante",
                                            "source":  {
                                                           "locator":  "P2287",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Información distribuida entre funciones y herramientas.",
                                            "source":  {
                                                           "locator":  "P2288",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2265",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "etapa-9-learning-nueva-decision",
                         "title":  "Etapa 9 — Learning / nueva decisión",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "Propósito actual",
                                            "source":  {
                                                           "locator":  "P2291",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Transformar información posterior a la entrega en una nueva decisión.",
                                            "source":  {
                                                           "locator":  "P2292",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estado observado",
                                            "source":  {
                                                           "locator":  "P2293",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El aprendizaje ocurre.",
                                            "source":  {
                                                           "locator":  "P2294",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los clientes aportan feedback.",
                                            "source":  {
                                                           "locator":  "P2295",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS identifica problemas.",
                                            "source":  {
                                                           "locator":  "P2296",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte identifica patrones.",
                                            "source":  {
                                                           "locator":  "P2297",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE observa operación.",
                                            "source":  {
                                                           "locator":  "P2298",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing identifica mercado.",
                                            "source":  {
                                                           "locator":  "P2299",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX obtiene información.",
                                            "source":  {
                                                           "locator":  "P2300",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto analiza métricas.",
                                            "source":  {
                                                           "locator":  "P2301",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, no se evidenció un único mecanismo recurrente que consolide estas señales para responder sistemáticamente:",
                                            "source":  {
                                                           "locator":  "P2302",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿el Outcome se alcanzó?;",
                                                          "¿qué aprendimos?;",
                                                          "¿qué debemos ajustar?;",
                                                          "¿qué debemos escalar?;",
                                                          "¿qué debemos retirar?;",
                                                          "¿qué no debemos seguir desarrollando?"
                                                      ],
                                            "source":  {
                                                           "locator":  "P2303",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2309",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo posee múltiples mecanismos de feedback, pero el cierre del loop de Producto todavía está distribuido.",
                                            "source":  {
                                                           "locator":  "P2310",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Fricción dominante",
                                            "source":  {
                                                           "locator":  "P2311",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Lost Learning / aprendizaje fragmentado.",
                                            "source":  {
                                                           "locator":  "P2312",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2290",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "matriz-value-stream-as-is",
                         "title":  "Matriz Value Stream AS-IS",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "table",
                                            "table":  {
                                                          "id":  "source-table-017",
                                                          "caption":  "Matriz Value Stream AS-IS",
                                                          "kind":  "comparison",
                                                          "headers":  [
                                                                          "Etapa",
                                                                          "Entrada predominante",
                                                                          "Capacidad principal",
                                                                          "Salida actual",
                                                                          "Fricción dominante"
                                                                      ],
                                                          "rows":  [
                                                                       [
                                                                           "Signal",
                                                                           "Mercado, cliente, operación, datos",
                                                                           "Varias áreas",
                                                                           "Solicitud/señal",
                                                                           "Formatos heterogéneos"
                                                                       ],
                                                                       [
                                                                           "Interpret",
                                                                           "Señal",
                                                                           "Producto",
                                                                           "Iniciativa/problema",
                                                                           "Conversión variable request → problem"
                                                                       ],
                                                                       [
                                                                           "Discover",
                                                                           "Iniciativa",
                                                                           "Producto + UX",
                                                                           "Investigación/diseño/prototipo",
                                                                           "Profundidad variable"
                                                                       ],
                                                                       [
                                                                           "Decide",
                                                                           "Evidencia + contexto",
                                                                           "Producto + liderazgo + Tech",
                                                                           "Prioridad",
                                                                           "Criterios distribuidos"
                                                                       ],
                                                                       [
                                                                           "Deliver",
                                                                           "Iniciativa priorizada",
                                                                           "Desarrollo",
                                                                           "Incremento funcional",
                                                                           "Incertidumbre/ajustes"
                                                                       ],
                                                                       [
                                                                           "Release",
                                                                           "Incremento",
                                                                           "Dev + SRE",
                                                                           "Producción",
                                                                           "Dependencias + deuda"
                                                                       ],
                                                                       [
                                                                           "Adopt",
                                                                           "Release",
                                                                           "CS + cliente",
                                                                           "Uso",
                                                                           "Dependencia operativa"
                                                                       ],
                                                                       [
                                                                           "Observe",
                                                                           "Uso/operación",
                                                                           "CS + Soporte + SRE + UX + datos",
                                                                           "Señales",
                                                                           "Fragmentación"
                                                                       ],
                                                                       [
                                                                           "Learn",
                                                                           "Señales",
                                                                           "Producto + actores relevantes",
                                                                           "Nueva decisión",
                                                                           "Loop no uniforme"
                                                                       ]
                                                                   ],
                                                          "source":  {
                                                                         "locator":  "T17",
                                                                         "title":  "9. Value Stream AS-IS"
                                                                     }
                                                      }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2314",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "handoffs-criticos",
                         "title":  "Handoffs críticos",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El AS-IS identifica cinco interfaces especialmente relevantes.",
                                            "source":  {
                                                           "locator":  "P2317",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interface 1 — Señal → Producto",
                                            "source":  {
                                                           "locator":  "P2318",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta no uniformemente resuelta:",
                                            "source":  {
                                                           "locator":  "P2319",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Estamos recibiendo un problema o una solución solicitada?",
                                            "source":  {
                                                           "locator":  "P2320",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interface 2 — Producto/UX → Desarrollo",
                                            "source":  {
                                                           "locator":  "P2322",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta crítica:",
                                            "source":  {
                                                           "locator":  "P2323",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿Cuánta incertidumbre permanece cuando se compromete capacidad?",
                                            "source":  {
                                                           "locator":  "P2324",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interface 3 — Desarrollo → SRE",
                                            "source":  {
                                                           "locator":  "P2326",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta crítica:",
                                            "source":  {
                                                           "locator":  "P2327",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿La solución está solamente terminada o está preparada para operar?",
                                            "source":  {
                                                           "locator":  "P2328",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interface 4 — Release → Customer Success",
                                            "source":  {
                                                           "locator":  "P2330",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta crítica:",
                                            "source":  {
                                                           "locator":  "P2331",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿CS conoce qué resultado debe lograr el cliente y cómo identificarlo?",
                                            "source":  {
                                                           "locator":  "P2332",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Interface 5 — Cliente/Operación → Producto",
                                            "source":  {
                                                           "locator":  "P2334",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Pregunta crítica:",
                                            "source":  {
                                                           "locator":  "P2335",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "¿El feedback posterior se convierte consistentemente en aprendizaje y nueva decisión?",
                                            "source":  {
                                                           "locator":  "P2336",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas cinco interfaces concentran buena parte de la fricción observada.",
                                            "source":  {
                                                           "locator":  "P2337",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2316",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "lead-time-de-aprendizaje",
                         "title":  "Lead Time de aprendizaje",
                         "contentClass":  "mixed",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El kickoff aporta una señal especialmente relevante: liderazgo manifestó que algunas iteraciones pueden tardar alrededor de seis meses y otras incluso más antes de obtener suficiente retroalimentación para volver a iterar.",
                                            "source":  {
                                                           "locator":  "P2340",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Este dato no permite concluir que el tiempo corresponda exclusivamente al desarrollo técnico.",
                                            "source":  {
                                                           "locator":  "P2341",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por el contrario, las entrevistas sugieren que el ciclo completo incluye:",
                                            "source":  {
                                                           "locator":  "P2342",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "entendimiento + decisión + diseño + construcción + entrega + uso + feedback.",
                                            "source":  {
                                                           "locator":  "P2343",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2344",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El indicador sistémico más importante no es únicamente el Lead Time de Desarrollo.",
                                            "source":  {
                                                           "locator":  "P2345",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Es el:",
                                            "source":  {
                                                           "locator":  "P2346",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Learning Lead Time",
                                            "source":  {
                                                           "locator":  "P2347",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Tiempo desde que SEIF identifica una hipótesis relevante hasta que obtiene evidencia suficiente para confirmar, cambiar o descartar esa hipótesis.",
                                            "source":  {
                                                           "locator":  "P2348",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El AS-IS evidencia que este ciclo puede ser prolongado.",
                                            "source":  {
                                                           "locator":  "P2349",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No se dispone todavía de una medición sistemática del indicador.",
                                            "source":  {
                                                           "locator":  "P2350",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2339",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "estado-as-is-de-la-responsabilidad",
                         "title":  "Estado AS-IS de la responsabilidad",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo actual incorpora responsabilidad compartida mediante células y colaboración transversal.",
                                            "source":  {
                                                           "locator":  "P2353",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Sin embargo, el assessment identifica diferentes tipos de accountability:",
                                            "source":  {
                                                           "locator":  "P2354",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto: problema, prioridad y dirección.",
                                            "source":  {
                                                           "locator":  "P2355",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "UX: experiencia y validación.",
                                            "source":  {
                                                           "locator":  "P2356",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Desarrollo: construcción.",
                                            "source":  {
                                                           "locator":  "P2357",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SRE: operación y confiabilidad.",
                                            "source":  {
                                                           "locator":  "P2358",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "CS: implementación/adopción.",
                                            "source":  {
                                                           "locator":  "P2359",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Soporte: resolución de fricción.",
                                            "source":  {
                                                           "locator":  "P2360",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Marketing: mercado/comunicación.",
                                            "source":  {
                                                           "locator":  "P2361",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas responsabilidades funcionales están razonablemente identificadas.",
                                            "source":  {
                                                           "locator":  "P2362",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La brecha se encuentra en los resultados de transición.",
                                            "source":  {
                                                           "locator":  "P2363",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ejemplos:",
                                            "source":  {
                                                           "locator":  "P2364",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "¿quién responde porque una oportunidad tenga evidencia suficiente?;",
                                                          "¿quién determina que Discovery terminó?;",
                                                          "¿quién responde porque una capacidad sea adoptada?;",
                                                          "¿quién decide retirar una funcionalidad que no produce valor?"
                                                      ],
                                            "source":  {
                                                           "locator":  "P2365",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2369",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El ownership funcional es más claro que el ownership end-to-end del flujo de valor.",
                                            "source":  {
                                                           "locator":  "P2370",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2352",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "estado-as-is-de-herramientas",
                         "title":  "Estado AS-IS de herramientas",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "La información se encuentra distribuida entre:",
                                            "source":  {
                                                           "locator":  "P2373",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "list",
                                            "items":  [
                                                          "hojas de cálculo;",
                                                          "herramientas utilizadas por Desarrollo;",
                                                          "dashboards;",
                                                          "documentos;",
                                                          "mecanismos propios de cada función."
                                                      ],
                                            "source":  {
                                                           "locator":  "P2374",
                                                           "title":  "SEIF Product Operating System — Assessment \u0026 Blueprint v0.1"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2379",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La fragmentación tecnológica replica la fragmentación del Value Stream.",
                                            "source":  {
                                                           "locator":  "P2380",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "No existe actualmente trazabilidad consolidada:",
                                            "source":  {
                                                           "locator":  "P2381",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Signal → Opportunity → Outcome → Discovery → Delivery → Release → Adoption → Result.",
                                            "source":  {
                                                           "locator":  "P2382",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Esto limita la posibilidad de analizar el sistema completo desde un único hilo de información.",
                                            "source":  {
                                                           "locator":  "P2383",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2372",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "estado-as-is-de-metricas",
                         "title":  "Estado AS-IS de métricas",
                         "contentClass":  "source-fact",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF ya dispone de métricas pertenecientes a diferentes partes del flujo:",
                                            "source":  {
                                                           "locator":  "P2386",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Producto / cliente",
                                            "source":  {
                                                           "locator":  "P2387",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Uso, usuarios, módulos, licencias.",
                                            "source":  {
                                                           "locator":  "P2388",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Modelo de Producto",
                                            "source":  {
                                                           "locator":  "P2389",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "TTV, adherencia, criterios de éxito.",
                                            "source":  {
                                                           "locator":  "P2390",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Delivery / SRE",
                                            "source":  {
                                                           "locator":  "P2391",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "DORA.",
                                            "source":  {
                                                           "locator":  "P2392",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Negocio",
                                            "source":  {
                                                           "locator":  "P2393",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Ingresos y clientes, según el ámbito correspondiente.",
                                            "source":  {
                                                           "locator":  "P2394",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Diagnóstico",
                                            "source":  {
                                                           "locator":  "P2395",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las métricas existen en diferentes capas.",
                                            "source":  {
                                                           "locator":  "P2396",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El gap es la conexión causal-operativa entre ellas.",
                                            "source":  {
                                                           "locator":  "P2397",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Por ejemplo:",
                                            "source":  {
                                                           "locator":  "P2398",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Deployment Frequency alta",
                                            "source":  {
                                                           "locator":  "P2399",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no demuestra:",
                                            "source":  {
                                                           "locator":  "P2400",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Adopción alta.",
                                            "source":  {
                                                           "locator":  "P2401",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Y:",
                                            "source":  {
                                                           "locator":  "P2402",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Usuario activo",
                                            "source":  {
                                                           "locator":  "P2403",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "no demuestra necesariamente:",
                                            "source":  {
                                                           "locator":  "P2404",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Outcome logrado.",
                                            "source":  {
                                                           "locator":  "P2405",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "La organización ya reconoce conceptualmente esta separación.",
                                            "source":  {
                                                           "locator":  "P2406",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El reto AS-IS es hacerla operacional.",
                                            "source":  {
                                                           "locator":  "P2407",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2385",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     },
                     {
                         "id":  "diagnostico-final-del-value-stream-as-is",
                         "title":  "Diagnóstico final del Value Stream AS-IS",
                         "contentClass":  "assessment-interpretation",
                         "blocks":  [
                                        {
                                            "type":  "paragraph",
                                            "text":  "El flujo actual no está roto.",
                                            "source":  {
                                                           "locator":  "P2410",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Está fragmentado en sus transiciones.",
                                            "source":  {
                                                           "locator":  "P2411",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "SEIF dispone de las capacidades necesarias para recorrer prácticamente todo el ciclo de valor, pero todavía existe variabilidad en cuatro conexiones fundamentales:",
                                            "source":  {
                                                           "locator":  "P2412",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "1. Signal → Evidence",
                                            "source":  {
                                                           "locator":  "P2413",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Las señales no siempre se convierten bajo el mismo estándar en problemas respaldados por evidencia.",
                                            "source":  {
                                                           "locator":  "P2414",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "2. Evidence → Decision",
                                            "source":  {
                                                           "locator":  "P2415",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Los criterios de priorización y los derechos de decisión permanecen distribuidos.",
                                            "source":  {
                                                           "locator":  "P2416",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "3. Decision → Value",
                                            "source":  {
                                                           "locator":  "P2417",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "El nivel de Discovery, validación y preparación antes del Delivery varía.",
                                            "source":  {
                                                           "locator":  "P2418",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "4. Value → Learning",
                                            "source":  {
                                                           "locator":  "P2419",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Datos y feedback existen, pero no siempre convergen sistemáticamente en una nueva decisión.",
                                            "source":  {
                                                           "locator":  "P2420",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        },
                                        {
                                            "type":  "paragraph",
                                            "text":  "Estas cuatro conexiones conforman el principal objeto de diseño del futuro Product Operating System.",
                                            "source":  {
                                                           "locator":  "P2421",
                                                           "title":  "9. Value Stream AS-IS"
                                                       }
                                        }
                                    ],
                         "evidence":  [

                                      ],
                         "sources":  [
                                         {
                                             "locator":  "P2409",
                                             "title":  "9. Value Stream AS-IS"
                                         }
                                     ]
                     }
                 ],
    "related":  [
                    "current-state",
                    "waste-friction",
                    "delivery"
                ],
    "source":  {
                   "title":  "9. Value Stream AS-IS",
                   "locator":  "P2041–P2422",
                   "note":  "Locators internos de párrafo OOXML; no se muestran por defecto."
               }
} satisfies Chapter;
