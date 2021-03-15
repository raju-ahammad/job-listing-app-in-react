import { Box, Button, CircularProgress, makeStyles, MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'

const useStyle = makeStyles({
    wrapper: {
        background: '#fff',
        display: 'flex',
        boxShadow: ' 0px 1px 5px rgba(0,0,0,0.1)',
        borderRadius: '5px',
        "& > *" : {
            flex: 1,
            height: '45px',
            margin: '8px'
        }
    }
})

const initialState = {
    type: "Full time",
    location: "Remote"
}

const Search = ({fetchCustomJob}) => {
    const [jobSearch, setJobSearch] = useState(initialState)
    const [loading, setLoading] = useState(false)
    
    const { type, location } = jobSearch

    const handleChange = (e) => {
        const {name, value} = e.target;
        setJobSearch({...jobSearch, [name]:value})
    }

    const onSearchHandle =async () => {
        setLoading(true)
        await fetchCustomJob(jobSearch)
        setLoading(false)
       
    }
   
    const classes = useStyle()
    return (
       <Box className={classes.wrapper}>
           <Select onChange={handleChange} value={type} name="type" disableUnderline variant="filled">
               <MenuItem value="Full time" >Full time</MenuItem>
               <MenuItem value="Part tiem">Part time</MenuItem>
               <MenuItem value="Contract">Contract</MenuItem>
           </Select>
           <Select onChange={handleChange} name="location" value={location} disableUnderline variant="filled">
               <MenuItem value="Remote" >Remote</MenuItem>
               <MenuItem value="In office">In office</MenuItem>
           </Select>
           <Button onClick={onSearchHandle} disabled={loading} variant="contained" color="primary" disableElevation>
               {
                   loading ? <CircularProgress color="secondary" size={22} /> : "Search A Job"
               }
           </Button>
       </Box>
    )
}
export default Search
