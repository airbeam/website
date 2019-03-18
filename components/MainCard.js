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

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const sendEmail = (from, msg, name) => {
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
        Data: `Sales Email ${name}`
      }
    },
    Source: from /* required */,
    ReplyToAddresses: [
      from
      /* more items */
    ]
  };

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(function(data) {
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

  return (
    <div
      className={css`
        max-width: 50%;
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
      <TextField
        id="outlined-name"
        label="First Name"
        className={classes.textField}
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Last Name"
        className={classes.textField}
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        margin="normal"
        variant="outlined"
      />
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
          onClick={() => sendEmail(email, message, `${firstName} ${lastName}`)}
          variant="contained"
          color={"primary"}
        >
          Submit
        </Button>
      </div>
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
