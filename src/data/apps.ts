import type { AppItem } from '../types'

// ============================================================================
//  STIJN OS — INHOUD (SMP-editie voor het Criteriumgericht Interview)
//  Dit is de ENIGE plek waar je teksten hoeft aan te passen.
//  Elke `AppItem` is één programma/venster op het bureaublad.
//
//  Het CGI beoordeelt Lerend Vermogen, granulair opgesplitst in 4 deelaspecten:
//   reflectie · leerproces (LV 1.3)   en   ethiek · mediaprof (LV 4.3).
//
//  Bewijs/screenshots toevoegen?
//   1. Zet je bestand in  /public/bewijs/   (bv. keynote.jpg of verslag.pdf)
//   2. Foto  -> image: '/bewijs/foto.png'   (polaroid, klikbaar om te vergroten)
//      Document/link -> href: '/bewijs/verslag.pdf'  of  href: 'https://...'
//   Het base-path wordt automatisch toegevoegd.
// ============================================================================

export const KERNZIN =
  'Lerend vermogen is voor mij geen toets aan het eind, maar mijn manier van werken: bouwen, reflecteren, mijn aannames toetsen en ethisch durven kiezen.'

export const KERNONTWIKKELING =
  'Ik ben gegroeid van iemand die techniek vooral op gevoel aan elkaar knoopte, naar iemand die bewust onderzoekt hóe hij leert, zijn keuzes onderbouwt en kritisch nadenkt over wat slimme technologie betekent voor de mensen eromheen.'

