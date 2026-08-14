# 🎯 PLAN COMPLET DE MODIFICATION - 2026-2027

**Date:** 14 août 2026  
**Source:** ACTIVITES-2026-2027-EXACT.md + CSV officiel  
**Architecture:** HTML statique + JS dynamique (`activities.js`) + Pages individuelles HTML

---

## 📊 STRUCTURE ACTUELLE

### Données des activités:
- **Fichier:** `js/activities.js`
- **Format:** Tableau JSON statique
- **Utilisé par:** `activites.html` (récupère via JS et affiche dynamiquement)

### Pages statiques:
- `index.html`, `activites.html`, `tarifs.html`, `association.html`, `evenements.html`, `contact.html`
- Contiennent du texte codé en dur (titres, années, dates)

### Pages individuelles des activités:
- `activites/*.html` (24 fichiers existants)
- Contiennent des informations statiques par activité

---

## 🔄 PLAN DE MODIFICATION - 3 NIVEAUX

### NIVEAU 1️⃣: DONNÉES DYNAMIQUES (js/activities.js)

**Étapes:**

#### 1.1 - Supprimer 6 activités obsolètes
```javascript
À SUPPRIMER du tableau activities:
❌ Danse Africaine
❌ Danse Latino  
❌ Eveil Corporel
❌ Initiation Danses
❌ Percussions
❌ Théâtre Adultes
```

#### 1.2 - Ajouter 3 activités NOUVELLES
```javascript
À AJOUTER au tableau activities:

✅ {
  "name": "Danse Jazz-Kpop",
  "public": "Enfants (6-8 ans)",
  "day": "Mercredi",
  "time": "10h00–11h00",
  "price": "160 € + adhésion",
  "referent": "Roselyne NACACHIAN",
  "phone": "06 32 65 67 76",
  "animator": "Caroline DAUSSE",
  "location": "Salle PC Haut",
  "start": "09/09/2026",
  "detailUrl": "activites/danse-jazz-kpop.html",
  "category": ["enfants", "danse"],
  "isNew": true
}

✅ {
  "name": "Danse Jazz-Kpop",
  "public": "Enfants (8-10 ans)",
  "day": "Mercredi",
  "time": "11h00–12h00",
  "price": "160 € + adhésion",
  "referent": "Roselyne NACACHIAN",
  "phone": "06 32 65 67 76",
  "animator": "Caroline DAUSSE",
  "location": "Salle PC Haut",
  "start": "09/09/2026",
  "detailUrl": "activites/danse-jazz-kpop.html",
  "category": ["enfants", "danse"],
  "isNew": true
}

✅ {
  "name": "Fusion Jazz",
  "public": "Ados (+10 ans)",
  "day": "Mercredi",
  "time": "15h30–16h30",
  "price": "160 € + adhésion",
  "referent": "Roselyne NACACHIAN",
  "phone": "06 32 65 67 76",
  "animator": "Caroline DAUSSE",
  "location": "Salle PC Haut",
  "start": "09/09/2026",
  "detailUrl": "activites/fusion-jazz.html",
  "category": ["ados", "danse"],
  "isNew": true
}

✅ {
  "name": "Stretching",
  "public": "Adultes",
  "day": "Lundi",
  "time": "19h30–20h30",
  "price": "160 € + adhésion",
  "referent": "Roselyne NACACHIAN",
  "phone": "06 32 65 67 76",
  "animator": "Jean Philippe TRAN",
  "location": "Salle PC Haut",
  "start": "07/09/2026",
  "detailUrl": "activites/stretching.html",
  "category": ["adultes", "bien-etre"],
  "isNew": true
}

✅ {
  "name": "Zumba",
  "public": "Ados (+10 ans)",
  "day": "Mercredi",
  "time": "16h30–17h30",
  "price": "160 € + adhésion",
  "referent": "Roselyne NACACHIAN",
  "phone": "06 32 65 67 76",
  "animator": "Caroline DAUSSE",
  "location": "Salle PC Haut",
  "start": "09/09/2026",
  "detailUrl": "activites/zumba.html",
  "category": ["ados", "danse"],
  "isNew": true
}
```

