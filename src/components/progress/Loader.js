import React from 'react';

export default class Loader extends React.Component{
  render() {
    return (
      <div className="loader-demo" hidden={this.props.hidden}>
        <div className="dot-opacity-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  };
}