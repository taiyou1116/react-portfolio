import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import BlogPage from './components/BlogPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='react-portfolio/' element={<HomePage />}></Route>
          <Route path='react-portfolio/blog' element={<BlogPage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App