#### 1.3 - Modifier 16 activités existantes
```javascript
À MODIFIER:

1️⃣ Arts plastiques (Enfants):
   - Avant: "Mercredi" → Après: "Mardi" ✅ JOUR CHANGE
   - Avant: "10h00–11h30" → Après: "17h15-18h15"
   - Avant: "210 € + adhésion" → Après: "210 € + adhésion" (inchangé)
   - Avant: "start": "10/09/2025" → Après: "08/09/2026"

2️⃣ Arts plastiques (Adultes):
   - Avant: "Mardi" → Après: "Mardi" (inchangé)
   - Avant: "18h15–19h45" → Après: "18h15-20h00"
   - Avant: "230 € + adhésion" → Après: "250 € + adhésion"
   - Avant: "start": "09/09/2025" → Après: "08/09/2026"

3️⃣ Badminton (Jeu - Lundi):
   - Avant: "19h00–20h30" → Après: "18h30-20h30"
   - Avant: "08/09/2025" → Après: "07/09/2026"

4️⃣ Judo (Enfants):
   - Avant: Horaires/jours à vérifier → Après: "Mercredi" "13h15-14h15" ✅ MAJEUR
   - Avant: (4-8 ans) → Après: (4-8 ans)
   - Avant: "start": "09/09/2025" → Après: "09/09/2026"

5️⃣ Judo (Ados):
   - Avant: Horaires/jours à vérifier → Après: "Mercredi" "14h15-15h15" ✅ MAJEUR
   - Avant: (8+) → Après: (8 ans et +)
   - Avant: "start": "09/09/2025" → Après: "09/09/2026"

6️⃣ Théâtre Enfants (6-9 ans):
   - Avant: Autre jour → Après: "Samedi" ✅ JOUR CHANGE
   - Avant: Horaires à vérifier → Après: "10h00–11h15"
   - Avant: "start": "09/09/2025" → Après: "12/09/2026"

7️⃣ Théâtre Enfants (10-16 ans):
   - Avant: Autre jour → Après: "Samedi" (inchangé si déjà samedi)
   - Avant: Horaires à vérifier → Après: "11h15–12h30"
   - Avant: "start": "09/09/2025" → Après: "12/09/2026"

8️⃣ Gym Tonic (Mercredi):
   - Avant: "Salle PC Haut" → Après: "Salle PC Bas"
   - Avant: Horaires à vérifier → Après: "17h30-19h00"
   - Avant: "190 €" (vérifier ancien tarif)

9️⃣ Zumba (Adultes):
   - Avant: Jour/heure à vérifier → Après: "Lundi" "18h30-19h30" ✅ JOUR CHANGE
   - Avant: "start": "09/09/2025" → Après: "07/09/2026"

🔟-🔆 Autres modifications mineures:
   - Badminton (entraînement Mardi, jeu Jeudi): MAJ des dates
   - Boxe Pieds Poings: MAJ des dates "08/09/2026"
   - Break Dance: MAJ "09/09/2026"
   - Danse Traditionnelle: MAJ "08/09/2026"
   - Fanfare: MAJ "11/09/2026"
   - Gym Douce: MAJ "11/09/2026"
   - Gym Tonic (Mardi): MAJ "08/09/2026"
   - Marche: MAJ "10/09/2026"
   - Pétanque: MAJ "11/09/2026"
   - Pilates: MAJ des dates
   - Rando VTT: MAJ "08/09/2026"
   - Yoga: MAJ "10/09/2026"
```

**Résultat final js/activities.js:**
- ✅ 6 activités supprimées
- ✅ 5 activités nouvelles ajoutées
- ✅ 16 activités modifiées
- ✅ = **27 activités totales** (22 uniques, certaines avec plusieurs groupes)

---

### NIVEAU 2️⃣: FICHIERS HTML STATIQUES (Globaux)

#### 2.1 - index.html
```html
MODIFICATIONS:

1. <title>
   Avant: "Foyer Rural de Montaud - Saison 2025-2026"
   Après: "Foyer Rural de Montaud - Saison 2026-2027"

2. <meta name="description">
   Avant: (vérifier si 2025-2026 mentionné)
   Après: Mettre à jour si nécessaire

3. <meta property="og:title">
   Avant: "Foyer Rural de Montaud - Saison 2025-2026"
   Après: "Foyer Rural de Montaud - Saison 2026-2027"

4. Section Héro / Titre principal:
   Remplacer texte avec:
   - Année 2026-2027
   - Nombre d'activités: 22
   - Dates clés: Inscriptions 1er sept, Début 8 sept, AG 11 sept

5. Bannière de dates:
   Avant: 2025-2026
   Après: 2026-2027

6. Bouton/Lien vers activités:
   Avant: "Découvrir nos 24 activités"
   Après: "Découvrir nos 22 activités"

7. Dates événements (si affichées):
   Avant: Dates 2025
   Après: Dates 2026 (AG: 11 sept, Café Citoyen: 12 sept)
```

