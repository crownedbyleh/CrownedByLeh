/* =========================================================
   TRADUCTIONS BILINGUES (FR / EN)
========================================================= */
const translations = {
  fr: {
    'nav.accueil': 'ACCUEIL',
    'nav.disponibilites': 'DISPONIBILITÉS',
    'nav.services': 'SERVICES',
    'nav.plus': 'PLUS',
    'ticker.text': '✨ Pour les coiffures non-listées, envoyez moi un message.',
    'ticker.sub': '⚠️ Je ne tresse pas les cheveux courts',
    'ticker.text2': 'Je ne tresse pas les cheveux court',
    'hero.badge': 'Bienvenue chez Crowned By Leh',
    'hero.ctaServices': 'Découvrir mes services',
    'hero.ctaBooking': 'Prendre rendez-vous',
    'features.feat1Title': 'Rallonges Incluses',
    'features.feat1Desc': 'Tous mes forfaits comprennent des mèches.',
    'features.feat2Title': 'Soin & Beauté Royale',
    'features.feat2Desc': 'Une attention méticuleuse portée à la santé de votre cuir chevelu et de vos racines.',
    'features.feat3Title': 'Terrebonne',
    'features.feat3Desc': 'À domicile',
    'services.title': 'MES SERVICES',
    'services.subtitle': 'Sélectionnez votre prestation pour voir les détails et réserver',
    'services.apartir': 'À partir de',
    'services.voirPrix': 'Voir les prix',
    'services.hoverText': '✨ Voir les tarifs',
    'services.chooseSize': 'Choisir la grosseur',
    'services.hoverSize': '✨ Choisir la grosseur',
    'services.comingSoon':'À venir',
    'booking.title': 'Programmer votre service',
    'booking.subtitle': 'Consultez nos disponibilités en temps réel et réservez votre créneau en un clic.',
    'booking.selectPillLabel': 'Coiffure sélectionnée :',
    'booking.selectSizeLabel': 'Grosseur :',
    'nav.politiques': 'POLITIQUES',
    'policies.title': 'POLITIQUES DE RÉSERVATION',
    'policies.subtitle': 'Veuillez lire attentivement les conditions avant de prendre rendez-vous.',
    'policies.c1Title': 'Dépôt',
    'policies.c1Desc': 'Un dépôt non remboursable de 25 $ est exigé par virement Interac pour bloquer et confirmer votre date. Ce montant est déduit de votre facture finale.',
    'policies.c2Title': 'Retards & Annulation',
    'policies.c2Desc': "Une période de grâce de 10 minutes est accordée. Des frais de 15 $ s'appliquent entre 10 et 30 minutes de retard. Après 30 minutes de retard, le rendez-vous est automatiquement annulé et le dépôt est conservé.",
    'policies.c3Title': 'Reports & Modifications',
    'policies.c3Desc': "Vous pouvez reporter votre rendez-vous jusqu'à 48h à l'avance sans perdre votre dépôt (1 seul report autorisé, dans un délai raisonnable).",
    'policies.c4Title': 'Absence (No-Show)',
    'policies.c4Desc': "Toute absence sans avertissement préalable entraîne l'annulation immédiate et la perte du dépôt.",
    'policies.c5Title': 'Modes de Paiement',
    'policies.c5Desc': 'Le solde restant se règle le jour même de la prestation par virement Interac.',
    'policies.c6Title': 'Lieu & Accompagnateurs',
    'policies.c6Desc': "L'adresse exacte à Terrebonne vous sera transmise par confirmation. Aucun accompagnateur ou enfant n'est accepté.",
    'policies.beforeTitle': 'Avant votre rendez-vous',
    'policies.beforeSub': 'Checklist préparation cheveux',
    'policies.chk1': 'Cheveux propres, fraîchement lavés et 100% secs.',
    'policies.chk2': 'Cheveux démêlés et étirés au séchoir (Blowout) de la racine aux pointes.',
    'policies.chk3': "Pas d'huiles lourdes, graisses ou beurres épais dans les cheveux le jour J.",
    'about.title': 'À propos de Leh',
    'about.p1': 'Bienvenue dans mon univers ! Je suis Leh (Lehishna)!.',
    'about.p2': 'À travers Crowned By Leh, ma mission est de faire en sorte que chaque cliente se sente véritablement couronnée, confiante et sublime. Mon espace situé à Terrebonne et je me déplace également.',
    'about.p3': 'Je suis spécialisée dans les Bohos. J\'apprécie le temps de venir visiter mon site, j\'ai hâte de vous voir!.',
    'about.statNatural': 'Cheveux Inclus',
    'about.statQuality': 'Finition & Soin Expert',
    'about.statCities': 'Terrebonne',
    'contact.title': 'Contactez-moi',
    'contact.subtitle': 'Une question, un style sur-mesure ou une demande particulière ? Écrivez-moi directement ci-dessous.',
    'contact.nom': 'Nom complet',
    'contact.email': 'Adresse e-mail',
    'contact.telephone': 'Numéro de téléphone',
    'contact.message': 'Votre message ou précisions sur votre coiffure souhaitée...',
    'contact.envoyer': 'ENVOYER LE MESSAGE',
    'contact.merci': 'Merci ! Votre message a été envoyé avec succès.',
    'footer.instagramText': 'Suivez-moi sur Instagram @crownedby_leh',
    'footer.newsletterPlaceholder': 'Saisissez votre e-mail ici',
    'footer.abonner': "S'ABONNER",
    'footer.merciNewsletter': 'Merci pour votre inscription à la newsletter !',
    'footer.email': 'E-mail :',
    'footer.legal1': 'Politique de confidentialité',
    'footer.legal2': 'Termes et conditions',
    'footer.legal3': 'Mentions légales',
    'footer.legal4': 'Politique de cookies',
    'footer.copyright': '© 2026 par Crowned By Leh — Fait avec amour pour la coiffure protectrice',
    'modal.selectSize': 'Choisir la grosseur',
    'modal.back': '← Changer la grosseur',
    'modal.selectLength': 'Sélectionner Longueur et prix',
    'modal.selectAddons': 'Sélectionner des suppléments',
    'modal.colors': 'Couleurs',
    'modal.next': 'Suivant',
    'modal.add': 'Ajouter',
    'modal.added': 'Ajouté',
    'summary.title': 'Résumé du RDV',
    'summary.modify': 'Modifier',
    'summary.with': 'Avec',
    'summary.addService': '+ Ajouter un service',
    'summary.programmer': 'Programmer',
    'details.title': 'Détails du service',
    'details.modify': 'Modifier',
    'details.showMore': 'Afficher plus',
    'details.showLess': 'Afficher moins',
    'details.size': 'Grosseur',
    'details.length': 'Longueur',
    'details.addons': 'Suppléments',
    'details.noAddons': 'Couleur noire standard',
    'details.total': 'Total estimé'
  },
  en: {
    'nav.accueil': 'HOME',
    'nav.disponibilites': 'AVAILABILITY',
    'nav.services': 'SERVICES',
    'nav.plus': 'MORE',
    'ticker.text': '✨For styles not listed below, message me',
    'ticker.sub': '⚠️ I do not braid short hair',
    'hero.badge': 'Welcome to Crowned By Leh',
    'hero.tagline': 'The royal art of African braiding & custom protective styles',
    'hero.ctaServices': 'Explore our services',
    'hero.ctaBooking': 'Book an appointment',
    'features.feat1Title': 'Extensions Included',
    'features.feat1Desc': 'All our packages include hair extensions.',
    'features.feat2Title': 'Royal Hair Care',
    'features.feat2Desc': 'Meticulous attention to your scalp health, hair edges and comfort.',
    'features.feat3Title': 'Terrebonne',
    'features.feat3Desc': 'Home based',
    'services.title': 'MY SERVICES',
    'services.subtitle': 'Select your service to view details and book',
    'services.apartir': 'Starting at',
    'services.voirPrix': 'See prices',
    'services.hoverText': '✨ View pricing',
    'services.chooseSize': 'Choose the size',
    'services.hoverSize': '✨ Choose the size',
    'services.comingSoon': 'Coming soon',
    'booking.title': 'Schedule your service',
    'booking.subtitle': 'Check our live availability and book your appointment in one click.',
    'booking.selectPillLabel': 'Selected hairstyle:',
    'booking.selectSizeLabel': 'Size:',
    'nav.politiques': 'POLICIES',
    'policies.title': 'BOOKING POLICIES',
    'policies.subtitle': 'Please read our terms and conditions carefully before booking.',
    'policies.c1Title': 'Deposit',
    'policies.c1Desc': 'A non-refundable $25 deposit is required via e-Transfer to secure your spot. This amount is credited toward your final total.',
    'policies.c2Title': 'Lateness & Cancellation',
    'policies.c2Desc': 'A 10-minute grace period is allowed. A $15 late fee applies between 10 and 30 minutes. After 30 minutes of delay, your appointment is automatically canceled and the deposit is forfeited.',
    'policies.c3Title': 'Rescheduling',
    'policies.c3Desc': 'You can reschedule your appointment up to 48 hours in advance without losing your deposit (one reschedule allowed within a reasonable timeframe).',
    'policies.c4Title': 'No-Show Policy',
    'policies.c4Desc': 'No-call / no-shows will result in immediate cancellation and loss of deposit.',
    'policies.c5Title': 'Payment Methods',
    'policies.c5Desc': 'The remaining balance must be paid on the appointment day by Interac e-Transfer.',
    'policies.c6Title': 'Location & Guests',
    'policies.c6Desc': 'The exact address in Terrebonne will be sent upon confirmation. No extra guests or children are allowed.',
    'policies.beforeTitle': 'Before Your Appointment',
    'policies.beforeSub': 'Hair prep checklist',
    'policies.chk1': 'Clean hair, freshly washed and 100% dry.',
    'policies.chk2': 'Detangled and blown out from root to ends.',
    'policies.chk3': 'No heavy oils, grease, or thick butter in your hair on appointment day.',
    'about.title': 'About Leh',
    'about.p1': 'Welcome to my world! I am Leh (Lehishna)!',
    'about.p2': 'Through Crowned By Leh, my mission is to make sure every client feels truly crowned, confident, and fabulous. My space is located in Terrebonne, and I also travel.',
    'about.p3': 'I specialize in Boho styles. I appreciate you taking the time to visit the site, I can\'t wait to see you!',
    'about.statNatural': 'Hair Included',
    'about.statQuality': 'Master Finish & Care',
    'about.statCities': 'Terrebonne',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have a question, a custom request or style inquiry? Message me directly below.',
    'contact.nom': 'Full Name',
    'contact.email': 'Email Address',
    'contact.telephone': 'Phone Number',
    'contact.message': 'Your message or hairstyle details...',
    'contact.envoyer': 'SEND MESSAGE',
    'contact.merci': 'Thank you! Your message has been sent successfully.',
    'footer.instagramText': 'Follow me on Instagram @crownedby_leh',
    'footer.newsletterPlaceholder': 'Enter your email here',
    'footer.abonner': 'SUBSCRIBE',
    'footer.merciNewsletter': 'Thank you for subscribing to our newsletter!',
    'footer.email': 'Email:',
    'footer.legal1': 'Privacy Policy',
    'footer.legal2': 'Terms & Conditions',
    'footer.legal3': 'Legal Notice',
    'footer.legal4': 'Cookie Policy',
    'footer.copyright': '© 2026 by Crowned By Leh — Made with love for protective hairstyling',
    'modal.selectSize': 'Choose the size',
    'modal.back': '← Change size',
    'modal.selectLength': 'Select length and price',
    'modal.selectAddons': 'Select add-ons',
    'modal.colors': 'Colors',
    'modal.next': 'Next',
    'modal.add': 'Add',
    'modal.added': 'Added',
    'summary.title': 'Appointment summary',
    'summary.modify': 'Edit',
    'summary.with': 'With',
    'summary.addService': '+ Add a service',
    'summary.programmer': 'Schedule',
    'details.title': 'Service details',
    'details.modify': 'Edit',
    'details.showMore': 'Show more',
    'details.showLess': 'Show less',
    'details.size': 'Size',
    'details.length': 'Length',
    'details.addons': 'Add-ons',
    'details.noAddons': 'Standard black color',
    'details.total': 'Estimated total'
  }
};

