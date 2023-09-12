
import cart from "./assets/cart.svg"
import "../CartWidget/style.css"


const CartWidget = () => {

    return (
        <div className="Compras">
            <img src={cart} alt="cart-Widget" />
            <p>{0}</p>
        </div>
    )
}

export default CartWidget