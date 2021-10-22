"use module"
import { Multifun, Reduce, FirstReducer} from "../multifunc.js"
import tape from "tape"

tape( "can run multiple things", function( t){
	let a= 1
	new Multifun(()=> a++, ()=> a++, ()=> a++)()
	t.equal( a, 4, "three incrementing functions have been run")
	t.end()
})

tape( "first reducer runs", function( t){
	let a= 1
	const m= new Multifun(()=> a++, ()=> a++, ()=> a++)
	m[ Reduce]= FirstReducer
	m()
	t.equal( a, 4, "three incrementing functions have been run")
	t.end()
})

tape( "Can push a new function", function( t){
	let a= 1
	const m= new Multifun(()=> a++, ()=> a++, ()=> a++)
	m.push(()=> a++)
	m[ Reduce]= FirstReducer
	m()
	t.equal( a, 5, "three incrementing functions have been run")
	t.end()
})