import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import NavTabs from './components/NavTabs';

// function App() {
//   const [categories] = useState([
//     { name: 'about me', description: 'About me from navbar' },
//   ]);

//   const [aboutSelected, setAboutSelected] = useState(true);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const [contactSelected, setContactSelected] = useState(false);

//   const [resumeSelected, setResumeSelected] = useState(false);

//   const [portfolioSelected, setPortfolioSelected] = useState(false);

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         aboutSelected={aboutSelected}
//         setAboutSelected={setAboutSelected}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//         resumeSelected={resumeSelected}
//         setResumeSelected={setResumeSelected}
//         portfolioSelected={portfolioSelected}
//         setPortfolioSelected={setPortfolioSelected}
//       ></Nav>

//       <main>

//         {currentCategory === categories[0]}

//         {!portfolioSelected ? (
//           <>
//             <About></About>
//           </>
//         ) : (
//           <Portfolio></Portfolio>
//         )}
//         {!contactSelected ? (
//           <>
//           </>
//         ) : (
//           <ContactForm></ContactForm>
//         )}
//         {!resumeSelected ? (
//           <>
//           </>
//         ) : (
//           <Resume></Resume>
//         )}
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

export default App;
