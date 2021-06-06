import { Component } from "react";
import "./TravelProfile.scss";
import aqualang from "../../images/anurag-harishchandrakar-lRvQgd_AP9E-unsplash.jpg";
import buhta from "../../images/anastasiia-rozumna-rLJR8cfqs2U-unsplash.jpg";
import mountain from "../../images/timur-m-HtT0rD1pASc-unsplash.jpg";
class TravelProfile extends Component {
  /* renderTravels() {
    return <div></div>;
  } */
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Travel-Profile ">
        <div className="Travel-Profile__background">
          {/* {this.renderTravels()} */}

          <div className="services pt-5 mb-5">
            <div className="service">
              <div className="service-image service-image-acva">
                <img src={aqualang} alt="aqualang" />
              </div>
              <div className="service-info">
                <div className="place-name">
                  <span></span>Южный берег Крыма{" "}
                </div>
                <h1 className="service-name">Дайвинг</h1>
                <p className="service-text">
                  {" "}
                  Для дайвинга есть все условия в Крыму. Подводные пейзажи у
                  берегов полуострова невероятно живописны, а специализированные
                  центры, где легко арендовать оборудование, имеются на всех
                  популярных курортах. Заниматься погружениями на Тавриде можно
                  повсеместно, но профессионалы облюбовали здесь несколько мест,
                  где условия наиболее благоприятны для этого.{" "}
                </p>
                {/*   <button href="#" className="service-cta">
                  Узнать больше
                </button> */}
              </div>
            </div>
          </div>
          <div className="services mt-5 mb-5">
            <div className="service">
              <div className="service-image service-image-sea">
                <img src={buhta} alt="" />
              </div>
              <div className="service-info">
                <div className="place-name">
                  <span></span>Южный берег Крыма{" "}
                </div>
                <h1 className="service-name">Морская прогулка</h1>
                <p className="service-text">
                  Морские прогулки на яхте в Крыму – это совершенно уникальный
                  вид отдыха. Вам не надо трястись по пыльным дорогам в тесноте
                  автомобиля. Комфорт, предоставляемый вам на борту яхту во
                  время круиза, совершенно не соизмерим. Купание в открытом
                  море, рыбалка и дайвинг, пикники, разнообразные напитки и
                  приморская кухня – все это даст вам заряд бодрости на целый
                  год.{" "}
                </p>
                {/*   <button href="#" className="service-cta">
                  Узнать больше
                </button> */}
              </div>
            </div>
          </div>
          <div className="services mt-5 ">
            <div className="service">
              <div className="service-image service-image-moun">
                <img src={mountain} alt="mountain" />
              </div>
              <div className="service-info">
                <div className="place-name">
                  <span></span>Южно-восточный берег Крыма{" "}
                </div>
                <h1 className="service-name">Прогулка в горы</h1>
                <p className="service-text">
                  {" "}
                  Душевная атмосфера палаточного лагеря, вся романтика походной
                  жизни. И в то же время близость элементарных благ цивилизации.
                  Каждый день - походы налегке в самые интересные места
                  юго-восточного Крыма. Будем купаться в море, в озёрах и в
                  реках! Это отлично подойдет для тех кто хочет перезагрузиться
                  среди прекрасной природы Крыма и получить комфортные нагрузки.{" "}
                </p>
                {/*  <button href="#" className="service-cta">
                  Узнать больше
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelProfile;
