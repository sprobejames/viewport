import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const scale = +1 / window.devicePixelRatio;
// document
//   .querySelector('meta[name=viewport]')
//   .setAttribute('content', `width=device-width, initial-scale=${scale}`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
