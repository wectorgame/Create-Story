import { Button, Grid } from "@material-ui/core";
import { Component } from "react";
import CurvyLines from "../../images/productCurvyLines.png";
import "./Home.scss";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section className={"Home__background"}>
          <div className="container Home__root">
          <h1 className="Home__h1">
            Создай выходные по своему стилю
            <hr></hr>
          </h1>
          <h3 className="Home__h3">
            Создай путешествие которое еще никто не делал и получи скидку до
            -50%
          </h3>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className="Home__button"
          >
            {" "}
            Авторизация{" "}
          </Button></div>
        </section>
       
        <footer></footer>
      </div>
    );
  }
}

export default Home;
