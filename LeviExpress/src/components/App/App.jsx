import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { Reservation } from './../Reservation/Reservation';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
