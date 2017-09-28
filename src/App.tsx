import * as React from 'react'
import './App.css'
import * as Hammer from 'hammerjs'

const logo = require('./logo.svg')

class App extends React.Component {

  appElem: HTMLDivElement | null
  sidebarElem: HTMLDivElement | null
  hammer: HammerManager

  componentDidMount() {
    this.hammer = new Hammer(this.appElem!)
    this.hammer.on('panstart panmove', evt => {
      this.sidebarElem!.style.transform = `translate3d(${evt.deltaX}px, 0, 0)`
    })
  }

  render() {
    return (
      <div ref={ref => this.appElem = ref} className="App">
        <div ref={ref => this.sidebarElem = ref} className="sidebar" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
