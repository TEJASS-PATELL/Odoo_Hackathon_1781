import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading"; 
import Navbar from "./Navbar";

const Layout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
