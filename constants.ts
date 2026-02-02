import { PersonalInfo, Project, SkillCategory } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "TAPSOBA Simon Wendzodo",
  role: "Développeur Web et Application",
  phone: "+226 64 85 04 02",
  email: "simontapsoba264@gmail.com",
  languages: ["Anglais (Bien)", "Français (Bien)", "Mooré (Bien)"],
  philosophy: "Dans le monde du numérique on ne peut pas garantir de tout savoir, il y a chaque fois de la nouveauté. En tant que autodidacte Je ne maîtrise qu'une portion qui fait des étincelles, donc chaque jour j'apprends pour être à la page. J'espère être util avec ce que je sais.",
  otherInfo: "J'accompagne les investisseurs qui veulent s'installer ici au Burkina Faso. J'ai suivi une formation sur la gouvernance de l'internet."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      "Maîtrise du framework Flutter",
      "Maîtrise de React",
      "Connaissance de Figma",
      "Utilisation de l'IA (Productivité)",
    ]
  },
  {
    title: "Backend & Base de Données",
    icon: "database",
    skills: [
      "Maîtrise du framework Laravel (Création d'API)",
      "Maîtrise de Firebase (NoSQL)",
      "Maîtrise de MySQL",
    "Utilisation de l'IA (Productivité)",
    ]
  },
  {
    title: "Hébergement & Déploiement",
    icon: "cloud",
    skills: [
      "Firebase Hosting",
      "Render",
      "Github (Collaboration & Versioning)",
      "Gestion de nom de domaines .bf"

    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Hôpital Paul 6",
    url: "https://hopitalpaul6.onrender.com",
    description: "Application de gestion hospitalière déployée sur Render."
  },
  {
    title: "Mairie Arrondissement 3",
    url: "https://mairiearrd33.onrender.com",
    description: "Portail numérique pour l'administration locale."
  },
  {
    title: "Restaurant Canaan",
    url: "https://restaurantcanaan-4da80.web.app/",
    description: "Site vitrine et menu pour restaurant, hébergé sur Firebase."
  },
  {
    title: "Beoog Burkimbi",
    url: "https://beoogkombi.web.app",
    description: "Plateforme communautaire ou éducative."
  },

  {
    title: "Beoog Burkimbi",
    url: "https://lerestau-7e4a5.web.app/",
    description: "Plateforme communautaire ou éducative."
  },

  
  {
    title: "Beoog Burkimbi",
    url: "https://lerestau-7e4a5.web.app/",
    description: "Plateforme client choix et envoi des commandes."
  },

  
  {
    title: "Beoog Burkimbi",
    url: "  https://lerestau-7e4a5.web.app/#/gerant",
    description: "Plateforme gérant réception des commandes."
  },

    {
    title: "Beoog Burkimbi",
    url: "https://TalentCathos.web.app",
    description: "Plateforme communautaire pour la création de valeurs."
  }


  
];

// System prompt for the Gemini AI
export const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel IA de Simon Wendzodo TAPSOBA. Ton but est de répondre aux questions des recruteurs à propos du CV de Simon.
Voici les informations concernant Simon :

NOM: ${PERSONAL_INFO.name}
POSTE: ${PERSONAL_INFO.role}
TELEPHONE: ${PERSONAL_INFO.phone}
EMAIL: ${PERSONAL_INFO.email}

COMPETENCES TECHNIQUES:
- Frontend: Flutter, React, Figma, Utilisation experte de l'IA.
- Backend: Laravel (Expertise API), Firebase (NoSQL), MySQL.
- Hébergement & Déploiement: Github, Render, Firebase Hosting.

AUTRES INFORMATIONS IMPORTANTES:
- Il accompagne les investisseurs qui veulent s'installer au Burkina Faso.
- Il a suivi une formation certifiante sur la Gouvernance de l'Internet.
- Il a des relations au niveau de l'ABDI pour le paiement de noms de domaine .bf.

LANGUES:
- Français: Bien
- Anglais: Bien
- Mooré: Bien

PHILOSOPHIE:
"${PERSONAL_INFO.philosophy}"

PROJETS REALISÉS:
1. Hôpital Paul 6 (Render)
2. Mairie Arrd 3 (Render)
3. Restaurant Canaan (Firebase)
4. Beoog Burkimbi (Firebase)

Instructions:
- Sois poli, professionnel et concis.
- Réponds à la première personne comme si tu parlais pour Simon, ou à la troisième personne en tant qu'assistant.
- Si on demande le contact, donne le lien WhatsApp ou l'email.
`;