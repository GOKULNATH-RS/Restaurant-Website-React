import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./components/Contact";
import About from "./components/About";
import Orders from "./components/Orders";
import Error from "./components/Error";
import RestaurantCardDetails from "./components/RestaurantCardCetails";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantCardDetails />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
