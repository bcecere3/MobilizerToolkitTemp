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
class ForSalesTraining extends Component {
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
                <h1 className="page-header center">Conversation Intelligence for Sales Enablement & Trainers</h1>
                <hr></hr>
                <p className="p-text"><b>Create a sales training culture based on real conversations.</b>Conversation Intelligence (CI) Software is unlike any other coaching or training technology. It’s ability to turn real conversations into a library of training, learning, and onboarding material is highly-valuable. Most importantly, unlike an LMS, there is no need to create training content, quizzes, certifications, workflows, or anything else.<br></br><br></br>CI allows you to customize scorecards and keywords based on call types and roles. In the case of ExecVision, clients are provided a dedicated, US based client success and support rep to customize their instance to their unique needs.
                </p>
                <p className={'p-text'}><b>Manager ‘guided coaching’ help reps beat the ‘forgetting curve’</b><br></br>The minute anyone learns anything new that person’s brain is purging information.  After 30 days 80% or more of what was learned is lost.  This creates a phenomena called the forgetting curve.</p>
                <img src={'/img/graph.png'} width={'100%'} />
                <p className={'p-text'}>It’s nearly impossible for sales enablement people to overcome the forgetting curve without the support of sales managers.  Without reinforcement, most of what is learned in training sessions is lost.  When new reps have full brains, their brains leak.  Inspection of real calls with buyer’s allows everyone to know if the rep is using what they learned.  The problem: does enablement believe that managers are coaching the right things in the right ways.</p>
                <p className="p-text no-margin-bottom">Most training professionals are concerned with how managers reinforce the training delivered in the classroom during rep onboarding. You might be asking these questions:</p>
                <ul>
                    <li>Were managers promoted from the sales floor and then never taught how to coach?</li>
                    <li>Are sales managers coaching to the curriculum or teaching reps something entirely different?</li>
                    <li>How are the reps you trained beating the forgetting curve and moving to a point of <a href={'https://www.execvision.io/2016/05/27/sales-training-programs-like-world-religions/'} target={'_blank'}>mastery on our sales process and methodology</a></li>
                    <li>How calibrated are you as an organization for what ‘good’ looks like?</li>
                    <li>Are your reps receiving conflicting messages on how they are supposed to do their calls?</li>
                    <li>Do we even have a <a href={'https://www.execvision.io/2017/10/17/coaching-sales-reps/'} target={'_blank'}>consistent and measurable coaching process?</a></li>
                </ul>
                <p className="p-text">Neuroscience tells us the process of changing adult behavior is hard.  It requires repetition, sleep, positive reinforcement, self-awareness, and more repetition to form new neural pathways in the brain of the rep.<br></br><br></br>Call coaching scorecards provide a system for ‘guided coaching’ which helps managers consistently coach the right skills aligned with the rep enablement plan.  Look for a CI platform that doesn’t allow anyone to see other call scores until that person has scored the call themselves.  This will avoid any bias from other scores.<br></br><br></br><a href={'https://www.execvision.io/2016/06/02/call-review-scoring-program/'} target={'_blank'}>Scorecards prove the efficacy of a call review and scoring program.</a> Calls that score high almost always convert to the next stage of the sales process.  When a rep’s call gets a perfect score it can be added to the best practices library for others to learn from during future rep onboarding start classes. Your job in sales enablement is made easier through this process of teaching reps the right way, managers coaching the right way, capturing examples of reps doing calls the right way ‘in the wild,’ then using that call + annotations as a leaning asset.</p>
                <p className="p-text no-margin-bottom"><b>Key value points for enablement and trainers:</b></p>
                <ul>
                    <li>Work with reps virtually</li>
                    <li>No setup or creation of learning materials</li>
                    <li>Train reps with real conversations</li>
                    <li>Libraries of best practices and worst practices are created as the reps work</li>
                    <li>Democratize learning materials and access to best calls</li>
                    <li>Consistent feedback with minimal effort</li>
                </ul>
                <p className="p-text"><b>Why Another Learning Tool?</b><br></br>Current tools and processes do not provide managers with the features they need to coach, train, and onboard reps in a time and cost efficient way. CI lets managers access the exact calls they need to pay attention to, annotate those calls, and share findings. Reps can virtually raise their hands and ask for help on the calls where they need it the most. <a href={'https://www.execvision.io/2016/05/09/call-recording-big-brother/'} target={'_blank'}>This process of ‘opt-in’ coaching gives reps autonomy</a> over their own development which contributes to engagement, happiness, productivity, and longevity in role. Reps are left to think, “The company does care about me and helps me get better.”<br></br><br></br>With CI, libraries of best practices are created as the reps and managers work. These best practices can be shared with peers, managers, and others in real time
                </p>
                <p className="p-text no-margin-bottom"><b>How is CI Different than Sales Enablement Software Platforms Prevalent in the Market</b><br></br><a href={'https://www.execvision.io/2016/07/01/sales-enablement-role-play-software/'} target={'_blank'}>There are many, many sales enablement software products</a> on the market. Reps use them during onboarding and for video role play simulations. All of them have the same thing in common - they are based on mock selling scenarios where the rep records their role play.<br></br><br></br>As sales enablement professionals we understand the value in rep practice. At the same time we are confronted with the reality that most reps don’t take practice sessions and role playing as seriously as they should. At worse ‘practice’ tools are viewed by reps as being a waste of time. As a result it’s hard to get the reps to submit their video role plays. You will likely need to remind and often threaten with a ‘stick’ to get the reps to even participate. Just ask a rep what they think about creating videos of themselves doing mock scenarios. They will likely roll their eyes or scrunch their faces.<br></br><br></br>CI software platforms solve this problem because the reps produce recordings of their calls and online screen sharing meetings naturally while they do their jobs. They don’t need an additional workflow. Call Cards are created in the CI platform almost like a jet fighter produces exhaust. They do their jobs - talking to buyers and customers - and their calls are transcribed and indexed with additional data automatically behind the scenes. It’s super easy to then use those call recording assets for <a href={'https://www.execvision.io/2017/03/13/101-execvision-use-cases/'} target={'_blank'}>many, many use cases</a> after the fact.<br></br><br></br>Ask reps what they think about hearing real calls from their peers compared with role playing. Which do they value more? Which has a greater impact on changing their behavior?<br></br><br></br><b>How Does Conversation Intelligence Work with Our Learning Management System (LSM)?</b><br></br>In CI platforms, call recordings are turned into visual learning assets called ‘Call Cards.’ You can see when the rep or buyer is talking, keywords, transcript, comments, scorecards, etc. Each Call Card has its own unique URL that you can copy and paste into your LMS, Google Drive, learning content repository, Slack, SharePoint, or other tools. When a learner clicks the link in the LMS they are taken to a full screen Call Card where the comments of others ‘pop up’ while the call plays, they can see how the call was scored, etc. Learners can also add their own comments and score calls. This allows auditory, visual, or kinesthetic learners equal opportunity to absorb the lesson by hearing the call, seeing the call, and getting their hands on the call.
                </p>
                <p className="p-text no-margin-bottom">Because your reps are making calls every day and those calls are being annotated, enablement has a never ending river of content from which to choose. Consider the need to develop new learning content for these three scenarios:</p>
                <ul>
                    <li>Did your company launch a new product?
                        <ul>
                            <li>Great - you can hear calls for that product launch to see what’s working.  Use good examples in the LMS.  Enablement doesn’t need to create role plays for the new product.
                            </li>
                        </ul>
                    </li>
                    <li>Did marketing roll out new messaging?
                        <ul>
                            <li>Perfect - you can hear that reps are in fact using the new messaging and how it’s resonating with the buyer. Enablement can highlight good examples of the new messaging working with different buyer types, add them to the library, and copy/paste the links into the LMS or other internal communication tools like Slack.
                            </li>
                        </ul>
                    </li>
                    <li>Is your business diving into a new, unknown market segment?
                        <ul>
                            <li>Fantastic - now you can snag calls where reps demonstrate an understanding of the new buyer persona and share them with other reps who are struggling with the new market.  This saves sales enablement a ton of time building personas.
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="p-text no-margin-bottom"><b>Average role involvement CI deployment and enablement-specific use cases:</b><br></br>No time is required for this role in deployment, however enablement should be prepared for an active role once the tool is live.
                </p>
                <ul>
                    <li>Most companies elect for the sales enablement team to own the curation of the call library.  Be sure to select a CI tool which allows you to easily create a library and tags, assign access privileges, and select which users or teams can add or remove calls from that library.</li>
                    <li>Trainers typically leverage the call library daily in the classroom.  They project ‘Call Cards’ on a screen so that learners can hear the calls while simultaneously seeing the comments from reps and managers who previously provided feedback on the call.  Brining real examples of what is working on real calls into the classroom is very powerful for a new rep who just wants to see how it works in the real world.</li>
                    <li>Facilitators also use ExecVision in homework assignments and classroom exercises for onboarding start classes.  Reps are assigned calls to review, annotate, and score.  By seeing that the rep is breaking down the call the right way, enablement has a record of the fact that the rep is picking up the lessons.</li>
                    <li>Finally nothing is more frustrating for an enablement professional than to not know if what they taught in the classroom is driving results in the real world.  With CI software, enablement finally has full visibility into what the reps are doing 30, 60, 90 days or more after onboarding is over.
                        <ul>
                            <li>Imagine sitting on the sofa Sunday afternoon and pulling up all the calls of your star student 6 months after they left the nest to see how they are doing.</li>
                            <li>Enablement can use this info to spoke out bad managers who teach bad habits</li>
                            <li>Or you can use it to help you refine your curriculum further if buyers aren’t responding the way you expected.</li>
                        </ul>
                    </li>
                </ul>
                <br></br>
                <Link to={'/for-quality-assurance'}>
                    <Button variant="outlined" size="large" className="ev-btn iRight">
                        For Quality Assurance
                        <ChevronRight className="rightIcon"></ChevronRight>
                    </Button>
                </Link>
                <p><br></br></p>
                <br></br><br></br>
            </div>
        );
    }
}
export default ForSalesTraining;