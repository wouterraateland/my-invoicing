import React, { useContext } from "react"
import styled from "styled-components"

import ProfileContext from "contexts/Profile"

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
`

const Paper = props => {
  const { read, write } = useContext(ProfileContext)

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

  return (
    <DropZone
      as={StyledPaper}
      onDrop={handleDrop}
      bgImage={read("background", defaultBackground)}
      {...props}
    />
  )
}

Paper.defaultProps = {
  format: "A4"
}

export default Paper
