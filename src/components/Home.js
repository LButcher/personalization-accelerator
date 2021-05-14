import React, { Component } from "react";
import {
    Typography,
  } from "@material-ui/core";
import { Bar, Doughnut } from 'react-chartjs-2';
import * as utils from '../js/homeControl.js'
import HomeFilters from './HomeFilters';



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        journey: 'All',
        audience: 'All',
        data: utils.getChart()
    }
    this.handleJourneyChange = this.handleJourneyChange.bind(this);
    this.handleAudienceChange = this.handleAudienceChange.bind(this);
    this.getChartData = this.getChartData.bind(this)
  }

  componentDidUpdate(prevProps,prevState) {
    if(this.state.journey !== prevState.journey || this.state.audience !== prevState.audience){
        this.getChartData()
    }
  }

  handleJourneyChange(e,v,reason){
    if(v ===null || v===''){
        this.setState({journey:'All'})
    }
    else
        this.setState({journey:v})
  }

  handleAudienceChange(e,v){
    if(v ===null || v===''){
        this.setState({audience:'All'})
    }
    else
        this.setState({audience:v})
  }

  getChartData(){
      var chart;
      if(this.state.journey==='Form Submit' && this.state.audience==='All'){
        chart = utils.getChart('formSubmitChart');
      }
      else if(this.state.journey==='Form Submit' && this.state.audience==='Decision Makers'){
        chart = utils.getChart('bothChart');
      }
      else if(this.state.journey==='All' && this.state.audience==='Decision Makers'){
        chart = utils.getChart('decMakerChart');
      }
      else {
        chart = utils.getChart('defaultChart');
      }
      this.setState({data:chart})
  }


  render() {

    return (
        <div className="homeContainer">
            <section className="home-top-container">
                <Typography variant="h5" className="home-title-container">
                    Personalization Performance
                </Typography>
                <HomeFilters handleAudienceChange={this.handleAudienceChange} handleJourneyChange={this.handleJourneyChange} audience={this.state.audience} journey={this.state.journey}></HomeFilters>
            </section>
            <hr className="home-seperator"></hr>

            <section className="dashboard-container">
                <div className="test-summary-preview">
                    <div className="test-summary">
                <Typography variant="h6" className="home-test-title">
                    Tests
                </Typography>
                <Typography variant="h6" className="home-test-sub">
                    {utils.getChartTotal()+' Launched'}
                </Typography>
                <Typography variant="h6" className="home-test-sub">
                    {utils.getChartTotal()+' Completed'}
                </Typography>
                <Typography variant="h6" className="home-test-sub">
                    {Math.round(utils.getChartTotal()/2)+' Won'}
                </Typography>
                </div>
                <div className="test-summary-chart-container">
                    <div className="test-summary-chart-details">
                    <Typography variant="h6" className="home-test-sub">
                    {Math.round(((utils.getChartTotal()/2)/utils.getChartTotal())*100)+'% Wins'}
                </Typography>
                    </div>
                    <div className="test-summary-chart">
                        <Doughnut options={utils.pieChartOptions} data={utils.pieData} /> 
                    </div>
                </div>
                </div>
            
                <div className="dashboard-chart">
                <Typography variant="h6" className="home-chart-title">
                    Tests Launched
                </Typography>
                    <Bar height={'75%'} options={utils.chartOptions} data={this.state.data} /> 
                </div>
            </section>
            <hr className="home-seperator"></hr>
            <section className="home-goals-container">
            <Typography variant="h6" className="home-goals-title">
                    Goal Performance
                </Typography>
                <Typography variant="h6" className="home-test-sub">
                    +13% Revenue
                </Typography>
                <Typography variant="h6" className="home-test-sub">
                    +12% Engagement
                </Typography>
            </section>
        </div>
    );
  }
}

export default Home;
