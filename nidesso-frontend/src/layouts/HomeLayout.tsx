import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/navbar/NavBar";

function HomeLayout() {
    return (
        <Fragment>
            <NavBar className="sticky top-0 z-50"></NavBar>
            <main className="max-w-7xl mx-auto px-4 mt-3 h-full min-h-[100vh]">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </Fragment>
    );
}

export default HomeLayout;