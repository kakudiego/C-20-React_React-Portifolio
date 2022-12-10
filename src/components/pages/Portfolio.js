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
          <p className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>FlavoredText</h4>
            <p style={{ marginLeft: '15px', color: 'white' }}>Your next go-to recipe blog! Create an account, find, save, comment and share new recipes.</p>
            <a style={{ textDecoration: 'none', color: 'yellow' }} href='https://fathomless-spire-74558.herokuapp.com' target="_blank" rel="noreferrer noopener" >
              <button type="button" class="btn btn-secondary" style={{ color: 'yellow' }}>
                Deployed - JavaScript + HTML + CSS
              </button>
            </a>
          </p>
          <img src={flavoredText} alt='flavoredText' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-3-JavaScript_Basic-Password-Generator' target="_blank" rel="noreferrer noopener">
          <p className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Password Generator</h4>
            <p style={{ marginLeft: '15px', color: 'white' }}>Password Generator with prompt for criteria.</p>
            <a style={{ textDecoration: 'none' }} href='https://kakudiego.github.io/C-3-JavaScript_Basic-Password-Generator/' target="_blank" rel="noreferrer noopener">
              <button type="button" class="btn btn-secondary" style={{ color: 'yellow' }}>
                Deployed - React + JavaScript + HTML + CSS
              </button>
            </a>
          </p>
          <img src={passwordGenerator} alt='password generator' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-5-Third-Party-APIs_Work-Day-Scheduler' target="_blank" rel="noreferrer noopener">
          <p className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Work Day Scheduler</h4>
            <p style={{ marginLeft: '15px', color: 'white' }}>A simple calendar app for scheduling your work day.</p>
            <a style={{ textDecoration: 'none' }} href='https://kakudiego.github.io/C-5-Third-Party-APIs_Work-Day-Scheduler/' target="_blank" rel="noreferrer noopener">
              <button type="button" class="btn btn-secondary" style={{ color: 'yellow' }}>
                Deployed - JavaScript + HTML + CSS
              </button>
            </a>
          </p>
          <img src={workDayScheduler} alt='Work Day Scheduler' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-6-Server-Side-APIs_Weather-Dashboard' target="_blank" rel="noreferrer noopener">
          <p className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Weather-Dashboard</h4>
            <p style={{ marginLeft: '15px', color: 'white' }}>Minimal Weather App using OpenWeather One Call API to retrieve weather data.</p>
            <a style={{ textDecoration: 'none' }} href='https://kakudiego.github.io/C-6-Server-Side-APIs_Weather-Dashboard/' target="_blank" rel="noreferrer noopener">
              <button type="button" class="btn btn-secondary" style={{ color: 'yellow' }}>
                Deployed - JavaScript + HTML + CSS
              </button>
            </a>
          </p>
          <img src={weatherDashboard} alt='Weather-Dashboard' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-11-Express_Note-Taker' target="_blank" rel="noreferrer noopener">
          <p className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Note-Taker</h4>
            <p style={{ marginLeft: '15px', color: 'white' }}>Note Taker that can be used to write and save notes.
            </p>
            <a style={{ textDecoration: 'none' }} href='https://boiling-crag-36276.herokuapp.com/' target="_blank" rel="noreferrer noopener">
              <button type="button" class="btn btn-secondary" style={{ color: 'yellow' }}>
                Deployed - JavaScript + HTML + CSS
              </button>
            </a>
          </p>
          <img src={noteTaker} alt='Note-Taker' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-19-Progressive-Web-Applications-PWA_Budget-Tracker' target="_blank" rel="noreferrer noopener">
          <p className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>Budget Tracker</h4>
            <p style={{ marginLeft: '15px', color: 'white' }}>Track your budget online and offline.</p>
            <p style={{ textDecoration: 'none' }} href='https://thawing-dusk-86360.herokuapp.com/' target="_blank" rel="noreferrer noopener">
              <button type="button" class="btn btn-secondary" style={{ color: 'yellow' }}>
                Deployed - JavaScript + HTML + CSS
              </button>
            </p>
          </p>
          <img src={budgetTracker} alt='Budget Tracker' />
        </a>
      </div>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-9-Node.js_Professional-README-Generator' target="_blank" rel="noreferrer noopener">
          <p className='fab fa-twitter'>
            <h4 style={{ marginLeft: '15px', color: 'white' }}>README-Generator</h4>
            <p style={{ marginLeft: '15px', color: 'white' }}>Simple and quick command-line application created to generate a README.md file.</p>
            <a style={{ textDecoration: 'none' }} href='https://github.com/kakudiego/C-9-Node.js_Professional-README-Generator' target="_blank" rel="noreferrer noopener">
              <button type="button" class="btn btn-secondary" style={{ color: 'yellow' }}>
                GitHub - JavaScript
              </button>
            </a>
          </p>
          <img src={readmeGenerator} alt='README-Generator' />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;