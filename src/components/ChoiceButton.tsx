import React from 'react'
import styled from "@emotion/styled";

const Button = styled.button<{isActive: boolean}>`
  background-color: ${props => (props.isActive)?props.theme.color.primaryLight:props.theme.color.panel};
  color: ${props => (props.isActive)?props.theme.color.primary:props.theme.color.black};
  height: 83px;
  border: transparent;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  > * {
    fill: ${props => (props.isActive)?props.theme.color.primary:props.theme.color.black};
  }
`

export default function ChoiceButton(props: {isActive?: boolean, icon?: React.ReactNode, text?: string}) {
    return <Button isActive={!!props.isActive}>
        {props.icon}
        <span style={{fontSize: 16, fontWeight: "bold"}}>{props.text}</span>
    </Button>
}