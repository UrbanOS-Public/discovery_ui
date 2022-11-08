
import App from './app'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'
import TagManager from 'react-gtm-module'
window.React = React

if (window.GTM_ID) {
  TagManager.initialize({ gtmId: window.GTM_ID });
}

ReactDOM.render(<App />, document.getElementById('root'))
