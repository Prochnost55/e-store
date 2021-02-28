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

import useStyles from "./NavStyles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src="https://thepoetryofryan.files.wordpress.com/2016/12/cropped-img-20161213-wa0012.jpg"
              alt="thepoetryofryan"
              height="60px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit" />
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