export const APPS: AppItem[] = [
  // --------------------------------------------------------------------------
  {
    id: 'readme',
    fileName: 'LEESMIJ.txt',
    title: 'Start hier — welkom in Stijn OS',
    teaser: 'Lees mij eerst',
    icon: 'readme',
    accent: true,
    criteria: [],
    intro:
      'Welkom in Stijn OS: een klein besturingssysteem dat ik zelf heb gebouwd als vorm én bewijs van mijn lerend vermogen, voor het Criteriumgericht Interview van de Ad Smart Media Production.',
    detail: [
      'Mijn leren speelt zich af in mijn ondernemerschap: als Head of Technology bij Kaires (AI-muziek voor retail) én in Back to Being, waar ik met een team een AI-app voor mentale gezondheid bouw voor Stichting MIND.',
      'Elk programma op dit bureaublad opent een onderdeel van mijn leren: hóe ik leer, kritische reflectie op wie ik ben, mijn ontwikkelplan, de ethiek van AI-muziek, mijn rol als mediaprofessional en mijn volgende leerdoelen.',
      'Rechtsboven zie je de vier deelaspecten van Lerend Vermogen die het CGI beoordeelt: kritische reflectie en inzicht in mijn leerproces (LV 1.3), en ethische impact en ethisch handelen als mediaprofessional (LV 4.3). Elk venster laat zien welk aspect het afdekt.',
      'Het feit dat deze site bestaat, is zelf ook bewijs van lerend vermogen. Ik heb hem zelf gebouwd — door te doen, te testen en te reflecteren op wat wel en niet werkte.',
    ],
    reflectie: [
      'Ik koos bewust voor een besturingssysteem als vorm, omdat mijn leren niet uit één rechte lijn bestaat. Ik leer op verschillende lagen tegelijk: technisch bouwen, kritisch reflecteren op mezelf, ethisch afwegen en mij verhouden tot het vak.',
    ],
    bewijs: [],
    vervolgstap: KERNONTWIKKELING,
  },

  // --------------------------------------------------------------------------
  {
    id: 'bouwlog',
    fileName: 'Bouwlog.exe',
    title: 'Hóe ik leer: door te bouwen',
    teaser: 'Inzicht in mijn leerproces',
    icon: 'cto',
    criteria: ['leerproces'],
    intro:
      'Als Head of Technology bouwde ik bij Kaires de eerste tech-stack: de weighted matrix, een begin van het Nederlandse muziekgeneratiemodel en het platform. Mijn belangrijkste inzicht over leren: ik leer door te doen, en daarna te reflecteren op wat ik deed.',
    detail: [
      'Mijn technische leerproces begon zonder formele basis. Binnen mijn opleiding kreeg ik nauwelijks software engineering, dus ik zocht het grotendeels zelf uit: websites bouwen, applicaties opzetten, automatiseringen maken en systemen aan elkaar koppelen. Vrijwel alles deed ik toen voor het eerst op dit niveau — en juist dat zelf-uitzoeken leerde mij hoe ik leer.',
      'Inmiddels zie ik scherp waar mijn volgende leerpunt zit: ik werk nog te veel op het niveau van bestaande tools aan elkaar knopen. Ik wil een laag dieper — zelf modellen finetunen, de matrix onderbouwd opbouwen in plaats van op gevoel, en mijn technische keuzes kunnen beargumenteren.',
      'Daarom maak ik mijn leerproces expliciet: wekelijkse vaste blokken voor modelwerk (uit mijn urenbegroting), een bouwlog met korte reflectie (wat werkt, wat niet) en peer review op mijn technische keuzes door mijn mediaprofessional.',
      'Mijn sterke punten daarbij zijn snel schakelen, verbanden leggen en ondernemend zijn. Mijn verbeterpunt is precies de kern van dit doel: écht onder de motorkap begrijpen wat ik bouw — niet alleen dát het werkt.',
    ],
    reflectie: [
      'Ik heb geleerd dat "het werkt" niet hetzelfde is als "ik begrijp waarom". Mijn leerproces wordt sterker zodra ik mijn keuzes opschrijf en uitleg, in plaats van ze alleen te voelen.',
      'Door een bouwlog bij te houden zie ik mijn eigen patronen: waar ik vooruitspring en waar ik het waaróm oversla. Dat inzicht in hoe ik leer is precies wat LV 1.3 van mij vraagt.',
    ],
    quote: 'Ik wil niet alleen dat het werkt — ik wil kunnen uitleggen waaróm.',
    bewijs: [],
    vervolgstap:
      'Mijn technische keuzes structureel onderbouwen en in mijn bouwlog blijven reflecteren, zodat mijn leren zichtbaar wordt.',
  },

  // --------------------------------------------------------------------------
  // Let op: enkele partners zijn nog in gesprek (Wispr Flow, Google) — voorzichtig
  // formuleren en checken vóór publicatie van de openbare site.
  {
    id: 'being',
    fileName: 'BackToBeing.app',
    title: 'Back to Being — kantoor in een rugzak',
    teaser: 'Leren door te bouwen, op de Camino',
    icon: 'being',
    criteria: ['reflectie', 'leerproces', 'ethiek'],
    intro:
      'Back to Being (backtobeing.tech) is de venture die ik met z’n drieën bouw: een AI-gestuurde app voor mentale gezondheid voor Stichting MIND. We zijn er volop mee bezig, en dit traject is voor mij een enorme versneller van mijn lerend vermogen.',
    detail: [
      'Het probleem dat we aanpakken: jongeren ervaren veel prestatiedruk, faalangst en FOMO. Mind Young had daar een e-maillijst voor — vijf weken lang wekelijks opdrachten om even uit je hoofd te stappen en in het moment te komen — maar dat resoneert nauwelijks bij jongeren; ze schrijven zich er simpelweg niet voor in.',
      'Onze oplossing is een AI-gestuurde app die diezelfde opdrachten interactief maakt: quotes, opdrachten die je op het platform uitvoert en boeksuggesties. Dat sluit veel beter aan bij de doelgroep dan een e-mailblast.',
      'De manier waaróp we het bouwen is zelf een leerexperiment. Van 24 tot en met 31 augustus 2026 lopen we met z’n drieën de Camino: we vliegen naar Porto, reizen door naar Tui en lopen vandaar zo’n 120 km naar Santiago de Compostela — terwijl we onderweg de app bouwen. Ons kantoor zit dan letterlijk in onze rugzak: laptops mee, smartglasses om onze schermen te zien, Starlink voor bereik en AI-agents die we via onze AirPods aanspreken. Techleap is aangehaakt, remote is onze hoofdsponsor, we zijn in gesprek met Wispr Flow en proberen ook Google te betrekken. Binnenkort verschijnt er een interview over de actie in Quote.',
    ],
    reflectie: [
      'Back to Being verandert nu al hóe ik leer. Ik merk dat ik het snelst leer in het diepe: door met een team echt te bouwen onder ongemakkelijke omstandigheden, in plaats van eerst alles veilig uit te denken. Straks op de Camino — lopend, met beperkte tijd en bereik — zal ik keuzes moeten maken en vertrouwen op reflectie-onderweg in plaats van op zekerheid vooraf.',
      'Tegelijk zit hier een ethische spanning die me scherp houdt: we zetten maximale slimme technologie in (smartglasses, Starlink, AI-agents) om juist een app te bouwen die jongeren helpt om uit hun hoofd te komen en even mínder met techniek bezig te zijn. Dat dwingt me na te denken over de ethische impact van AI op kwetsbare jongeren — hoe voorkom je dat een tool die rust belooft zelf weer een bron van druk of afhankelijkheid wordt?',
      'Juist die paradox — terug naar “being” met de nieuwste technologie in de hand — maakt Back to Being zo waardevol voor mijn lerend vermogen: het combineert leren door te doen met kritisch nadenken over wat die technologie met mensen doet.',
    ],
    quote: 'We gebruikten alle techniek die er is, om jongeren te helpen er juist even zónder te kunnen.',
    bewijs: [{ label: 'Back to Being (backtobeing.tech)', href: 'https://backtobeing.tech' }],
    vervolgstap:
      'De ethische lat hooghouden: een AI die mentale rust belooft, mag voor kwetsbare jongeren nooit nieuwe druk of afhankelijkheid creëren.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'spiegel',
    fileName: 'Spiegel.sys',
    title: 'Verbinden én richting geven',
    teaser: 'Kritische reflectie op mijn gedrag',
    icon: 'spiegel',
    criteria: ['reflectie'],
    intro:
      'Een rode draad in mijn leerproces is hoe ik mij tot anderen verhoud. Mijn kracht is dat ik goed kan luisteren, verbanden zie, rust bewaar en mensen verbind. Mijn valkuil is dat ik in klantcontacten te snel meega en mijn eigen visie laat liggen.',
    detail: [
      'Door mijn werk aan Kaires leerde ik dat verbinden alleen niet genoeg is. Ondernemen vraagt ook richting geven: als Head of Technology moest ik technische keuzes maken én verantwoorden, en in de keynote moest ik staan voor het verhaal in plaats van mee te bewegen. Aardig en meedenkend zijn is voor mij makkelijker dan stelling nemen — dat is precies waar mijn groei zit.',
      'Voor dit blok maakte ik die groei concreet. In plaats van een vaag "assertiever worden"-doel koos ik twee echte momenten: de keynote op het RAAIT-event (samen met Max, voor 300 retailers in de zaal) en bewust netwerken op datzelfde event — niet afwachten, maar mensen benaderen met een doel vooraf.',
      'Na afloop reflecteer ik telkens op hetzelfde: waar heb ik meegegeven, en waar heb ik richting gegeven?',
    ],
    reflectie: [
      'Mijn groei zit niet in minder verbindend worden, maar in verbinding combineren met stevigheid. Kritisch reflecteren betekent voor mij ook durven zien waar mijn kracht — meebewegen — omslaat in een valkuil.',
      'De tweewekelijkse check-ins met mijn coach en met Max gaan daarom bewust over gedrag, niet alleen over output. Dat is mijn spiegel.',
    ],
    quote: 'Verbinden is mijn kracht. Richting geven is mijn groei.',
    bewijs: [],
    vervolgstap:
      'Bij elke pitch en netwerksituatie bewust richting geven en achteraf reflecteren op mijn gedrag, niet alleen op het resultaat.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'pop',
    fileName: 'POP.doc',
    title: 'Mijn Persoonlijk Ontwikkelplan',
    teaser: 'Hoe ik mijn leren stuur',
    icon: 'pop',
    criteria: ['leerproces', 'reflectie'],
    intro:
      'Mijn POP voor het afstudeerblok van de Ad SMP: 420 uur, drie persoonlijke doelen met acties, benodigdheden en planning. Het laat zien dat ik mijn leerproces bewust stuur in plaats van het te laten gebeuren.',
    detail: [
      'Doel 1 — Technische verdieping als Head of Technology: een laag dieper dan tools aan elkaar knopen. Modellen finetunen, de weighted matrix onderbouwd opbouwen en mijn keuzes kunnen beargumenteren.',
      'Doel 2 — Ethische en juridische positionering van AI-muziek: een gefundeerd eigen standpunt, geen marketingverhaal (zie Ethiek.exe).',
      'Doel 3 — Van subassertief naar stevig staan: de keynote en het netwerken op het RAAIT-event als concrete momenten (zie Spiegel.sys).',
      'Planning: week 1–2 onderzoeksopzet en deskresearch ethiek · week 3–6 matrix uitbouwen, eerste pilot live, model finetunen · week 7–9 tweede pilot live en data verzamelen (verblijftijd, conversie) · week 10 RAAIT-keynote · week 11–13 ethische reflectie afronden, eindproduct en eindpresentatie. Wekelijks 2u reflectie/logboek plus check-ins met coach en Max.',
    ],
    reflectie: [
      'Mijn POP is mijn stuurinstrument. Ik merk dat ik zonder plan afdrijf naar wat ik leuk vind (bouwen). Door doelen, acties én planning te benoemen maak ik mijn leren stuurbaar en meetbaar — bijvoorbeeld met een baseline aan data vóór de uitrol.',
      'Reflecteren op het plan zelf is ook leerzaam: mijn doelen verschoven bewust van de minor (salescalls) naar twee scherpe momenten op RAAIT. Die verschuiving is op zichzelf bewijs dat ik mijn leerproces stuur.',
    ],
    bewijs: [],
    vervolgstap:
      'Mijn POP gebruiken als levend document: doelen toetsen aan de pilotdata en bijstellen waar de praktijk daarom vraagt.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'ethiek',
    fileName: 'Ethiek.exe',
    title: 'De ethiek van AI-muziek',
    teaser: 'Ethische impact van slimme technologie',
    icon: 'ethiek',
    criteria: ['ethiek'],
    intro:
      'Kaires maakt AI-muziek voor retail. Juridisch is uitgezocht dat we Buma/Sena omzeilen omdat we geen bestaande rechten gebruiken. Maar de ethische laag had ik nog niet onderbouwd — en dat is precies wat LV 4.3 van mij vraagt.',
    detail: [
      'De kernvraag: wat betekent generatieve AI-muziek voor artiesten, en hoe transparant zijn we richting de retailer en de eindklant?',
      'Mijn aanpak: deskresearch naar bestaande ethische frameworks voor generatieve AI, een expert-interview met iemand uit de muziekindustrie over AI en artiestenrecht, en mijn positie formuleren in het adviesrapport.',
      'Ik wil geen marketingverhaal, maar een gefundeerd standpunt dat ik ook kan verdedigen als het ongemakkelijk is.',
    ],
    reflectie: [
      'Slimme technologie is nooit neutraal. AI-muziek kan werk van artiesten verdringen óf nieuwe ruimte maken — wat "eerlijk" is, hangt af van transparantie en keuzevrijheid.',
      'Kritisch reflecteren betekent voor mij ook dat ik de ethische vraag niet wegpoets omdat het commercieel goed uitkomt dat we Buma/Sena omzeilen. Juist op dat punt moet ik scherp blijven.',
    ],
    quote: 'Dat iets juridisch mag, betekent niet dat het ethisch klopt.',
    bewijs: [],
    vervolgstap:
      'Mijn ethische standpunt over AI-muziek onderbouwen in het adviesrapport en toetsen aan mijn expert-interview.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'mediaprof',
    fileName: 'Mediaprofessional.app',
    title: 'Mijn rol als mediaprofessional',
    teaser: 'Ethisch handelen in de praktijk',
    icon: 'keynote',
    criteria: ['mediaprof', 'ethiek'],
    intro:
      'Lerend vermogen gaat ook over hoe ik mij gedraag als mediaprofessional: eerlijk, transparant en verantwoordelijk — ook als dat lastiger is dan het mooie verhaal.',
    detail: [
      'Ik werk samen met mediaprofessional Tijs Nieuwboer als tech-sparringpartner en vraag bewust peer review op mijn keuzes. Leren van iemand uit het vak hoort voor mij bij professioneel handelen.',
      'Op het RAAIT-event presenteer ik Kaires voor 300 retailers. Daar handel ik ethisch door eerlijk te zijn over wat onze technologie wél en níet doet, in plaats van te overclaimen.',
      'Aan het eind van het blok voer ik een eindevaluatiegesprek met mijn externe mediaprofessional. Daarvan lever ik een video-opname (maximaal 3 minuten) in als onderdeel van mijn CGI.',
    ],
    reflectie: [
      'Ethisch handelen als mediaprofessional betekent voor mij: mijn werk kunnen verantwoorden tegenover artiesten, klanten én mezelf. Transparantie is geen sluitstuk, maar onderdeel van het product.',
      'Mijn valkuil — meegaan en aardig willen zijn — kan hier juist een ethische kracht worden: ik wil niet pushen met loze beloftes, maar bouwen aan vertrouwen.',
    ],
    quote: 'Een mediaprofessional verkoopt geen beloftes, maar staat achter wat hij maakt.',
    bewijs: [],
    vervolgstap:
      'Mijn eindevaluatie met de mediaprofessional benutten als spiegel op mijn professionele en ethische gedrag.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'portfolio',
    fileName: 'Portfolio.dir',
    title: 'Portfolio & randvoorwaarden',
    teaser: 'Mijn bewijslast voor het CGI',
    icon: 'boekhouding',
    criteria: ['leerproces'],
    intro:
      'Het CGI is een officieel examenonderdeel. Om mee te mogen doen moet mijn portfolio op orde zijn — en dat portfolio is zelf bewijs van mijn lerend vermogen.',
    detail: [
      '8 STARRT-formulieren waarin ik concrete situaties uit het blok uitwerk en erop reflecteer.',
      'Minimaal 16 Portflow-entries: kleine, doorlopende reflecties op mijn proces.',
      'Mijn CGI-presentatie plus de video-opname (max 3 min) van het eindevaluatiegesprek met mijn mediaprofessional, ingeleverd aan het eind van week 9.',
    ],
    reflectie: [
      'Het portfolio dwingt me om niet alleen te dóen, maar telkens te benoemen wat ik leerde. Die herhaalde reflectie (STARRT en Portflow) maakt mijn leerproces zichtbaar — voor de beoordelaar én voor mezelf.',
    ],
    bewijs: [],
    vervolgstap:
      'Mijn STARRT- en Portflow-reflecties gebruiken als rode draad in het CGI-gesprek.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'update',
    fileName: 'Update v2.0',
    title: 'Stijn OS v2.0 — volgende leerdoelen',
    teaser: 'Hoe ik verder leer na blok 8',
    icon: 'update',
    criteria: ['leerproces', 'reflectie'],
    intro:
      'Een besturingssysteem is nooit af. Deze updates zijn mijn volgende leerdoelen — voortgekomen uit wat ik dit afstudeerblok echt tegenkwam.',
    detail: [
      'Technisch een laag dieper: zelf modellen finetunen en mijn keuzes blijven onderbouwen in plaats van op gevoel.',
      'Mijn ethische standpunt over AI en artiesten blijven aanscherpen, ook als de markt anders duwt.',
      'Stevig blijven staan: in pitches en netwerken stelling nemen, niet alleen meebewegen.',
      'Reflectie als gewoonte houden: bouwlog en Portflow ook ná het blok.',
      'Leren zichtbaar maken: keuzes documenteren zodat anderen — en ikzelf later — ze kunnen volgen.',
    ],
    reflectie: [
      'Deze leerdoelen komen niet uit een formulier, maar uit echte momenten dit blok: bouwen, reflecteren, ethisch kiezen en voor 300 mensen gaan staan.',
    ],
    quote: 'Mijn volgende stap is niet harder werken, maar bewuster leren.',
    bewijs: [],
    vervolgstap:
      'Verbinding — mijn kracht — combineren met stevigheid, onderbouwing en ethische scherpte.',
  },
]
