// import { useEffect, useState } from "react";
// import API from "../services/api";

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);
//   const [search, setSearch] = useState("");

//   const fetchEmployees = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await API.get(
//         `/employees?search=${search}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setEmployees(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteEmployee = async (id) => {
//     try {
//       const token = localStorage.getItem("token");

//       await API.delete(`/employees/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Employee Deleted");
//       fetchEmployees();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Employee List</h2>

//       <input
//         type="text"
//         placeholder="Search Employee"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <button onClick={fetchEmployees}>
//         Search
//       </button>

//       <br />
//       <br />

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Department</th>
//             <th>Designation</th>
//             <th>Joining Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp._id}>
//               <td>{emp.fullName}</td>
//               <td>{emp.email}</td>
//               <td>{emp.mobileNumber}</td>
//               <td>{emp.department}</td>
//               <td>{emp.designation}</td>
//               <td>
//                 {new Date(
//                   emp.joiningDate
//                 ).toLocaleDateString()}
//               </td>

//               <td>
//                 <button
//                   onClick={() =>
//                     deleteEmployee(emp._id)
//                   }
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeList;


import { useEffect, useState } from "react";
import API from "../services/api";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get(`/employees?search=${search}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Employee Deleted Successfully");
      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          backgroundColor: "#fff",
          padding: "25px",
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
          Employee List
        </h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={fetchEmployees}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#007bff",
                color: "white",
              }}
            >
              <th style={{ padding: "12px" }}>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Joining Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp._id}
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <td style={{ padding: "10px" }}>
                  {emp.fullName}
                </td>
                <td>{emp.email}</td>
                <td>{emp.mobileNumber}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>
                  {new Date(
                    emp.joiningDate
                  ).toLocaleDateString()}
                </td>

                <td>
                  <button
                    onClick={() =>
                      deleteEmployee(emp._id)
                    }
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;