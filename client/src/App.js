import React from 'react';
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import Permissions from './components/Permissions';
import ChatScreen from './components/ChatScreen';

const useStyles = makeStyles((theme) =>({
    root: {
        backgroundColor: 'inherit'
    },
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        // border: '2px solid black',
        backgroundColor: 'inherit',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      
    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'inherit',
    },

    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        backgroundColor: 'inherit',
    },
}))
//Basic structure of the App. To fix the UI of webapp
const App = () =>{
    const classes = useStyles();
    return ( 
        <div className={classes.main} >
            <div className={classes.wrapper}>
                <AppBar className={classes.appBar}  position="static" color="inherit" >
                    <Typography variant="h2" align="center">Friends Corner</Typography>
                </AppBar>

                <VideoPlayer />
                <Permissions />
                
                <Options>
                    <Notifications />
                </Options>
            </div>
            <div>
                <ChatScreen/>
            </div>
        </div>
    );
    
}

export default App;