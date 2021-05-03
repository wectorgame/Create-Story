import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Component } from "react";
import { connect } from "react-redux";
import {
  counterChanger,
  dateInHandler,
  newExcursions,
  newPlace,
} from "../../store/actions/create";
import Calendar from "./CreateStoryComponents/Calendar";

import "./CreateStory.scss";
import { ChipInput } from "./CreateStoryComponents/ChipInput";
import FormInputs from "./CreateStoryComponents/FormInputs";
import { GuestCounter } from "./CreateStoryComponents/GuestCounter";
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
  render() {
    return (
      <div className="container">
        <h1>Начнем путешествие</h1>

        <div className="Create-Form">
          <form onSubmit={this.onSubmitHandler}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container>
                <Calendar
                  label={"дата заезда"}
                  value={this.props.dateIn}
                  onChange={this.dateInChanger}
                />
                <Calendar
                  label={"дата Выезда"}
                  value={this.props.dateOut}
                  onChange={this.dateInChanger}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <FormInputs
              places={this.props.places}
              placeChange={this.placeHandler}
            />
            <GuestCounter
              guests={this.props.guests}
              addCounter={this.addCounterHandler}
              minusCounter={this.minusCounterHandler}
            />
            <ChipInput
              excursion={this.props.excursions}
              excursionChange={this.excursionHandler}
              label={"Экскурсии"}
            />
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    adults: state.create.adults,
    places: state.create.places,
    children: state.create.children,
    dateIn: state.create.dateIn,
    dateOut: state.create.dateOut,
    excursions: state.create.excursions,
    guests: state.create.guests,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dateInHandler: (date) => dispatch(dateInHandler(date, false)),
    newExcursions: (exc) => dispatch(newExcursions(exc)),
    newPlace: (place) => dispatch(newPlace(place)),
    counterChanger: (num) => dispatch(counterChanger(num)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStory);
