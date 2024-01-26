import MonsterForm from "./monster/MonsterForm"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/monster/create" element={<MonsterForm />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
