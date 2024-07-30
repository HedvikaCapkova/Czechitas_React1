import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
