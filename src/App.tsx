import React from 'react';
import './App.css';
import Timer from './components/Timer'

function App() {
  const res = (
  <div className="main">   
  <Timer city="Jerusalem" locales="en-Us" timeZone='Asia/Jerusalem' interval={1000}/>
  <Timer city="Tokyo" locales="en-Us" timeZone='Asia/Tokyo' interval={1000}/>
  <Timer city="London" locales="en-Us" timeZone='Europe/London' interval={1000}/>
  <Timer city="New York" locales="en-Us" timeZone='America/New_York' interval={1000}/>
  </div>
  )
  return res;
}

export default App;
