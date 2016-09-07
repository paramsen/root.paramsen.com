import React from 'react';
import Header from './Header';

export default React.createClass({
    render() {
        return(
            <div>
                <Header/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});
