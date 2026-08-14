import React from 'react';
import { FireCMS, buildCollection, buildProperty } from '@firecms/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { useFirebaseAuthController, useFirestoreDelegate, useFirebaseStorageSource } from '@firecms/firebase';
import firebaseConfig from '../js/firebase-config.js';

// Configuration des collections
const bureauCollection = buildCollection({
  name: "Bureau du Foyer",
  path: "bureau",
  description: "Membres du bureau et leurs coordonnées",
  properties: {
    president: buildProperty({
      dataType: "map",
      name: "Président",
      properties: {
        nom: { dataType: "string", name: "Nom complet", validation: { required: true } },
        telephone: { dataType: "string", name: "Téléphone", validation: { required: true } },
        email: { dataType: "string", name: "Email" }
      }
    }),
    vicePresident: buildProperty({
      dataType: "map", 
      name: "Vice-Président",
      properties: {
        nom: { dataType: "string", name: "Nom complet", validation: { required: true } },
        telephone: { dataType: "string", name: "Téléphone", validation: { required: true } },
        email: { dataType: "string", name: "Email" }
      }
    }),
    secretaire: buildProperty({
      dataType: "map",
      name: "Secrétaire",
      properties: {
        nom: { dataType: "string", name: "Nom complet", validation: { required: true } },
        telephone: { dataType: "string", name: "Téléphone", validation: { required: true } },
        email: { dataType: "string", name: "Email" }
      }
    }),
    secretaireAdjoint: buildProperty({
      dataType: "map",
      name: "Secrétaire Adjoint",
      properties: {
        nom: { dataType: "string", name: "Nom complet" },
        telephone: { dataType: "string", name: "Téléphone" },
        email: { dataType: "string", name: "Email" }
      }
    }),
    tresorier: buildProperty({
      dataType: "map",
      name: "Trésorier",
      properties: {
        nom: { dataType: "string", name: "Nom complet", validation: { required: true } },
        telephone: { dataType: "string", name: "Téléphone", validation: { required: true } },
        email: { dataType: "string", name: "Email" }
      }
    }),
    tresorierAdjoint: buildProperty({
      dataType: "map",
      name: "Trésorier Adjoint",
      properties: {
        nom: { dataType: "string", name: "Nom complet" },
        telephone: { dataType: "string", name: "Téléphone" },
        email: { dataType: "string", name: "Email" }
      }
    })
  }
});

const evenementsCollection = buildCollection({
  name: "Événements",
  path: "evenements",
  description: "Agenda et événements du Foyer Rural",
  properties: {
    titre: { 
      dataType: "string", 
      name: "Titre", 
      validation: { required: true } 
    },
    date: { 
      dataType: "date", 
      name: "Date de l'événement",
      validation: { required: true }
    },
    heure: {
      dataType: "string",
      name: "Heure",
      description: "Ex: 14h30"
    },
    description: { 
      dataType: "string", 
      name: "Description", 
      multiline: true,
      validation: { required: true }
    },
    lieu: { 
      dataType: "string", 
      name: "Lieu",
      validation: { required: true }
    },
    image: {
      dataType: "string",
      name: "Image",
      storage: {
        acceptedFiles: ["image/*"],
        maxSize: 5 * 1024 * 1024 // 5MB max
      }
    },
    actif: {
      dataType: "boolean",
      name: "Événement actif",
      defaultValue: true
    }
  }
});

const activitesCollection = buildCollection({
  name: "Activités",
  path: "activites", 
  description: "Activités proposées par le Foyer Rural",
  properties: {
    nom: {
      dataType: "string",
      name: "Nom de l'activité",
      validation: { required: true }
    },
    description: {
      dataType: "string",
      name: "Description",
      multiline: true,
      validation: { required: true }
    },
    horaires: {
      dataType: "string",
      name: "Horaires",
      multiline: true
    },
    lieu: {
      dataType: "string",
      name: "Lieu"
    },
    tarif: {
      dataType: "string",
      name: "Tarif"
    },
    contact: {
      dataType: "string",
      name: "Contact responsable"
    },
    image: {
      dataType: "string",
      name: "Photo de l'activité",
      storage: {
        acceptedFiles: ["image/*"],
        maxSize: 5 * 1024 * 1024
      }
    },
    actif: {
      dataType: "boolean",
      name: "Activité active",
      defaultValue: true
    }
  }
});

function FoyerRuralAdmin() {
  const app: FirebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  // Configuration des contrôleurs Firebase
  const authController = useFirebaseAuthController({
    firebaseApp: app,
    signInProviders: ["google.com"]
  });

  const dataSource = useFirestoreDelegate({
    firebaseApp: app
  });

  const storageSource = useFirebaseStorageSource({
    firebaseApp: app
  });

  // Configuration des collections
  const collections = [
    bureauCollection,
    evenementsCollection,
    activitesCollection
  ];

  return (
    <FireCMS
      name="Admin Foyer Rural de Montaud"
      collections={collections}
      authController={authController}
      dataSource={dataSource}
      storageSource={storageSource}
      // Authentification obligatoire
      authenticator={async ({ user }) => {
        if (!user) return false;
        
        // Liste des emails autorisés (à adapter selon vos besoins)
        const authorizedEmails = [
          'foyerrural.montaud@gmail.com',
          // Ajouter les emails des membres du bureau
        ];
        
        return authorizedEmails.includes(user.email || '');
      }}
    />
  );
}

export default FoyerRuralAdmin;