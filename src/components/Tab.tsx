import React from 'react'
import Paper from "./Paper";
import styled from "@emotion/styled";

const H6 = styled.h6`
  margin: 0;
  font-size: 12px;
  font-weight: normal;
`

const H4 = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`

const Colored = styled.div<{isActive: boolean}>`
  color: ${props => (props.isActive)?props.theme.color.primary:'gray'}
`

export default function Tab(props: {step: number, title: string, isActive?: boolean}) {
    return <Paper padding={20}>
        <Colored isActive={!!props.isActive}>
            <H6>Шаг {props.step}</H6>
            <H4>{props.title}</H4>
        </Colored>
    </Paper>
}