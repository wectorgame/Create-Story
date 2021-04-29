import { Button } from "@material-ui/core";
import { Component } from "react";

import "./Home.scss";
import ProductValues from "./HomeComponents/ProductValues";
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
            </Button>
          </div>
        </section>
        <ProductValues></ProductValues>
       {/*  <section className={"Home__advantages"}>
          <div className="container">
            <img
              src={CurvyLines}
              alt="Curvy Lines"
              className="CurvyLines"
            ></img>
            <div className=" row">
              <div className="card">
                <div className="card-image">
                  <img src={productValues1} alt="suitcase"></img>
                </div>
                <div className="card-text">
                  <span class="hotels">Лучшие отели</span>
                  <p>
                    От новейшего модного бутик-отеля до легендарного дворца с
                    бассейном размера XXL - отправляйтесь в мини-отпуск всего в
                    нескольких остановках метро от вашего дома.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img src={productValues2} alt="suitcase"></img>
                </div>
                <div className="card-text">
                  <span class="hotels">Новейший опыт</span>
                  <p>
                    От новейшего модного бутик-отеля до легендарного дворца с
                    бассейном размера XXL - отправляйтесь в мини-отпуск всего в
                    нескольких остановках метро от вашего дома.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img src={productValues3} alt="suitcase"></img>
                </div>
                <div className="card-text">
                  <span class="hotels">Лучшие отзывы</span>
                  <p>
                    От новейшего модного бутик-отеля до легендарного дворца с
                    бассейном размера XXL - отправляйтесь в мини-отпуск всего в
                    нескольких остановках метро от вашего дома.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <footer></footer>
      </div>
    );
  }
}

export default Home;
