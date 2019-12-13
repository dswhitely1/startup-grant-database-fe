import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchApi,
  adminFetchApi,
  postGrants,
  putGrants,
  deleteGrants,
  deleteSuggestion
} from "../../actions";
import moment from "moment";

// Styling
import MaterialTable from "material-table";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import grantTableStyles from "../../styles/grantTableStyles";

// Components
import GrantSuggestionList from "./GrantSuggestionList";
import SuggestionCol from "./SuggestionCol.js";

export const GrantTable = props => {
  console.log("GrantTable props", props);

  const [suggestions, setSuggestions] = useState(props.grantStore.requests)

  const [state, setState] = useState({
    // This array is currently needed in order for state to save onRowUpdate
    data: []
  });

  // reformats deadline and last updated dates
  props.data.forEach(grant => {
    grant.most_recent_application_due_date =
      moment(grant.most_recent_application_due_date).format("MMM DD, YYYY") ===
      "Invalid date"
        ? undefined
        : moment(grant.most_recent_application_due_date).format("MMM DD, YYYY");
    grant.details_last_updated =
      moment(grant.details_last_updated).format("L LT") === "Invalid date"
        ? undefined
        : moment(grant.details_last_updated).format("L LT");
  });

  // const [stateRowData, setStateRowData] = useState([]);
  // const [hasCurrentUser, setHasCurrentUser] = useState({});

  // useEffect(() => {
  //   if (props.inAdmin) {
  //     console.log("what?", props.inAdmin);
  //     console.log("yes");
  //     props.adminFetchApi(props.currentUser);
  //   } else if (props.data.length === 0) {
  //     console.log('elseif');
  //     props.fetchApi();
  //   } else  {
  //     // props.fetchApi();
  //   }
  // }, []);

  useEffect(() => {
    if (props.currentUser.id) {
      props.adminFetchApi(props.currentUser);
    }
  }, [props.currentUser]);

  useEffect(() => {
    console.log('suggestions', suggestions)
    setSuggestions(suggestions)
  }, [suggestions])

  const style = grantTableStyles();

  return (
    <Paper className={style.paper}>
      <MaterialTable
        title="Edit and Approve Grants"
        // title={() => (
        //   <h2>Edit and Approve Grants</h2>
        // )}
        columns={[
          {
            title: "User Suggestions",
            cellStyle: {
              width: "20px"
              // maxWidth: "15px",
            },
            customSort: (a, b) => a.requests.length - b.requests.length,
            render: rowData => <SuggestionCol rowData={rowData} />
          },
          {
            title: "Grant Status",
            cellStyle: cellData => ({
              backgroundColor: cellData === "Pending" ? "#3DB8B3" : "none"
            }),
            field: "is_reviewed",
            lookup: {
              true: "Approved",
              false: "Pending"
            }
          },
          {
            title: "Last Updated",
            field: "details_last_updated",
            type: "date",
            editable: "never"
          }, //sent to server in action. not editable by user
          {
            title: "Name",
            field: "competition_name",
            cellStyle: {
              minWidth: "200px"
            }
          },
          { title: "Amount", field: "amount", type: "integer" },
          {
            title: "Amount Notes",
            field: "amount_notes",
            cellStyle: {
              minWidth: "300px"
            }
          },
          {
            title: "Deadline",
            field: "most_recent_application_due_date",
            type: "date"
          },
          {
            title: "Focus Area",
            field: "area_focus",
            lookup: {
              Arts: "Arts",
              "Child Care": "Child Care",
              "Economic Opportunity": "Economic Opportunity",
              "Energy & Resources": "Energy & Resources",
              Environment: "Environment",
              Financial: "Financial",
              Food: "Food",
              Health: "Health",
              Housing: "Housing",
              "Information Technology": "Information Technology",
              "Life Improvement": "Life Improvement",
              "Social Entrepreneurship": "Social Entrepreneurship",
              "Workforce Development": "Workforce Development"
            }
          },
          {
            title: "Sponsor",
            field: "sponsoring_entity",
            cellStyle: {
              minWidth: "200px"
            }
          },
          {
            title: "Notes",
            field: "notes",
            cellStyle: {
              minWidth: "400px"
            },
            editComponent: props => (
              <TextField
                id="standard basic"
                style={{
                  minWidth: "400px",
                  fontFamily: "EB Garamond",
                  textSize: "1rem"
                }}
                multiline
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
              />
            )
          },
          { title: "Website", field: "website" },
          {
            title: "Geographic Region",
            field: "geographic_region",
            lookup: {
              Global: "Global",
              "North America": "North America",
              Europe: "Europe",
              "South America": "South America",
              Africa: "Africa",
              Asia: "Asia",
              Australia: "Australia"
            }
          },
          {
            title: "Target Demographic",
            field: "target_entrepreneur_demographic",
            lookup: {
              "Minority Business Enterprise": "Minority Business Enterprise",
              "Women Business Enterprise": "Women Business Enterprise",
              "Disadvantaged Business Enterprise":
                "Disadvantaged Business Enterprise",
              "Veteran Business Enterprise": "Veteran Business Enterprise",
              Other: "Other",
              All: "All"
            }
          },
          {
            title: "Early Stage Funding",
            field: "early_stage_funding",
            lookup: {
              true: "Yes",
              false: "No"
            }
          }
        ]}
        data={props.data}
        options={{
          headerStyle: {
            fontFamily: "Nunito Sans",
            fontSize: ".9em",
            color: "#3A3A3A",
            padding: "0 auto",
            // letterSpacing: "0.025em",
            fontWeight: 600,
            backgroundColor: "#83D7D1"
          }
        }}
        detailPanel={[
          rowData => ({
            tooltip: "Suggestions",
            // disabled: !rowData.requests.length,
            icon: () => (
              <ChevronRightIcon
                style={
                  {
                    // fontSize: 30,
                    // marginLeft: "5px"
                  }
                }
                // className={rowData.requests.length && style.displayNone}
              />
            ),
            render: rowData => <GrantSuggestionList rowData={rowData} />
          })
        ]}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                let filteredData = Object.assign({}, newData);
                delete filteredData.requests;
                props.postGrants(filteredData);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  let filteredData = Object.assign({}, newData);
                  delete filteredData.requests;
                  props.putGrants(
                    {
                      ...filteredData,
                      details_last_updated: moment().format("YYYY-MM-DD")
                    },
                    props.currentUser
                  );
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  delete oldData.requests;
                  props.deleteGrants(oldData.id, props.currentUser);
                }
              }, 600);
            })
        }}
        zeroMinWidth
      />
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants,
    grantStore: state.data,
    currentUser: state.currentUser,
    savedFilters: state.filters,
    columns: state.columns,
    currentSuggestions: state.currentSuggestions
  };
};

export default connect(mapStateToProps, {
  fetchApi,
  adminFetchApi,
  postGrants,
  putGrants,
  deleteGrants,
  deleteSuggestion
})(GrantTable);
