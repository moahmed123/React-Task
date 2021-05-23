import React, { Component } from 'react'
import classNames from 'classnames'
import '../css/Home.css'

import Controls from './Controls'

class Home extends Component {
  render() {
    const homeClass = classNames('Home', {})

    return (
      <div className={homeClass}>
        <h2>Home Task component</h2>        
        <Controls />
      </div>
    )
  }
}

export default Home
