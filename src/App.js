import React from "react"

import { MainDiv } from "./styled-components"

class App extends React.Component {
  state = {
    colors: [
      "#000000", "#000000"
    ]
  }

  updateColors = (event, i) => {
    const newColors = this.state.colors.slice()
    newColors[i] = event.target.value
    this.setState({ colors: newColors })
  }

  render() {
    const { colors } = this.state

    return (
      <MainDiv colors={colors}>
        <h1>Background gradient picker</h1>
        <div>
          {colors.map((color, i) => {
            return (
              <input
                type="color"
                value={color}
                onChange={(event) => this.updateColors(event, i)}
              />
            )
          })}
        </div>
      </MainDiv>
    )
  }
}

export default App;
