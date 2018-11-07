import React from 'react';
import Card from './Card';
import axios from 'axios';
import Loader from '../../components/progress/Loader';
import Navigation from '../../components/nav/Navigation';
import Footer from '../../components/nav/Footer';

export default class Employee extends React.Component{

  BASEURL = 'http://app.chokchey.com:4000/api/';
  PATHIMG = 'http://app.chokchey.com:4000/static/';

  list_filter = [];
  pages = [];

  constructor(){
    super();
    this.state={
      employee: [],
      search: '',
      count: '',
      branch: [],
      department: [],
      position: [],
      valueBranch: '',
      valuePosition: '',
      valueActive: '',
      valuePage: 0,
      pages: [],
      isload: true,
      start_date: '',
      end_date: '',
      statusDatejoin: 'Find by date join',
    }

    this.handlerChange_search = this.handlerChange_search.bind(this);
    this.handlerChange_branch = this.handlerChange_branch.bind(this);
    this.handlerChange_position = this.handlerChange_position.bind(this);
    this.handlerClick_page = this.handlerClick_page.bind(this);
    this.handlerClick_firstpage = this.handlerClick_firstpage.bind(this);
    this.handlerClick_lastpage = this.handlerClick_lastpage.bind(this);
  }

  componentDidMount(){
    this.setState({isload: false});
    this.Render_Branch();
    this.Render_Department();
    this.Render_Position();
    this.Render_employees();
  }

  handlerChange_startdate=(event)=>{
    this.setState({
      start_date: event.target.value
    })
    setTimeout(()=>{
      this.Render_Search();
    },1000)
  }

  handlerChange_enddate=(event)=>{
    this.setState({
      end_date: event.target.value,
    })
    setTimeout(()=>{
      this.Render_Search();
    },1000)
  }

  handlerChange_search(event){
    this.setState({ 
      search: event.target.value,
      valuePage: 0,
      employee: [],
      isload: false
    })
    setTimeout(()=>{
      if(this.state.search === ''){
        this.Render_employees();
        return;
      }
      this.Render_Search();
    },1000)
  }

  handlerClick_page(event){
    this.setState({
      valuePage: parseInt(event.target.value),
      isload: false
    });
    setTimeout(()=>{
      this.Render_employees();
    }, 1000)
  }

  handlerClick_firstpage(){
    this.setState({
      valuePage: 0,
      isload: false
    });
    setTimeout(()=>{
      this.Render_Search();
    }, 1000)
  }

  handlerClick_lastpage(){
    this.setState({
      valuePage: this.pages[this.pages.length-1],
      isload: false
    });
    setTimeout(()=>{
      this.Render_Search();
    }, 1000)
  }

  handlerChange_branch(event){
    this.pages = [];
    this.setState({
      valueBranch: event.target.value,
      isload: false,
      pages: []
    })
    this.list_filter = [];

    setTimeout(()=>{
      if(this.state.valueBranch === '' || this.state.valueBranch === 'default'){
        this.Render_employees();
        return
      }

      axios.get(this.BASEURL + 'employees')
      .then(res=>{
        for(let i = 0 ; i < res.data.result.count ; i++){
          if(this.state.valuePosition === '' || this.state.valuePosition === 'default' ){
            if( res.data.result.rows[i].branch_code === this.state.valueBranch || 
              res.data.result.rows[i].department === this.state.valueBranch){
              this.list_filter.push(res.data.result.rows[i]);
            }
          }else{
            if(res.data.result.rows[i].position === this.state.valuePosition){
              if(res.data.result.rows[i].branch_code === this.state.valueBranch || 
                  res.data.result.rows[i].department === this.state.valueBranch){
                  this.list_filter.push(res.data.result.rows[i]);
              }
            }
          }
        }

        setTimeout(()=>{
          this.setState({
            employee: this.list_filter.map(emp=>{
              return(
                <Card 
                key={emp.id}
                image={`${this.PATHIMG}${emp.staff_code}.png`}
                name_khm={emp.name_khm}
                name_eng={emp.name_eng}
                active_stat={emp.active_stat}
                position={emp.position}
                branchCode={emp.branch_code}
                department={emp.department}
                email={emp.email}
                phone={emp.contact_number}
                dateJoin={`${emp.date_join.split('-')[0]}-${emp.date_join.split('-')[1]}-${emp.date_join.split('-')[2].substring(0, 2)}`}
                id={emp.id}
                staff={emp.staff_code}/>
              )
            }),
            isload: true
          })
        }, 1000)
      })
      .catch(err=> console.log(err))
    },500)
  }