let currentLang = localStorage.getItem('ebraids-lang') || 'fr';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ebraids-lang', lang);
  applyStaticTranslations();
  renderServices();
  renderBookingServicePills();
  renderServiceDetailsPanel();
  if (currentService) {
    renderServiceModal();
  }
}

/* =========================================================
   DONNÉES DES PRESTATIONS
========================================================= */
function buildLengths(a, b, c, d) {
  return [
    { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: a },
    { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: b },
    { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: c },
    { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: d }
  ];
}

// Noms des grosseurs (vous pouvez en ajouter / renommer)
const SIZE_NAMES = {
  sm: { fr: 'Small-medium', en: 'Small-medium' },
  m:  { fr: 'Medium', en: 'Medium' },
  l:  { fr: 'Large', en: 'Large' }
};

// Chaque grosseur = le prix "longueur aux épaules".
// Les autres longueurs suivent la règle : +30 $ par longueur.
function lengthsFrom(base) {
  return buildLengths(base, base + 30, base + 60, base + 90);
}

function makeStyle(id, fr, en, sizePrices) {
  return {
    id,
    name: { fr, en },
    description: { fr: '', en: '' },
    image: '',
    sizes: Object.entries(sizePrices).map(([key, base]) => ({
      id: `${id}-${key}`,
      name: SIZE_NAMES[key],
      lengths: lengthsFrom(base)
    }))
  };
}

