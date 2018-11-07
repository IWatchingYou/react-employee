import React from 'react';
import Navigation from '../../components/nav/Navigation';
import Footer from '../../components/nav/Footer'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class EditForm extends React.Component{

  BASEURL = 'http://app.chokchey.com:4000/api/';

  constructor(){
    super();
    this.state={
      search: '',
      employee: [],
    }
  }

  handlerChange_search=(event)=>{
    this.setState({
      search: event.target.value
    })

    setTimeout(()=>{
      this.render_search();
    },1000)
  }

  componentDidMount(){
    this.render_search();
  }

  render_search(){
    var str = '';
    if(this.state.search !== ''){
      if(parseInt(this.state.search)){
        str = this.BASEURL+'employee?phone='+this.state.search;
      }
      else{
        str = this.BASEURL+'employee?name='+this.state.search;
      }
    }
    else{
      str = this.BASEURL+'employees/page/0';
    }
    axios.get(str)
    .then(res=>{
      this.setState({
        employee: res.data.result.rows.map(emp=>{
          return(
            <tr>
              <td>
                <img style={{ borderRadius: 0, width: 60 , height: 60 }} src={'http://app.chokchey.com:4000/static/'+emp.staff_code+'.png'} alt="image"/>
              </td>
              <td>
                {emp.name_eng}
              </td>
              <td>
                {emp.position}
              </td>
              <td>
                {emp.department}
              </td>
              <td>
                {`${emp.date_join.split('-')[0]}-${emp.date_join.split('-')[1]}-${emp.date_join.split('-')[2].substring(0, 2)}`}
                <Link to={`/updateform/${emp.id}`} class="badge badge-info" style={{ float: 'right' }}>
                  <i className="icon icon-pencil" style={{ marginRight: 10 }}></i>Edit
                </Link>
              </td>
            </tr>
          )
        })
      })
    })
    .catch(err=>{console.log(err)})
  }

  render(){
    return(
      <div>
        <Navigation/>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputUsername1" value={this.state.search} onChange={this.handlerChange_search} placeholder="Search ...."/>
                    </div>
                    <div className="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>
                                Pictuer
                              </th>
                              <th>
                                English name
                              </th>
                              <th>
                                Position
                              </th>
                              <th>
                                Department
                              </th>
                              <th>
                                Started Date
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.employee}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}