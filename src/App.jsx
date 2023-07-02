import './App.css'
import Navigation from './components/navbar/Navigation'
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from '../src/pages/Home'
import Features from '../src/pages/Features'
import Pricing from '../src/pages/Pricing'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/features' element={<Features />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
      </Routes>
    </div>
  )
}

export default App
