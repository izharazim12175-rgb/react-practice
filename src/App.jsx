import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import logo from './assets/logo.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <img src={logo} alt="Logo" className="logo" /> 
     <h2>izhar azim welcome</h2>
    <Header />
      <Footer />  
      
    </div>
  )
}

export default App