// ⚠️ PRIX TEMPORAIRES : remplacez les grosseurs et les prix de chaque coiffure.
// Exemple : { s: 200, m: 180, l: 160 } = 3 grosseurs (Small, Medium, Large)
const services = [

  /* ================= BOHO BRAIDS ================= */
  {
    id: 'boho-braids',
    name: { fr: 'Boho braids', en: 'Boho braids' },
    description: { fr: '', en: '' },
    image: 'images/bohoBraids.jpg',
    sizes: [
      {
        id: 'boho-braids-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 155 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 175 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 195 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 215 }
        ]
      },
      {
        id: 'boho-braids-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 145 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 165 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 185 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 200 }
        ]
      },
      {
        id: 'boho-braids-l',
        name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 135 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 155 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 165 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 185 }
        ]
      }
    ]
  },

  /* ================= KNOTLESS BRAIDS ================= */
  {
    id: 'braids',
    name: { fr: 'Knotless braid', en: 'Knotless braids' },
    description: { fr: '', en: '' },
    image: 'images/braids.jpg',
    imagePosition: 'center 0%',
    sizes: [
      {
        id: 'knotless-braids-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 135 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 150 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 165 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 180 }
        ]
      },
      {
        id: 'knotless-braids-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 125 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 140 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 155 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 170 }
        ]
      },
      {
        id: 'knotless-braids-l',
        name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 115 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 130 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 145 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 160 }
        ]
      },
    ]
  },

  /* ================= FRENCH CURLS ================= */
  {
    id: 'french-curls',
    name: { fr: 'French curl', en: 'French curls' },
    description: { fr: '', en: '' },
    image: '',
    sizes: [
      {
        id: 'french-curls-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 145 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 160 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 175 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 190 }
        ]
      },
      {
        id: 'french-curls-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 135 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 150 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 165 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 180 }
        ]
      },
      {
        id: 'french-curls-l',
        name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 125 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 140 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 155 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 170 }
        ]
      }
    ]
  },

  /* ================= BOHO FRENCH CURLS ================= */
  {
    id: 'boho-french-curls',
    name: { fr: 'Boho french curl', en: 'Boho french curls' },
    description: { fr: '', en: '' },
    image: 'images/bohoFrenchCurls.jpg',
    sizes: [
      {
        id: 'boho-french-curls-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 145 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 165 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 185 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 205 }
        ]
      },
      {
        id: 'boho-french-curls-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 135 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 155 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 175 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 195 }
        ]
      },
      {
        id: 'boho-french-curls-l',
        name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 125 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 145 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 165 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 185 }
        ]
      },
    ]
  },

  /* ================= BOHO TWISTS ================= */
  {
    id: 'boho-twists',
    name: { fr: 'Boho twist', en: 'Boho twists' },
    description: { fr: '', en: '' },
    image: '',
    sizes: [
      {
        id: 'boho-twists-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 155 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 175 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 185 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 205 }
        ]
      },
            {
        id: 'boho-twists-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 145 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 165 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 175 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 195 }
        ]
      },
      {
        id: 'boho-twists-l',
        name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 130 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 150},
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 160 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 175 }
        ]
      },
    ]
  },

  /* ================= TWISTS ================= */
  {
    id: 'twists',
    name: { fr: 'Twist', en: 'Twists' },
    description: { fr: '', en: '' },
    image: '',
    sizes: [
      {
        id: 'twists-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 130 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 145 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 160 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 175 }
        ]
      },
      {
        id: 'twists-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 120 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 135 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 150 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 165 }
        ]
      },
      {
        id: 'twists-l',
        name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 110 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 125 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 140 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 155 }
        ]
      }
    ]
  },

  /* ================= CORNROWS ================= */
  {
    id: 'cornrows',
    name: { fr: 'Cornrow', en: 'Cornrows' },
    description: { fr: 'Envoie moi l\'inspo', en: 'Dm me the inspo' },
    image: '',
    sizes: [
      {
        id: 'cornrows',
        name: { fr: 'Tresses Collées', en: 'Cornrows' },
        lengths: [
          { label: { fr: 'Standart', en: 'Standard' }, price: 80 }
        ]
      }
    ]
  },

  /* ================= FULANI BRAIDS ================= */
  {
    id: 'fulani-braids',
    name: { fr: 'Fulani braids', en: 'Fulani braids' },
    description: { fr: 'Envoie moi l\'inspo', en: 'Dm me the inspo' },
    image: '',
    sizes: [
      {
        id: 'fulani-braids-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 135 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 145 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 160 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 175 }
        ]
      },
            {
        id: 'fulaniBraids-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 125 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 135 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 150 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 165 }
        ]
      },
      {
        id: 'fulani-braids-l',
        name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 110 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 120 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 140 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 150 }
        ]
      },
    ]
  },

  /* ================= BOHO FULANI BRAIDS ================= */
  {
    id: 'fulani-boho-braids',
    name: { fr: 'Boho fulani braids', en: 'Boho fulani braids' },
    description: { fr: '', en: '' },
    image: '',
    sizes: [
      {
        id: 'fulani-boho-braids-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 155 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 165 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 180 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 190 }
        ]
      },
            {
          id: 'boho-fulani-braids-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 145 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 155 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 170 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 180 }
        ]
      },
      {
        id: 'fulani-boho-braids-l',
        name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 130 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 140 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 160 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 170 }
        ]
      },
    ]
  },

  /* ================= FULANI TWISTS ================= */
  {
    id: 'fulani-twists',
    name: { fr: 'Fulani twist', en: 'Fulani twists' },
    description: { fr: '', en: '' },
    image: '',
    sizes: [
      {
        id: 'fulani-twists-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 135 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 145 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 160 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 175 }
        ]
      },
      {
        id: 'fulani-twists-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 125 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 135 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 150 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 165 }
        ]
      },
      {
        id: 'fulani-twists-l',
       name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 110 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 120 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 140 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 150 }
        ]
      }
    ]
  },

  /* ================= BOHO FULANI TWISTS ================= */
  {
    id: 'fulani-boho-twist',
    name: { fr: 'Boho fulani twist', en: 'Boho fulani twists' },
    description: { fr: '', en: '' },
    image: 'images/fulaniBohoTwist.jpg',
    sizes: [
      {
        id: 'fulani-boho-twist-sm',
        name: { fr: 'Small-medium', en: 'Small-medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 155 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 165 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 180 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 190 }
        ]
      },
      {
        id: 'fulani-boho-twist-m',
        name: { fr: 'Medium', en: 'Medium' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 145 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 155 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 170 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 180 } 
        ]
      },
      {
        id: 'fulani-boho-twist-l',
        name: { fr: 'Large', en: 'Large' },
        lengths: [
          { label: { fr: 'Longueur aux épaules', en: 'Shoulder length' }, price: 130 },
          { label: { fr: 'Longueur milieu du dos', en: 'Mid-back length' }, price: 140 },
          { label: { fr: 'Longueur bas du dos', en: 'Lower-back length' }, price: 160 },
          { label: { fr: 'Longueur aux fesses', en: 'Hip length' }, price: 170 }
        ]
      }
    ]
  },

  /* ================= COIFFURE HOMME ================= */
  {
    id: 'mans-hairstyle',
    name: { fr: 'Coiffure homme', en: 'Men hairstyle' },
    description: { fr: 'Envoie moi l\'inspo', en: 'Dm me the inspo' },
    image: 'images/manHairstyle.jpg',
    sizes: [
      {
        id: 'mans-hairstyle-standard',
        name: { fr: 'Standard', en: 'Standard' },
        lengths: [
          { label: { fr: 'Coiffure homme', en: 'Men hairstyle' }, price: 40 }
        ]
      }
    ]
  }

];

