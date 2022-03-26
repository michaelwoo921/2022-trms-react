import { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import trmsService from './trms.service';
import { changeTrms } from '../store/actions';
import { AppState } from '../store/reducer';

function TrmsDetailComponent(props: any) {
  const match: any = useMatch('/trms/:name/:createdDate');
  const dispatch = useDispatch();
  const trms = useSelector((state: AppState) => state.trms);
  const { name, createdDate } = match.params;
  console.log(match);
  useEffect(() => {
    trmsService.getTrms(name, createdDate).then((t) => {
      console.log(t);
      dispatch(changeTrms(t));
    });
  }, [dispatch, name, createdDate]);

  return (
    <div className="col trms card" style={{ backgroundColor: '#96c0ca' }}>
      <div className="card-body" style={{ backgroundColor: '#96c0ca' }}>
        <p>
          Submiied by {trms.name} on {trms.createdDate}
        </p>
      </div>
    </div>
  );
}

export default TrmsDetailComponent;
