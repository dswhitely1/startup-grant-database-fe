import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import { dialogStyles } from "../../styles/dialogStyles";
import { submitSuggestion } from "../../actions/index";

const AddModeratorDialog = props => {
  const [suggestion, setSuggestion] = React.useState({
    subject: "",
    suggestion: ""
  });

  const [open, setOpen] = React.useState(false);

  const classes = dialogStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSuggestion("");
  };

  const handleChanges = name => ({ target: { value } }) => {
    setSuggestion({
      ...suggestion,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const sendObject = {
      subject: suggestion.subject,
      suggestion: suggestion.suggestion,
      grant_id: props.id
    };
    console.log("OBJECT BEING SENT TO ACTION", sendObject);
    // props.submitSuggestion(sendObject);
    handleClose();
    setSuggestion("");
  };

  return (
    <>
      <Button
        className={classes.applyButton}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Role Management
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          className={classes.header}
        >
          <Grid item>
            <DialogTitle className={classes.headerText}>
              <Typography variant="h5">Moderator Management </Typography>
            </DialogTitle>
          </Grid>
          <Grid item>
            <DialogContentText className={classes.headerText}>
              Enter a user email to change the user role and access level.
            </DialogContentText>
          </Grid>
        </Grid>
        <DialogContent>
          <form>
            <br />
            <TextField
              margin="normal"
              label="Enter email"
              onChange={handleChanges("subject")}
              variant="outlined"
            />
            <br />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Role</InputLabel>
              <Select
                native
                // value={state.age}
                // onChange={handleChange("role")}
                inputProps={{
                  name: "Role",
                  id: "outlined-age-native-simple"
                }}
              >
                <option value="" />
                <option value="User">User</option>
                <option value="Moderator">Moderator</option>
                <option value="Admin">Admin</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Grid container justify="center">
            <Grid item>
              <Button
                color="secondary"
                variant="outlined"
                onClick={handleClose}
                className={classes.btn}
              >
                Cancel
              </Button>
            </Grid>
            <Grid>
              <Button
                color="primary"
                variant="outlined"
                onClick={handleSubmit}
                className={classes.btn}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default connect(null, { submitSuggestion })(AddModeratorDialog);