  handlerChange_position(event){
    this.pages = [];
    this.setState({ 
      valuePosition: event.target.value,
      isload: false,
      pages: []
    })
    this.list_filter = [];

    setTimeout(()=>{
      if(this.state.valuePosition === '' || this.state.valuePosition === 'default'){
        this.Render_employees();
        return
      }

      axios.get(this.BASEURL + 'employees')
      .then(res=>{
        for(let i = 0 ; i < res.data.result.count ; i++){
          if(this.state.valueBranch === '' || this.state.valueBranch === 'default' ){
            if( res.data.result.rows[i].position === this.state.valuePosition){
              this.list_filter.push(res.data.result.rows[i]);
            }
          }else{
            if(res.data.result.rows[i].position === this.state.valuePosition){
              if(res.data.result.rows[i].branch_code === this.state.valueBranch || 
                  res.data.result.rows[i].department === this.state.valueBranch){
                this.list_filter.push(res.data.result.rows[i]);
              }
            }
          }
        }

        setTimeout(()=>{
          this.setState({
            employee: this.list_filter.map(emp=>{
              return(
                <Card 
                key={emp.id}
                image={`${this.PATHIMG}${emp.staff_code}.png`}
                name_khm={emp.name_khm}
                name_eng={emp.name_eng}
                active_stat={emp.active_stat}
                position={emp.position}
                branchCode={emp.branch_code}
                dateJoin={`${emp.date_join.split('-')[0]}-${emp.date_join.split('-')[1]}-${emp.date_join.split('-')[2].substring(0, 2)}`}
                department={emp.department}
                email={emp.email}
                phone={emp.contact_number}
                id={emp.id}
                staff={emp.staff_code}/>
              )
            }),
            isload: true
          })
        }, 1000)
      })
      .catch(err=> console.log(err))
    },500)
  }

  handlerChange_Active=(event)=>{
    if(event.target.value === 'true'){
      this.setState({ 
        valueActive: true,
        isload: false,
        pages: []
      })
    }
    else if(event.target.value === 'false'){
      this.setState({ 
        valueActive: false,
        isload: false,
        pages: []
      })
    }
    else{
      this.setState({ 
        valueActive: '',
        isload: false,
        pages: []
      })
    }

    setTimeout(()=>{
      if(this.state.valueActive === ''){
        this.Render_employees();
        return
      }
      else if(this.state.valueActive === true){
        this.Render_employees();
      }
      else if(this.state.valueActive === false){
        axios.get(this.BASEURL+'employee_stop')
        .then(res=>{
          this.setState({
            employee: res.data.result.rows.map(emp=>{
              return(
                <Card 
                key={emp.id}
                image={`${this.PATHIMG}${emp.staff_code}.png`}
                name_khm={emp.name_khm}
                name_eng={emp.name_eng}
                active_stat={emp.active_stat}
                position={emp.position}
                branchCode={emp.branch_code}
                dateJoin={`${emp.date_join.split('-')[0]}-${emp.date_join.split('-')[1]}-${emp.date_join.split('-')[2].substring(0, 2)}`}
                department={emp.department}
                email={emp.email}
                phone={emp.contact_number}
                id={emp.staff_code}
                staff={emp.staff_code}/>
              )
            }),
            isload: true
          })
        })
        .catch(err=> console.log(err))
      }
    },500)
  }

  Render_employees(){
    axios.get(this.BASEURL+"employees/page/"+this.state.valuePage)
    .then(res=>{
      let count = res.data.result.count/20;
      this.pages = [];
      this.list_filter= [];
      this.setState({
        pages: [],
        employee: []
      })

      for(let i = this.state.valuePage-1 ; i < count.toFixed(0) ; i++){
        if(this.pages.length !== 5){
          this.pages.push(i+1);
        }
      }
      this.setState({
        pages: this.pages.map(p=>{
          return(
            <li className={this.state.valuePage === parseInt(p) ? "page-item active":"page-item"}><button className="page-link" value={p} onClick={this.handlerClick_page}>{p+1}</button></li>
          )
        })
      })
      setTimeout(()=>{
        this.setState({
          employee: res.data.result.rows.map(emp=>{
            return(
              <Card 
              key={emp.id}
              image={`${this.PATHIMG}${emp.staff_code}.png`}
              name_khm={emp.name_khm}
              name_eng={emp.name_eng}
              active_stat={emp.active_stat}
              position={emp.position}
              branchCode={emp.branch_code}
              dateJoin={`${emp.date_join.split('-')[0]}-${emp.date_join.split('-')[1]}-${emp.date_join.split('-')[2].substring(0, 2)}`}
              department={emp.department}
              email={emp.email}
              phone={emp.contact_number}
              id={emp.id}
              staff={emp.staff_code}/>
            )
          }
          ),
          isload: true
        })
      }, 1000)
    })
    .catch(err => console.log(err));
    return;
  }

