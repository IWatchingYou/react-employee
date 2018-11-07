import React from 'react';

export default class WizardStaffCode extends React.Component{
  render() {
    return (
      <form onSubmit={this.props.SubmitStaffCode}>
        <div class="form-group">
          <label>Let know about staff code</label>
          <input 
            type="text" 
            class="form-control" 
            placeholder="Staff Code" 
            required 
            onChange={this.props.ChangeStaffCode} 
            value={this.props.StaffCode}
          />
        </div>
        <div class="form-group">
          <label>Username</label>
          <input 
            type="text" 
            class="form-control" 
            placeholder="Username" 
            required 
            onChange={this.props.ChangeUsername} 
            value={this.props.Username}
          />
        </div>
        <button 
          className="btn btn-primary"
          type="submit"
        >
        Next
        </button>
      </form>
    )
  }
}