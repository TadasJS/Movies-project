import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { NoPage } from '../pages/NoPage';
import { BasicLayout } from '../layout/BasicLayout';
import { CreateCardMovie } from '../components/CreateCardMovie';
import { CreateCardSerial } from '../components/CreateCardSerial';
import UpdateMovieForm from '../components/UpdateMovieForm';
import UpdateTvShowForm from '../components/UpdateTvShowForm';
import { Registration } from '../pages/Registration';
import { Login } from '../pages/Login';
import { UserProvider } from '../context/UserContext';
import { UserLayout } from '../layout/UserLayout';
import { GenreList } from '../components/GenreList';
import { UserProfile } from '../pages/UserProfile';
import { AdminLayout } from '../layout/AdminLayout';
import { Movies } from '../pages/Movies';
import { TvShows } from '../pages/TvShows';
import { CardInfo } from '../pages/CardInfo';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={BasicLayout}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cardinfo" element={<CardInfo />} />
          </Route>
          <Route Component={UserLayout}>
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshow" element={<TvShows />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          <Route Component={AdminLayout}>
            <Route path="/updateMovie/:id" element={<UpdateMovieForm />} />
            <Route path="/updateTvshow/:id" element={<UpdateTvShowForm />} />
            <Route path="/addcardmov" element={<CreateCardMovie />} />
            <Route path="/addcardser" element={<CreateCardSerial />} />
            <Route path="/genres" element={<GenreList />} />
          </Route>
          <Route Component={BasicLayout}>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
