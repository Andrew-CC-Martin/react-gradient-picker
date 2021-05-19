import React from "react"

import { MainDiv } from "./styled-components"

class App extends React.Component {
  state = {
    color1: "#000000",
    color2: "#000000"
  }

  updateColor1 = (event) => this.setState({ color1: event.target.value })
  updateColor2 = (event) => this.setState({ color2: event.target.value })

  render() {
    const { color1, color2 } = this.state

    return (
      <MainDiv color1={color1} color2={color2}>
        <h1>Background gradient picker</h1>
        <div>
          <input type="color" value={color1} onChange={this.updateColor1} />
          <input type="color" value={color2} onChange={this.updateColor2} />
        </div>
      </MainDiv>
    )
  }
}

export default App;
