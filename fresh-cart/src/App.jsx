import { useState ,useRef,useEffect} from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router'
import About from './pages/About'
import ContactUs from './pages/Contact'
import Nav from './components/Nav'
import Home from './pages/Home'
import img from "../../final-project-home/Bittergourd1.jpg"
import NavHeader from './components/NavHeader'
import NavBar from './components/NavBar'
import "./styles/Navbar.css"
import './App.css'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import NavModal from './components/NavModal'
import { useMain } from './context/MainContext'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import Login from './pages/login/Login.jsx'
import User from './pages/User'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AboutPage from './pages/About'
import Payment from './pages/Payment.jsx'
function App() {
  
  const [count, setCount] = useState(0)
  const [isSticky,setIsSticky]=useState(0)
    // const ref = useRef(null);
    const { isModal, toggleModal, } = useMain();
    
  return (
    
        <div className={`app ${isModal && "AppDisplay"}`}  >
      {/* {window.pageYOffset < 200 ? <div></div>:  <NavBar />} */}
        <NavBar />
        <NavModal />
        
        <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Register" element={<User />} />
        <Route path="/cart" element={<ProtectedRoute>
          <Cart />
        </ProtectedRoute> } />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        
      </Routes>
      <Footer />
      <ToastContainer position='top-right' autoClose={3000}  />
    </div>
   
    
  )
}

export default App
