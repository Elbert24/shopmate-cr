import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useCart } from "../context/CartContext";

export const ShopCart = () => {
  const {total, cartList} = useCart();

  useTitle("Cart");
  


  return (
  <main>
    <section>
      <h1>Cart Items: {cartList.length} / ${total}</h1>
      {cartList.map((product)=>(
            <CartCard key={product.id} product={product}/>
      ))}
  
    </section>
  </main>
  )
}
