import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { css } from "emotion";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  nametextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  card: {
    maxWidth: 500
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 24
  },
  pos: {
    marginBottom: 12
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },

  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const sendEmail = (from, msg, name, setOpen, clear) => {
  // Load the AWS SDK for Node.js
  // Set the region
  AWS.config.update({
    region: "us-west-2",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  // Create sendEmail params
  var params = {
    Destination: {
      /* required */

      ToAddresses: [
        "sales@airbeamtech.com"
        /* more items */
      ]
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Text: {
          Charset: "UTF-8",
          Data: msg
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Sales Email ${name} ${from}`
      }
    },
    Source: "system@airbeamtech.com" /* required */,
    ReplyToAddresses: [
      "system@airbeamtech.com"
      /*
       from.toLowerCase()
      more items */
    ]
  };

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise();

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
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  const clear = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setMessage("")
  };
  function handleClose() {
    setOpen(false);
  }
  return (
    <div
      className={css`
        width: 40%;
      `}
    >
      <Typography variant="title" className={classes.title} color="textPrimary">
        Sales
      </Typography>

      <TextField
        id="outlined-name"
        label="Email"
        fullWidth
        className={classes.textField}
        value={email}
        onChange={e => setEmail(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <div
        className={css`
       
          
        `}
      >
      <div
      className={css`
      display: inline;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
      `}
      >
      <TextField
          id="outlined-name"
          label="First Name"
          className={classes.nametextField}
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Last Name"
          className={classes.nametextField}
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          margin="normal"
          variant="outlined"
        />

      </div>
      
      </div>

      <TextField
        id="outlined-name"
        label="Message"
        className={classes.textField}
        multiline
        rows="5"
        fullWidth
        value={message}
        onChange={e => setMessage(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <div
        className={css`
          margin-left: 10px;
        `}
      >
        <Button
          onClick={() =>
            sendEmail(
              email,
              message,
              `${firstName} ${lastName}`,
              setOpen,
              clear
            )
          }
          variant="contained"
          color={"primary"}
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
        <DialogTitle id="alert-dialog-title">{"Message Sent!"}</DialogTitle>
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);

/**
 </CardContent>

</Card>


    <Card className={classes.card}>
      <CardContent>

 * 
 * 
 *       <CardActions>
        <Button size="small">Submit</Button>
      </CardActions>
 * 
 * 
 */
