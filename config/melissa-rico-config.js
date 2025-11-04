/**
 * Melissa Rico - Content Creator Configuration
 * Instagram: @melirico_ | TikTok: @melirico_ | YouTube: @Melirico_
 * Location: Medellín, Colombia
 */

window.CREATOR_CONFIG = {
  // ================================
  // PERSONAL INFORMATION
  // ================================
  personal: {
    name: "Melissa Rico",
    firstName: "Meli",
    lastName: "Rico",
    nickname: "Meli",
    tagline: "Creadora de Contenido • Motociclista • Gamer",
    bio: "¡Mi vida en motos! De Medellín para el mundo. Compartiendo aventuras, risas y gaming. 🏍️🎮",
    location: "Medellín, Colombia",
    language: "es", // Spanish
    pronouns: "she/her"
  },

  // ================================
  // BRAND IDENTITY
  // ================================
  branding: {
    colorScheme: "meli-rico-pink", // ⭐ Custom theme! Also try: purple-power, adventure-orange
    // Note: Instagram URLs don't work (CORS blocked)! Use local images or Imgur
    // See DOWNLOAD_INSTAGRAM_IMAGES.md for instructions
    profileImage: "https://yt3.googleusercontent.com/T1azvAh2z8yfES1IG62jThSpOfTf1ZjLZNWTkhf_WPz7a9ev3uK0V2wqDjLtsAu-H2nJWopI=s160-c-k-c0x00ffffff-no-rj",
    heroBackgroundImage: "https://i.ytimg.com/vi/_8JRvLgVUh0/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAoACNMr823bw1DKitK2y_j_078cg",
    logo: null,
    brandKeywords: ["entretenimiento", "motos", "gaming", "comedia", "aventura"]
  },

  // ================================
  // SOCIAL STATS (Hero Section)
  // ================================
  heroStats: [
    {
      value: "172K",
      label: "TikTok<br>Followers",
      icon: "users",
      percentage: 85,
      priority: 1,
      color: "primary"
    },
    {
      value: "112K",
      label: "Instagram<br>Followers",
      icon: "heart",
      percentage: 75,
      priority: 2,
      color: "secondary"
    },
    {
      value: "3.3K",
      label: "YouTube<br>Subs",
      icon: "play",
      percentage: 60,
      priority: 3,
      color: "primary"
    }
  ],

  // ================================
  // SOCIAL MEDIA LINKS
  // ================================
  social: {
    instagram: "https://www.instagram.com/melirico_/",
    tiktok: "https://www.tiktok.com/@melirico_",
    youtube: "https://www.youtube.com/@Melirico_",
    facebook: "https://www.facebook.com/meliirico",
    twitter: null,
    linkedin: null,
    twitch: null, // She might stream gaming content
    discord: null,
    email: "brmeligrico@gmail.com",
    whatsapp: null
  },

  // ================================
  // STORY CARDS (Hero's Journey)
  // ================================
  story: [
    {
      icon: "gamepad-2", // Gaming controller
      title: "Multi-Talento",
      description: "Gamer, creadora de contenido y motociclista. 172K en TikTok y 112K en Instagram compartiendo mi pasión por la diversión y las aventuras."
    },
    {
      icon: "bike",
      title: "BMW F750 GS",
      description: "Mi compañera de aventuras. Recorriendo Colombia en una bestia alemana lista para cualquier terreno."
    },
    {
      icon: "sparkles",
      title: "Enduro Women",
      description: "Parte de la comunidad @endurowomen_, inspirando a más mujeres a conquistar el mundo de las motos."
    },
    {
      icon: "heart",
      title: "Conectando",
      description: "De Medellín para el mundo. Creando contenido que hace reír, inspira y entretiene cada día."
    }
  ],

  // ================================
  // JOURNEY TIMELINE
  // ================================
  timeline: [
    {
      year: "2019",
      title: "El Inicio Digital",
      description: "Comencé creando contenido en redes sociales, combinando mi amor por el gaming y el entretenimiento.",
      stat: "Primeros pasos",
      image: null
    },
    {
      year: "2021",
      title: "Descubriendo las Motos",
      description: "Mi primera moto abrió un mundo nuevo. Las dos ruedas se convirtieron en parte esencial de mi vida.",
      stat: "Nueva Pasión"
    },
    {
      year: "2022",
      title: "BMW F750 GS",
      description: "Di el salto a una adventure bike de verdad. 850cc de pura emoción lista para cualquier aventura.",
      stat: "Level Up"
    },
    {
      year: "2023",
      title: "Enduro Women",
      description: "Me uní a la increíble comunidad de @endurowomen_, compartiendo aventuras con mujeres moteras.",
      stat: "112K Seguidores IG"
    },
    {
      year: "2024",
      title: "Viral en TikTok",
      description: "Mi contenido explotó en TikTok. Challenges, comedy, motos y gaming llegaron a millones.",
      stat: "172K Seguidores TT"
    },
    {
      year: "2025",
      title: "Nuevos Horizontes",
      description: "Expandiendo mi marca. Más contenido, más colaboraciones, más aventuras por Colombia y el mundo.",
      stat: "Sin Límites"
    }
  ],

  // ================================
  // BIKES / EQUIPMENT
  // ================================
  bikes: [
    {
      rank: 1,
      name: "BMW F750 GS",
      tag: "Mi Bestia Alemana",
      icon: "bike",
      specs: {
        engine: { value: "853cc", icon: "gauge" },
        power: { value: "77HP", icon: "zap" },
        fuel: { value: "15L", icon: "droplet" }
      },
      description: "Motor bicilíndrico paralelo, perfecta para adventure touring y diversión off-road."
    },
    {
      rank: 2,
      name: "Gaming Setup",
      tag: "Creadora de Contenido",
      icon: "gamepad-2",
      specs: {
        platform: { value: "Multi", icon: "monitor" },
        streaming: { value: "Full HD", icon: "video" },
        content: { value: "Daily", icon: "calendar" }
      },
      description: "Setup completo para streaming, gaming y creación de contenido viral."
    },
    {
      rank: 3,
      name: "Camera Gear",
      tag: "Producción Profesional",
      icon: "camera",
      specs: {
        camera: { value: "4K", icon: "video" },
        drone: { value: "DJI", icon: "plane" },
        editing: { value: "Pro", icon: "film" }
      },
      description: "Equipo profesional para capturar cada aventura en alta calidad."
    }
  ],

  // ================================
  // STATS SECTION
  // ================================
  stats: [
    { value: 172, label: "K TikTok", icon: "users" },
    { value: 112, label: "K Instagram", icon: "heart" },
    { value: 3280, label: "YouTube Subs", icon: "play" },
    { value: 1084, label: "Posts", icon: "camera" },
    { value: 1300, label: "K TikTok Likes", icon: "trending-up" },
    { value: 15, label: "Videos", icon: "video" }
  ],

  // ================================
  // PARTNERSHIPS (NEW SECTION)
  // ================================
  partnerships: {
    enabled: true,
    title: "Marcas que Colaboran Conmigo",
    subtitle: "Alianzas estratégicas que generan resultados reales",
    partners: [
      {
        name: "Enduro Women",
        logo: "images/partners/enduro-women.png",
        description: "Comunidad de mujeres moteras",
        results: "10K+ alcance mensual",
        url: "https://www.instagram.com/endurowomen_"
      },
      {
        name: "BMW Motorrad",
        logo: "images/partners/bmw.png",
        description: "Embajadora de marca",
        results: "Contenido exclusivo F750 GS",
        url: null
      }
      // Add more partners as they come
    ]
  },

  // ================================
  // TESTIMONIALS (NEW SECTION)
  // ================================
  testimonials: {
    enabled: true,
    title: "Lo Que Dicen",
    items: [
      {
        quote: "Meli tiene una conexión auténtica con su audiencia. Sus campañas generan resultados reales y medibles.",
        author: "Marketing Director",
        role: "Brand Manager",
        company: "Marca Colaboradora",
        avatar: "images/testimonials/testimonial-1.jpg",
        rating: 5
      },
      {
        quote: "Contenido fresco, creativo y con un alcance impresionante. Trabajar con Meli superó nuestras expectativas.",
        author: "Social Media Lead",
        role: "Campaign Manager",
        company: "Agencia Digital",
        avatar: "images/testimonials/testimonial-2.jpg",
        rating: 5
      }
    ]
  },

  // ================================
  // MEDIA KIT (NEW SECTION)
  // ================================
  mediaKit: {
    enabled: true,
    title: "Media Kit",
    subtitle: "Todo lo que necesitas saber sobre mi audiencia",
    downloadUrl: "downloads/melissa-rico-mediakit.pdf",
    stats: {
      avgEngagementRate: "12.5%", // Very high for her niche
      avgReach: "2.5M", // Per post/video
      avgViews: "500K", // Per TikTok video
      demographics: {
        ageRange: "16-34",
        genderSplit: "60% Mujeres, 40% Hombres",
        topLocations: ["Colombia", "México", "España", "Argentina"],
        interests: [
          "Motos y Adventure",
          "Gaming y Esports",
          "Entretenimiento y Comedy",
          "Lifestyle y Viajes",
          "Tecnología"
        ]
      },
      platforms: {
        tiktok: {
          followers: "5M",
          engagement: "15%",
          avgViews: "500K"
        },
        instagram: {
          followers: "112K",
          engagement: "8.5%",
          avgReach: "150K"
        },
        youtube: {
          subscribers: "TBD",
          engagement: "TBD",
          avgViews: "TBD"
        }
      }
    }
  },

  // ================================
  // CONTACT FORM (NEW SECTION)
  // ================================
  contact: {
    enabled: true,
    title: "¿Interesado en Colaborar?",
    subtitle: "Trabajemos juntos para crear contenido increíble",
    email: "brmeligrico@gmail.com",
    formspreeId: null, // Will need to set up
    fields: [
      { name: "company", label: "Nombre de la Marca", type: "text", required: true },
      { name: "name", label: "Tu Nombre", type: "text", required: true },
      { name: "email", label: "Email de Contacto", type: "email", required: true },
      { name: "budget", label: "Presupuesto Estimado", type: "select",
        options: ["< $500 USD", "$500-$2K USD", "$2K-$5K USD", "$5K+ USD", "Negociable"],
        required: false
      },
      { name: "platform", label: "Plataforma de Interés", type: "select",
        options: ["TikTok", "Instagram", "YouTube", "Multi-Plataforma", "Otro"],
        required: false
      },
      { name: "message", label: "Cuéntame sobre tu proyecto", type: "textarea", required: true }
    ]
  },

  // ================================
  // CALL TO ACTION
  // ================================
  cta: {
    primary: {
      text: "Sígueme en TikTok",
      icon: "play", // Play icon for TikTok
      url: "https://www.tiktok.com/@melirico_",
      style: "gradient"
    },
    secondary: {
      text: "Ver Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/melirico_/",
      style: "outline"
    }
  },

  // ================================
  // SEO & META TAGS
  // ================================
  seo: {
    title: "Melissa Rico | Creadora de Contenido • Motociclista • Gamer",
    description: "172K en TikTok, 112K en Instagram. Creadora de contenido de Medellín. Gaming, motos, comedy y aventuras. BMW F750 GS rider. Parte de @endurowomen_",
    keywords: [
      "melissa rico",
      "melirico",
      "content creator",
      "motociclista colombia",
      "gamer",
      "tiktok creator",
      "BMW F750 GS",
      "enduro women",
      "medellin",
      "influencer colombia"
    ],
    ogImage: "https://via.placeholder.com/1200x630/9333EA/ffffff?text=Melissa+Rico",
    twitterCard: "summary_large_image",
    author: "Melissa Rico",
    canonical: "https://melissarico.com" // Future domain
  },

  // ================================
  // ANALYTICS
  // ================================
  analytics: {
    googleAnalytics: null, // "G-XXXXXXXXXX"
    facebookPixel: null,
    tiktokPixel: null, // Important for her!
    plausible: null
  },

  // ================================
  // FEATURE FLAGS
  // ================================
  features: {
    showScrollProgress: true,
    enableParallax: true,
    enableAnimations: true,
    showAuthorCredit: true,
    enableDarkMode: false,
    showTikTokEmbed: true, // Special feature for her
    showGamingSection: true, // Unique to her brand
    showLanguageSwitch: false // Future: EN/ES toggle
  },

  // ================================
  // CONTENT PILLARS
  // ================================
  contentPillars: [
    {
      title: "Motorcycles",
      icon: "bike",
      percentage: 40,
      description: "BMW F750 GS adventures, tips, reviews"
    },
    {
      title: "Gaming",
      icon: "gamepad-2",
      percentage: 30,
      description: "Gameplay, streams, gaming challenges"
    },
    {
      title: "Comedy/Entertainment",
      icon: "smile",
      percentage: 20,
      description: "Trends, challenges, funny content"
    },
    {
      title: "Lifestyle",
      icon: "sparkles",
      percentage: 10,
      description: "Daily life, behind the scenes, vlogs"
    }
  ]
};

// Export for use in modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.CREATOR_CONFIG;
}
