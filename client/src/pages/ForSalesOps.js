import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'react-material-select/lib/css/reactMaterialSelect.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ChevronRight from '@material-ui/icons/ChevronRight';
const styles = {
    root: {
        flexGrow: 1
    }
};
class ForSalesOps extends Component {
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
                <h1 className="page-header center">Conversation Intelligence Software and Sales Ops</h1>
                <hr></hr>
                <p className="p-text"><b>Sales Operations wants to see their sales teams be highly productive while also sailing through easy implementations.</b><br></br>Unfortunately many sales technologies claim to have easy implementations when in fact the opposite is true. Conversation Intelligence (CI) Software is designed to easily and securely integrate with the tools and processes your team already uses.<br></br><br></br>CI integrates with CRMs like Salesforce.com, Microsoft Dynamics, HubSpot, homegrown CRMs, and other systems of record. It’s important that the CI vendor has a US based client success team to make the integration process quick and seamless.
                </p>
                <p className="p-text no-margin-bottom"><b>How Conversation Intelligence software integrates with your sales stack:</b><br></br>CI is a plug-and-play solution that sits on-top of your existing stack providing analytics and insights into calls your organization is already recording.</p>
                <ol>
                    <li>CI tools connect with dialers, web conferencing tools, phone systems, cloud storage, and on-prem call recording solutions. See a <a href={'https://www.execvision.io/integrations/'} target={'_blank'}>full list of integrations</a>. If no call recording system exists, CI can be used to record calls as well.</li>
                    <li>Once calls are ingested, they are encrypted and stored on AWS (an unlimited number of call recordings for an unlimited amount of time).</li>
                    <li>The CI Platform then transcribes the calls, separates the speakers so you can see when the buyer or seller is talking, and performs additional AI analysis. </li>
                    <li>Call recordings are married with data from the CRM. As a system admin you can customize your CI Software by marrying any data field from your CRM with your call recordings.  Users can then cross-search for anything.  For example:
                        <ul>
                            <li><em>Show me the calls that are early stage opportunities where the reps under a certain manager didn’t ask about other decision makers</em></li>
                            <li><em>Show me calls where a particular rep got a “no” to a meeting because the prospect objected about having no budget</em></li>
                            <li><em>Show me calls from a particular lead source or marketing campaign where the rep did not use the correct messaging and the lead didn’t convert.</em></li>
                        </ul>
                    </li>
                    <li>Finally CI Software provides a user interface that makes it easy for any rep, manager, or leader to interact with the call recordings.  People can leave comments on calls, score calls, share calls, create libraries of the best calls, etc.</li>
                </ol>
                <p className="quote p-text">“Installing ExecVision was easy. As a Manager of Sales Operations, I appreciate that.” <span><b>Mark Gremban,</b> Manager of Sales Operations, Centrify</span>
                </p>
                <p className="p-text no-margin-bottom">Sales and revenue operations leaders need easy implementations that also allow for a lot of flexibility in customizations.  You need to consider how a new system like CI will impact other systems like the CRM.  Disrupting the business is not an option.  When looking at CI tools be sure to consider:</p>
                <ol>
                    <li>Does the CI platform push any data into your CRM or disrupt your current workflows?</li>
                    <li>Can the CI tool show you calls where the reps have not logged data in CRM correctly?</li>
                    <li>How are API calls limited?</li>
                    <li>To do the implementation does it require you to create custom fields in the CRM?</li>
                    <li>Does the CI tool support an unlimited number of call coaching scorecards?</li>
                    <li>Does the CI platform allow you to customize which data fields from CRM are married with the call recordings?</li>
                    <li>Will the CI software allow me to account for role and level when accessing call recordings of other users?</li>
                    <li>Can managers create libraries of best calls and limit access by reps, teams, or departments?</li>
                    <li>How will the CI tool comply with any call recording retention policies?</li>
                    <li>Are there storage limits and additional charges?</li>
                    <li>Can the CI platform be configured to only ingest calls over a certain duration eliminating ‘noise’ from the system?</li>
                    <li>Does the CI tool allow users to search for calls that do not contain topics, keywords, and phrases as well as calls that do contain them?</li>
                </ol>
                <p className="p-text">Finally it’s important to consider the impact of capturing call recordings in a compliant manner.  See this <a href={'http://lp.execvision.io/primer-call-recording-laws.html'} target={'_blank'}>brief on call recording laws</a> to help you navigate these varying requirements state-by-state.
                </p>
                <p className="p-text no-margin-bottom"><b>Key points for Sales Ops:</b></p>
                <ul>
                    <li>Integrates with CRMs</li>
                    <li>US based client success team</li>
                    <li>Does not push data to CRM</li>
                    <li>Unlimited call storage, for unlimited time</li>
                    <li>Limited API calls</li>
                    <li>No custom CRM fields needed</li>
                    <li>See if reps are logging calls correctly</li>
                    <li>Ability to customize settings like call recording access and retention (to comply with call recording retention policies)</li>
                    <li>Easy to stay compliant and also have no hidden costs</li>
                </ul>
                <p className="p-text"><b>Average role involvement in CI deployment</b><br></br>It takes between 5-10 minutes to set up the OAuths for CI software as well as creating a separate tab within your CRM.</p>
                <br></br>
                <Link to={'/for-sales-trainers'}>
                    <Button variant="outlined" size="large" className="ev-btn iRight">
                        For Enablement & Trainers
                        <ChevronRight className="rightIcon"></ChevronRight>
                    </Button>
                </Link>
                <p><br></br></p>
                <br></br><br></br>
            </div>
        );
    }
}
export default ForSalesOps;