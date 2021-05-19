import React from "react"

import { MainDiv } from "./styled-components"

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
    const newColors = this.state.colors.slice()
    newColors[i] = event.target.value
    this.setState({ colors: newColors })

    localStorage.setItem("colors", JSON.stringify(newColors))
  }

  updateRotation = (event) => {
    const { value } = event.target
    if (value) {
      this.setState({ degreesRotation: value })

      localStorage.setItem("degreesRotation", value)
    }
  }

  render() {
    const { colors, degreesRotation } = this.state
    const css = `background-image: linear-gradient(${degreesRotation}deg, ${colors[0]}, ${colors[1]});`

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
          {colors.map((color, i) => {
            return (
              <React.Fragment key={i}>
                <label htmlFor="degrees">
                  Color {i + 1}
                </label>
                <input
                  type="color"
                  value={color}
                  onChange={(event) => this.updateColors(event, i)}
                />
              </React.Fragment>
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
