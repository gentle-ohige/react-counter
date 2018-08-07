import React,{Component} from 'react';
import PropTypes from 'prop-types'


export default class PullDownMenuCell extends Component{
    constructor(){
        super()
    }

    render (){
        var menuCellStyle ={
            display: 'block',
            padding: '10px 0px'
        }
        var fontStyle ={
            fontSize: '2em',
            color: '#424242'
        }


        return (
            <div style={menuCellStyle} onClick ={this.props.btnFuc}>
                <h1 style={fontStyle}>    {this.props.btnTittle}</h1>
              
            </div>
        )
    }
}

PullDownMenuCell.protoTypes = {
    btnTittle:PropTypes.string.isRequired,
    btnFuc:PropTypes.func.isRequired
}