import React from 'react';
import resume from '../../images/resume.png';

function Resume() {
  return (
    <section className="my-5">
      {/* <img style={{ display: 'block', width: '80%', margin: 'auto' }} src={resume} alt="resume" /> */}
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://docs.google.com/document/d/119GHHhnkFsIBJw9iAIyTpXJCyyOaVe6y-nDfl1B67es/edit?usp=sharing' target="_blank" rel="noreferrer noopener">
          <i className='fab fa-twitter'>
            <h4 style={{ textAlign: '', color: 'white' }}>Download Resume</h4>
          </i>
        </a>
      </div>
    </section>
  );
}

export default Resume;
