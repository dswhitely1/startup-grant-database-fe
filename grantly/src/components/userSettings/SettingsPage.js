import React from 'react'
import { connect } from "react-redux";
import { useAuth0 } from "../../react-auth0-wrapper";

import SettingsForm from './SettingsForm'

const SettingsPage = props => {
    
    return (
        <>

        <h1>Test</h1>
        <SettingsForm />


        </>
    )
}

export default SettingsPage