import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Travels.scss";
class Stories extends Component {
  renderOrderList(list) {
    return list.map((order, index) => <div key={index}></div>);
  }
  renderCard(cards) {
    return cards.map((card, index) => (
      <Col>
        <div className="cards" key={index}>
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
    return (
      <Container fluid className="Stories Stories__background">
        <Row>
          <h1>мои Заявки</h1>
          <div>
            <div>
              <span>Дата приезда</span>
            </div>
            <div>
              <span>Дата выезда</span>
            </div>
            <div>
              Выбранный город <span>Меганом</span>
            </div>
            <div>Количество человек</div>
          </div>
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

export default Stories;
