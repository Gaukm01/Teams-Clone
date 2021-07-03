import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

// use the connection details and functions created in SocketContext to define the App parts.
const Notifications = () =>{
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    
    return ( 
        <>
            {call.isReceivingCall && !callAccepted && (
                /* when receiving call and not accepted yet then notification will appear to accept call */
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h1>{call.name} is Calling: </h1>
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