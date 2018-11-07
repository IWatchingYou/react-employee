import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component{

  date = new Date();
  constructor(){
    super();
    this.state = {
      name: sessionStorage.getItem('name'),
      image: `http://app.chokchey.com:4000/static/${sessionStorage.getItem('id')}.png`,
      statusImg: true,
      classnav: 'nav-bottom',
      classli: 'nav-item'
    }
  }

  componentDidMount(){
    
  }

  handlerClick_nav=()=>{
    if(this.state.classnav === 'nav-bottom'){
      this.setState({ classnav: 'nav-bottom header-toggled'})
    }
    else{
      this.setState({ classnav: 'nav-bottom' })
    }
  }

  handlerClick_li=()=>{
    if(this.state.classli === 'nav-item'){
      this.setState({ classli: 'nav-item show-submenu'})
    }
    else{
      this.setState({ classli: 'nav-item' })
    }
  }

  render() {
    return (
      <nav className="navbar horizontal-layout col-lg-12 col-12 p-0">
      <div className="nav-top flex-grow-1">
        <div className="container d-flex flex-row h-100">
          <div className="text-center navbar-brand-wrapper d-flex align-items-top">
            <h1 className="navbar-brand brand-logo" style={{ color: '#fff' }}>Staff Directory</h1>
            <h1 className="navbar-brand brand-logo-mini" style={{ color: '#fff' }}>Staff Directory</h1>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul className="navbar-nav navbar-nav-right mr-0">
              <li className="nav-item nav-profile" hidden={ this.state.name === null ? true : false }>
                <a className="nav-link">
                  <span className="nav-profile-text">{`${this.date.toLocaleTimeString().split(' ')[1] === 'AM' ? 'Morning':'Afternoon'}! ${this.state.name}. ${this.date.toLocaleTimeString().split(' ')[1] === 'AM' ? 'Drink caffe and work okay?':'Are you alredy lunch?'}`}</span>
                  <img src={this.state.statusImg === true ? this.state.image:require('../../views/employee/users.jpeg')} alt="profile" style={{ width: 35, height: 35, borderRadius: 3 }}/>
                </a>
              </li>
            </ul>
            <button className="navbar-toggler align-self-center" type="button" data-toggle="minimize" onClick={this.handlerClick_nav}>
              <span className="icon-menu text-white"></span>
            </button>
          </div>
        </div>
      </div>
      <div className={this.state.classnav}>
        <div className="container">
          <ul className="nav page-navigation">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="link-icon icon-disc"></i> <span className="menu-title">Employees</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list"><i className="link-icon icon-disc"></i> <span className="menu-title">Employee List</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard"><i className="link-icon icon-screen-desktop"></i> <span className="menu-title">Dashboard</span></Link>
            </li>
            <li className={this.state.classli} onClick={this.handlerClick_li}>
              <p className="nav-link"><i className="link-icon icon-book-open"></i> <span className="menu-title">Forms</span><i className="menu-arrow"></i></p>
              <div className="submenu">
                <ul className="submenu-item">
                  <li className="nav-item"><Link className="nav-link" to='/insertform'>Insert new member</Link></li>
                  <li className="nav-item"><Link className="nav-link" to='/editform'>Edit staff</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  };
}