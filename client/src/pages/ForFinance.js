import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'react-material-select/lib/css/reactMaterialSelect.css';
import {withStyles} from "@material-ui/core/styles/index";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ChevronRight from '@material-ui/icons/ChevronRight';
const styles = {
    root: {
        flexGrow: 1
    }
};
class ForFinance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appHandler: this.props.appHandler,
        };
    }

    onClick = (e) => {
        console.log(e.target);
        this.state.appHandler(e.target.attributes.getNamedItem('data-pageIndex').value);
    };

    render() {
        return (
            <div className="page-container">
                <h1 className="page-header center">Key Points for Finance</h1>
                <hr></hr>
                <p className="p-text"><b>Justify your spend</b><br></br>Conversation Intelligence (CI) Software is the key component to driving sales teams forward and measuring the ROI from training and coaching initiatives. CI gives your sales organization visibility into conversion rates and rep performance at each stage of the funnel. This level of visibility allows managers to target and tailor their coaching efforts to drive measurable sales results and increased revenue. With CI, leaders have the ability to understand exactly what’s working and what’s not.
                </p>
                <p className="p-text"><b>Why another tool?</b><br></br>It can be difficult to understand which tools make are impacting your bottom line. The value of CI is measured in new rep onboarding time, rep conversion rates, and manager efficiency. Additionally, CI gives organizations the ability to leverage the calls they are already recording for enablement purposes.
                </p>
                <p className="p-text no-margin-bottom"><b>Value Points for Finance:</b></p>
                <ul>
                    <li><a href={'https://www.execvision.io/2017/04/18/sales-coaching-programs-business-case-roi/'} target={'_blank'}> ROI of Conversation Coaching</a></li>
                    <li>Increased Revenue linked to consistent call coaching</li>
                    <li>Less time and money spent training new hires</li>
                </ul>
                <p className={'p-text'}><b>Average Role Involvement CI Deployment</b><br></br>None- aside from approving the department’s budget for new tools, deploying a CI platform requires minimal to no involvement from Finance Departments</p>
                <br></br>
                <Link to={'/for-hr'}>
                    <Button variant="outlined" size="large" className="ev-btn iRight">
                        For Human Resources
                        <ChevronRight className="rightIcon"></ChevronRight>
                    </Button>
                </Link>
                <p><br></br></p>
                <br></br><br></br>
            </div>
        );
    }
}
export default ForFinance;