import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Navbar from "../../Products/Navbar/Navbar";
import MainFeaturedPost from "./MainFeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainPost = {
  image:
    "https://scontent.fixc9-1.fna.fbcdn.net/v/t1.0-9/15401018_1500765886605341_623874556039860672_n.png?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=tVWCxbeS1u4AX9FfEHU&_nc_ht=scontent.fixc9-1.fna&oh=238794e4e78f89bf3f5c75563065f1e2&oe=606A354D",
  imgText: "Let the words mend the broken soul...",
};

const sidebar = {
  title: "More",
  description:
    "You can dm me on instagram if you want a custom poem written for your loved ones and signed by me.",
  archives: [
    { title: "June", url: "https://thepoetryofryan.wordpress.com/2017/06/" },
    { title: "July", url: "https://thepoetryofryan.wordpress.com/2017/07/" },
    { title: "August", url: "https://thepoetryofryan.wordpress.com/2016/08/" },
    {
      title: "September",
      url: "https://thepoetryofryan.wordpress.com/2016/09/",
    },
    { title: "October", url: "https://thepoetryofryan.wordpress.com/2016/10/" },
    {
      title: "November",
      url: "https://thepoetryofryan.wordpress.com/2016/11/",
    },
    {
      title: "December",
      url: "https://thepoetryofryan.wordpress.com/2016/12/",
    },
    { title: "May", url: "https://thepoetryofryan.wordpress.com/2017/05/" },
  ],
};

const AboutPage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Navbar />
        <main>
          <MainFeaturedPost post={mainPost} />
          <Grid container spacing={4} className={classes.mainGrid}>
            <Main title="About Me" />
            <Grid container spacing={4}>
              <Container maxWidth="sm">
                <Typography variant="h6" color="textSecondary">
                  {" "}
                  Hi, my name is Ryan Jonas. <br /> <br />
                  Yes, it's my pen name. I had always wished to have a pen name
                  and this one sounded much better. <br />
                  <br />I have been writing since 2015 I guess but then I had to
                  take a long break of 3 years from 2017-2020. I'll save this
                  story for future, in case you guys want to know. <br />
                  <br />
                  I reckon words tend to hold people together in life more than
                  other people. <br />
                  <br />
                  "A letter can save a human soul even if it's not a love
                  letter."
                  <br />
                  <br />
                  Have an amazing day!
                </Typography>
              </Container>
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
              />
            </Grid>
          </Grid>
        </main>
      </Container>
    </>
  );
};
export default AboutPage;
