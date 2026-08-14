# ✅ CHECKLIST COMPLÈTE DES MODIFICATIONS 2026-2027

**Date d'analyse:** 14 août 2026  
**Source:** PROGRAMME-FR-2026 2027.md (document officiel)  
**Assemblée Générale:** Vendredi 11 septembre 2026 à 19h (Salle Pierre Combettes)

⚠️ **IMPORTANT:** Cette checklist se base UNIQUEMENT sur le programme 2026-2027 fourni. Les comparaisons 2025-2026 n'ont PAS été vérifiées.

---

## 🔄 CHANGEMENTS GLOBAUX À TOUS LES FICHIERS

### 1. Tous les fichiers HTML
- [ ] **Meta `<title>`**: Remplacer "2025-2026" par "2026-2027" partout
- [ ] **Meta `<meta name="description">`**: Mettre à jour si mentionné "2025-2026"
- [ ] **Meta OG tags**: Remplacer "2025-2026" par "2026-2027"
- [ ] **Textes dans les pages**: Remplacer toutes les occurrences de "Saison 2025-2026" par "Saison 2026-2027"
- [ ] **Dates de début**: Remplacer "Septembre 2025" par "Septembre 2026"
- [ ] **Dates d'inscriptions**: Remplacer "1er septembre 2025" par "1er septembre 2026"

---

## 📄 PAGE D'ACCUEIL (`index.html`)

### Modifications textuelles:
- [ ] **Hero section `<title>`**: 
  - ❌ `<title>Foyer Rural de Montaud - Saison 2025-2026</title>`
  - ✅ `<title>Foyer Rural de Montaud - Saison 2026-2027</title>`

- [ ] **Hero subtitle** (id="hero-soustitre"):
  - ❌ `Découvrez nos 24 activités pour la saison 2025-2026`
  - ✅ `Découvrez nos 25 activités pour la saison 2026-2027`
  - ℹ️ **Note**: Passer de 24 à 25 activités (ajout de 3 nouvelles, suppression de 1 ou plus)

- [ ] **Alert banner**:
  - ❌ `🎉 Inscriptions Ouvertes - Saison 2025-2026`
  - ✅ `🎉 Inscriptions Ouvertes - Saison 2026-2027`
  
  - ❌ `Les activités débutent à partir du 8 septembre 2025`
  - ✅ `Les activités débutent à partir du 8 septembre 2026`

