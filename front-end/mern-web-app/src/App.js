import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'

import User from './user/pages/Users';
import Places from './places/pages/Places';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* SEZIONE PLACES */}
          <Route path="/" exact={false} element={<Places/>}/>

           {/* SEZIONE UTENTE (default route) */}
          <Route path="/users" element={<User/>}/>

          {/* SEZIONE DI DEFAULT (default route) */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
        />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
