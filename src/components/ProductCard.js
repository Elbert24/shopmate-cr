import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
export const ProductCard = ({product}) => {
  const {name,price,image} = product;

  const [isInCart, setIsInCart] = useState(false);
  const {removeFromCart, addToCart , cartList} = useCart();


  useEffect(()=>{
    const productIsInCart = cartList.find(cartItem => cartItem.id === product.id);
    if(productIsInCart){
      setIsInCart(true);
    }
    else{
      setIsInCart(false);
    }
  },[cartList,product.id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (<button className="remove" onClick={()=> removeFromCart(product)}>Remove</button>): (<button onClick={()=> addToCart(product)}>Add to Cart</button>)}
      
      </div>
    </div>
  )
}
