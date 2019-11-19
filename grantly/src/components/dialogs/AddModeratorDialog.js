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
import { submitRole } from "../../actions/index";

const AddModeratorDialog = props => {
  const [role, setRole] = React.useState({
    subject: "",
    role: ""
  });

  const [open, setOpen] = React.useState(false);

  const classes = dialogStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRole("");
  };

  const handleChanges = name => ({ target: { value } }) => {
    setRole({
      ...role,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const sendObject = {
      subject: role.subject,
      role: role.role
    };
    console.log("OBJECT BEING SENT TO ACTION", sendObject);
    // props.submitSuggestion(sendObject);
    handleClose();
    setRole("");
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
                value={role.role}
                onChange={handleChanges("Roles")}
                inputProps={{
                  name: "Roles",
                  id: "userRole"
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

// export default connect(null, { submitRole })(AddModeratorDialog);
export default AddModeratorDialog;
