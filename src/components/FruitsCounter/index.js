// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  AddMango = () => {
    this.setState(prev => ({mango: prev.mango + 1}))
  }

  AddBanana = () => {
    this.setState(prev => ({banana: prev.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">
          Bob ate <span className="count">{mango} </span>mangoes
          <span className="count">{banana}</span> bananas
        </h1>
        <div className="arrange">
          <div className="cardStyle">
            <img
              className="imgStyle"
              alt="mango"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            />
            <button onClick={this.AddMango} className="button">
              Eat Mango
            </button>
          </div>
          <div className="cardStyle">
            <img
              className="imgStyle"
              alt="banana"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
            <button onClick={this.AddBanana} className="button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
