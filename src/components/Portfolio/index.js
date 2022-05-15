import React from 'react';

function Portfolio() {
  return (
    <section className="my-5">
      {/* <h1 id="about">Password Generator</h1> */}
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-3-JavaScript_Basic-Password-Generator' target="_blank" rel="noreferrer noopener">
          <img src='https://i.imgur.com/XqQZQZL.png' alt='password generator' />
          <i className='fab fa-twitter'>
            <span style={{ marginLeft: '10px' }}>Password Generator</span>
          </i>
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-5-Third-Party-APIs_Work-Day-Scheduler' target="_blank" rel="noreferrer noopener">
          <img src='https://i.imgur.com/XqQZQZL.png' alt='Work Day Scheduler' />
          <i className='fab fa-twitter'>
            <span style={{ marginLeft: '10px' }}>Work Day Scheduler</span>
          </i>
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-6-Server-Side-APIs_Weather-Dashboard' target="_blank" rel="noreferrer noopener">
          <img src='https://i.imgur.com/XqQZQZL.png' alt='Weather-Dashboard' />
          <i className='fab fa-twitter'>
            <span style={{ marginLeft: '10px' }}>Weather-Dashboard</span>
          </i>
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-9-Node.js_Professional-README-Generator' target="_blank" rel="noreferrer noopener">
          <img src='https://i.imgur.com/XqQZQZL.png' alt='README-Generator' />
          <i className='fab fa-twitter'>
            <span style={{ marginLeft: '10px' }}>README-Generator</span>
          </i>
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-11-Express_Note-Taker' target="_blank" rel="noreferrer noopener">
          <img src='https://i.imgur.com/XqQZQZL.png' alt='Note-Taker' />
          <i className='fab fa-twitter'>
            <span style={{ marginLeft: '10px' }}>Note-Taker</span>
          </i>
        </a>
      </div>
      <div className="my-2">
        <a href='https://github.com/kakudiego/C-19-Progressive-Web-Applications-PWA_Budget-Tracker' target="_blank" rel="noreferrer noopener">
          <img src='https://i.imgur.com/XqQZQZL.png' alt='Budget Tracker' />
          <i className='fab fa-twitter'>
            <span style={{ marginLeft: '10px' }}>Budget Tracker</span>
          </i>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
