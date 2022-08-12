import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Welcome from '../pages/Welcome';
import App from '../pages/App';

const AllRoutes = () => (
  <BrowserRouter>
      <Routes>   
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/app" element={<App />} />
          <Route path="*" element={<div>404</div> } />
      </Routes>
    </BrowserRouter>
);

export default AllRoutes;