#### 2.2 - activites.html
```html
MODIFICATIONS:

1. <title>
   Avant: "Nos Activités 2025-2026"
   Après: "Nos Activités 2026-2027"

2. <h1 class="section-title">
   Avant: "Nos Activités 2025-2026"
   Après: "Nos Activités 2026-2027"

3. Lien PDF:
   Avant: "asset/Programme%20Fr%2025-26.pdf"
   Après: "asset/Programme%20Fr%202026-27.pdf" (ou créer le PDF)
   Texte: "Télécharger le programme 2026-2027"

4. Nombre d'activités (si affiché):
   Avant: 24
   Après: 22

5. Contenu statique de présentation:
   Vérifier si "2025-2026" mentionné → remplacer par "2026-2027"
```

#### 2.3 - tarifs.html
```html
MODIFICATIONS:

1. <title>
   Avant: Contient probablement "2025-2026"
   Après: "2026-2027"

2. En-têtes / Titres:
   Avant: "Tarifs 2025-2026" ou "Saison 2025-2026"
   Après: "Tarifs 2026-2027" ou "Saison 2026-2027"

3. Dates clés affichées:
   "Inscriptions à partir du 1er septembre 2026"
   "Les activités commencent le 8 septembre 2026"

4. Adhésions annuelles:
   Avant: (vérifier)
   Après: 
   - Enfants: 10€
   - Adultes: 15€

5. Tableau des tarifs (si généré statiquement):
   À VÉRIFIER: Si c'est du HTML codé en dur ou du JS dynamique
   Si statique → Mettre à jour tous les tarifs (voir ACTIVITES-2026-2027-EXACT.md)
   Si dynamique → Vérifier que JS relit bien de activities.js
```

#### 2.4 - association.html
```html
MODIFICATIONS:

1. <title> et <meta>:
   Remplacer "2025-2026" → "2026-2027"

2. Section Assemblée Générale:
   Avant: (date/heure anciens)
   Après:
   - Jour: VENDREDI
   - Date: 11 septembre 2026
   - Heure: 19h00
   - Lieu: Salle Pierre Combettes
   - Objectif: Élections Conseil d'Administration

3. Message du Président:
   À VÉRIFIER: Si message personnalisé dans programme 2026-2027
   Sinon: Garder générique mais mettre à jour l'année si mentionnée

4. Bureau/Conseil:
   À VÉRIFIER: Si modifications d'élus mentionnées dans programme
   Sinon: Garder liste actuelle si inchangée

5. Cotisations:
   Vérifier si les tarifs affichés correspondent aux 10€ (enfants) / 15€ (adultes)
```

#### 2.5 - evenements.html
```html
MODIFICATIONS MAJEURES:

1. <title> et <meta>:
   Remplacer "2025-2026" → "2026-2027"

2. Liste d'événements 2026-2027:
   REMPLACER complètement avec:

   ✅ SAMEDI 12 SEPTEMBRE 2026
      - Café Citoyen - Paella de rentrée
      - Horaire: 10h00-12h30
      - Lieu: Salle Mairie
      - Description: "Mont'ô Café fête sa rentrée en proposant de partager une Paella à midi"

   ✅ VENDREDI 11 SEPTEMBRE 2026
      - Assemblée Générale
      - Horaire: 19h00
      - Lieu: Salle Pierre Combettes
      - Description: "Élections du Conseil d'Administration"

   ❓ À AJOUTER (si confirmed au-delà du CSV):
      - Karaoké (date à déterminer)
      - Soupe Citoyenne (date à déterminer)
      - Jeux en Famille (date à déterminer)
      - Soirée Démo/Portes Ouvertes (date à déterminer)

3. Format d'affichage:
   À VÉRIFIER: Est-ce du HTML statique ou JS dynamique?
```

#### 2.6 - contact.html
```html
MODIFICATIONS MINEURES:

1. <title> et <meta>:
   Remplacer "2025-2026" → "2026-2027" (si mentionné)

2. Informations de contact:
   À VÉRIFIER: Si email/téléphone à mettre à jour

3. Coordonnées du foyer:
   Garder inchangées (sauf si modifiées)

4. Référents activités:
   À VÉRIFIER: Si liste affichée → mettre à jour les principaux:
   - Roselyne NACACHIAN (06 32 65 67 76) - référente danse/bien-être
   - Caroline DAUSSE - animatrice danse
   - Jean Philippe TRAN - animateur zumba/stretching
```

---

### NIVEAU 3️⃣: PAGES INDIVIDUELLES D'ACTIVITÉS

#### 3.1 - Pages à CRÉER (3 nouvelles)

