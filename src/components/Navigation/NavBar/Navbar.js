import { Component } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../../images/Logo.png";
import "./Navbar.scss";
class NavbarMenu extends Component {
  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            label={link.label}
            exact={link.exact}
            activeClassName={"active"}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }
  render() {
    const cls = ["Navbar", "navbar", "navbar-expand-lg"];
    const links = [];
    if (this.props.isAuthenticated) {
      links.push({ to: "about", label: "Как это работает?", exact: false });
      links.push({ to: "create-story", label: "Создать", exact: false });
      links.push({ to: "stories", label: "Выбрать", exact: false });

      links.push({ to: "logout", label: "Выйти", exact: true });
    } else {
      links.push({ to: "about", label: "Как это работает?", exact: false });
      links.push({ to: "auth", label: "Авторизация", exact: true });
    }
    return (
      <Navbar expand="lg" className={cls.join(" ")} fixed="top">
        <div className="container-fluid ">
          <NavLink
            to="/"
            exact
            activeClassName=""
            className="Logo navbar-brand"
          >
            <img src={Logo} alt={"Create Story"} />
            <span>CreateStory</span>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <ul className="navbar-nav">{this.renderLinks(links)}</ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}
export default NavbarMenu;
