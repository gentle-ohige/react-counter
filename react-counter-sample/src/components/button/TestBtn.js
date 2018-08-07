import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TestBtn extends Component {
  render() {
    var menuButtonStyle ={
      display:'block',
      padding:'10px 10px',
      background:'#ef5350',
      textAlign: 'center'
    }
    var fontStyle ={
      fontSize:'2em',
      color:'#424242',
      verticalAign: 'middle'
     }

  return (
      <div style={{...menuButtonStyle,...this.props.style}} onClick={this.props.onClick}>
        <p>{this.props.text}</p>
        
      </div>
  )
  }
}
TestBtn.protoTypes = {
  text:PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired
}


export default TestBtn;
