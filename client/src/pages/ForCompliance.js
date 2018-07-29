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
class ForCompliance extends Component {
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
                <h1 className="page-header center">Key Points for Compliance</h1>
                <hr></hr>
                <p className="p-text">Conversation Intelligence (CI) Software is completely customizable to meet industry specific and regional legal requirements. CI works with existing Telephony systems and Dialers, ensuring that all call recording laws are met for every call that is placed. Additionally, organizations have the ability to determine which calls can and cannot be imported into the software based on company roles and titles, state consent laws, and much more.<br></br><br></br>CI technology also provides a call expiry features that automatically remove calls from the platform after a designated period of time. This feature is used to cut down the sheer number of calls that teams are making per day or to protect employee information.<br></br><br></br>For additional information, our team of experts can help your team navigate the call recording laws across the United States to minimize any risk to your business.
                </p>
                <p className="p-text no-margin-bottom"><b>Legal and Compliance Value Points:</b></p>
                <ul>
                    <li><a href={'https://www.execvision.io/2016/02/23/call-recording-laws-practical-advice-for-sales-leaders/'} target={'_blank'}> Call Recording Laws broken down</a></li>
                    <li>Recordings pulled based on company’s discretion</li>
                    <li>Call Expiry</li>
                    <li><a href={'https://www.execvision.io/2016/07/12/demystifying-call-recording-laws/'} target={'_blank'}>Demystifying Call Recording</a></li>
                </ul>
                <p className={'p-text'}><b>Average Role Involvement CI Deployment</b><br></br>None- aside from approving the technology and understanding your organization's policy on call recording laws, deploying a CI platform requires minimal to no involvement from Legal.</p>
                <br></br>
                <Link to={'/for-finance'}>
                    <Button variant="outlined" size="large" className="ev-btn iRight">
                        For Finance
                        <ChevronRight className="rightIcon"></ChevronRight>
                    </Button>
                </Link>
                <p><br></br></p>
                <br></br><br></br>
            </div>
        );
    }
}
export default ForCompliance;