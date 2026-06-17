import { useCallback, useMemo, useRef, useState } from 'react'
import { APPS } from '../data/apps'
import type { CriterionId } from '../types'

export interface OpenWindow {
  id: string
  z: number
  x: number
  y: number
}

/**
 * Beheert geopende vensters: openen, sluiten, focus (z-index) en positie (slepen).
 * Houdt daarnaast bij welke apps ooit zijn geopend, zodat de criteria-meter kan
 * laten zien welke beoordelingscriteria al "bekeken" zijn.
 */
export function useWindows() {
  const [windows, setWindows] = useState<OpenWindow[]>([])
  const [openedEver, setOpenedEver] = useState<Set<string>>(new Set())
  const zRef = useRef(10)

  const openWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const z = ++zRef.current
      const existing = prev.find((w) => w.id === id)
      if (existing) {
        return prev.map((w) => (w.id === id ? { ...w, z } : w))
      }
      const count = prev.length
      return [...prev, { id, z, x: 96 + count * 30, y: 72 + count * 28 }]
    })
    setOpenedEver((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }, [])

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      if (!prev.some((w) => w.id === id)) return prev
      const z = ++zRef.current
      return prev.map((w) => (w.id === id ? { ...w, z } : w))
    })
  }, [])

  const setPosition = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)))
  }, [])

  const closeAll = useCallback(() => setWindows([]), [])

  /** Welke criteria zijn al afgedekt door geopende vensters. */
  const seenCriteria = useMemo<Set<CriterionId>>(() => {
    const s = new Set<CriterionId>()
    for (const app of APPS) {
      if (openedEver.has(app.id)) app.criteria.forEach((c) => s.add(c))
    }
    return s
  }, [openedEver])

  return {
    windows,
    openedEver,
    seenCriteria,
    openWindow,
    closeWindow,
    focusWindow,
    setPosition,
    closeAll,
  }
}
