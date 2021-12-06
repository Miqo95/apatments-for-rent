import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  caruselPage: {
    padding: 30,
  },
  img: {
    width: 270,
    height: 280,
    "@media (max-width: 767px)": {
      width: 100,
      height: 120,
    },
  },
  root: {
    "& button:before": {
      color: "#EB2F2F !important",
    },
  },
});

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const classes = useStyles();

  return (
    <div className={classes.caruselPage}>
      <Slider {...settings} className={classes.root}>
        <div>
          <img className={classes.img} src="images/slider/1.jpg" alt="" />
        </div>
        <div>
          <img className={classes.img} src="images/slider/2.jpg" alt="" />
        </div>
        <div>
          <img className={classes.img} src="images/slider/3.jpg" alt="" />
        </div>
        <div>
          <img className={classes.img} src="images/slider/4.jpg" alt="" />
        </div>
        <div>
          <img className={classes.img} src="images/slider/5.jpg" alt="" />
        </div>
        <div>
          <img className={classes.img} src="images/slider/6.jpg" alt="" />
        </div>
        <div>
          <img className={classes.img} src="images/slider/7.jpg" alt="" />
        </div>
        <div>
          <img className={classes.img} src="images/slider/8.jpg" alt="" />
        </div>
        <div>
          <img className={classes.img} src="images/slider/9.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
