import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../Home/HomeComponents/Typography";
import authIcon from "../../images/auth-icon.svg";
import HowItWorks2 from "../../images/productHowItWorks2.svg";
import HowItWorks3 from "../../images/productHowItWorks3.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff5f8",
    overflow: "hidden",
    backgroundSize: "cover",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function HowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Как это работает ?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img src={authIcon} alt="suitcase" className={classes.image} />
                <Typography variant="h5" align="center">
                  Зарегистрируйтесь или авторизуйтесь.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img src={HowItWorks2} alt="graph" className={classes.image} />
                <Typography variant="h5" align="center">
                  Зайдите в раздел создать, и заполните анкету.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img src={HowItWorks3} alt="clock" className={classes.image} />
                <Typography variant="h5" align="center">
                  {"Готово! "}
                  {
                    "Вы можете посмотреть свой или выбрать уже собранный тур в разделе выбрать."
                  }
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HowItWorks);
