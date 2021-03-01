import React from "react";
import {
  AppBar,
  Badge,
  Toolbar,
  IconItem,
  MenuItem,
  Menu,
  Typography,
  IconButton,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./NavStyles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appbar}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src="https://thepoetryofryan.files.wordpress.com/2016/12/cropped-img-20161213-wa0012.jpg"
              alt="thepoetryofryan"
              height="60px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
