import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import ShoppingCart from './Pages/ShoppingCart'
import styles from './app.module.css'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.appContent}>
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
