import type {NextPage} from 'next'
import Head from 'next/head'
import ProceedButton from "src/components/ProceedButton";
import Header from "../src/components/Header";
import styled from "@emotion/styled";
import {Container} from "src/components/Container";
import Tab from "../src/components/Tab";
import TabPanel from "../src/components/TabPanel";

const H1 = styled.h1`
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: 40px;
`

const H2 = styled.h2`
  font-weight: normal;
  margin-bottom: 20px;
  color: gray;
  font-size: 18px;
`

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  
  > * {
    margin-left: 20px;
  }
  
  > :first-of-type {
    margin-left: 0;
  }
`

const Home: NextPage = () => {
    return (
        <div style={{backgroundColor: "#F5F7F8", minHeight: "100vh"}}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Container>
                <H1>Оценка залогового имущества</H1>
                <H2>Наш сервис помогает оценить недвижимость и автомобили</H2>
                <Tabs>
                    <Tab isActive step={1} title="Выбор типа имущества"/>
                    <Tab step={1} title="Выбор типа имущества"/>
                    <Tab step={1} title="Выбор типа имущества"/>
                </Tabs>
                <TabPanel/>
            </Container>
        </div>
    )
}

export default Home
