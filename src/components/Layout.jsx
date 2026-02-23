import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = () => {
    return ( 
        <main>
            <Navbar />
            <section className="wrapper">
                <Header />
                <Outlet />
            </section>
        </main>
    );
}

export default Layout;