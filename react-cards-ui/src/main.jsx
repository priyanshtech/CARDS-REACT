import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import PropProvider from './context/Context';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<><PropProvider>
<App /></PropProvider>
</>);