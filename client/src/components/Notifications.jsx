import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';


const Notifications = () =>{
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    
    return ( 
        <>
            {call.isReceivingCall && !callAccepted && (
                /* when receiving call and not accepted yet then notification will appear to accept call */
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h1>{call.name} is Calling: </h1>
                    <Button variant="contained" color="primary" onClick={answerCall} >
                        Answer
                    </Button>

                </div>
            )}

        </>
    );
    
};

export default Notifications;