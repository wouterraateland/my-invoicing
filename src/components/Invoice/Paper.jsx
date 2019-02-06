import React, { useContext } from "react"
import styled from "styled-components"
// import _ from "utils"

import ProfileContext from "contexts/Profile"
// import useWindowSize from "hooks/useWindowSize"

import DropZone from "components/DropZone"

import defaultBackground from "assets/default-background.svg"

const PAPER_DIMENSIONS = {
  A4: { width: "210mm", height: "296.9mm" }
}

const StyledPaper = styled.article`
  position: relative;
  display: block;

  width: ${props => PAPER_DIMENSIONS[props.format].width};
  height: ${props => PAPER_DIMENSIONS[props.format].height};

  padding: 2cm;
  margin: 0 auto;

  background: #fff url(${props => props.bgImage}) no-repeat -100% 140% / 110%;

  h1 {
    margin-bottom: 0.5em;

    text-transform: uppercase;
    font-size: 32pt;
    font-weight: 600;
  }

  h2 {
    width: 5.5cm;
    margin-bottom: 9pt;

    font-weight: 600;
    font-size: 11pt;
  }

  main {
    margin-left: 2.75cm;
    margin-top: 55pt;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    border: none;
    border-bottom: 1px solid;

    text-align: left;
    font-weight: 600;
  }

  ${"" /* @media screen {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(${props => props.scale});
  } */};
`

const Paper = props => {
  const { read, write } = useContext(ProfileContext)
  // const { width, height } = useWindowSize()

  function uploadLogo(file) {
    var reader = new FileReader()

    reader.onloadend = () => {
      write("background", reader.result)
    }

    reader.readAsDataURL(file)
  }

  function handleDrop(event) {
    if (event.dataTransfer.files.length > 0) {
      uploadLogo(event.dataTransfer.files[0])
    }
  }

  // const dimensions = PAPER_DIMENSIONS[props.format]
  // const scale = Math.min(
  //   width / _.convertToUnit("px")(dimensions.width),
  //   height / _.convertToUnit("px")(dimensions.height),
  //   1
  // )
  const scale = 1

  return (
    <DropZone
      as={StyledPaper}
      onDrop={handleDrop}
      bgImage={read("background", defaultBackground)}
      {...props}
      scale={scale}
    />
  )
}

Paper.defaultProps = {
  format: "A4"
}

export default Paper
