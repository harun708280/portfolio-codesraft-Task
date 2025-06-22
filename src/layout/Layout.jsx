import About from '@/components/About/About';
import Nav from '@/components/shared/Nav';
import Home from '@/page/Home';
import React from 'react';

const Layout = () => {
    return (
        <div className='bg-background  min-h-screen'>
            <Nav/>
            <Home/>
            <About/>
        </div>
    );
};

export default Layout;