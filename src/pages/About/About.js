import { Component } from "react";
import ChillCategories from "../Home/HomeComponents/ChillCategories";
import HowItWorks from "./HowItWorks";

class About extends Component {
  render() {
    return (
      <div className="About">
        <HowItWorks></HowItWorks>
        <ChillCategories></ChillCategories>
      </div>
    );
  }
}

export default About;
