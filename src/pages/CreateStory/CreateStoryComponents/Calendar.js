import "date-fns";
import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

export default function Calendar(props) {
  const dateId = `date-picker - ${Math.random()}`;
  return (
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      id={dateId}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      style={{ margin: "16px 16px 8px 16px" }}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
}
