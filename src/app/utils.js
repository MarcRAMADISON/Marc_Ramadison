export const services = [
  {
    type: "DW",
    title: "Développement Web et Mobile:",
    description:
      "Je conçois des sites web modernes, responsives et optimisés pour garantir une expérience utilisateur fluide, tout en améliorant votre référencement naturel (SEO) pour une meilleure visibilité en ligne.",
  },
  {
    type: "IA",
    title: "Automatisation / Agent IA / Webhook",
    description:
      "J’aide les entreprises à automatiser leurs processus, connecter leurs outils et déployer des agents IA capables d’agir 24/7, sans intervention humaine. Grâce à n8n, je transforme des workflows manuels en systèmes automatique fiables et scalables",
  },
  {
    type: "CM",
    title: "Community Management :",
    description:
      "J'anime et engage votre communauté sur les réseaux sociaux avec du contenu attractif, une modération efficace et une interaction authentique pour renforcer votre image de marque.",
  },
  {
    type: "ADS",
    title: "Ads (Meta et GOOGLE )",
    description:
      "Je conçois des campagnes publicitaires ciblées sur Google, Facebook et Instagram afin de maximiser votre visibilité, attirer un trafic qualifié et augmenter vos conversions, tout en optimisant votre budget publicitaire.",
  },
];

export const offres = [
  {
    offre: "PARTICULIER",
    price: 299,
    descriptions: [
      "✅ Site vitrine complet, performant et optimisé SEO ",
      "✅ Gestion de votre réseau social au choix",
      "✅ Création d’identité visuelle: Logo, PDP, PDC",
      "✅ Stratégie de contenu, 3 publications par semaine sur chaque réseau social",
      "✅ Community engagement : Interactions avec les abonnés, réponses aux commentaires, messages privés, et gestion des avis.",
      "✅ Veille concurrentielle ",
    ],
    info: "Offre avec engagement les 3 premiers mois et après vous pouvez arrêter à tout moment.",
  },
  {
    offre: "ENTREPRISE",
    price: 598,
    descriptions: [
      "✅ Site web personnalisé, complet, performant et optimisé SEO (vitrine , e-commerce, site de réservation, ...)",
      "✅ Gestion de vos réseaux sociaux au choix",
      "✅ Création d’identité visuelle: Logo, PDP, PDC",
      "✅ Stratégie de contenu, publications par semaine non limitées",
      "✅ Community engagement : Interactions avec les abonnés, réponses aux commentaires, messages privés, et gestion des avis.",
      "✅ Veille concurrentielle ",
      "✅ Gérer vos campagne ADS (GOOGLE ADS, META ADS)",
    ],
    info: "Offre avec engagement les 3 premiers mois et après vous pouvez arrêter à tout moment. Budget ADS non inclus",
  },
];

export const offresCM = [
  {
    title: "Offre Confirmée",
    offres: [
      "Élaboration d’une ligne éditoriale adaptée",
      "Veille concurrentielle pour optimiser votre stratégie",
      "Création et publication de contenu (photos, vidéos, reels)",
      "Animation et engagement actif avec votre audience",
      "Feedback sur les résultats obtenus chaque fin du mois",
      "Community engagement : Interactions avec les abonnés, réponses aux commentaires, messages privés, et gestion des avis.",
      "Gérer vos campagne ADS (GOOGLE ADS, META ADS)",
    ],
  },
  {
    title:
      "Offre ÉLITE : 600€ par mois (Une solution complète pour une visibilité maximale sur 3 réseaux sociaux)",
    offres: [
      "Stratégie éditoriale avancée et contenus engageants",
      "Veille et benchmark concurrentiel approfondis",
      "Création et publication de contenu (photos, vidéos, reels) adaptés à chaque plateforme",
      "Animation et engagement actif avec votre audience",
      "Feedback plus détaillé sur les résultats obtenus chaque fin du mois",
      "Community engagement : Interactions avec les abonnés, réponses aux commentaires, messages privés, et gestion des avis.",
      "Gérer vos campagne ADS (GOOGLE ADS, META ADS)",
    ],
  },
];

export const handleRedirect = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
