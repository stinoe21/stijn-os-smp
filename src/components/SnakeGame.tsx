import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'

// ----------------------------------------------------------------------------
// Snake.exe — een klassieke mini-game, helemaal zelf gebouwd op een <canvas>.
// Een knipoog naar de retro-OS-vorm; telt niet mee als CGI-onderdeel.
// Besturing: pijltjes / WASD / D-pad. Spatie of klik = starten.
// ----------------------------------------------------------------------------

type Cell = { x: number; y: number }

const GRID = 17 // vakjes per zijde
const CELL = 20 // interne pixels per vakje (canvas-resolutie)
const SPEED = 115 // ms per stap
const BEST_KEY = 'stijnos-snake-best'

const START_DIR: Cell = { x: 1, y: 0 }
const START_SNAKE: Cell[] = [
  { x: 8, y: 8 },
  { x: 7, y: 8 },
  { x: 6, y: 8 },
]

// Toetsen -> richting. Pijltjes én WASD (hoofdletters meegenomen voor caps lock).
const DIRS: Record<string, [number, number]> = {
  ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0],
  w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0],
  W: [0, -1], S: [0, 1], A: [-1, 0], D: [1, 0],
}

type GameState = { snake: Cell[]; dir: Cell; nextDir: Cell; food: Cell; score: number }

function spawnFood(snake: Cell[]): Cell {
  const taken = new Set(snake.map((c) => `${c.x},${c.y}`))
  const free: Cell[] = []
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      if (!taken.has(`${x},${y}`)) free.push({ x, y })
    }
  }
  return free[Math.floor(Math.random() * free.length)] ?? { x: 0, y: 0 }
}

function freshGame(): GameState {
  const snake = START_SNAKE.map((c) => ({ ...c }))
  return { snake, dir: { ...START_DIR }, nextDir: { ...START_DIR }, food: spawnFood(snake), score: 0 }
}

