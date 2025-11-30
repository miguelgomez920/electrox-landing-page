import kz_Za12_Img from "../assets/Products/kz_za12.png";
import redragonK530Img from "../assets/Products/redragon_K530.png";
import redragonM901Img from "../assets/Products/redragon_M901.png";
import fifineK669Img from "../assets/Products/fifineK669.png";
import logitechG733Img from "../assets/Products/logitechG733.png";
import logitechC920Img from "../assets/Products/logitechC920.png";


export const products = [
  {
    id: 1,
    img: kz_Za12_Img,
    name: "KZ ZA12 In-Ear Monitors",
    category: "Audio",
    description:
      "12 drivers híbridos, escenario sonoro amplio y excelente separación de frecuencias.",
    tags: ["Hi-Fi", "Drivers híbridos", "Cable desmontable"],
    price: 79.99,
    specs: [
      "12 drivers híbridos para una respuesta detallada",
      "Escenario sonoro amplio con buena separación",
      "Cable desmontable de 2 pines",
      "Diseño ergonómico para uso prolongado"
    ]
  },

  {
    id: 2,
    img: redragonK530Img,
    name: "Redragon K530 Draconic 60% RGB",
    category: "Teclados",
    description:
      "Teclado mecánico 60%, switches intercambiables y conectividad Bluetooth + cable.",
    tags: ["60%", "Hot-Swap", "RGB"],
    price: 109.9,
    specs: [
      "Formato 60% para ganar espacio",
      "Switches mecánicos (según versión)",
      "Bluetooth + USB-C",
      "Hot-swap en varios modelos",
      "Ideal para setups compactos"
    ]
  },

  {
    id: 3,
    img: redragonM901Img,
    name: "Redragon M901 Perdition 16000 DPI",
    category: "Mouses",
    description:
      "Mouse gamer con sensor de alta precisión, 12 botones programables y memoria interna.",
    tags: ["16000 DPI", "Programable", "Ergonómico"],
    price: 54.9,
    specs: [
      "Sensor de alto DPI ajustable (hasta 16000)",
      "12 botones laterales programables",
      "Memoria interna para perfiles",
      "Ideal para MMO y productividad",
      "Peso ligeramente ajustable"
    ]
  },

  {
    id: 4,
    img: fifineK669Img,
    name: "FIFINE K669B Micrófono Condensador USB",
    category: "Audio",
    description:
      "Micrófono USB plug & play ideal para streaming, clases virtuales y grabación de voz.",
    tags: ["USB", "Plug & Play", "Streaming"],
    price: 59.9,
    specs: [
      "Patrón cardioide para reducir ruido lateral",
      "Conexión USB plug & play",
      "Perilla de ganancia integrada",
      "Ideal para streaming, clases y llamadas",
      "Construcción metálica resistente"
    ]
  },

  {
    id: 5,
    img: logitechG733Img,
    name: "Logitech G733 Lightspeed Wireless",
    category: "Audio",
    description:
      "Audífonos gamer inalámbricos con sonido surround, RGB y micrófono Blue VO!CE.",
    tags: ["Wireless", "RGB", "Surround"],
    price: 129.9,
    specs: [
      "Sonido envolvente y ligero",
      "Almohadillas cómodas para sesiones largas",
      "Conectividad inalámbrica de baja latencia",
      "Micrófono con tecnología Blue VO!CE",
      "RGB personalizable en las copas"
    ]
  },

  {
    id: 6,
    img: logitechC920Img,
    name: "Logitech C920 Pro HD Webcam",
    category: "Cámaras",
    description:
      "Cámara web Full HD 1080p con micrófonos estéreo y enfoque automático.",
    tags: ["1080p", "Autofocus", "Streaming"],
    price: 89.9,
    specs: [
      "Resolución Full HD 1080p nativa",
      "Lentes de vidrio con autofocus",
      "Micrófonos estéreo integrados",
      "Corrección automática de luz",
      "Amplio campo de visión (78° aprox.)"
    ]
  }
];
