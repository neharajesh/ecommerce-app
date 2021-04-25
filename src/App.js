import { Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";
import { Products } from "./Products/Products";
import { Cart } from "./Cart/Cart";
import { Wishlist } from "./Wishlist/Wishlist";
import { ProductDetails } from "./Products/ProductDetails";
import "./styles.css";
import { Login } from "./Login/Login";
import { Profile } from "./Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/products">
          <Layout>
            <Products />
          </Layout>
        </Route>
        <Route path="/cart">
          <Layout>
            <Cart />
          </Layout>
        </Route>
        <Route path="/wishlist">
          <Layout>
            <Wishlist />
          </Layout>
        </Route>
        <Route path="/products/:productId">
          <Layout>
            <ProductDetails />
          </Layout>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Layout>
            <Profile />
          </Layout>
        </Route>
      </Routes>
    </>
  );
}

export default App;
