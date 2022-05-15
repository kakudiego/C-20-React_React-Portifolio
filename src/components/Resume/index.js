import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <h1 id="about">Resume</h1>
      <div className="my-2">
        <a href='www.google.com' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <span style={{ marginLeft: '10px' }}>Download Resume</span>
          </i>
        </a>
      </div>
    </section>
  );
}

export default Resume;
