import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch("https://car-doctor-server-eight-indol.vercel.app/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

  return (
    <div className="my-8">
      <div className="text-center space-y-4">
        <h2 className="text-orange-600 text-2xl font-bold">Our Services</h2>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          fuga commodi natus modi in sint, fugiat <br /> impedit debitis harum magnam,
          minima repudiandae.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 my-8">
        {
            services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
      <div className="text-center mb-8">
      <button className="btn btn-outline btn-secondary text-xl">More Services</button>
      </div>
    </div>
  );
};

export default Services;
