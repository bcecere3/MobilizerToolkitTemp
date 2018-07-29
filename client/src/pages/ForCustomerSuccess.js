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
class ForCustomerSuccess extends Component {
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
                <h1 className="page-header center">Conversation Intelligence for Client Success</h1>
                <hr></hr>
                <p className={'p-text'}>Whether onboarding a new customer, training a group of users, or having contract renewal conversations – CI’s customer interaction analytics makes it easier to reveal conversation insights that enhance the overall customer experience. What top CSMs do differently can now be easily shared and scaled.</p>
                <p className="p-text"><b>Stop Churn.</b><br></br>Figuring out whether a customer is going to churn, renew, or upsell is always top priority for Client Success teams. CI software provides transcription and analytics that identify language and keywords in order to track customer trends.
                </p>
                <p className="p-text"><b>Understand what your clients want and need.</b><br></br>CI software gives client success teams the ability to perform keyword searches to understand which opportunities need the most attention. Reps use these insights to guide their talk tracks, messaging, and questions in order to increase renewal rates. CI empowers teams to track and understand their clients’ needs from the first call through to the present.  Imagine having all of the historic calls with a client account all in one place within your CRM, then being able to zero in on exactly the right part of the right call in seconds.  CI delivers an unprecedented level of visibility for the customer success team and company.
                </p>
                <p className="p-text"><b>Accountability and consistency.</b><br></br>With CI technology, client success teams can go back to listen to every call that has been made with clients. CI can help your department create consistency in messaging, track client trends, and hold team members accountable for their actions.<br></br><br></br>The Call Library helps new hires learn product and client messaging quicker by leveraging established best practices. New AMs / CSMs are empowered to get up to speed faster so they can take client service work off of your plate sooner. Customers are happier, churn less, and buy more.
                </p>
                <p className="p-text"><b>Time savings and company impact.</b><br></br>The ratio of customers to customer success reps is always too high making CSMs / AMs the busiest people in the company.  CI saves customer success a lot of time by removing internal company communications.  What’s better: sitting in three meetings getting everyone up to speed on the voice of the customer or sharing snippets from three calls so people in other departments can hear the customer voice unfiltered?<br></br><br></br>Check out this full list of <a href={'https://www.execvision.io/2018/03/19/conversation-intelligence-customer-success/'} target={'_blank'}>9 Ways to Leverage Conversation Intelligence for Customer Success</a> including boosting morale and getting the marketing organization everything they need to write a case study without needing to even interview the CSM.
                </p>
                <p className="p-text no-margin-bottom"><b>Key Value Points for Customer Success:</b></p>
                <ul>
                    <li>Keeping track of your customers wants and needs</li>
                    <li>Quality assurance</li>
                    <li>Identify important keywords that indicate if a client will churn or not</li>
                    <li>Share calls internally and externally with clients</li>
                    <li>Create a stronger client success team by reviewing past calls</li>
                </ul>
                <p className={'p-text'}><b>Average Role Involvement CI Deployment</b><br></br>No time is required in CI Deployment.</p>
                <br></br>
                <Link to={'/for-compliance'}>
                    <Button variant="outlined" size="large" className="ev-btn iRight">
                        For Compliance & Legal
                        <ChevronRight className="rightIcon"></ChevronRight>
                    </Button>
                </Link>
                <p><br></br></p>
                <br></br><br></br>
            </div>
        );
    }
}
export default ForCustomerSuccess;