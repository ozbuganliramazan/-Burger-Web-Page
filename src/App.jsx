import { BrowserRouter,Routes,Route } from 'react-router-dom'


import Home from './pages/home'
import Menu from './pages/menu'
import About from './pages/about'
import Contact from './pages/contact'
import Header from './components/header'
import Footer from './components/footer'


function App() {


  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route index element={<Home/>} />
    <Route path='/menu' element={<Menu/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
