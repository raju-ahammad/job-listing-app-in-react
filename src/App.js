import { CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Search from "./components/Body/Search";
import { app, firestore } from "./components/firebase/config";
import Header from './components/Header';
import JobCard from "./components/Jobcard/JobCard";
import JobModalBox from "./components/Jobcard/JobModalBox";
import theme from "./theme/theme";



export default () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [newJobModal, setnewJobModal] = useState(false)

  const fetchData = async () => {
    const req = await firestore.collection("jobs").orderBy("postedOn", "desc").get()
    const jobData = req.docs.map((job) => ({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate()}))
    setJobs(jobData)
    setLoading(false)
  }

  const postJob = async (jobDetails) => {
    await firestore.collection("jobs").add({
      ...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp()
    })
    fetchData()
    
  }

  useEffect(() => {
    fetchData()
  }, [])
  return <ThemeProvider theme={theme} >
    <Header openDialogBox = {() => setnewJobModal(true)}  />
    <JobModalBox closeDialogBox = {() => setnewJobModal(false)} postJob={postJob} newJobModal={newJobModal} />
    <Grid container justify="center"> 
      <Grid item xs={10}>
        <Search/>
        {
          loading ? <CircularProgress/>   
                  : jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                  ))   
        }
        
      </Grid>
    </Grid>
  </ThemeProvider>
};
