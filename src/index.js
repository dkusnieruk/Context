import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import  App from 'components/App';
import './index.css';
import { UserContext } from 'components/context';
import { UserProvider } from 'components/context';
ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
    <App />
    </UserProvider>
    );
