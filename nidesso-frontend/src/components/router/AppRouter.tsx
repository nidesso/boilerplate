import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AboutUs from "../../features/about-us/AboutUs";
import Login from "../../features/authentication/login/Login";
import Register from "../../features/authentication/register/Register";
import Home from "../../features/home/Home";
import Playground from "../../features/playground/Playground";
import HomeLayout from "../../layouts/HomeLayout";
import NoNavLayout from "../../layouts/NoNavLayout";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<HomeLayout />}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about-us' element={<AboutUs />}></Route>
                <Route path='/playground' element={<Playground />}></Route>
            </Route>
            <Route element={<NoNavLayout />}>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Route>
        </>
    )
);

export default appRouter;