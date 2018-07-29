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
class ForHR extends Component {
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
                <h1 className="page-header center">Key Points for HR</h1>
                <hr></hr>
                <p className="p-text"><b>How does Conversation Intelligence Software affect my employees?</b><br></br>Protecting the personal information of your employees is a top priorities. From personal privacy to corporate information, CI uses industry best practices for security following the standards laid out by <a href={'https://sharedassessments.org/'} target={'_blank'}>Shared Assessments Org</a>.
                </p>
                <p className="p-text">Helpful content: <a href={'https://www.execvision.io/2016/05/09/call-recording-big-brother/'} target={'_blank'}>Is Call Recording Big Brother?</a><br></br>CI tools are leveraged for quality assurance, training, and onboarding purposes. By providing visibility into key-conversations, managers can develop and coach employees more effectively.<br></br><br></br>CI can be customized for each organization and unique permissions can be assigned for each rep in that organization. CI software can be setup to not record calls placed by certain roles and on lines that are often used for personal interactions. These settings can easily be changed or updated at any time.<br></br><br></br>Helpful content: <a href={'https://www.execvision.io/2016/02/23/call-recording-laws-practical-advice-for-sales-leaders/'} target={'_blank'}>Call Recording Laws Broken Down</a><br></br>Call recording laws differ from state to state and can be extremely difficult to understand. ExecVision works with your dialer and telephony systems to ensure that all call recording laws are met each time your reps make a call.
                </p>
                <p className="p-text no-margin-bottom"><b>Value Points for HR:</b></p>
                <ul>
                    <li>CI protects the personal privacy of employees</li>
                    <li>Exclude confidential employee information</li>
                    <li>Comply with call recording laws</li>
                    <li>Invest in employee development and satisfaction</li>
                </ul>
                <p className={'p-text'}><b>Average Role Involvement CI Deployment</b><br></br>Little to none, depending on if you want your employees to sign call recording consent forms.</p>
                <br></br>
                <Link to={'/'}>
                    <Button variant="outlined" size="large" className="ev-btn iRight">
                        Return Home
                        <ChevronRight className="rightIcon"></ChevronRight>
                    </Button>
                </Link>
                <p><br></br></p>
                <br></br><br></br>
            </div>
        );
    }
}
export default ForHR;