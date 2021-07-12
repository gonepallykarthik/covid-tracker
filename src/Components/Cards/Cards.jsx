import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import Countup from "react-countup";
import classes from "./Card.module.css";

function Cards({ data: { confirmed, recovered, lastUpdate, deaths } }) {
  if (!confirmed) {
    return <p>Loading...</p>;
  }
  return (
    <div className={classes.container}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(classes.card, classes.infected)}
        >
          <CardContent>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              <Countup
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography variant="h6" color="textPrimary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(classes.card, classes.recovered)}
        >
          <CardContent>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              <Countup
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography variant="h6" color="textPrimary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(classes.card, classes.deaths)}
        >
          <CardContent>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              <Countup
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography variant="h6" color="textPrimary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
