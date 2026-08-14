/**
 * Script d'initialisation des données Firestore pour le Foyer Rural de Montaud
 * À exécuter UNE SEULE FOIS pour peupler la base de données avec les données actuelles
 */

// Configuration Firebase 
const firebaseConfig = {
    apiKey: "AIzaSyC5nUayIeA8Dgx8loqZ1pyG5vei8PHWggU",
    authDomain: "frmontaud-09-25.firebaseapp.com",
    projectId: "frmontaud-09-25",
    storageBucket: "frmontaud-09-25.firebasestorage.app",
    messagingSenderId: "350075655257",
    appId: "1:350075655257:web:84f8f375cf19b2610b0d48",
    measurementId: "G-S7BKPP6F02"
};

// Données initiales du bureau (récupérées depuis association.html)
const bureauInitial = {
    president: {
        nom: "Jonathan DRAY",
        telephone: "07 67 55 05 12",
        email: "jonathan.dray@example.com" // À mettre à jour avec le vrai email
    },
    vicePresident: {
        nom: "Jérome COMBESCURE", 
        telephone: "06 81 89 82 55",
        email: "jerome.combescure@example.com"
    },
    secretaire: {
        nom: "Marianne COMBESCURE",
        telephone: "07 87 70 77 40", 
        email: "marianne.combescure@example.com"
    },
    secretaireAdjoint: {
        nom: "Emma GOURLAN",
        telephone: "07 82 89 74 49",
        email: "emma.gourlan@example.com"
    },
    tresoriere: {
        nom: "Roselyne NACACHIAN",
        telephone: "06 32 65 67 76",
        email: "roselyne.nacachian@example.com"
    },
    tresorierAdjoint: {
        nom: "Philippe REVERBEL", 
        telephone: "06 83 46 29 79",
        email: "philippe.reverbel@example.com"
    },
    lastUpdated: new Date(),
    updatedBy: "initialization-script"
};

// Événements exemples (saison 2025-2026)
const evenementsInitiaux = [
    {
        titre: "Assemblée Générale 2025",
        date: new Date('2025-09-20'),
        heure: "18h30",
        lieu: "Salle Pierre Combettes",
        description: "Assemblée générale annuelle du Foyer Rural de Montaud. Présentation du bilan de l'année écoulée et des projets pour la nouvelle saison.",
        actif: true,
        createdAt: new Date(),
        createdBy: "initialization-script"
    },
    {
        titre: "Forum des Associations", 
        date: new Date('2025-09-07'),
        heure: "10h00",
        lieu: "Centre village",
        description: "Venez découvrir toutes nos activités lors du forum des associations. Inscriptions et renseignements sur place.",
        actif: true,
        createdAt: new Date(),
        createdBy: "initialization-script"
    },
    {
        titre: "Portes Ouvertes des Activités",
        date: new Date('2025-09-14'),
        heure: "14h00", 
        lieu: "Toutes les salles",
        description: "Journée portes ouvertes : essayez gratuitement toutes nos activités ! Parfait pour choisir votre activité pour la saison.",
        actif: true,
        createdAt: new Date(),
        createdBy: "initialization-script"
    }
];

// Activités exemples avec données réelles
const activitesInitiales = [
    {
        nom: "Badminton",
        description: "Sport de raquette dynamique et convivial pour tous niveaux",
        horaires: "Mercredi : 17h30-19h00 (ados/adultes)\nVendredi : 17h30-19h00 (tous niveaux)",
        lieu: "Grange Robert", 
        tarif: "Voir grille tarifaire",
        contact: "Contact via le bureau",
        image: "asset/badminton.jpg",
        actif: true,
        createdAt: new Date(),
        createdBy: "initialization-script"
    },
    {
        nom: "Yoga",
        description: "Pratique douce du yoga pour détente et bien-être", 
        horaires: "Lundi : 18h30-19h30\nMercredi : 9h30-10h30", 
        lieu: "Salle Pierre Combettes (bas)",
        tarif: "Voir grille tarifaire",
        contact: "Contact via le bureau",
        image: "asset/yoga.jpg", 
        actif: true,
        createdAt: new Date(),
        createdBy: "initialization-script"
    },
    {
        nom: "Théâtre Enfants",
        description: "Atelier théâtre pour développer créativité et confiance en soi",
        horaires: "Mercredi : 14h00-15h30 (6-12 ans)",
        lieu: "Salle Pierre Combettes (haut)",
        tarif: "Voir grille tarifaire", 
        contact: "Contact via le bureau",
        image: "asset/theatre_enfant.jpg",
        actif: true,
        createdAt: new Date(),
        createdBy: "initialization-script"
    },
    {
        nom: "Judo",
        description: "Art martial japonais, discipline et respect",
        horaires: "Mardi : 17h30-18h30 (enfants)\nMardi : 18h30-20h00 (ados/adultes)",
        lieu: "Salle Pierre Combettes (haut)",
        tarif: "Voir grille tarifaire",
        contact: "Contact via le bureau", 
        image: "asset/Judo.jpg",
        actif: true,
        createdAt: new Date(),
        createdBy: "initialization-script"
    }
];

// Console log pour instructions
console.log(`
🔧 SCRIPT D'INITIALISATION FIRESTORE
====================================

⚠️  ATTENTION : Ce script ne peut être exécuté QUE depuis l'interface admin Firebase !

📋 ÉTAPES D'EXÉCUTION :

1. 🌐 Allez sur https://console.firebase.google.com/
2. 📂 Sélectionnez le projet "frmontaud-09-25"
3. 🗄️  Cliquez sur "Firestore Database"
4. ⚙️  Allez dans l'onglet "Rules" et copiez les règles depuis firestore.rules
5. 💾 Sauvegardez les règles
6. 🗂️  Retournez dans l'onglet "Data" 
7. ➕ Créez manuellement les documents suivants :

COLLECTION "bureau" → DOCUMENT "current" → DONNÉES :
${JSON.stringify(bureauInitial, null, 2)}

COLLECTION "evenements" → DOCUMENTS AUTOMATIQUES → DONNÉES (un document par événement) :
${JSON.stringify(evenementsInitiaux, null, 2)}

COLLECTION "activites" → DOCUMENTS AUTOMATIQUES → DONNÉES (un document par activité) :
${JSON.stringify(activitesInitiales, null, 2)}

✅ APRÈS INITIALISATION :

- Les données seront visibles sur le site (association.html, evenements.html)
- L'interface admin (admin.html) permettra de les modifier
- Testez avec l'email autorisé dans firestore.rules

⚡ EMAILS AUTORISÉS À MODIFIER :
${JSON.stringify([
    'foyerrural.montaud@gmail.com',
    'jonathan.dray@example.com', // À remplacer
    'jerome.combescure@example.com' // À remplacer
], null, 2)}

📧 N'oubliez pas de mettre à jour les vrais emails dans :
- firestore.rules (ligne 6-10)  
- admin.html (ligne avec authorizedEmails)
`);

// Export pour utilisation éventuelle
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        bureauInitial,
        evenementsInitiaux,
        activitesInitiales,
        firebaseConfig
    };
}