import React from 'react';
import { Link } from 'react-router-dom';
import { Trms } from './trms';

interface TrmsProps {
  data: Trms;
}

const TrmsComponent = ({ data }: TrmsProps) => {
  console.log('data', data);
  return (
    <div
      className="col-12 col-md-3 m-1 trms card"
      style={{ backgroundColor: '#96c0ca' }}
    >
      <div className="card-body" style={{ border: 'solid' }}>
        <p>Created by {data.name}</p>
        <p> Event Name: {data.eventName}</p>
        <p>created on: {data.createdDate}</p>
        <Link to={`/trms/${data.name}/${data.createdDate}`}>
          {' '}
          See more info
        </Link>
      </div>
    </div>
  );
};

export default TrmsComponent;
