import { useSelector, useDispatch } from "react-redux";
import { State } from "../../models/product";
import { addToCart, removeFromCart, clearCart } from "../../store/action/product";
import './cart.css'
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { useTheme } from "../../theme/ThemeContext";

export const Cart = () => {
    const state = useSelector((state: State) => state.products);
    const dispatch = useDispatch();
    const {t} = useTranslation()
    const { i18n } = useTranslation();
    const calculateTotal = () => {
        return state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0);
    };

    const { theme } = useTheme();
    const isLightTheme = theme === 'light';

    const style = {
        backgroundColor: isLightTheme ? '#FFF' : '#363537',
        color: isLightTheme ? '#363537' : '#FAFAFA',
      };

    useEffect(() => {
        document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');

    },[i18n.language])

    const clear = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <table className="cart-table" style={style} >
                <thead>
                    <tr>
                        <th>{t('id')}</th>
                        <th>{t('name')}</th>
                        <th>{t('quantity')}</th>
                        <th>{t('price')}</th>
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
                        <td colSpan={3}>{t('totalPrice')}</td>
                        <td>${calculateTotal()}</td>
                    </tr>
                </tfoot>
               
            </table>
        </div>
    );
};
