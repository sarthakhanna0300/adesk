import React, { Component, component } from "react";
import { connect } from "react-redux";
import { login } from "../.././ServerService";
import "./login.css";
import Swal from "sweetalert2";

class Login extends Component {
  state = {
    present: false,
    orderForm: {
      email: {
        label: "Email",
        elementType: "input",
        elementConfig: {
          type: "email",
        },
        error: " Valid Email is Required",
        validation: {
          required: true,
          ajax: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
        },
        valid: false,
        value: "",
        touched: false,
      },

      password: {
        label: "Password",
        elementType: "input",
        elementConfig: {
          type: "text",
        },
        error: "Enter Your Password",
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
    if (rules.ajax) {
      isValid = value.trim().match(rules.ajax) && isValid;
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
    console.log("helooo");
    event.preventDefault();
    login(
      this.state.orderForm.email.value,
      this.state.orderForm.password.value
    ).then((response) => {
      console.log(response);
      response.json().then((response) => {
        console.log(response.user);
        this.props.changeLoader();
        localStorage.setItem("token", response.token);
        localStorage.setItem("name", response.user);
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
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 padding-col">
              <div className="box">
                <div className="head-display2 head center">LogIn</div>
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
                    <button
                      className="mx-auto text-center btn btn-primary mt-2"
                      type="submit"
                    >
                      Login
                    </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
