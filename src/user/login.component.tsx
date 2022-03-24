import './login.component.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserState } from '../store/reducer';
import { loginAction, getUser } from '../store/actions';
import { User } from './user';
import userService from './user.service';

function LoginComponent() {
  const user = useSelector((state: UserState) => state.loginUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFormInput({ target }: any) {
    console.log(target);
    let u: User = { ...user, [target.name]: target.value };

    dispatch(loginAction(u));
  }
  function submitForm() {
    userService.login(user).then((user) => {
      console.log(user);
      dispatch(getUser(user));
      navigate('/trms');
    });
  }

  return (
    <div className="row trms-container">
      <div className="col-12 col-md-8 trms-body">
        <h1> Tuition Reimbursement Management System</h1>
        <p>We invest in our employee's professional development</p>
        <div>
          <img
            className="trms-img"
            src="images/j-kelly-brito-PeUJyoylfe4-unsplash.jpg"
          />
          <span style={{ fontSize: '8px' }}>
            Photo by
            <a href="https://unsplash.com/@hellokellybrito?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              J. Kelly Brito
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/s/photos/education?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
      </div>
      <div className="col-12 col-md-4 trms-form">
        <h2 className="trms-form-heading mb-3">Tuition Reimbursement</h2>
        <div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={user.name}
              onChange={handleFormInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={user.password}
              onChange={handleFormInput}
            />
          </div>
          <button
            id="submit"
            type="submit"
            className="btn btn-primary"
            onClick={submitForm}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
