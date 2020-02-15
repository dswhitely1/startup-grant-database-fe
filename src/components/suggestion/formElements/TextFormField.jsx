import React from "react";
import { Grid, TextField, MenuItem } from "@material-ui/core";

export const TextFormField = props => {
  // console.log("the data prop => ", props.data);
  return (
    <Grid item xs={12} sm={props.sm}>
      <TextField
        fullWidth
        select={props.select}
        multiline={props.multiline}
        rows={props.rows}
        variant={props.variant}
        label={props.label}
        type={props.type}
        name={props.name}
        placeholder={props.label}
        InputLabelProps={props.inputLabel}
        value={props.values[props.name]}
        onChange={props.handleChanges}
      >
        {props.data.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};
