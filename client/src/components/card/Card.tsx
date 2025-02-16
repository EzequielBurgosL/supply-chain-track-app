import './Card.css';

import React from 'react';
import { Event } from '../../models';
import { formatDateToLocale } from '../../utils/dates';

export const Card: React.FC<{ item: Event }> = ({
  item,
}) => {
  const date  = formatDateToLocale(item.timestamp);

  return (
    <div className="card">
      <h3>{item?.location}</h3>
      <div className="card-field">Custodian: {item.custodian}</div>
      <div className="card-field">Date: {date}</div>
    </div>
  );
};
