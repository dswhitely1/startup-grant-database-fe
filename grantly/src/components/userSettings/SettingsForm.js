import React, { useState, Fragment } from 'react'
import { connect } from "react-redux";
import { useAuth0 } from "../../react-auth0-wrapper";

// material / desgin imports
import { Grid, Typography, TextField, Divider } from "@material-ui/core";
import formStyles from "../../styles/formStyles";

const initialState = {
    first_name: '',
    last_name: '',
    country: '',
    state: '',
    city: '',
    street: '',
    apartment: '',
}
const SettingsForm = props => {
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
                    value={null}
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
                    value={null}
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
                    value={null}
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
                    value={null}
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
                    value={null}
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
                    value={null}
                    onChange={handleChanges}
                />
                
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Apartment"
                        ty
                    />
                </Grid>
                <Grid item xs={5}>
                
                <TextField
                    label="Postal Code"
                    type="text"
                    name="Postal Code"
                    fullWidth
                    placeholder="Postal Code"
                    value={null}
                    onChange={handleChanges}
                />
                
                </Grid>
            </Grid>
    </Fragment>
    )
}

const mapStateToProps = ({ error }) => ({
    error
  });
  
  export default connect(mapStateToProps, {})(
    SettingsForm
  );
  