**Créer: `activites/danse-jazz-kpop.html`**
```html
Structure:
- Titre: "Danse Jazz-Kpop"
- Description: "Activité mêlant jazz funk, hip-hop, danse urbaine et mouvements contemporains"
- Groupes:
  * Enfants 6-8 ans: Mercredi 10h-11h, 160€, Salle PC Haut, Caroline DAUSSE
  * Enfants 8-10 ans: Mercredi 11h-12h, 160€, Salle PC Haut, Caroline DAUSSE
- Référente: Roselyne NACACHIAN (06 32 65 67 76)
- Démarrage: 9 septembre 2026
- Badge: ⭐ NOUVEAU
```

**Créer: `activites/fusion-jazz.html`**
```html
Structure:
- Titre: "Fusion Jazz"
- Description: "Mélange de Jazz, Modern jazz, contemporain, classique, mais aussi hip-hop sous forme de chorégraphies de groupes"
- Public: Ados (+10 ans)
- Jour: Mercredi
- Horaire: 15h30-16h30
- Tarif: 160€ + adhésion 15€
- Salle: Salle PC Haut
- Animatrice: Caroline DAUSSE
- Référente: Roselyne NACACHIAN (06 32 65 67 76)
- Démarrage: 9 septembre 2026
- Badge: ⭐ NOUVEAU
```

**Créer: `activites/stretching.html`**
```html
Structure:
- Titre: "Stretching"
- Description: (À définir - flexibilité, relaxation, bien-être?)
- Public: Adultes
- Jour: Lundi
- Horaire: 19h30-20h30
- Tarif: 160€ + adhésion 15€
- Salle: Salle PC Haut
- Animateur: Jean Philippe TRAN
- Référente: Roselyne NACACHIAN (06 32 65 67 76)
- Démarrage: 7 septembre 2026
- Badge: ⭐ NOUVEAU
```

#### 3.2 - Pages à MODIFIER (16 existantes)

**À METTRE À JOUR (dans cet ordre de priorité):**

```
PRIORITÉ HAUTE (changements significatifs):
□ activites/arts-plastiques.html → JOUR CHANGE (Mercredi → Mardi)
□ activites/judo.html → HORAIRES CHANGENT (13h15-14h15 et 14h15-15h15)
□ activites/theatre-enfants.html → JOUR CHANGE (? → Samedi)
□ activites/gym-tonic.html → SALLE CHANGE Mercredi (PC Haut → PC Bas)
□ activites/zumba.html → JOUR CHANGE Adultes (? → Lundi)

PRIORITÉ MOYENNE (ajustements):
□ activites/badminton.html → Vérifier dates/horaires
□ activites/boxe-pieds-poings.html → MAJ dates de démarrage
□ activites/break-dance.html → MAJ dates
□ activites/danse-traditionnelle.html → MAJ dates
□ activites/fanfare.html → MAJ dates
□ activites/gym-douce.html → MAJ dates
□ activites/marche-jeudi.html → MAJ dates
□ activites/petanque.html → MAJ dates
□ activites/pilates.html → Ajouter 2e session (ou vérifier si déjà)
□ activites/rando-vtt.html → MAJ dates
□ activites/yoga.html → MAJ dates (+ vérifier les 2 sessions)

BONUS:
□ activites/bibliotheque.html → Pas de changement (activité continue)
□ activites/cafe-citoyen.html → Pas de changement (activité continue)
```

#### 3.3 - Pages à SUPPRIMER (6 activités disparues)

```
À SUPPRIMER DU SITE (+ fichiers HTML):
❌ activites/danse-africaine.html
❌ activites/danse-latino.html
❌ activites/eveil-corporel.html
❌ activites/initiation-danses.html
❌ activites/percussions.html
❌ activites/theatre-adulte.html

Procédure:
1. Verser les fichiers .html
2. Commit git: "Suppression activités obsolètes 2025-2026"
3. Nettoyer références dans les templates/listes
```

---

## 📋 ORDRE D'EXÉCUTION RECOMMANDÉ

### Phase 1: PRÉPARATION (avant upload)
```
1. ✅ Lire/valider ACTIVITES-2026-2027-EXACT.md ← VOUS ÊTES ICI
2. ✅ Créer plan détaillé (ce document)
3. ⏭️ ATTENDRE VALIDATION UTILISATEUR
```

### Phase 2: DONNÉES DYNAMIQUES (js/activities.js)
```
1. Supprimer 6 activités (copier/coller depuis activities.js existant)
2. Modifier 16 activités (valeurs de jour, heure, tarif, date)
3. Ajouter 5 activités (copier structure JSON)
4. Tester localement: Les 22 activités s'affichent bien? Aucune erreur console?
```

