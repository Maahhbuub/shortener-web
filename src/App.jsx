import './App.css'
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home'
import NotFound from './components/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> {/* 404 fallback */}
    </Routes>
  )
}

export default App
