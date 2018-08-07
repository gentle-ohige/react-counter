import React,{Component} from 'react';
import PropTypes from 'prop-types'
import PullDownMenuCell from './OverlayMenuCell'

//Animation
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import './OverlayMenuStyle.css'

export default class OverlayMenuView extends Component{

    render (){

        const firstChild = props => {
            const childrenArray = React.Children.toArray(props.children);
            return childrenArray[0] || null;
          };

        let menu = 
            <div className="menu_view_style">    
                <div className="menu_view_touch_area" onClick = {this.props.onClickedFrame}/>
                <nav className="menu_list_wrap_style" >
                    {this.props.MenuList.map((btnData,index) => <PullDownMenuCell key={index} btnTittle={btnData.btnTittle} btnFuc={btnData.btnFuc}/>)}
                </nav>
                
             </div>
   
        console.log(this.props.MenuList);

        return (
                <div>
                <ReactCSSTransitionGroup transitionName = "pulldownmenu" transitionEnterTimeout={300} transitionLeaveTimeout={300}> 
                    {this.props.isMenuOpen && menu}
                 </ReactCSSTransitionGroup>
                </div>
        
        )
    }
}




OverlayMenuView.protoTypes = {
    isMenuOpen:PropTypes.bool.isRequired,
    onClickedFrame:PropTypes.func,
    MenuList:PropTypes.arrayOf(
        PropTypes.shape(
            {
                btnTittle:PropTypes.string.isRequired,
                btnFuc:PropTypes.func.isRequired
            }
        ).isRequired
    ).isRequired
}