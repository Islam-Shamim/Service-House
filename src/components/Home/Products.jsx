import { MdStar } from "react-icons/md";
import product1 from "../../assets/images/products/1.png";
import product2 from "../../assets/images/products/2.png";
import product3 from "../../assets/images/products/3.png";
import product4 from "../../assets/images/products/4.png";
import product5 from "../../assets/images/products/5.png";
import product6 from "../../assets/images/products/6.png";

const Products = () => {
  return (
    <div className="my-8">
      <div className="text-center space-y-4">
        <h2 className="text-orange-600 text-2xl font-bold">Popular Products</h2>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          fuga commodi natus modi in sint, fugiat <br /> impedit debitis harum
          magnam, minima repudiandae.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl p-3">
          <img
            className="rounded  h-2/3 bg-base-200 p-2"
            src={product1}
            alt="Shoes"
          />
          <div className=" text-center space-y-2 mt-6">
            <div className="flex text-yellow-500 justify-center">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <h2 className="text-2xl font-bold">Car Engin Plug</h2>
            <h2 className="text-xl font-bold text-orange-500">$20.00</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl p-3">
          <img
            className="rounded  h-2/3 bg-base-200 p-2"
            src={product2}
            alt="Shoes"
          />
          <div className=" text-center space-y-2 mt-6">
            <div className="flex text-yellow-500 justify-center">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <h2 className="text-2xl font-bold">Car Engin Plug</h2>
            <h2 className="text-xl font-bold text-orange-500">$20.00</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl p-3">
          <img
            className="rounded  h-2/3 bg-base-200 p-2"
            src={product3}
            alt="Shoes"
          />
          <div className=" text-center space-y-2 mt-6">
            <div className="flex text-yellow-500 justify-center">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <h2 className="text-2xl font-bold">Car Engin Plug</h2>
            <h2 className="text-xl font-bold text-orange-500">$20.00</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl p-3">
          <img
            className="rounded  h-2/3 bg-base-200 p-2"
            src={product4}
            alt="Shoes"
          />
          <div className=" text-center space-y-2 mt-6">
            <div className="flex text-yellow-500 justify-center">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <h2 className="text-2xl font-bold">Car Wash</h2>
            <h2 className="text-xl font-bold text-orange-500">$30.00</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl p-3">
          <img
            className="rounded  h-2/3 bg-base-200 p-2"
            src={product5}
            alt="Shoes"
          />
          <div className=" text-center space-y-2 mt-6">
            <div className="flex text-yellow-500 justify-center">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <h2 className="text-2xl font-bold">Car Air Filter</h2>
            <h2 className="text-xl font-bold text-orange-500">$50.00</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl p-3">
          <img
            className="rounded  h-2/3 bg-base-200 p-2"
            src={product6}
            alt="Shoes"
          />
          <div className=" text-center space-y-2 mt-6">
            <div className="flex text-yellow-500 justify-center">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <h2 className="text-2xl font-bold">Cools Led Light</h2>
            <h2 className="text-xl font-bold text-orange-500">$25.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
