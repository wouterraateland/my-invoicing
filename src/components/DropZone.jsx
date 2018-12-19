import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const DropZone = styled.div`
  display: inline-block;

  ${props => props.dragging && css`
    box-shadow: 0 0 2em #fc6;
  `}
`

export default ({ onDrop, ...rest }) => {
  const [dragging, setDragging] = useState(false)

  function prevent(event) {
    event.preventDefault()
    event.stopPropagation()
  }

  function onDragEnter(event) {
    prevent(event)
    setDragging(true)
  }

  function onDragOver(event) {
    prevent(event)
    setDragging(true)
  }

  function onDragLeave(event) {
    prevent(event)
    setDragging(false)
  }

  return (
    <DropZone
      dragging={dragging}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={event => {
        prevent(event)
        setDragging(false)
        onDrop(event)
      }}
      {...rest}
    />
  )
}
