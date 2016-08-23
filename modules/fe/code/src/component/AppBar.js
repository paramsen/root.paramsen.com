import React from 'react';
import AppBar from 'material-ui/AppBar'

export default function AppBarImpl(props) {
    return (
        <AppBar title="Title" onLeftIconButtonTouchTap={props.onToggleDrawerClick}/>
    );
}