import React, { Component } from 'react';
import 'react-material-select/lib/css/reactMaterialSelect.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withStyles} from "@material-ui/core/styles/index";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ChevronRight from '@material-ui/icons/ChevronRight';
const styles = {
    root: {
        flexGrow: 1
    }
};
class ForExecutives extends Component {
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
                <h1 className="page-header center">The Value of Conversation Intelligence Software for C-Level Executives</h1>
                <hr></hr>
                <p className="p-text"><b>Systematically increases conversion ratios from stage to stage in your sales funnel.</b> Most executives agree that their main focus is increasing revenue. Though that goal can be summarized into a single result, it’s dependent on the successful execution of multiple activities.<br></br><br></br>Conversation Intelligence (CI) Software gives you the ability to see the areas where coaching can be leveraged to improve results and quantitatively measure if sales managers are coaching. Previously the conversation between your sales reps and buyers were a black box. When sales leaders finally have  visibility and can ‘see inside of conversations’ they are always surprised at what they hear - from unexpected excellence to cringe worthy moments.<br></br><br></br>CI software provides dashboards and analytics that allow you to see trends in call performance at the aggregate company level, team level, or management level. Track ROI from training and coaching activities in a few clicks. With these insights, sales managers are able to close the gap between top and bottom performers to improve the performance bell curve. It’s as close as you can get to cloning top reps. Senior executives also gain access to valuable conversation data that impacts revenue, pipeline, conversion rates, and win rates.</p>
                <p className="quote p-text">“There is no better sales improvement solution than ExecVision. It helped my sales team generate 25% more revenue in less than 90 days.” <span><b>GARY MILWIT</b> President & COO, Stone Street Capital</span></p>
                <p className="p-text"><b>Hear the voice of the customer.</b><br></br>Conversation Intelligence (CI) Software makes it possible to gain customer insights and intelligence through real interactions that are happening every day. There is no other way to really get inside the mind of the buyer than by seeing and hearing what they experience through their eyes.<br></br><br></br>This level of visibility brings accountability into every engagement with a prospect or client - from sales to client success to customer support to account management. You will know the customer experience unlike ever before and feel what it’s like to interact with your company.
                </p>
                <p className="quote p-text">“ExecVision establishes a two way street on accountability.” <span><b>Jackson Tate,</b> Brokerage Development Program Manager</span></p>
                <p className="p-text"><b>Know if company messaging is being used and how buyers are reacting.</b><br></br>At the C-level it was previously impossible to know if company branding, messaging, and storytelling was being used correctly by reps.  Your company invests a lot of money in messaging that - in many cases - is going unused.  This costs the business a lot of money in missed opportunities.<br></br><br></br>CI platforms allow C-level executives to measure that company messaging is being used, then drill in to hear exactly how it’s being used and how the customer reacts.  Marketers now have a closed feedback loop on messaging and campaigns that one CMO calls <a href="https://www.execvision.io/2016/06/15/cmos-getting-return-messaging-rom/">'ROM: Return on Messaging'</a>.</p>
                <p className="p-text no-margin-bottom"><b>Track ROI from big company investments</b><br></br>Conversation Intelligence Software allows C-level and finance executives to easily track ROI from other big corporate investments like:</p>
                <ul>
                    <li>sales training programs</li>
                    <li>large marketing campaigns</li>
                    <li>new product launches</li>
                    <li>mergers or acquisitions that are rationalized by cross-selling existing accounts</li>
                    <li>corporate rebranding</li>
                </ul>
                <p className="p-text">All of these initiatives depend on reps asking the right questions and saying the right things.  Until now measuring that this is happening at scale was impossible.  There was no way of knowing if a rep was even positioning the new product to an existing customer, for example.  CI provides a level of visibility that acts as an insurance policy to dramatically increase the likelihood of a good return on these large investments.</p>
                <p className="p-text no-margin-bottom"><b>Conversation Intelligence value points:</b></p>
                <ul>
                    <li>Improve conversion rates</li>
                    <li>Gain visibility into sales team performance</li>
                    <li>Close the gap between top and bottom performers</li>
                    <li>Improve your performance bell curve</li>
                    <li>Access performance trend data for coaching and training activities</li>
                    <li>Measure coaching to hold managers and reps accountable</li>
                    <li>Bring consistency and accountability to the organization</li>
                    <li>Hear the voice of your customer and understand messaging effectiveness</li>
                    <li>Ensure ROI from big company investments</li>
                </ul>
                <p className="p-text"><b>Why another tool?</b><br></br>Chances are you’re already paying for tools that once looked great, but now go unused because they have a niche use case and only one potential user.  Unlike many tools, CI provides value to multiple roles within your organization.<br></br><br></br>If each of your managers could sit next to each of their reps for 2 hours a day, would sales increase?  The answer (we sure hope) is “Of course.” But no manager has the time. With CI, managers are able to coach 10x more calls in the same amount of time. No longer will managers or reps needs to bear the futile task of digging through thousands of calls to find a coachable moments.
                </p>
                <p className="quote p-text">“Our business development team has seen a 144% growth in lead-gen. ExecVision is a total game-changer!” <span><b>Jonathan Roberts,</b> Sr. Manager of Business Development, Vena Solutions</span></p>
                <p className="p-text">By leveraging library features, sales enablement is able to build a database of training material and best practices based upon real calls, with minimal time and effort.</p>
                <p className="quote p-text">“ExecVision lifted sales rep productivity and conversion rates by 35%.” <span><b>Hanover Research</b></span></p>
                <p className="p-text">Call libraries also speed rep onboarding without disrupting the flow of your best performers. When reps can easily access, play, annotate, and request feedback on their calls, it allows them to improve on their own time, asynchronously with their coach.<br></br><br></br>Beware of solutions that are purpose-built for quality assurance and quality control.  If your reps and managers can't easily access, analyze, and share call recordings the software will not fundamentally change the behavior of the reps. Sales expert Jim Keenan poses the question in Forbes: <a href="https://www.forbes.com/sites/jimkeenan/2017/04/21/sales-leadership-needs-more-observable-moments/#24682a611371" target="_blank">How can you create a coaching culture and hold the line on accountability without observable moments?</a></p>
                <p className="p-text"><b>Average involvement and time commitment from executives</b><br></br>None - Aside from approving the software and mandating its use, deploying a CI platform requires minimal to no involvement from executives. Savvy leaders assign an ‘owner’ for the Conversation Intelligence initiative to ensure smooth implementation and hold people accountable to usage habits that they initially set for themselves.
                </p>
                <br></br>
                <Link to={'/for-sales-managers'}>
                    <Button variant="outlined" size="large" className="ev-btn iRight">
                        For Sales Managers
                        <ChevronRight className="rightIcon"></ChevronRight>
                    </Button>
                </Link>
                <p><br></br></p>
                <br></br><br></br>
            </div>
        );
    }
}
export default ForExecutives;