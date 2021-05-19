import styled from "styled-components"

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(${({ color1, color2 }) => `${color1},${color2}`});
height: 100%;
width: 100%;
`
