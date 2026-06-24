// import { Link } from "react-router-dom";

// function Dashboard() {
//   const token = localStorage.getItem("token");

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Employee Dashboard</h1>

//       <p>Login Successful ✅</p>
//       <p>Token Available: {token ? "Yes" : "No"}</p>

//       <br />

//       <Link to="/add-employee">
//         <button
//           style={{
//             padding: "10px 20px",
//             background: "#007bff",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//             marginRight: "10px",
//           }}
//         >
//           Add Employee
//         </button>
//       </Link>

//       <Link to="/employees">
//         <button
//           style={{
//             padding: "10px 20px",
//             background: "green",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           View Employees
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default Dashboard;

import { Link } from "react-router-dom";

function Dashboard() {
  const token = localStorage.getItem("token");

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
          width: "600px",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#333",
            marginBottom: "15px",
          }}
        >
          Employee Dashboard
        </h1>

        <p
          style={{
            color: "green",
            fontWeight: "bold",
          }}
        >
          Login Successful ✅
        </p>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Token Available: {token ? "Yes" : "No"}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link to="/add-employee">
            <button
              style={{
                padding: "12px 25px",
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
          </Link>

          <Link to="/employees">
            <button
              style={{
                padding: "12px 25px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              View Employees
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;