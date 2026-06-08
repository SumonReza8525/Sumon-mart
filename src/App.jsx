import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import ContactPage from "./assets/pages/ContactPage";
import LoginPage from "./assets/pages/LoginPage";
import CartPage from "./assets/pages/CartPage";
import ProductsPage from "./assets/pages/ProductsPage";

const App = () => {
  return (
    <div className="roboto">
      <Header></Header>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>

        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>

        <Route path="/login" element={<LoginPage></LoginPage>}></Route>

        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="/products" element={<ProductsPage></ProductsPage>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
};

export default App;
