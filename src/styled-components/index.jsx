import styled from "styled-components"

import { generateCSSString } from "../utils";

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(${generateCSSString});
height: 100%;
width: 100%;
`
