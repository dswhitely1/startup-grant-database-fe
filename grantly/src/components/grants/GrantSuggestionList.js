import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteSuggestion } from "../../actions";

// Styling
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { suggestionStyles } from "../../styles/suggestionStyles";

const GrantSuggestionList = props => {

  // Force Update for our onClick action
  // const forceUpdate = useForceUpdate();

  // console.log('grantSuggestionList props: ', props)
  const [suggestions, setSuggestions] = useState(props.rowData.requests);
  const [remainingSugs, setRemainingSugs] = useState(props.rowData.requests);

  // useEffect(() => {
  //   setSuggestions(suggestions)
  // }, [suggestions])

  const onClickDelete = (suggestion_id, currentUser) => {
    props.deleteSuggestion(suggestion_id, currentUser);
    const updatedSuggs = suggestions.filter(sugg => sugg.id !== suggestion_id);
    setSuggestions(updatedSuggs);

  };

  const classes = suggestionStyles();

  return (
    <>
      {suggestions.length ? (
        <ExpansionPanelDetails className={classes.suggestionWrapper}>
          <Typography className={classes.userSuggestionTitle}>
            User Suggestions
          </Typography>
          {suggestions.map(suggestion => (
            <ExpansionPanelDetails
              // alignItems="center"
              className={classes.suggestionLi}
              key={suggestion.id}
            >
              <IconButton
                onClick={() => onClickDelete(suggestion.id, props.currentUser)}
              >
                <DeleteOutlineIcon />
              </IconButton>
              <Typography className={classes.suggestionTitle}>
                Subject: {suggestion.subject}
              </Typography>
              <Typography className={classes.suggestionParagraph}>
                Suggestion: {suggestion.suggestion}
              </Typography>
            </ExpansionPanelDetails>
          ))}
        </ExpansionPanelDetails>
      ) : (
        <Typography className={classes.suggestionEmpty}>
          There are no user suggestions at this time
        </Typography>
      )}
    </>
  );
};
const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { deleteSuggestion })(
  GrantSuggestionList
);
