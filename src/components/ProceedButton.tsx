import React from 'react'
import styled from "@emotion/styled";

const Button = styled.button`
  width: 176px;
  height: 52px;
  border-radius: 8px;
  border: transparent;
  background-color: ${props => props.theme.color.primary};
  cursor: pointer;
  font-size: 16px;
  color: white;
  text-transform: capitalize;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition-property: background-color;
  transition-timing-function: ease;
  transition-duration: 200ms;
  &:hover {
    background-color: ${props => props.theme.color.positive};
  }
`

export default function ProceedButton(props: { children: React.ReactNode }) {
    return <Button>
        <span>{props.children}</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{margin: "0 10px"}}>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="white"/>
        </svg>
    </Button>
}