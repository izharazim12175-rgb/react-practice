import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import download from './assets/download.jpg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <div className="logo-container">
         {/* <img src={reactLogo} alt="React Logo" className="logo" />  */}
         {/* <img src={viteLogo} alt="Vite Logo" className="logo" />  */}
       </div>
       {/* <img src={heroImg} alt="Hero Image" className="hero-img" />  */}
       <img src={download} alt="Download" className="download-img" /> 
       <h2>izhar azim welcome</h2>
      <Header />
      <Footer />  
      
    </div>
  )
}

export default App
