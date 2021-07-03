import react from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './SocketContext';
import './styles.css';

//first load the SocketContext for the connection part, then we run the App inside it.
ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,

    document.getElementById('root'),
);