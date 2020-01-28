import React from 'react'
import { connect } from "react-redux";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link }from 'react-router-dom'

// material imports
import {Grid} from "@material-ui/core";

import SettingsForm from './SettingsForm'
import SettingsCard from './SettingsCard'
const SettingsPage = props => {
    
    return (
        <>
        
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
{/* 
        // if props .length = 0 do not render! */}
        <SettingsCard />
        {/* // once we have functionaliy:
            a) make form and card have isEditing state for better UI */}

        <br></br>
        <SettingsForm />

        
        </>
    )
}

export default SettingsPage