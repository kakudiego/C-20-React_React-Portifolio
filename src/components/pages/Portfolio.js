import React from 'react';
import passwordGenerator from '../../images/password-generator.png';
import workDayScheduler from '../../images/work-day-scheduler.png';
import weatherDashboard from '../../images/weather-dashboard.png';
import readmeGenerator from '../../images/readme-generator.png';
import noteTaker from '../../images/note-taker.png';
import budgetTracker from '../../images/budget-tracker.png';
import flavoredText from '../../images/FlavoredText.png';


function Portfolio() {
  return (
    <section className="my-5" style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-evenly' }}>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/Erock42/FlavoredText' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>FlavoredText</h4>
          </i>
          <img src={flavoredText} alt='flavoredText' />
        </a>
        <a style={{ textDecoration: 'none' }} href='https://fathomless-spire-74558.herokuapp.com' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h5 style={{ marginLeft: '15px', color: 'white' }}>Deployed</h5>
          </i>
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-3-JavaScript_Basic-Password-Generator' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Password Generator</h4>
          </i>
          <img src={passwordGenerator} alt='password generator' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-5-Third-Party-APIs_Work-Day-Scheduler' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Work Day Scheduler</h4>
          </i>
          <img src={workDayScheduler} alt='Work Day Scheduler' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-6-Server-Side-APIs_Weather-Dashboard' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Weather-Dashboard</h4>
          </i>
          <img src={weatherDashboard} alt='Weather-Dashboard' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-9-Node.js_Professional-README-Generator' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>README-Generator</h4>
          </i>
          <img src={readmeGenerator} alt='README-Generator' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-11-Express_Note-Taker' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Note-Taker</h4>
          </i>
          <img src={noteTaker} alt='Note-Taker' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-19-Progressive-Web-Applications-PWA_Budget-Tracker' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Budget Tracker</h4>
          </i>
          <img src={budgetTracker} alt='Budget Tracker' />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;