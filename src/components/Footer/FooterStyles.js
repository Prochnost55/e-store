import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  bigFooter: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    backgroundColor: "rgb(128,128,128, 5)",
    display: "flex",
    bottom: 0,
    marginTop: "1rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    width: "100%",
    color: "white",
  },
  footer1: {
    width: "60%",
    height: "auto",
    marginLeft: "1rem",
  },
  contacts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flexWrap: "wrap",
    height: "5rem",
    width: "30%",
    marginRight: "3rem",
  },
  Icon: {
    display: "flex",
    height: "40%",
    width: "auto",
    align: "center",
    margin: "2rem 1rem",
  },
  anchor: {
    textDecoration: "none",
    color: "purple",
    underline: "none",
  },
  takeSpace: {
    flexGrow: 5,
    height: "auto",
  },
}));
