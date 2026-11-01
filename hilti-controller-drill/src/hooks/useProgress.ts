import { useCallback, useEffect, useState } from 'react'
import { missions } from '../data/missions'

const KEY = 'hilti-controller-drill-v1'

export type MissionScore = {
  best: number
  total: number
  stars: number
  completed: boolean
}

type Store = Record<string, MissionScore>

function load(): Store {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Store) : {}
  } catch {
    return {}
  }
}

function starsFor(score: number, total: number) {
  const pct = score / total
  if (pct >= 1) return 3
  if (pct >= 0.7) return 2
  if (pct >= 0.4) return 1
  return 0
}

export function useProgress() {
  const [scores, setScores] = useState<Store>({})

  useEffect(() => {
    setScores(load())
  }, [])

  const saveMission = useCallback((missionId: string, score: number, total: number) => {
    setScores((prev) => {
      const prevBest = prev[missionId]?.best ?? 0
      const best = Math.max(prevBest, score)
      const next: Store = {
        ...prev,
        [missionId]: {
          best,
          total,
          stars: starsFor(best, total),
          completed: best >= Math.ceil(total * 0.7),
        },
      }
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const reset = useCallback(() => {
    localStorage.removeItem(KEY)
    setScores({})
  }, [])

  const completedCount = missions.filter((m) => scores[m.id]?.completed).length
  const totalStars = missions.reduce((sum, m) => sum + (scores[m.id]?.stars ?? 0), 0)
  const fillPct = Math.round((totalStars / (missions.length * 3)) * 100)

  return { scores, saveMission, reset, completedCount, totalStars, fillPct }
}
