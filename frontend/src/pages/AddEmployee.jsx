// import { useState } from "react";
// import API from "../services/api";

// function AddEmployee() {
//   const [employee, setEmployee] = useState({
//     fullName: "",
//     email: "",
//     mobileNumber: "",
//     department: "",
//     designation: "",
//     joiningDate: "",
//   });

//   const handleChange = (e) => {
//     setEmployee({
//       ...employee,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//       const res = await API.post("/employees", employee, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Employee Added Successfully");

//       console.log(res.data);

//       setEmployee({
//         fullName: "",
//         email: "",
//         mobileNumber: "",
//         department: "",
//         designation: "",
//         joiningDate: "",
//       });
//     } catch (error) {
//       console.log(error);
//       alert("Failed to Add Employee");
//     }
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Add Employee</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={employee.fullName}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={employee.email}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <input
//           type="text"
//           name="mobileNumber"
//           placeholder="Mobile Number"
//           value={employee.mobileNumber}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <input
//           type="text"
//           name="department"
//           placeholder="Department"
//           value={employee.department}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <input
//           type="text"
//           name="designation"
//           placeholder="Designation"
//           value={employee.designation}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <input
//           type="date"
//           name="joiningDate"
//           value={employee.joiningDate}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <button type="submit">Add Employee</button>
//       </form>
//     </div>
//   );
// }

// export default AddEmployee;


import { useState } from "react";
import API from "../services/api";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    department: "",
    designation: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post("/employees", employee, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Employee Added Successfully ✅");

      setEmployee({
        fullName: "",
        email: "",
        mobileNumber: "",
        department: "",
        designation: "",
        joiningDate: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to Add Employee");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Add Employee
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={employee.fullName}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={employee.mobileNumber}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={employee.department}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={employee.designation}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="date"
            name="joiningDate"
            value={employee.joiningDate}
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

export default AddEmployee;