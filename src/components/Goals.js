import React, { Component } from "react";
import GoalCards from './GoalCards'
import GoalForm from './GoalForm'
import {
    Grid,
    Typography,
    Button
  } from "@material-ui/core/";

  class Goals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                { id: 0, title: 1, date: 'May 1, 2020', desc: 13000 },
                { id: 1, title: 1, date: 'May 1, 2020', desc: 13000 }
          ],
            formOpen: false,
            currentId: null
        }
    
        // This binding is necessary to make `this` work in the callback
        this.addGoal = this.addGoal.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
      }

      handleClickOpen(id) {
        if(id){
            this.setState({currentId:id,formOpen:true})
        }
        else{
            var data = this.state.data;
            this.setState({currentId:data.length,formOpen:true})
        }
      };
    
      handleClose() {
        this.setState({currentId:null,formOpen:false})
      };

    addGoal(name,description,date){
        var data = this.state.data;
        var id = this.state.currentId;
        if(data.length<=id){
            data.push({ id: id, title: name, date: date, desc: description })
        }
        else {
            data[id].title = 'edit'
            data[id].desc = 'edit'
            data[id].date = 'May 1'
        }
        this.setState({data:data})
    }

    render() {
      return (
        <Grid
          container
          className="goals-container"
        >
            <Grid item xs={8}>
                <section className="home-top-container">
                <Typography variant="h5" className="home-title-container">
                    Business Goals
                </Typography>
                </section>
            </Grid>
            <Grid className="goals-actions" container item xs={4} justify="flex-end">
            <Grid item container xs={4} justify="flex-end">
                <Button>Search</Button>
            </Grid>
            <Grid item container xs={4} justify="flex-end">
                <GoalForm id={this.state.currentId} handleClose={this.handleClose} handleClickOpen={this.handleClickOpen} addGoal={this.addGoal} open={this.state.formOpen}></GoalForm>
            </Grid>
            </Grid>

            <Grid 
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
            className="goals-cards-container">
                <GoalCards data={this.state.data}></GoalCards>
            </Grid>
        </Grid>
      );
    }
  }
  
  export default Goals;
  