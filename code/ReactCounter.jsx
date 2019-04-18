import React, { Component } from "react"

class Button extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  }

  render() {
    return (
      <button style={{width: "200px", height: "100px", fontWeight: "bold", fontSize: "40px"}} onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    )
  }
}

class Button2 extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  }

  render() {
    return (
      <button style={{width: "200px", height: "100px", fontWeight: "bold", fontSize: "40px", marginRight: "20px"}} onClick={this.handleClick}>
        -{this.props.incrementValue}
      </button>
    )
  }
}

class ReactCounter extends Component {
  state = { counter: 0, rotation: 0 }

  incrementCounter = incrementValue => {
    this.setState(prevstate => ({
      counter: prevstate.counter + incrementValue,
      rotation: prevstate.rotation + 20
    }))
  }

  decrementCounter = decrementValue => {
    this.setState(prevstate => ({
      counter: prevstate.counter - decrementValue,
      rotation: prevstate.rotation - 20
    }))
  }

  render() {
    return (
      <>
      <img style={{transform: `rotate(${this.state.rotation}deg)`, width: "250px", marginBottom: "25px", transition: "transform 0.4s ease-in-out"}} src="../images/react.png" />
      <div>
        <Button2 incrementValue={1} onClickFunction={this.decrementCounter} />
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <div style={{marginTop: "50px"}}>
            <span style={{fontSize:"45px"}}>{this.state.counter}</span>
        </div>
      </div>
      </>
    )
  }
}

export default ReactCounter

