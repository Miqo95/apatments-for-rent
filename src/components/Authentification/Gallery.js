import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  galleryPage: {
    marginTop: "110px",
    backgroundColor: "#EEEBE8",
  },
  flexBut: {
    textAlign: "center",
    padding: "2%",
  },
  button: {
    color: "#919090 ",
    fontWeight: "bold ",
    marginLeft: "40px",
    border: "none",
    cursor: "pointer",
  },
  buttonActiv: {
    color: "#28B363 ",
    fontWeight: "bold ",
    border: "1px #1BAF5A solid ",
    borderRadius: 5,
    padding: "14px 10px",
    cursor: "pointer",
  },
  img: {
    width: 330,
    height: 230,
    padding: 10,
  },
  contImg: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  pagination: {
    textAlign: "center",
    padding: "3%",
  },
  pagBut: {
    cursor: "pointer",
    padding: "5px 10px",
    color: "#9F9393",
    border: "none",
    fontSize: 16,
  },
});

function Gallery() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [catImg, setCatImg] = useState("all");
  const pageOne = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/for.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
  ];
  const pageTwo = [
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg",
  ];
  const pageProductOne = [
    "images/p1.jpg",
    "images/p2.jpg",
    "images/p3.jpg",
    "images/p4.jpg",
    "images/p5.jpg",
    "images/p6.jpg",
    "images/p7.jpg",
    "images/p8.jpg",
    "images/p9.jpg",
  ];
  const pageProductTwo = [
    "images/p10.jpg",
    "images/p11.jpg",
    "images/p12.jpg",
    "images/p13.jpg",
    "images/p14.jpg",
    "images/p15.jpg",
    "images/p16.jpg",
    "images/p17.jpg",
    "images/p18.jpg",
  ];
  const changePageOne = () => {
    setPage(1);
  };
  const changePageTwo = () => {
    setPage(2);
  };
  const pageAllImg = () => {
    setPage(1);
    setCatImg("all");
  };
  const pageProImg = () => {
    setPage(1);
    setCatImg("pro");
  };
  return (
    <div className={classes.galleryPage}>
      <div className={classes.flexBut}>
        <button onClick={pageAllImg} className={classes.buttonActiv}>
          ALL
        </button>
        <button className={classes.button}>TUMANYAN FOOD</button>
        <button onClick={pageProImg} className={classes.button}>
          PRODUCTS
        </button>
        <button className={classes.button}>LUNCHES</button>
      </div>
      <div className={classes.contImg}>
        {page === 1 &&
          catImg === "all" &&
          pageOne.map((src) => {
            return <img src={src} className={classes.img} alt="" />;
          })}
        {page === 2 &&
          catImg === "all" &&
          pageTwo.map((src) => {
            return <img src={src} className={classes.img} alt="" />;
          })}
        {page === 1 &&
          catImg === "pro" &&
          pageProductOne.map((src) => {
            return <img src={src} className={classes.img} alt="" />;
          })}
        {page === 2 &&
          catImg === "pro" &&
          pageProductTwo.map((src) => {
            return <img src={src} className={classes.img} alt="" />;
          })}
      </div>
      <div className={classes.pagination}>
        <button onClick={changePageOne} className={classes.pagBut}>
          1
        </button>
        <button onClick={changePageTwo} className={classes.pagBut}>
          2
        </button>
        <button className={classes.pagBut}> ... </button>
      </div>
    </div>
  );
}

export default Gallery;
