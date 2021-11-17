import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@mui/styles";
import logo from "../images/logo.png";

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
      cursor: "pointer",
      "&:hover": {
        color: "#15A64A",
      },
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

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, color: "#15A64A" }}
            >
              HOME
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              MENU
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              DELIVERY
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              GALLERY
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              className={classes.rootHover}
            >
              CONTACT
            </Typography>
          </div>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
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
