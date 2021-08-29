import React, { Component } from "react";
import "./homepage-advt.css";
import { Card, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class AdvtCard extends Component {
  replace = (replace) => {
    console.log(replace);
    console.log(this.props);
    this.props.history.push("/adv/"+replace.id);
  }
  render() {
    console.log(this.props+"s");
    return (
      <div className="container">
        <div className="card-container">
          <Col className="col-pad">
            <Card className="mt-4 padd">
              <img
                variant="top"
                className="text-center mx-auto"
                height="100px"
                width="100px"
                src={this.props.advertisement.image}
              />
              <Card.Body>
                <Card.Title>{this.props.advertisement.title}</Card.Title>
                <Button variant="success" onClick={() => this.replace(this.props.advertisement)}>
                  Show details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
    );
  }
}

export default withRouter(AdvtCard);

// class AdvtCard extends Component {
//   render() {
//     return (
//       <div className="container">
//         <h2 className="margin">Advertisements</h2>
//         <Row xs={1} md={2} className="g-4">
//           {Array.from({ length: 4 }).map((_, idx) => (
//             <Col>
//               <Card>
//                 <Card.Img variant="top" src="" />
//                 <Card.Body>
//                   <Card.Title>Card title</Card.Title>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     );
//   }
// }
// export default AdvtCard;
