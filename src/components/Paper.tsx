import React from 'react'
import styled from "@emotion/styled";


const Paper = styled.div<{padding: number}>`
  background-color: white;
  border-radius: 20px;
  flex-grow: 1;
  padding: ${props => props.padding}px;
`

export default Paper