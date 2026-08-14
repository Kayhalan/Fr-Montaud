# ✅ PLAN D'EXÉCUTION FINAL - 2026-2027
**Date:** 14 août 2026  
**Status:** Prêt pour exécution Phase 2 directe

---

## 🔍 DIAGNOSE COMPLÈTE (fait)

### Architecture confirmée:

✅ **js/activities.js** - Données JSON statiques (tableau `activities`)  
✅ **HTML statiques** - Texte/dates codées en dur  
✅ **evenements.html** - Existe, 5 événements 2025 en HTML statique  
✅ **tarifs.html** - HTML statique, dates "2025" codées en dur  
✅ **asset/** - PDF "Programme Fr 25-26.pdf" existe (pas de 2026-27)  
✅ **Deploy** - Git → Firebase automatique  

---

## 📋 EXÉCUTION PHASE 2 - ACTIVITÉS.JS

### Fichier à modifier: `js/activities.js`

**Tâche 2.1: Supprimer 6 activités (rechercher et supprimer complètement)**

```
❌ "name": "Danse Africaine" (tous les groupes)
❌ "name": "Danse Latino" (tous les groupes)
❌ "name": "Eveil Corporel" (tous les groupes)
❌ "name": "Initiation Danses" (tous les groupes)
❌ "name": "Percussions" (tous les groupes)
❌ "name": "Théâtre Adultes" (tous les groupes)
```

**Tâche 2.2: Modifier 16 activités existantes (dates + horaires + jours)**

| # | Activité | Modification |
|---|----------|-------------|
| 1 | Arts plastiques (Enfants) | Jour: Mercredi→**Mardi**, Time: 10h00-11h30→**17h15-18h15**, start: 10/09/2025→**08/09/2026** |
| 2 | Arts plastiques (Adultes) | Time: 18h15-19h45→**18h15-20h00**, Price: 230€→**250€**, start: 09/09/2025→**08/09/2026** |
| 3 | Badminton (Jeu Lundi) | Time: 19h00-20h30→**18h30-20h30**, start: 08/09/2025→**07/09/2026** |
| 4 | Badminton (Entraînement Mardi) | start: 08/6/2025→**08/09/2026** |
| 5 | Badminton (Jeu Jeudi) | start: 09/09/2025→**10/09/2026** |
| 6 | Boxe Pieds Poings (Ados) | start: 08/09/2025→**08/09/2026** |
| 7 | Boxe Pieds Poings (Adultes) | start: (non renseigné)→**08/09/2026** |
| 8 | Break Dance (Débutants) | start: 09/09/2025→**09/09/2026** |
| 9 | Break Dance (Confirmés) | start: (non renseigné)→**09/09/2026** |
| 10 | Danse Traditionnelle | start: 08/09/2025→**08/09/2026** |
| 11 | Fanfare | start: 11/09/2025→**11/09/2026** |
| 12 | Gym Douce | start: 11/09/2025→**11/09/2026** |
| 13 | Gym Tonic (Mardi) | start: 08/09/2025→**08/09/2026** |
| 14 | Gym Tonic (Mercredi) | Location: Salle PC Haut→**Salle PC Bas**, Price: (vérifier)→**190€**, Time: (vérifier)→**17h30-19h00**, start: 09/09/2025→**09/09/2026** |
| 15 | Judo (Enfants 4-8) | Day: (à vérifier)→**Mercredi**, Time: (à vérifier)→**13h15-14h15**, start: 09/09/2025→**09/09/2026** |
| 16 | Judo (Ados 8+) | Day: (à vérifier)→**Mercredi**, Time: (à vérifier)→**14h15-15h15**, start: 09/09/2025→**09/09/2026** |
| 17 | Marche | start: 10/09/2025→**10/09/2026** |
| 18 | Pétanque | start: 11/09/2025→**11/09/2026** |
| 19 | Pilates (Mercredi) | Location: (vérifier)→**Salle PC Bas**, start: 09/09/2025→**09/09/2026** |
| 20 | Pilates (Vendredi) | Location: Salle PC Haut, Time: 11h-12h, start: 11/09/2025→**11/09/2026** |
| 21 | Rando VTT | start: 08/09/2025→**08/09/2026** |
| 22 | Théâtre Enfants (6-9 ans) | Day: (à vérifier)→**Samedi**, Time: (à vérifier)→**10h00-11h15**, start: 09/09/2025→**12/09/2026** |
| 23 | Théâtre Enfants (10-16 ans) | Day: (à vérifier)→**Samedi**, Time: (à vérifier)→**11h15-12h30**, start: 09/09/2025→**12/09/2026** |
| 24 | Yoga | start: 10/09/2025→**10/09/2026** |
| 25 | Zumba (Adultes) | Day: (à vérifier)→**Lundi**, Time: (à vérifier)→**18h30-19h30**, start: 07/09/2025→**07/09/2026** |

**Tâche 2.3: Ajouter 5 activités (copier structure, adapter données du CSV)**

```javascript
// À insérer dans le tableau activities:

{
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
  "category": ["enfants", "danse"]
},
{
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
  "category": ["enfants", "danse"]
},
{
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
  "category": ["ados", "danse"]
},
{
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
  "category": ["adultes", "bien-etre"]
},
{
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
  "category": ["ados", "danse"]
}
```

---

## 📝 EXÉCUTION PHASE 3 - HTML STATIQUES (6 fichiers)

### 3.1 - index.html
```html
✏️ <title>Foyer Rural de Montaud - Saison 2025-2026</title>
→ <title>Foyer Rural de Montaud - Saison 2026-2027</title>

✏️ <meta property="og:title" content="Foyer Rural de Montaud - Saison 2025-2026"/>
→ <meta property="og:title" content="Foyer Rural de Montaud - Saison 2026-2027"/>

✏️ Chercher et remplacer dans le corps du document:
   - "2025-2026" → "2026-2027"
   - Nombre d'activités (24?) → 22
   - "septembre 2025" → "septembre 2026"
```

### 3.2 - activites.html
```html
✏️ <title>Nos Activités 2025-2026</title>
→ <title>Nos Activités 2026-2027</title>

✏️ <h1 class="section-title">Nos Activités 2025-2026</h1>
→ <h1 class="section-title">Nos Activités 2026-2027</h1>

✏️ Lien PDF:
   href="asset/Programme%20Fr%2025-26.pdf"
→  href="asset/Programme%20Fr%202026-27.pdf"
   (Note: PDF doit être créé/uplodé)

✏️ Chercher et remplacer:
   - "2025-2026" → "2026-2027"
   - Nombre (si affiché) → 22
```

### 3.3 - tarifs.html
```html
✏️ <meta name="description" content="... Saison 2025-2026"/>
→ <meta name="description" content="... Saison 2026-2027"/>

✏️ <h3 style="color: #155724;"> Début des inscriptions le 1er septembre 2025</h3>
→ <h3 style="color: #155724;"> Début des inscriptions le 1er septembre 2026</h3>

✏️ <p style="margin: 0; color: #155724; font-weight: 500;">Les activités commencent la semaine du 8 septembre 2025</p>
→ <p style="margin: 0; color: #155724; font-weight: 500;">Les activités commencent la semaine du 8 septembre 2026</p>

✏️ Chercher et remplacer toutes occurrences:
   - "2025" → "2026"
   - "Adhésions-2025-2026" → "Adhésions-2026-2027" (si liens AssoConnect)
```

### 3.4 - association.html
```html
✏️ Chercher et remplacer:
   - "2025-2026" → "2026-2027"
   - Date AG: "? septembre 2025" → "11 septembre 2026"
   - Heure AG: "?" → "19h00"
   - Lieu AG: "?" → "Salle Pierre Combettes"
   
⚠️ À VÉRIFIER: Message du Président + Bureau (à mettre à jour si changements)
```

### 3.5 - evenements.html
```html
✏️ <title>AGENDA</title>
→ (Garder inchangé)

✏️ <meta name="description" content="... Saison 2025-2026"/>
→ <meta name="description" content="... Saison 2026-2027"/>

✏️ <h1 class="section-title">Agenda 2025 - 2026</h1>
→ <h1 class="section-title">Agenda 2026 - 2027</h1>

✏️ REMPLACER TOUS LES ÉVÉNEMENTS statiques:

AVANT (5 événements 2025):
- Soirée Guinguette: 27 septembre 2025
- Karaoké: 22 novembre 2025
- Soupes & Marche: 17 janvier 2026
- Jeux de Société: 29 mars 2026
- Démos: 7 juin 2026

APRÈS (2 événements 2026-2027):
- Assemblée Générale: 11 septembre 2026 19h00, Salle Pierre Combettes
- Café Citoyen Paella: 12 septembre 2026 10h-12h30, Salle Mairie

OPTIONNEL (si confirmés):
- Karaoké: novembre 2026
- Soupes: janvier 2027
- Jeux: février/mars 2027
- Démos: juin 2027

✏️ <p>Association loi 1901<br/>Saison 2025-2026<br/>34160 Montaud</p>
→ <p>Association loi 1901<br/>Saison 2026-2027<br/>34160 Montaud</p>

✏️ <p>© 2025 Foyer Rural de Montaud
→ <p>© 2026 Foyer Rural de Montaud
```

### 3.6 - contact.html
```html
✏️ Chercher et remplacer:
   - "2025-2026" → "2026-2027" (si mentionné)
   - Vérifier infos de contact à jour
```

---

## 🎨 EXÉCUTION PHASE 4 - PAGES ACTIVITÉS

### 4.1 - Créer 3 pages (template à copier depuis page existante)

**activites/danse-jazz-kpop.html**
- Copier structure d'une page existante (ex: zumba.html)
- Remplacer: Titre, description, groupes (6-8 ans + 8-10 ans)
- Horaires: Mercredi 10h-11h et 11h-12h
- Animatrice: Caroline DAUSSE
- Référente: Roselyne NACACHIAN (06 32 65 67 76)

**activites/fusion-jazz.html**
- Copier structure existante
- Titre: Fusion Jazz
- Description: "Mélange de Jazz, Modern jazz, contemporain, classique, mais aussi hip-hop sous forme de chorégraphies de groupes"
- Horaire: Mercredi 15h30-16h30
- Public: Ados (+10 ans)
- Animatrice: Caroline DAUSSE
- Référente: Roselyne NACACHIAN (06 32 65 67 76)

**activites/stretching.html**
- Copier structure existante
- Titre: Stretching
- Horaire: Lundi 19h30-20h30
- Tarif: 160€
- Animateur: Jean Philippe TRAN
- Référente: Roselyne NACACHIAN (06 32 65 67 76)

### 4.2 - Modifier 16 pages existantes
(Voir CHECKLIST-MODIFICATIONS-DETAILLEE-2026-2027.md pour chaque fichier)

Priorité:
1. arts-plastiques.html (jour change)
2. judo.html (horaires changent)
3. theatre-enfants.html (jour change)
4. gym-tonic.html (salle change)
5. zumba.html (ajouter Ados mercredi)
6. Autres activités (MAJ dates/horaires)

### 4.3 - Supprimer 6 pages
```
rm activites/danse-africaine.html
rm activites/danse-latino.html
rm activites/eveil-corporel.html
rm activites/initiation-danses.html
rm activites/percussions.html
rm activites/theatre-adulte.html
```

---

## 📦 EXÉCUTION PHASE 5 - ASSETS & PDF

### 5.1 - Créer/Uploader PDF Programme 2026-2027
```
Source: Nom du fichier existant = "Programme Fr 25-26.pdf"
Nouveau: "Programme Fr 2026-27.pdf" (ou "Programme Fr 2026-2027.pdf")

Action: 
- Si PDF existe en .xlsx: Exporter en PDF
- Sinon: Créer manquellement ou pointer vers autre source
- Uploader dans: asset/
```

### 5.2 - Mettre à jour lien dans activites.html
```html
href="asset/Programme%20Fr%202026-27.pdf"
```

---

## 🚀 EXÉCUTION PHASE 6 - GIT & DEPLOY

### 6.1 - Commit Git
```bash
git add -A
git commit -m "Mise à jour saison 2026-2027: activités, tarifs, événements, dates"
git push origin main
```

### 6.2 - Deploy Firebase
```bash
firebase deploy
# ou
firebase hosting:channel:deploy main
```

### 6.3 - Vérifier site live
- Ouvrir https://frmontaud-09-25.web.app
- Vérifier pages: index, activites, tarifs, association, evenements
- Cliquer 5 liens activités au hasard
- Vérifier années "2026-2027" visibles

---

## ✅ CHECKLIST PRÉ-EXÉCUTION

- [ ] ACTIVITES-2026-2027-EXACT.md validé ✅
- [ ] Copie de backup de js/activities.js fait
- [ ] Copie de backup des 6 fichiers HTML statiques fait
- [ ] Permission d'écriture sur le repo vérifié
- [ ] VS Code ou éditeur prêt

---

## 📋 ORDRE D'EXÉCUTION RÉEL

```
1. PHASE 2: Modifier js/activities.js
   ├─ Supprimer 6 activités
   ├─ Modifier 16 activités  
   └─ Ajouter 5 activités
   
2. PHASE 3: Modifier HTML statiques (6 fichiers)
   ├─ index.html
   ├─ activites.html
   ├─ tarifs.html
   ├─ association.html
   ├─ evenements.html (REMPLACER événements)
   └─ contact.html
   
3. PHASE 4: Pages activités (25 fichiers)
   ├─ Créer 3 (danse-jazz-kpop, fusion-jazz, stretching)
   ├─ Modifier 16
   └─ Supprimer 6
   
4. PHASE 5: Assets
   └─ Créer/Uploader PDF Programme 2026-27
   
5. PHASE 6: Deploy
   ├─ Git commit + push
   ├─ Firebase deploy
   └─ Tests live
```

**Temps estimé:** 2-3h (si templates prêts)

✅ **PRÊT À DÉMARRER PHASE 2?**

