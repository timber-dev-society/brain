// import React from 'react'
import styled from 'styled-components'

import colors from './colors'

const radius = '5px'

export const Button = styled.button`
  display: inline-block;
  background-color: ${colors.bkgDark};
  color: ${colors.textLight};
  border-color: ${colors.borderDark};
  border-radius: ${radius} ${radius} ${radius} ${radius};
  padding: 2px 5px;
  outline: none;
`


export const Input = styled.input`
  border-color: ${colors.borderDark};
  border-radius: ${radius} ${radius} ${radius} ${radius};
  color: ${colors.textDark}
  padding: 2px 5px;
`
