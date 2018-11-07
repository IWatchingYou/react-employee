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
              <iframe src="http://app.chokchey.com:3000/public/question/ab1a7892-201d-49cc-a142-160e5557d6a5" 
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