  Render_Search(){
    var str = '';
    if(this.state.start_date !== '' && this.state.end_date !== '' ){
      str = this.BASEURL+'employee?start_date='+this.state.start_date+'&end_date='+this.state.end_date;
    }
    else if(this.state.search !== ''){
      if(parseInt(this.state.search)){
        str = this.BASEURL+'employee?phone='+this.state.search;
      }
      else{
        str = this.BASEURL+'employee?name='+this.state.search;
      }
    }
    else{
       return this.Render_employees();
    }
    axios.get(str)
    .then(res=>{
      this.pages = [];
      this.setState({
        pages: [],
        employee: [],
        isload: false
      });
      setTimeout(()=>{
        this.setState({
          employee: res.data.result.rows.map(emp=>{
            return(
              <Card 
              key={emp.id}
              image={`${this.PATHIMG}${emp.staff_code}.png`}
              name_khm={emp.name_khm}
              name_eng={emp.name_eng}
              active_stat={emp.active_stat}
              position={emp.position}
              branchCode={emp.branch_code}
              dateJoin={`${emp.date_join.split('-')[0]}-${emp.date_join.split('-')[1]}-${emp.date_join.split('-')[2].substring(0, 2)}`}
              department={emp.department}
              email={emp.email}
              phone={emp.contact_number}
              id={emp.id}
              staff={emp.staff_code}/>
            )
            }),
          isload: true
        })
      }, 1000)
    })
    .catch(err => console.log(err));
    return;
  }

  Render_Branch(){
    axios.get(this.BASEURL + 'branch')
    .then(res => {
      this.setState({
        branch: res.data.result.map(bra => {
          return(
            <option value={bra.branch_code} key={bra.branch_code}>{bra.branch_code}</option>
          )
        })
      })
    })
    .catch(err => console.log(err));
  }

  Render_Department(){
    axios.get(this.BASEURL + 'department')
    .then(res => {
      this.setState({
        department: res.data.result.map(dep => {
          return(
            <option value={dep.department} key={dep.department}>{dep.department}</option>
          )
        })
      })
    })
    .catch(err => console.log(err));
  }

  Render_Position(){
    axios.get(this.BASEURL + 'position')
    .then(res => {
      this.setState({
        position: res.data.result.map(pos => {
          return(
            <option value={pos.position} key={pos.position}>{pos.position}</option>
          )
        })
      })
    })
    .catch(err => console.log(err));
  }

  render(){

    return(
        <div>
        <Navigation/>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-2 grid-margin">
                  <select className="form-control" value={this.state.valueBranch} onChange={this.handlerChange_branch}>
                    <option value='default' selected>Filter branch</option>
                    {this.state.branch}
                    {this.state.department}
                  </select>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-2 grid-margin">
                  <select className="form-control" value={this.state.valuePosition} onChange={this.handlerChange_position}>
                    <option value='default' selected>Filter position</option>
                    {this.state.position}
                  </select>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-2 grid-margin">
                    <select className="form-control" value={this.state.valueActive} onChange={this.handlerChange_Active}>
                      <option value={true} selected>Work</option>
                      <option value={false}>Stop</option>
                    </select>
                  </div>

                <div className="col-md-6 grid-margin">
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputUsername1" value={this.state.search} onChange={this.handlerChange_search} placeholder="Search ...."/>
                  </div>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-2 grid-margin">
                  <p>Join date from</p>
                  <input type="date" className="form-control" value={this.state.start_date} onChange={this.handlerChange_startdate}/>
                </div>
                
                <div className="col-xs-6 col-sm-6 col-md-2 grid-margin">
                  <p>Join date to</p>
                  <input type="date" className="form-control" value={this.state.end_date} onChange={this.handlerChange_enddate}/>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 grid-margin">
                  <Loader hidden={this.state.isload}/>
                </div>
              </div>

              <div className="row" hidden={this.state.isload === true ? false:true}>
                {this.state.employee}
              </div>
              <nav>
                <ul className="pagination rounded-flat pagination-success">
                  <li className="page-item"><button className="page-link" onClick={this.handlerClick_firstpage}><i className="icon-arrow-left"></i></button></li>
                  {this.state.pages}
                  <li className="page-item"><button className="page-link" onClick={this.handlerClick_lastpage}><i className="icon-arrow-right"></i></button></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}