import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { gift, home, login, menu, order, store } from "./page";
import { Header } from "./template/Header/Header";
import { Footer } from "./template/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        {/* Home */}
        <Route path="/" element={home} />
        {/* Menu */}
        <Route path="/menu" element={menu} />
        {/* Gift and cake new */}
        <Route path="/gift" element={gift} />
        {/* Order */}
        <Route path="/order" element={order} />
        {/* Login */}
        <Route path="/login" element={login} />
        {/* Store is table*/}
        <Route path="/store" element={store} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
