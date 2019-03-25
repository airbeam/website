import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { css } from 'emotion';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = (theme) => ({
  container     : {
    display  : 'flex',
    flexWrap : 'wrap'
  },
  textField     : {
    marginLeft  : theme.spacing.unit,
    marginRight : theme.spacing.unit * 2
  },
  nametextField : {
    marginLeft  : theme.spacing.unit,
    marginRight : theme.spacing.unit * 2
  },
  dense         : {
    marginTop : 16
  },
  menu          : {
    width : 200
  },
  card          : {
    maxWidth : 500
  },
  bullet        : {
    display   : 'inline-block',
    margin    : '0 2px',
    transform : 'scale(0.8)'
  },
  title         : {
    fontSize : 18
  },
  pos           : {
    marginBottom : 12
  },
  container     : {
    display  : 'flex',
    flexWrap : 'wrap'
  },

  dense         : {
    marginTop : 16
  },
  menu          : {
    width : 200
  }
});

const sendEmail = (from, msg, name, setOpen, clear) => {
  // Load the AWS SDK for Node.js
  // Set the region
  AWS.config.update({
    region          : 'us-west-2',
    accessKeyId     : process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
  });

  // Create sendEmail params
  var params = {
    Destination      : {
      /* required */

      ToAddresses : [
        'sales@airbeamtech.com'
        /* more items */
      ]
    },
    Message          : {
      /* required */
      Body    : {
        /* required */
        Text : {
          Charset : 'UTF-8',
          Data    : msg
        }
      },
      Subject : {
        Charset : 'UTF-8',
        Data    : `Sales Email ${name} ${from}`
      }
    },
    Source           : 'sales@airbeamtech.com' /* required */,
    ReplyToAddresses : [
      from
      /*
       from.toLowerCase()
      more items */
    ]
  };

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(function(data) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
      clear();

      console.log(data.MessageId);
    })
    .catch(function(err) {
      console.error(err, err.stack);
    });
};

function SimpleCard(props) {
  const { classes } = props;
  const [
    email,
    setEmail
  ] = useState('');
  const [
    firstName,
    setFirstName
  ] = useState('');

  const [
    lastName,
    setLastName
  ] = useState('');

  const [
    message,
    setMessage
  ] = useState('');

  const [
    open,
    setOpen
  ] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  const clear = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setMessage('');
  };
  function handleClose() {
    setOpen(false);
  }
  return (
    <div
      className={css`
        max-width: 40%;
        margin-left: 100px;
        
      `}
    >
      <Typography className={classes.title} color="textPrimary">
      Get in touch with our dedicated support team for more information.
      </Typography>

      <TextField
        id="outlined-name"
        label="Email"
        className={css`
          margin-left: 20px;
          width: 90%;
          @media (max-width: 420px) {
            width: 100%;
          }
        `}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="First Name"
        className={css`
          margin-left: 20px;
          @media (max-width: 420px) {
            width: 100%;
          }
        `}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Last Name"
        className={css`
          margin-left: 20px;
          @media (max-width: 420px) {
            width: 100%;
          }
        `}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Message"
        className={css`
          margin-left: 20px;
          width: 90%;
          @media (max-width: 420px) {
            width: 100%;
          }
        `}
        multiline
        rows="5"
        //  fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <div className={css`margin-left: 20px;`}>
        <Button
          className={css`
            margin-top: 10px;
            @media (max-width: 420px) {
              width: 100%;
            }
          `}
          onClick={() => sendEmail(email, message, `${firstName} ${lastName}`, setOpen, clear)}
          variant="contained"
          color={'primary'}
        >
          Submit
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Message Sent!'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your message has been sent, someone will contact you promptly.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

SimpleCard.propTypes = {
  classes : PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
