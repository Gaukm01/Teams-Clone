import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

// use the connection details and functions created in SocketContext to define the App parts.
const Permissions = () =>{
    const { enableAudio, enableVideo } = useContext(SocketContext);

    
    return ( 
        <>
            {
                /* when receiving call and not accepted yet then notification will appear to accept call */
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h1>Enable Here: </h1>
                    {/* button to accept call */}
                    <Button variant="contained" color="primary" onClick={enableAudio} audio >
                        Audio
                    </Button>
                    <Button variant="contained" color="primary" onClick={enableVideo} video> 
                        Video
                    </Button>
                </div>
            }

        </>
    );
    
};

export default Permissions;
