import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {LightMode: 'Light Mode', DarkMode: 'Dark Mode'}

  onLightMode = () => {
    this.setState(prevState => ({
      LightMode: prevState.DarkMode,
    }))
  }

  onDarkMode = () => {
    this.setState({
      LightMode: 'Light Mode',
      DarkMode: 'Dark Mode',
    })
  }

  render() {
    const {LightMode, DarkMode} = this.state
    let res
    const isDarkMode = LightMode === 'Light Mode'
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const headingModeName = isDarkMode
      ? 'heading-light-mode'
      : 'heading-dark-mode'
    const buttonText = isDarkMode ? 'light-mode' : 'dark-mode'
    if (isDarkMode) {
      res = (
        <button
          type="button"
          className={`btn-button ${buttonText}`}
          onClick={this.onLightMode}
        >
          {LightMode}
        </button>
      )
    } else {
      res = (
        <button
          type="button"
          className={`btn-button ${buttonText}`}
          onClick={this.onDarkMode}
        >
          {DarkMode}
        </button>
      )
    }
    return (
      <div>
        <div className={`bg-container ${modeClassName}`}>
          <h1 className={`heading ${headingModeName}`}>Click To Change Mode</h1>
          {res}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
