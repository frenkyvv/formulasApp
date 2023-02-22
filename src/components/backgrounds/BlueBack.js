import React from "react"
import styled from "styled-components"

function Blue() {
  return (
    <BlueWrapper>
      <Background />
      <Wave
        src="/images/waves/wave1.png"
        style={{ top: "50px", filter: `blur(60px)` }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "150px" }} />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "250px" }} />
    </BlueWrapper>
  )
}
export default Blue

const BlueWrapper = styled.div`
  top: 0px;
  display: flex;
  z-index: -1;
  background-color: blue;
  position: absolute;
  opacity: 0.5;
  width: 100%;
`
const Wave = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
`
const Background = styled.div`
  position: absolute;
  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
  z-index: -2;
  width: 100%;
`
