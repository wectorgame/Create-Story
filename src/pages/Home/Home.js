import { Button } from "@material-ui/core";
import { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import ChillCategories from "./HomeComponents/ChillCategories";
import ProductValues from "./HomeComponents/ProductValues";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section className={"Home__background"}>
          <div className="container Home__root">
            <h1 className="Home__h1">
              Создай выходные по своему стилю
              
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
              <Link to="auth" className="auth-button">Авторизация</Link>
              
            </Button>
          </div>
        </section>
        <ProductValues></ProductValues>
        <ChillCategories></ChillCategories>
        <footer></footer>
      </div>
    );
  }
}

export default Home;
