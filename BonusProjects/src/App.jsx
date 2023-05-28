
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Task from './pages/task/Task'
import Contact from './pages/contact/Contact'
import NavBar from './components/navBar/NavBar'
function App() {
  return (
    <> 
      <NavBar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/task' element={<Task/>}/>
        <Route  path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
