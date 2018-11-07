import React from 'react';
import './hr.css';
import axios from 'axios';

export default class Card extends React.Component{

  color={
    red: "#F95F62",
    green: "#13CE66"
  }

  state = {
    image: this.props.image,
    phone1: '',
    phone2: '',
    statusImg: true
  }

  componentDidMount(){

    if(this.props.phone != null){
      this.setState({
        phone1: this.props.phone
      })
    }

    axios.get(this.state.image)
    .then(res=>{
      this.setState({ statusImg: true })
    })
    .catch(err=>{
      this.setState({ statusImg: false })
    })
  }

  render() {
    return (
      <div className="col-md-4 grid-margin stretch-card" style={{ padding: 10}}>
          <div className="card-body">
            <div className="d-flex flex-row">
              <div className="ml-3" style={{marginLeft: 0}}>
                  <div className="img-lg">
                    <img src={this.state.statusImg === true ? this.state.image : require('./users.jpeg')} className="img-lg rounded" alt="profile_image"/>
                  </div>
              </div>
              <div className="ml-3 getout-5">
                <h6 style={{ color: '#333', marginBottom: 3 }} className="name" data-toggle="tooltip" data-placement="Right" title={this.props.name_khm}>
                  <p className={this.props.active_stat === true ? 'badge badge-chokchey bag':'badge badge-danger bag'} data-toggle="tooltip" data-placement="Right" title="Staff Code" style={{ margin: 0 ,marginRight: 7, padding: 3 }}>
                    {this.props.staff}
                  </p>
                  {this.props.name_eng}
                </h6>
                <p className="text-dark name-xs" style={{margin: 0,marginTop: 3, marginBottom: 1}}>
                  <p className="badge badge-chokchey bag" style={{margin: 0, marginRight: 7, padding: 3,fontSize: 12, width: 27, border: 0}} data-toggle="tooltip" data-placement="Right" title="Position"><i className="icon icon-briefcase"></i></p>
                  {this.props.position}
                </p>
                <p className="text-dark name-sm" style={{marginTop: 3, marginBottom: 1}}>
                  <p className="badge badge-chokchey bag" style={{margin: 0, marginRight: 7, padding: 3,fontSize: 12, width: 27, border: 0}} data-toggle="tooltip" data-placement="Right" title="Contact Number"><i className="icon icon-phone"></i></p>
                  {this.state.phone1}
                </p>
                <p className="text-dark name-sm" style={{marginBottom: 1}}>
                  <p className="badge badge-chokchey bag" style={{margin: 0, marginRight: 7, marginTop: 3, marginBottom: 1,fontSize: 12, padding: 3, width: 27, border: 0}} data-toggle="tooltip" data-placement="Right" title="Email"><i className="icon icon-envelope-letter"></i></p>
                  {this.props.email}
                </p>
                <p className="text-primary name-sm" style={{marginBottom: 1}}>
                  <p className="badge badge-chokchey bag" style={{margin: 0, marginRight: 7, marginTop: 3, marginBottom: 1, padding: 3, width: 27}} data-toggle="tooltip" data-placement="Right" title="Branch Code">{this.props.branchCode}</p>
                  {this.props.department}
                </p>
                <p className="text-dark name-sm" style={{marginBottom: 1}}>
                  <p className="badge badge-chokchey bag" style={{margin: 0, marginRight: 7, marginTop: 3, marginBottom: 1, fontSize: 12,padding: 3, width: 27,border: 0 }} data-toggle="tooltip" data-placement="Right" title="Started"><i className="icon icon-calendar"></i></p>
                  {this.props.dateJoin}
                </p>
              </div>
            </div>
          </div>
      </div>
    )
  };
}