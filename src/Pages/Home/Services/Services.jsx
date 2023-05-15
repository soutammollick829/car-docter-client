import { useEffect, useState } from "react";
import ServiceCard from "./servicesCard/ServiceCard";
import { FaBusinessTime, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Services = () => {
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className=" mt-32">
      <div className="text-center">
        <h4 className="text-xl font-bold text-error mb-5">Service</h4>
        <h1 className="text-4xl font-bold mb-5">Our Service Area</h1>
        <p className="mb-12">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which do not look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-error mt-16 mb-36">
          More Services
        </button>
      </div>
      <div className="lg:flex justify-around items-center mx-5 lg:mx-0 rounded-xl gap-10 h-80 lg:h-[200px] bg-black text-white">
        <div className="text-center">
          <FaBusinessTime className="ml-20 text-4xl text-error"/>
          <p>We are open monday-friday</p>
          <h3 className="text-xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
        <div className="text-center">
            <FaPhoneAlt className="ml-20 text-4xl text-error"/>
            <p>Have a question?</p>
            <h3 className="text-xl font-bold">+2546 251 2658</h3>
        </div>
        <div className="text-center">
            <FaMapMarkerAlt className="ml-20 text-4xl text-error"/>
            <p>Need a repair? our address</p>
            <h3 className="text-xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
