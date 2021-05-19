import styled from "styled-components"

const backgroundCallback = ({ colors, degreesRotation }) => `${degreesRotation}deg, ${colors[0]},${colors[1]}`

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(${backgroundCallback});
height: 100%;
width: 100%;
`
