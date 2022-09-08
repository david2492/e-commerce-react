import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/routes/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
import { useEffect } from 'react'

function App() {


  /* useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    const obj = {
      firstName: 'Jonathan David',
      lastName: 'Rodriguez Tejada',
      email: 'jonathan.rodriguez16@gmail.com',
      password: 'pass1234',
      phone: '3174263312',
      role: 'admin'
    }
    axios.post(URL, obj)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])*/

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
