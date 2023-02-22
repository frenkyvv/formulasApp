import React from "react"
import styled from "styled-components"

function Boton2ap(props) {
  return (
    <Box>
      <Text>{props.text || "Boton"}</Text>
    </Box>
  )
}

export default Boton2ap

const Box = styled.div`
  width: 130px;
  height: 45px;
  background-color: rgba(110, 117, 124);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(110, 117, 124, 0.25);
`
const Text = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 130%;
  text-align: center;
  color: white;
  padding-top: 13px;
  text-decoration: none;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
