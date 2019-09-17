import React from "react";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <GrantList />
      </Grid>
      <Grid item xs={4}>
        <GrantShowcase />
      </Grid>
      <Grid item xs={4}>
        <Filters />
      </Grid>
    </Grid>
  );
};

export default Home;