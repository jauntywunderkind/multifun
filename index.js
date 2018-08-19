"use strict"
var
  esm= require( "esm")( module),
  multifun= esm( "./multifun.js")

const m= module.exports= multifun.default
m.Multifun= m
