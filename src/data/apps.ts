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
      'Mijn leren speelt zich af in mijn ondernemerschap: als Head of Technology bij Kaires (AI-muziek voor retail), als mede-organisator van de Megathon — de grootste hackathon van Europa — en met Back to Being, de venture waarmee ik ná mijn afstuderen verderga.',
      'Elk programma op dit bureaublad opent een onderdeel van mijn leren: hóe ik leer door te bouwen, wat ik al heb neergezet (de Megathon en een pitch bij Google), de ethiek van slimme technologie, mijn rol als mediaprofessional, mijn toekomst met Back to Being en mijn volgende leerdoelen.',
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
      'Het zichtbaarste bewijs van "leren door te doen" is mijn webdesign — en vooral hóe snel ik een site inmiddels live krijg. Mijn baseline begon met een eerste "vibecode"-website (zie de video hieronder), maar ik had geen idee hoe ik die online kreeg. Daarom bouwde ik smartmediaproduction.nl noodgedwongen in Squarespace — iets wat ik nooit meer doe.',
      'Daarna ging het hard. Kaires.nl kostte nog vier weken voordat het live stond; backtobeing.tech had ik binnen één week online. Die versnelling — van "geen idee hoe ik iets live krijg" naar "binnen een week zelf online" — ís mijn leerproces in webdesign. Diezelfde groei zie je terug in dit OS, dat ik ook helemaal zelf heb gebouwd.',
      'Inmiddels zie ik scherp waar mijn volgende leerpunt zit: ik werk nog te veel op het niveau van bestaande tools aan elkaar knopen. Ik wil een laag dieper — zelf modellen finetunen, de matrix onderbouwd opbouwen in plaats van op gevoel, en mijn technische keuzes kunnen beargumenteren.',
      'Daarom maak ik mijn leerproces expliciet: wekelijkse vaste blokken voor modelwerk (uit mijn urenbegroting), een bouwlog met korte reflectie (wat werkt, wat niet) en peer review op mijn technische keuzes door mijn mediaprofessional.',
      'Mijn sterke punten daarbij zijn snel schakelen, verbanden leggen en ondernemend zijn. Mijn verbeterpunt is precies de kern van dit doel: écht onder de motorkap begrijpen wat ik bouw — niet alleen dát het werkt.',
    ],
    reflectie: [
      'Ik heb geleerd dat "het werkt" niet hetzelfde is als "ik begrijp waarom". Mijn leerproces wordt sterker zodra ik mijn keuzes opschrijf en uitleg, in plaats van ze alleen te voelen.',
      'Door een bouwlog bij te houden zie ik mijn eigen patronen: waar ik vooruitspring en waar ik het waaróm oversla. Dat inzicht in hoe ik leer is precies wat LV 1.3 van mij vraagt.',
    ],
    quote: 'Ik wil niet alleen dat het werkt — ik wil kunnen uitleggen waaróm.',
    video: {
      src: '/bewijs/vibecode-iteratie-blok6.mp4',
      label: 'Mijn eerste vibecode-website (iteratie blok 6) — het beginpunt van mijn groei in een half jaar',
    },
    bewijs: [
      { label: 'Baseline (half jaar geleden, Squarespace): smartmediaproduction.nl', href: 'https://www.smartmediaproduction.nl' },
      { label: 'Na ~4 weken live — Kaires: kaires.nl', href: 'https://kaires.nl' },
      { label: 'Binnen 1 week live — Back to Being: backtobeing.tech', href: 'https://backtobeing.tech' },
    ],
    vervolgstap:
      'Mijn technische keuzes structureel onderbouwen en in mijn bouwlog blijven reflecteren, zodat mijn leren zichtbaar wordt.',
  },

  // --------------------------------------------------------------------------
  // "Al geweest" — afgeronde prestaties buiten de techniek om: een groot event
  // mee-organiseren en pitchen bij Google. Leren door te doen + netwerk (LV 1.3).
  {
    id: 'megathon',
    fileName: 'Megathon.exe',
    title: 'Megathon — de grootste hackathon van Europa mee-organiseren',
    teaser: 'Leren door te doen: organiseren & netwerk',
    icon: 'netwerk',
    criteria: ['leerproces', 'reflectie'],
    intro:
      'Naast bouwen leer ik minstens zo veel door te ondernemen en mensen te ontmoeten. De Megathon — de grootste hackathon van Europa — heb ik mede-georganiseerd vanuit TAG, het kantoor waar ik werk. Een evenement met 500+ builders van begin tot eind mee regelen was misschien wel mijn leerzaamste "leren door te doen" van dit blok.',
    detail: [
      'Een evenement van deze schaal organiseren leer je niet uit een boek: partijen aan elkaar knopen, strak plannen en op het moment zelf schakelen als er iets misgaat. Met 500+ builders in één ruimte moet alles kloppen — en juist door het te dóen zag ik hoe ik onder druk leer, samenwerk en verantwoordelijkheid neem voor iets dat groter is dan ikzelf.',
      'De Megathon haalde zelfs Quote (zie het bewijs hieronder) — een bevestiging van de schaal en het effect. Minstens zo waardevol waren de connecties die ik er opdeed: mijn netwerk groeide hier sneller dan via welke les dan ook.',
      'In diezelfde periode mochten we Kaires pitchen bij Google (zie de video). Ook zo’n moment ontstaat niet vanzelf — het komt voort uit zichtbaar zijn, meebouwen en de juiste mensen ontmoeten.',
    ],
    reflectie: [
      'Ik leer het scherpst als ik verantwoordelijkheid pak voor iets zonder handleiding. Bij de Megathon moest ik schakelen, op mijn team vertrouwen en achteraf benoemen wat misging en wat ik eruit haalde — precies het soort reflectie dat LV 1.3 van mij vraagt.',
      'Netwerk is voor mij geen visitekaartjes verzamelen, maar mensen echt leren kennen door samen iets te maken. Dat zichtbaar meebouwen kansen oplevert — tot een pitch bij Google aan toe — heb ik dit blok aan den lijve ondervonden.',
    ],
    quote: 'Je netwerk bouw je niet op met visitekaartjes, maar door samen iets te maken.',
    video: {
      src: '/bewijs/kaires-google-pitch.mp4',
      label: 'Wij pitchen Kaires (AI-muziek voor retail) bij Google',
    },
    bewijs: [
      { label: 'De Megathon in Quote', image: '/bewijs/megathon-quote.jpeg' },
      { label: 'Megathon — de grootste hackathon van Europa (megathon.xyz)', href: 'https://megathon.xyz' },
      { label: 'Kaires — kaires.nl', href: 'https://kaires.nl' },
    ],
    vervolgstap:
      'Blijven meebouwen aan events en community: zichtbaar zijn, mensen ontmoeten en de kansen die daaruit ontstaan benutten.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'ethiek',
    fileName: 'Ethiek.exe',
    title: 'Ethiek: van AI-muziek tot privacy',
    teaser: 'Ethische impact van slimme technologie',
    icon: 'ethiek',
    criteria: ['ethiek'],
    intro:
      'Ethiek is voor mij geen los hoofdstuk, maar een rode draad door alles wat ik bouw: AI-muziek bij Kaires, een app voor kwetsbare jongeren bij Back to Being, en hoe we mensen meten in de winkel. LV 4.3 vraagt me die afwegingen expliciet te maken.',
    detail: [
      'AI-muziek (Kaires): ik wilde zwart-op-wit weten of het legaal is om AI-gegenereerde muziek in winkels af te spelen. Daarom heb ik juridisch advies opgevraagd bij Het Juridisch Spreekuur (HvA) én het laten dubbelchecken door een advocaat van Simmons & Simmons. Beiden bevestigen: bij volledig AI-gegenereerde, instrumentale muziek ontstaan er geen verplichtingen richting Buma/Stemra of Sena — er is simpelweg geen menselijke rechthebbende. Maar daarmee is de ethische vraag níet beantwoord: wat betekent generatieve AI-muziek voor artiesten, en hoe transparant zijn we richting retailer en eindklant? Ik wil daar een gefundeerd standpunt over, geen marketingverhaal.',
      'Kwetsbare jongeren (Back to Being): we bouwen een AI-app die rust belooft tegen prestatiedruk en faalangst. Juist dán moet je ethisch scherp zijn — een tool die rust belooft mag zelf nooit een nieuwe bron van druk of afhankelijkheid worden.',
      'Privacy in de winkel (RAAIT-keynote): om bezoekers te tellen gebruiken we hitte-sensoren in plaats van camera’s, zoals veel anderen wél doen. Je ziet alleen een 0 of een 1 — er is wel of geen persoon — maar die persoon is niet te identificeren. Meten zonder mensen herkenbaar vast te leggen: privacy by design.',
    ],
    kernpunten: [
      'AI-muziek (Kaires): juridisch bevestigd (advies Juridisch Spreekuur + Simmons & Simmons) — maar juridisch mag ≠ ethisch klopt.',
      'Kwetsbare jongeren (Back to Being): rust beloven mag nooit nieuwe druk worden.',
      'Privacy in de winkel: tellen met hitte-sensoren, niet met camera’s — niet te identificeren.',
    ],
    reflectie: [
      'Slimme technologie is nooit neutraal. Of het nu om muziek, mentale gezondheid of meten in de winkel gaat: de ethische keuze zit in transparantie én in wat je bewust níet vastlegt.',
      'Kritisch reflecteren betekent voor mij ook dat ik een ethische vraag niet wegpoets omdat het commercieel goed uitkomt — bijvoorbeeld dat we Buma/Sena omzeilen. Juist op die punten moet ik scherp blijven.',
    ],
    quote: 'Dat iets juridisch mag, betekent niet dat het ethisch klopt.',
    bewijs: [
      {
        label:
          'Juridisch advies: AI-muziek in winkels zonder Buma/Stemra- of Sena-plicht (Het Juridisch Spreekuur, HvA)',
        href: '/bewijs/adviesbrief-ai-muziek-juridisch-spreekuur.pdf',
      },
      {
        label: 'Anonieme hitte-sensor: telt mensen als 0 of 1, zonder ze te identificeren',
        image: '/bewijs/anonieme-hittesensor.png',
      },
    ],
    vervolgstap:
      'Mijn ethische standpunt — over artiesten, kwetsbare jongeren én privacy — onderbouwen en blijven toetsen, ook als de markt anders duwt.',
  },

  // --------------------------------------------------------------------------
  // De video-opname van het eindevaluatiegesprek (onderdeel van het CGI).
  //  Opname toevoegen?
  //   - Lokaal bestand: zet 'm in /public/bewijs/ (bv. eindgesprek.mp4)
  //       en zet hieronder  video.src: '/bewijs/eindgesprek.mp4'
  //   - Of een embed-link (YouTube/Vimeo, of Google Drive met '/preview')
  //       -> plak de URL gewoon in video.src.
  {
    id: 'evaluatie',
    fileName: 'Gesprek.mov',
    title: 'Eindgesprek met mijn mediaprofessional',
    teaser: 'Video — mijn handelen, hardop gespiegeld',
    icon: 'video',
    criteria: ['mediaprof', 'reflectie'],
    intro:
      'Aan het eind van het blok voer ik een eindevaluatiegesprek met mijn externe mediaprofessional. Daarvan lever ik een video-opname (maximaal 3 minuten) in als onderdeel van mijn CGI — hier is die opname.',
    detail: [
      'In dit gesprek leg ik verantwoording af over hoe ik dit blok als mediaprofessional heb gehandeld: eerlijk over wat onze technologie wél en níet doet, transparant naar artiesten en retailers, en bereid om mijn keuzes te laten bevragen door iemand uit het vak.',
      'Ik vroeg mijn mediaprofessional bewust om peer review op mijn technische én ethische keuzes. Dit gesprek is daarvan de afsluiting: niet ik die mijn eigen verhaal vertelt, maar iemand anders die mijn handelen spiegelt en toetst.',
    ],
    reflectie: [
      'Een video durven inleveren waarin iemand anders mijn gedrag beoordeelt, voelt kwetsbaarder dan een tekst die ik zelf in de hand heb. Juist dat maakt het waardevol: ethisch handelen toets je niet aan je eigen verhaal, maar aan hoe het overkomt op anderen.',
      'Het gesprek dwingt me mijn valkuil — meegaan en aardig willen zijn — onder ogen te zien op het moment dat het telt: kan ik mijn keuzes verantwoorden, ook als de feedback ongemakkelijk is?',
    ],
    quote: 'Mijn professionaliteit bewijs ik niet door mezelf te beoordelen, maar door me te laten beoordelen.',
    video: {
      src: '/bewijs/mediaprof-eindgesprek.mp4',
      label: 'Eindevaluatiegesprek met mijn mediaprofessional (max. 3 min)',
    },
    bewijs: [],
    vervolgstap:
      'De feedback uit dit gesprek meenemen als spiegel op mijn professionele en ethische gedrag — en blijven vragen om peer review, ook na het blok.',
  },

  // --------------------------------------------------------------------------
  // Back to Being staat bewust achteraan: dit is mijn toekomstperspectief —
  // de venture waarmee ik ná het afstuderen verderga. (Wispr Flow nog in gesprek.)
  {
    id: 'being',
    fileName: 'BackToBeing.app',
    title: 'Back to Being — kantoor in een rugzak',
    teaser: 'Mijn vervolg ná het afstuderen',
    icon: 'being',
    criteria: ['reflectie', 'leerproces', 'ethiek'],
    intro:
      'Waar mijn leerproces naartoe leidt. Back to Being (backtobeing.tech) is de venture die ik met z’n drieën bouw: een AI-gestuurde app voor mentale gezondheid voor Stichting MIND. Dit is mijn toekomstperspectief — waar ik ná mijn afstuderen mee verderga en waarin alles samenkomt wat ik dit blok heb geleerd.',
    detail: [
      'Het probleem dat we aanpakken: jongeren ervaren veel prestatiedruk, faalangst en FOMO. Mind Young had daar een e-maillijst voor — vijf weken lang wekelijks opdrachten om even uit je hoofd te stappen en in het moment te komen — maar dat resoneert nauwelijks bij jongeren; ze schrijven zich er simpelweg niet voor in.',
      'Onze oplossing is een AI-gestuurde app die diezelfde opdrachten interactief maakt: quotes, opdrachten die je op het platform uitvoert en boeksuggesties. Dat sluit veel beter aan bij de doelgroep dan een e-mailblast.',
      'De manier waaróp we het bouwen is zelf een leerexperiment. Van 24 tot en met 31 augustus 2026 lopen we met z’n drieën de Camino: we vliegen naar Porto, reizen door naar Tui en lopen vandaar zo’n 120 km naar Santiago de Compostela — terwijl we onderweg de app bouwen. Ons kantoor zit dan letterlijk in onze rugzak: laptops mee, smartglasses om onze schermen te zien, Starlink voor bereik en AI-agents die we via onze AirPods aanspreken. Techleap is aangehaakt, remote is onze nieuwe sponsor en we zijn in gesprek met Wispr Flow.',
      'Minstens zo belangrijk was wat ik leerde over ondernemen zélf. We zijn Back to Being gestart door simpelweg te doen alsof alles al geregeld was — en juist daardoor kwamen de sponsoren binnen en wordt het nu echt waargemaakt. Samen met mijn team leerde ik hoe je met klanten en stakeholders praat: de juiste vragen stellen om te achterhalen wat iemand écht wil, de gunfactor opbouwen, en spiegelen — de energie die iemand naar je toe brengt mimieken, zodat diegene zich op zijn gemak voelt. Enthousiast én professioneel tegelijk zijn in zulke gesprekken bleek een vaardigheid die je kunt leren.',
    ],
    reflectie: [
      'Back to Being verandert nu al hóe ik leer. Ik merk dat ik het snelst leer in het diepe: door met een team echt te bouwen onder ongemakkelijke omstandigheden, in plaats van eerst alles veilig uit te denken. Straks op de Camino — lopend, met beperkte tijd en bereik — zal ik keuzes moeten maken en vertrouwen op reflectie-onderweg in plaats van op zekerheid vooraf.',
      'Een inzicht dat me bijbleef, kreeg ik van mijn mediaprofessional: iedereen doet eigenlijk maar wat — ook de mensen van wie je denkt dat ze alles weten, gaan gewoon verder met wat ze doen. Dat gaf me de durf om te beginnen zonder dat alles vooraf vastligt, en om te geloven dat je veel meer waar kunt maken dan je denkt, zolang je er zelf in gelooft.',
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
    id: 'update',
    fileName: 'Update v2.0',
    title: 'Stijn OS v2.0 — volgende leerdoelen',
    teaser: 'Hoe ik verder leer na blok 8',
    icon: 'update',
    criteria: ['leerproces', 'reflectie'],
    intro:
      'Een besturingssysteem is nooit af. Deze updates zijn mijn volgende leerdoelen — voortgekomen uit wat ik dit afstudeerblok echt tegenkwam.',
    detail: [
      'Verder bouwen aan mijn ondernemerschap: Kaires en Back to Being doorzetten en alles wat ik leer direct in de praktijk brengen.',
      'Eigen open-source modellen draaien (zoals GLM-5.2 via Ollama): goedkoper én minder afhankelijk van de grote techcorporaties. Ik draai ze lokaal op eigen hardware — een aparte laptop die het zware modelwerk doet en lang kan blijven staan, naast de laptop waarop ik gewoon mijn werk verricht.',
      'Technisch een laag dieper: zelf modellen finetunen en mijn keuzes blijven onderbouwen in plaats van op gevoel.',
      'Mijn ethische standpunt over AI, artiesten en privacy blijven aanscherpen, ook als de markt anders duwt.',
      'Reflectie als gewoonte houden en mijn keuzes blijven documenteren — zodat mijn leren zichtbaar blijft, ook ná het blok.',
    ],
    reflectie: [
      'Deze leerdoelen komen niet uit een formulier, maar uit echte momenten dit blok: bouwen, reflecteren, ethisch kiezen en voor 300 mensen gaan staan.',
    ],
    quote: 'Mijn volgende stap is niet harder werken, maar bewuster leren.',
    bewijs: [{ label: 'GLM-5.2 op Ollama — open-source, zelf te draaien', href: 'https://ollama.com/library/glm-5.2' }],
    vervolgstap:
      'Blijven ondernemen en leren: mijn werk onderbouwen, ethisch scherp blijven en technisch onafhankelijker worden.',
  },

  // --------------------------------------------------------------------------
  // Retro-extraatje: een zelfgebouwde Snake-mini-game. Geen CGI-onderdeel
  // (extra: true) — telt niet mee in de "bekeken"-teller en zit niet in de
  // rondleiding. De inhoud rendert via <SnakeGame />, niet via AppContent.
  {
    id: 'snake',
    fileName: 'Snake.exe',
    title: 'Snake — retro-extraatje',
    teaser: 'Even spelen: klassieke Snake',
    icon: 'snake',
    extra: true,
    criteria: [],
    detail: [],
    reflectie: [],
    bewijs: [],
    vervolgstap: '',
  },
]
