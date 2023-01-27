import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Homes = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Homes;

// Done //
