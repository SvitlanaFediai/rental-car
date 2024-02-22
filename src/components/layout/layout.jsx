import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Suspense fallback={<div style={{margin: "0 auto", textAlign: "center", padding: "30px 0 30px", width:"100px"}}>Loading... </div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer/>
    </>
  )
}

export default Layout;