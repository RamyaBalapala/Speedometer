import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickBreakButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="main-bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        <div className="speed-info-container">
          <h1 className="speed-heading">Speed is {speed}mph</h1>
          <p className="speed-info">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="accelerate-button"
              type="button"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              className="brake-button"
              type="button"
              onClick={this.onClickBreakButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
