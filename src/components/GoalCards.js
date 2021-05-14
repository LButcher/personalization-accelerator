import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardHeader
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function GoalCards(goalData) {

    var data=goalData.data
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.map((elem) => (
            <Grid item xs={6} key={elem.id}>
              <Card overflow="hidden" className="goal-card">
                <CardHeader
                  title={elem.title}
                  subheader={elem.date}
                />
                <CardContent>
                    {elem.desc}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    </div>
  );
}
