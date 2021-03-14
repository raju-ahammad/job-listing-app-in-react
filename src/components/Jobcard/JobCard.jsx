import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const skils = ["react", "node", "javascript"]

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
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: "5px",
        display: "inline-block",
        fontWeight: 600,
        color: "white",
        margin: "5px"
    }
}) )

const JobCard = (props) => {
    const classes = useStyles()
    return (
        <Box p={2} mt={2} className={classes.wrapper}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography variant="subtitle1" >{ props.title }</Typography>
                    <Typography className={classes.companyName} variant="subtitle2" >{ props.companyName }</Typography>
                </Grid>
                <Grid item container xs>
                    {
                        props.skills.map((skil) => (
                            <Grid item key={skil}>
                                <Typography className={classes.skill}>{skil}</Typography>
                            </Grid>
                        ))
                    }
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs> 
                <Grid item >
                    <Typography variant="caption">{`${props.postedOn}`} minutes ago| {props.type} | { props.location }</Typography>
                </Grid>
                <Grid item>
                    <Box mt={2}>
                        <Button variant="outlined">Chechk</Button>
                    </Box>
                </Grid>
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default JobCard
