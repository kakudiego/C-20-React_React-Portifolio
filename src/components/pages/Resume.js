import React from 'react';
// import resume from '../../images/resume.png';

function Resume() {
  return (
    <section className="my-5">
      {/* <img style={{ display: 'block', width: '80%', margin: 'auto' }} src={resume} alt="resume" /> */}
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://drive.google.com/file/d/1JRYyXz-csOUYWaIoezRz65ve8WWdUJ01/view?usp=sharing' target="_blank" rel="noreferrer noopener">
          <button type="button" class="btn btn-secondary" style={{ color: 'yellow' }}>
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Resume;
