import React from 'react';
// import resume from '../../images/resume.png';

function Resume() {
  return (
    <section className="my-5">
      {/* <img style={{ display: 'block', width: '80%', margin: 'auto' }} src={resume} alt="resume" /> */}
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://docs.google.com/document/d/1_93LyKELGSkdCb8UJxZX8XA91GwY4pwh/edit?usp=sharing&ouid=104375754539868446896&rtpof=true&sd=true' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ textAlign: '', color: 'white' }}>Download Resume</h4>
          </i>
        </a>
      </div>
    </section>
  );
}

export default Resume;
