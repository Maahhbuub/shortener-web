import './App.css'
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home'
import NotFound from './components/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  )
}

export default App
