import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Booking from "./Booking";
import Swal from "sweetalert2";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);
  console.log(myServices);

  const url = `https://car-doctor-server-eight-indol.vercel.app/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyServices(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://car-doctor-server-eight-indol.vercel.app/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = myServices.filter(
                (booking) => booking._id !== id
              );
              setMyServices(remaining);
            }
          });
        }
      });
  };

  const handleBookingConfirm = id =>{
    fetch(`https://car-doctor-server-eight-indol.vercel.app/booking/${id}`, {
      method: "PUT",
      body:JSON.stringify({status : 'Pending'}),
      headers:{
        "content-type" : 'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        const remaining = myServices.filter(booking=>booking._id!==id);
        const updated = myServices.find(booking=>booking._id===id);
        updated.status = 'Pending';
        const newServices = [updated,...remaining];
        setMyServices(newServices);
      }
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="text-2xl font-bold bg-orange-200 text-red-500">
          <tr>
            <th>
              <button type="submit" className="btn">
                Button
              </button>
            </th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {myServices.map((booking) => (
            <Booking
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingConfirm = {handleBookingConfirm}
            ></Booking>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyServices;
