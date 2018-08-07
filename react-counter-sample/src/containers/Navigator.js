import React, { Component } from "react";
import {
    Link
  } from 'react-router-dom'
export default class Navigator extends Component {

    render (){
        return (
            <ul style={styles.nav}>
              <NavLink to = "/page01" >Page01</NavLink>
              <NavLink to = "/page02" >Page02</NavLink>
              <NavLink to = "/page03" >Page03</NavLink>
              <NavLink to = "/page04" >Page04</NavLink>
              <NavLink to = "/page05" >Page05</NavLink>
            </ul>
        );
    }
   
}


const NavLink = (props) => (
    <li style={styles.nav_item}>
      <Link {...props} style={{ color: 'inherit' }}/>
    </li>
  )


const styles = {}
styles.nav = {
    padding: 0,
    margin: 0,
    position: 'absolute',
    top: 0,
    height: '40px',
    width: '100%',
    display: 'flex',
    zIndex:20,
    background:'#FFEB3B'
}

styles.nav_item = {
    textAlign: 'center',
    flex: 1,
    listStyleType: 'none',
    padding: '10px'
    
}