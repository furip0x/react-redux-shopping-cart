import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import ShoppingCart from './Pages/ShoppingCart'
import ProductDetail from './Pages/ProductDetail'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='app-wrapper'>
        <Header />
        <main className='app-main'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/cart' component={ShoppingCart}></Route>
            <Route path='/product/:id' component={ProductDetail}></Route>
          </Switch>
        </main>
        <ToastContainer
          position='top-center'
          autoClose={1300}
          draggable={false}
          pauseOnHover={false}
          transition={Slide}
        />
      </div>
    </Router>
  )
}

export default App
