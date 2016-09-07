import React from 'react';
import Drawer from 'material-ui/Drawer';
import {colors} from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

export default function DrawerComponent(props) {
    return (
        <Drawer docked={false} 
            open={props.open}
            onRequestChange={props.onToggleDrawerClick}>
            <div style={{
                backgroundColor: '#454545',
                height: 200
            }}>
                <div>
                    Image or smth
                </div>

                <p style={{
                    color: '#FFF'
                }}>Welcome to my blog about tech, mobile and Rx.</p>
                
            </div>

            <Link to="/"><MenuItem onClick={props.onToggleDrawerClick}>Home</MenuItem></Link>
            <Link to="/about"><MenuItem onClick={props.onToggleDrawerClick}>About</MenuItem></Link>
        </Drawer>
    );
}