import React, { Component } from "react";
import PropTypes from 'prop-types'
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import {Link,withRouter} from 'react-router-dom'

//import './BasicPage.css'
class BasicPageChild extends Component {

    
    render() {
        var rootPath =  this.props.match.url.split('/')[1];
        
        console.log("Child")
        console.log(this.props)
        console.log(rootPath)
    
          return (
                <div>
                    <div style = {{
                        ...baseStyle.wrap,
                    }}>
                    </div>
                    <div style ={baseStyle.contents}>
                    <h1>BasicPageChild</h1>
                    <h1>{this.props.pageName}</h1>
                    <p>{this.props.bgColor}</p>
                    <button onClick = {()=>this.props.history.goBack()} style={{
                        fontSize:'20px',
                        fontColor:'#aa1100'
                    }}> BackPage </button>
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
        background: '#888888',
    },
    contents:{
        margin: 0,
        position: 'absolute',
        left: "50%",
        top:"50%",
        transform: 'translate(-50%, -50%)',
        background: '#FFFFFF',
    }

}

BasicPageChild.protoTypes = {
    pageName:PropTypes.string.isRequired,
    bgColor:PropTypes.strying
}

export default BasicPageChild;