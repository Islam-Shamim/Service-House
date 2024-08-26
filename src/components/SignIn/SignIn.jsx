import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-1/2 ml-12">
        <img src={login} alt="" />
      </div>
      <div className="w-1/2">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold mx-auto mt-4">Sign In now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Log In</button>
            </div>
          </form>
          <p className="ml-8 pb-4 text-blue-600">If you are new. Please{" "}
            <Link to="/signUp" className="text-red-600">
            register
            </Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
