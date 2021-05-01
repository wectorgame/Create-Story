import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router";
import "./App.scss";
import Logout from "./components/Logout/Logout";
import Layout from "./hoc/Layout/Layout";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import CreateStory from "./pages/CreateStory/CreateStory";
import Home from "./pages/Home/Home";
import Stories from "./pages/TravelStories/Stories";
import { autoLogin } from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/" component={Home}></Route>
        <Redirect to="/" component={Home}></Redirect>
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/create-story" component={CreateStory}></Route>
          <Route path="/stories" component={Stories}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/" component={Home}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      );
    }
    return <Layout>{routes}</Layout>;
  }
}
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
