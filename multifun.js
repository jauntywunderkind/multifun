import ExtensibleFunction from "extensible-function"

export const
  Fns= Symbol.for("multifun:fns"),
  Reduce= Symbol.for("multifun:reduce")

export class MultiFun extends ExtensibleFunction {
	static FirstReducer( arr){
		return arr[ 0]
	}
	static get Fns(){
		return Fns
	}
	static get Reduce(){
		return Reduce
	}
	static get MultiFun(){
		return Multifun
	}
	static get Multifun(){
		return MultiFun
	}
	static get multifun(){
		return MultiFun
	}
	constructor( ...fns){
		super( val=> {
			const
			  output= this[ Fns].map( fn=> fn( val)),
			  reducer= this[ Reduce],
			  reduced= reducer? reducer.call( this, output): output
			return output
		})
		this[ Reduce]= MultiFun.FirstReducer
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
	[Symbol.iterator](){
		return this.fns[ Symbol.iterator]()
	}
}
export default MultiFun
export const
  Multifun= MultiFun,
  multifun= MultiFun,
  FirstReducer= MultiFun.FirstReducer
