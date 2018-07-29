import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home/Home';
import ForExecutives from './pages/ForExecutives';
import Form from './pages/form/Form';
import ResponsiveDrawer from './components/Header'
import Footer from './components/Footer'
import './App.css';
import { isNumber, error } from 'util';
import ForSalesManagers from "./pages/ForSalesManagers";
import ForSalesOps from "./pages/ForSalesOps";
import ForSalesTraining from "./pages/ForSalesTraining";
import ForCustomerSuccess from "./pages/ForCustomerSuccess";
import ForFinance from "./pages/ForFinance";
import ForCompliance from "./pages/ForCompliance";
import ForHR from "./pages/ForHR";
import ForQualityAssurance from "./pages/ForQualityAssurance";
import ScrollToTop from "./components/ScrollToTop";
import LockScreen from "./components/LockScreen";
// import requireAuthentication from './utils/requireAuth';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageIndex: 0,
      page:[
        <ForExecutives appHandler={this.appHandler}></ForExecutives>,
        //<Form appHandler={this.appHandler}></Form>
      ]
    };
  }
  appHandler = newPageIndex => {
    if (newPageIndex > this.state.page.length || newPageIndex < 0) {
      console.error("pageHandler - Tried to set pageIndex to invalid index");
    }
    else {
      this.setState({
        pageIndex: newPageIndex
      });
    }
  }
  render() {
    return (
        <Router>
          <ScrollToTop>
            <div className="app">
              <main>
                <ResponsiveDrawer></ResponsiveDrawer>
                <div className="content-container">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/for-executives" component={ForExecutives} />
                  <Route exact path="/for-sales-managers" component={ForSalesManagers} />
                  <Route exact path="/for-sales-ops" component={ForSalesOps} />
                  <Route exact path="/for-sales-trainers" component={ForSalesTraining} />
                  <Route exact path="/for-quality-assurance" component={ForQualityAssurance} />
                  <Route exact path="/for-customer-success" component={ForCustomerSuccess} />
                  <Route exact path="/for-compliance" component={ForCompliance} />
                  <Route exact path="/for-finance" component={ForFinance} />
                  <Route exact path="/for-hr" component={ForHR} />
                </div>
                <LockScreen></LockScreen>
              </main>
            </div>
          </ScrollToTop>
        </Router>
    );
  }
}

export default App;
