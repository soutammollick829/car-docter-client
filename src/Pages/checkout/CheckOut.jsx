import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import checkOutImg from "../../assets/images/checkout/checkout.png";
const CheckOut = () => {
  const service = useLoaderData();
  const { _id, price } = service;
  const { user } = useContext(AuthContext);

  const handelCheckOut = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const bio = form.bio.value;
    const order = {
      customerName: name,
      date,
      email,
      bio,
      service: _id,
      price: price,
    };
    form.reset("");
    console.log(order);
  };
  return (
    <div>
      <div className="relative">
        <img src={checkOutImg} alt="" />
        <h3 className="absolute top-28 left-16 text-4xl font-bold text-white ">
          Check Out
        </h3>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900 absolute bottom-3 left-80">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
            <span className="relative text-white">Home/Checkout</span>
          </span>
        </blockquote>
      </div>
      <form onSubmit={handelCheckOut} className="bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-24 mt-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6 mx-24 mb-20">
          <textarea
            placeholder="Your text"
            name="bio"
            className="textarea textarea-bordered textarea-lg w-full mb-6"
          ></textarea>
          <input
            className="btn btn-block mb-10 bg-red-400 border-0 hover:bg-red-500"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
