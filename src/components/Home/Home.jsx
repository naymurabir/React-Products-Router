import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThreeDots } from "react-loader-spinner";

const Home = () => {

    const navigation = useNavigation()



    return (
        <div className="max-w-screen-xl my-5 mx-auto px-2 md:px-16 lg:px-24">
            <Header></Header>
            {
                navigation.state === "loading" ? <ThreeDots></ThreeDots> : <Outlet></Outlet>
            }


            <Footer></Footer>
        </div>
    );
};

export default Home;