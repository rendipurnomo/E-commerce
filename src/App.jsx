import './App.css';
import ErrorPage from './error-pages';
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import { Home, Product, Products } from './pages';
import { Footer, Navbar } from './components';

const Layout = ()=> {
  return (
    <div className='w-full'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/products/:id",
        element: <Products />
      },
    ]

  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
