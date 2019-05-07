import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800]
    }
  }
});
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <HomeIcon
              className={classes.iconHover}
              color="error"
              style={{ fontSize: 30 }}
            />
          </Link>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Go Jek
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
