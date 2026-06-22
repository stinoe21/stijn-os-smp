// ----------------------------------------------------------------------------
// Datatypes voor Stijn OS.
// De daadwerkelijke inhoud staat in src/data/apps.ts en src/data/criteria.ts.
// ----------------------------------------------------------------------------

/**
 * De beoordeelde deelaspecten van Lerend Vermogen tijdens het CGI (Ad SMP).
 * Granulaire opsplitsing van LV 1.3 (leerproces) en LV 4.3 (ethiek).
 */
export type CriterionId =
  | 'reflectie' // 1. Kritische reflectie op persoonlijke/professionele ontwikkeling (LV 1.3)
  | 'leerproces' // 2. Inzicht in het eigen leerproces (LV 1.3)
  | 'ethiek' // 3. Ethische impact van slimme technologie op de maatschappij (LV 4.3)
  | 'mediaprof' // 4. Ethisch handelen in de rol als mediaprofessional (LV 4.3)

export interface Criterion {
  id: CriterionId
  nr: number
  /** Korte naam, voor chips/meter. */
  label: string
  /** Volledige naam zoals in de beoordelingscriteria. */
  full: string
}

/** Welk pixel-icoon hoort bij een app. */
export type IconKey =
  | 'readme'
  | 'cto'
  | 'vertaler'
  | 'keynote'
  | 'netwerk'
  | 'spiegel'
  | 'risico'
  | 'boekhouding'
  | 'update'
  | 'being' // Back to Being
  | 'pop' // Persoonlijk ontwikkelplan
  | 'ethiek' // Weegschaal / ethische afweging
  | 'video' // Filmklapper / eindevaluatie-opname
  | 'snake' // Mini-game (retro-extraatje)

/** Eén bewijsstuk: een foto (polaroid) of een link naar een document (PDF). */
export interface BewijsItem {
  /** Bijschrift. */
  label: string
  /**
   * Optioneel pad naar een screenshot/foto -> toont een polaroid.
   * Zet je bestand in public/bewijs/ en verwijs ernaar als '/bewijs/jouwfoto.png'
   * (het base-path wordt automatisch toegevoegd).
   */
  image?: string
  /**
   * Optionele link naar een document -> toont een klikbare documentkaart.
   * Een lokaal PDF: zet 'm in public/bewijs/ en gebruik '/bewijs/verslag.pdf'.
   * Een externe link (bv. Google Drive) mag ook: 'https://...'.
   */
  href?: string
}

/** Eén programma/venster op het bureaublad = één onderdeel van mijn ontwikkeling. */
export interface AppItem {
  id: string
  /** Bestandsnaam-stijl label onder het icoon, bv. "CTO.exe". */
  fileName: string
  /** Menselijke titel bovenin het venster. */
  title: string
  /** Korte teaser (tooltip + subkop in venster). */
  teaser: string
  icon: IconKey
  /** Welke beoordelingscriteria dit onderdeel afdekt. */
  criteria: CriterionId[]
  /** Optionele inleidende alinea. */
  intro?: string
  /** Detailpunten / alinea's. */
  detail: string[]
  /**
   * Optionele korte kernpunten — alleen getoond in de presentatiemodus (compact).
   * Handig om een onderwerp met meerdere pijlers (bv. Ethiek) tóch zichtbaar te
   * houden zonder de volledige detailtekst.
   */
  kernpunten?: string[]
  /** Optionele "vertaaltabel" (techniek → klantwaarde), alleen voor Vertaler.app. */
  vertaaltabel?: { van: string; naar: string }[]
  /** Reflectie-blok (één of meer alinea's). */
  reflectie: string[]
  /** Optionele markante quote. */
  quote?: string
  /**
   * Optionele video die ín het venster afspeelt (bv. de eindevaluatie-opname).
   * - Lokaal bestand: zet 'm in public/bewijs/ en gebruik '/bewijs/gesprek.mp4'.
   * - Of een embed-URL (YouTube/Vimeo/Google Drive '/preview') -> komt in een iframe.
   * Laat `src` leeg ('') om een nette "video volgt"-placeholder te tonen.
   */
  video?: { src?: string; poster?: string; label?: string }
  /** Bewijs/voorbeelden. */
  bewijs: BewijsItem[]
  /** Nieuwe leerdoel / volgende stap. */
  vervolgstap: string
  /** Accent-icoon (bv. README valt op). */
  accent?: boolean
  /**
   * "Extra" (geen beoordelingsonderdeel) — bv. de Snake-mini-game. Telt niet mee
   * in de "x / y bekeken"-teller en zit niet in de rondleiding.
   */
  extra?: boolean
}
