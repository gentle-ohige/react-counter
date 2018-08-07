import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TransitionGroup, Transition,CSSTransition } from 'react-transition-group'
import './PercentageCounter.css'

class PercentageCounter extends Component {

    constructor(props){
        super()
        this.percentage = 0;    
    }

    
    componentDidMount(){
     //   console.log('PercentageCounter componentDidMount');
    }


    componentWillUpdate(){
       // console.log('PercentageCounter componentWillUpdate');
    }


    
    //Add num in Animation
    render(){
          var percentage = Math.round(this.props.numerator/this.props.denominator * 100);
          var degit_3= Math.floor(percentage/100);
          var degit_2= Math.floor((percentage - degit_3 * 100)/10);
          var degit_1= Math.floor(percentage - degit_2 * 10 - degit_3 * 100);

          if(this.percentage != percentage){
              this.percentage = percentage;
              if(this.props.countChanged){
                this.props.countChanged(percentage);
              }
              
          }

          if(percentage > 100){
            degit_3 = 1;
            degit_3 = 0;
            degit_3 = 0;
            if(this.props.countToMax){
                this.props.countToMax();
            }
          }
      
   
          return ( 
            <div className="percentage_counter">
            <div className="whole">       
                    <DecimalCounter degit={degit_3}/>
                    <DecimalCounter degit={degit_2}/>
                    <DecimalCounter degit={degit_1}/>
                    <div className={"couter_wrap denominator"}>
                        <p className={"degital_style denominator"}>%</p>
                    </div>
            
            </div>
           
                
            <button onClick ={()=>{
                console.log("AnitmationTest")
    
            }}>
                AnitmationTest : {percentage}
            </button>
            </div>
       )
    }

}

//DegitalCounter
class DecimalCounter extends Component {
   
    
    constructor(props){
        super(props);
        this.numbers =[];
        for(var i = 0 ; i < 10 ; i++){
            this.numbers.push({decimal:i,show:false});
        }
    }

    render()
    {
        var index = Math.round(this.props.degit);
        index = index < 0 ? 0: index;
        index = index > 9 ? 9: index;

        this.numbers.forEach((element)=>{
           // console.log(element);
            if(element.decimal == index){
                element.show = true;
            }else{
                element.show = false;
            }
        })

        
        return (
            <div className="couter_wrap">
                <TransitionGroup>
                {this.numbers.map(item=>{
                   return  <Decimal show={item.show} degit={item.decimal} key={item.decimal}/>  
                  })}
                   
                </TransitionGroup>
            </div>
        )
    }

  
} 
function Decimal (props){
    
    return (
 
        <CSSTransition
            in={props.show}
            key = {props.degit}
            timeout={{enter:500,exit:500}}
            classNames="numeratordegi"
            enter ={true}
            exit = {true}
            onExited={() => {

            }}
            mountOnEnter
            unmountOnExit
            >
        {
            <p className='degital_style'>{props.degit}</p> 
        }
        </CSSTransition> 
    )
    
}

PercentageCounter.propTypes = {
    numerator:PropTypes.number.isRequired,
    denominator:PropTypes.number.isRequired,
    countChanged:PropTypes.func,
    countToMax:PropTypes.func,
}


export default PercentageCounter