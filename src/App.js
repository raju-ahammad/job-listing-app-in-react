import { Grid, ThemeProvider } from "@material-ui/core";
import React from "react";
import Search from "./components/Body/Search";
import Header from './components/Header';
import JobCard from "./components/Jobcard/JobCard";
import JobModalBox from "./components/Jobcard/JobModalBox";
import jobData from './dummyData';
import theme from "./theme/theme";


export default () => {
  return <ThemeProvider theme={theme} >
    <Header/>
    <JobModalBox/>
    <Grid container justify="center"> 
      <Grid item xs={10}>
        <Search/>
        {
          jobData.map((job) => (
            <JobCard key={job.id} {...job} />
          ))
        }
        
        
      </Grid>
    </Grid>
  </ThemeProvider>
};