const addons = [
  { id: 'noire', label: { fr: 'Couleur noire (incluse)', en: 'Black color (included)' }, price: 0 },
  { id: 'unique', label: { fr: 'Autre couleur unique', en: 'Other single color' }, price: 20 }
];

const CAL_USERNAME = 'lehishna-leveille-hqt0k0';

let currentService = services[0];
let currentSizeIndex = 0;
let currentLengthIndex = 0;
let selectedAddons = new Set(['noire']);
let showExtraDetails = false;
let modalStep = 'size'; // 'size' ou 'length'

function currentSize() {
  return currentService.sizes[currentSizeIndex];
}

function hasSizes(service) {
  return service.sizes.length > 1;
}

function minPrice(service) {
  return Math.min(...service.sizes.map(sz => sz.lengths[0].price));
}

/* =========================================================
   GESTION DES ONGLETS (TABS)
========================================================= */
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add('active');
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-tab') === tabId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const navMenu = document.getElementById('navMenu');
  if (navMenu && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (history.pushState) {
    history.pushState(null, null, `#${tabId}`);
  } else {
    location.hash = `#${tabId}`;
  }

  if (tabId === 'disponibilites') {
    renderBookingServicePills();
    loadCalEmbed();
    renderServiceDetailsPanel();
  }
}
window.switchTab = switchTab;

