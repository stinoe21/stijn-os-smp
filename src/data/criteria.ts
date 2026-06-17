import type { Criterion, CriterionId } from '../types'

// De vier beoordeelde deelaspecten van Lerend Vermogen tijdens het CGI
// (Ad Smart Media Production). Granulaire opsplitsing van LV 1.3 en LV 4.3.
export const CRITERIA: Criterion[] = [
  {
    id: 'reflectie',
    nr: 1,
    label: 'Kritische reflectie',
    full: 'LV 1.3 — Reflecteert kritisch op de eigen persoonlijke en professionele ontwikkeling.',
  },
  {
    id: 'leerproces',
    nr: 2,
    label: 'Inzicht in leerproces',
    full: 'LV 1.3 — Heeft inzicht in het eigen leerproces: weet hoe en waardoor ik leer.',
  },
  {
    id: 'ethiek',
    nr: 3,
    label: 'Ethische impact',
    full: 'LV 4.3 — Reflecteert kritisch op de ethische impact van slimme technologieën op de maatschappij.',
  },
  {
    id: 'mediaprof',
    nr: 4,
    label: 'Ethisch handelen',
    full: 'LV 4.3 — Handelt ethisch in de rol als mediaprofessional.',
  },
]

export const CRITERIA_BY_ID: Record<CriterionId, Criterion> = CRITERIA.reduce(
  (acc, c) => {
    acc[c.id] = c
    return acc
  },
  {} as Record<CriterionId, Criterion>,
)
