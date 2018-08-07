import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import BasicPage from '../../components/page/BasicPage'
import TestBtn from '../../components/button/TestBtn'


import PercentageCounter from '../../components/counter/Percentage/PercentageCounter'
import { log } from "util";
class   ParcentageCounterPage extends Component {

    //lifecycle
    constructor(){
        super()

        this.state ={
            numerator:0,
            denominator:100
        }
        
    
      
    }


    componentDidMount(){
        //get componet from node
        

    }

    componentWillUnmount(){
        //get componet from 
        
        clearInterval(this.updator)
    }
    startCount(){
        clearInterval(this.updator)
        this.setState({numerator:0})
        this.updator = setInterval(this.updateNumerator.bind(this), 200);
    }  

    //Counter
    updateNumerator(){
        var newNum = this.state.numerator + 1;
        if(newNum>this.state.denominator){
            newNum = this.state.denominator;
            clearInterval(this.updator);
        }
        this.setState({numerator:newNum})

    }
    countChanged (){
        console.log('====================================');
        console.log("countChanged");
        console.log('====================================');
    }

    countToMax (){
        console.log('====================================');
        console.log("countToMax");
        console.log('====================================');       
    }
    render(){
        return (
            <BasicPage bgColor = {this.props.bgColor}>
                
                <div
                    style={{width:'400px'}}
                >

                <PercentageCounter id ="PercentageCounter"
                    numerator={this.state.numerator} 
                    denominator={100} 
                    countChanged= {this.countChanged.bind(this)} 
                    countToMax= {this.countToMax.bind(this)} 
                />
                
                <TestBtn 
                style={{
                    width:'200px',
                    margin:'20px 20px'
                }} 
                onClick={this.startCount.bind(this)} 
                text='StartTimer'/>
                </div>
            </BasicPage>
        )
    }
}
BasicPage.protoTypes = {
    bgColor:PropTypes.strying
}


export default withRouter(ParcentageCounterPage)