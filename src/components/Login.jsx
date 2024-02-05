import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

const handleLogin = (e) => {
  e.preventDefault();
  const loggeduser = JSON.parse(localStorage.getItem("user"));
  if (loggeduser && input.email === loggeduser.email && input.password === loggeduser.password) {
    navigate("/");
  } else {
    alert("wrong email or password");
  }
};
  return (
    <>
      <div className="container mt-2">
        <div className="card p-4 mx-auto" style={{ width: "500px" }}>
          <h2>Login </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
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
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                name="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
