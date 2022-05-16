import React from 'react';
import passwordGenerator from '../../images/password-generator.png';
import workDayScheduler from '../../images/work-day-scheduler.png';
import weatherDashboard from '../../images/weather-dashboard.png';
import readmeGenerator from '../../images/readme-generator.png';
import noteTaker from '../../images/note-taker.png';
import budgetTracker from '../../images/budget-tracker.png';


function Portfolio() {
  return (
    <section className="my-5">
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-3-JavaScript_Basic-Password-Generator' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '10px' }}>Password Generator</h4>
          </i>
          <img src={passwordGenerator} alt='password generator' />
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-5-Third-Party-APIs_Work-Day-Scheduler' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '10px' }}>Work Day Scheduler</h4>
          </i>
          <img src={workDayScheduler} alt='Work Day Scheduler' />
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-6-Server-Side-APIs_Weather-Dashboard' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '10px' }}>Weather-Dashboard</h4>
          </i>
          <img src={weatherDashboard} alt='Weather-Dashboard' />
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-9-Node.js_Professional-README-Generator' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '10px' }}>README-Generator</h4>
          </i>
          <img src={readmeGenerator} alt='README-Generator' />
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-11-Express_Note-Taker' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '10px' }}>Note-Taker</h4>
          </i>
          <img src={noteTaker} alt='Note-Taker' />
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-19-Progressive-Web-Applications-PWA_Budget-Tracker' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '10px' }}>Budget Tracker</h4>
          </i>
          <img src={budgetTracker} alt='Budget Tracker' />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;