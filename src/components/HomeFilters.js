import React, { Component } from "react";
import {
    TextField
  } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

  
  class HomeFilters extends Component {
    journeys = ['All','Form Submit']
    audiences = ['All', 'Decision Makers']
    teams = ['All']
    channels = ['All']
    brands = ['All']
    time = ['Past Year']

    render() {
      return (
        <div className="home-settings-container">
        <Autocomplete
                className="home-performance-dropdown"
                id="teams"
                options={this.teams}
                getOptionLabel={(team) => team}
                style={{ width: 180 }}
                defaultValue= {"All"}
                renderInput={(params) => <TextField {...params} label="Team" variant="outlined" className=""/>}
                />
                <Autocomplete
                className="home-performance-dropdown"
                id="brands"
                options={this.brands}
                getOptionLabel={(brand) => brand}
                style={{ width: 180 }}
                defaultValue= {"All"}
                renderInput={(params) => <TextField {...params} label="Brand" variant="outlined" className=""/>}
                />
                <Autocomplete
                className="home-performance-dropdown"
                id="channels"
                options={this.channels}
                getOptionLabel={(channel) => channel}
                style={{ width: 180 }}
                defaultValue= {"All"}
                renderInput={(params) => <TextField {...params} label="Channel" variant="outlined" className=""/>}
                />
            <Autocomplete
                className="home-performance-dropdown"
                id="journeys"
                onChange={this.props.handleJourneyChange}
                value = {this.props.journey}
                options={this.journeys}
                getOptionLabel={(journey) => journey!=null ? journey : 'All'}
                style={{ width: 180 }}
                defaultValue= {"All"}
                renderInput={(params) => <TextField {...params} label="Journey" variant="outlined" className=""/>}
                />
                <Autocomplete
                className="home-performance-dropdown"
                id="audiences"
                value = {this.props.audience}
                onChange={this.props.handleAudienceChange}
                options={this.audiences}
                getOptionLabel={(audience) => audience}
                style={{ width: 180 }}
                defaultValue= {"All"}
                renderInput={(params) => <TextField {...params} label="Audience" variant="outlined"/>}
                />
                <Autocomplete
                className="home-performance-dropdown"
                id="date-range"
                options={this.time}
                getOptionLabel={(time) => time}
                style={{ width: 180 }}
                defaultValue= {"Past Year"}
                renderInput={(params) => <TextField {...params} label="Date Range" variant="outlined"/>}
                />
        </div>
      );
    }
  }
  
  export default HomeFilters;
  