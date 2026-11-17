const orders = [
  {
    "name": "Porifera",
    "file": "porifera.webp",
    "emoji": "🧽",
    "examples": "Esponjas.",
    "facts": [
      "Animales acuáticos, principalmente marinos.",
      "Cuerpo con numerosos poros.",
      "No poseen tejidos verdaderos.",
      "Se alimentan por filtración."
    ],
    "importance": "Los poros y la filtración son las pistas de esta ficha.",
    "wings": "Con numerosos poros",
    "mouth": "No indicada",
    "meta": "Acuático",
    "question": "¿Qué filo tiene numerosos poros, carece de tejidos verdaderos y se alimenta por filtración?",
    "number": 1
  },
  {
    "name": "Cnidaria",
    "file": "cnidaria.webp",
    "emoji": "🪼",
    "examples": "Medusas, anémonas y corales.",
    "facts": [
      "Animales acuáticos, marinos y dulceacuícolas según el panorama.",
      "Presentan cnidocitos urticantes.",
      "Tienen simetría radial.",
      "Pueden presentarse como pólipo o medusa."
    ],
    "importance": "Cnidocitos, simetría radial y formas pólipo o medusa.",
    "wings": "Simetría radial; pólipo o medusa",
    "mouth": "No indicada",
    "meta": "Acuático",
    "question": "¿Qué filo presenta cnidocitos urticantes y formas pólipo o medusa?",
    "number": 2
  },
  {
    "name": "Platyhelminthes",
    "file": "platyhelminthes.webp",
    "emoji": "〰️",
    "examples": "Gusanos planos.",
    "facts": [
      "Cuerpo aplanado dorsoventralmente.",
      "Son triblásticos.",
      "Carecen de cavidad corporal: acelomados.",
      "Hay especies de vida libre y parásitas."
    ],
    "importance": "La ficha específica aclara que hay especies de vida libre y parásitas.",
    "wings": "Aplanado dorsoventralmente",
    "mouth": "Sin cavidad: acelomados",
    "meta": "No indicado",
    "question": "¿Qué filo reúne gusanos planos, triblásticos y sin cavidad corporal?",
    "number": 3
  },
  {
    "name": "Nematoda",
    "file": "nematoda.webp",
    "emoji": "🪱",
    "examples": "Nematodos.",
    "facts": [
      "Cuerpo cilíndrico y no segmentado.",
      "Son triblásticos.",
      "Poseen pseudoceloma.",
      "Pueden ser de vida libre o parásitos."
    ],
    "importance": "Cilíndricos, no segmentados y con pseudoceloma.",
    "wings": "Cilíndrico; no segmentado",
    "mouth": "Pseudoceloma",
    "meta": "No indicado",
    "question": "¿Qué filo tiene cuerpo cilíndrico no segmentado y pseudoceloma?",
    "number": 4
  },
  {
    "name": "Annelida",
    "file": "annelida.webp",
    "emoji": "🌱",
    "examples": "Lombrices y sanguijuelas.",
    "facts": [
      "Cuerpo segmentado en anillos o metámeros.",
      "Son triblásticos y celomados.",
      "Habitan medios acuáticos o terrestres.",
      "Incluyen especies parásitas como las sanguijuelas."
    ],
    "importance": "La segmentación en anillos permite reconocerlos en el material.",
    "wings": "Segmentado en anillos",
    "mouth": "Celoma: celomados",
    "meta": "Acuático o terrestre",
    "question": "¿Qué filo tiene el cuerpo segmentado en anillos o metámeros?",
    "number": 5
  },
  {
    "name": "Mollusca",
    "file": "mollusca.webp",
    "emoji": "🐌",
    "examples": "Caracoles, almejas y pulpos.",
    "facts": [
      "Cuerpo blando y no segmentado.",
      "El manto es una estructura característica.",
      "Muchos poseen concha.",
      "Pueden ser acuáticos o terrestres.",
      "El panorama los describe como triblásticos y celomados."
    ],
    "importance": "Muchos poseen concha; el material no dice que todos la tengan.",
    "wings": "Blando; no segmentado; manto",
    "mouth": "Celoma: celomados",
    "meta": "Acuático o terrestre",
    "question": "¿Qué filo presenta cuerpo blando no segmentado y un manto característico?",
    "number": 6
  },
  {
    "name": "Arthropoda",
    "file": "panorama.webp",
    "emoji": "🐝",
    "examples": "Insectos, arácnidos y crustáceos.",
    "facts": [
      "Exoesqueleto de quitina.",
      "Cuerpo segmentado.",
      "Apéndices articulados.",
      "Es el grupo más diverso del reino, según el panorama."
    ],
    "importance": "Insecta es una clase dentro de Arthropoda, no otro filo del panorama.",
    "wings": "Segmentado; apéndices articulados",
    "mouth": "No indicada",
    "meta": "No indicado",
    "question": "¿Qué filo comparte exoesqueleto de quitina, cuerpo segmentado y apéndices articulados?",
    "number": 7
  },
  {
    "name": "Echinodermata",
    "file": "echinodermata.webp",
    "emoji": "⭐",
    "examples": "Estrellas de mar y erizos.",
    "facts": [
      "Son exclusivamente marinos.",
      "Poseen endoesqueleto calcáreo.",
      "Los adultos tienen simetría radial.",
      "Presentan gran capacidad de regeneración.",
      "El panorama los describe como triblásticos y celomados."
    ],
    "importance": "La simetría radial se indica para los adultos.",
    "wings": "Adultos con simetría radial",
    "mouth": "Celoma: celomados",
    "meta": "Exclusivamente marino",
    "question": "¿Qué filo es exclusivamente marino y posee endoesqueleto calcáreo?",
    "number": 8
  },
  {
    "name": "Chordata",
    "file": "chordata.webp",
    "emoji": "🐟",
    "examples": "Peces, anfibios, reptiles, aves y mamíferos.",
    "facts": [
      "Presentan notocorda en alguna etapa.",
      "Poseen tubo nervioso dorsal.",
      "Tienen hendiduras faríngeas en el desarrollo.",
      "Incluyen a los vertebrados."
    ],
    "importance": "Las características se presentan en alguna etapa del desarrollo; Chordata incluye a los vertebrados.",
    "wings": "Notocorda; tubo nervioso dorsal",
    "mouth": "No indicada",
    "meta": "No indicado",
    "question": "¿Qué filo presenta notocorda en alguna etapa y tubo nervioso dorsal?",
    "number": 9
  }
];
