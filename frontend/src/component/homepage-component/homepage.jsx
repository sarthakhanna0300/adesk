import React, { Component } from "react";
import "./homepage.css";
import { AdvtList } from '../advt-list-component/advt-list';
import { getAdvertisements } from '../.././ServerService';
import { Row } from "react-bootstrap";
const axios = require('axios');

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      advertisement:[]
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/advts')
  .then(response => response.data).then(advts => this.setState({ advertisement: advts }))
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  render() {
    // console.log(localStorage.getItem("Token:"))
    // const { advertisement } = this.state;
    // const filteredAdvs = advertisement.filter(advertisement =>
    //   advertisement.includes(advertisement.show==true)
    // );

    // console.log(filteredAdvs);
    return (
      <div>
        <h2 className="margin">Advertisements</h2>
        <Row xs={1} md={2} className="g-4">
            <AdvtList advertisement={this.state.advertisement}/>
        </Row>
      </div>
    );
  }
}
export default Homepage;
