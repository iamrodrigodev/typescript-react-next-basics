import React from 'react'

function sumar (numero1: number, numero2: number) {
  return numero1 + numero2
}

const titulo: string  = "Hola mundo"

function Button() {
  console.log(sumar(2.9,2))
  return (
      <button>{titulo}</button>
  )
}

function Page() {
  return (
    <div> 
      <Button />
    </div>
  )
}

export default Page