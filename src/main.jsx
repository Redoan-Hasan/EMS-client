import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Context from "./Context/Context.jsx";
import Login from "./Components/Login.jsx";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import EmployeeList from "./Components/EmployeeList.jsx";
import CreateTask from "./Components/CreateTask.jsx";
import CreateEmployee from "./Components/CreateEmployee.jsx";
import EmployeeDashboard from "./Components/EmployeeDashboard.jsx";
import PendingTasks from "./Components/PendingTasks.jsx";
import CompletedTasks from "./Components/CompletedTasks.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import SubmitTask from "./Components/SubmitTask.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/employeeDashboard"
            element={
              <PrivateRoute>
                <EmployeeDashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<PendingTasks />} />
            <Route path="submitTask/:id" element={<SubmitTask />} />
            <Route path="completedTask" element={<CompletedTasks />} />
          </Route>
          <Route
            path="/adminDashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<EmployeeList />} />
            <Route path="createTask" element={<CreateTask />} />
            <Route path="createEmployee" element={<CreateEmployee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  </StrictMode>
);
