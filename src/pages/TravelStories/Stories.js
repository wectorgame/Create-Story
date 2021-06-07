import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Loader from "../../components/UI/Loader/Loader";
import { fetchStories } from "../../store/actions/story";
import "./Travels.scss";
import check from "../../images/check-line.svg";
import close from "../../images/close-line.svg";
class Stories extends Component {
  renderOrderList(list) {
    const placesToImage = {
      Меганом: "__meganom",
      "Новый Свет": "__newSvit",
      Судак: "__sudak",
      Коктебель: "__koktebel",
      Ялта: "__yalta",
      Севастополь: "__sevastopol",
    };
    return list.map((order, index) => {
      const price = Math.floor(
        order.guests * (((order.out - order.in) / (60 * 60 * 1000 * 24)) * 750)
      );

      return (
        <Col key={index}>
          <div className="cards">
            <div className="order">
              <div className={`order${placesToImage[order.place]}`}></div>
              <div className="order__text">
                <span className="order__text__place">{order.place}</span>
                <div className="order__text__time">
                  <span className="order__text__time__in">
                    Заезд {order.in.toLocaleDateString()}
                  </span>
                  <span className="order__text__time__out">
                    Выезд {order.out.toLocaleDateString()}
                  </span>
                </div>
                <div className="order__text__excurs">
                  <strong>Выбранные экскурсии:</strong> <br></br>{" "}
                  {order.exc.join(", ")}
                </div>
                <div className="order__text__services">
                  <span>
                    Свободное время{" "}
                    <img
                      height="15"
                      alt={check}
                      src={order.freeTime ? check : close}
                    ></img>
                  </span>
                  <span>
                    Транспорт{" "}
                    <img
                      height="15"
                      alt={check}
                      src={order.transport ? check : close}
                    ></img>
                  </span>
                  <span>
                    Еда{" "}
                    <img
                      height="15"
                      alt={check}
                      src={order.food ? check : close}
                    ></img>
                  </span>
                </div>
              </div>
              <div className="order__stats">
                <div className="order__stats__stat">
                  <div className="order__stats__type">Гостей:</div>
                  <div className="card__stats__value">
                    {order.guests}
                    <sup>чел</sup>
                  </div>
                </div>
                <div className="order__stats__stat">
                  <div className="order__stats__type">Стоимость:</div>
                  <div className="card__stats__value">
                    {price}
                    <sup>руб.</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
    });
  }
  renderCard(cards) {
    return cards.map((card, index) => (
      <Col key={index}>
        <div className="cards">
          <div className="card">
            <div className={card.pictureClass}></div>
            <div className="card__text">
              <span className="card__place">{card.place}</span>
              <h2 style={{ color: "black" }}>{card.header}</h2>
              <p>{card.text}</p>
            </div>
            <div className="card__stats">
              <div className="card__stats__stat">
                <div className="card__stats__type">До моря</div>
                <div className="card__stats__value">
                  {card.time}
                  <sup>мин</sup>
                </div>
              </div>
              <div className="card__stats__stat card__stat__border">
                <div className="card__stats__type">Цена</div>
                <div className="card__stats__value">{card.price} руб</div>
              </div>
              <div className="card__stats__stat">
                <div className="card__stats__type">Отзывы</div>
                <div className="card__stats__value">{card.rate}/5</div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    ));
  }
  async componentDidMount() {
    this.props.fetchStories();
  }
  render() {
    const cards = [
      {
        place: "Меганом",
        header: "Покорение диких пляжей",
        text: "Здесь вас ждут невероятные обеды на огне, невероятно чистая вода у самого берега, поездки на яхте и многое другое.",
        time: 0,
        price: 7999,
        rate: 4.9,
        pictureClass: "card__meganom",
      },
      {
        place: "Новый свет",
        header: "5 дней на берегу моря",
        text: "В этом путешествии вас ждут невероятные виды гор, поездки на катере вдоль побередья юдно-восточного Крыма и многое другое.",
        time: 5,
        price: 9999,
        rate: 4.7,
        pictureClass: "card__newsvit",
      },
      {
        place: "Коктебель",
        header: "Жемчужина Крыма",
        text: "Все кто приезжает в Крым хотят посетить Коктебель, после него вы заходите туда еще раз",
        time: 7,
        price: 11999,
        rate: 4.8,
        pictureClass: "card__koktebel",
      },
    ];
    const myOrder = this.props.stories.map((el) => {
      return {
        place: el.currentPlace,
        in: new Date(el.dateIn),
        out: new Date(el.dateOut),
        food: el.food,
        transport: el.transport,
        exc: el.currentExc,
        freeTime: el.freeTime,
        guests: el.guests,
      };
    });

    return (
      <Container fluid className="Stories Stories__background">
        <Row>
          <h1>Ваши Заявки</h1>
        </Row>
        <Row>
          {this.props.loading ? (
            <Loader></Loader>
          ) : (
            this.renderOrderList(myOrder)
          )}
        </Row>

        <Row>
          <h1>Популярные предложения</h1>
        </Row>
        <Container>
          <Row>{this.renderCard(cards)}</Row>
        </Container>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    stories: state.story.stories,
    loading: state.story.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchStories: () => dispatch(fetchStories()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Stories);
