import CartWidget from "../CartWidget/CartWidget"
import "./style.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3>Ecomers</h3>
            <div className="market-sice">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar