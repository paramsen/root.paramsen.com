import React from 'react';
import AppBar from 'material-ui/AppBar'
import {Link} from 'react-router';
import './style/AppBar.css';

export default function AppBarImpl(props) {
    return (
            <AppBar 
                title={
                    <Link to="/">
                        <div>
                            <span className="title">Pär Amsens Sandbox</span><i className="fa fa-thumbs-up icon" aria-hidden="true"/>
                        </div>
                    </Link>}
                onLeftIconButtonTouchTap={props.onToggleDrawerClick}>
            </AppBar>
    );
}