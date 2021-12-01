import React from "react";
import { makeStyles } from "@mui/styles";
import img from "../../images/4.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  deliveryPage: {
    // padding: "2% 4%",
    marginTop: "80px",
    // marginLeft: "70px",
    position: "relative",
    backgroundColor: "#EEEBE8",
  },
  backImg: {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  },
  posAbsolute: {
    position: "absolute",
    bottom: "30%",
    left: "15%",
    backgroundColor: "black",
    opacity: 0.7,
  },
  order: {
    color: "#EFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
  },
  telNum: {
    color: "#D0292E",
    fontSize: 25,
    fontWeight: "bold",
  },
  textBody: {
    padding: "2% 4%",
    marginLeft: "70px",
  },
  deliverytTitle: {
    width: "40%",
    color: "#4A4A4A",
    borderBottom: "1px #DFDFDF solid",
    paddingBottom: "1%",
  },
  link: {
    color: "#03A5E6",
    textDecoration: "none",
  },
});

function Delivery() {
  const classes = useStyles();
  return (
    <div className={classes.deliveryPage}>
      <div className={classes.backImg}>
        <div className={classes.posAbsolute}>
          <p className={classes.order}>Order right now:</p>
          <p className={classes.telNum}>011 81 88 88 </p>
          <p className={classes.telNum}>81 - 88</p>
        </div>
      </div>
      <div className={classes.textBody}>
        <h1 className={classes.deliverytTitle}>DELIVERY</h1>
        <h3 style={{ color: "#616161" }}>
          There are many fast food preparation and delivery services in the
          city, but the fast food chain" Tumanyan Shawarma " offers high-speed
          and safe delivery․
        </h3>
        <p>
          1. You can call the numbers 011-81-88-88 or 81-88, and our telephone
          operator will take your order,
        </p>
        <p>
          2. You can order any dishes
          <Link to="/" className={classes.link}>
            www.tshaurma.com
          </Link>
          through the website,
        </p>
        <p>
          3. you can also place an order via the mobile phone app (IOS,
          Android).
        </p>
        <p>
          Our delivery speed is competitive with any other delivery
          speed․Delivery in the city center takes a maximum of 25 minutes.
        </p>
        <p>The cost of delivery throughout the city of Yerevan is 400 AMD.</p>
        <p>You can pay for delivery in cash or via POS-terminals.</p>
        <p>“Tumanyan Shawarma”-traditions that dictate advantages.</p>
      </div>
    </div>
  );
}

export default Delivery;
