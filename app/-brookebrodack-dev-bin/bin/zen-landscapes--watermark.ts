#!/usr/bin/env tsx
import { createCanvas, loadImage } from 'canvas'
import { queue_ } from 'ctx-core/queue'
import { readdir, writeFile } from 'node:fs/promises'
import { basename, dirname, extname, join, resolve } from 'node:path'
import ora from 'ora'
const dir = dirname(new URL(import.meta.url).pathname)
const in_dir = resolve(`${dir}/../public/product/zen-landscapes`)
const out_dir = resolve(`${dir}/../public/assets/images/zen-landscapes`)
const wm_path = resolve(`${dir}/../public/assets/images/brooke-brodack-logo.jpg`)
const queue = queue_(4)
let count = 0
let total = 0
const spinner = ora().start()
for (const in_basename of await readdir(in_dir)) {
	queue.add(async ()=>{
		const in_extname = extname(in_basename)
		const in_image = await loadImage(join(in_dir, in_basename))
		const canvas = createCanvas(in_image.width, in_image.height)
		const ctx = canvas.getContext('2d')
		ctx.drawImage(in_image, 0, 0, canvas.width, canvas.height)
		const wm_image = await loadImage(wm_path)
		ctx.globalAlpha = 0.25
		ctx.drawImage(wm_image, 0, 0, canvas.width, canvas.height)
		await writeFile(
			join(out_dir, basename(in_basename, in_extname) + '.wm' + in_extname),
			canvas.toBuffer())
		spinner.text = ++count + ' of ' + total
	})
	++total
}
spinner.text = count + ' of ' + total
await queue.close()
spinner.stop()
