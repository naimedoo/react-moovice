import Favorites from "./Component/Favorites"
import Home from "./Component/Home"
import PopularBattle from "./Component/Popular-battle"
import Popular from "./Component/Popular"
import Weekly from "./Component/Weekly"
import WeeklyBattle from "./Component/Weekly-battle"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return (
      <>
      <nav>
        <Link to="/Home">Accueil</Link>
        <Link to="/Favorites">Favorites</Link>
        <Link to="/Weekly">Weekly</Link>
        <Link to="/WeeklyBattle">WeeklyBattle</Link>
        <Link to="/Popular">Popular</Link>
        <Link to="/PopularBattle">PopularBattle</Link>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Favorites" element={<Favorites/>}/>
        <Route path="/PopularBattle" element={<PopularBattle/>}/>
        <Route path="/Popular" element={<Popular/>}/>
        <Route path="/WeeklyBattle" element={<WeeklyBattle/>}/>
        <Route path="/Weekly" element={<Weekly/>}/>
        {/* <Route path="/Weekly" element={<Weekly/>}/> */}
      </Routes>
      <Popular/>
      </>
    )

  }
}
export default App