import ExtensibleFunction from "extensible-function"

export const
  Fns= Symbol.for("multifun:fns"),
  Reduce= Symbol.for("multifun:reduce")

export class MultiFun extends ExtensibleFunction {
	static FirstReducer( arr){
		return arr[ 0]
	}
	constructor( ...fns){
		super( val=> {
			const
			  output= this[ Fns].map( fn=> fn( val)),
			  reducer= this[ Reducer],
			  reduced= reducer? reducer.call( this, output): output
			return output
		})
		this[ Reducer]= MultiFun.FirstReducer
		this[ Fns]= fns|| []
	}
	push( ...args){
		const fns= this[ Fns]
		return fns.push.apply( fns, args)
	}
	splice( ...args){
		const fns= this[ Fns]
		return foo.splice.apply( fns, args)
	}
}
export default MultiFun

export const FirstReeducer= MultiFun.FirstReducer
