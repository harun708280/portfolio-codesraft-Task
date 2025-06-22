import Nav from '@/components/shared/Nav';
import Home from '@/page/Home';
import React from 'react';

const Layout = () => {
    return (
        <div className='bg-background  min-h-screen'>
            <Nav/>
            <Home/>
        </div>
    );
};

export default Layout;