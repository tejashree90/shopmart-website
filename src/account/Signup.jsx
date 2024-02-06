import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input,setInput] = useState({
    username: "",
    email: "",
    password: "",
  });


  const handleSubmit=(e) =>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/Login");
  }
  return (
    <>
      <div className="container mt-2">
        <div className="card p-4 mx-auto" style={{ width: "500px" }}>
          <h2>Signup </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                UserName
              </label>
              <input
                type="username"
                className="form-control"
                id="username"
                value={input.username}
                onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}
                name="username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={input.email}
                onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={input.password}
                onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}
                name="password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            <p className="text-center" mt-5 mb-0>
              Have already an account?
              <Link to="/Login" classNmae="fw-bold text-body">
                <u>Login Here</u>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
