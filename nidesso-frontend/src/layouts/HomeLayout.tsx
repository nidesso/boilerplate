import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

function HomeLayout() {
    return (
        <Fragment>
            <NavBar className="sticky top-0 z-50"></NavBar>
            <div className="max-w-7xl mx-auto px-4 mt-3">
                <Outlet></Outlet>
            </div>
        </Fragment>
    );
}

export default HomeLayout;