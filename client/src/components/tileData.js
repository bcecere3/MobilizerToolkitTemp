import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export const quickLinks = (
    <div>
        <Link to="/">
            <ListItem button className="ev-menu-text">
                <ListItemText primary="Technology Overview" />
            </ListItem>
        </Link>
        <Link to="/for-executives">
            <ListItem button className="ev-menu-text">
                <ListItemText primary="For Executives" />
            </ListItem>
        </Link>
        <Link to={"/for-sales-managers"}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="For Sales Managers" />
            </ListItem>
        </Link>
        <Link to={'/for-sales-ops'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="For Sales & Revenue Ops" />
            </ListItem>
        </Link>
        <Link to={'/for-sales-trainers'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="For Enablement & Trainers" />
            </ListItem>
        </Link>
        <Link to={'/for-quality-assurance'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="For Quality Assurance" />
            </ListItem>
        </Link>
        <Link to={'/for-customer-success'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="For Customer Success" />
            </ListItem>
        </Link>
        <Link to={'/for-compliance'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="For Compliance & Legal" />
            </ListItem>
        </Link>
        <Link to={'/for-finance'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="For Finance" />
            </ListItem>
        </Link>
        <Link to={'/for-hr'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="For Human Resources" />
            </ListItem>
        </Link>
    </div>
);

export const resourceLinks = (
    <div>
        <a href={'https://www.execvision.io/integrations/'} target={'_blank'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="ExecVision Integrations" />
            </ListItem>
        </a>
        <a href={'https://www.execvision.io/primer-call-recording-laws/'} target={'_blank'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="Call Recording Laws" />
            </ListItem>
        </a>
        <a href={'https://www.execvision.io/#videos'} target={'_blank'}>
            <ListItem button className="ev-menu-text">
                <ListItemText primary="Customer Testimonials" />
            </ListItem>
        </a>
    </div>
);