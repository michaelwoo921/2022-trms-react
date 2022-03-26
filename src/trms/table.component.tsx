import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserState, TrmsState } from '../store/reducer';
import { Trms } from './trms';
import { thunkGetAllTrms, thunkGetUser } from '../store/thunks';
import TrmsRow from './trms-row';

function groupIntoThrees(trms: Trms[]): Trms[][] {
  let arr: Trms[][] = [];
  for (let i = 0; i < trms.length / 3; i++) {
    arr.push(trms.slice(3 * i, 3 * i + 3));
  }

  return arr;
}

export default function TableComponent() {
  const allTrms = useSelector((state: TrmsState) => state.allTrms);
  const user = useSelector((state: UserState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkGetAllTrms());
    dispatch(thunkGetUser());
  }, [dispatch]);

  return (
    <section className="trmss container" id="trmss">
      {groupIntoThrees(allTrms).map((value, index: number) => {
        return <TrmsRow key={'trms-row-' + index} trms={value} />;
      })}
    </section>
  );
}
