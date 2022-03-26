import { Routes, Route, Link } from 'react-router-dom';
import LoginComponent from './user/login.component';
import TableComponent from './trms/table.component';
import TrmsDetailComponent from './trms/trmsdetail.component';

function RouterComponent() {
  function logout() {}
  return (
    <div>
      <nav className="navbar navbar-expand-sm routing-nav navbar-light">
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            onClick={() => {}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/addTrms">
                  Create Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trms">
                  View all Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/trms" element={<TableComponent />} />
        <Route
          path="/trms/:name/:createdDate"
          element={<TrmsDetailComponent />}
        />
      </Routes>
    </div>
  );
}

export default RouterComponent;
