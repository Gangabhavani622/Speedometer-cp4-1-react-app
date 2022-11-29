// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="heading1">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="heading2">Speed is {speed}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              className="button1"
              onClick={this.onAccelerate}
              type="button"
            >
              Accelerate
            </button>
            <button className="button2" onClick={this.onBrake} type="button">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
