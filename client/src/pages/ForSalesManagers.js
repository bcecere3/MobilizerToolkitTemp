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
class ForSalesManagers extends Component {
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
                <h1 className="page-header center">Conversation Intelligence Software for Sales Management</h1>
                <hr></hr>
                <p className="p-text"><b>A Sales Manager’s job is to make every rep their best rep.</b><br></br>With Conversation Intelligence (CI) Software, managers can quickly identify where their reps are the strongest and where they struggle. Even if sales managers have call recording, they don’t have visibility into all of the buying/selling conversations happening across their salesforce. This lack of visibility means that most sales managers are simply guessing as to why some of their reps dramatically outperform others. What are the best reps doing differently? How do I clone my top reps? Conversation Intelligence allows sales managers to coach, train, and benchmark rep performance using real conversations - something that was impossible until now.</p>
                <p className="p-text no-margin-bottom">With CI, managers:</p>
                <ul>
                    <li>Use analytics and reporting to track rep behavior and call outcomes over time</li>
                    <li>See where reps are absorbing coaching and understand when and how to provide additional coaching</li>
                    <li>Create and leverage a library of best practices in order to speed onboarding, cultivate a culture of self-development, and shift the performance bell curve.</li>
                </ul>
                <p className="p-text"><b>If you could sit with each of your reps for 3 hours per day would they get better?  Of course, but no one has the time.</b>With CI, managers coach at scale leveraging key moment signals to surface the coachable moments from the hundreds of customer-facing conversations that happen every day. Companies use CI in the following, creative ways:</p>
                <ol>
                    <li>Reps get in on the action by <a href={'https://www.execvision.io/2016/04/20/ultimate-sales-coaching-process/'} target={'blank'}>commenting on, scoring, and sharing their own calls with their managers and peers.</a> Social proof comes from managers and peer reps providing similar feedback to the rep.</li>
                    <li>To ease the coaching burden, time-pressed managers turn to peer coaching activities. Managers save time by having their reps share annotated and scored calls with other peer reps who otherwise would have no way of hearing the real call.</li>
                    <li>Reps and Managers collaborate on calls as part of the agenda during scheduled one-on-ones.</li>
                    <li>Managers <a href={'https://www.siriusdecisions.com/blog/asynchronoussalescoachingitsabouttime'} target={'blank'}>coach calls asynchronously</a> when they have time at night or on weekends particularly using <a href={'https://www.execvision.io/2016/07/20/execvision-mobile-app/'} target={'blank'}>Conversation Intelligence mobile apps</a>. Go-getter managers prefer to coach calls while they exercise, walk the dog, commute to work, ride in airplanes, or any other period of relative downtime. Kill two birds with one stone.</li>
                    <li><a href={'https://www.execvision.io/2016/05/27/sales-training-programs-like-world-religions/'} target={'_blank'}>Sales training programs are like world religions</a>. It doesn’t matter which one you go with as long as you are all in. The vast majority of sales training program content is forgotten by reps due to the forgetting curve. CI allows everyone to revisit lessons learned from sales training.
                        <ol>
                            <li>How are we using what we learned in the classroom on real calls in the real world?</li>
                            <li>What’s the impact of these skills on conversion rates, win rates, and revenue?</li>
                        </ol>
                    </li>
                    <li>Sales teams love <a href={'https://www.execvision.io/2016/05/17/call-of-the-month/'} target={'_blank'}>conversation competitions and call-of-the-month</a> contests as a fun way to create more consistency and accountability</li>
                    <li>Finally when the sales coaching culture has taken root, progressive sales organizations run ‘Call Camp’ group call training sessions. The key is to create a safe environment to learn where everyone plays by the <a href={'https://www.execvision.io/2016/03/04/execvision-call-camp-ground-rules/'} target={'_blank'}>group call coaching ground rules.</a></li>
                    <li>For a complete list of CI use cases check out these <a href={'https://www.execvision.io/2017/03/13/101-execvision-use-cases/'} target={'_blank'}>101 use cases</a></li>
                </ol>
                <p className="p-text">CI augments time wasted using headset splitters, double-jacking, ride-alongs, and sifting futilely through big piles of call recordings. MORE IMPORTANTLY CI EMPOWERS THE PROCESS OF HUMAN BEHAVIOR CHANGE.
                </p>
                <p className="p-text no-margin-bottom"><b>CI software value points:</b></p>
                <ul>
                    <li>Identify where reps are struggling</li>
                    <li>Gain insights into real customer conversations</li>
                    <li>Track rep behavior and call outcomes over time</li>
                    <li>Measure the impact of coaching activities</li>
                    <li>Shift the sales performance bell curve to make more Bs and Cs perform at an A level</li>
                    <li>Increase team visibility, <a href={'https://www.execvision.io/2016/04/18/sales-leadership-in-two-words/'} target={'_blank'}>consistency, and accountability</a></li>
                    <li>Search, comment, score, and share calls</li>
                    <li>Create filters and flags to surface signals from noise</li>
                    <li>Spot patterns and trends across your team</li>
                    <li>Eliminate wasted time from headset splitters, double-jacking, ride-alongs, and call recording databases</li>
                    <li>Listen to and coach calls anytime, anywhere</li>
                </ul>
                <p className="p-text"><b>Typical concerns from reps who resist</b>Reps express a variety of concerns about Conversation Intelligence initiatives.  Let’s explore a few:</p>
                <ol>
                    <li>Many times reps will resist the idea of all their calls being recorded at all.  They don’t want anyone ‘looking over their shoulder’ and interfering.  To counteract this, adopt a culture of using CI for positive and productive purposes.  This article called ‘<a href={'https://www.execvision.io/2016/05/09/call-recording-big-brother/'} target={'_blank'}>Is Call Recording Big Brother</a>’ goes deep on the topic of building a healthy call coaching culture where people feel safe to share their calls and get feedback.</li>
                    <li>Many reps will not want other reps to see and hear their calls.  Conversation Intelligence Software can be configured so a rep only has access to her own calls, only her team’s calls, or open access to everyone’s calls.  Access controls can be set up in a variety of ways giving sales managers a lot of configuration options to alleviate this concern.</li>
                    <li>Reps don’t want personal phone calls to be recorded and placed in the CI platform.  In response managers must clearly communicate that reps are to make personal calls on their personal cell phones.  Should a rep accidentally make a personal call with sensitive information on their work phone, managers can request that specifics calls be removed from their Conversation Intelligence instance.</li>
                </ol>
                <p className="p-text"><b>Manager involvement in a CI deployment:</b><br></br>While deploying Conversation Intelligence Software, sales managers along with sales operations are responsible for the creation of user lists by role, assignment of access privileges, customized scorecards, and tailored keywords aligned with best practices. These tasks usually require 1-2 hours to complete.
                </p>
                <br></br>
                <Link to={'/for-sales-ops'}>
                    <Button variant="outlined" size="large" className="ev-btn iRight">
                        For Sales & Revenue Ops
                        <ChevronRight className="rightIcon"></ChevronRight>
                    </Button>
                </Link>
                <p><br></br></p>
                <br></br><br></br>
            </div>
        );
    }
}
export default ForSalesManagers;