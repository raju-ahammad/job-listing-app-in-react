import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'

const JobDetails = (props) => {
    const close = props.closeModalBox
  
    return (
        <Dialog open={!!Object.keys(props.job).length} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center" >
                    {props.job.title} 
                    <IconButton onClick={close}>
                        <Close/>
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
           
                <Box>{`${props.job.postedOn}`}</Box>
                <Typography>{props.job.location}</Typography>
                <Typography>  {props.job.companyName}</Typography>
                <Typography>{ props.job.companyUrl }</Typography>
                <Typography>{ props.job.skills }</Typography>
            </DialogContent>

        </Dialog>
    )
}

export default JobDetails
