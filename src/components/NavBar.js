import {
    Toolbar,
    AppBar,
    Typography,
    Button,
    Tabs,
    Tab,
}
    from '@material-ui/core';
    
import {
    Link
  } from 'react-router-dom';
import React, { Component } from 'react';
import logo from '../bounteousLogo.svg'



class NavBar extends Component {

    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(e){
        //document.querySelector('#'+e.target.id).style.color= 'red'
        document.querySelectorAll('.navLink').forEach(function(element){
                if(element.id == e.target.id){
                    element.classList.add('selectedNav')
                }
                else{
                    element.classList.remove('selectedNav')
                }
        });
    }

    render() {
        return (
                    <div className="navContainer">
                        <div>
                            <img className="logo" src={logo}></img>
                        </div>
                        <Typography variant="h6" className="nav-title-container">
                        <Link id="HomeLink" to={'/'} className="navLink" onClick={this.handleClick}>Home</Link>
                        <Link id="AudienceLink" to={'/Audiences'} className="navLink" onClick={this.handleClick}>Audiences</Link>
                        <Link id="InsightsLink" to={'/Insights'} className="navLink" onClick={this.handleClick}>Insights</Link>
                        <Link id="TestsLink" to={'/Tests'} className="navLink" onClick={this.handleClick}>Tests</Link>
                        <Link id="GoalsLink" to={'/Goals'} className="navLink" onClick={this.handleClick}>Goals</Link>
                        <Link id="IdeasLink" to={'/Ideas'} className="navLink" onClick={this.handleClick}>Ideas</Link>
                        </Typography>
                    </div>
        )
    }
}


export default NavBar;