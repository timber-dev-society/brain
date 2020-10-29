// import React from 'react'
import styled from 'styled-components'

import colors from './colors'

const radius = '5px'

export const Button = styled.button`
  display: inline-block;
  background-color: ${props => props.type ? colors[`bkg${props.type}`] : colors.bkgLight};
  color: ${props => props.type ? colors.textLight : colors.textDark};
  border-color: ${props => props.type ? colors[`border${props.type}`] : colors.borderLight};
  border-radius: ${radius} ${radius} ${radius} ${radius};
  padding: 2px 5px;
`

export const Input = styled.input`
  border-color: ${props => props.type ? colors[`border${props.type}`] : colors.borderLight};
  border-radius: ${radius} ${radius} ${radius} ${radius};
  padding: 2px 5px;
`
