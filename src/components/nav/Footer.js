import React from 'react';

export default class Footer extends React.Component{
  render() {
    return (
      <footer className="footer" style={{ 
        paddingLeft: 130,
        paddingRight: 110
      }}>
        <div className="w-100 clearfix">
          <span className="text-muted d-block text-center text-sm-left d-sm-inline-block" style={{ fontWeight: 'bold' }}><a href="https://chokchey.net/">Powered by IT Department</a></span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center" style={{ fontWeight: 'bold' }}>Version 1.0 (Beta) <i className="icon-heart text-danger"></i></span>
        </div>
      </footer>
    )
  };
}