import { withStyles } from "@material-ui/core";
import { useEffect, useRef } from "react";

const styles = (themes) => ({
  CityContainer: {
    position: "relative",
    overflow: "hidden",
    width: "100vw",
    height: "100vh",
  },
  sidebar: {
    height: "100%",
    width: "35%",
    position: " absolute",
    top: 0,
    left: 0,
    transition: themes.transitions.create("transform", { duration: "0.5s" }),
  },
  sidebarBlock: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  sidebarH1: {
    fontSize: "45px",
    marginBottom: "10px",
    marginTop: "-30px",
  },
  mainSlide: {
    height: "100%",
    position: "absolute",
    top: 0,
    left: "35%",
    width: "65%",
    transition: themes.transitions.create("transform", { duration: "0.5s" }),
  },
  mainSlideBlock: {
    backgroundRepeact: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
    width: "100%",
  },
  Button: {
    backgroundColor: "#fff",
    border: "none",
    color: "#aaa",
    cursor: "pointer",
    fontSize: "16px",
    padding: "15px",
    "&:hover": {
      color: "#222",
    },
    "&:focus": {
      outline: "none",
    },
  },
  controlButton: {
    position: "absolute",
    left: "35%",
    top: "50%",
    zIndex: "100",
  },
  downButton: {
    transform: "translateX(-100%)",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
  upButton: {
    transform: "translateY(-100%)",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  text: {
    padding: "30px",
    fontSize: "30px",
  },
});
const sidebar = [
  {
    background: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    title: "Ялта",
    text: "Это замечательный город на южном берегу Крыма, местные называют Ялту жемчужиной Крыма.",
  },
  {
    background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    title: "Новый свет",
    text: "Уютный Новый Свет – это затерянная среди гор маленькая долина, омываемая тремя разноцветными бухтами. ",
  },
  {
    background: "linear-gradient(to top, #e6b980 0%, #eacda3 100%)",
    title: "Севастополь",
    text: "Город-герой Севастополь расположился на юго-западной оконечности Крыма, на берегах Севастопольской бухты - одной из лучших природных гаваней в мире.",
  },
  {
    background: "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
    title: "Судак",
    text: "Он расположен в живописной долине и окружён архитектурными скалами.",
  },
];
const images = [
  {
    url: "https://images.unsplash.com/photo-1622454742405-3a1be7a7b330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
    title: "Судак",
  },
  {
    url: "https://images.unsplash.com/photo-1561555697-51794d9c6b0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Севастополь",
  },
  {
    url: "https://novyi-svet.in-facts.info/wp-content/uploads/2014/10/IMGP5724-1.jpg",
    title: "Массаж",
  },
  {
    url: "https://images.unsplash.com/photo-1564085740576-858daf715a64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    title: "Ялта",
  },
];
function CityGallery(props) {
  const sidebarEl = useRef(null);
  const mainSlideEl = useRef(null);
  let activeSlide = 0;
  useEffect(() => {
    sidebarEl.current.style.top = `-${(sidebar.length - 1) * 100}vh`;
  }, []);
  const onButtonDown = () => {
    ChangeSlide("down");
  };
  const onButtonUp = () => {
    ChangeSlide("up");
  };
  const ChangeSlide = (direction) => {
    if (direction === "up") {
      activeSlide++;
      if (activeSlide === sidebar.length) {
        activeSlide = 0;
      }
    } else if (direction === "down") {
      activeSlide--;
      if (activeSlide < 0) {
        activeSlide = sidebar.length - 1;
      }
    }
    mainSlideEl.current.style.transform = `translateY(-${activeSlide * 100}vh)`;
    sidebarEl.current.style.transform = `translateY(${activeSlide * 100}vh)`;
  };

  const { classes } = props;

  return (
    <div className={classes.CityContainer}>
      <div className={classes.sidebar} ref={sidebarEl}>
        {sidebar.map((side) => (
          <div
            key={side.title}
            style={{ background: `${side.background}` }}
            className={classes.sidebarBlock}
          >
            <h1 className={classes.sidebarH1}>{side.title}</h1>
            <p className={classes.text}>{side.text}</p>
          </div>
        ))}
      </div>
      <div className={classes.mainSlide} ref={mainSlideEl}>
        {images.map((image) => (
          <div
            className={classes.mainSlideBlock}
            key={image.title}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
            }}
          >
            {" "}
          </div>
        ))}
      </div>
      <div>
        <button
          className={`${classes.Button} ${classes.downButton} ${classes.controlButton} `}
          onClick={onButtonDown}
        >
          <i className="fas fa-arrow-down"></i>
        </button>
        <button
          className={`${classes.Button} ${classes.upButton} ${classes.controlButton} `}
          onClick={onButtonUp}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}
export default withStyles(styles)(CityGallery);
