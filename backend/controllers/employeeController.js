import Employee from "../models/Employee.js";

// Add Employee
export const addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({
      message: "Employee Added Successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Employees
export const getEmployees = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          fullName: {
            $regex: req.query.search,
            $options: "i",
          },
        }
      : {};

    const employees = await Employee.find(keyword);

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Employee
export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Employee Updated",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Employee
export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Employee Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};