function scrollToHomeServices() {
  const el = document.getElementById('homeServicesSection');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
window.scrollToHomeServices = scrollToHomeServices;

/* =========================================================
   1. CARTES DE SERVICES (ACCUEIL & ONGLET SERVICES)
========================================================= */
function renderServices() {
  const cardsHtml = services.map(service => {
    const multi = hasSizes(service);
    const btnText = multi ? t('services.chooseSize') : t('services.voirPrix');
    const hoverText = multi ? t('services.hoverSize') : t('services.hoverText');
    const visual = service.image
      ? `<img src="${service.image}" alt="${service.name[currentLang]}" loading="lazy">`
      : `<div class="service-img-placeholder">
           <span class="placeholder-icon">👑</span>
           <span class="placeholder-text">${t('services.comingSoon')}</span>
        </div>`;

    return `
    <div class="service-card">
      <div class="service-card-img-wrapper" onclick="openServiceModal('${service.id}')" title="${btnText}">
        ${visual}
        <div class="service-img-overlay">
          <span class="service-hover-badge">${hoverText}</span>
        </div>
      </div>

      <h3 class="service-card-title">${service.name[currentLang]}</h3>
      <p class="service-card-desc">${service.description[currentLang]}</p>
      <div class="service-card-divider"></div>
      <p class="service-card-price">${t('services.apartir')} ${minPrice(service)} $</p>

      <button class="btn-card-action" onclick="openServiceModal('${service.id}')">${btnText}</button>
    </div>`;
  }).join('');

  const grid = document.getElementById('servicesGrid');
  if (grid) grid.innerHTML = cardsHtml;

  const homeGrid = document.getElementById('homeServicesGrid');
  if (homeGrid) homeGrid.innerHTML = cardsHtml;
}

/* =========================================================
   2. SÉLECTEUR DE COIFFURE + GROSSEUR DANS DISPONIBILITÉS
========================================================= */
function renderBookingServicePills() {
  const container = document.getElementById('bookingServicePills');
  if (!container) return;

  if (!currentService) {
    currentService = services[0];
  }

  container.innerHTML = services.map(s => `
    <button class="pill-btn ${currentService.id === s.id ? 'active' : ''}" onclick="selectBookingPill('${s.id}')">
      ${s.name[currentLang]}
    </button>
  `).join('');

  // Rangée des grosseurs (visible seulement si la coiffure en a plusieurs)
  const sizeWrap = document.getElementById('bookingSizeWrap');
  const sizeContainer = document.getElementById('bookingSizePills');
  if (sizeWrap && sizeContainer) {
    if (hasSizes(currentService)) {
      sizeContainer.innerHTML = currentService.sizes.map((sz, i) => `
        <button class="pill-btn ${currentSizeIndex === i ? 'active' : ''}" onclick="selectBookingSize(${i})">
          ${sz.name[currentLang]}
        </button>
      `).join('');
      sizeWrap.classList.remove('hidden');
    } else {
      sizeContainer.innerHTML = '';
      sizeWrap.classList.add('hidden');
    }
  }
}

window.selectBookingPill = function (serviceId) {
  currentService = services.find(s => s.id === serviceId);
  currentSizeIndex = 0;
  currentLengthIndex = 0;
  renderBookingServicePills();
  loadCalEmbed();
  renderServiceDetailsPanel();
};

window.selectBookingSize = function (index) {
  currentSizeIndex = index;
  currentLengthIndex = 0;
  renderBookingServicePills();
  loadCalEmbed();
  renderServiceDetailsPanel();
};

/* =========================================================
   3. MODALE 1 : GROSSEUR → LONGUEUR ET PRIX → SUPPLÉMENTS
========================================================= */
function openServiceModal(serviceId) {
  currentService = services.find(s => s.id === serviceId);
  currentSizeIndex = 0;
  currentLengthIndex = 0;
  selectedAddons = new Set(['noire']);
  modalStep = hasSizes(currentService) ? 'size' : 'length';
  renderServiceModal();
  document.getElementById('serviceModal').classList.add('open');
}
window.openServiceModal = openServiceModal;

function renderServiceModal() {
  if (!currentService) return;

  const multi = hasSizes(currentService);
  const sizeSection = document.getElementById('modalSizeSection');
  const lengthSection = document.getElementById('modalLengthSection');
  const nextBtn = document.getElementById('serviceModalNext');
  const backBtn = document.getElementById('modalBackToSize');

  document.getElementById('modalServiceTitle').textContent = currentService.name[currentLang];

  if (modalStep === 'size') {
    // ÉTAPE 1 : choisir la grosseur
    document.getElementById('modalServiceMeta').textContent = currentService.description[currentLang];
    document.getElementById('modalSelectSizeLabel').textContent = t('modal.selectSize');

    document.getElementById('modalSizesList').innerHTML = currentService.sizes.map((sz, i) => `
      <div class="length-option" onclick="selectSize(${i})">
        <span class="length-label">${sz.name[currentLang]}</span>
        <span class="length-price">${t('services.apartir')} ${sz.lengths[0].price} $</span>
      </div>
    `).join('');

    sizeSection.classList.remove('hidden');
    lengthSection.classList.add('hidden');
    nextBtn.classList.add('hidden');
    return;
  }

  // ÉTAPE 2 : longueurs + prix, puis suppléments
  const size = currentSize();
  document.getElementById('modalServiceMeta').textContent = multi
    ? `${size.name[currentLang]} • ${t('services.apartir')} ${size.lengths[0].price} $`
    : `${t('services.apartir')} ${size.lengths[0].price} $`;

  document.getElementById('modalSelectLengthLabel').textContent = t('modal.selectLength');
  document.getElementById('modalSelectAddonsLabel').textContent = t('modal.selectAddons');
  document.getElementById('modalColorsLabel').textContent = t('modal.colors');
  nextBtn.textContent = t('modal.next');
  backBtn.textContent = t('modal.back');

  document.getElementById('modalLengthsList').innerHTML = size.lengths.map((len, i) => `
    <label class="length-option">
      <span class="length-label">
        <input type="radio" name="lengthChoice" ${i === currentLengthIndex ? 'checked' : ''} onchange="selectLength(${i})">
        ${len.label[currentLang]}
      </span>
      <span class="length-price">${len.price} $</span>
    </label>
  `).join('');

  document.getElementById('modalAddonsList').innerHTML = addons.map(addon => `
    <div class="addon-row">
      <span>${addon.label[currentLang]}</span>
      <span style="display:flex; align-items:center;">
        ${addon.price > 0 ? `<span class="addon-price">+${addon.price} $</span>` : '<span class="addon-price">0 $</span>'}
        <button class="btn-addon ${selectedAddons.has(addon.id) ? 'added' : ''}" onclick="toggleAddon('${addon.id}')">
          ${selectedAddons.has(addon.id) ? t('modal.added') : t('modal.add')}
        </button>
      </span>
    </div>
  `).join('');

  backBtn.classList.toggle('hidden', !multi);
  sizeSection.classList.add('hidden');
  lengthSection.classList.remove('hidden');
  nextBtn.classList.remove('hidden');
}

window.selectSize = function (index) {
  currentSizeIndex = index;
  currentLengthIndex = 0;
  modalStep = 'length';
  renderServiceModal();
};

function backToSizeStep() {
  modalStep = 'size';
  renderServiceModal();
}

window.selectLength = function (index) {
  currentLengthIndex = index;
};

window.toggleAddon = function (addonId) {
  if (selectedAddons.has(addonId)) {
    if (addonId === 'noire' && !selectedAddons.has('unique')) return;
    selectedAddons.delete(addonId);
  } else {
    selectedAddons.add(addonId);
  }
  renderServiceModal();
};

function closeServiceModal() {
  document.getElementById('serviceModal').classList.remove('open');
}

function computeTotal() {
  if (!currentService) return 0;
  let total = currentSize().lengths[currentLengthIndex].price;
  selectedAddons.forEach(id => {
    const addon = addons.find(a => a.id === id);
    if (addon) total += addon.price;
  });
  return total;
}

/* =========================================================
   4. MODALE 2 : RÉSUMÉ DU RDV
========================================================= */
function goToSummary() {
  closeServiceModal();
  renderSummaryModal();
  document.getElementById('summaryModal').classList.add('open');
}

function renderSummaryModal() {
  if (!currentService) return;

  const size = currentSize();
  const fullName = hasSizes(currentService)
    ? `${currentService.name[currentLang]} — ${size.name[currentLang]}`
    : currentService.name[currentLang];

  document.getElementById('summaryModalTitle').textContent = t('summary.title');
  document.getElementById('summaryModifyLink').textContent = t('summary.modify');
  document.getElementById('summaryServiceName').textContent = fullName;
  document.getElementById('summaryServiceWith').textContent = `${t('summary.with')} Leh`;
  document.getElementById('summaryServiceLocation').textContent = 'Terrebonne';
  document.getElementById('summaryServiceDuration').textContent = size.lengths[currentLengthIndex].label[currentLang];
  document.getElementById('summaryServicePrice').textContent = `${t('details.total')} : ${computeTotal()} $`;
  document.getElementById('summaryAddServiceBtn').textContent = t('summary.addService');
  document.getElementById('summaryProgrammerBtn').textContent = t('summary.programmer');
}

function closeSummaryModal() {
  document.getElementById('summaryModal').classList.remove('open');
}

function backToServiceModal() {
  closeSummaryModal();
  modalStep = 'length';
  renderServiceModal();
  document.getElementById('serviceModal').classList.add('open');
}

function goToBooking() {
  closeSummaryModal();
  switchTab('disponibilites');
  renderBookingServicePills();
  renderServiceDetailsPanel();
  loadCalEmbed();
}

/* =========================================================
   5. CHARGEMENT DIRECT DU CALENDRIER CAL.COM
   Un lien Cal.com par coiffure (slug = id de la coiffure).
   Pour un lien différent par grosseur, ajoutez  cal: 'mon-slug'
   dans l'objet de la grosseur.
========================================================= */
function loadCalEmbed() {
  const container = document.getElementById('calEmbedContainer');
  if (!container) return;

  if (!currentService) {
    currentService = services[0];
  }

  container.innerHTML = ''; // Réinitialisation propre

  const size = currentSize();
  const len = size.lengths[currentLengthIndex];
  const addonLabels = Array.from(selectedAddons)
    .map(id => addons.find(a => a.id === id))
    .filter(Boolean)
    .map(a => a.label[currentLang]);

  const notes = `Service: ${currentService.name[currentLang]} (${size.name[currentLang]}) — ${len.label[currentLang]} — Suppléments: ${addonLabels.join(', ') || 'aucun'} — Total estimé: ${computeTotal()} $`;

  if (window.Cal) {
    Cal('inline', {
      elementOrSelector: '#calEmbedContainer',
      calLink: `${CAL_USERNAME}/${size.cal || currentService.cal || currentService.id}`,
      config: {
        layout: 'week_view',
        notes: notes
      }
    });

    Cal('ui', {
      styles: {
        branding: { brandColor: '#d4a338' } // Doré de la couronne
      },
      hideEventTypeDetails: false,
      layout: 'week_view'
    });
  }
}

/* =========================================================
   6. PANNEAU DE DÉTAILS
========================================================= */
function renderServiceDetailsPanel() {
  const box = document.getElementById('serviceDetailsBox');
  if (!box) return;

  if (!currentService) {
    currentService = services[0];
  }

  const size = currentSize();
  const len = size.lengths[currentLengthIndex];
  const addonNames = Array.from(selectedAddons)
    .map(id => addons.find(a => a.id === id))
    .filter(Boolean)
    .map(a => a.label[currentLang])
    .join(', ');

  box.innerHTML = `
    <h4>${t('details.title')}</h4>
    <div class="service-details-row">
      <span>${currentService.name[currentLang]}</span>
      <span class="service-details-modify" id="modifyServiceLink">${t('details.modify')}</span>
    </div>
    <div class="service-details-toggle" id="toggleDetailsLink">${showExtraDetails ? t('details.showLess') : t('details.showMore')}</div>

    ${showExtraDetails ? `
      <div class="service-details-extra">
        <div><strong>${t('details.size')} :</strong> ${size.name[currentLang]}</div>
        <div><strong>${t('details.length')} :</strong> ${len.label[currentLang]}</div>
        <div><strong>${t('details.addons')} :</strong> ${addonNames || t('details.noAddons')}</div>
        <div style="margin-top:8px;" class="service-details-total-highlight">${t('details.total')} : ${computeTotal()} $</div>
      </div>
    ` : `
      <div class="service-details-total-highlight" style="margin-bottom:12px;">${t('details.total')} : ${computeTotal()} $</div>
    `}
  `;

  document.getElementById('modifyServiceLink').addEventListener('click', () => {
    modalStep = hasSizes(currentService) ? 'size' : 'length';
    renderServiceModal();
    document.getElementById('serviceModal').classList.add('open');
  });

  document.getElementById('toggleDetailsLink').addEventListener('click', () => {
    showExtraDetails = !showExtraDetails;
    renderServiceDetailsPanel();
  });
}

/* =========================================================
   INITIALISATION GLOBALE
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  applyStaticTranslations();
  renderServices();
  renderBookingServicePills();
  renderServiceDetailsPanel();

  // Écouteurs sur les onglets
  document.querySelectorAll('[data-tab]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = elem.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Détection de l'ancre URL au chargement
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && ['accueil', 'disponibilites', 'services', 'politiques', 'plus'].includes(initialHash)) {
    switchTab(initialHash);
  } else {
    switchTab('accueil');
  }

  // Menu mobile
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Modales
  document.getElementById('serviceModalNext').addEventListener('click', goToSummary);
  document.getElementById('serviceModalClose').addEventListener('click', closeServiceModal);
  document.getElementById('modalBackToSize').addEventListener('click', backToSizeStep);
  document.getElementById('summaryModalClose').addEventListener('click', closeSummaryModal);
  document.getElementById('summaryModifyLink').addEventListener('click', backToServiceModal);
  document.getElementById('summaryProgrammerBtn').addEventListener('click', goToBooking);
  document.getElementById('summaryAddServiceBtn').addEventListener('click', () => {
    closeSummaryModal();
    switchTab('services');
  });

  window.addEventListener('click', (e) => {
    const serviceModal = document.getElementById('serviceModal');
    const summaryModal = document.getElementById('summaryModal');
    if (e.target === serviceModal) closeServiceModal();
    if (e.target === summaryModal) closeSummaryModal();
  });

  // Formulaires
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.btn-send-message');
      const originalBtnText = submitBtn.textContent;
      
      // Indiquer à l'utilisateur que le message est en cours d'envoi
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...';

      const formData = {
        nom: contactForm.elements['nom'].value,
        email: contactForm.elements['email'].value,
        telephone: contactForm.elements['telephone'].value || 'Non renseigné',
        message: contactForm.elements['message'].value,
        _subject: `👑 Nouveau message de ${contactForm.elements['nom'].value} (Crowned By Leh)`
      };

      try {
        const response = await fetch('https://formsubmit.co/ajax/crownedbyleh@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          alert(t('contact.merci'));
          contactForm.reset();
        } else {
          alert(currentLang === 'fr' 
            ? "Une erreur est survenue lors de l'envoi. Veuillez réessayer." 
            : "An error occurred while sending. Please try again.");
        }
      } catch (err) {
        alert(currentLang === 'fr' 
          ? "Erreur de connexion. Veuillez réessayer." 
          : "Connection error. Please try again.");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(t('footer.merciNewsletter'));
      e.target.reset();
    });
  }
});