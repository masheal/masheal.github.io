import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, job, manager, hireDate, salary, deptId) {
  return { id, name, job, manager, hireDate, salary, deptId };
}

const rows = [
  createData(
    7369,
    'SMITH',
    'CLERK',
    7902,
    '1980-12-17T00:00:00.000+0000',
    800.0,
    20,
  ),
  createData(
    7430,
    'WAYNE',
    'CLERK',
    7698,
    '1981-12-03T00:00:00.000+0000',
    950.0,
    70,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
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
            <TableCell align="right">Department Id</TableCell>
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
              <TableCell align="right">{row.deptId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}
