import React, { Component } from "react";
import {
    Typography,
    InputLabel,
    FormControl,
    MenuItem,
    Select
  } from "@material-ui/core";
  

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        journey: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    console.log("hi")
  }

  render() {
    return (
        <div className="homeContainer">
            <section className="home-top-container">
                <Typography variant="h4" className="home-title-container">
                    Performance
                </Typography>

                <div className="home-settings-container">
                    <FormControl>
                    <InputLabel id="Journey-selector">Journey</InputLabel>
                        <Select
                        labelId="journey-select-label"
                        id="journey-select"
                        value={this.state.journey}
                        onChange={this.handleChange}
                        >
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'Test'}>Test</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </section>
            <hr className="home-seperator"></hr>
        </div>
    );
  }
}

export default Home;
