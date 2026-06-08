import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";

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
