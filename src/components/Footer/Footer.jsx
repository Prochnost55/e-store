import React from "react";
import useStyles from "./FooterStyles";
import { Icon } from "@material-ui/core";
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.bigFooter}>
      <div className={classes.takeSpace}></div>
      <div className={classes.footer}>
        <div className={classes.footer1}>
          <h1>
            {" "}
            <a
              className={classes.anchor}
              href="https://thepoetryofryan.wordpress.com/"
            >
              thepoetryofryan.com{" "}
            </a>{" "}
          </h1>
          <h3>
            {" "}
            This website is currently made for testing purposes. Will be live
            soon!{" "}
          </h3>
          <p>
            {" "}
            You can read my
            <a
              className={classes.anchor}
              href="https://rajatmehra-blogs.netlify.app"
            >
              {" "}
              blogs
            </a>{" "}
            here{" "}
          </p>
          <p>
            {" "}
            You can find the{" "}
            <a
              className={classes.anchor}
              href="https://github.com/rajat-mehra05/e-store"
            >
              {" "}
              source code{" "}
            </a>{" "}
            here 😄{" "}
          </p>
        </div>
        <div className={classes.contacts}>
          <Icon className={classes.Icon}>
            <a href="https://www.instagram.com/_ryan_jonas_/" target="blank">
              <i class="fab fa-instagram"></i>
            </a>
          </Icon>
          <Icon className={classes.Icon}>
            <a href="https://www.linkedin.com/in/rajat-mehra-/" target="blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </Icon>
          <Icon className={classes.Icon}>
            <a href="https://github.com/rajat-mehra05" target="blank">
              <i class="fab fa-github-square"></i>
            </a>
          </Icon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
