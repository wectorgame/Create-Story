import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "./Typography";

import productValues1 from "../../../images/productValues1.svg";
import productValues2 from "../../../images/productValues2.svg";
import productValues3 from "../../../images/productValues3.svg";
import CurvyLines from "../../../images/productCurvyLines.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#fff5f8",
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
    color: "#000",
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    color: "#000",
    textTransform: "uppercase",
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={CurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues1}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Лучшие Отели
              </Typography>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                {
                  "От новейшего модного бутик-отеля до легендарного дворца с бассейном XXL."
                }
                {/*        {
                  "- отправляйтесь в мини-отпуск всего в нескольких остановках метро от вашего дома."
                } */}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues2} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                Новейший опыт
              </Typography>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                {/* {"Может сегодня вы попробуете что-то новое?"} */}
                {
                  "Вас ждет много невероятных путешествий, мы поможем вам исполнить вашу мечту."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues3} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Лучшие рейтинги
              </Typography>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                {"Мы стараемся подобрать для вас самые выгодные предложения."}
                {/*  {"that you will not find anywhere else."} */}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
