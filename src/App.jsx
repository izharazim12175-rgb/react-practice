import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import download from './assets/download.jpg';
import camera from './assets/camera.jpg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <div className="logo-container">
        <img src={download} alt="Download" className="download-img" /> 
        <img src={camera} alt="Camera" className="camera-img" />   
        <h2>izhar azim welcome</h2>
       </div>
       
       
      <Header />
      <Footer />  
      
    </div>
  )
}

export default App
