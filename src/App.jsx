import { useState } from 'react'
import ProductList from './ProductList.jsx'
import AboutUs from './AboutUs.jsx'
import './App.css'

function App() {
  const [started, setStarted] = useState(false)

  if (started) return <ProductList onBackHome={() => setStarted(false)} />

  return <main className="landing-page"><div className="landing-overlay" /><section className="landing-content"><p className="eyebrow">A greener way to live</p><h1>Paradise<br /><em>Nursery</em></h1><p className="landing-copy">Bring a little more life into your everyday. Thoughtfully grown houseplants for rooms that feel like home.</p><button className="primary-button" onClick={() => setStarted(true)}>Get Started <span>-&gt;</span></button></section><AboutUs compact /></main>
}

export default App