- [ ] **Stat card** (id="stat-activites"):
  - ❌ `24` (nombre d'activités)
  - ✅ `25` (recalculer après ajout/suppression)

- [ ] **Footer**: Remplacer "© 2025" par "© 2026"

---

## 🏋️ PAGE ACTIVITÉS (`activites.html`)

### Modifications globales:
- [ ] **`<title>`**: "Nos Activités 2025-2026" → "Nos Activités 2026-2027"
- [ ] **Heading `<h1>`**: "Nos Activités 2025-2026" → "Nos Activités 2026-2027"
- [ ] **Bouton télécharger PDF**: 
  - Lien: `asset/Programme%20Fr%2025-26.pdf` → `asset/Programme%20Fr%2026-27.pdf`
  - Vérifier que le nouveau PDF est uploadé

- [ ] **Contenu dynamique JS**: Vérifier le fichier `js/activities.js` pour les filtres et les données

- [ ] **Footer**: "© 2025" → "© 2026"

---

## 💰 PAGE TARIFS & INSCRIPTIONS (`tarifs.html`)

### Modifications critiques:

- [ ] **Alert banner**:
  - ❌ `Début des inscriptions le 1er septembre 2025`
  - ✅ `Début des inscriptions le 1er septembre 2026`
  
  - ❌ `Les activités commencent la semaine du 8 septembre 2025`
  - ✅ `Les activités commencent la semaine du 8 septembre 2026`

- [ ] **Adhésion** (inchangée selon le programme):
  - ✅ Enfants: 10€
  - ✅ Adultes: 15€

- [ ] **Tous les tarifs des activités**: Voir détail par activité ci-dessous

- [ ] **Footer**: "© 2025" → "© 2026"

---

## 📋 PAGES INDIVIDUELLES DES ACTIVITÉS (`activites/*)

### STRUCTURE GÉNÉRALE

Chaque page d'activité doit inclure:
1. `<title>` mis à jour
2. Horaires **EXACTS** du programme
3. Tarifs **EXACTS** 
4. Noms des animateurs/référents **CORRECTS**
5. Salles correctes
6. Dates de démarrage 2026
7. Emoji et descriptions appropriées

---

### 🎨 ARTS PLASTIQUES (`activites/arts-plastiques.html`)

**CHANGEMENTS:**

- [ ] **Horaires**:
  - ❌ Enfants: Mercredi 10h-11h30
  - ✅ **Enfants: Mardi 17h15-18h15** (NEW)
  
  - ❌ Adultes: Mardi 18h15-19h45
  - ✅ **Adultes: Mardi 18h15-20h00** (étendu +15min)

- [ ] **Tarif Adultes**:
  - ❌ 230€
  - ✅ **250€** (+ adhésion 15€)

- [ ] **Tarif Enfants**:
  - ❌ 210€
  - ✅ **210€** (+ adhésion 10€) - inchangé

- [ ] **Salle Enfants**:
  - ❌ *(non précisée)*
  - ✅ **Salle PC BAS**

- [ ] **Dates démarrage**:
  - ❌ Mercredi 10 septembre 2025 / Mardi 9 septembre 2025
  - ✅ **8 septembre 2026** (Mardi pour les deux)

- [ ] **Contact**: Virginie FLEURY - 06 85 59 80 46 ✅ *inchangé*

---

### 🥊 BOXE PIEDS-POINGS (`activites/boxe-pieds-poings.html`)

**CHANGEMENTS:**

- [ ] **Tarif Ados**:
  - ❌ 180€
  - ✅ **180€** - inchangé

- [ ] **Tarif Adultes**:
  - ❌ 210€
  - ✅ **210€** - inchangé

- [ ] **Dates démarrage**:
  - ❌ 09 septembre 2025
  - ✅ **8 septembre 2026**

- [ ] **Contact Marianne COMBESCURE**: ✅ 07 87 70 77 40 - inchangé

---

### 🎤 BREAK DANCE (`activites/break-dance.html`)

**AJOUT:** Cette activité est clairement déjà existante, vérifier les mises à jour:

- [ ] **Tarif Débutants**:
  - ✅ **180€** (nouvelle cotisation si elle était gratuite avant)

- [ ] **Tarif Confirmés**:
  - ✅ **210€**

- [ ] **Dates démarrage**:
  - Passage à **9 septembre 2026**

- [ ] **Référente**: Roselyne NACACHIAN - 06 32 65 67 76 ✅

---

### 🏸 BADMINTON (`activites/badminton.html`)

**CHANGEMENTS:**

- [ ] **Tarif**:
  - ❌ *(vérifier ancien tarif)*
  - ✅ **30€ + adhésion**

- [ ] **Jeux - Jeudi**: 18h30-20h30
  - Sophie BUSSIERE - 06 09 88 06 23 ✅

- [ ] **Jeux - Lundi**: 18h30-20h30 (nouveau ou ancien?)
  - Valérie REIMUND - 06 16 12 08 08 ✅

- [ ] **Entraînement - Mardi**: 19h-20h30
  - Hugo REIMUND - 07 68 20 84 13 ✅

- [ ] **Lieu**: Grange Robert ✅

- [ ] **Dates démarrage**: 
  - **7 septembre 2026** (Lundi)
  - **9 septembre 2026** (Jeudi)

---

### 💃 DANSE JAZZ-KPOP **[NOUVELLE ACTIVITÉ]** (`activites/danse-jazz-kpop.html`)

**À CRÉER:**

- [ ] **Page créée** avec:
  - Titre: "🎵 DANSE JAZZ-KPOP"
  - Subtitle: "Danse urbaine, Jazz funk et mouvements contemporains"
  - Public: Enfants 6-10 ans
  
  - Horaires:
    - Enfants 6-8 ans: Mercredi 10h-11h
    - Enfants 8-10 ans: Mercredi 11h-12h
  
  - Tarif: **160€ + adhésion 10€**
  - Lieu: **Salle PC BAS**
  - Animatrice: Caroline DAUSSE
  - Référente: Roselyne NACACHIAN - 06 32 65 67 76
  - Démarrage: **9 septembre 2026**
  - Description: "Activité mêlant jazz funk, hip-hop, danse urbaine et mouvements contemporains"
  - Badge: **NOUVEAU !**

---

### 🎺 FANFARE (`activites/fanfare.html`)

**MISES À JOUR:**

- [ ] **Tarif**: ✅ Gratuit + adhésion 15€

- [ ] **Lieu**: Salle PC HAUT ✅

- [ ] **Horaires**: Vendredi 18h30-20h30 ✅

- [ ] **Démarrage**: 
  - ❌ *(ancien)*
  - ✅ **11 septembre 2026**

- [ ] **Référent/Animateur**: Sylvain GALLIZIA - 06 09 67 20 00 ✅

---

### 🎸 FUSION JAZZ **[NOUVELLE ACTIVITÉ]** (`activites/fusion-jazz.html`)

**À CRÉER:**

- [ ] **Page créée** avec:
  - Titre: "🎷 FUSION JAZZ"
  - Subtitle: "Mélange de Jazz, Modern jazz, contemporain, classique et hip-hop"
  - Public: Ados (+10 ans)
  
  - Horaires: Mardi 20h30-22h (vérifier, non mentionné explicitement dans le document)
  - Tarif: **160€ + adhésion**
  - Lieu: **Salle PC HAUT**
  - Animatrice: Caroline DAUSSE
  - Référente: Roselyne NACACHIAN - 06 32 65 67 76
  - Démarrage: **9 septembre 2026**
  - Description: "Mélange de Jazz, Modern jazz, contemporain, classique, mais aussi hip-hop sous forme de chorégraphies de groupes"
  - Badge: **NOUVEAU !**

---

### 💃 DANSE TRADITIONNELLE (`activites/danse-traditionnelle.html`)

**CHANGEMENTS:**

- [ ] **Nouveau jour Mercredi**: 15h30-16h30
  - Badge: **NOUVEAU !**
  - Animatrice: *(à vérifier)*

- [ ] **Jour ancien Mardi**: 20h30-22h
  - Lieu: **Salle PC HAUT**
  - Animateur: Erwan LAGLAINE

- [ ] **Fréquence**: Bi-mensuel ✅

- [ ] **Tarif**: **60€ + adhésion**

- [ ] **Référente**: Magali LAGLAINE - 06 82 15 59 57 ✅

- [ ] **Dates démarrage**: 
  - **8 septembre 2026** (Mardi)
  - **9 septembre 2026** (Mercredi)

---

### 🏃 GYM DOUCE (`activites/gym-douce.html`)

**MISES À JOUR:**

- [ ] **Horaires**: Vendredi 10h-11h ✅

- [ ] **Tarif**: **160€ + adhésion** ✅

- [ ] **Lieu**: Salle PC HAUT ✅

- [ ] **Référent/Animateur**: 
  - Michel NACACHIAN - 06 12 54 48 35
  - Colette SOLIVERES

- [ ] **Démarrage**: **11 septembre 2026** (Vendredi)

---

### 🥋 JUDO (`activites/judo.html`)

**CHANGEMENTS IMPORTANTS:**

- [ ] **⚠️ CHANGEMENT D'HORAIRES ET DE DURÉE**

- [ ] **Enfants 4-8 ans**:
  - ❌ *(ancien horaire/jour)*
  - ✅ **Mercredi 13h15-14h15** (Salle PC HAUT)
  - Démarrage: **9 septembre 2026**

- [ ] **Enfants 8+ ans**:
  - ❌ *(ancien horaire/jour)*
  - ✅ **Mercredi 14h15-15h15** (Salle PC HAUT)
  - Démarrage: **9 septembre 2026**

- [ ] **Tarif**: **180€ + adhésion** ✅

- [ ] **Animateur**: Jérémy CHIAROTTO ✅

- [ ] **Référente**: Roselyne NACACHIAN - 06 32 65 67 76 ✅

---

### 🚶 MARCHE/RANDO (`activites/marche-jeudi.html`)

**MISES À JOUR:**

- [ ] **Horaires**: Jeudi 8h45-12h ✅

- [ ] **Tarif**: Gratuit + adhésion ✅

- [ ] **Référent/Animateur**: Bernard LACQUEMENT - 06 04 14 89 24 ✅

- [ ] **Démarrage**: *(à vérifier)*

---

### 💪 GYM TONIC (`activites/gym-tonic.html`)

**MISES À JOUR:**

- [ ] **Mardi 19h15-20h15**:
  - Lieu: **Salle PC HAUT**
  - Tarif: **160€ + adhésion**
  - Démarrage: **10 septembre 2026**

- [ ] **Mercredi 17h30-19h** (EXTÉRIEUR):
  - Lieu: **EXTÉRIEUR**
  - Tarif: **190€ + adhésion**
  - Démarrage: **8 et 9 septembre 2026**

- [ ] **Animatrice**: Colette SOLIVERES ✅

- [ ] **Référente**: Roselyne NACACHIAN ✅

---

### 🥾 PÉTANQUE (`activites/petanque.html`)

**MISES À JOUR:**

- [ ] **Tarif**: Gratuit + adhésion ✅

- [ ] **Lieu**: Grange Robert ✅

- [ ] **Horaires**: Vendredi après-midi ✅

- [ ] **Référent/Animateur**: Joël BALSAN - 04 67 65 08 42 ✅

- [ ] **Disponibilité**: Toute l'année ✅

---

### 🧘 PILATES (`activites/pilates.html`)

**MISES À JOUR:**

- [ ] **Vendredi 11h-12h**:
  - Lieu: **Salle PC BAS**
  - Tarif: **160€ + adhésion**

- [ ] **Mercredi 19h-20h**:
  - Lieu: *(à préciser si mentionné)*
  - Tarif: **160€ + adhésion**

- [ ] **Animatrice**: Colette SOLIVERES ✅

- [ ] **Référente**: Roselyne NACACHIAN - 06 32 65 67 76 ✅

---

### 🚴 RANDO VTT (`activites/rando-vtt.html`)

**MISES À JOUR:**

- [ ] **Horaires**: Mardi à partir de 14h ✅

- [ ] **Tarif**: **5€ + adhésion** ✅

- [ ] **RDV**: Parking Salle PC ✅

- [ ] **Référent/Animateur**: Philippe REVERBEL - 06 83 46 29 79 ✅

- [ ] **Démarrage**: **8 septembre 2026**

---

### 🤸 STRETCHING **[NOUVELLE ACTIVITÉ]** (`activites/stretching.html`)

**À CRÉER:**

- [ ] **Page créée** avec:
  - Titre: "🧘 STRETCHING"
  - Subtitle: "Prendre soin de son corps en douceur"
  - Public: Adultes
  
  - Horaires: 
    - Lundi 19h30-20h30 (Salle PC HAUT)
    - Mercredi *(à confirmer)* (Salle PC HAUT)
    - Vendredi *(à confirmer)* (Salle PC HAUT)
  
  - Tarif: **160€ + adhésion 15€**
  - Animateur: Jean-Philippe TRAN
  - Référente: Roselyne NACACHIAN - 06 32 65 67 76
  - Démarrage: **7 et 9 et 11 septembre 2026**
  - Description: "Activité douce pour prendre soin de son corps en douceur"
  - Badge: **NOUVEAU !**

---

### 🎭 THÉÂTRE ENFANTS (`activites/theatre-enfants.html`)

**MISES À JOUR:**

- [ ] **Enfants 6-9 ans**:
  - Horaires: Samedi 10h-11h15 ✅

- [ ] **Enfants 10-16 ans**:
  - Horaires: Samedi 11h15-12h30 ✅

- [ ] **Tarif**: **180€ + adhésion** ✅

- [ ] **Lieu**: Salle PC HAUT ✅

- [ ] **Référent/Animateur**: Michel NACACHIAN / Bernard GUILLERMO ✅

- [ ] **Démarrage**: **9 septembre 2026**

---

### 🎭 THÉÂTRE ADULTES (À VÉRIFIER/CRÉER)

**Note**: Le document programme ne mentionne pas de théâtre adulte en 2026-2027. À vérifier si cette activité existe toujours.

---

### 💃 ZUMBA (`activites/zumba.html`)

**CHANGEMENTS IMPORTANTS:**

- [ ] **⚠️ CHANGEMENT DE JOUR**

- [ ] **Enfants/Ados (+10 ans)**:
  - Horaires: Mercredi 16h30-17h30 ✅
  - Lieu: Salle PC HAUT ✅
  - Tarif: **160€ + adhésion**
  - Animatrice: Caroline DAUSSE ✅
  - Démarrage: **9 septembre 2026**

- [ ] **Adultes**:
  - ❌ *(ancien jour)*
  - ✅ **Samedi 10h-11h15** (NOUVEAU !)
  - Lieu: Salle PC HAUT ✅
  - Tarif: **160€ + adhésion**
  - Animateur: Jean-Philippe TRAN
  - Référente: Alice HEITZMANN - 06 73 09 12 68
  - Démarrage: **12 septembre 2026**

---

### 🧘 YOGA (`activites/yoga.html`)

**MISES À JOUR:**

- [ ] **Jeudi 18h30-19h30**:
  - Lieu: Salle PC HAUT ✅
  - Tarif: **180€ + adhésion**

- [ ] **Lundi 18h30-19h30**:
  - Lieu: Salle PC HAUT ✅
  - Tarif: **160€ + adhésion**

- [ ] **Animatrice**: Elisabeth MAITRE ✅

- [ ] **Référent**: Michel NACACHIAN - 06 12 54 48 35 ✅

- [ ] **Démarrage**: 
  - **7 septembre 2026** (Lundi)
  - **10 septembre 2026** (Jeudi)

---

### 📚 BIBLIOTHÈQUE DE MONTAUD (`activites/bibliotheque.html`)

**MISES À JOUR:**

- [ ] **Tarif**: Gratuit pour les adhérents du Foyer ✅

- [ ] **Ouverture**: Samedi 10h-12h ✅

- [ ] **Lieu**: Ancienne mairie ✅

- [ ] **Collections**: ~1500 livres adultes + ~1500 livres enfants ✅

---

### ☕ CAFÉ CITOYEN / MONT'Ô CAFÉ (`activites/cafe-citoyen.html`)

**MISES À JOUR:**

- [ ] **Horaires**: Samedi matin 10h-12h30 ✅

- [ ] **Lieu**: Salle de la Mairie de Montaud ✅

- [ ] **Référente**: Marion GARGANI-FARE - 06 70 92 20 58 ✅

- [ ] **Événement spécial**:
  - ❌ *(à supprimer si daté 2025)*
  - ✅ **Paella le 12 septembre 2026** (rentrée)

---

## 📅 PAGE ÉVÉNEMENTS (`evenements.html`)

**À CRÉER/METTRE À JOUR avec les nouveaux événements 2026-2027:**

- [ ] **11 septembre 2026 - Assemblée Générale**
  - Heure: 19h
  - Lieu: Salle Pierre Combettes
  - Description: "Assemblée Générale du Foyer Rural de Montaud"

- [ ] **Novembre 2026 - Soirée Karaoké**
  - *(date à préciser)*
  - Description: "Soirée Karaoké pour célébrer la saison"

- [ ] **Janvier 2027 - Soupe et Lampions**
  - *(date à préciser)*
  - Description: "Traditionnelle Soupe et Lampions du Foyer"

- [ ] **Février 2027 - Événement Jeux**
  - *(date à préciser)*
  - Description: "Journée des jeux"

- [ ] **Juin 2027 - Journée Démo**
  - *(date à préciser)*
  - Description: "Journée de démonstration de toutes les activités du Foyer"

---

## 🏠 PAGE L'ASSOCIATION (`association.html`)

**MISES À JOUR:**

- [ ] **Message du Président**: Remplacer le message 2025-2026 par celui du programme 2026-2027:
  - ❌ *(ancien message)*
  - ✅ **Nouveau message de Jonathan DRAY** (voir document programme, paragraphes d'introduction)

- [ ] **Assemblée Générale**:
  - ❌ "Vendredi ... septembre" (année 2025)
  - ✅ **"Vendredi 11 septembre 2026 à 19h"**

- [ ] **Bureau du Foyer**: Vérifier si changements (président/secrétaire/trésorier...)
  - Jonathan DRAY (Président) - 07 67 55 05 12 ✅

- [ ] **Mention de l'accord Saint-Bauzille**: À mettre à jour si nécessaire
  - Note: "Une seule adhésion suffit pour profiter des activités des deux associations"

- [ ] **Footer**: "© 2025" → "© 2026"

---

## 📞 PAGE CONTACT (`contact.html`)

**MISES À JOUR:**

- [ ] **Adresse**: Foyer rural - Montaud, 34160 ✅

- [ ] **Email**: foyerrural.montaud@gmail.com ✅

- [ ] **Téléphone**: À vérifier (7 67 55 05 12 - Jonathan DRAY)

- [ ] **Formulaire de contact**: Vérifier les champs
  - Nom ✅
  - Email ✅
  - Téléphone ✅
  - Objet ✅
  - Message ✅

- [ ] **Footer**: "© 2025" → "© 2026"

---

## 📄 AUTRES FICHIERS CRITIQUES

### `PROGRAMME-FR-2026 (1).md` → `PROGRAMME-FR-2026-2027.md`
- [ ] **Renommer** et repositionner le fichier
- [ ] **Vérifier** qu'il est utilisé par les pages

### PDF du programme
- [ ] **Vérifier/Créer**: `asset/Programme%20Fr%2026-27.pdf`
  - Source du programme peut être le markdown ou un export du document PDF original

### `js/activities.js`
- [ ] **Vérifier les données JSON/données dynamiques** des activités
- [ ] Ajouter les 3 nouvelles activités:
  - Danse Jazz-Kpop
  - Fusion Jazz
  - Stretching
- [ ] Mettre à jour les tarifs/horaires de toutes les activités
- [ ] Mettre à jour les dates de démarrage

### `js/main.js`
- [ ] **Vérifier** tout code lié aux années/saisons
- [ ] Mettre à jour si nécessaire

### `css/style.css`
- [ ] Vérifier qu'aucune année n'est hardcodée en CSS

### Fichier `firebase.json` et configuration Firebase
- [ ] ✅ *Vérifier* que la connexion Firestore est correcte

---

## 📊 RÉSUMÉ DES CHANGEMENTS

### Nouvelles activités (3):
1. ✨ **Danse Jazz-Kpop** - Enfants 6-10 ans
2. ✨ **Fusion Jazz** - Ados 10+
3. ✨ **Stretching** - Adultes

### Activités modifiées (11):
1. 🔄 Arts Plastiques - Horaires changés
2. 🔄 Danse Traditionnelle - Nouveau jour Mercredi
3. 🔄 Gym Tonic - Lieu change (extérieur mercredi)
4. 🔄 Judo - **Changement d'horaires et de durée**
5. 🔄 Zumba - **Changement de jour** (adultes)
6. 🔄 Yoga - Nouvel horaire Lundi
7. 🔄 Pilates - Nouvel horaire
8. 🔄 Break Dance - Vérification tarifs
9. 🔄 Fanfare - Vérification dates
10. 🔄 Théâtre Enfants - Vérification
11. 🔄 Badminton - Tarif + horaires

### Activités inchangées (12):
- Boxe Pieds-Poings
- Gym Douce
- Marche/Rando
- Pétanque
- Rando VTT
- Bibliothèque
- Café Citoyen
- Et autres...

---

## 📝 NOTES IMPORTANTES

1. **Dates critiques**:
   - Inscriptions: 1er septembre 2026
   - Début des activités: 8 septembre 2026

2. **Assemblée Générale**:
   - ⚠️ **Vendredi 11 septembre à 19h** (Salle Pierre Combettes)
   - Nouvelle pour 2026-2027, doit être bien visible

3. **Événements spéciaux**:
   - Karaoké (novembre)
   - Soupe & Lampions (janvier)
   - Jeux (février)
   - Démo (juin)
   - Aucune date précise fournie - À CONFIRMER

4. **Pages à créer**:
   - `activites/danse-jazz-kpop.html`
   - `activites/fusion-jazz.html`
   - `activites/stretching.html`

5. **Vérifications indispensables**:
   - Tous les horaires exacts du programme
   - Tous les noms/prénoms des animateurs/référents
   - Les salles exactes (PC HAUT/BAS, Grange Robert, Extérieur)
   - Les emails/téléphones
   - Les tarifs par activité
   - Les dates de démarrage

---

**Date de mise à jour: 14/08/2026**  
**Statut: ⏳ EN ATTENTE D'EXÉCUTION**

