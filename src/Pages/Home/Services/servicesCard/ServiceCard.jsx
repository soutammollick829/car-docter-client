/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, price, img } = service;

  return (
    <div className="card lg:w-72 bg-base-100 shadow-xl border mx-5 lg:mx-0">
      <figure className="px-5 pt-5">
        <img src={img} alt="img" className="rounded-xl h-40 w-full" />
      </figure>
      <div className="text-left px-5 space-y-5">
        <h2 className="text-2xl font-bold mt-5">{title}</h2>
        <div className="flex items-center">
          <p className="text-xl text-error font-bold flex-1 mb-5">
            Price: ${price}
          </p>
          <Link to={`/checkout/${_id}`}>
            <button className="mb-5">
              <FaArrowRight className="text-error" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
