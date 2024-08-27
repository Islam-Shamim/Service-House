import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;

  return (
    <div className="card bg-base-100 sm:w-full md:w-96 shadow-xl p-3">
      <img className="rounded h-2/3" src={img} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <div className="card-actions justify-between items-center">
          <h2 className="text-xl font-bold text-orange-500">${price}</h2>
          <button className="btn btn-circle">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object,
};
