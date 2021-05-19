import React from "react"

import { MainDiv } from "./styled-components"
import { generateCSSString } from "./utils"
import { ColorPickers } from "./components/color-picker"

class App extends React.Component {
  state = {
    colors: [
      "#000000", "#000000"
    ],
    degreesRotation: "0"
  }

  componentDidMount() {
    const colors = localStorage.getItem("colors")
    colors && this.setState({ colors: JSON.parse(colors) })

    const degreesRotation = localStorage.getItem("degreesRotation")
    degreesRotation && this.setState({ degreesRotation })
  }

  updateColors = (event, i) => {
    const colors = this.state.colors.slice()
    colors[i] = event.target.value
    this.setState({ colors })

    localStorage.setItem("colors", JSON.stringify(colors))
  }

  updateRotation = (event) => {
    const { value } = event.target
    if (value) {
      this.setState({ degreesRotation: value })

      localStorage.setItem("degreesRotation", value)
    }
  }

  addColor = () => {
    const colors = this.state.colors.slice()
    colors.push("#000000")
    this.setState({ colors })
  }

  removeColor = (i) => {
    // clone color state
    const colors = this.state.colors.slice()
    // delete index i
    colors.splice(i, 1)
    // set new state
    this.setState({ colors })

    // update local storage
    localStorage.setItem("colors", JSON.stringify(colors))
  }

  render() {
    const { colors, degreesRotation } = this.state
    const css = `background-image: linear-gradient(${generateCSSString({ colors, degreesRotation })});`

    return (
      <MainDiv colors={colors} degreesRotation={degreesRotation}>
        <h1>Background gradient picker</h1>
        <div>
          <label htmlFor="degrees">
            Degrees Rotation
          </label>
          <input
            name="degrees"
            type="number"
            onChange={this.updateRotation}
            value={degreesRotation}
            max={359}
            min={0}
          />
          <ColorPickers
            colors={colors}
            updateColors={this.updateColors}
            removeColor={this.removeColor}
          />
        <button onClick={this.addColor}>Add Color</button>
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
