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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
}

export default Resume;
