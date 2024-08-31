import PropTypes from "prop-types";
import { BiCheck} from "react-icons/bi";

const Booking = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, price, date, title, status } = booking;

  return (
    <tr className="text-xl">
      <th>
        <div>
          {
          status === "Pending" ?
          <BiCheck className="text-2xl font-bold"/>
           : 
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-circle"
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              
            </button>
          }
        </div>
      </th>
      <td>
        <div className="font-bold">{title}</div>
      </td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        {status === "Pending" ? (
          <span className="text-green-600 font-bold">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-error"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

Booking.propTypes = {
  booking: PropTypes.object,
  handleDelete: PropTypes.object,
  handleBookingConfirm: PropTypes.object,
};

export default Booking;
