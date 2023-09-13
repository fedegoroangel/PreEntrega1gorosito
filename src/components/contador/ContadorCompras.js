
import { useState } from "react"
import Boton from "../boton compras/Boton"
import "./style.css"

const ContadorCompras=() => {
const [cuenta, setcuenta] = useState(0)  

const incrementar =() => {
  setcuenta(cuenta+1)
}
const decrementar =() => {
  setcuenta(cuenta-1)
}


  return (
    <div>
      <Boton titulo={"comprar"} funcion ={incrementar}/>
      <p>{cuenta}</p>
      <Boton titulo={"cancelar"} funcion ={decrementar}/>
    </div>
  )
}

export default ContadorCompras