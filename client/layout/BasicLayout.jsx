import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';
import { Header } from '../components/Header.jsx';
import './GeneralLayout.css'

export function BasicLayout() {
  return (
    <>
      <Header />
      <main className='General-container'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
