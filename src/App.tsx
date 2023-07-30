import AppInner from "./components/AppInner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Discord from "./components/projects/works/Discord";
import Calculator from "./components/projects/works/Calculator";
import TicTacToe from "./components/projects/works/TicTacToe";
import Wordle from "./components/projects/works/Wordle";
import Foobar from "./components/projects/works/Foobar";
import DataStructures from "./components/projects/works/DataStructures";
import Ecommute from "./components/projects/works/Ecommute";
import Wacc from "./components/projects/works/Wacc";

export default function App() {
  const [firstPage, setFirstPage] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Navbar setFirstPage={setFirstPage} />
        <Routes>
          <Route
            path="/"
            element={
              <AppInner firstPage={firstPage} setFirstPage={setFirstPage} />
            }
          />
          <Route path="/projects" element={<Projects maxView={null} />} />
          <Route path="/projects/discord" element={<Discord />} />
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route path="/projects/tictactoe" element={<TicTacToe />} />
          <Route path="/projects/wordle" element={<Wordle />} />
          <Route path="/projects/foobar" element={<Foobar />} />
          <Route path="/projects/dataStructures" element={<DataStructures />} />
          <Route path="/projects/ecommute" element={<Ecommute />} />
          <Route path="/projects/wacc" element={<Wacc />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
