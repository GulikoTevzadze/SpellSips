import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from '../components/Navigation';
export default function RootLayout() {
  return (
    <>
      <Navigation/>
      <Outlet />
      <Footer />
    </>
  );
}
