import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
/* import FormHelperText from "@material-ui/core/FormHelperText"; */
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Дополнительно</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.food}
                onChange={props.onChange}
                name="food"
              />
            }
            label="Питание"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.transport}
                onChange={props.onChange}
                name="transport"
              />
            }
            label="Транспорт"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.freeTime}
                onChange={props.onChange}
                name="freeTime"
              />
            }
            label="Свободное время"
          />
        </FormGroup>
        {/* <FormHelperText>Хорошего отдыха!</FormHelperText> */}
      </FormControl>
    </div>
  );
}
