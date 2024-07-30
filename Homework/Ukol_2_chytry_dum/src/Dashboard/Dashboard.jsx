import React from 'react';
import { Lights } from '../Lights/Lights.jsx';
import { Climate } from '../Climate/Climate.jsx';
import { Blinds } from '../Blinds/Blinds.jsx';
import { Energy } from '../Energy/Energy.jsx';
import './Dashboard.css';

export const Dashboard = ({ data }) => {
  const { lights, climate, blinds, energyConsumption } = data;
  return (
    <main className="dashboard">
      <Lights lights={lights} />
      <Climate climate={climate} />
      <Blinds blinds={blinds} />
      <Energy energyConsumption={energyConsumption} />
    </main>
  );
};
