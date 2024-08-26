import { BsFacebook } from "react-icons/bs";
import person1 from "../../assets/images/team/1.jpg";
import person2 from "../../assets/images/team/2.jpg";
import person3 from "../../assets/images/team/3.jpg";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Team = () => {
  return (
    <div className="my-8">
      <div className="text-center space-y-4">
        <h2 className="text-orange-600 text-2xl font-bold">Team</h2>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          fuga commodi natus modi in sint, fugiat <br /> impedit debitis harum
          magnam, minima repudiandae.
        </p>
      </div>
      <div className="grid md:grid-cols-3 mb-8">
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl p-3">
          <img
            className="rounded  h-2/3 bg-base-200 p-2"
            src={person1}
            alt="Shoes"
          />
          <div className=" text-center space-y-2 mt-6">
            <h2 className="text-2xl font-bold">Car Engin Plug</h2>
            <h2 className="font-bold">Engine Expert</h2>
            <div className="flex justify-center text-xl">
              <BsFacebook className="text-blue-700 mr-1"/>
              <AiFillTwitterCircle className="text-blue-300 mr-1"/>
              <FaLinkedin className="text-blue-500 mr-1"/>
              <RiInstagramFill className="text-red-500 mr-1"/>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl p-3">
          <img
            className="rounded  h-2/3 bg-base-200 p-2"
            src={person2}
            alt="Shoes"
          />
          <div className=" text-center space-y-2 mt-6">
            <h2 className="text-2xl font-bold">Car Engin Plug</h2>
            <h2 className="font-bold">Technical Expert</h2>
            <div className="flex justify-center text-xl">
              <BsFacebook className="text-blue-700 mr-1"/>
              <AiFillTwitterCircle className="text-blue-300 mr-1"/>
              <FaLinkedin className="text-blue-500 mr-1"/>
              <RiInstagramFill className="text-red-500 mr-1"/>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl p-3">
          <img
            className="rounded  h-2/3 bg-base-200 p-2"
            src={person3}
            alt="Shoes"
          />
          <div className=" text-center space-y-2 mt-6">
            <h2 className="text-2xl font-bold">Car Engin Plug</h2>
            <h2 className="font-bold">Car Expert</h2>
            <div className="flex justify-center text-xl">
              <BsFacebook className="text-blue-700 mr-1"/>
              <AiFillTwitterCircle className="text-blue-300 mr-1"/>
              <FaLinkedin className="text-blue-500 mr-1"/>
              <RiInstagramFill className="text-red-500 mr-1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
