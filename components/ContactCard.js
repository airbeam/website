import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { css } from 'emotion';

const styles = (theme) => ({
  container : {
    display  : 'flex',
    flexWrap : 'wrap'
  },
  textField : {
    marginLeft  : theme.spacing.unit,
    marginRight : theme.spacing.unit
  },
  dense     : {
    marginTop : 16
  },
  menu      : {
    width : 200
  },
  card      : {
    marginLeft : 200
    // marginTop  : 30
    //  maxWidth   : '30%'
    // width: 100
  },
  bullet    : {
    display   : 'inline-block',
    margin    : '0 2px',
    transform : 'scale(0.8)'
  },
  title     : {
    fontSize : 24
  },
  pos       : {
    marginBottom : 12
  },
  container : {
    display  : 'flex',
    flexWrap : 'wrap'
  },
  textField : {
    marginLeft  : theme.spacing.unit,
    marginRight : theme.spacing.unit
  },
  dense     : {
    marginTop : 16
  },
  menu      : {
    width : 200
  }
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div
      className={css`
        margin-left: 200px;
        @media (max-width: 420px) {
          margin-top: 20px;
          margin-left: 120px;
        }
      `}
    >
      <Typography className={classes.title} color="textPrimary">
        Contact Us
      </Typography>
      <br />
      <Typography color="textPrimary">
        21320 Gordon Way #125
        <br />
        Richmond, BC V6W 1J8 <br />
        Canada
      </Typography>
      <br />
      <a
        className={css`
          color: #6b6b6d;
          font-weight: bold;
          font: outline;
          text-decoration: none;
        `}
        href="tel:+17783388047"
        target="_top"
      >
        Phone:+1-778-338-8047
      </a>
 
      <br />
      <br />
      <a
        className={css`
          color: #6b6b6d;
          font-weight: bold;
          font: outline;
          text-decoration: none;
        `}
        href="mailto:sales@airbeamtech.com?Subject=Sales%20inquiry"
        target="_top"
      >
        sales@airbeamtech.com
      </a>
    </div>
  );
}

SimpleCard.propTypes = {
  classes : PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
