import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <Box bgcolor='secondary.main' py={2} color='white'>
            <Grid container justify="center">
                <Grid item xs={10} >
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h4">
                            Job UP
                        </Typography>
                        <Button variant="contained" color="primary" disableElevation >Post A Job</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header
