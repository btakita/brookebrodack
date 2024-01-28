import { be_ } from 'ctx-core/object'
import { id_be_sig_triple_ } from 'rmemo'
export const [
	stage$_,
	stage_,
	stage__set,
] = id_be_sig_triple_(
	'stage',
	()=>'prod' as stage_T)
const stage_R_NODE_ENV:Record<stage_T, string> = {
	prod: 'production',
}
export const NODE_ENV_ = be_<
	string
>(ctx=>
	stage_R_NODE_ENV[stage_(ctx)])
export type stage_T = 'prod'
