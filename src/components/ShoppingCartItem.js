import React from 'react';
import {useContext} from 'react';
import {CartContext} from '../Context/CartContext';

const Item = props => {
	const {cart} = useContext(CartContext);
	const {setCart} = useContext(CartContext);

	const removeItem = (id) => {
        setCart({
			cart: cart.filter(el => el.id === id)
          })
        }
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() =>(removeItem())}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
