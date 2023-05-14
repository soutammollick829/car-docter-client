import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({ service }) => {
  const { title, price, img } = service;
  return (
    <div className="card lg:w-72 bg-base-100 shadow-xl border">
      <figure className="px-5 pt-5">
        <img src={img} alt="img" className="rounded-xl h-40" />
      </figure>
      <div className="text-left px-5 space-y-5">
        <h2 className="text-2xl font-bold mt-5">{title}</h2>
        <div className="flex items-center">
          <p className="text-xl text-error font-bold flex-1 mb-5">Price: ${price}</p>
          <button className="mb-5">
            <FaArrowRight className="text-error"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
