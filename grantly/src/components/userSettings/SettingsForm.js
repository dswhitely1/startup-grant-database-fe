import React, { useState, Fragment } from 'react'
import { connect } from "react-redux";
import { useAuth0 } from "../../react-auth0-wrapper";

// material / desgin imports
import { Grid, Typography, TextField, Divider, Button } from "@material-ui/core";
import formStyles from "../../styles/formStyles";

import {updateUser} from '../../actions'
const initialState = {
    first_name: '',
    last_name: '',
    country: '',
    state: '',
    city: '',
    street: '',
    apartment: '',
    postal: ''
}
const SettingsForm = (props) => {
    const styles = formStyles();

    const [userInfo, setUserInfo] = useState(initialState)

    const handleChanges = e => {
        e.preventDefault();
        setUserInfo({
          ...userInfo,
          [e.target.name]: e.target.value
        });
      };

      const submitUserUpdates = e => {
        e.preventDefault();
      }
    return (
        <Fragment>
            {/* props.user.map here */}
            <Typography variant="h5" className={styles.subjectHeader}>
                <h1>Name Here's Settings</h1>
            </Typography>
            <Divider variant="middle" />
            <Grid container spacing={6} className={styles.bottomBox}>
                <Grid item xs={6}>
                <TextField
                    // id="outlined-name"
                    fullWidth
                    label="First Name"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={userInfo.first_name}
                    onChange={handleChanges}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    label="Last Name"
                    type="text"
                    fullWidth
                    name="last_name"
                    placeholder="Last Name"
                    value={userInfo.last_name}
                    onChange={handleChanges}
                />
                </Grid>
                <Grid item xs={4}>
                <TextField
                    label="Country"
                    type="text"
                    name="country"
                    fullWidth
                    placeholder="Country"
                    value={userInfo.country}
                    onChange={handleChanges}
                />
                
                </Grid>
                <Grid item xs={4}>
                
                <TextField
                    label="State / Province"
                    type="text"
                    name="state"
                    fullWidth
                    placeholder="State / Province"
                    value={userInfo.state}
                    onChange={handleChanges}
                />
                
                </Grid>
                <Grid item xs={4}>
                
                <TextField
                    label="City"
                    type="text"
                    name="city"
                    fullWidth
                    placeholder="City"
                    value={userInfo.city}
                    onChange={handleChanges}
                />
                
                </Grid>
                <Grid item xs={5}>
                
                <TextField
                    label="Street"
                    type="text"
                    name="Street"
                    fullWidth
                    placeholder="Street"
                    value={userInfo.street}
                    onChange={handleChanges}
                />
                
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Apartment"
                        type="text"
                        name="apartment"
                        fullWidth
                        placeholder="Apartment"
                        value={userInfo.apartment}
                        onChange={handleChanges}
                    />
                </Grid>
                <Grid item xs={5}>
                
                <TextField
                    label="Postal Code"
                    type="text"
                    name="postal"
                    fullWidth
                    placeholder="Postal Code"
                    value={userInfo.postal}
                    onChange={handleChanges}
                />
                
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" size="large"
                    onClick={() => props.updateUser(userInfo, props.history)}>
                Save
            </Button>
    </Fragment>
    )
}

const mapStateToProps = ({ error }) => ({
    // error
  });
  
  export default connect(mapStateToProps, {updateUser})(
    SettingsForm
  );
  