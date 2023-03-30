import React, { useParams } from 'react';
import { getAllCenters } from './../../centers';

export const CentersPage = () => {
  const { centerId } = useParams();
  const centerData = center.find((c) => c.id === centerId);

  getAllCenters().map((center) => {
    console.log(center.id);
    return (
      <div>
        <div>
          {center.name} {center.address}
        </div>
      </div>
    );
  });
};
