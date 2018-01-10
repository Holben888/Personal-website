import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scenes/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import "animate.css/animate.min.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
