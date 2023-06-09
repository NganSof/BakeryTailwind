import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { gift, home, login, menu, store } from "./page";
import { Header } from "./template/Header/Header";
import { Footer } from "./template/Footer/Footer";
import { Pay } from "./page/Pay/Pay";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        {/* Home */}
        <Route path="" element={home} />
        {/* Menu */}
        <Route path="/menu" element={menu} />
        {/* Gift and cake new */}
        <Route path="/gift" element={gift} />
        {/* Login */}
        <Route path="/login" element={login} />
        {/* Store is table*/}
        <Route path="/store" element={store} />
        {/* Pay the bill */}
        <Route path="/pay" element={<Pay />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
