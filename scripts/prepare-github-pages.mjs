import { copyFileSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outputDirectory = 'dist'
const basePath = process.env.GITHUB_ACTIONS ? '/explor.ar-web/' : '/'
const assetsDirectory = join(outputDirectory, 'assets')

for (const fileName of readdirSync(assetsDirectory).filter((name) => name.endsWith('.css'))) {
  const filePath = join(assetsDirectory, fileName)
  const css = readFileSync(filePath, 'utf8').replaceAll("url(/images/", `url(${basePath}images/`)
  writeFileSync(filePath, css)
}

copyFileSync(join(outputDirectory, 'index.html'), join(outputDirectory, '404.html'))
writeFileSync(join(outputDirectory, '.nojekyll'), '')
