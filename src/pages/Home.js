import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components/ProductCard"
export const Home = () => {
  useTitle("Home");
  const products =[
    {"id":1,"name": "Sony wh-ch510 Bluetooth Wireless","price":"149","image":"/assets/images/1001.png"},
    {"id":2,"name": "Boat Rockerz 450","price":"49","image":"/assets/images/1002.png"},
    {"id":3,"name": "JBL tune 760NC","price":"179","image":"/assets/images/1003.png"},
    {"id":4,"name": "Logitech H111 Wired","price":"39","image":"/assets/images/1004.png"},
    {"id":5,"name": "Apple Airpods Max Bluetooth Headset","price":"199","image":"/assets/images/1005.png"},
    {"id":6,"name": "ZEBRONICS Zeb-Thunder Wired","price":"29","image":"/assets/images/1006.png"}
  ]

  return (
    <main>
      <section className="products">        
    {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}
