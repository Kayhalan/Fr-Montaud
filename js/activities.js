const activities = [
{
    "name": "Arts plastiques",
    "public": "Adultes",
    "day": "Mardi",
    "time": "18h15–19h45",
    "price": "230 € + adhésion",
    "referent": "Virginie FLEURY",
    "phone": "06 85 59 80 46",
    "animator": "Virginie FLEURY",
    "location": "Salle PC bas",
    "start": "09/09/2025",
    "category": [
      "adultes",
      "culture"
    ]
  },
  {
    "name": "Badminton",
    "public": "Ados/Adultes",
    "day": "Lundi",
    "time": "19h00–20h30",
    "price": "30 € + adhésion",
    "referent": "Valérie REIMUND / Sophie BUSSIERE",
    "phone": "06 16 12 08 08 / 06 09 88 06 23",
    "animator": "Valérie REIMUND / Sophie BUSSIERE",
    "location": "Grange Robert",
    "start": "08/09/2025",
    "category": [
      "ados",
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Badminton",
    "public": "Ados/Adultes",
    "day": "Jeudi",
    "time": "19h00–20h30",
    "price": "30 € + adhésion",
    "referent": "Valérie REIMUND / Sophie BUSSIERE",
    "phone": "06 16 12 08 08 / 06 09 88 06 23",
    "animator": "Valérie REIMUND / Sophie BUSSIERE",
    "location": "Grange Robert",
    "start": "11/09/2025",
    "category": [
      "ados",
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Boxe pieds-poings",
    "public": "Ados (<14 ans)",
    "day": "Mardi",
    "time": "17h15–18h15",
    "price": "180 € + adhésion",
    "referent": "Marianne COMBESCURE",
    "phone": "07 87 70 77 40",
    "animator": "Sabine ESQUIE",
    "location": "Salle PC haut",
    "start": "09/09/2025",
    "category": [
      "ados",
      "sport"
    ]
  },
  {
    "name": "Boxe pieds-poings",
    "public": "Adultes",
    "day": "Mardi",
    "time": "18h15–19h15",
    "price": "210 € + adhésion",
    "referent": "Marianne COMBESCURE",
    "phone": "07 87 70 77 40",
    "animator": "Sabine ESQUIE",
    "location": "Salle PC haut",
    "start": "09/09/2025",
    "category": [
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Break dance",
    "public": "Enfants (+6 ans)",
    "day": "Mercredi",
    "time": "17h30–18h30",
    "price": "180 € + adhésion",
    "referent": "Christelle BOGUD",
    "phone": "06 01 28 53 18",
    "animator": "Valheires SOUDAY",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "enfants",
      "sport",
      "culture"
    ]
  },
  {
    "name": "Break dance",
    "public": "Ados (confirmés)",
    "day": "Mercredi",
    "time": "18h30–20h00",
    "price": "210 € + adhésion",
    "referent": "Christelle BOGUD",
    "phone": "06 01 28 53 18",
    "animator": "Valheires SOUDAY",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "ados",
      "sport",
      "culture"
    ]
  },
  {
    "name": "Danse africaine (Enfants)",
    "public": "Enfants (jusqu'à 12 ans)",
    "day": "Vendredi (1/2)",
    "time": "17h15–18h15",
    "price": "111 € + adhésion",
    "referent": "Karine JACQUET",
    "phone": "06 88 49 59 41",
    "animator": "Salem BLE",
    "location": "Salle PC haut",
    "start": "12/09/2025",
    "category": ["enfants", "culture"]
  },
  {
    "name": "Danse africaine (Adultes)",
    "public": "Adultes",
    "day": "Vendredi (1/2)",
    "time": "19h30–21h00",
    "price": "135 € + adhésion",
    "referent": "Karine JACQUET",
    "phone": "06 88 49 59 41",
    "animator": "Salem BLE",
    "location": "Salle PC haut",
    "start": "12/09/2025",
    "category": ["adultes", "culture"]
  },
  {
    "name": "Danse latino",
    "public": "Adultes",
    "day": "Vendredi",
    "time": "19h30–20h30",
    "price": "160 € + adhésion",
    "referent": "Alice HEITZMANN",
    "phone": "06 73 09 12 68",
    "animator": "Jean Philippe TRAN",
    "location": "Salle PC haut",
    "start": "12/09/2025",
    "category": ["adultes", "culture"]
  },
  {
    "name": "Danse traditionnelle",
    "public": "Adultes",
    "day": "Mardi (1/2)",
    "time": "20h45–22h15",
    "price": "60 € + adhésion",
    "referent": "Magali LAGLAINE",
    "phone": "06 82 15 59 57",
    "animator": "Erwan LAGLAINE",
    "location": "Salle PC bas",
    "start": "09/09/2025",
    "category": ["adultes", "culture"]
  },
  {
    "name": "Éveil corporel",
    "public": "Enfants (3–5 ans)",
    "day": "Mercredi",
    "time": "10h15–11h00",
    "price": "160 € + adhésion",
    "referent": "Roselyne NACACHIAN",
    "phone": "06 32 65 67 76",
    "animator": "Amandine MAILLARD",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "enfants",
      "sport"
    ]
  },
  {
    "name": "Fanfare",
    "public": "Adultes",
    "day": "Vendredi",
    "time": "19h00–20h30",
    "price": "gratuit + adhésion",
    "referent": "Sylvain GALLIZIA",
    "phone": "06 09 67 20 00",
    "animator": "Sylvain GALLIZIA",
    "location": "Salle PC bas",
    "start": "12/09/2025",
    "category": ["adultes", "culture"]
  },
  {
    "name": "Gym douce",
    "public": "Adultes",
    "day": "Vendredi",
    "time": "10h00–11h00",
    "price": "160 € + adhésion",
    "referent": "Francine CROULLEBOIS",
    "phone": "06 09 75 06 07",
    "animator": "Colette SOLIVERES",
    "location": "Salle PC haut",
    "start": "12/09/2025",
    "category": [
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Gym tonic",
    "public": "Adultes",
    "day": "Mardi",
    "time": "19h15–20h15",
    "price": "160 € + adhésion",
    "referent": "Roselyne NACACHIAN",
    "phone": "06 32 65 67 76",
    "animator": "Colette SOLIVERES",
    "location": "Salle PC haut",
    "start": "09/09/2025",
    "category": [
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Gym tonic",
    "public": "Adultes",
    "day": "Mercredi",
    "time": "17h30–19h00",
    "price": "190 € + adhésion",
    "referent": "Roselyne NACACHIAN",
    "phone": "06 32 65 67 76",
    "animator": "Colette SOLIVERES",
    "location": "Salle PC bas",
    "start": "09/09/2025",
    "category": [
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Initiation danses",
    "public": "Enfants (6–7 ans)",
    "day": "Mercredi",
    "time": "11h00–12h00",
    "price": "160 € + adhésion",
    "referent": "Roselyne NACACHIAN",
    "phone": "06 32 65 67 76",
    "animator": "Amandine MAILLARD",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "enfants",
      "culture"
    ]
  },
  {
    "name": "Judo",
    "public": "Enfants (4–8 ans)",
    "day": "Mercredi",
    "time": "13h00–13h45",
    "price": "132 € + adhésion",
    "referent": "Roselyne NACACHIAN",
    "phone": "06 32 65 67 76",
    "animator": "Jérémy CHIAROTTO",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "enfants",
      "sport"
    ]
  },
  {
    "name": "Judo",
    "public": "Ados (+8 ans)",
    "day": "Mercredi",
    "time": "13h45–14h45",
    "price": "171 € + adhésion",
    "referent": "Roselyne NACACHIAN",
    "phone": "06 32 65 67 76",
    "animator": "Jérémy CHIAROTTO",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "ados",
      "sport"
    ]
  },
  {
    "name": "Percussions",
    "public": "Tous âges",
    "day": "Vendredi",
    "time": "18h20–19h20 (bi-mensuel)",
    "price": "111 € + adhésion",
    "referent": "Karine JACQUET",
    "phone": "06 88 49 59 42",
    "animator": "Tobi VOLI",
    "location": "Salle PC haut",
    "start": "12/09/2025",
    "category": [
      "enfants",
      "ados",
      "adultes",
      "culture"
    ]
  },
  {
    "name": "Marche",
    "public": "Adultes",
    "day": "Jeudi",
    "time": "8h45–12h00",
    "price": "gratuit + adhésion",
    "referent": "Bernard LACQUEMENT",
    "phone": "06 04 14 89 24",
    "animator": "Bernard LACQUEMENT",
    "location": "Extérieur",
    "start": "11/09/2025",
    "category": [
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Pétanque",
    "public": "Tout public",
    "day": "Vendredi",
    "time": "après-midi",
    "price": "gratuit + adhésion",
    "referent": "Joel BALSAN",
    "phone": "04 67 65 08 42",
    "animator": "Joel BALSAN",
    "location": "Grange Robert",
    "start": "Toute l'année",
    "category": [
      "enfants",
      "ados",
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Pilates",
    "public": "Adultes",
    "day": "Mercredi",
    "time": "19h00–20h00",
    "price": "160 € + adhésion",
    "referent": "Roselyne NACACHIAN",
    "phone": "06 32 65 67 76",
    "animator": "Colette SOLIVERES",
    "location": "Salle PC bas",
    "start": "10/09/2025",
    "category": [
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Pilates",
    "public": "Adultes",
    "day": "Vendredi",
    "time": "11h00–12h00",
    "price": "160 € + adhésion",
    "referent": "Roselyne NACACHIAN",
    "phone": "06 32 65 67 76",
    "animator": "Colette SOLIVERES",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Rando VTT",
    "public": "Adultes (+18 ans)",
    "day": "Mardi",
    "time": "après-midi",
    "price": "5 € + adhésion",
    "referent": "Philippe REVERBEL",
    "phone": "06 83 46 29 79",
    "animator": "Philippe REVERBEL",
    "location": "Rdv salle PC",
    "start": "09/09/2025",
    "category": [
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Théâtre",
    "public": "Adultes",
    "day": "Jeudi",
    "time": "19h30–21h00",
    "price": "210 € + adhésion",
    "referent": "Michel NACACHIAN",
    "phone": "06 12 54 48 35",
    "animator": "Bernard GUILLERMO",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "adultes",
      "culture"
    ]
  },
  {
    "name": "Théâtre",
    "public": "Enfants (6–9 ans)",
    "day": "Mercredi",
    "time": "14h45–16h00",
    "price": "180 € + adhésion",
    "referent": "Michel NACACHIAN",
    "phone": "06 12 54 48 35",
    "animator": "Bernard GUILLERMO",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "enfants",
      "culture"
    ]
  },
  {
    "name": "Théâtre",
    "public": "Enfants (10–16 ans)",
    "day": "Mercredi",
    "time": "16h00–17h15",
    "price": "180 € + adhésion",
    "referent": "Michel NACACHIAN",
    "phone": "06 12 54 48 35",
    "animator": "Bernard GUILLERMO",
    "location": "Salle PC haut",
    "start": "10/09/2025",
    "category": [
      "ados",
      "culture"
    ]
  },
  {
    "name": "Yoga",
    "public": "Adultes",
    "day": "Jeudi",
    "time": "18h30–19h30",
    "price": "180 € + adhésion",
    "referent": "Francine CROULLEBOIS",
    "phone": "06 09 75 06 07",
    "animator": "Elisabeth MAITRE",
    "location": "Salle PC haut",
    "start": "11/09/2025",
    "category": [
      "adultes",
      "sport"
    ]
  },
  {
    "name": "Zumba",
    "public": "Enfants (8–13 ans)",
    "day": "Lundi",
    "time": "17h45–18h30",
    "price": "120 € + adhésion",
    "referent": "Alice HEITZMANN",
    "phone": "06 73 09 12 68",
    "animator": "Jean Philippe TRAN",
    "location": "Salle PC haut",
    "start": "08/09/2025",
    "category": [
      "enfants",
      "sport"
    ]
  },
  {
    "name": "Zumba",
    "public": "Ados/Adultes",
    "day": "Lundi",
    "time": "18h30–19h30",
    "price": "160 € + adhésion",
    "referent": "Alice HEITZMANN",
    "phone": "06 73 09 12 68",
    "animator": "Jean Philippe TRAN",
    "location": "Salle PC haut",
    "start": "08/09/2025",
    "category": [
      "ados",
      "adultes",
      "sport"
    ]
  }
];
