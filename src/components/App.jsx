import Header from "./header/Header"
import MonsterCards from "./monster_cards/MonsterCards";
import MonsterForm from "./monster_form/MonsterForm";
import MonsterChoice from "./monster_choice/MonsterChoice";
import SpellCards from "./spell_cards/SpellCards";
import SpellForm from "./spell_form/SpellForm";
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
          <Route path="/monster/choice/:id" element={<MonsterChoice />}></Route>
          <Route path="/spells" element={<SpellCards />}></Route>
          <Route path="/spells/:monsterId" element={<SpellCards />}></Route>
          <Route path="/spell/create" element={<SpellForm />}></Route>
          <Route path="/spell/:id" element={<SpellForm />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
