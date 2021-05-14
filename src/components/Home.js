import React, { Component } from "react";
import {
    Typography,
    TextField
  } from "@material-ui/core";
  import Autocomplete from '@material-ui/lab/Autocomplete';

  

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        journey: null,
        audience: null
    }

    this.handleJourneyChange = this.handleJourneyChange.bind(this);
    this.handleAudienceChange = this.handleAudienceChange.bind(this);
  }

  handleJourneyChange(e,v){
    this.setState({journey:v})
  }

  handleAudienceChange(e,v){
    this.setState({audience:v})
  }

  journeys = ['All','Form Submit']
  audiences = ['All', 'Unknown', 'Decision Makers']
  teams = ['All']
  channels = ['All']
  brands = ['All']
  time = ['Past Year']

  render() {
    return (
        <div className="homeContainer">
            <section className="home-top-container">
                <Typography variant="h4" className="home-title-container">
                    Performance
                </Typography>

                <div className="home-settings-container">
                <Autocomplete
                        className="home-performance-dropdown"
                        id="teams"
                        options={this.teams}
                        getOptionLabel={(journey) => journey}
                        style={{ width: 200 }}
                        defaultValue= {"All"}
                        renderInput={(params) => <TextField {...params} label="Team" variant="outlined" className=""/>}
                        />
                        <Autocomplete
                        className="home-performance-dropdown"
                        id="brands"
                        options={this.brands}
                        getOptionLabel={(brand) => brand}
                        style={{ width: 200 }}
                        defaultValue= {"All"}
                        renderInput={(params) => <TextField {...params} label="Brand" variant="outlined" className=""/>}
                        />
                        <Autocomplete
                        className="home-performance-dropdown"
                        id="channels"
                        options={this.channels}
                        getOptionLabel={(channel) => channel}
                        style={{ width: 200 }}
                        defaultValue= {"All"}
                        renderInput={(params) => <TextField {...params} label="Channel" variant="outlined" className=""/>}
                        />
                    <Autocomplete
                        className="home-performance-dropdown"
                        id="journeys"
                        onChange={this.handleJourneyChange}
                        options={this.journeys}
                        getOptionLabel={(journey) => journey}
                        style={{ width: 200 }}
                        defaultValue= {"All"}
                        renderInput={(params) => <TextField {...params} label="Journey" variant="outlined" className=""/>}
                        />
                        <Autocomplete
                        className="home-performance-dropdown"
                        id="audiences"
                        onChange={this.handleAudienceChange}
                        options={this.audiences}
                        getOptionLabel={(audience) => audience}
                        style={{ width: 200 }}
                        defaultValue= {"All"}
                        renderInput={(params) => <TextField {...params} label="Audience" variant="outlined"/>}
                        />
                        <Autocomplete
                        className="home-performance-dropdown"
                        id="date-range"
                        options={this.time}
                        getOptionLabel={(time) => time}
                        style={{ width: 200 }}
                        defaultValue= {"Past Year"}
                        renderInput={(params) => <TextField {...params} label="Date Range" variant="outlined"/>}
                        />
                </div>
            </section>
            <hr className="home-seperator"></hr>
        </div>
    );
  }
}

export default Home;
