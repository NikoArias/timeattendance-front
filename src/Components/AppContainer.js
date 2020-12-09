import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import IndexContainer from './IndexContainer';
import LoginContainer from './LoginContainer';
import DashboardContainer from './DashboardContainer';
import RegisterContainer from './RegisterContainer';
import AddTimeContainer from './AddTimeContainer';
import HistoryContainer from './HistoryContainer';

class AppContainer extends Component {
  render(){
    return(
      <>
      <Router>
            <Route path="/" exact component={IndexContainer} />
            <Route path='/login' exact component={LoginContainer}/>
            <Route path='/dashboard' exact component={DashboardContainer}/>
            <Route path='/register' exact component={RegisterContainer}/>
            <Route path='/addtime' exact component={AddTimeContainer}/>
            <Route path='/history' exact component={HistoryContainer}/>
      </Router>
      </>
    );
  }
}

export default AppContainer;
