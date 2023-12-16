import { useSelector, useDispatch } from "react-redux";
import { State } from "../../models/product";
import { addToCart, removeFromCart, clearCart } from "../../store/action/product";
import './cart.css'

export const Cart = () => {
    const state = useSelector((state: State) => state.products);
    const dispatch = useDispatch();

    const calculateTotal = () => {
        return state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0);
    };

    const clear = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.product.id}</td>
                            <td>{item.product.title}</td>
                            <td>
                                <button onClick={() => dispatch(removeFromCart(item.product.id))} className="cart-button">-</button>
                                {item.quantity}
                                <button onClick={() => dispatch(addToCart(item.product))} className="cart-button">+</button>
                            </td>
                            <td>${item.product.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="total-row">
                        <td colSpan={3} onClick={clear} >Clear </td>
                    </tr>
                </tfoot>
                <tfoot>
                    <tr className="total-row">
                        <td colSpan={3}>Total Price</td>
                        <td>${calculateTotal()}</td>
                    </tr>
                </tfoot>
               
            </table>
        </div>
    );
};
