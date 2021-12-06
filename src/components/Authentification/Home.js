import React from "react";
import { makeStyles } from "@mui/styles";
import Carousel from "../main/Carousel";
import CallIcon from "@mui/icons-material/Call";

const useStyles = makeStyles({
  homePage: {
    // padding: "2% 4%",
    marginTop: "100px",
    backgroundColor: "#EFEBE8",
    textAlign: "center",
  },
  title: {
    // fontSize: 35,
    // color: "#2C2C32",
    // fontStyle: "italic",
    // fontWeight: 600,
    fontSize: 36,
    color: "#2c2c2c",
    fontStyle: "italic",
    display: "inline-block",
    padding: "0 26px",
    overflow: "hidden",
    backgroundColor: "#efebe8",
    position: "relative",
    zIndex: 99,
  },
  titleDelivery: {
    fontSize: 40,
    color: "black",
    fontStyle: "italic",
    paddingBottom: 20,
    paddingTop: 20,
    borderBottom: "1px #DFDFDF solid",
    overflow: "hidden",
  },
  lineFirst: {
    // color: "red",
    // width: "30% !important",
    // backgroundColor: "black",
    maxWidth: 183,
    width: "100%",
    height: 1,
    position: "absolute",
    backgroundColor: "#dad7d5",
    left: "25%",
    top: 172,
  },
  lineLast: {
    maxWidth: 183,
    width: "100%",
    height: 1,
    position: "absolute",
    backgroundColor: "#dad7d5",
    right: "25%",
    top: 172,
  },
  botTitle: {
    color: "#888",
    fontSize: 16,
    paddingBottom: "3%",
  },
  img: {
    borderRadius: "50%",
    padding: 15,
    width: 210,
    height: 210,
  },
  figImg: {
    width: 250,
  },
  imageList: {
    margin: "auto",
    width: "75%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fgCaption: {
    fontSize: 23,
    color: "#EB2F2F",
    fontWeight: "bold",
  },
  slineFirst: {
    position: "absolute",
    top: 42,
    left: "25%",
    height: 1,
    backgroundColor: "#dad7d5",
    maxWidth: 183,
    width: "100%",
  },
  firstTxt: {
    cursor: "pointer",
    border: "1px #888888 solid",
    borderRadius: 10,
    fontSize: 20,
    color: "#8A8A8A",
    fontStyle: "italic",
    display: "inline-block",
    padding: "10px 26px",
    overflow: "hidden",
    backgroundColor: "#efebe8",
  },
  slineLast: {
    position: "absolute",
    top: 42,
    right: "25%",
    height: 1,
    backgroundColor: "#dad7d5",
    maxWidth: 183,
    width: "100%",
  },
  whitePage: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    padding: 40,
  },
  pngImg: {
    width: 200,
    height: 70,
  },
  txtWhitepage: {
    color: "#13AD54",
    fontSize: 35,
    fontWeight: "bold",
    width: 400,
    fontStyle: "italic",
  },
  aboutTxt: {
    fontSize: 48,
    fontStyle: "italic",
    fontWeight: "700",
  },
  backgImg: {
    color: "white",
    backgroundImage: "url('images/ners.jpg')",
    backgroundPosition: "center",
    height: 700,
  },
  txtBacImg: {
    fontSize: 18,
    fontWeight: 700,
  },
  abotSpanFirst: {
    position: "absolute",
    left: "25%",
    top: 30,
    height: 1,
    backgroundColor: "#dad7d5",
    maxWidth: 183,
    width: "100%",
  },
  abotSpanLast: {
    position: "absolute",
    right: "25%",
    top: 30,
    height: 1,
    backgroundColor: "#dad7d5",
    maxWidth: 183,
    width: "100%",
  },
  delParent: {
    textAlign: "left",
    width: "70%",
    margin: "auto",
  },
  deliText: {
    color: "#616161",
    fontSize: 18,
    width: "95%",
  },
  delBut: {
    border: "none",
    color: "#fff",
    textTransform: "uppercase",
    backgroundColor: "#13ad54",
    fontSize: 18,

    borderRadius: 5,
    marginTop: 30,
    padding: "14px 51px",
    cursor: "pointer",
  },
  delBorder: {
    height: 1,
    backgroundColor: "#dfdfdf",
    width: "100%",
    maxWidth: 477,
  },
  delTelTit: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#2c2c2c",
  },
  delTel: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "700",
    color: "#eb2f2f",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <div>
        <span className={classes.lineFirst}></span>
        <p className={classes.title}>MENU</p>
        <span className={classes.lineLast}></span>
        <p className={classes.botTitle}>
          We use only fresh and local food products.
        </p>
      </div>
      <div className={classes.imageList}>
        <div className={classes.figImg}>
          <img className={classes.img} src="images/salad.jpg" alt="" />
          <p className={classes.fgCaption}>SALAD</p>
        </div>
        <div className={classes.figImg}>
          <img className={classes.img} src="images/shaurma.jpg" alt="" />
          <p className={classes.fgCaption}>SHAURMA</p>
        </div>
        <div className={classes.figImg}>
          <img className={classes.img} src="images/barbecue.jpg" alt="" />
          <p className={classes.fgCaption}>BARBECUE</p>
        </div>
        <div className={classes.figImg}>
          <img className={classes.img} src="images/kebab.jpg" alt="" />
          <p className={classes.fgCaption}>KEBAB</p>
        </div>
        <div className={classes.figImg}>
          <img className={classes.img} src="images/ikibir.jpg" alt="" />
          <p className={classes.fgCaption}>IKIBIR</p>
        </div>
        <div className={classes.figImg}>
          <img className={classes.img} src="images/fastfood.jpg" alt="" />
          <p className={classes.fgCaption}>FAST FOOD</p>
        </div>
        <div className={classes.figImg}>
          <img className={classes.img} src="images/combooffers.jpg" alt="" />
          <p className={classes.fgCaption}>COMBO OFERS</p>
        </div>
        <div className={classes.figImg}>
          <img className={classes.img} src="images/drinks.png" alt="" />
          <p className={classes.fgCaption}>DRINKS</p>
        </div>
        <div className={classes.figImg}>
          <img className={classes.img} src="images/grandbuffet.jpg" alt="" />
          <p className={classes.fgCaption}>GRAND BUFFET</p>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <span className={classes.slineFirst}></span>
        <p className={classes.firstTxt}>all menu</p>
        <span className={classes.slineLast}></span>
      </div>
      <div className={classes.whitePage}>
        <div style={{ paddingRight: 40 }}>
          <img
            src="images/tel.jpeg"
            style={{ width: "75%", height: "95%" }}
            alt=""
          />
        </div>
        <div>
          <p className={classes.txtWhitepage}>TUMANYAN SHAURMA MOBILE APPS</p>
          <div style={{ cursor: "pointer", height: 100 }}>
            <img src="images/play.png" className={classes.pngImg} alt="" />
          </div>

          <div style={{ cursor: "pointer" }}>
            <img src="images/app.png" className={classes.pngImg} alt="" />
          </div>
        </div>
      </div>

      <div className={classes.backgImg}>
        <img src="images/logo2.png" alt="" />
        <div style={{ position: "relative" }}>
          <p className={classes.aboutTxt}>
            <span className={classes.abotSpanFirst}></span>ABOUT US
            <span className={classes.abotSpanLast}></span>
          </p>
        </div>
        <h2>1998թ.-ից</h2>
        <p className={classes.txtBacImg}>
          Tumanyan Shaurma was founded in 1998.
        </p>
        <p className={classes.txtBacImg}>
          The first branch of Tumanyan Shaurma was situated on the crossroad of
        </p>
        <p className={classes.txtBacImg}>
          the Tumanyan-Abovyan streets, which was occupied a rather small area.
        </p>
      </div>
      <Carousel />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.delParent}>
          <p className={classes.titleDelivery}>DELIVERY</p>
          <p className={classes.deliText}>
            There are many fast foods and delivery services in the city, but
            "Tumanyan Shaurma" fast food chain offers you fully new
            opportunities (chances).
          </p>
          <p className={classes.deliText}>
            As before you can call 81-88 short number or 011-81-88-88 numbers
            and our operators will accept your order..
          </p>
          <button className={classes.delBut}>MORE</button>
          <div style={{ padding: "45px 0px" }}>
            <div className={classes.delBorder}></div>
          </div>
          <div>
            <p className={classes.delTelTit}>Order right now:</p>
            <p className={classes.delTel}>
              <CallIcon /> 011-81-88-88, 81-88
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
