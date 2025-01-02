import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/RootLayout";
import Contact from "./pages/Contact";
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> },
    { path: "/products", element: <Product /> },
    { path: "/products/:id", element: <ProductDetails /> },
    { path: "/contact", element: <Contact /> }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
