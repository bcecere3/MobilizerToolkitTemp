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
class ForQualityAssurance extends Component {
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
                <h1 className="page-header center">Conversation Intelligence for Quality Assurance (QA) / Quality Control (QC)</h1>
                <hr></hr>
                <p className="p-text"><b>How long does it take your team to QA a call?</b></p>
                <p className="p-text no-margin-bottom">QA professionals complain that it takes way too much time to do a Quality Assurance review of a call  because of the following barriers:</p>
                <ol>
                    <li>It’s hard to find a call worth QAing or a call with a coachable moment.</li>
                    <li>Once you do, there is no easy way to capture feedback for reps and managers in the same place.</li>
                    <li>Call recordings are typically big files that are a pain to download, store, and share.</li>
                    <li>The QA professional must listen to the call minute for minute, unable to skip ahead to the keyword or play the call on a faster speed.</li>
                    <li>Call review sheets / quality monitoring forms are typically filled out on paper or in a Google form, separate from the call recording file itself.  This leaves recipients of the QA process struggling to collect insights that need to be amalgamated from multiple sources.</li>
                </ol>
                <p className={'p-text center'}><b>What if you could QA 10X the calls in the same hour of time?</b></p>
                <p className="p-text no-margin-bottom">QA leaders want to add more value to the business instead of only playing the role of the compliance police.  CI tools liberate QA teams to provide feedback on far more calls and easily share their findings with reps and managers.  QA teams can see that managers are coaching their teams like they are supposed to as well as that individual reps are changing behavior over time.  Scorecards trending allows qualitative call feedback to be quantified and correlated with call outcomes.  Advanced searches let QA teams get to just the right calls:</p>
                <ul>
                    <li>of a certain call disposition</li>
                    <li>that do or do not contain certain keywords or phrases</li>
                    <li>for a certain rep, department, or team under a manager</li>
                    <li>where the rep did or didn’t request coaching</li>
                    <li>from a certain marketing campaign or lead source</li>
                    <li>over a defined date range</li>
                    <li>for opportunities of a certain dollar amount</li>
                    <li>when the call did or did not advance to the next stage or status</li>
                    <li>and on and on... (any data field from your CRM can be married with the call recording to make searchable)</li>
                </ul>
                <p className="p-text">A QA department armed with CI software can drive much greater business including increased revenue, reduced costs, and lower company risk.
                </p>
                <br></br>
                <Link to={'/for-customer-success'}>
                    <Button variant="outlined" size="large" className="ev-btn iRight">
                        For Customer Success
                        <ChevronRight className="rightIcon"></ChevronRight>
                    </Button>
                </Link>
                <p><br></br></p>
                <br></br><br></br>
            </div>
        );
    }
}
export default ForQualityAssurance;