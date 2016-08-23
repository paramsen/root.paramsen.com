import React from 'react';
import {connect} from 'react-redux';
import {toggleDrawer} from '../action/navigationAction';
import AppBarComponent from '../component/AppBar';
import DrawerComponent from '../component/Drawer';

const AppBarContainer = React.createClass({
    render: function() {
        return (
            <div>
                <AppBarComponent onToggleDrawerClick={this.props.toggleDrawer}/>
                <DrawerComponent open={this.props.openDrawer} onToggleDrawerClick={this.props.toggleDrawer}/>
            </div>
        );
    }
});

const mapStateToProps = (state, ownProps) => {
    const {navigationReducer: {openDrawer}} = state;

    return {
        openDrawer
    }
}

export default connect(mapStateToProps, toggleDrawer)(AppBarContainer);