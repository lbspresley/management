import React from "react";
import Customer from "./components/Customer";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing.unit * 3,
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const initialCustomers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "Maria",
    birthday: "960121",
    gender: "uomo",
    job: "Student",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "Natasha",
    birthday: "010425",
    gender: "uomo",
    job: "Cuoco",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "진패옥",
    birthday: "981225",
    gender: "donna",
    job: "Cameriere",
  },
];

class App extends React.Component {
  state = { customers: initialCustomers };

  componentDidMount() {
    // console.log(`res : ${res}`);
    this.getCustomers()
      // this.getCustomersAxios()
      .then((res) => console.log("result : " + res))
      .then((res) => this.setState({ customers: res.json() }))
      .catch((err) => console.log(err));
  }

  axios = require("axios");
  config = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:5500",
      "Access-Control-Allow-Credential": true,
    },
    method: "GET",
    url: "http://localhost:5500/api/customers",
  };
  getCustomersAxios = async () => {
    this.axios(this.config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  getCustomers = async () => {
    await fetch("/api/customers")
      .then((response) => console.log(`response status : ${response.status}`))
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    // const response = await fetch("/api/customers");
    // const body = await response.json();
    // return body;
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers
              ? this.state.customers.map((c) => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                })
              : []}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
// export default App;
