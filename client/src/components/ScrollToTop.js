import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
            let h = document.documentElement.offsetHeight;
            let y = document.querySelector('.content-container').clientHeight;
            console.log(document.documentElement.offsetHeight);
            console.log(document.querySelector('.content-container').clientHeight);
            document.querySelector('.MuiDrawer-docked-105').style.height = y+100+'px';
            document.querySelector('.ResponsiveDrawer-root-1').style.height = y+100+'px';
            if(h > document.querySelector('.ResponsiveDrawer-drawerPaper-5').clientHeight){

            }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop)