import { chromium } from 'playwright'
import { mkdirSync } from 'fs'
import { dirname } from 'path'

const outDir = '/opt/cursor/artifacts'
mkdirSync(outDir, { recursive: true })

const answersCultura = [
  'Making Construction Better',
  'Integridad, Coraje, Trabajo en equipo, Compromiso',
  'Caring and performance-oriented',
  'Relación directa con el cliente (direct sales)',
  'Agradecer el feedback, corregir y compartir el aprendizaje',
  'Un equipo global que colabora con un mismo propósito',
]

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })

await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
await page.screenshot({ path: `${outDir}/hilti_home_hero.png` })

await page.getByRole('button', { name: /Abrir la caja roja/i }).click()
await page.getByText('Arma tu toolbox').waitFor()
await page.screenshot({ path: `${outDir}/hilti_missions_hub.png` })

await page.getByRole('button', { name: /Cultura Hilti/i }).click()
await page.getByText(/purpose actual|valores|cultura|modelo|feedback|We are one/i).first().waitFor()

for (const answer of answersCultura) {
  await page.getByRole('button', { name: answer }).click()
  await page.getByText(/Anclado|Resbala/).waitFor()
  const next = page.getByRole('button', { name: /Siguiente herramienta|Ver resultado/i })
  await next.click()
}

await page.getByText(/Anclaje perfecto|Toolbox lista|Falta torque|Re-taladra/).waitFor()
await page.screenshot({ path: `${outDir}/hilti_cultura_result.png` })
const scoreText = await page.locator('.result-score').innerText()
console.log('SCORE', scoreText)

await page.getByRole('button', { name: /Volver a misiones/i }).click()
await page.getByText('Arma tu toolbox').waitFor()
await page.screenshot({ path: `${outDir}/hilti_progress_updated.png` })

const stars = await page.locator('.mission-card').first().locator('.mission-meta').innerText()
console.log('CULTURA_META', stars)

await browser.close()
console.log('SMOKE_OK')
