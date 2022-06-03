import React from 'react';
import photo from '../../images/photo.jpg';

function Home() {
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
      <div className="my-2">
        <h1 id="about">About Me:</h1>
        <img style={{ width: '20%', margin: '10px' }} src={photo} alt="profile shot" />
        <h5>
          Hi, my name is Diego Kaku, and I am a full stack web developer student at the University of Minnesota Bootcamp.
        </h5>
        <h5>
          I am from Brazil, a small town called Dourados in the state of Mato Grosso do Sul, and I am currently living in Saint Paul, Minnesota.
        </h5>
        <h5>
          I speak Portuguese, Spanish and English (always learning)...
        </h5>
        <h5>
          I have a Nursing degree from the Universidade Estadual do Oeste do Parana (Brazil), and I have a MD degree from the Universidad Privada Franz Tamayo (Bolivia).
        </h5>
      </div>
    </section>
  );
}

export default Home;
