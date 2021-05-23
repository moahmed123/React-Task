import React, { Component } from 'react'
import classNames from 'classnames'
import '../css/App.css'
import Home from './Home'

class App extends Component {
  render() {
    const appClass = classNames('App', {})

    return (
      <main className={appClass}>               
        <Home/>        
      </main>
    )
  }
}
export default App
