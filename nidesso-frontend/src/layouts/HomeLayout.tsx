import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/navbar/NavBar";
import { NavItem } from "../models/interfaces/nav-item";

function HomeLayout() {
    const navItems: NavItem[] = [
        NavItem.create('Home', '/'),
        NavItem.create('Team', '/about-us'),
        NavItem.create('Schule', '/school', !process.env.NODE_ENV || process.env.NODE_ENV === 'development'),
        NavItem.create('Login', '/login', !process.env.NODE_ENV || process.env.NODE_ENV === 'development'),
        NavItem.create('Playground', '/playground', !process.env.NODE_ENV || process.env.NODE_ENV === 'development')
    ]

    return (
        <Fragment>
            <NavBar className="sticky top-0 z-10" navItems={navItems}></NavBar>
            <main className="max-w-7xl mx-auto px-4 mt-3 min-h-[100vh]">
                <Outlet></Outlet>
            </main>
            <Footer className="mt-4"></Footer>
        </Fragment>
    );
}

export default HomeLayout;