### Phase 3: PAGES GLOBALES STATIQUES (HTML)
```
1. index.html (titre, années, chiffres)
2. activites.html (titre, lien PDF, années)
3. tarifs.html (titres, dates d'inscription, tarifs adhésion)
4. association.html (AG date/heure/lieu)
5. evenements.html (nouvelle liste d'événements)
6. contact.html (si besoin)
```

### Phase 4: PAGES INDIVIDUELLES D'ACTIVITÉS
```
1. Créer 3 nouvelles pages (copier structure d'une existante)
2. Modifier 16 pages existantes
3. Supprimer 6 pages obsolètes
```

### Phase 5: UPLOAD & TESTS
```
1. Git: Commit tous les changements
2. Firebase: Deploy/upload
3. Tester sur site live (activites.html, tarifs, pages détails)
4. Vérifier liens PDF, images, dates affichées
```

---

## 🚨 RISQUES & VALIDATIONS

### Risques identifiés:

| Risque | Impact | Mitigation |
|--------|--------|-----------|
| Oublier une activité dans modifications | Données incohérentes | Comparer JS vs CSV avant/après |
| Mauvais format JSON dans activities.js | Site ne charge pas | Tester console.log(activities) |
| Lien PDF mort | Utilisateurs frustrés | Créer/uploder nouveau PDF 2026-2027 |
| Pages orphelines (lien mort) | 404 errors | Vérifier tous les "detailUrl" |
| Dates de démarrage incorrectes | Utilisateurs confus | Quadruple-check vs CSV |

### Validations à faire:

- [ ] **Avant Phase 2:** Valider chaque entrée activities.js vs CSV (27 lignes)
- [ ] **Après Phase 2:** Ouvrir activites.html en local, vérifier 22 activités affichées correctement
- [ ] **Après Phase 3:** Vérifier dates/années dans tous les titres
- [ ] **Après Phase 4:** Cliquer sur chaque lien de détail, vérifier cohérence données
- [ ] **Avant upload:** Comparer 2 versions activities.js (avant/après) avec diff tool
- [ ] **Après upload:** Tester site live sur 3 navigateurs, contrôler les liens PDF

---

## 📝 CHECKLIST FINALE

### Avant validation:
- [ ] ACTIVITES-2026-2027-EXACT.md lu et approuvé
- [ ] Ce plan validé point par point

### Niveau 1 (JS):
- [ ] 6 activités supprimées identifiées
- [ ] 16 activités à modifier listées
- [ ] 5 activités nouvelles définies (structure JSON prête)

### Niveau 2 (HTML statique):
- [ ] Titres index.html à changer: (lister)
- [ ] Titres activites.html à changer: (lister)
- [ ] Dates tarifs.html à changer: (lister)
- [ ] AG date/heure association.html: 11 sept 19h, Salle Pierre Combettes ✅
- [ ] Événements evenements.html: AG 11 sept + Paella 12 sept

### Niveau 3 (Pages activités):
- [ ] 3 nouveaux fichiers HTML à créer (template prêt)
- [ ] 16 fichiers HTML à modifier (structure claire)
- [ ] 6 fichiers HTML à supprimer (liste établie)

### Après exécution:
- [ ] Git diff reviewed
- [ ] Firebase deployment validé
- [ ] Tests utilisateurs (5 liens au hasard, vérifier cohérence)

---

## ❓ QUESTIONS AVANT DÉMARRAGE

1. **Fichier tarifs.html:** Est-ce que le tableau des tarifs est en HTML statique ou généré en JS?
   → Répond: Besoin de modifier fichier ou données activities.js suffit?

2. **Page evenements.html:** Existe-t-elle? Comment est-elle structurée?
   → Détermine: Faut-il créer ou modifier?

3. **Fichiers PDF:** Y a-t-il un PDF "Programme Fr 2025-26.pdf" à remplacer?
   → Détermine: Lien valide ou fichier manquant?

4. **Hosting Firebase:** Les fichiers seront commit+push Git puis deployed Firebase?
   → Clarifie: Processus de déploiement

5. **Meta descriptions:** Certaines pages mentionnent-elles "2025-2026" dans les meta tags?
   → Si oui: Faut-il les mettre à jour pour SEO?

---

✅ **PRÊT POUR VALIDATION?**

Ce plan couvre les **25 fichiers impactés** avec détail complet de chaque modification.

Validez ce plan point par point → je procède à l'exécution!

