import React from 'react';
import AppBar from 'material-ui/AppBar'
import './style/AppBar.css';

export default function AppBarImpl(props) {
    return (
            <AppBar 
                title={<div>
                        <span className="title">Pär Amsens space</span><i className="fa fa-thumbs-up icon" aria-hidden="true"/>
                    </div>}
                onLeftIconButtonTouchTap={props.onToggleDrawerClick}>
            </AppBar>
    );
}