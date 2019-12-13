import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteSuggestion } from "../../actions";

// Styling
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { suggestionStyles } from "../../styles/suggestionStyles";

const GrantSuggestionList = props => {

  // Force Update for our onClick action
  // const forceUpdate = useForceUpdate();

  // console.log('grantSuggestionList props: ', props)
  const [suggestions, setSuggestions] = useState(props.rowData.requests)

  function onClickDelete (suggestion_id, currentUser) {
    props.deleteSuggestion(suggestion_id, currentUser);
    const updatedSuggs = suggestions.filter(sugg => sugg.id !== suggestion_id)
    setSuggestions(updatedSuggs)
  };

  const style = suggestionStyles();

  return (
    <>
      {suggestions.length ? (
        <ExpansionPanelDetails className={style.suggestionWrapper}>
          <Typography variant="h2" className={style.userSuggestionTitle}>
            User Suggestions
          </Typography>
          {suggestions.map(suggestion => (
            <ListItem alignItems="flex-start" className={style.suggestionLi}>
              <IconButton
                onClick={() => onClickDelete(suggestion.id, props.currentUser)}
              >
                <DeleteIcon />
              </IconButton>
              <ListItemText
                primary={`Subject: ${suggestion.subject}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body3"
                      // className={classes.inline}
                      color="textPrimary"
                    >
                    </Typography>
                      {`Suggestion: ${suggestion.suggestion}`}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </ExpansionPanelDetails>
      ) : (
        <Typography className={style.suggestionEmpty}>
          There are no user suggestions at this time
        </Typography>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { deleteSuggestion })(
  GrantSuggestionList
);
