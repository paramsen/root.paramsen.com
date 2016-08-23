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
                <p style={{
                    color: '#FFF'
                }}>Pär Amsen</p>
                
            </div>
            <MenuItem>MenuItem</MenuItem>
        </Drawer>
    );
}