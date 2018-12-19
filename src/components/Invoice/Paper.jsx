import styled from 'styled-components'

const PAPER_DIMENSIONS = {
  'A4': { width: '210mm', height: '296.9mm' },
}

const Paper = styled.article`
  position: relative;
  display: block;

  width: ${props => PAPER_DIMENSIONS[props.format].width};
  height: ${props => PAPER_DIMENSIONS[props.format].height};

  padding: 2cm;
  margin: 0 auto;

  background: #fff url(/logo_bottom.svg) no-repeat -100% 140% / 110%;
`

Paper.defaultProps = {
  format: 'A4'
}

export default Paper
