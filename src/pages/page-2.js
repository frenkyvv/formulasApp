import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import DopaminaForm from "../components/formulas/DopaminaForm"
import Boton2ap from "../components/botones/Boton2"
import Foot from "../components/sections/Footer"
import BlueBack from "../components/backgrounds/BlueBack"

function SecondPage() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <PostBack>
            <BlueBack />
          </PostBack>
          <SEO title="Dopamina" />
          <TextWrapper>
            <Title>Dosis de Dopamina</Title>
            <Description>
              Formula para calcular la dosis de Dopamina
            </Description>
          </TextWrapper>
          <br />
          <FormWrapper>
            <DopaminaForm />
          </FormWrapper>
        </ContentWrapper>
        <BackBut>
          <Link to="/">
            <Boton2ap text="Back" />
          </Link>
        </BackBut>
      </Wrapper>
      <FooterDiv>
        <Foot />
      </FooterDiv>
    </Layout>
  )
}

export default SecondPage

const Wrapper = styled.div`
  background: linear-gradient(180deg, #e2f9fb 0%, #cfd6d6 70%);
  text-align: center;
  height: 800px;
  z-index: 0;
  position: relative;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  font-weight: 600;
  padding-top: 20px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
`
const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  border-top: 2px solid black;
`
const PostBack = styled.div`
  position: relative;
  top: -60px;
`
const ContentWrapper = styled.div`
  width: 100%;
`
const TextWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BackBut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 50px;
`
const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`
