import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  purple500, purple700, grey400, //primary
  limeA200, grey100, grey500 //accent
} from 'material-ui/styles/colors';

import Header from './Header';

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

export default React.createClass({
    render() {
        return(
                <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                    <div>
                    <Header/>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});
