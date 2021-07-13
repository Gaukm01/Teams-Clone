import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../SocketContext';

import { PhoneDisabled } from '@material-ui/icons';
import CallIcon from '@material-ui/icons/CallEnd';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';


// use the connection details and functions created in SocketContext to define the App parts.
const Permissions = () =>{
    const { enableAudio, enableVideo, callAccepted, callEnded, leaveCall } = useContext(SocketContext);
    const [micOn, setMicOn] = useState(true);
    const [videoOn, setVideoOn] = useState(true);
    //const classes = useStyles();


    
    return ( 
        <>
            { callAccepted && ! callEnded ? (

                /* when call is going on*/
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {/* buttons to toggle audio & video and End Call button during call */}
                    {micOn ? (
                        ////issue, add videoOn as checking condition on onClick
                        <Button variant="contained" color="primary" title={'Switch off Mic'} disabled={!videoOn} onClick={() => {setMicOn(!micOn); enableAudio();}}>
                            <MicIcon></MicIcon>
                        </Button>
                    ) : (
                        <Button variant="contained" color="secondary" title={'Switch on Mic'} onClick={() => {setMicOn(!micOn); enableAudio();}}>
                            <MicOffIcon></MicOffIcon>
                        </Button>
                    )}
                    {videoOn ? (
                        ////issue, add micOn as checking condition on onClick
                        <Button variant="contained" color="primary" title={'Switch off Video cam'} disabled={!micOn} onClick={() => {setVideoOn(!videoOn); enableVideo();}}>
                            <VideocamIcon></VideocamIcon>
                        </Button>
                    ) : (
                        <Button variant="contained" color="secondary" title={'Switch on Video cam'} onClick={() => {setVideoOn(!videoOn); enableVideo();}}>
                            <VideocamOffIcon></VideocamOffIcon>
                        </Button>
                    )}
                    <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} title={'End Call'}>                        
                    </Button>
                </div>
            ) : (
                /* call is not started */
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop:'10px' }}>
                    <h1> Chat Permissions: </h1>
                    {/* buttons to toggle audio & video and End Call button before joining call */}
                    {micOn ? (
                        // if video is on only then can switch off mic, as either audio or video should be in stream.
                        ////issue, add videoOn as checking condition on onClick
                        <Button variant="contained" color="primary" title={'Switch off Mic'} disabled={!videoOn} onClick={() => {setMicOn(!micOn); enableAudio();}}>
                            <MicIcon></MicIcon>
                        </Button>
                        
                    ) : (
                        <Button variant="contained" color="secondary" title={'Switch on Mic'} onClick={() => {setMicOn(!micOn); enableAudio();}}>
                            <MicOffIcon></MicOffIcon>
                        </Button>
                    )}
                    {videoOn ? (
                        ////issue, add micOn as checking condition on onClick
                        <Button variant="contained" color="primary" title={'Switch off Video cam'} disabled={!micOn} onClick={() => {setVideoOn(!videoOn); enableVideo();}}>
                            <VideocamIcon></VideocamIcon>
                        </Button>
                    ) : (
                        <Button variant="contained" color="secondary" title={'Switch on Video cam'} onClick={() => {setVideoOn(!videoOn); enableVideo();}}>
                            <VideocamOffIcon></VideocamOffIcon>
                        </Button>
                    )}
                </div>

            )}

        </>
    );
    
};

export default Permissions;
