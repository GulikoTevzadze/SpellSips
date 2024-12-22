import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/RootLayout";
const router = createBrowserRouter([

{ path: '/',
  element: <RootLayout />,
  children: [{ path: "/", element: <Home /> },
  { path: "/products", element: <Product /> },
  { path: "/products/:id", element: <ProductDetails /> }]}
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
