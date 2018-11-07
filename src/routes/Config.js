import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashbord from '../views/employee/Dashboard';
import Employee from '../views/employee/Employee';
import InsertForm from '../views/employee/InsertForm';
import EditForm from '../views/employee/EditForm';
import UpdateForm from '../views/employee/UpdateForm';
import Login from '../views/login/Login';
import List from '../views/employee/List';

export default class Config extends React.Component{
  render() {
    return (
      <BrowserRouter >
        <div className="container-scroller">
          <Switch>
            <Route path='/login' component={Login} exact={true}/>
            <Route path='/dashboard' component={Dashbord} exact={true}/>
            <Route path='/' component={Employee} exact={true}/>
            <Route path='/list' component={List} exact={true}/>
            <Route path='/insertform' component={sessionStorage.getItem('id') === null ? Login:InsertForm} exact={true}/>
            <Route path='/editform' component={sessionStorage.getItem('id') === null ? Login:EditForm} exact={true}/>
            <Route path='/updateform/:id' component={sessionStorage.getItem('id') === null ? Login:UpdateForm} exact={true}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}