import React, { Component } from "react";
import "./create.css";
import { connect } from "react-redux";
import "./create.css";
import {create} from '../../ServerService'
const axios = require('axios');

class Create extends Component {
  state = {
    present: false,
    show: false,
    orderForm: {
      title: {
        label: "Title",
        elementType: "input",
        elementConfig: {
          type: "text",
        },
        error: "Provide Title to Advertisement",
        validation: {
          required: true,
        },
        valid: false,
        value: "",
        touched: false,
      },
      desc: {
        label: "Details",
        elementType: "input",
        elementConfig: {
          type: "text",
        },
        error: "Enter Description",
        validation: {
          required: true,
        },
        valid: false,
        value: "",
        touched: false,
      },
      image: {
        label: "Image Url",
        elementType: "input",
        elementConfig: {
          type: "text",
        },
        error: "Provide Image to Advertisement",
        validation: {
          required: true,
        },
        valid: false,
        value: "",
        touched: false,
      },
    },
  };
  Checkvalidation = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minlength) {
      isValid = value.trim().length >= rules.minlength && isValid;
    }
    return isValid;
  };
  inputchangheHandler = (event, id) => {
    const UpdatedForm = { ...this.state.orderForm };
    const updatedElement = { ...this.state.orderForm[id] };
    updatedElement.value = event.target.value;
    updatedElement.valid = this.Checkvalidation(
      event.target.value,
      updatedElement.validation
    );
    UpdatedForm[id] = updatedElement;
    this.setState({ orderForm: UpdatedForm });
  };
  touched = (id) => {
    const UpdatedForm = { ...this.state.orderForm };
    const updatedElement = { ...this.state.orderForm[id] };
    updatedElement.touched = true;
    UpdatedForm[id] = updatedElement;
    this.setState({ orderForm: UpdatedForm });
  };
  submit = (event) => {
    event.preventDefault();
    create(
      this.state.orderForm.title.value,
      this.state.orderForm.desc.value,
      this.state.orderForm.image.value,
      this.state.show
    ).then((response) => {
      console.log(response);
      response.json().then((response) => {
        console.log(response.user);
        // this.props.changeLoader();
        this.props.history.replace("/");
      });
    });
  };
  render() {
    let Array = [];

    for (let key in this.state.orderForm) {
      Array.push({ id: key, config: this.state.orderForm[key] });
    }
    return (
      <div className="create">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 padding-col">
              <div className="box">
                <div className="head-display2 head center">Create Advertisement</div>
                <div className="form-padding">
                  <form onSubmit={(event) => this.submit(event)}>
                    {Array.map((element) => {
                      return (
                        <div key={element.id}>
                          <div className="label-padding"></div>
                          <div className="form-center">
                            <input
                              value={element.config.value}
                              placeholder={element.config.label}
                              onClick={() => this.touched(element.id)}
                              onChange={(event) =>
                                this.inputchangheHandler(event, element.id)
                              }
                              className={
                                !element.config.touched || element.config.valid
                                  ? null
                                  : "invalid"
                              }
                            ></input>
                          </div>
                          <div>
                            <span
                              className={
                                !element.config.touched || element.config.valid
                                  ? "opacity"
                                  : "error"
                              }
                            >
                              {element.config.error}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                    <div class="btn-toolbar">
                    <button
                      className="mx-auto text-center btn btn-primary mt-2 mr-2"
                      type="submit"
                    >
                      Draft
                    </button>
                    <button
                      className="mx-auto text-center btn btn-success mt-2 mr-2"
                      type="submit" onClick={this.state.show=true}
                    >
                      Publish
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.present,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeLoader: () => dispatch({ type: "SetToken" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
