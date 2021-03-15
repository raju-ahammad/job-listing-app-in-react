import { Box, Button, CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Search from "./components/Body/Search";
import { app, firestore } from "./components/firebase/config";
import Header from './components/Header';
import JobCard from "./components/Jobcard/JobCard";
import JobDetails from "./components/Jobcard/JobDetails";
import JobModalBox from "./components/Jobcard/JobModalBox";
import theme from "./theme/theme";



export default () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [newJobModal, setnewJobModal] = useState(false)
  const [customJobSearch, setCustomJobSearch] = useState(false)
  const [viewJob, setViewJob] = useState({})

  const fetchData = async () => {
    setCustomJobSearch(false)
    setLoading(true)
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

  const fetchCustomJob = async (jobSearch) => {
    setLoading(true)
    const req = await firestore.collection("jobs")
                               .orderBy("postedOn", "desc")
                               .where("location", "==", jobSearch.location )
                               .where("type", "==", jobSearch.type )
                               .get()
    const jobData = req.docs.map((job) => ({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate()}))
    setJobs(jobData)
    setLoading(false)
    setCustomJobSearch(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  
  return <ThemeProvider theme={theme} >
    <Header openDialogBox = {() => setnewJobModal(true)}  />
    <JobModalBox closeDialogBox = {() => setnewJobModal(false)} postJob={postJob} newJobModal={newJobModal} />
    <JobDetails job={viewJob} closeModalBox={ ()=> setViewJob({})}  />
    <Grid container justify="center"> 
      <Grid item xs={10}>
        <Search fetchCustomJob={fetchCustomJob}/>
        {
          loading ? <CircularProgress/>   
                  : (
                    <>
                    {
                      customJobSearch && 
                      (
                        <Box>
                          <Button onClick={fetchData}>
                            <Close size={20} />
                            Custom Search
                          </Button>
                        </Box>
                      )
                    }
                    {jobs.map((job) => (
                    <JobCard key={job.id} {...job} openModal={()=> setViewJob(job)} />
                    ))}
                    </>
                  )
        }
        
      </Grid>
    </Grid>
  </ThemeProvider>
};
