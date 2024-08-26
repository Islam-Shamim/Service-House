import About from "./About";
import Banner from "./Banner";
import Products from "./Products";
import Services from "./Services";
import Team from "./Team";


const Home = () => {
  return (
    <div className="space-y-16">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Products></Products>
      <Team></Team>
    </div>
  );
};

export default Home;
