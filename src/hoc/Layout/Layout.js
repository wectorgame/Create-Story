import { Component } from "react";
import { connect } from "react-redux";
import NavbarMenu from "../../components/Navigation/NavBar/Navbar";
import "./Layout.scss";
class Layout extends Component {
  render() {
    return (
      <div className="Layout ">
        <NavbarMenu isAuthenticated={this.props.isAuthenticated}></NavbarMenu>

        <main>{this.props.children}</main>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}
export default connect(mapStateToProps)(Layout);
