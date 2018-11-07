import React from 'react';

export default class WizardPassword extends React.Component{
  render() {
    return (
      <form onSubmit={this.props.onSubmitRegister}>
        <div class="form-group">
          <label>Password</label>
          <input 
            type="password" 
            class="form-control" 
            placeholder="password" 
            required 
            onChange={this.props.ChangePassword} 
            value={this.props.Password}
          />
        </div>
        <div class="form-group">
          <label>Retry Password</label>
          <input 
            type="password" 
            class="form-control" 
            placeholder="password" 
            required 
            onChange={this.props.ChangeRepassword} 
            value={this.props.Repassword}
          />
        </div>
        <div className="form-group">
          <label>Select Role</label>
          <select className="form-control" value={this.props.Role} onChange={this.props.ChangeRole}>
            <option value='Administrator'>Administrator</option>
            <option value='Readonly'>Readonly</option>
            <option value='Writeonly'>Writeonly</option>
            <option value='Read Write'>Read Write</option>
          </select>
        </div>
        <button 
          className="btn btn-primary"
          type="button"
          style={{
            marginRight: 20
          }}
          onClick={this.props.onClickBack}
        >
        Back
        </button>
        <button 
          className="btn btn-primary"
          type="submit"
        >
        Submit
        </button>
      </form>
    )
  }
}