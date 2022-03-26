import React from 'react';
import { Trms } from './trms';
import TrmsComponent from './trms.component';

const TrmsRow = ({ trms }: any) => {
  return (
    <section className="row">
      {trms.map((t: Trms, index: number) => (
        <TrmsComponent key={'trms-' + index} data={t} />
      ))}
    </section>
  );
};

export default TrmsRow;
