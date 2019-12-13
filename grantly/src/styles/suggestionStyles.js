import { makeStyles } from "@material-ui/core/styles";

export const suggestionStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "2px",
    marginBottom: "0.5rem",
    fontFamily: "Nunito Sans",
  },
  subject: {
    fontSize: "1.6rem",
    fontWeight: theme.typography.fontWeightRegular
  },
  button: {
    color: "#fff",
    margin: "20px 20px",
    fontFamily: "Nunito Sans",
    fontWeight: "600"
  },
  details: {
    padding: "20rem 20rem 20rem 1rem"
  },
  suggestion: {
    fontSize: "1.2rem",
    padding: 0
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  suggestionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#f7f7f7",
    padding: "1.2em 0 0 1.4em",
  },
  userSuggestionTitle: {
    fontFamily: "Nunito Sans",
    fontSize: '1.2em',
    paddingBottom: "1rem",
    fontWeight: 600,
    // width: '8.25em',
  },
  suggestionLi: {
    width: '40%',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
    alignItems: "center",
    borderTop: '3px solid #77D4D0',
    // marginTop: '.5em',
  },
  suggestionTitle: {
    // width: '50%',
    // padding: "0",
    // paddingLeft: '10px',
    // paddingBottom: '5px',
    // marginTop: '5px',
    // fontSize: '1rem'
    // textAlign:'center',
    // fontSize: theme.typography.pxToRem(15),
    // flexBasis: "33%",
    // flexShrink: 0,
  },
  suggestionParagraph: {
    // fontSize: theme.typography.pxToRem(15),
    // width: '50%',
    // overflow: "auto",
    // padding: '10px',
    // marginTop: '5px',
    // fontSize: '1.11rem'
  },
  suggestionEmpty: {
    width: '20%',
    borderBottom: '3px solid #77D4D0',
    padding: '10px',
    marginTop: '5px',
    fontSize: '1.25rem'
  },
  suggestionCol: {
    fontFamily: "EB Garamond"
  }
}));
