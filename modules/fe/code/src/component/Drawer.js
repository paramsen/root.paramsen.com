import React from 'react';
import Drawer from 'material-ui/Drawer';
import {colors} from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';

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
                }}>Pär Amsens blog</p>

                <p style={{
                    color: '#FFF'
                }}>Welcome to my blog about tech, mobile and Rx.</p>
                
            </div>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
        </Drawer>
    );
}