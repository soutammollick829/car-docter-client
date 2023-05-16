import { FaFacebook, FaGoogle, FaInvision } from "react-icons/fa";
import loginSvg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {createUser} = useContext(AuthContext);

  const handelSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name,email,password)
    createUser(email,password)
    .then(res =>{
      const user = res.user;
      console.log(user);
      form.reset('')

      if(user.email){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
      }
    })
    .then(error =>{
      console.error(error);
    })
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginSvg} alt="loginImg" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelSignUp} className="card-body">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error">Sign up</button>
            </div>
          </form>
          <h4 className="text-center font-bold">Or Sign up with</h4>
          <div className="flex mx-auto gap-5 mt-4">
            <FaFacebook className="text-4xl text-blue-500" />
            <FaInvision className="text-4xl text-blue-500 rounded-full" />
            <FaGoogle className="text-4xl text-blue-500" />
          </div>
          <p className="text-center mt-3 mb-5">
            Already have an account?
            <Link to="/login">
              <span className="font-bold text-error"> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
