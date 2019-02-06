import React from "react"
import styled from "styled-components"

const ThumbContainer = styled.div`
  padding: 0.5em;
`

const Thumb = ({ reference, invoiceDate }) => {
  return (
    <ThumbContainer>
      <h2>{reference}</h2>
      {invoiceDate}
    </ThumbContainer>
  )
}

export default Thumb
