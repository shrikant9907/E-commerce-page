import React from 'react'
import Register from './components/files/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './components/files/Login'
import ForgotPassword from './components/files/ForgotPassword'
import VerifyOtp from './components/files/VerifyOtp'


import Layout from './components/Layout/Layout'
import PageNotFound from './components/files/PageNotFound'
import Product from './components/Product-Data/Product'
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdatePassword from './components/files/UpdatePasswprd'
import ProductDetails from './components/Product-Data/ProductDetails'
import SearchItem from './components/Product-Data/SearchItem'
import Cart from './components/Product-Data/Cart'





const App = () => {
  return (
    <>
    
   <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='/product' element={<Product />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/search/:term' element={<SearchItem />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forget-password' element={<ForgotPassword/>} />
      <Route path='/otp-verify' element={<VerifyOtp />} />
      <Route path='/password-update' element={<UpdatePassword />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  
   </Routes>
   
   </>
  )
}

export default App
