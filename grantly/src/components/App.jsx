import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {makeStyles, MuiThemeProvider} from "@material-ui/core/styles";
import Navbar from "./navbar/Navbar";
import {Route, Switch} from 'react-router-dom';
import {Footer} from './footer/Footer';
import {useActions} from "../store/useActions";
import {ActionsProvider} from "../context/ActionsContext";
import {theme} from "./theme";

import LandingPage from "./landingpage/LandingPage";
import SuggestionForm from './suggestion/Suggestion'
import {GrantTable} from '../components/admin/GrantTable'
const useStyles = makeStyles(() => ({
    app: {
        textAlign: 'center',
        background: '#f7f7f7',
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative',
        minHeight: '100vh'
    }
}));



function App() {
    const classes = useStyles();
    const actions = useActions();
    return (
        <MuiThemeProvider theme={theme}>
            <ActionsProvider value={actions}>
                <CssBaseline/>
                <div className={classes.app}>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        <Route path="/help" component={GrantTable} />
                        <Route path='/suggest' component={SuggestionForm}/>
                    </Switch>
                    <Footer/>
                </div>
            </ActionsProvider>
        </MuiThemeProvider>
    )
}

export default App;
