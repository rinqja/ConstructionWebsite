import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import ChildLayout from "../components/childLayout";
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import FormLayout from "../components/formLayout";
import Abbrucharbeiten from "./Abbrucharbeiten";
import AboutUs from "./AboutUs";
import Containervermietung from "./Containervermietung";
import ErdundTiefbau from "./ErdundTiefbau";
import Form from "./Form";
import Form1 from "./Form1";
import Fuhrbetrieb from "./Fuhrbetrieb";
import { Home } from "./Home";
import JobAds from "./JobAds";
import { Login } from "./Login";
import Projects from "./Projects";
import SchüttgutundRecycling from "./SchüttgutundRecycling";
import Service from "./Service";
import Straßenreinigung from "./Straßenreinigung";
import Kiesundsandlieferung from "./Kiesundsandlieferung"
import OnlineShop from "./Onlineshop";


const router = createBrowserRouter([
    {
        path: "/ssss",
        element: <Login />,
    },
    {
        path: "/",
        element: <DefaultLayout><Home /></DefaultLayout> ,
    },
    {
        path: "/containerform",
        element: <FormLayout><Form /></FormLayout> ,
    },
    {
        path: "/fuhrbetriebform",
        element: <FormLayout><Form1 /></FormLayout> ,
    },
    {
        path: "/service",
        element: <ChildLayout><Service /></ChildLayout> ,
    },
    {
        path: "/onlineshop",
        element: <FormLayout><OnlineShop /></FormLayout>,
    },
   
    {
        path: "/abbrucharbeiten",
        element: <ChildLayout><Abbrucharbeiten /></ChildLayout> ,
    },
    {
        path: "/fuhrbetrieb",
        element: <ChildLayout><Fuhrbetrieb /></ChildLayout> ,
    },
    {
        path: "/erdbau",
        element: <ChildLayout><ErdundTiefbau /></ChildLayout> ,
    },
    {
        path: "/schüttgut-und-recycling",
        element: <ChildLayout><SchüttgutundRecycling /></ChildLayout> ,
    },
    {
        path: "/containervermietung",
        element: <ChildLayout><Containervermietung /></ChildLayout> ,
    },
    {
        path: "/straßenreinigung",
        element: <ChildLayout><Straßenreinigung /></ChildLayout> ,
    },
    {
        path:"/kiesundsandlieferung",
        element:<ChildLayout><Kiesundsandlieferung/></ChildLayout>,

    },
    {
        path: "/job-ads",
        element: <ChildLayout><JobAds /></ChildLayout> ,
    },
    {
        path: "/projects",
        element: <ChildLayout><Projects /></ChildLayout> ,
    },
    {
        path: "/about-us",
        element: <ChildLayout><AboutUs /></ChildLayout> ,
    },
]);

export default router