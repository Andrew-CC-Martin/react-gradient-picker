export const generateCSSString = ({ colors, degreesRotation }) => {
  let CSSString = `${degreesRotation}deg`
  colors.forEach(color => {
    CSSString += `, ${color}`
  })
  return CSSString
}
