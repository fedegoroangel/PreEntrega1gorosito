import "./style.css"
import "../contador/ContadorCompras"
import iphone14promax from "./assets/iphone14promax.jpg"
import ContadorCompras from "../contador/ContadorCompras"

export default function Cards() {
    return (
        <div className="card-container">
            <div className="Card">
                <img src= {iphone14promax} alt="iphone-14"/>
                <ContadorCompras />
            </div>
        </div>
    )
}


