
import React, { Component } from 'react';
import 'react-material-select/lib/css/reactMaterialSelect.css';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles = {
    root: {
        flexGrow: 1
    }
};

class Home extends Component {
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
          <h1 className="page-header center">Conversation Intelligence Mobilizer’s Toolkit</h1>
          <hr></hr>
          <p className="p-text">Conversation Intelligence Software empowers organizations to maximize close rates, drive rep performance, train and onboard reps more efficiently, and gain real customer insights. This is accomplished through transcribing, analyzing, and leveraging the call data your organization already collects. With Conversation Intelligence, everyday customer interactions become actionable business assets.<br></br><br></br>This toolkit outlines the value Conversation Intelligence (CI) Software provides to organizations from c-level executives to entry-level reps. Additionally, it addresses common benefits and points of concern for the many roles involved in the successful deployment of CI in an enterprise organization.
          </p>
          <br></br>
          <p className="p-text"><b>The Value of Conversation Intelligence Software for:</b></p>
          <ol>
              <li className="p-text"><Link to="/for-executives" className="p-link">C-Level Executives (CEO, Presidents, COOs, CCOs, CMO, etc.)</Link></li>
              <li className="p-text"><Link to={"/for-sales-managers"} className="p-link">Sales Leadership / Management</Link></li>
              <li className="p-text"><Link to={'/for-sales-ops'} className="p-link">Sales Ops / Revenue Ops / CRM Admins</Link></li>
              <li className="p-text"><Link to={'/for-sales-trainers'} className="p-link">Sales Enablement & Trainers / L&D</Link></li>
              <li className="p-text"><Link to={'/for-quality-assurance'} className="p-link">Quality Assurance (QA) / Quality Control</Link></li>
              <li className="p-text"><Link to={'/for-customer-success'} className="p-link">Customer Success</Link></li>
              <li className="p-text"><Link to={'/for-compliance'} className="p-link">Compliance / Legal (GC, etc.)</Link></li>
              <li className="p-text"><Link to={'/for-finance'} className="p-link">Finance</Link></li>
              <li className="p-text"><Link to={'/for-hr'} className="p-link">HR</Link></li>
          </ol>
      </div>
    );
  }
}

export default withStyles(styles)(Home);