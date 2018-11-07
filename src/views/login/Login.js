import React from 'react';
import { fetchLogin } from '../../data/fetchData';

export default class Login extends React.Component{

  state = {
    username: '',
    password: ''
  }

  handlerChangeUsername = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  handlerChangePassword = (event) =>{
    this.setState({
      password: event.target.value
    })
  }

  handlerClickLogin=(event)=>{
    event.preventDefault();
    fetchLogin(this.state.username,this.state.password)
    .then(res=>{
      sessionStorage.setItem('id', res[0].staff_code);
      sessionStorage.setItem('name', res[0].username);
      window.location.reload();
    })
    .catch(err=>{
      console.log(err);
      alert('Login failed.');
      this.setState({
        username: '',
        password: ''
      })
    })
  }

  render() {
    return (
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
          <div class="row w-100 mx-auto">
            <div class="col-lg-4 mx-auto">
              <div class="auto-form-wrapper">
                <form onSubmit={this.handlerClickLogin}>
                  <p>{this.state.data}</p>
                  <div class="form-group">
                    <label class="label">Username</label>
                    <div class="input-group">
                    <input  type="text" 
                              class="form-control" 
                              placeholder="Username" 
                              value={this.state.username}
                              onChange={this.handlerChangeUsername}
                              required={true}/>
                    <div class="input-group-append">
                      <span class="input-group-text"></span>
                    </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="label">Password</label>
                    <div class="input-group">
                    <input  type="password" 
                              class="form-control" 
                              placeholder="*********" 
                              value={this.state.password}
                              onChange={this.handlerChangePassword}
                              required/>
                    <div class="input-group-append">
                      <span class="input-group-text"></span>
                    </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary submit-btn btn-block">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}