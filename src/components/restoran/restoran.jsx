import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CardActionArea } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
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
      <h1>Pilih restoran</h1>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <CardActionArea>
            <Paper className={classes.paper}>
              <img
                style={{ width: '100%', height: '350px' }}
                src="http://stefantraveling.com/wp-content/uploads/2019/01/Resto-Sumber-Hidup.jpg"
              />
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardActionArea>
            <Paper className={classes.paper}>
              <img
                style={{ width: '100%', height: '350px' }}
                src="https://b.zmtcdn.com/data/pictures/0/18285100/5c728a53f34edc107b73ac39b79790eb_featured_v2.jpg"
              />
            </Paper>
          </CardActionArea>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <CardActionArea>
            <Paper className={classes.paper}>
              <img
                style={{ width: '100%', height: '350px' }}
                src="https://hardrockfm.com/wp-content/uploads/2015/06/kongkow.jpg"
              />
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardActionArea>
            <Paper className={classes.paper}>
              <img
                style={{ width: '100%', height: '350px' }}
                src="https://www.yogyes.com/en/places/sleman/mcdonald-jl-laksda-adisucipto/1.jpg"
              />
            </Paper>
          </CardActionArea>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
