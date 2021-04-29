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
  console.log(classes);
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
              <Typography variant="h5">
                {
                  "From the latest trendy boutique hotel to the iconic palace with XXL pool"
                }
                {
                  ", go for a mini-vacation just a few subway stops away from your home."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues2} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                Новейший опыт
              </Typography>
              <Typography variant="h5">
                {
                  "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                }
                {"your Sundays will not be alike."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues3} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Лучшие рейтинги
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
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