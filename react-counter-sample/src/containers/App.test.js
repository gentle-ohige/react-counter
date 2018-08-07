import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'


import './App.css'
//Page

import BasicPage from './page/BasicPage'
import Navigator  from '../containers/Navigator'


const TRASITION_STATUS = {
  INIT:"INIT",
  PUSH:"PUSH",
  POP:"POP",
  RELOAD:"RELOAD",
  MAINTAIN:"MAINTAIN",
  UNDEFINE:"UNDEFINE"
}

const TRANSTION_ANIMATION={
  FADE:"fade",
  SLIDE_LEFT:"slideLeft",
  SLIDE_RIGHT:"slideRight",
  MAINTAIN:"maintain"
 }
// const browserHistory = useRouterHistory(createHistory)({ basename: '/sample-app' })

function getPathDepth(location) {
  let pathArr = (location || {}).pathname.split('/');
  pathArr = pathArr.filter(n => n !== '');
  console.log(pathArr);
  return pathArr.length;
}

class App extends Component {

  constructor(props){
    super()

    //setting location in state cause infinite exception
    this.preHistory = undefined;
   
    this.transitionSatus = "";

    this.state = {
      prevDepth: getPathDepth(props.location),
    }

 
  }

  componentWillMount(){
  
  }
 
  componentWillReceiveProps(){
    console.log("on route change");
    this.setState({ prevDepth: getPathDepth(this.props.location) })
  }
  
  render() {
    this.props.history.listen((location, action) => {
      console.log("on route change");
    });
    
    return (
      <Router>
        
        <Route  render={
          (props)=>(
            <div>
              <Route exact path="/" render={() => (
                 <Redirect to="/page01"/>
              )}/>
              <div>{this.eUpdateTrasitionStatus(props)}</div>

              
              <Navigator/>
              
              <TransitionGroup>
              <CSSTransition
              key={props.location.pathname.split('/')[1]}
              timeout={500}
              classNames={ getPathDepth(props.location) - this.state.prevDepth > 0 ? 'pageSliderLeft' : 'pageSliderRight' }
              mountOnEnter={true}
              unmountOnExit={true}
            >
                    <Switch location={props.location}>
                      <Route exact path="/page01" render={()=>(
                        <BasicPage pageName="Page_01" bgColor="#A5D6A7"/>
                      )}/>
                      <Route exact path="/page02" render={()=>(
                        <BasicPage pageName="Page_02" bgColor="#66BB6A"/>
                      )}/>
                      <Route exact path="/page03" render={()=>(
                        <BasicPage pageName="Page_03" bgColor="#FFF59D"/>
                      )}/>
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </CSSTransition>
                  
               </TransitionGroup>
          </div>
          )}
        />
      </Router>
    )
  }

  
  eUpdateTrasitionStatus(routerProps){
    console.log(routerProps);
    // this.transitionSatus = this.fCheckRouterStatus(routerProps,this.preHistory);
    // this.preHistory = routerProps
  }


  fGetAnimeFromTranStatus(transtatus){
    var animation = TRANSTION_ANIMATION.MAINTAIN;
    switch(transtatus){
      case TRASITION_STATUS.INIT:
          animation = TRANSTION_ANIMATION.MAINTAIN;
      break;
      case TRASITION_STATUS.PUSH:
          animation = TRANSTION_ANIMATION.SLIDE_LEFT;
      break;
      case TRASITION_STATUS.POP:
          animation = TRANSTION_ANIMATION.SLIDE_RIGHT;
      break;
      case TRASITION_STATUS.RELOAD:
          animation = TRANSTION_ANIMATION.FADE;
      break;
      case TRASITION_STATUS.MAINTAIN:
          animation = TRANSTION_ANIMATION.MAINTAIN;
      break;
      case TRASITION_STATUS.UNDEFINE:
      break;

      default :
      break;
      
    }
    return animation;
    
  }

  fCheckRouterStatus (routerProps,preRouterProps){
    console.log("******************************");
    console.log("------ location -------");
    console.log(routerProps);
    console.log("------ prelocation -------");
    console.log(preRouterProps);
  
    
    var transitionSatus = TRASITION_STATUS.UNDEFINE
    switch(routerProps.history.action){
      case "PUSH" :
      //CheckPathName
      if(routerProps.location.pathname === preRouterProps.location.pathname ){
        console.log("PUSH 01");
        transitionSatus = TRASITION_STATUS.MAINTAIN
      }
       //CheckLocation
      if(routerProps.location.key === preRouterProps.location.key){
        console.log("PUSH 02");
        transitionSatus =  TRASITION_STATUS.POP
      }else{
        console.log("PUSH 03");
        transitionSatus = TRASITION_STATUS.PUSH
      }
     break;
      case "POP" :
         if(preRouterProps === undefined){
          transitionSatus =  TRASITION_STATUS.INIT
          console.log("POP 01");
         }else{
          console.log("POP 02");
          transitionSatus =  TRASITION_STATUS.POP
         }
       break;
     
      default :
      break;
    }
    //console.log(transitionSatus);
    console.log("******************************");
    return transitionSatus
  }
}
const styles = {}
styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

export default withRouter(App)