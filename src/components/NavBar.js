import {
    Typography
  } from "@material-ui/core";
  
  import { Link } from "react-router-dom";
  import React, { Component } from "react";
  import logo from "../bounteousLogo.svg";



  class NavBar extends Component {
    constructor(props) {
      super(props);
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      
    }
  
    isThisRoute(name){
        var route = window.location.pathname.substring(1,)
        return route==name;
    }

    handleClick(e) {
      //document.querySelector('#'+e.target.id).style.color= 'red'
      document.querySelectorAll(".navLink").forEach(function (element) {
        if (element.id === e.target.id) {
          element.classList.add("selectedNav");
        } else {
          element.classList.remove("selectedNav");
        }
      });
    }
  
    render() {
      return (
        <div className="navContainer">
          <div>
            <img className="logo" alt="bounteous logo" src={logo}></img>
          </div>
          <Typography className="nav-title-container">
            <Link
              id="HomeLink"
              to={"/"}
              className={this.isThisRoute('') ? "navLink selectedNav" : "navLink"}
              onClick={this.handleClick}
            >
              Home
            </Link>
            <Link
              id="GoalsLink"
              to={"/Goals"}
              className={this.isThisRoute('Goals') ? "navLink selectedNav" : "navLink"}
              onClick={this.handleClick}
            >
              Goals
            </Link>
            <Link
              id="InsightsLink"
              to={"/Insights"}
              className={this.isThisRoute('Insights') ? "navLink selectedNav" : "navLink"}
              onClick={this.handleClick}
            >
              Insights
            </Link>
            <Link
              id="AudiencesLink"
              to={"/Audiences"}
              className={this.isThisRoute('Audiences') ? "navLink selectedNav" : "navLink"}
              onClick={this.handleClick}
            >
              Audiences
            </Link>
            <Link
              id="JourneysLink"
              to={"/Journeys"}
              className={this.isThisRoute('Journeys') ? "navLink selectedNav" : "navLink"}
              onClick={this.handleClick}
            >
              Journeys
            </Link>
            <Link
              id="TestsLink"
              to={"/Tests"}
              className="navLink"
              onClick={this.handleClick}
            >
              Tests
            </Link>
          </Typography>
        </div>
      );
    }
  }
  
  export default NavBar;
  