import React, { useContext } from "react"
import styled from "styled-components"

import ProfileContext from "contexts/Profile"

import Button from "components/Button"

const InfoButton = styled(Button)`
  position: fixed;
  right: 1em;
  bottom: 1em;

  border-radius: 100%;
  width: 1.5em;
`

export default () => {
  const { write } = useContext(ProfileContext)

  function onClick() {
    write("step", 0)
  }

  return (
    <InfoButton onClick={onClick}>
      <em>i</em>
    </InfoButton>
  )
}
