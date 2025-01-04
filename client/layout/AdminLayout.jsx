
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

export function AdminLayout() {

    const ctx = useContext(UserContext)

  return (
    <>
      <Header />
      <main>
      {ctx.user.role_name === 'admin' ? <Outlet /> : <h1>Only logged user can see this page</h1> }
      </main>
      <Footer />
    </>
  );
}