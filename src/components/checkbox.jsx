import React, { Component } from 'react'
import './../assets/css/form/checkbox.css'

const makeId = length => {
   let result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   return result;
}

class Checkbox extends Component {
  state = { checked: false, id: makeId(10) }

  handleCheckboxChange = event => this.setState({ checked: event.target.checked })

  render() {
    return (
      <>
        <input type="checkbox" id={`cbx-${this.state.id}`} className="cbx"
          style={{ display: 'none' }}
          checked={this.state.checked}
          onChange={this.handleCheckboxChange}
        />
        <label for={`cbx-${this.state.id}`} className="check">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
      </>
    )
  }
}

export default Checkbox;
