import React from 'react';
import axios from 'axios';
import Navigation from '../../components/nav/Navigation';
import Footer from '../../components/nav/Footer';

export default class InsertForm extends React.Component{

  BASEURL = 'http://app.chokchey.com:4000/api/';

  constructor(){
    super();
    this.state = {
      staff_code: '',
      branch: [],
      location: [],
      location_code: [],
      department_code: [],
      department: [],
      group_position: [],
      position: [],
      grade: [],
      gender: 'M',
      marital: 'Married',
      inputEnglishName: '',
      inputKhmerName: '',
      inputBirthYear: '',
      inputBirthMonth: '',
      inputBirthDay: '',
      inputPhoneNumber: '',
      inputEmail: '',
      inputJoinYear: '',
      inputJoinMonth: '',
      inputJoinDay: '',
      inputBranch: '',
      inputLocation: '',
      inputLocationCode: '',
      inputDepartment: '',
      inputDepartmentCode: '',
      inputPosition: '',
      inputGroupPosition: '',
      inputJobGrade: '',
      inputBranchstatus: true,
      inputLocationstatus: true,
      inputLocationCodestatus: true,
      inputDepartmentstatus: true,
      inputDepartmentCodestatus: true,
      inputPositionstatus: true,
      inputGroupPositionstatus: true,
      inputJobGradeStatus: true,
      submitStatus: '',
      image: require('./users.jpeg'),
      imagePath: [],
      isImaged: false
    }
  }

