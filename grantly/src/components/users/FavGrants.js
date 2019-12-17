import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    border: "1, solid, black"
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    textAlign: "center",
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function FavGrants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Favorite Grants
        </Typography>
        <div className={classes.demo}>
          <List>
            <ListItem>
              <ListItemText primary="Grant Item One" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary="Grant Item Two" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </div>
  );
}
