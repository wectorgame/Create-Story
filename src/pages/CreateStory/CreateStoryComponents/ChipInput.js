import {
  Chip,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 400,
    width: 240,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(excursion, excursionArr, theme) {
  return {
    fontWeight:
      excursionArr.indexOf(excursion) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export function ChipInput(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-mutiple-chip-label">{props.label}</InputLabel>
      <Select
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        defaultValue={[]}
        onChange={props.excursionChange}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {props.excursion.map((excursion) => (
          <MenuItem
            key={excursion}
            value={excursion}
            style={getStyles(excursion, props.excursion, theme)}
          >
            {excursion}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
