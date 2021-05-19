import styled from "styled-components"

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(${({ colors }) => `${colors[0]},${colors[1]}`});
height: 100%;
width: 100%;
`
