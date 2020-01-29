import React, {Fragment} from 'react'
import { connect } from "react-redux";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link }from 'react-router-dom'

// material imports
import {Grid, Divider} from "@material-ui/core";

import SettingsForm from './SettingsForm'
import SettingsCard from './SettingsCard'

import formStyles from "../../styles/formStyles"

const SettingsPage = props => {
    const styles = formStyles();

    return (
        <Fragment>
{/*     
        // if props .length = 0 do not render! */}
        <SettingsCard />
        {/* // once we have functionaliy:
            a) make form and card have isEditing state for better UI */}
        
        <br></br>
        <SettingsForm />

        <Grid container spacing={1} className={styles.bottomBox}>
        <Grid item xs={6}>
            <Link>
                Change Password
            </Link>
        </Grid>
        <Grid item xs={6}>
            <Link>
                Change Email
            </Link>
        </Grid>
        </Grid>
        
        </Fragment>
    )
}

export default SettingsPage