import React from 'react'
import styled from "@emotion/styled";
import {useTheme} from "@emotion/react";

const AppBar = styled.header`
  background-color: white;
  height: 82px;
  position: sticky;
`

const Container = styled.div`
  width: min(100vw, 972px);
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;

  > h1 {
    font-size: 32px;
  }

  > a {
    margin: 0 10px;
    font-size: 16px;
  }

  text-transform: capitalize;
`

export default function Header() {
    const theme = useTheme()
    return <AppBar>
        <Container>
            <h1 style={{flexGrow: 1}}>Signoras</h1>
            <a style={{color: theme.color.primary}}>Главная</a>
            <a>Экология</a>
        </Container>
    </AppBar>
}