import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  purple500, purple700, grey400, //primary
  limeA200, grey100, grey500 //accent
} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar'

const muiTheme = {
    palette: {
        primary1Color: purple500,
        primary2Color: purple700,
        primary3Color: grey400,
        accent1Color: limeA200,
        accent2Color: grey100,
        accent3Color: grey500,
    }
}

export default function AppBarImpl(props) {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
            <AppBar 
            title={<div>
                <span className="title">Pär Amsens space</span><i className="fa fa-thumbs-up icon" aria-hidden="true"/>
            </div>}
            onLeftIconButtonTouchTap={props.onToggleDrawerClick}>
            </AppBar>
        </MuiThemeProvider>

    );
}