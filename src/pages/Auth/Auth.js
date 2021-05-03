import { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { auth } from "../../store/actions/auth";
import "./Auth.scss";
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class Auth extends Component {
  state = {
    cls: ["container", "container-auth"],
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Введите корректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        errorMessage: "Введите корректный пароль",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };
  loginHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    );
  };
  registerHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
    );
  };

  submitHandler = (event) => {
    event.preventDefault();
  };
  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[controlName] = control;
    let isFormValid = true;
    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });
    this.setState({
      formControls,
      isFormValid,
    });
  };
  validateControl(value, validation) {
    if (!validation) return true;
    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    return isValid;
  }
  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      const iconClasses =
        control.type === "email" ? "fas fa-envelope" : "fas fa-lock";
      return (
        <div className="input-field" key={index}>
          <i className={iconClasses}></i>
          <Input
            key={controlName + index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={(event) => this.onChangeHandler(event, controlName)}
          ></Input>
        </div>
      );
    });
  }
  signUpChanger = () => {
    const signUpMode = ["container", "sign-up-mode", "container-auth"];
    if (!this.state.cls.includes("sign-up-mode")) {
      this.setState({
        cls: signUpMode,
      });
    } else {
      this.setState({
        cls: ["container", "container-auth"],
      });
    }
  };
  render() {
    return (
      <div className="auth-background">
        <div className={this.state.cls.join(" ")}>
          <div className="forms-container">
            <div className="signin-signup">
              <form onSubmit={this.submitHandler} className="sign-in-form">
                <h2 className="title">Авторизация</h2>

                {this.renderInputs()}
                <Button
                  type="success"
                  onClick={this.loginHandler}
                  disabled={!this.state.isFormValid}
                >
                  Войти
                </Button>
              </form>
              <form action="#" className="sign-up-form">
                {this.renderInputs()}
                <Button
                  type="primary"
                  onClick={this.registerHandler}
                  disabled={!this.state.isFormValid}
                >
                  Регистрация
                </Button>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Впервые здесь ?</h3>
                <p>ЧТобы продолжить пожалуйста зарегистрируйтесь !</p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  onClick={this.signUpChanger}
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Добро пожаловать!</h3>
                <p>Осталось только авторизоваться!</p>
                <button
                  className="btn transparent"
                  id="sign-in-btn"
                  onClick={this.signUpChanger}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password, isLogin) =>
      dispatch(auth(email, password, isLogin)),
  };
}
export default connect(null, mapDispatchToProps)(Auth);