function readBest(): number {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0
  } catch {
    return 0
  }
}

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const boardRef = useRef<HTMLDivElement>(null)

  // De volledige spelstaat leeft in een ref (geen stale closures in de loop).
  const gameRef = useRef<GameState | null>(null)
  if (gameRef.current === null) gameRef.current = freshGame()

  const [status, setStatus] = useState<'idle' | 'running' | 'over'>('idle')
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(readBest)
  const [, forceRender] = useState(0)

  // -- Tekenen op het canvas -------------------------------------------------
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const g = gameRef.current!
    const size = GRID * CELL

    ctx.fillStyle = '#0e2429'
    ctx.fillRect(0, 0, size, size)

    // subtiel raster
    ctx.strokeStyle = 'rgba(126,231,135,0.06)'
    ctx.lineWidth = 1
    for (let i = 1; i < GRID; i++) {
      ctx.beginPath(); ctx.moveTo(i * CELL + 0.5, 0); ctx.lineTo(i * CELL + 0.5, size); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(0, i * CELL + 0.5); ctx.lineTo(size, i * CELL + 0.5); ctx.stroke()
    }

    // voedsel (appeltje)
    const f = g.food
    ctx.fillStyle = '#f6b13c'
    ctx.fillRect(f.x * CELL + 4, f.y * CELL + 4, CELL - 8, CELL - 8)
    ctx.fillStyle = '#cf6f18'
    ctx.fillRect(f.x * CELL + CELL / 2 - 1, f.y * CELL + 3, 2, 4)

    // slang (kop lichter dan de rest)
    g.snake.forEach((c, i) => {
      ctx.fillStyle = i === 0 ? '#b8f5c0' : '#7ee787'
      ctx.fillRect(c.x * CELL + 1, c.y * CELL + 1, CELL - 2, CELL - 2)
    })
  }, [])

  // Teken na elke render (elke stap roept forceRender aan).
  useEffect(() => {
    draw()
  })

  // -- Spelregels ------------------------------------------------------------
  const endGame = useCallback(() => {
    setStatus('over')
    setBest((b) => {
      const nb = Math.max(b, gameRef.current!.score)
      try {
        localStorage.setItem(BEST_KEY, String(nb))
      } catch {
        /* localStorage niet beschikbaar — geen probleem */
      }
      return nb
    })
  }, [])

  const step = useCallback(() => {
    const g = gameRef.current!
    g.dir = g.nextDir
    // Wrap-around: door een rand gaan = aan de overkant weer tevoorschijn komen.
    const head = {
      x: (g.snake[0].x + g.dir.x + GRID) % GRID,
      y: (g.snake[0].y + g.dir.y + GRID) % GRID,
    }

    // jezelf? (de staartpunt schuift weg als je niet eet)
    const eat = head.x === g.food.x && head.y === g.food.y
    const body = eat ? g.snake : g.snake.slice(0, -1)
    if (body.some((c) => c.x === head.x && c.y === head.y)) {
      endGame()
      return
    }

    const next = [head, ...g.snake]
    if (eat) {
      g.score += 1
      setScore(g.score)
      g.food = spawnFood(next)
    } else {
      next.pop()
    }
    g.snake = next
    forceRender((n) => n + 1)
  }, [endGame])

  // Game-loop: alleen actief terwijl we spelen.
  useEffect(() => {
    if (status !== 'running') return
    const id = setInterval(step, SPEED)
    return () => clearInterval(id)
  }, [status, step])

  // -- Besturing -------------------------------------------------------------
  const startGame = useCallback(() => {
    gameRef.current = freshGame()
    setScore(0)
    setStatus('running')
    boardRef.current?.focus()
  }, [])

  const turn = useCallback((nx: number, ny: number) => {
    const g = gameRef.current!
    if (nx === -g.dir.x && ny === -g.dir.y) return // niet 180° omdraaien
    g.nextDir = { x: nx, y: ny }
  }, [])

  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const move = DIRS[e.key]
    if (move) {
      e.preventDefault()
      if (status !== 'running') startGame()
      turn(move[0], move[1])
      return
    }
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      if (status !== 'running') startGame()
    }
  }

  const press = (nx: number, ny: number) => {
    if (status !== 'running') startGame()
    turn(nx, ny)
    boardRef.current?.focus()
  }

  // Focus het veld zodra de game opent, zodat de pijltjes meteen werken.
  useEffect(() => {
    boardRef.current?.focus()
  }, [])

  return (
    <div className="font-sans text-ink">
      <p className="font-pixel text-[10.5px] uppercase tracking-wide text-ink/50">Even spelen tussendoor</p>

      <div className="mx-auto mt-2 flex max-w-[340px] items-center justify-between font-pixel text-[11px] text-ink/80">
        <span>
          SCORE <span className="text-accent-dark">{score}</span>
        </span>
        <span>
          BEST <span className="text-retroblue">{best}</span>
        </span>
      </div>

      {/* Speelveld */}
      <div className="mx-auto mt-2 w-full max-w-[340px]">
        <div
          ref={boardRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onClick={() => {
            if (status !== 'running') startGame()
          }}
          className="relative aspect-square w-full cursor-pointer overflow-hidden border-2 border-ink bg-[#0e2429] shadow-window outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <canvas
            ref={canvasRef}
            width={GRID * CELL}
            height={GRID * CELL}
            className="block h-full w-full"
            style={{ imageRendering: 'pixelated' }}
          />

          {status !== 'running' && (
            <div className="absolute inset-0 grid place-items-center bg-black/55 text-center">
              <div className="px-4">
                {status === 'over' ? (
                  <>
                    <p className="font-crt text-4xl leading-none text-accent-light">GAME OVER</p>
                    <p className="mt-1 font-pixel text-[11px] text-paper/85">
                      score {score} · best {best}
                    </p>
                  </>
                ) : (
                  <p className="font-crt text-5xl leading-none text-[#7ee787]">SNAKE</p>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    startGame()
                  }}
                  className="mt-3 border-2 border-paper bg-accent px-4 py-1.5 font-pixel text-[11px] text-ink shadow-bevel active:shadow-bevel-in"
                >
                  {status === 'over' ? '↻ Opnieuw' : '▶ Speel'}
                </button>
                <p className="mt-2 font-pixel text-[8px] uppercase tracking-wide text-paper/55">
                  pijltjes of wasd · spatie = start
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* D-pad voor muis/touch — werkt naast het toetsenbord */}
      <div className="mx-auto mt-3 grid w-[150px] grid-cols-3 gap-1">
        <span />
        <PadButton label="▲" onPress={() => press(0, -1)} />
        <span />
        <PadButton label="◀" onPress={() => press(-1, 0)} />
        <span />
        <PadButton label="▶" onPress={() => press(1, 0)} />
        <span />
        <PadButton label="▼" onPress={() => press(0, 1)} />
        <span />
      </div>

      <p className="mx-auto mt-3 max-w-[360px] text-center font-sans text-[11px] italic leading-snug text-ink/55">
        Een knipoog naar de retro-OS-vorm — en bewijs dat bouwen voor mij spelen is. Net als de rest van
        dit OS: zelf in elkaar gezet, gewoon door te doen.
      </p>
    </div>
  )
}

function PadButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <button
      aria-label={label}
      onMouseDown={(e) => e.preventDefault()} // focus op het speelveld houden
      onClick={onPress}
      className="grid h-10 place-items-center border-2 border-ink bg-bezel font-pixel text-[14px] text-ink shadow-bevel active:shadow-bevel-in"
    >
      {label}
    </button>
  )
}
