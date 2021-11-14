import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import ShoppingCart from './Pages/ShoppingCart'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='app-container'>
        <Header />
        <main className='app-main'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/cart' component={ShoppingCart}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