  handlerUpload=(event)=>{
    this.setState({
      imagePath: event.target.files[0],
      isImaged: true
    })

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
          this.setState({image: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }

    console.log(this.state.staff_code)
  }

  handlerClick_Submit(){
    const formData = new FormData();
    formData.append('Image', this.state.imagePath, this.state.imagePath.name);
    axios.post(`http://app.chokchey.com:4000/api/upload/${this.state.staff_code}`, formData)
  }

  handlerChange_Englishname=(event)=>{
    this.setState({ inputEnglishName: event.target.value })
  }

  handlerChange_Khmername=(event)=>{
    this.setState({ inputKhmerName: event.target.value })
  }

  handlerChange_Gender=(event)=>{
    this.setState({ gender: event.target.value })
  }

  handlerChange_Marital=(event)=>{
    this.setState({ marital: event.target.value })
  }

  handlerChange_Birthyear=(event)=>{
    this.setState({ inputBirthYear: event.target.value })
  }

  handlerChange_Birthmonth=(event)=>{
    this.setState({ inputBirthMonth : event.target.value })
  }

  handlerChange_Birthday=(event)=>{
    this.setState({ inputBirthDay: event.target.value })
  }

  handlerChange_Phonenumber=(event)=>{
    this.setState({ inputPhoneNumber: event.target.value })
  }

  handlerChange_Email=(event)=>{
    this.setState({ inputEmail: event.target.value })
  }

  handlerChange_Joinyear=(event)=>{
    this.setState({ inputJoinYear: event.target.value })
  }

  handlerChange_Joinmonth=(event)=>{
    this.setState({ inputJoinMonth: event.target.value })
  }

  handlerChange_Joinday=(event)=>{
    this.setState({ inputJoinDay: event.target.value })
  }

  handlerChange_Branch=(event)=>{
    this.setState({ inputBranch: event.target.value })
  }

  handlerChange_Locationcode=(event)=>{
    this.setState({ inputLocationCode: event.target.value })
  }

  handlerChange_Location=(event)=>{
    this.setState({ inputLocation: event.target.value })
  }

  handlerChange_Departmentcode=(event)=>{
    this.setState({ inputDepartmentCode: event.target.value })
  }

  handlerChange_Department=(event)=>{
    this.setState({ inputDepartment: event.target.value })
  }

  handlerChange_Groupposition=(event)=>{
    this.setState({ inputGroupPosition: event.target.value })
  }

  handlerChange_Position=(event)=>{
    this.setState({ inputPosition: event.target.value })
  }

  handlerChange_JobGrade=(event)=>{
    this.setState({ inputJobGrade: event.target.value })
  }

  handlerClick_JobGrade=(event)=>{
    if(this.state.inputJobGradeStatus === true){
      this.setState({ inputJobGradeStatus: false })
    }
    else{
      this.setState({ inputJobGradeStatus: true })
    }
  }

  handlerClick_Branch=()=>{
    if(this.state.inputBranchstatus === true){
      this.setState({ inputBranchstatus: false })
    }
    else{
      this.setState({ inputBranchstatus: true })
    }
  }

  handlerClick_Department=()=>{
    if(this.state.inputDepartmentstatus === true){
      this.setState({ inputDepartmentstatus: false })
    }
    else{
      this.setState({ inputDepartmentstatus: true })
    }
  }

  handlerClick_Departmentcode=()=>{
    if(this.state.inputDepartmentCodestatus === true){
      this.setState({ inputDepartmentCodestatus: false })
    }
    else{
      this.setState({ inputDepartmentCodestatus: true })
    }
  }

  handlerClick_Locationcode=()=>{
    if(this.state.inputLocationCodestatus === true){
      this.setState({ inputLocationCodestatus: false })
    }
    else{
      this.setState({ inputLocationCodestatus: true })
    }
  }

  handlerClick_Location=()=>{
    if(this.state.inputLocationstatus === true){
      this.setState({ inputLocationstatus: false })
    }
    else{
      this.setState({ inputLocationstatus: true })
    }
  }

  handlerClick_Groupposition=()=>{
    if(this.state.inputGroupPositionstatus === true){
      this.setState({ inputGroupPositionstatus: false })
    }
    else{
      this.setState({ inputGroupPositionstatus: true })
    }
  }

  handlerClick_Position=()=>{
    if(this.state.inputPositionstatus === true){
      this.setState({ inputPositionstatus: false })
    }
    else{
      this.setState({ inputPositionstatus: true })
    }
  }

  handlerClick_Save=(event)=>{
    event.preventDefault();
    if(this.validate_data() === true){
      return
    }
    else{
      this.setState({
        submitStatus: ''
      })
      setTimeout(()=>{

        const person = {
          staff_code: this.state.staff_code,
          branch_code: this.state.inputBranch,
          name_eng: this.state.inputEnglishName,
          name_khm: this.state.inputKhmerName,
          gender: this.state.gender,
          marital_status: this.state.marital,
          dob: `${this.state.inputBirthYear}-${this.state.inputBirthMonth}-${this.state.inputBirthDay}`,
          location: this.state.inputLocation,
          department: this.state.inputDepartment,
          group_position: this.state.inputGroupPosition,
          position: this.state.inputPosition,
          date_join: `${this.state.inputJoinYear}-${this.state.inputJoinMonth}-${this.state.inputJoinDay}`,
          department_code: this.state.inputDepartmentCode,
          location_code: this.state.inputLocationCode,
          email: this.state.inputEmail,
          first_name: this.state.inputEnglishName.split(' ')[0],
          last_name:  this.state.inputEnglishName.split(' ')[1],
          active_stat: true,
          contact_number: this.state.inputPhoneNumber,
          job_grade: this.state.inputJobGrade
        }
        
        axios.post(`${this.BASEURL}employee`, person)
        .then(res=>{
          alert(`Now you add new staff and staff code it ${this.state.staff_code}.`);
          console.log(res)
          this.setState({
            staff_code: '',
            inputBranch: '',
            inputEnglishName: '',
            inputKhmerName: '',
            gender: 'M',
            marital: 'Married',
            inputBirthYear: '',
            inputBirthMonth: '',
            inputBirthDay: '',
            inputLocation: '',
            inputLocationCode: '',
            inputDepartment: '',
            inputDepartmentCode: '',
            inputGroupPosition: '',
            inputPosition: '',
            inputJoinYear: '',
            inputJoinMonth: '',
            inputJoinDay: '',
            inputEmail: '',
            inputPhoneNumber: '',
            inputJobGrade: ''
          })
        })
        .catch(err=>{
          alert(`somthing wrong about network or about your input pleasse check.`);
          console.log(err)
        })
        
        if(this.state.isImaged === true){
          this.handlerClick_Submit();
          this.setState({ isImaged: false })
        }
        setTimeout(()=>{ 
          this._MAXVALUE();
        },2000)
      }, 1500)
    }
  }

  validate_data(){
    if( this.state.inputBirthYear.length > 4 ||
        this.state.inputBirthYear.length < 4 ||
        this.state.inputJoinYear.length > 4 ||
        this.state.inputJoinYear.length < 4
    ){
      this.setState({ submitStatus: 'No year contains more than 4 characters !' });
      return true;
    }
    else if(this.state.inputBirthMonth.length > 2 || this.state.inputJoinMonth.length > 2){
      this.setState({ submitStatus: 'No month contains more than 2 characters !' });
      return true;
    }
    else if(this.state.inputBirthDay.length > 2 || this.state.inputJoinDay.length > 2){
      this.setState({ submitStatus: 'No day contains more than 2 characters !' });
      return true;
    }
    else if(this.state.inputDepartmentCode.length > 3){
      this.setState({ submitStatus: 'maximun of character deparment code is 3 character !' });
      return true;
    }
    else if(this.state.inputLocationCode.length > 4){
      this.setState({ submitStatus: 'maximun of character location code is 4 character !' });
      return true;
    }
    else{
      this.setState({ submitStatus: '' });
      return false;
    }
  }

  componentDidMount(){
    this.branch();
    this.location();
    this.department();
    this.position();
    this.grade();
    this._MAXVALUE();
  }

  _MAXVALUE(){
    axios.get(`${this.BASEURL}countemp`)
    .then(res=>{
      var str = ""+ (parseInt(res.data.maxvalue)+1);
      var pad = "0000";
      var ans = pad.substring(0, pad.length - str.length) + str;
      this.setState({
        staff_code: ans
      });
    })
    .catch(err=>console.log(err))
  }

  branch(){
    axios.get(this.BASEURL + 'branch')
    .then(res => {
      this.setState({
        branch: res.data.result.map(bra=>{
          return(
            <option value={bra.branch_code} key={bra.branch_code}>{bra.branch_code}</option>
          )
        })
      })
    })
    .catch(error => console.log(error))
  }

  location(){
    axios.get(this.BASEURL + 'location')
    .then(res => {
      this.setState({
        location: res.data.result.map(loc=>{
          return(
            <option value={loc.location} key={loc.location}>{loc.location}</option>
          )
        })
      })
    })
    .catch(error => console.log(error))

    axios.get(this.BASEURL + 'location_code')
    .then(res => {
      this.setState({
        location_code: res.data.result.map(loc=>{
          return(
            <option value={loc.location_code} key={loc.location_code}>{loc.location_code}</option>
          )
        })
      })
    })
    .catch(error => console.log(error))
  }

  department(){
    axios.get(this.BASEURL + 'department')
    .then(res => {
      this.setState({
        department: res.data.result.map(dep=>{
          return(
            <option value={dep.department} key={dep.department}>{dep.department}</option>
          )
        })
      })
    })
    .catch(error => console.log(error))

    axios.get(this.BASEURL + 'department_code')
    .then(res => {
      this.setState({
        department_code: res.data.result.map(dep=>{
          return(
            <option value={dep.department_code} key={dep.department_code}>{dep.department_code}</option>
          )
        })
      })
    })
    .catch(error => console.log(error))
  }

  position(){
    axios.get(this.BASEURL + 'group_position')
    .then(res => {
      this.setState({
        group_position: res.data.result.map(pos=>{
          return(
            <option value={pos.group_position} key={pos.group_position}>{pos.group_position}</option>
          )
        })
      })
    })
    .catch(error => console.log(error))

    axios.get(this.BASEURL + 'position')
    .then(res => {
      this.setState({
        position: res.data.result.map(pos=>{
          return(
            <option value={pos.position} key={pos.position}>{pos.position}</option>
          )
        })
      })
    })
    .catch(error => console.log(error))
  }

  grade(){
    axios.get(this.BASEURL+'grade')
    .then(res=>{
      this.setState({
        grade: res.data.result.map(gra=>{
          return(
            <option value={gra.job_grade} key={gra.job_grade}>{gra.job_grade}</option>
          )
        })
      })
    })
    .catch(err=>console.log(err))
  }

  render() {
    return (
      <div>
        <Navigation/>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
            <form>
              <div className="row">
                <div className="col-md-3">
                  <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                      <div className="form-group col-xs-6">
                      <img id="image" src={this.state.image} style={{ width: '100%', height: 198 }} alt="none"/>
                      </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <label className="btn btn-success btn-block upload" disabled={this.state.btnUpload}>
                        <i className="icon-picture" style={{ marginRight: 10 }}></i>
                          Upload image
                        <input type="file" onChange={this.handlerUpload} disabled={this.state.btnUpload}/>
                      </label>
                    </div>
                  </div>
                  </div>
                  <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                  <div className="card-body">
                      <h4 className="card-title">Grade Job</h4>
                      <div className="form-group">
                        <input hidden={this.state.inputJobGradeStatus} onChange={this.handlerChange_JobGrade} type="text" className="form-control" value={this.state.inputJobGrade} placeholder="Please input word " required/>
                        <select className='form-control' onChange={this.handlerChange_JobGrade} hidden={this.state.inputJobGradeStatus === true ? false: true}>
                          <option selected>Choice...</option>
                          {this.state.grade}
                        </select>
                      </div>
                      <a className={this.state.inputJobGradeStatus === true ? "btn btn-danger btn-block text-light":"btn btn-warning btn-block text-light"} onClick={this.handlerClick_JobGrade}>
                        {this.state.inputJobGradeStatus === true ? `create new grade`:`back to list`}
                      </a>
                    </div>
                  </div>
                  </div>
                  <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-description">If you are looking already please click save</p>
                      <p className="card-description text-warning">{this.state.submitStatus}</p>
                      <button className="btn btn-info btn-block" type="submite" onClick={this.handlerClick_Save}>Save</button>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-9">
                <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Personal Information</h4>
                      <p className="card-description">Biology information</p>
                      
                      <div className="form-group">
                        <label>English name</label>
                        <input type="text" className="form-control" placeholder="English name" value={this.state.inputEnglishName} onChange={this.handlerChange_Englishname} required/>
                      </div>

                      <div className="form-group">
                        <label>Khmer name</label>
                        <input type="text" className="form-control" placeholder="Khmer name" value={this.state.inputKhmerName} onChange={this.handlerChange_Khmername} required/>
                      </div>

                      <div className="form-group">
                      <label>Gender</label>
                        <select className="form-control" onChange={this.handlerChange_Gender}>
                          <option value='M'>Male</option>
                          <option value='F'>Female</option>
                        </select>
                      </div>

                      <div className="form-group">
                      <label>Marital status</label>
                        <select className="form-control" onChange={this.handlerChange_Marital}>
                          <option value="Married">Married</option>
                          <option value="Single">Single</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <div className="row">
                        <div className="col-md-4 grid-margin">
                        <label>Birth date</label>
                          <input type="number" className="form-control" placeholder="Year" value={this.state.inputBirthYear} onChange={this.handlerChange_Birthyear} required/>
                        </div>
                        <div className="col-md-4 grid-margin">
                        <label></label>
                          <input type="number" className="form-control" placeholder="Month" value={this.state.inputBirthMonth} onChange={this.handlerChange_Birthmonth} required/>
                        </div>
                        <div className="col-md-4 grid-margin">
                        <label></label>
                          <input type="number" className="form-control" placeholder="Day" value={this.state.inputBirthDay} onChange={this.handlerChange_Birthday} required/>
                        </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Phonenumber</label>
                        <input type="text" className="form-control" placeholder="Phonenumber" value={this.state.inputPhoneNumber} onChange={this.handlerChange_Phonenumber} required/>
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" value={this.state.inputEmail} onChange={this.handlerChange_Email}/>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Join date</h4>
                      <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 grid-margin">
                        <label></label>
                          <input type="number" className="form-control" placeholder="Year" value={this.state.inputJoinYear} onChange={this.handlerChange_Joinyear} required/>
                        </div>
                        <div className="col-md-4 grid-margin">
                        <label></label>
                          <input type="number" className="form-control" placeholder="Month" value={this.state.inputJoinMonth} onChange={this.handlerChange_Joinmonth} required/>
                        </div>
                        <div className="col-md-4 grid-margin">
                        <label></label>
                          <input type="number" className="form-control" placeholder="Day" value={this.state.inputJoinDay} onChange={this.handlerChange_Joinday} required/>
                        </div>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Branch code</h4>
                      <div className="form-group">
                        <input hidden={this.state.inputBranchstatus} onChange={this.handlerChange_Branch} type="text" className="form-control" value={this.state.inputBranch} placeholder="If no value on selection please input word " required/>
                        <select className='form-control' onChange={this.handlerChange_Branch} hidden={this.state.inputBranchstatus === true ? false: true}>
                          <option selected>Choice...</option>
                          {this.state.branch}
                        </select>
                      </div>
                      <a className={this.state.inputBranchstatus === true ? "btn btn-danger text-light":"btn btn-warning text-light"} onClick={this.handlerClick_Branch}>
                        {this.state.inputBranchstatus === true ? `can't see the world in selection.`:`can you give me selection?`}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Location code</h4>
                      <div className="form-group">
                        <input hidden={this.state.inputLocationCodestatus} onChange={this.handlerChange_Locationcode} type="text" className="form-control" value={this.state.inputLocationCode} placeholder="If no value on selection please input word " required/>
                        <select className='form-control' onChange={this.handlerChange_Locationcode} hidden={this.state.inputLocationCodestatus === true ? false: true}>
                          <option selected>Choice...</option>
                          {this.state.location_code}
                        </select>
                      </div>
                      <a className={this.state.inputLocationCodestatus === true ? "btn btn-danger text-light":"btn btn-warning text-light"} onClick={this.handlerClick_Locationcode}>
                        {this.state.inputLocationCodestatus === true ? `can't see the world in selection.`:`can you give me selection?`}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Location</h4>
                      <div className="form-group">
                        <input hidden={this.state.inputLocationstatus} onChange={this.handlerChange_Location} type="text" className="form-control" value={this.state.inputLocation} placeholder="If no value on selection please input word " required/>
                        <select className='form-control' onChange={this.handlerChange_Location} hidden={this.state.inputLocationstatus === true ? false: true}>
                          <option selected>Choice...</option>
                          {this.state.location}
                        </select>
                      </div>
                      <a className={this.state.inputLocationstatus === true ? "btn btn-danger text-light":"btn btn-warning text-light"} onClick={this.handlerClick_Location}>
                        {this.state.inputLocationstatus === true ? `can't see the world in selection.`:`can you give me selection?`}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Department code</h4>
                      <div className="form-group">
                        <input hidden={this.state.inputDepartmentCodestatus} onChange={this.handlerChange_Departmentcode} type="text" className="form-control" value={this.state.inputDepartmentCode} placeholder="If no value on selection please input word " required/>
                        <select className='form-control' onChange={this.handlerChange_Departmentcode} hidden={this.state.inputDepartmentCodestatus === true ? false: true}>
                          <option selected>Choice...</option>
                          {this.state.department_code}
                        </select>
                      </div>
                      <a className={this.state.inputDepartmentCodestatus === true ? "btn btn-danger text-light":"btn btn-warning text-light"} onClick={this.handlerClick_Departmentcode}>
                        {this.state.inputDepartmentCodestatus === true ? `can't see the world in selection.`:`can you give me selection?`}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Department</h4>
                      <div className="form-group">
                        <input hidden={this.state.inputDepartmentstatus} onChange={this.handlerChange_Department} type="text" className="form-control" value={this.state.inputDepartment} placeholder="If no value on selection please input word " required/>
                        <select className='form-control' onChange={this.handlerChange_Department} hidden={this.state.inputDepartmentstatus === true ? false: true}>
                          <option selected>Choice...</option>
                          {this.state.department}
                        </select>
                      </div>
                      <a className={this.state.inputDepartmentstatus === true ? "btn btn-danger text-light":"btn btn-warning text-light"} onClick={this.handlerClick_Department}>
                        {this.state.inputDepartmentstatus === true ? `can't see the world in selection.`:`can you give me selection?`}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Group position</h4>
                      <div className="form-group">
                        <input hidden={this.state.inputGroupPositionstatus} onChange={this.handlerChange_Groupposition} type="text" className="form-control" value={this.state.inputGroupPosition} placeholder="If no value on selection please input word " required/>
                        <select className='form-control' onChange={this.handlerChange_Groupposition} hidden={this.state.inputGroupPositionstatus === true ? false: true}>
                          <option selected>Choice...</option>
                          {this.state.group_position}
                        </select>
                      </div>
                      <a className={this.state.inputGroupPositionstatus === true ? "btn btn-danger text-light":"btn btn-warning text-light"} onClick={this.handlerClick_Groupposition}>
                        {this.state.inputGroupPositionstatus === true ? `can't see the world in selection.`:`can you give me selection?`}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Position</h4>
                      <div className="form-group">
                        <input hidden={this.state.inputPositionstatus} onChange={this.handlerChange_Position} type="text" className="form-control" value={this.state.inputPosition} placeholder="If no value on selection please input word " required/>
                        <select className='form-control' onChange={this.handlerChange_Position} hidden={this.state.inputPositionstatus === true ? false: true}>
                          <option selected>Choice...</option>
                          {this.state.position}
                        </select>
                      </div>
                      <a className={this.state.inputPositionstatus === true ? "btn btn-danger text-light":"btn btn-warning text-light"} onClick={this.handlerClick_Position}>
                        {this.state.inputPositionstatus === true ? `can't see the world in selection.`:`can you give me selection?`}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
              </form>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  };
}

