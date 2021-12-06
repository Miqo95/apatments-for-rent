import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@mui/styles";
import logo from "../images/logo.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() => {
  return {
    divRoot: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "100px",
      padding: "1%",
      width: "800px",
    },
    rootHover: {
      "&:hover": {
        color: "#15A64A",
      },
      color: "white",
      textDecoration: "none",
      fontSize: "16px !important",
    },
    mobileMenu: {
      backgroundColor: "#2C2C2C",
      color: "#FFFFFF",
      width: "200px",
    },
    mobileMenuPtag: {
      "&:hover": {
        color: "#15A64A",
        backgroundColor: "#B2B2B2 !important",
      },
    },
  };
});

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div className={classes.mobileMenu}>
        <MenuItem sx={{ color: "#1CA652" }}>
          <p>HOME</p>
        </MenuItem>
        <MenuItem className={classes.mobileMenuPtag}>
          <p>ABOUT US</p>
        </MenuItem>
        <MenuItem className={classes.mobileMenuPtag}>
          <p>MENU</p>
        </MenuItem>
        <MenuItem className={classes.mobileMenuPtag}>
          <p>DELIVERY</p>
        </MenuItem>
        <MenuItem className={classes.mobileMenuPtag}>
          <p>GALLERY</p>
        </MenuItem>
        <MenuItem className={classes.mobileMenuPtag}>
          <p>CONTACT</p>
        </MenuItem>
        <MenuItem className={classes.mobileMenuPtag}>
          <span>Register</span>
        </MenuItem>
      </div>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#2C2C2C" }}>
        <Toolbar>
          <div className={classes.divRoot}>
            <img src={logo} alt="Logo" />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to={"/"}
              sx={{
                display: { xs: "none", sm: "block" },
                color: "#15A64A",
                textDecoration: "none",
              }}
            >
              HOME
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={"/about"}
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={"/menu"}
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              MENU
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={"/delivery"}
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              DELIVERY
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={"/gallery"}
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              GALLERY
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={"/contact"}
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              CONTACT
            </Typography>
          </div>

          <div style={{ marginLeft: "100px" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>

              <Button
                className={classes.btnCol}
                component={Link}
                to="/sign-up"
                color="inherit"
              >
                Register
              </Button>
            </Box>
          </div>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
