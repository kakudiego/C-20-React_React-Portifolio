import React from 'react';
import resume from '../../images/resume.png';

function Resume() {
  return (
    <section className="my-5">
      <img style={{ display: 'block', width: '80%', margin: 'auto' }} src={resume} alt="resume" />
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://drive.google.com/file/d/1C9oJpsVt4JVQRhJkvRnTDuqcQiRPRw0h/view?usp=sharing' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ textAlign: 'center', color: 'white' }}>Download Resume</h4>
          </i>
        </a>
      </div>
    </section>
  );
}

export default Resume;
