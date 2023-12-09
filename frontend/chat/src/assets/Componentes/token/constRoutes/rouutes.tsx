import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../protectedRoute/ProtectedRoute";
import { Login } from "../../../pages/login";
import { Error404 } from "../../../pages/errorpage";
import Home from "../../../pages/home";
import Chat from "../../../pages/chat";
import Blog from "../../../pages/blog";
import { GameCYR } from "../../../pages/gamep";
import { ThePrivatePage } from "../../../pages/private";
import { useAuth } from "../auth/authprovider";


export const Routees = () => {
    const { token } = useAuth();


const routesForThePublic = [
{
    path: "/",
    element: <Login/>,
},
{
    path: "*",
    element: <Error404/>,
},
];

const routesForOnlyAuth = [
{
    path: "/",
    element: <ProtectedRoute/>,
    children: [
        {
            path:"/home",
            element: <Home/>,
        },
        {
            path:"/chat",
            element: <Chat/>,
        },
        {
            path:"/blog",
            element: <Blog/>,
        },
        {
            path:"/game",
            element: <GameCYR/>,
        },
        {
            path:"/pvp",
            element: <ThePrivatePage/>,
        },
    ],
},
];

const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "*",
      element: <Error404/>,
    },
  ];

  const router = createBrowserRouter([
    ...routesForThePublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForOnlyAuth,
  ]);

  return <RouterProvider router={router} />;
}

export default Routees;