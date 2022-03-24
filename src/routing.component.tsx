import { Routes, Route } from 'react-router-dom';
import LoginComponent from './user/login.component';

function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="/trms" element={<div> trms</div>} />
    </Routes>
  );
}

export default RouterComponent;
