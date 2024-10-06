import { useLoaderData } from "react-router-dom";
import checkout from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
  const { title, price,img } = useLoaderData();
  const {user} = useContext(AuthContext);

  const handleBookService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email= form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    const order = {name,email,date,price,title,img};
    console.log(order);

    fetch("https://car-doctor-server-eight-indol.vercel.app/booking",{
        method:'POST',
        body:JSON.stringify(order),
        headers:{
          'content-type' : 'application/json'
        }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.acknowledged){
        alert("Service Added.")
      }
    })
  }
  return (
    <div className="my-8">
      <div className="carousel-item relative w-full mx-20">
        <img src={checkout}/>
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)] rounded">
          <div className="text-white space-y-4 mt-8 p-8">
            <h2 className="text-3xl font-bold">
              Add New Service
            </h2>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center mt-8">Service Name : {title}</h2>
      <form className="card-body bg-base-200 m-20 rounded" onSubmit={handleBookService}>
        {/* User name & price */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              placeholder="Enter Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2 ml-4">
            <input
              type="text"
              name="price"
              defaultValue={'$'+price}
              placeholder="Service Price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* email & date */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2 ml-4">
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        
        {/* button */}
        <input
          type='submit'
          value="Submit"
          className="btn btn-success mt-4 text-xl"
        />
      </form>
    </div>
  );
};

export default CheckOut;
