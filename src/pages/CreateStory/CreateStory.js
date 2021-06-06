import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Component } from "react";
import { connect } from "react-redux";
import {
  checkBoxChanger,
  counterChanger,
  dateInHandler,
  finishStory,
  newExcursions,
  newPlace,
} from "../../store/actions/create";
import Calendar from "./CreateStoryComponents/Calendar";

import "./CreateStory.scss";
import { ChipInput } from "./CreateStoryComponents/ChipInput";
import FormInputs from "./CreateStoryComponents/FormInputs";
import { GuestCounter } from "./CreateStoryComponents/GuestCounter";
import CheckboxesGroup from "./CreateStoryComponents/CheckBoxGroup";
import ChillCategories from "../Home/HomeComponents/ChillCategories";
import Button from "../../components/UI/Button/Button";

class CreateStory extends Component {
  dateInChanger = (date) => {
    this.props.dateInHandler(date);
  };
  dateOutChanger = (date) => {
    this.props.dateInHandler(date, true);
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
  };
  excursionHandler = (excursion) => {
    this.props.newExcursions(excursion.target.value);
  };
  placeHandler = (place) => {
    this.props.newPlace(place.target.value);
  };
  addCounterHandler = () => {
    this.props.counterChanger(true);
  };
  minusCounterHandler = () => {
    this.props.counterChanger(false);
  };
  checkBoxHandler = (event) => {
    this.props.checkBoxChanger(event.target.name, event.target.checked);
  };
  validateControl(story) {
    let isValid = true;

    isValid = story.dateIn.getDay() + 1 <= story.dateOut.getDay() && isValid;
    isValid = story.currentPlace && isValid;
    isValid = story.currentExc.length > 0 && isValid;
    isValid = story.guests > 0 && isValid;
    return isValid;
  }
  finishStoryHandler = (event) => {
    event.preventDefault();

    this.props.finishStory(this.props.story);
  };
  render() {
    return (
      <div className="Create-Story">
        <div className="Create-background">
          <div className="container">
            <h1 className=" display-4">Твой Выбор, твои правила</h1>
            <div className="Create-Form">
              <form onSubmit={this.onSubmitHandler}>
                <MuiPickersUtilsProvider
                  utils={DateFnsUtils}
                >
                  <Grid container style={{ flexWrap: "nowrap" }}>
                    <Calendar
                      label={"дата Заезда"}
                      value={this.props.story.dateIn}
                      onChange={this.dateInChanger}
                    />
                    <Calendar
                      label={"дата Выезда"}
                      value={this.props.story.dateOut}
                      onChange={this.dateOutChanger}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <FormInputs
                  places={this.props.places}
                  placeChange={this.placeHandler}
                />
                <GuestCounter
                  guests={this.props.story.guests}
                  addCounter={this.addCounterHandler}
                  minusCounter={this.minusCounterHandler}
                />
                <ChipInput
                  excursion={this.props.excursions}
                  excursionChange={this.excursionHandler}
                  label={"Экскурсии"}
                />
                <CheckboxesGroup
                  food={this.props.story.food}
                  transport={this.props.story.transport}
                  freeTime={this.props.story.freeTime}
                  onChange={this.checkBoxHandler}
                />
                {this.validateControl(this.props.story) ? (
                  <Button type="secondary" onClick={this.finishStoryHandler}>
                    Отправить заявку
                  </Button>
                ) : (
                  <Button type="secondary" disabled={true}>
                    Отправить заявку
                  </Button>
                )}
              </form>
            </div>
          </div>
        </div>
        <ChillCategories></ChillCategories>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    story: state.create.story,
    places: state.create.places,
    excursions: state.create.excursions,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dateInHandler: (date, out) => dispatch(dateInHandler(date, out)),
    newExcursions: (exc) => dispatch(newExcursions(exc)),
    newPlace: (place) => dispatch(newPlace(place)),
    counterChanger: (num) => dispatch(counterChanger(num)),
    checkBoxChanger: (name, checked) =>
      dispatch(checkBoxChanger(name, checked)),
    finishStory: () => dispatch(finishStory()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStory);
