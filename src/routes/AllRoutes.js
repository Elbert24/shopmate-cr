import { Routes , Route } from "react-router-dom";
import { Home , ShopCart } from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ShopCart" element={<ShopCart/>} />

    </Routes>
    </>
  )
}
