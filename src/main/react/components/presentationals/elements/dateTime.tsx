import * as React from 'react';
import * as dateFns from 'date-fns';

export default function DateTime() {
  return <div className="paper calendar-container">
      <div className="image-container-alt">
        <div className="calendar"/>
        <div>{dateFns.format(new Date(), 'MMMM D, YYYY')}</div>
      </div>
      <div className="image-container-alt">
        <div className="clock"/>
        <div>{dateFns.format(new Date(), 'hh:mm:ss A')} PST</div>
      </div>
  </div>;
}