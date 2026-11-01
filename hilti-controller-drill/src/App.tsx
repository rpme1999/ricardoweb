import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { missions, toolLabels, type Mission, type Question } from './data/missions'
import { ToolIcon } from './components/ToolIcons'
import { useProgress } from './hooks/useProgress'

type Screen = 'home' | 'how' | 'hub' | 'play' | 'result'

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function App() {
  const { scores, saveMission, reset, completedCount, fillPct } = useProgress()
  const [screen, setScreen] = useState<Screen>('home')
  const [mission, setMission] = useState<Mission | null>(null)
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [results, setResults] = useState<boolean[]>([])
  const [deck, setDeck] = useState<Question[]>([])

  const question = deck[qIndex]
  const answered = selected !== null
  const chosen = question?.choices.find((c) => c.id === selected)
  const score = results.filter(Boolean).length

  const startMission = (m: Mission) => {
    setMission(m)
    setDeck(m.questions.map((q) => ({ ...q, choices: shuffle(q.choices) })))
    setQIndex(0)
    setSelected(null)
    setResults([])
    setScreen('play')
  }

  const pick = (choiceId: string) => {
    if (answered || !question) return
    setSelected(choiceId)
    const ok = question.choices.find((c) => c.id === choiceId)?.correct ?? false
    setResults((r) => [...r, ok])
  }

  const next = () => {
    if (!mission) return
    if (qIndex + 1 >= deck.length) {
      saveMission(mission.id, results.filter(Boolean).length, deck.length)
      setScreen('result')
      return
    }
    setQIndex((i) => i + 1)
    setSelected(null)
  }

  const starOn = (n: number) => {
    const pct = deck.length ? score / deck.length : 0
    if (n === 3) return pct >= 1
    if (n === 2) return pct >= 0.7
    return pct >= 0.4
  }

  const resultCopy = useMemo(() => {
    if (!mission || !deck.length) return { title: '', body: '' }
    const pct = score / deck.length
    if (pct === 1)
      return {
        title: 'Anclaje perfecto',
        body: 'Como una fijación Hilti: firme, limpia y lista para cargar peso.',
      }
    if (pct >= 0.7)
      return {
        title: 'Toolbox lista',
        body: 'Buen nivel. Ya puedes conversar del tema con seguridad en tu día 1.',
      }
    if (pct >= 0.4)
      return {
        title: 'Falta torque',
        body: 'Vas bien, pero repite la misión para endurecer el anclaje.',
      }
    return {
      title: 'Re-taladra',
      body: 'Sin drama: vuelve a entrar, lee los tips y construye músculo.',
    }
  }, [mission, deck.length, score])

  return (
    <div className="app-shell">
      <AnimatePresence mode="wait">
        {screen === 'home' && (
          <motion.section key="home" className="screen hero" {...fade}>
            <div className="brand-mark" aria-label="Hilti">
              <div className="brand-box">
                <span>H</span>
              </div>
              <div className="brand-word">Hilti</div>
            </div>
            <h1 className="hero-title">
              Controller
              <br />
              <em>Drill</em>
            </h1>
            <p className="hero-sub">
              Juego móvil para anclar la cultura Hilti y las finanzas del rol Finance Controller en
              Panamá.
            </p>
            <div className="cta-row">
              <button type="button" className="btn-primary" onClick={() => setScreen('hub')}>
                Abrir la caja roja
              </button>
              <button type="button" className="btn-ghost" onClick={() => setScreen('how')}>
                ¿Cómo se juega?
              </button>
            </div>
            {completedCount > 0 && (
              <div className="progress-chip">
                Caja llena al <strong>{fillPct}%</strong> · {completedCount}/{missions.length} misiones
              </div>
            )}
          </motion.section>
        )}

        {screen === 'how' && (
          <motion.section key="how" className="screen" {...fade}>
            <div className="topbar">
              <button type="button" className="back-btn" onClick={() => setScreen('home')} aria-label="Volver">
                ←
              </button>
              <div className="topbar-title">Cómo jugar</div>
              <span style={{ width: 40 }} />
            </div>
            <h2 className="hub-lead">Tres golpes. Un anclaje.</h2>
            <p className="hub-sub">Super intuitivo: lee, toca la respuesta correcta, sigue.</p>
            <ol className="how-list">
              <li>
                <div className="how-num">1</div>
                <div>
                  <h3>Elige una misión</h3>
                  <p>Cultura Hilti, Finanzas del Controller o tu rol en Panamá.</p>
                </div>
              </li>
              <li>
                <div className="how-num">2</div>
                <div>
                  <h3>Ancla la respuesta</h3>
                  <p>Cada pregunta es una herramienta. Toca la opción correcta.</p>
                </div>
              </li>
              <li>
                <div className="how-num">3</div>
                <div>
                  <h3>Llena la caja roja</h3>
                  <p>Completa misiones (≥70%) y sube estrellas. Tu progreso se guarda aquí.</p>
                </div>
              </li>
            </ol>
            <button type="button" className="btn-primary" onClick={() => setScreen('hub')}>
              Empezar ahora
            </button>
          </motion.section>
        )}

        {screen === 'hub' && (
          <motion.section key="hub" className="screen" {...fade}>
            <div className="topbar">
              <button type="button" className="back-btn" onClick={() => setScreen('home')} aria-label="Volver">
                ←
              </button>
              <div className="topbar-title">Misiones</div>
              <button
                type="button"
                className="btn-ghost"
                style={{ padding: 8, fontSize: 12 }}
                onClick={reset}
                aria-label="Reiniciar progreso"
              >
                Reset
              </button>
            </div>
            <h2 className="hub-lead">Arma tu toolbox</h2>
            <p className="hub-sub">Una misión a la vez. Care &amp; perform desde el día uno.</p>
            <div className="mission-list">
              {missions.map((m) => {
                const s = scores[m.id]
                return (
                  <button
                    key={m.id}
                    type="button"
                    className={`mission-card${s?.completed ? ' done' : ''}`}
                    style={{ ['--accent' as string]: m.accent }}
                    onClick={() => startMission(m)}
                  >
                    <div className="mission-icon">
                      <ToolIcon name={m.icon as 'caja' | 'taladro' | 'ancla'} />
                    </div>
                    <div className="mission-text">
                      <h3>{m.title}</h3>
                      <p>{m.blurb}</p>
                    </div>
                    <div className="mission-meta">
                      {s?.completed ? `${s.stars}★` : m.subtitle}
                    </div>
                  </button>
                )
              })}
            </div>
            <div className="toolbox-bar">
              <label>
                <span>Caja roja</span>
                <span>{fillPct}%</span>
              </label>
              <div className="track" aria-hidden>
                <span style={{ width: `${fillPct}%` }} />
              </div>
            </div>
          </motion.section>
        )}

        {screen === 'play' && mission && question && (
          <motion.section key="play" className="screen play-screen" {...fade}>
            <div className="play-header">
              <div className="play-meta">
                <button type="button" className="back-btn" onClick={() => setScreen('hub')} aria-label="Salir">
                  ←
                </button>
                <span className="tool-pill">
                  <ToolIcon name={question.tool} />
                  {toolLabels[question.tool]}
                </span>
                <span>
                  {qIndex + 1}/{deck.length}
                </span>
              </div>
              <div className="anchors" aria-label="Progreso">
                {deck.map((_, i) => (
                  <span
                    key={i}
                    className={`anchor-dot${
                      results[i] === true ? ' filled' : results[i] === false ? ' miss' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="question-block">
              {question.context && <p className="q-context">{question.context}</p>}
              <h2 className="q-prompt">{question.prompt}</h2>

              <div className="choices">
                {question.choices.map((c) => {
                  let cls = 'choice'
                  if (answered) {
                    if (c.correct) cls += ' correct'
                    else if (c.id === selected) cls += ' wrong'
                    else cls += ' dim'
                  }
                  return (
                    <button
                      key={c.id}
                      type="button"
                      className={cls}
                      disabled={answered}
                      onClick={() => pick(c.id)}
                    >
                      {c.text}
                    </button>
                  )
                })}
              </div>
            </div>

            {answered && chosen && (
              <div className={`feedback-dock ${chosen.correct ? 'ok' : 'bad'}`}>
                <strong>{chosen.correct ? 'Anclado' : 'Resbala'}</strong>
                <p>{chosen.tip}</p>
                <button type="button" className="btn-primary" onClick={next}>
                  {qIndex + 1 >= deck.length ? 'Ver resultado' : 'Siguiente herramienta'}
                </button>
              </div>
            )}
          </motion.section>
        )}

        {screen === 'result' && mission && (
          <motion.section key="result" className="screen" {...fade}>
            <div className="result">
              <div className="result-score">
                {score}/{deck.length}
              </div>
              <h2>{resultCopy.title}</h2>
              <p>{resultCopy.body}</p>
              <div className="stars" aria-label="Estrellas">
                {[1, 2, 3].map((n) => (
                  <span key={n} className={starOn(n) ? 'on' : ''}>
                    ★
                  </span>
                ))}
              </div>
              <div className="cta-row">
                <button type="button" className="btn-primary" onClick={() => startMission(mission)}>
                  Repetir misión
                </button>
                <button type="button" className="btn-ghost" onClick={() => setScreen('hub')}>
                  Volver a misiones
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}
