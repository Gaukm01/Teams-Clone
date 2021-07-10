import React, { useState, useContext } from 'react';
import { Button, TextField , Grid, Typography, Container, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';

import { SocketContext } from '../SocketContext';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '600px',
      margin: '35px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    paper: {
      padding: '10px 20px',
      border: '2px solid black',
    },
}));

const Options = ({ children }) =>{
    const { me, callAccepted, name, setName, leaveCall, callEnded, callUser, meetId } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState(meetId);
    const classes = useStyles();
    return ( 
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container className={classes.gridContainer}>
                        {/* Button for copying our ID */}
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant="h6">Account Info </Typography>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard text={`https://friends-corner.netlify.app/?id=${me}`} className={classes.margin}>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}> 
                                    Copy Your Link
                                </Button>
                            </CopyToClipboard>
                            <Typography gutterBottom variant="h6"> Copy your ID and send to the user you want to call </Typography>
                        </Grid>
                        {/*Button to make a Call*/}
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant="h6">Make a call </Typography>
                            <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {/* based on call is going on or not different buttons */}
                            {callAccepted && !callEnded ? (
                                /*if call is going on then a button to Hang Up */
                                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}> 
                                    Hang Up
                                </Button>
                                
                            ) : (
                                /*if no call is going on then a button to make call */
                                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}> 
                                    Call
                                </Button>
                                
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}

            </Paper>
        </Container>
    );
    
}

export default Options;