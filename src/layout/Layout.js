import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom'
import Header from "./Header";

function Layout() {
    return (<> 
        <Header />
        <Outlet />
        <Navbar />
    </>
    )
}
export default Layout