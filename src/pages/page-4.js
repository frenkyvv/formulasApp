import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Link } from "gatsby"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import DeficitHombre from "../components/formulas/DeficitHombre"
import DeficitMujer from "../components/formulas/DeficitMujer"
import Foot from "../components/sections/Footer"
import Boton2ap from "../components/botones/Boton2"

class Pagina4 extends React.Component {
  clickHombre(e) {
    $("#escoger").hide()
    $("#formHom").show()
  }
  clickMujer(e) {
    $("#escoger").hide()
    $("#formMuj").show()
  }
  render() {
    return (
      <Layout>
        <Wrapper>
          <ContentWrapper>
            <SEO title="Deficit de Agua" />
            <TextWrapper>
              <Title>Deficit de Agua</Title>
              <Description>
                Formula para calcular el deficit de Agua
              </Description>
              <div id="escoger">
                <Botones>
                  <Button
                    variant="secondary"
                    onClick={this.clickHombre}
                    id="botHom"
                  >
                    Hombre
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={this.clickMujer}
                    id="botMujer"
                  >
                    Mujer
                  </Button>
                </Botones>
              </div>
              <FormHombre id="formHom">
                <DeficitHombre />
              </FormHombre>
              <FormMujer id="formMuj">
                <DeficitMujer />
              </FormMujer>
            </TextWrapper>
          </ContentWrapper>
          <BackBut>
            <Link to="/">
              <Boton2ap text="Back" />
            </Link>
          </BackBut>
          <FooterDiv>
            <Foot />
          </FooterDiv>
        </Wrapper>
      </Layout>
    )
  }
}
export default Pagina4

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

const Botones = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
const BackBut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 50px;
`
const FormHombre = styled.div`
  display: none;
`
const FormMujer = styled.div`
  display: none;
`
const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`
const Line = styled.div`
  height: 3px;
  background-color: black;
  width: 350px;
`
