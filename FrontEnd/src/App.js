import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/shimmer";
import userContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import store from "./components/utils/Store";
import Cart from "./components/Cart";
// import "./index.css"

const Instamart = lazy(() => import("./components/Instamart"));

// CREATING FOOD APP

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "priyesh",
    email: "priyesh@gmail.com",
  });
  return (
    <Provider store={store}>
      <userContext.Provider value={{ user: user,setUser:setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// NOTES OF REACT

//****  code using React.createElement ****//

// const heading1 = React.createElement("h1",{
//     id:"title"
// },"Hello World1")

// const heading2 = React.createElement("h1",{
//     id:"title"
// },"Hello World2")

// const container = React.createElement("div",{
//     id:"container"
// },[heading1,heading2])
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(container)

//*******CODE USING JSX */

// const heading = (<h1 id ="title" key ="h1"> Hello world</h1>)
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

//*******CODE USING JSX  FUNCTIONAL COMPONENT*/

// const HeaderComponent = ()=>{
//     return(
//         <h1 id="title" key= "h1">Hello World Functional component</h1>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<HeaderComponent />)
