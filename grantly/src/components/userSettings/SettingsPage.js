import React from 'react'
import { connect } from "react-redux";
import { useAuth0 } from "../../react-auth0-wrapper";

import SettingsForm from './SettingsForm'
import SettingsCard from './SettingsCard'
const SettingsPage = props => {
    
    return (
        <>
        // if props .length = 0 do not render!
        <SettingsCard />
        <br></br>
        <SettingsForm />


        </>
    )
}

export default SettingsPage