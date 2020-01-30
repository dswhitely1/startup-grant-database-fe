import React, { useState, Fragment, useEffect } from 'react'
import { connect } from "react-redux";
import { useAuth0 } from "../../react-auth0-wrapper";

// material / desgin imports
import { Grid, Typography, Divider } from "@material-ui/core";
import formStyles from "../../styles/formStyles"

const SettingsCard = props => {
    const { user, isAuthenticated, getTokenSilently } = useAuth0();

    const styles = formStyles();

    const [currentUser, setCurrentUser] = useState({});

    return (
        <Fragment>
            <Typography variant="h5" className={styles.subjectHeader}>
                <h1>{currentUser.nickname}'s Info</h1>
            </Typography>
            <Divider variant="middle" />
            <Grid container spacing={6} className={styles.bottomBox}>
                <Grid item xs={4}>

                    <h3>First Name: </h3>

                </Grid>
                <Grid item xs={4}>
                    <h3>Last Name:</h3>
                </Grid>
                <Grid item xs={4}>
                    <h3>Phone Number:</h3>
                    </Grid>
                <Grid item xs={4}>
                    <h3>Country:</h3>
                </Grid>
                <Grid item xs={4}>
                
                    <h3>State / Province:</h3>
                </Grid>
                <Grid item xs={4}>
                
                    <h3>City:</h3>
                
                </Grid>
                <Grid item xs={5}>

                    <h3>Street:</h3>

                </Grid>
                <Grid item xs={2}>
                    <h3>Apartment:</h3>
                </Grid>
                <Grid item xs={5}>
                
                    <h3>Postal Code:</h3>
                
                </Grid>
            </Grid>
    </Fragment>
    )
}

const mapStateToProps = state => ({

  });
  
  export default connect(mapStateToProps, {  })(
    SettingsCard
  );
  