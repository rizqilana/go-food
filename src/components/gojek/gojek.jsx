import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CardActionArea } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '50px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={3}>
          <CardActionArea>
            <Paper className={classes.paper}>
              {' '}
              <Link to="/restoran">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://www.goodnewsfromindonesia.id/uploads/post/large-61658247234-go-food-846971cd9193ffd74180a532f479cdfe.jpg"
                />
              </Link>
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            {' '}
            <img
              style={{ width: '100%', height: '100%' }}
              src="https://www.goodnewsfromindonesia.id/uploads/post/large-61658247234-go-food-846971cd9193ffd74180a532f479cdfe.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            {' '}
            <img
              style={{ width: '100%', height: '100%' }}
              src="https://www.goodnewsfromindonesia.id/uploads/post/large-61658247234-go-food-846971cd9193ffd74180a532f479cdfe.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            {' '}
            <img
              style={{ width: '100%', height: '100%' }}
              src="https://www.goodnewsfromindonesia.id/uploads/post/large-61658247234-go-food-846971cd9193ffd74180a532f479cdfe.jpg"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
