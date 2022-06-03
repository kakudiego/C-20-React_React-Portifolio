import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className='nav' style={{ cursor: 'pointer', backgroundColor: '#181818', alignItems: 'center', padding: '10px' }}>
      <li className=''>
        <h3 style={{ color: 'white' }} href='#home' onClick={() => handlePageChange('Home')}>
          Diego Kaku
        </h3>
        <p>Full Stack Web Developer</p>
      </li>
      <li className='nav-item'>
        <h3
          style={{ color: 'white' }}
          href='#home'
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </h3>
      </li>
      <li className='nav-item'>
        <h3
          style={{ color: 'white' }}
          href='#about'
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </h3>
      </li>
      <li className='nav-item'>
        <h3
          style={{ color: 'white' }}
          href='#contact'
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </h3>
      </li>
      <li className='nav-item'>
        <h3
          style={{ color: 'white' }}
          href='#blog'
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </h3>
      </li>
    </ul>
  );
}

export default NavTabs;
