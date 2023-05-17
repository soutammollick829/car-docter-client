import { FaFacebook, FaGoogle, FaInvision } from "react-icons/fa";
import loginSvg from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn,handelSignGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
 
      if (password.length < 6) {
        Swal.fire({
          title: 'Invalid Password',
          text: 'The password must be at least 6 characters long.',
          icon: 'error',
        });
        return false; 
      }

    console.log( email, password);
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset("");
        if(user.email !== password){
          Swal.fire({
            title: 'Login Successful',
            text: 'You have successfully logged in.',
            icon: 'success',
          });
          navigate(from, { replace: true });
        } else {
          Swal.fire({
            title: 'Login Failed',
            text: 'Invalid username or password.',
            icon: 'error',
          });
          return false; 
        }
      })
      .then((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginSvg} alt="loginImg" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
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
              <button className="btn btn-error">Login</button>
            </div>
          </form>
          <h4 className="text-center font-bold">Or LogIn with</h4>
          <div className="flex mx-auto gap-5 mt-4">
            <FaFacebook className="text-4xl text-blue-500" />
            <FaInvision className="text-4xl text-blue-500 rounded-full" />
            <FaGoogle onClick={handelSignGoogle} className="text-4xl text-blue-500" />
          </div>
          <p className="text-center mt-3 mb-5">
            Have an account?
            <Link to="/signUp">
              <span className="font-bold text-error"> Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
