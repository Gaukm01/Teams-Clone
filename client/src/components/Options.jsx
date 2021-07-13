import React, { useState, useContext } from 'react';
import { Button, TextField , Grid, Typography, Container, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled, WhatsApp } from '@material-ui/icons';

import { SocketContext } from '../SocketContext';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'inherit',
      maxWidth: '100%',
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
      // border: '2px solid black',
    },
}));

const Options = ({ children }) =>{
    const { me, callAccepted, name, setName, leaveCall, callEnded, callUser, meetId } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState(meetId);
    const classes = useStyles();
    return ( 
        <>
          {/* when call has not started only then option menu will be available */}
          {!callAccepted &&
            <Container className={classes.container} >
                <Paper elevation={10} className={classes.paper} style={{backgroundColor: 'inherit'}}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <Grid container className={classes.gridContainer} style={{display: 'grid'}}>
                            <Grid item xs={12} md={6} className={classes.padding} style={{maxWidth: '100%'}}>
                                <Typography gutterBottom variant="h6">Account Info </Typography>
                                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                                <Typography gutterBottom variant="h6">Chat ID: {me}</Typography>
                                {/* Adding link to the id to generate link for sharing for joining call, allowing to copy it to clipboard*/}
                                <div style={{display:'flex', flexDirection:'row'}}> 
                                  {/* Button for copying chat link */}
                                  <CopyToClipboard text={`https://friends-corner.netlify.app/?id=${me}`} className={classes.margin}>
                                      <Button variant="contained" color="primary" fullWidth title={'Share the link to get call'} startIcon={<Assignment fontSize="large" />}> 
                                          Copy Link
                                      </Button>
                                  </CopyToClipboard>
                                  <Button style={{ marginTop: 'auto', marginLeft: '15px'}} variant="contained" color="primary" fullWidth title={'Share the link on WhatsApp'} startIcon={<WhatsApp fontSize="large" />} onClick={() => {
                                    window.open (`https://wa.me/?text=${encodeURI(`Please Join this link to start the call: https://friends-corner.netlify.app/?id=${me}`)}`)
                                  } }> 
                                          Share On WhatsApp
                                      </Button>
                                </div>
                            </Grid>
                            {/*Button to make a Call*/}
                            <Grid item xs={12} md={6} className={classes.padding} style={{maxWidth: '100%'}}>
                                <Typography gutterBottom variant="h6">Make a call </Typography>
                                {/* populating to call ID directly from call */}
                                <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                                  {/* button to make a call*/}
                                  <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} title={'Call to mentioned ID'} className={classes.margin}> 
                                      Call
                                  </Button>
                                
                                
                            </Grid>
                        </Grid>
                    </form>
                    {children}

                </Paper>
            </Container>
          }
      </>
    );
    
}

export default Options;