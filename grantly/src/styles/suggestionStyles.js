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
    margin: "20px auto",
    fontFamily: "Nunito Sans",
    fontWeight: "600"
  },
  details: {
    padding: "0 0 0 1rem"
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
    // padding: "1em",
  },
  userSuggestionTitle: {
    fontFamily: "Nunito Sans",
    fontSize: '1.2em',
    paddingBottom: "1rem",
    // width: '8.25em',
  },
  suggestionLi: {
    display: 'flex',
    flexWrap: 'wrap',
    borderTop: '3px solid #77D4D0',
    // marginTop: '.5em',
  },
  suggestionTitle: {
    width: '50%',
    paddingLeft: '10px',
    paddingBottom: '5px',
    marginTop: '5px',
    fontSize: '1.3rem'
  },
  suggestionParagraph: {
    width: '50%',
    overflow: "auto",
    padding: '10px',
    marginTop: '5px',
    fontSize: '1.11rem'
  },
  suggestionEmpty: {
    width: '20%',
    borderBottom: '3px solid #77D4D0',
    padding: '10px',
    marginTop: '5px',
    fontSize: '1.25rem'
  },
}));
