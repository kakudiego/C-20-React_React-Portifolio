import React from 'react';

function Resume() {
  return (
    <section className="my-5" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="my-2">
        <a style={{ textDecoration: 'none' }} href='https://drive.google.com/file/d/1JRYyXz-csOUYWaIoezRz65ve8WWdUJ01/view?usp=sharing' target="_blank" rel="noreferrer noopener">
          <button type="button" className="btn btn-secondary" style={{ color: 'yellow' }}>
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Resume;
