import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

mkdirSync('/tmp/hilti-demo', { recursive: true })

const answersCultura = [
  'Making Construction Better',
  'Integridad, Coraje, Trabajo en equipo, Compromiso',
  'Caring and performance-oriented',
  'Relación directa con el cliente (direct sales)',
  'Agradecer el feedback, corregir y compartir el aprendizaje',
  'Un equipo global que colabora con un mismo propósito',
]

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  recordVideo: { dir: '/tmp/hilti-demo', size: { width: 390, height: 844 } },
})
const page = await context.newPage()

await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(900)
await page.getByRole('button', { name: /Abrir la caja roja/i }).click()
await page.waitForTimeout(700)
await page.getByRole('button', { name: /Cultura Hilti/i }).click()
await page.waitForTimeout(600)

for (const answer of answersCultura) {
  await page.getByRole('button', { name: answer }).click()
  await page.waitForTimeout(500)
  await page.getByRole('button', { name: /Siguiente herramienta|Ver resultado/i }).click()
  await page.waitForTimeout(450)
}

await page.waitForTimeout(1600)
await page.getByRole('button', { name: /Volver a misiones/i }).click()
await page.waitForTimeout(1000)

await context.close()
await browser.close()
console.log('VIDEO_DONE')
