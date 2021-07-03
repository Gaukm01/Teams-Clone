import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
    },
}));  

const VideoPlayer = () =>{
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();
    return ( 
        <Grid container className={classes.gridContainer}>
            {/*our own video, if stream is available then show the our video */}
            {stream && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{name || "Name"}</Typography>
                        <video playInline muted ref={myVideo} autoplay className={classes.video} />
                    </Grid>
                </Paper>
            )}
            
            {/*User's video , if call is Accepted and not ended show user video*/}
            {callAccepted && !callEnded && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{call.name || "Name"}</Typography>
                        <video playInline ref={userVideo} autoplay className={classes.video} />
                    </Grid>
                </Paper>
            )}
            
        </Grid>
        
    );
    
}

export default VideoPlayer;