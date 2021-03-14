import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, makeStyles, MenuItem, Select, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'

const skills = ["javascript", "react", "node", "Mongo", "express"]

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
    }
}) )

const JobModalBox = () => {
    const classes = useStyles()
    return (
        <Dialog open={false} fullWidth>
            <DialogTitle>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    Post Job
                    <IconButton>
                        <Close/>
                    </IconButton>
                </Box>
                
            </DialogTitle>
            
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput fullWidth placeholder="Job title" disableUnderline />
                    </Grid>
                    <Grid item xs={6}>
                        <Select defaultValue="Full time" fullWidth disableUnderline variant="filled">
                            <MenuItem value="Full time" >Full time</MenuItem>
                            <MenuItem value="Part tiem">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput fullWidth placeholder="JCompany Name" disableUnderline />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput fullWidth placeholder="Company Url" disableUnderline />
                    </Grid>

                    <Grid item xs={6}>
                        <Select fullWidth defaultValue="Remote" disableUnderline variant="filled">
                            <MenuItem value="Remote" >Remote</MenuItem>
                            <MenuItem value="In office">In office</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput fullWidth placeholder="Job Link" disableUnderline />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput fullWidth placeholder="job description" disableUnderline multiline rows={4} />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display="flex">
                        {
                            skills.map((skil) => (
                                <Box key={skil} >
                                    <Typography className={classes.skill}>{ skil }</Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box width="100%" display="flex" justifyContent="space-between">
                    <Typography> *Required Fileds</Typography>
                    <Button variant="contained" disableElevation color="primary"  >Post Job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default JobModalBox
