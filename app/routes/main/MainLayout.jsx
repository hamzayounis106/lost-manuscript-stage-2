import { Outlet } from "react-router-dom";
import { Footer, Sidebar } from "../../index";
import Header from "./Header";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    );
};
export default MainLayout;
