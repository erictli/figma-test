import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterDesign } from './figmaComponents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterDesign />, document.body);
registerServiceWorker();
