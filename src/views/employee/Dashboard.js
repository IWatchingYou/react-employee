import React from 'react';
import Navigation from '../../components/nav/Navigation';

export default class Dashbord extends React.Component{

  render(){
    return(
      <div>
        <Navigation/>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel-me">
            <div>
              <iframe src="http://app.chokchey.com:3000/public/dashboard/675f3774-6641-4c03-8da2-ca0d5fbb6c75" 
                      width="100%" 
                      height="100%"
                      frameBorder="0"
                      className="content-wrapper-me"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}