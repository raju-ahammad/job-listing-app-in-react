import { Box, Button, makeStyles, MenuItem, Select } from '@material-ui/core'
import React from 'react'

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

const Search = () => {
    const classes = useStyle()
    return (
       <Box className={classes.wrapper}>
           <Select defaultValue="Full time" disableUnderline variant="filled">
               <MenuItem value="Full time" >Full time</MenuItem>
               <MenuItem value="Part tiem">Part time</MenuItem>
               <MenuItem value="Contract">Contract</MenuItem>
           </Select>
           <Select defaultValue="Remote" disableUnderline variant="filled">
               <MenuItem value="Remote" >Remote</MenuItem>
               <MenuItem value="In office">In office</MenuItem>
           </Select>
           <Button variant="contained" color="primary" disableElevation>
               Search A Job
           </Button>
       </Box>
    )
}
export default Search
