
import ReactStars from "react-rating-stars-component";
import { FaRegStar, FaStar } from "react-icons/fa";


const ProductCard = ({ product }) => {
  const { parts_Img, price, rating, title } = product;
  return (
    <div className="card lg:w-72 border mx-5 lg:mx-0">
      <figure>
        <img
          className="lg:h-[200px] w-full p-5 bg-slate-100"
          src={parts_Img}
          alt="car!"
        />
      </figure>
      <div className=" text-center mb-10 space-y-3">
        <div className="w-32 mx-auto mt-5">
        <ReactStars
          count={rating}
          readonly
          size={24}
          isHalf={true}
          emptyIcon={<FaStar/>}
          halfIcon={<FaRegStar/>}
          fullIcon={<FaStar/>}
          activeColor="#FF912C"
        />
        </div>
        <h2 className="text-2xl font-bold mt-0">{title}</h2>
        <p className="text-xl font-semibold text-error">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
