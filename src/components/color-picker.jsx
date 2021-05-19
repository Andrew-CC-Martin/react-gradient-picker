import { array, func } from "prop-types"
import styled from "styled-components"

const StyledColorPickers = styled.div`
display: flex;
`

const StyledColorPicker = styled.div`
display: flex;
align-items: center;
border: 1px solid white;
border-radius: 5px;
margin: 5px;
padding: 5px;
`

const CloseButton = styled.div`
border: 1px solid white;
border-radius: 5px;
padding: 0 5px;
position: relative;
bottom: 14px;
left: 6px;
cursor: pointer;
`

export const ColorPickers = ({ colors, updateColors, removeColor }) => (
  <StyledColorPickers>
    {colors.map((color, i) => {
      return (
        <StyledColorPicker key={i}>
          <label htmlFor="degrees">
            Color {i + 1}
          </label>
          <input
            type="color"
            value={color}
            onChange={(event) => updateColors(event, i)}
          />
          {colors.length > 2 && <CloseButton onClick={() => removeColor(i)}>x</CloseButton>}
        </StyledColorPicker>
      )
    })}
  </StyledColorPickers>
)
ColorPickers.propTypes = {
  updateColors: func,
  removeColor: func,
  colors: array
}
