import ExtensibleFunction from "extensible-function"

export const
  Fns= Symbol.for( "multifun:fns"),
  Map= Symbol.for( "multifun:map"),
  Reduce= Symbol.for( "multifun:reduce"),
  S= {
  	Fns,
  	Map,
  	Reduce
  }

export class Multifun extends ExtensibleFunction {
	// symbols
	static get Symbol(){
		return S
	}

	// self aliases
	static get Multifun(){
		return Multifun
	}
	static get multifun(){
		return Multifun
	}

	// stock method implementations
	/**
	  Run the given function with the present value
	*/
	static MapRunner( fn){
		return fn( this)
	}
	/**
	  Pick & return the first returned value
	*/
	static FirstReducer( arr){
		return arr[ 0]
	}
	/**
	  Invoke this object with the given `val`.
	*/
	static Invoker( val){
		const
		  mapper= this[ Map],
		  output= this[ Fns].map( mapper, val),
		  reducer= this[ Reduce],
		  reduced= reducer? reducer.call( this, output): output
		return output
	}

	constructor( ...fns){
		// lordy es classes are tempermental & obnoxious. chill you psycho:
		super( val=> Multifun.Invoker.call( this, val))
		this[ Map]= this[ Map]|| Multifun.MapRunner
		this[ Reduce]= this[ Reduce]|| Multifun.FirstReducer
		this[ Fns]= fns|| this[ Fns]|| []
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
export default Multifun
export const
  multifun= Multifun,
  FirstReducer= Multifun.FirstReducer
