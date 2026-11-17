const orders = [
  {
    "name": "Coleoptera",
    "file": "001.webp",
    "emoji": "🐞",
    "examples": "Escarabajos y vaquitas de San Antonio.",
    "facts": [
      "Élitros: alas anteriores endurecidas.",
      "Aparato bucal masticador.",
      "Metamorfosis completa."
    ],
    "importance": "Muchas especies pueden ser plagas o benéficas.",
    "wings": "Élitros (alas anteriores endurecidas)",
    "mouth": "Masticador",
    "meta": "Completa",
    "question": "¿Qué orden tiene élitros, es decir, alas anteriores endurecidas?",
    "number": 1
  },
  {
    "name": "Lepidoptera",
    "file": "002.webp",
    "emoji": "🦋",
    "examples": "Mariposas y polillas.",
    "facts": [
      "Alas con escamas.",
      "Larvas llamadas orugas.",
      "Metamorfosis completa."
    ],
    "importance": "Muchas especies son plagas de cultivos y ornamentales.",
    "wings": "Alas con escamas",
    "mouth": "No indicado",
    "meta": "Completa",
    "question": "¿Qué orden tiene alas con escamas y larvas llamadas orugas?",
    "number": 2
  },
  {
    "name": "Diptera",
    "file": "003.webp",
    "emoji": "🪰",
    "examples": "Moscas y mosquitos.",
    "facts": [
      "Un solo par de alas.",
      "Alas posteriores reducidas a balancines.",
      "Metamorfosis completa."
    ],
    "importance": "Incluye plagas y vectores de enfermedades.",
    "wings": "Un par; posteriores reducidas a balancines",
    "mouth": "No indicado",
    "meta": "Completa",
    "question": "¿Qué orden presenta un solo par de alas y balancines?",
    "number": 3
  },
  {
    "name": "Hemiptera",
    "file": "004.webp",
    "emoji": "🌱",
    "examples": "Pulgones, chicharritas, moscas blancas y chinches.",
    "facts": [
      "Aparato bucal picador-suctor.",
      "Se alimentan de savia o fluidos.",
      "Metamorfosis incompleta."
    ],
    "importance": "Importantes plagas y vectores de virus y fitoplasmas.",
    "wings": "No indicado",
    "mouth": "Picador-suctor",
    "meta": "Incompleta",
    "question": "¿Qué orden incluye pulgones y moscas blancas y se alimenta de savia o fluidos?",
    "number": 4
  },
  {
    "name": "Hymenoptera",
    "file": "005.webp",
    "emoji": "🐝",
    "examples": "Abejas, avispas y hormigas.",
    "facts": [
      "Dos pares de alas membranosas.",
      "Cintura estrecha en muchas especies.",
      "Metamorfosis completa."
    ],
    "importance": "Muchas especies son polinizadores o agentes de control biológico.",
    "wings": "Dos pares membranosas",
    "mouth": "No indicado",
    "meta": "Completa",
    "question": "¿Qué orden tiene cintura estrecha en muchas especies e incluye abejas y hormigas?",
    "number": 5
  },
  {
    "name": "Orthoptera",
    "file": "006.webp",
    "emoji": "🦗",
    "examples": "Saltamontes y langostas.",
    "facts": [
      "Patas posteriores saltadoras.",
      "Aparato bucal masticador.",
      "Metamorfosis incompleta."
    ],
    "importance": "Pueden ser plagas defoliadoras.",
    "wings": "No indicado",
    "mouth": "Masticador",
    "meta": "Incompleta",
    "question": "¿Qué orden incluye saltamontes y langostas con patas posteriores saltadoras?",
    "number": 6
  },
  {
    "name": "Odonata",
    "file": "007.webp",
    "emoji": "💧",
    "examples": "Libélulas y caballitos del diablo.",
    "facts": [
      "Dos pares de alas largas y membranosas.",
      "Ojos compuestos grandes.",
      "Metamorfosis incompleta."
    ],
    "importance": "Son depredadores de otros insectos e importantes en el equilibrio ecológico.",
    "wings": "Dos pares largas y membranosas",
    "mouth": "No indicado",
    "meta": "Incompleta",
    "question": "¿Qué orden combina ojos compuestos grandes con dos pares de alas largas y membranosas?",
    "number": 7
  },
  {
    "name": "Isoptera",
    "file": "008.webp",
    "emoji": "🪵",
    "examples": "Termitas.",
    "facts": [
      "Insectos sociales.",
      "Se alimentan de madera y materia orgánica.",
      "Cuerpo blando y claro."
    ],
    "importance": "Pueden ser plagas en viveros e infraestructura.",
    "wings": "No indicado",
    "mouth": "No indicado",
    "meta": "No indicada",
    "question": "¿Qué grupo se presenta con insectos sociales de cuerpo blando y claro que comen madera?",
    "number": 8
  },
  {
    "name": "Blattodea",
    "file": "009.webp",
    "emoji": "🍂",
    "examples": "Cucarachas.",
    "facts": [
      "Cuerpo aplanado.",
      "Antenas largas.",
      "Aparato bucal masticador."
    ],
    "importance": "Pueden contaminar sustratos y alimentos.",
    "wings": "No indicado",
    "mouth": "Masticador",
    "meta": "No indicada",
    "question": "¿Qué orden se ilustra con cucarachas de cuerpo aplanado y antenas largas?",
    "number": 9
  },
  {
    "name": "Mantodea",
    "file": "010.webp",
    "emoji": "🌿",
    "examples": "Mantis.",
    "facts": [
      "Patas anteriores raptoras.",
      "Cabeza triangular y móvil.",
      "Aparato bucal masticador."
    ],
    "importance": "Son depredadores benéficos en el control de otras plagas.",
    "wings": "No indicado",
    "mouth": "Masticador",
    "meta": "No indicada",
    "question": "¿Qué orden tiene patas anteriores raptoras y cabeza triangular y móvil?",
    "number": 10
  },
  {
    "name": "Phasmatodea",
    "file": "015.webp",
    "emoji": "🌾",
    "examples": "Insectos palo.",
    "facts": [
      "Cuerpo alargado y delgado.",
      "Mimetismo con ramas y hojas.",
      "Aparato bucal masticador."
    ],
    "importance": "Generalmente herbívoros y de baja importancia como plaga.",
    "wings": "No indicado",
    "mouth": "Masticador",
    "meta": "No indicada",
    "question": "¿Qué orden se caracteriza por el mimetismo con ramas y hojas?",
    "number": 11
  },
  {
    "name": "Dermaptera",
    "file": "013.webp",
    "emoji": "🍁",
    "examples": "Tijeretas.",
    "facts": [
      "Cuerpo alargado y aplanado.",
      "Cercos (cerci) en forma de pinza.",
      "Aparato bucal masticador."
    ],
    "importance": "Omnívoros; pueden dañar flores y frutos.",
    "wings": "No indicado",
    "mouth": "Masticador",
    "meta": "No indicada",
    "question": "¿Qué orden presenta cercos en forma de pinza e incluye tijeretas?",
    "number": 12
  },
  {
    "name": "Thysanoptera",
    "file": "014.webp",
    "emoji": "🌼",
    "examples": "Trips.",
    "facts": [
      "Insectos muy pequeños y alargados.",
      "Aparato bucal picador-suctor, según la lámina.",
      "Alas angostas con flecos."
    ],
    "importance": "Importantes plagas de ornamentales y hortícolas.",
    "wings": "Angostas con flecos",
    "mouth": "Picador-suctor (según lámina)",
    "meta": "No indicada",
    "question": "¿Qué orden tiene alas angostas con flecos e incluye trips?",
    "number": 13
  },
  {
    "name": "Siphonaptera",
    "file": "012.webp",
    "emoji": "🐾",
    "examples": "Pulgas.",
    "facts": [
      "Cuerpo comprimido lateralmente.",
      "Sin alas.",
      "Patas posteriores adaptadas al salto."
    ],
    "importance": "Ectoparásitos de importancia veterinaria y sanitaria.",
    "wings": "Sin alas",
    "mouth": "No indicado",
    "meta": "No indicada",
    "question": "¿Qué orden no tiene alas y presenta cuerpo comprimido lateralmente?",
    "number": 14
  },
  {
    "name": "Psocoptera",
    "file": "011.webp",
    "emoji": "📖",
    "examples": "Piojos de los libros.",
    "facts": [
      "Insectos pequeños y blandos.",
      "Aparato bucal masticador.",
      "Se alimentan de hongos y materia orgánica."
    ],
    "importance": "Indicadores de ambientes húmedos.",
    "wings": "No indicado",
    "mouth": "Masticador",
    "meta": "No indicada",
    "question": "¿Qué grupo se alimenta de hongos y materia orgánica e indica ambientes húmedos?",
    "number": 15
  }
];
