import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, makeStyles, MenuItem, Select, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React, { useState } from 'react'



const useStyles = makeStyles((theme)=> ({
    wrapper: {
        border: '1px solid #e8e8e8'
    },
    companyName: {
        fontSize: "13.5px",
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: "5px",
        display: "inline-block",
        fontWeight: 600,
        color: "white"
    },
    skill: {
        fontSize: "13.5px",
        border: `1px solid ${theme.palette.primary.main}`,
        padding: theme.spacing(0.75),
        borderRadius: "5px",
        display: "inline-block",
        fontWeight: 600,
        color: theme.palette.primary.main,
        margin: "5px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "white"
        }
    },
    include: {
        backgroundColor: theme.palette.primary.main,
        color: "white"
    }
}) )

const initialState = {
    title: "",
    type: "Full time",
    location: "Remote",
    companyName: "",
    companyUrl: "",
    skills: [],
    link: "",
    desc: ""
}



const JobModalBox = ({ postJob, newJobModal, closeDialogBox }) => {
    
    const [jobDetail, setJobDetail] = useState(initialState)
   
    const [loading, setLoading] = useState(false)

    const { title, type, location, companyName, companyUrl, link, desc } = jobDetail

    const handleChange = (e) => {
        const {name, value} = e.target;
        setJobDetail({...jobDetail, [name]:value})
    }

    const addRemoveSkills = (skill) => {
        jobDetail.skills.includes(skill)
        ? setJobDetail({...jobDetail, skills: jobDetail.skills.filter((s) => s !== skill)})
        : setJobDetail({...jobDetail, skills: jobDetail.skills.concat(skill)})
    }

    const closeModal = () => {
        setJobDetail(initialState)
        setLoading(false)
        closeDialogBox()
    }

    const handleSubmit = async () => {
        setLoading(true)
        await postJob(jobDetail)
        closeModal()
    }



    const classes = useStyles()
    const skills = ["javascript", "react", "node", "Mongo", "express"]
    return (
        <Dialog open={newJobModal} fullWidth>
            <DialogTitle>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    Post Job
                    <IconButton onClick={closeModal}>
                        <Close />
                    </IconButton>
                </Box>
                
            </DialogTitle>
            
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput fullWidth autoComplete="off" name="title" value={title} onChange={handleChange} placeholder="Job title" disableUnderline />
                    </Grid>
                    <Grid item xs={6}>
                        <Select  name="type" value={type} onChange={handleChange} fullWidth disableUnderline variant="filled">
                            <MenuItem value="Full time" >Full time</MenuItem>
                            <MenuItem value="Part tiem">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput fullWidth autoComplete="off" name="companyName" value={companyName} onChange={handleChange} placeholder="Company Name" disableUnderline />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput fullWidth autoComplete="off" name="companyUrl" value={companyUrl} onChange={handleChange} placeholder="Company Url" disableUnderline />
                    </Grid>

                    <Grid item xs={6}>
                        <Select fullWidth autoComplete="off" name="location" value={location} onChange={handleChange}  disableUnderline variant="filled">
                            <MenuItem value="Remote" >Remote</MenuItem>
                            <MenuItem value="In office">In office</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput autoComplete="off" name="link" value={link} onChange={handleChange} fullWidth placeholder="Job Link" disableUnderline />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput fullWidth autoComplete="off" name="desc" value={desc} onChange={handleChange} placeholder="job description" disableUnderline multiline rows={4} />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display="flex">
                        {
                            skills.map((skil) => (
                                <Box key={skil} onClick={()=> addRemoveSkills(skil)} >
                                    <Typography className={`${classes.skill} ${jobDetail.skills.includes(skil) && classes.include}`}>{ skil }</Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box width="100%" display="flex" justifyContent="space-between">
                    <Typography> *Required Fileds</Typography>
                    <Button onClick={handleSubmit} variant="contained" disableElevation color="primary" disabled={loading} >
                        {
                            loading ? (
                                <CircularProgress color="secondary" size={22}/>
                            )
                            : ( "Post Job")
                        }
                        
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default JobModalBox
