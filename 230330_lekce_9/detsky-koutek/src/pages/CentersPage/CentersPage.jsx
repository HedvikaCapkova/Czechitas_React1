import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getAllCenters } from './../../centers';

export const CentersPage = () => {
  return (
    <div className="centers">
      <div className="centersPage">
        {getAllCenters().map((center) => (
          <div key={center.id}>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }
              to={center.id}>
              {center.name}
            </NavLink>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
