import React, { Component }  from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class AddressForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      id: 0,
      name: "",
      job: "",
      manager: "N/A",
      hireDate: null,
      salary: 0,
      deptId: 0,
    }
  }

  componentDidUpdate () {
    if (this.props.handleSubmit) {
      this.props.handleSubmit(this.state);
    }
  }

  handleIdChange = (id) => {
    this.setState({
      id: id.target.value
    })
  } 

  handleNameChange = (name) => {
    this.setState({
      name: name.target.value
    })
  } 

  handleJobChange = (job) => {
    this.setState({
      job: job.target.value
    })
  } 

  handleManagerChange = (manager) => {
    this.setState({
      manager: manager.target.value
    })
  } 

  handleHireDateChange = (hireDate) => {
    this.setState({
      hireDate: hireDate.target.value
    })
  } 

  handleSalaryChange = (salary) => {
    this.setState({
      salary: salary.target.value
    })
  } 

  handleDeptidChange = (deptId) => {
    this.setState({
      deptId: deptId.target.value
    })
  } 

  render () {
    return (
      <React.Fragment>
        {/* <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="id"
              name="id"
              label="Id"
              fullWidth
              autoComplete="given-name"
              onChange={this.handleIdChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="family-name"
              onChange={this.handleNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="job"
              name="job"
              label="Job"
              fullWidth
              autoComplete="shipping address-level2"
              onChange={this.handleJobChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="manager"
              name="manager"
              label="Manager"
              fullWidth
              onChange={this.handleManagerChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="hireDate"
              name="hireDate"
              label="Hire Date"
              fullWidth
              autoComplete="shipping postal-code"
              onChange={this.handleHireDateChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="salary"
              name="salary"
              label="Salary"
              fullWidth
              autoComplete="shipping country"
              onChange={this.handleSalaryChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="deptid"
              name="deptid"
              label="Department Id"
              fullWidth
              autoComplete="shipping country"
              onChange={this.handleDeptidChange}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default AddressForm;