import React from 'react';
import photo from '../../images/photo.jpg';

function Home() {
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
      <div className="my-2">
        <h1 id="about">About Me:</h1>
        <img className="foto" src={photo} alt="profile shot" style={{ float: 'left', margin: '0 10px 0 0' }} />
        <div className="">
          <h5>
            Hi, my name is Diego Kaku, and I am a Full Stack Web developer with Doctor of Medicine and Nurse degree,
          </h5>
          <h5>
            recently graduated from the University of Minnesota BootCamp with a certificate in Full Stack Web Development,
          </h5>
          <h5>
            and has since developed expertise in JavaScript, HTML, CSS, React.js, responsive web design with a focus on mobile-first.
          </h5>
          <h5>
            I enjoy teamwork, being responsible, respectful, and trustworthy demonstrated during my BootCamp.
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Home;
