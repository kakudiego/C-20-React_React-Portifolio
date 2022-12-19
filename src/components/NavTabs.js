import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='nav' style={{ cursor: 'pointer', backgroundColor: 'black', alignItems: 'center', padding: '10px', display: 'flex', justifyContent: 'center' }}>
      <div className=''>
        <h3 style={{ color: 'yellow' }} href='#home' onClick={() => handlePageChange('Home')}>
          Diego Kaku
        </h3>
        <p>Full Stack Web Developer</p>
      </div>
      <div>
        <ul className='nav' style={{ border: 'none', display: 'flex', justifyContent: 'center' }}>
          <li className='nav-item'>
            <h3
              style={{ backgroundColor: 'black' }}
              href='#home'
              onClick={() => handlePageChange('Home')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              <button type="button" className="btn btn-secondary" style={{ color: 'yellow' }}>
                Home
              </button>
            </h3>
          </li>
          <li className='nav-item'>
            <h3
              style={{ backgroundColor: 'black' }}
              href='#about'
              onClick={() => handlePageChange('Portfolio')}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              <button type="button" className="btn btn-secondary" style={{ color: 'yellow' }}>
                Portfolio
              </button>
            </h3>
          </li>
          <li className='nav-item'>
            <h3
              style={{ backgroundColor: 'black' }}
              href='#contact'
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              <button type="button" className="btn btn-secondary" style={{ color: 'yellow' }}>
                Contact
              </button>
            </h3>
          </li>
          <li className='nav-item'>
            <h3
              style={{ backgroundColor: 'black' }}
              href='#blog'
              onClick={() => handlePageChange('Resume')}
              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              <button type="button" className="btn btn-secondary" style={{ color: 'yellow' }}>
                Resume
              </button>
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavTabs;
