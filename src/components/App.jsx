import Header from "./header/Header"
import MonsterForm from "./monster/MonsterForm"
import MonsterCards from "./monster_cards/MonsterCards";
import Footer from "./footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MonsterCards />}></Route>
          <Route path="/monster/create" element={<MonsterForm />}></Route>
          <Route path="/monster/:id" element={<MonsterForm />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
