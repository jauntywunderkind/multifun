import EtensibleFunction from "extensible-function"

export
  Fns= Symbol.for("multi-fun:fns")
  reduce= Symbol.for("multi-fun:reduce")

export class MultiFun extends ExtensibleFunction {
	static get FirstReducer( arr){
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
	},
	push: function( ...args){
		const fns= this[ Fns]
		return fns.push.apply( fns, args)
	},
	splice: function( ...args){
		const fns= this[ Fns]
		return foo.splice.apply( fns, args)
	}
}
export default MultiFun
