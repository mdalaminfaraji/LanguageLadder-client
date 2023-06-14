import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import TopNavber from '../../Shared/Navbar/TopNavber';
import useToggle from '../../Hooks/useToggle';

const Main = () => {
    const [darkMode, toggleTheme]=useToggle();

    return (
        <div className={darkMode ? 'dark-theme' : 'light-theme'}>
            <TopNavber toggleTheme={toggleTheme} darkMode={darkMode}></TopNavber>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;