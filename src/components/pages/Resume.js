import React from 'react';
import resume from '../../images/resume.png';

function Resume() {
  return (
    <section className="my-5">
      <img style={{ width: '90%', alignContent: 'center' }} src={resume} alt="resume" />
      <div className="my-2">
        <a href='https://drive.google.com/file/d/1C9oJpsVt4JVQRhJkvRnTDuqcQiRPRw0h/view?usp=sharing' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <span style={{ marginLeft: '10px' }}>Download Resume</span>
          </i>
        </a>
      </div>
    </section>
  );
}

export default Resume;
