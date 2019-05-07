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
        <Grid item xs={12} sm={6}>
          <CardActionArea>
            <Paper className={classes.paper}>
              {' '}
              <Link to="/restoran">
                <img
                  style={{ width: '100%', height: '200px' }}
                  src="https://www.goodnewsfromindonesia.id/uploads/post/large-61658247234-go-food-846971cd9193ffd74180a532f479cdfe.jpg"
                />
              </Link>
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {' '}
            <img
              style={{ width: '100%', height: '200px' }}
              src="https://www.finansialku.com/wp-content/uploads/2015/09/Ngelamar-Jadi-Gojek-Bisa-Memberikan-Penghasilan-Lebih.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {' '}
            <img
              style={{ width: '100%', height: '200px' }}
              src="data:image/jpeg;base64,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klT9R09wTiDIBx3mjX8taSr7TTp7NbfqFopWo2Cr2/us272u+QR8RO3lbmjWnXPw7idVIu8kX12acvsZN20qQ/XOc/smBK7OJqh+6fmUX9zMDMrT3i8ZGfmMTVcT1K02oqkDPtOckYUdMjBHtEnv36TZ6Z1dQUIK+hGMfulNL62mNeEYnd3xKk03ijqdRw2nUiinz79Z9lQEutaZGQ75JPfp39c+nXZ8b5t4hy/oH1GoGistF1aKKGtdNr9G35IIbPaXJLIiQ3gXNV3MOvuq0yJ9j0/sW3kMTZcQc10kHGB6nB7f3gZMoCIiAiIgIiICIiAiIgR/nXhbcYpqqCFh9poZwrFCK1sBdgwIIwPcczB4pyz+TBRZw+gM1F5uasud1++myh82WE5fa4ILHHsgZAkuiBEKuGX8ft1Fuq0/kV2aVtKlTOjuwsLNa9nlkqo+6AAT2JOO0jOj5b4rqV0x1TZFr6ddVRuUjT16N0sqevBwS5rbfjPW1f8AtlqxiBAtFwt9DxHUXtwt7WfUBqtUr0AJW1FVTZVrQ3QizPsk4PrMXhnKNvDXp1YpZ7V1epNlLWbgar77dl9QZtiWIjK3TBILjuZY84xAgXK3Cn4XfcX4XYLLLtUTq99BU123PamR5u/BGwY25nzy7w7Wainh2nu0bUJo/Layx7KW8xqamrVKlqdjgs24s2MBexz0sDEQIjz9wpuJNo2GjbVV1XO1tStWpKtRain+sdQcOynv6TB0vL9ycK1+nXTmvzl1H2bTF0Y0q9QVKtwYqM2BmwCQN/fpJ5EDH0FXkVouMbUUY92FAx0kG5u4TrOH8Tp4nodMNVig6e2nzFrYDczB1Zunc/Ht8ciwYgUzRybxGzh1TGnGr0+vOrSl7EO9BghN4bAOR6kdj2m94BwriHGOI2cR1elGkK6X7PVV5i2sSW3byV6AZLdx6j3SycRE7wIlVy417bnyBnJB6lupJyd3ux1/GZbtqOF12tVQbSqsUpDKoc5G1VPXH6XWSLE4xM9MtSk6wjFIhRWn5B1ycH01T6MPZVrvPfTF0Bsq27Suc4ycds9j8pt+O8uXcT4XbRpOCnSOdRU/k+ZU3mBfvPnIAx26mW/icYmhJX/JPBNVyjrL9KlRfh9p82mzcv8A5dz96oqTu29MZAPZT6nFgzjE5gIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/2Q=="
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {' '}
            <img
              style={{ width: '100%', height: '200px' }}
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
