import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './assets/Styles/General/Header.css';
import './assets/Styles/home/home.css';
import './assets/Styles/home/initialInfo.css';
import './assets/Styles/home/carousel.css';
import './assets/Styles/home/history.css';
import './assets/Styles/General/Footer.css';
// import './assets/Styles/General/Tailwind.css';
import './assets/Styles/Login/login.css'
import './assets/Styles/Contact/contact.css'
import './assets/Styles/Dashboard/sidebar.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
