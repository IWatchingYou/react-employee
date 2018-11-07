import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Config from './routes/Config';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Config />, document.getElementById('root'));
registerServiceWorker();
