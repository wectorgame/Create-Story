import "./GuestCounter.scss";
export function GuestCounter(props) {
  return (
    <div className={"counter"}>
      <span className={"people"}>Количество гостей </span>
      <button
        className={"minus"}
        onClick={props.minusCounter}
        disabled={props.guests <= 0}
      >
        -
      </button>
      <input type="text" name="guests" readOnly value={props.guests}></input>
      <button
        className={"plus"}
        onClick={props.addCounter}
        disabled={props.guests >= 10}
      >
        +
      </button>
    </div>
  );
}
