/* ═══════════════════════════════════════════════════════════
   RolePlay Server · config.js
   Créé par Steve

   ╔═══════════════════════════════════════════════════════╗
   ║                  ★  CONFIG  ★                        ║
   ║       Tu peux modifier cette section librement !      ║
   ║     Règles, staff, musiques, annonces, événements...  ║
   ╚═══════════════════════════════════════════════════════╝
═══════════════════════════════════════════════════════════ */
const CONFIG = {

  /* ── Général ─────────────────────────────────────── */
  serverName:   'RolePlay Server',         // Nom affiché dans le topbar
  serverDiscord: 'discord.gg/exemple',     // Lien Discord affiché en bas

  /* ── Images de fond (mettez vos fichiers dans le dossier) ── */
  images: [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg',
    // Ajoutez d'autres images ici : 'assets/img/4.jpg', etc.
  ],

  /* ── Règles du serveur ───────────────────────────── */
  rules: [
    { title: 'Respect mutuel',      desc: 'Tout manque de respect entraîne un ban immédiat.' },
    { title: 'Immersion RP',        desc: 'Restez dans votre personnage en permanence.' },
    { title: 'RDM / VDM interdit',  desc: 'Tuer ou percuter sans raison RP est strictement interdit.' },
    { title: 'No Combat Log',       desc: 'Se déconnecter pour fuir une situation = ban définitif.' },
    { title: 'Metagaming',          desc: 'Informations obtenues hors-jeu interdites en RP.' },
    { title: 'Micro obligatoire',   desc: 'Un micro fonctionnel est requis pour jouer.' },
    { title: 'Whitelist',           desc: 'Accès réservé aux joueurs validés uniquement.' },
    // Ajoutez des règles : { title: 'Titre', desc: 'Description' },
  ],

  /* ── Staff ───────────────────────────────────────── */
  // Rôles : 'fondateur' | 'superadmin' | 'admin' | 'modo' | 'dev' | 'staff'
  // Genre : 'h' (Homme) ou 'f' (Femme) — adapte automatiquement le titre
  staff: [
    { name: 'Lucas',   role: 'fondateur',  genre: 'h', discord: 'lucas' },
    { name: 'Emma',    role: 'fondateur',  genre: 'f', discord: 'emma' },
    { name: 'Noah',    role: 'dev',        genre: 'h', discord: 'noah' },
    { name: 'Léa',     role: 'superadmin', genre: 'f', discord: 'lea' },
    { name: 'Hugo',    role: 'admin',      genre: 'h', discord: 'hugo' },
    { name: 'Jade',    role: 'modo',       genre: 'f', discord: 'jade' },
    { name: 'Tom',     role: 'modo',       genre: 'h', discord: 'tom' },
    { name: 'Chloé',   role: 'modo',       genre: 'f', discord: 'chloe' },
    // Ajoutez un membre : { name: 'Pseudo', role: 'modo', genre: 'h', discord: 'discord_tag' },
  ],

  /* ── Musiques (URLs directes mp3/ogg/stream) ────── */
  // Remplacez les URLs par vos propres liens audio
  music: [
    { title: 'Night Drive',     artist: 'Chill',       url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    { title: 'Los Santos',      artist: 'Ambiance',    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { title: 'Grove Street',    artist: 'Vibes',       url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
    { title: 'Vinewood Hills',  artist: 'Sunset',      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
    { title: 'Downtown',        artist: 'City Lights', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
    { title: 'Pacific Coast',   artist: 'Wave',        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
    { title: 'Midnight City',   artist: 'Dark RP',     url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
    { title: 'East Side',       artist: 'Streets',     url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },
    { title: 'Mafia Drive',     artist: 'Tension',     url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' },
    { title: 'The Strip',       artist: 'Neon',        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3' },
    { title: 'Harbour View',    artist: 'Breeze',      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' },
    { title: 'Back Alley',      artist: 'Underground', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' },
    { title: 'Rockford Hills',  artist: 'Luxury',      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' },
    { title: 'Sandy Shores',    artist: 'Desert',      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' },
    { title: 'Paleto Bay',      artist: 'Escape',      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3' },
    { title: 'Mount Chiliad',   artist: 'Summit',      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3' },
    // Ajoutez des musiques : { title: 'Titre', artist: 'Artiste', url: 'https://...' },
  ],
  musicVolume: 0.1, // Volume par défaut (0.0 à 1.0)

    /* ── Annonces ────────────────────────────────────── */
  news: [
    {
      date:  '13 Mars 2026',
      title: 'Mise à jour majeure v2.0',
      body:  'Nouvelle carte, nouveaux métiers et refonte complète du système économique. Connectez-vous pour découvrir !',
    },
    {
      date:  '10 Mars 2026',
      title: 'Whitelist ouverte ce weekend',
      body:  'Les inscriptions pour rejoindre le serveur sont ouvertes jusqu\'au dimanche soir. Rendez-vous sur le Discord.',
    },
    {
      date:  '07 Mars 2026',
      title: 'Recrutement staff en cours',
      body:  'Nous recherchons des modérateurs motivés. Conditions : être actif, avoir un micro, et postuler sur Discord.',
    },
    {
      date:  '02 Mars 2026',
      title: 'Maintenance programmée',
      body:  'Le serveur sera hors ligne le 05 Mars de 20h à 23h pour mise à jour des ressources. Merci de votre compréhension.',
    },
    // Ajoutez une annonce : { date: 'JJ Mois AAAA', title: 'Titre', body: 'Contenu...' },
  ],

  /* ── Événements ──────────────────────────────────── */
  // Statuts : 'soon' (À venir) | 'open' (Inscriptions ouvertes) | 'done' (Terminé)
  events: [
    {
      date:   '15 Mars 2026',
      title:  'Course de véhicules',
      desc:   'Grand circuit autour de Los Santos. Récompenses à la clé !',
      status: 'soon',
    },
    {
      date:   '20 Mars 2026',
      title:  'Braquage organisé',
      desc:   'Équipes de 4 joueurs. Inscriptions sur le Discord.',
      status: 'open',
    },
    {
      date:   '05 Mars 2026',
      title:  'Tournoi de boxe',
      desc:   'Combat 1v1 au Maze Bank Arena. Classement disponible sur Discord.',
      status: 'done',
    },
    // Ajoutez un événement : { date: 'JJ Mois AAAA', title: 'Titre', desc: 'Description', status: 'soon','open','done' },
  ],

};
