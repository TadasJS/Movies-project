import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';
import { Header } from '../components/Header.jsx';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import './GeneralLayout.css'

export function UserLayout() {
  const ctx = useContext(UserContext);

  return (
    <>
      <Header />
      <main className='General-container' >
        {ctx.user.user_role === 'user' || ctx.user.user_role === 'admin' ? (
          <Outlet />
        ) : (
          <h1>Only logged user can see this page</h1>
        )}
      </main>
      <Footer />
    </>
  );
}
