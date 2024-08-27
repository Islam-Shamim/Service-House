import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

  const {createUser} = useContext(AuthContext)

  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {name,email,password};
    console.log(user);

    //sign up authentication
    createUser(email,password)
    .then(result => {
      console.log(result.user)
      if(result.user){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User added successfully.",
          showConfirmButton: true,
          timer: 3000
        });
        form.reset();
      }
    })
    .catch(error => console.error(error))
    
  }

  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-1/2 ml-12">
        <img src={login} alt="" />
      </div>
      <div className="w-1/2">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold mx-auto mt-4">Sign Up now!</h1>
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="ml-8 pb-4 text-blue-600">Already have an account. Please{" "}
            <Link to="/signIn" className="text-red-600">
              login
            </Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
