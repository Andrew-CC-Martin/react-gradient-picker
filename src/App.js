import React from "react"

import { MainDiv } from "./styled-components"

class App extends React.Component {
  state = {
    colors: [
      "#000000", "#000000"
    ]
  }

  componentDidMount() {
    const colors = localStorage.getItem("colors")
    colors && this.setState({ colors: JSON.parse(colors) })
  }

  updateColors = (event, i) => {
    const newColors = this.state.colors.slice()
    newColors[i] = event.target.value
    this.setState({ colors: newColors })

    localStorage.setItem("colors", JSON.stringify(newColors))
  }

  render() {
    const { colors } = this.state
    const css = `background-image: linear-gradient(${colors[0]}, ${colors[1]});`

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
                key={i}
              />
            )
          })}
        </div>
        <h4>
          Your CSS is:
        </h4>
        <code>
          {css}
        </code>
      </MainDiv>
    )
  }
}

export default App;
