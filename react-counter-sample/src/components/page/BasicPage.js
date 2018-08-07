import React, { Component } from "react";
import PropTypes from 'prop-types'
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import BasicPageChild from './BasicPageChild'
import {Switch,withRouter,Route,Link} from 'react-router-dom'

import pathToRegexp  from 'path-to-regexp'

import PercentageCounter from '../counter/Percentage/PercentageCounter'

class BasicPage extends Component {

    render() {
        var bgColor = this.props.bgColor === undefined ? "#43A047" : this.props.bgColor
          return (
              
        
                <div style = {{
                    ...baseStyle.wrap,
                    background : bgColor
                }} >
                    <div style = {baseStyle.contents}>
                        {this.props.children}
                    </div>
                </div>
       
        )
    }
}

const baseStyle = {
    wrap:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity:1
    },

    contents:{
        margin: 0,
        position: 'absolute',
        left: "50%",
        top:"50%",
        transform: 'translate(-50%, -50%)'
    }

}

BasicPage.protoTypes = {
    bgColor:PropTypes.strying
}

export default  BasicPage;