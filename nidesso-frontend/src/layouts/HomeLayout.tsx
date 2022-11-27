import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

function HomeLayout() {
    return (
        <Fragment>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default HomeLayout;