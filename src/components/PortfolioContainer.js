import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

import { useMediaQuery } from 'react-responsive'

// Components
import { Desktop } from "../components/desktop/desktop.component";
import { Laptop } from "../components/laptop/laptop.component";
import { BigScreen } from "../components/big-screen/big-screen.component";
import { Mobile } from "../components/mobile/mobile.component";
import { TabletMobile } from "../components/tablet-mobile/tablet-mobile.component";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 300px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 650px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 900px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1150px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });


  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <main>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {/* {isMobileDevice && <Mobile />}
        {isTabletDevice && <>
          <TabletMobile />
          {isDesktop && <Desktop />}
          {isLaptop && <Laptop />}
          {isBigScreen && <BigScreen />}
        </>} */}
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
