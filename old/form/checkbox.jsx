import React from 'react'
import PropTypes from 'prop-types'

import './../../assets/style/form/checkbox.sass'
import { CHECKBOX_UNIQ_ID_SIZE } from './../../config'
import uniqueId from './../../lib/unique-id'

const Checkbox = (props) => {
  const id = uniqueId(CHECKBOX_UNIQ_ID_SIZE)

  const checked = typeof props.checked !== 'undefined'
                            ? props.checked
                            : false

  return (
    <>
      <input type="checkbox" id={`cbx-${id}`} className="cbx"
        style={{ display: 'none' }}
        onChange={() => { props.handleChange() }}
        checked={checked}
      />
      <label htmlFor={`cbx-${id}`} className="check">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
          <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
          <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
      </label>
    </>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Checkbox;