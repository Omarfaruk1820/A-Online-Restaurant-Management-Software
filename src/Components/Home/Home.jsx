
import Features from "../Pages/Features";
import PopularMenu from "../Pages/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";
import Tesmonitals from "./Tesmonitals";


const Home = () => {
   
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Features></Features>
           <Tesmonitals></Tesmonitals>
           
        </div>
    );
};

export default Home;