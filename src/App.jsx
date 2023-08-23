import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import BlogPage from './components/BlogPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/blog' element={<BlogPage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App