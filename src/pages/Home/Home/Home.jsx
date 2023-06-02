import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testimonial from "./Testomonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bisto Boos | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularItems></PopularItems>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;