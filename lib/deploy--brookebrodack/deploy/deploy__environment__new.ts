import { type root_ctx_T } from '@btakita/domain--any--blog/src/ctx/root_ctx.ts'
import { deploy__env } from './deploy__env.js'
import { NODE_ENV_ } from './stage.js'
export function deploy__environment__new(ctx:root_ctx_T) {
	const NODE_ENV = NODE_ENV_(ctx)
	return {
		BROOKEBRODACK_PORT: deploy__env.BROOKEBRODACK_PORT,
		NODE_ENV,
	}
}
