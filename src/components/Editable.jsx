import React from 'react'
import ContentEditable from 'react-simple-contenteditable'

import { noop } from 'utils/functions'

const Editable = ({
  as="span",
  placeholder,
  store, field,
  parse, format
}) => {
  const { read, write } = store

  return (
    <ContentEditable
      tabIndex={1}
      tagName={as}
      onChange={(_, value) => write(field, parse(value))}
      html={format(read(field) || placeholder)}
      onKeyPress={noop}
    />
  )
}

Editable.defaultProps = {
  parse: s => s ? s : null,
  format: x => x ? x : '',
}

export default Editable
