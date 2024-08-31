import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp />
        <FirstApp title="Hola, soy Goku" subTitle={4 + 5} /> */}
        <CounterApp value={20} />
    </React.StrictMode>
);