import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Link as RLink } from 'react-router-dom';
// import { Button } from 'antd';
import Button from '@material-ui/core/Button';

// Generate Order Data
function createData(id, name, job, manager, hireDate, salary, deptId) {
  return { id, name, job, manager, hireDate, salary, deptId };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

class Orders extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }
  }

  componentDidMount() {

    const requestOptions = {
        method: 'GET'
    };
    fetch("http://localhost:8080//employee/all", requestOptions)
      .then(res => res.json())
      .then(result => result.forEach(element => {
        const copyRow = Object.assign([], this.state.rows)
        copyRow.push({
          id: element.id,
          name: element.name,
          job: element.job,
          manager: element.manager == null ? "N/A" : element.manager,
          hireDate: element.hireDate,
          salary: element.salary,
          deptId: element.deptId,
        })
        this.setState({
          rows: copyRow
        })
      }))
  }

  render () {
    const classes = useStyles;
    const {rows} = this.state
    return (
      <React.Fragment>
        <Title>Employee Overview</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Hire Date</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Department Id</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.job}</TableCell>
                <TableCell>{row.manager}</TableCell>
                <TableCell>{row.hireDate}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.deptId}</TableCell>
                <TableCell>
                  <RLink to="/edit">
                    <Button>Edit</Button>
                  </RLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <RLink to="/create/employee">
            <Button>Add a new employee</Button>
          </RLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Orders;