import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

const DropZone = styled.div`
  display: inline-block;

  ${props =>
    props.dragging &&
    css`
      box-shadow: 0 0 2em #fc6;
    `};
`;

export default ({ onDrop, ...rest }) => {
  const [dragging, setDragging] = useState(false);

  const prevent = useCallback(event => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const onDragEnter = useCallback(
    event => {
      prevent(event);
      setDragging(true);
    },
    [prevent]
  );

  const onDragOver = useCallback(
    event => {
      prevent(event);
      setDragging(true);
    },
    [prevent]
  );

  const onDragLeave = useCallback(
    event => {
      prevent(event);
      setDragging(false);
    },
    [prevent]
  );

  return (
    <DropZone
      dragging={dragging}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={event => {
        prevent(event);
        setDragging(false);
        onDrop(event);
      }}
      {...rest}
    />
  );
};
