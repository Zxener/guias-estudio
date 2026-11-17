const orders = [
  {
    "name": "Zoología Agrícola 4",
    "file": "001.webp",
    "emoji": "🌿",
    "examples": "Presentación del módulo.",
    "facts": [
      "Plagas, enfermedades y organismos benéficos forman parte del recorrido.",
      "El manejo integrado relaciona observación, diagnóstico y distintas herramientas de manejo."
    ],
    "importance": "El objetivo es reconocer organismos, procesos y daños en el contexto de la sanidad vegetal.",
    "wings": "Plagas, enfermedades y organismos benéficos",
    "mouth": "Observación y manejo integrado",
    "meta": "Presentación",
    "question": "¿Qué enfoque reúne observación, diagnóstico y distintas herramientas de manejo?",
    "answer": "Manejo integrado",
    "number": 1
  },
  {
    "name": "Ciclos de vida",
    "file": "002.webp",
    "emoji": "🔄",
    "examples": "Número de ciclos por año y respuestas al ambiente.",
    "facts": [
      "Univoltino: una generación por año; multivoltino: dos o más.",
      "Semivoltino: un ciclo tarda más de un año.",
      "Quiescencia: detención temporal, flexible y reversible ante condiciones desfavorables.",
      "Diapausa: detención programada del desarrollo, regulada por señales ambientales.",
      "Migración: desplazamiento hacia condiciones más favorables."
    ],
    "importance": "No confundir una pausa reversible inmediata con una detención programada.",
    "wings": "Voltinismo y ambiente",
    "mouth": "Quiescencia, diapausa y migración",
    "meta": "Conceptos",
    "question": "¿Cómo se llama la detención programada del desarrollo?",
    "answer": "Diapausa",
    "number": 2
  },
  {
    "name": "Polilla del manzano, carpocapsa",
    "file": "003.webp",
    "emoji": "🦋",
    "examples": "Cydia pomonella.",
    "facts": [
      "Las larvas perforan los frutos y afectan producción y calidad.",
      "El hospedante principal presentado es el manzano (Malus domestica), además de otros frutales de pepita.",
      "La lámina utiliza 10 °C y 32 °C como umbrales del modelo térmico.",
      "Los grados-día acumulan calor útil para estimar etapas del desarrollo."
    ],
    "importance": "Los umbrales se presentan como datos del material; el cálculo real depende del modelo y la región.",
    "wings": "Cydia pomonella · manzano",
    "mouth": "Grados-día y desarrollo",
    "meta": "Plaga",
    "question": "¿Qué etapa de la carpocapsa perfora los frutos?",
    "answer": "La larva",
    "number": 3
  },
  {
    "name": "Modelación logística en carpocapsa",
    "file": "004.webp",
    "emoji": "📈",
    "examples": "Emergencia y eclosión de huevos: Alto Valle del Río Negro.",
    "facts": [
      "Una función logística describe una curva en S: inicio lento, aceleración y estabilización.",
      "La validación compara valores observados con valores estimados.",
      "La lámina atribuye al estudio del Alto Valle del Río Negro (2005) un R² de 0,9778.",
      "El material vincula los grados-día con la estimación de la dinámica del primer vuelo."
    ],
    "importance": "El valor de ajuste se transcribe de la lámina: no se dispone aquí de los datos originales para recalcularlo.",
    "wings": "Carpocapsa · primer vuelo",
    "mouth": "Curva logística y validación",
    "meta": "Modelos",
    "question": "¿Qué se compara al validar el modelo presentado?",
    "answer": "Valores observados y estimados",
    "number": 4
  },
  {
    "name": "Humedad",
    "file": "005.webp",
    "emoji": "💧",
    "examples": "Efectos sobre plantas, plagas y enfermedades.",
    "facts": [
      "La humedad relativa expresa el vapor de agua respecto del máximo posible a esa temperatura.",
      "La lámina relaciona HR baja con mayor transpiración y posible estrés hídrico.",
      "La HR alta puede favorecer la germinación de esporas y el desarrollo de determinadas enfermedades.",
      "Las respuestas dependen del organismo y de las condiciones ambientales."
    ],
    "importance": "No todas las plagas y enfermedades responden igual: usá estas relaciones como conceptos generales.",
    "wings": "Humedad relativa (HR)",
    "mouth": "Transpiración y condiciones sanitarias",
    "meta": "Ambiente",
    "question": "¿Qué significa la sigla HR?",
    "answer": "Humedad relativa",
    "number": 5
  },
  {
    "name": "Plagas importantes",
    "file": "006.webp",
    "emoji": "🔎",
    "examples": "Principales grupos de interés agrícola.",
    "facts": [
      "Lepidópteros: sus orugas pueden dañar hojas, brotes, flores y frutos.",
      "Coleópteros: adultos y larvas pueden alimentarse de diferentes órganos vegetales.",
      "Chinches: aparato picador-chupador; pueden debilitar plantas y deformar frutos.",
      "Pulgones: extraen savia y pueden transmitir virus.",
      "El MIP combina monitoreo, prácticas culturales, control biológico y uso racional de productos."
    ],
    "importance": "La importancia de una especie se relaciona con su daño, el cultivo y el contexto de producción.",
    "wings": "Lepidópteros, coleópteros, chinches y pulgones",
    "mouth": "Monitoreo y manejo integrado",
    "meta": "Grupos",
    "question": "¿Qué grupo se presenta con orugas que dañan órganos vegetales?",
    "answer": "Lepidópteros",
    "number": 6
  },
  {
    "name": "Mosaico del rosal",
    "file": "007.webp",
    "emoji": "🌹",
    "examples": "PNRSV y Apple mosaic virus (ApMV).",
    "facts": [
      "Es una enfermedad viral que afecta la calidad ornamental del rosal.",
      "Puede asociarse a Prunus necrotic ringspot virus (PNRSV) y Apple mosaic virus (ApMV).",
      "Los síntomas incluyen mosaico, bandas y moteados amarillos y verdes; puede haber deformación.",
      "La propagación con material infectado es una vía importante de transmisión.",
      "La prevención prioriza plantas y material de propagación libres de virus."
    ],
    "importance": "Aclaración: Apple mosaic virus se abrevia ApMV para evitar confundirlo con otros virus. No se atribuye su transmisión a pulgones en esta guía.",
    "wings": "Rosal · PNRSV y ApMV",
    "mouth": "Mosaico y material de propagación",
    "meta": "Enfermedad",
    "question": "¿Qué práctica es clave para prevenir el mosaico del rosal?",
    "answer": "Usar material de propagación libre de virus",
    "number": 7
  },
  {
    "name": "Enfermedad: ¿monocíclica o policíclica? Plaga: ¿univoltina o multivoltina?",
    "file": "008.webp",
    "emoji": "🗓️",
    "examples": "Definiciones y ejemplos: primera comparación.",
    "facts": [
      "Enfermedad monocíclica: un ciclo de infección en la campaña.",
      "Enfermedad policíclica: varios ciclos de infección en la misma campaña.",
      "Plaga univoltina: una generación por año.",
      "Plaga multivoltina: dos o más generaciones por año."
    ],
    "importance": "Aclaración sobre los ejemplos de la lámina: la roya del tallo puede repetir ciclos y la carpocapsa puede tener varias generaciones según el clima. No memorices esos dos ejemplos como reglas universales.",
    "wings": "Ciclos de infección y generaciones",
    "mouth": "Campaña de cultivo frente a año",
    "meta": "Conceptos",
    "question": "¿Qué describe una plaga multivoltina?",
    "answer": "Dos o más generaciones por año",
    "number": 8
  },
  {
    "name": "Mal de Río IV",
    "file": "009.webp",
    "emoji": "🌽",
    "examples": "Mal de Río Cuarto virus (MRCV).",
    "facts": [
      "Enfermedad viral del maíz (Zea mays).",
      "La lámina identifica a MRCV como agente causal y lo relaciona con el género Fijivirus.",
      "Se transmite principalmente por chicharritas vectoras.",
      "Puede producir deformación y acortamiento de hojas, lesiones cloróticas y espigas anormales.",
      "Puede reducir crecimiento, llenado de granos y rendimiento."
    ],
    "importance": "Diferenciá agente causal (virus), vector (chicharrita) y hospedante (maíz).",
    "wings": "Maíz · MRCV",
    "mouth": "Virus, vector y síntomas",
    "meta": "Enfermedad",
    "question": "¿Qué insectos se presentan como vectores del Mal de Río Cuarto?",
    "answer": "Chicharritas",
    "number": 9
  },
  {
    "name": "Enfermedad: ¿monocíclica o policíclica? Plaga: ¿univoltina o multivoltina?",
    "file": "010.webp",
    "emoji": "🔁",
    "examples": "Frecuencia de ciclos y generaciones: síntesis.",
    "facts": [
      "Monocíclica: un ciclo; policíclica: varios ciclos durante la campaña.",
      "Univoltina: una generación anual; multivoltina: varias generaciones anuales.",
      "Las infecciones secundarias pueden multiplicar el inóculo y permitir reinfecciones.",
      "La frecuencia de ciclos y generaciones ayuda a interpretar la dinámica y planificar el monitoreo."
    ],
    "importance": "Este tema repite la comparación del punto 8 y se conserva en el lugar indicado por el índice.",
    "wings": "Enfermedades y plagas",
    "mouth": "Frecuencia y dinámica temporal",
    "meta": "Conceptos",
    "question": "¿Qué término se refiere a varios ciclos de infección en una campaña?",
    "answer": "Policíclica",
    "number": 10
  },
  {
    "name": "Picudo de las palmeras",
    "file": "011.webp",
    "emoji": "🌴",
    "examples": "Rhynchophorus ferrugineus.",
    "facts": [
      "La lámina presenta el ciclo huevo → larva → pupa → adulto.",
      "Los daños incluyen perforaciones, marchitez y posible muerte de la planta.",
      "El material menciona monitoreo, trampas con feromonas, control biológico y manejo integrado."
    ],
    "importance": "Nombre del índice: Rhynchophorus ferrugineus; también presenta los sinónimos Curculio ferrugineus y Calandra ferruginea.",
    "wings": "Rhynchophorus ferrugineus · palmeras",
    "mouth": "Perforaciones y marchitez",
    "meta": "Plaga",
    "question": "¿Qué especie corresponde al picudo de las palmeras?",
    "answer": "Rhynchophorus ferrugineus",
    "number": 11
  },
  {
    "name": "Vaquita de San Antonio",
    "file": "012.webp",
    "emoji": "🪲",
    "examples": "Diabrotica speciosa.",
    "facts": [
      "La lámina describe un escarabajo de 5–7 mm con manchas negras.",
      "Presenta ciclo huevo → larva → pupa → adulto.",
      "El material señala daños en hojas, tallos y frutos.",
      "Menciona rotación de cultivos, control químico y biológico y monitoreo permanente."
    ],
    "importance": "El nombre común puede referirse a distintos insectos. En esta ficha se estudia Diabrotica speciosa (sinónimo presentado: Galeruca speciosa).",
    "wings": "Diabrotica speciosa",
    "mouth": "Daños y reconocimiento",
    "meta": "Plaga",
    "question": "¿Qué nombre científico se estudia bajo «Vaquita de San Antonio» en esta ficha?",
    "answer": "Diabrotica speciosa",
    "number": 12
  },
  {
    "name": "Isoca de la espiga",
    "file": "013.webp",
    "emoji": "🐛",
    "examples": "Helicoverpa zea.",
    "facts": [
      "La lámina presenta el ciclo huevo → larva → pupa → adulto.",
      "Se indican daños en maíz, soja y otros cultivos.",
      "El material destaca monitoreo, control integrado y buenas prácticas."
    ],
    "importance": "El índice presenta los nombres Heliothis zea y Bombyx obsoleta como sinónimos.",
    "wings": "Helicoverpa zea · maíz y soja",
    "mouth": "Larvas y daño en cultivos",
    "meta": "Plaga",
    "question": "¿Cuál es el nombre científico de la isoca de la espiga en el material?",
    "answer": "Helicoverpa zea",
    "number": 13
  }
];
