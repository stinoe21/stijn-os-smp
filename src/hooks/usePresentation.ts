import { useCallback, useEffect, useState } from 'react'
import { APPS } from '../data/apps'

// Vaste volgorde van de rondleiding = de volgorde van de apps op het bureaublad.
// Dit is het verhaal dat je tijdens het CGI vertelt: van intro naar volgende leerdoelen.
const ORDER = APPS.map((a) => a.id)

/**
 * Presentatie-/rondleidingmodus: loodst je stap voor stap door alle vensters.
 * Per stap wordt precies één venster getoond (via `openOnly`), zodat je tijdens
 * het CGI gewoon op "Volgende" klikt en je verhaal vertelt.
 */
export function usePresentation(openOnly: (id: string) => void, closeAll: () => void) {
  const [index, setIndex] = useState(-1) // -1 = niet actief
  const active = index >= 0

  // Open het juiste venster zodra de stap verandert (functionele updates hieronder
  // voorkomen stale-closure-bugs bij snel doorklikken).
  useEffect(() => {
    if (index >= 0) openOnly(ORDER[index])
  }, [index, openOnly])

  const start = useCallback(() => setIndex(0), [])
  const next = useCallback(() => setIndex((i) => Math.min(ORDER.length - 1, i + 1)), [])
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), [])
  const stop = useCallback(() => {
    setIndex(-1)
    closeAll()
  }, [closeAll])

  return {
    active,
    index,
    total: ORDER.length,
    currentId: active ? ORDER[index] : null,
    isFirst: index <= 0,
    isLast: index >= ORDER.length - 1,
    start,
    next,
    prev,
    stop,
  }
}
