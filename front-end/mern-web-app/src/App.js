import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'

import User from './user/pages/Users';
import Places from './places/pages/Places';
import MainHeader from './header/MainHeader';
import UserPlaces from './user/pages/UserPlaces';

function App() {
  return (
      <BrowserRouter>
        <MainHeader />

        <div className='pages'>
          <Routes>
            {/* SEZIONE PLACES */}
            <Route path="/" exact={false} element={<Places/>}/>

            {/* SEZIONE UTENTE */}
            <Route path="/users" element={<User/>}/>

            {/* SEZIONE GALLERIA UTENTE */}
            <Route path="/users/:username" element={<UserPlaces />}/>

            {/* SEZIONE DI DEFAULT (default route) */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
          />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
