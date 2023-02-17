import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/signup/signup";
import Cart from "./components/cart/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [CartItem, setCartItem] = useState([])
  const addToCart = (product) => {
    const isExist = CartItem.find((item) => item._id === product._id);
    if (isExist) {
      setCartItem(CartItem.map((item) => item._id === product._id ? { ...isExist, qty: isExist.qty + 1 } : item))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const isExist = CartItem.find((item) => item._id === product._id);
    if (isExist.qty === 1) {
      setCartItem(CartItem.filter((item) => item._id !== product._id))
    } else {
      setCartItem(CartItem.map((item) => item._id === product._id ? { ...isExist, qty: isExist.qty - 1 } : item))
    }
  }

  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}></Route>
          {/* <Route path="/cart" exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
