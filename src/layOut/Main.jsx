import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";



const Main = () => {
    return (
        <div className="p-8 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;