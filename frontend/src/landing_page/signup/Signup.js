
// import React, { useState } from "react";
// import axios from "axios";
 

// function Signup() {
 

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3002/signup",
//         formData,
//         { withCredentials: true }
//       );

//         if (response.data.success) {
//         window.location.href = "http://localhost:3000";
//         }  else {
//         setMessage(response.data.message || "Signup failed");
//       }
//     } catch (error) {
//       setMessage(
//         error.response?.data?.message || "Signup failed"
//       );
//     }
//   };

//   return (
//     <div className="row mt-3">
//       <h1 className="col-6 offset-3">Sign-up Zerodha</h1>

//       <div className="col-6 offset-3">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">
//               Username
//             </label>
//             <input
//               id="username"
//               name="username"
//               className="form-control"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               className="form-control"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               name="password"
//               className="form-control"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>

//           {message && <p className="mt-3">{message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;












import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://stock-trading-oe4b.onrender.com/signup",
        formData,
        { withCredentials: true }
      );

      if (response.data.success) {
        // Redirect to deployed Dashboard
        window.location.href =
          "YOUR_DASHBOARD_RENDER_URL";
      } else {
        setMessage(response.data.message || "Signup failed");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div className="row mt-3">
      <h1 className="col-6 offset-3">Sign-up Zerodha</h1>

      <div className="col-6 offset-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>

          {message && <p className="mt-3">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
