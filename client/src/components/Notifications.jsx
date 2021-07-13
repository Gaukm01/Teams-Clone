import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

// use the connection details and functions created in SocketContext to define the App parts.
const Notifications = () =>{
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    function notifsound() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    
    return ( 
        <>
            {call.isReceivingCall && !callAccepted && (
                /* when receiving call and not accepted yet then notification will appear to accept call */
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div onload={()=>notifsound()}/>
                    {/* notification sound */}
                    <audio autoPlay className="audio-element">
                        <source src="http://docs.google.com/uc?export=open&id=1iZ_c4POSNB28eBNcsZUKA8f28ebZ4CaT"></source>                       
                    </audio>
                    <h1>{call.name || 'Unknown'} is Calling: </h1>
                    {/* button to accept call */}
                    <Button variant="contained" color="primary" onClick={answerCall} >
                        Answer
                    </Button>

                </div>
            )}

        </>
    );
    
};

export default Notifications;