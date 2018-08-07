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
import BasicPage from '../components/page/BasicPage'
import Navigator  from './Navigator'

//Container
import ParcentageCounterPage from './Pages/ParcentageCounterPage'

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
  //console.log(location.pathname.split('/')[1]);
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

    console.log("root upadate");
    
    return (
      <Router>
        
        <Route  render={
          (props)=>(
            <div>
              <Route exact path="/" render={() => (
                 <Redirect to="/page01"/>
              )}/>
              <Navigator/>
              
              <TransitionGroup>
              <CSSTransition
              key={props.location.pathname.split('/')[1]}
              timeout={500}
              classNames={ getPathDepth(props.location) - this.state.prevDepth > 0 ? 'slideLeft' : 'slideRight' }
              mountOnEnter={true}
              unmountOnExit={true}>
                    <Switch location={props.location}>
                      <Route  path="/page01" render={()=>(
                        <ParcentageCounterPage pageName="Page_01" bgColor="#A5D6A7"/>
                      )}/>
                      <Route  path="/page02" render={()=>(
                        <BasicPage pageName="Page_02" bgColor="#66BB6A"/>
                      )}/>
                      <Route  path="/page03" render={()=>(
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

}


const styles = {}
styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps() {
    return {};
}

export default withRouter(App);