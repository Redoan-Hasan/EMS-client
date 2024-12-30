import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  console.log(employees);
  useEffect(() => {
    axios.get("https://ems-server-eight.vercel.app/addEmployee").then((res) => {
      console.log(res.data);
      setEmployees(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://ems-server-eight.vercel.app/allPendingTasks")
      .then((res) => {
        console.log(res.data);
        setPendingTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://ems-server-eight.vercel.app/allCompletedTask")
      .then((res) => {
        console.log(res.data);
        setCompletedTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-3">
      <div className="overflow-x-auto my-10 border-blue-500 border-2 w-fit">
        <h1 className="text-xl font-bold text-center text-white">
          Employee List
        </h1>
        <table className="table w-fit ">
          {/* head */}
          <thead>
            <tr className="border-b-2 border-blue-500 text-sm font-semibold  ">
              <th>Sequence</th>
              <th>Employee Name</th>
              <th>Employee Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {employees.map((employee, idx) => {
              return (
                <tr key={idx} className="">
                  <td className="text-base font-semibold">{idx + 1}.</td>
                  <td className="">
                    <div className="flex items-center gap-3 text-base font-semibold">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={employee.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">{employee.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-base font-semibold ">
                    {employee.email}
                    <br />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto my-10 border-blue-500 border-2 w-fit">
        <h1 className="text-xl font-bold text-center text-white">
          Pending Task List : {pendingTasks?.length}
        </h1>
        <table className="table w-fit ">
          {/* head */}
          <thead>
            <tr className="border-b-2 border-blue-500 text-sm font-semibold  ">
              <th>Sequence</th>
              <th>Pending Tasks</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {pendingTasks?.map((task, idx) => {
              return (
                <tr key={idx} className="">
                  <td className="text-base font-semibold">{idx + 1}.</td>
                  <td className="text-base font-semibold ">
                    {task.taskTitle}
                    <br />
                  </td>
                  <td>
                    {task?.email
                      .slice(0, task?.email.indexOf("@"))
                      .toUpperCase()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto my-10 border-blue-500 border-2 w-fit">
        <h1 className="text-xl font-bold text-center text-white">
          Completed Task List : {completedTasks?.length}
        </h1>
        <table className="table w-fit ">
          {/* head */}
          <thead>
            <tr className="border-b-2 border-blue-500 text-sm font-semibold  ">
              <th>Sequence</th>
              <th>Completed Tasks</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {completedTasks?.map((task, idx) => {
              return (
                <tr key={idx} className="">
                  <td className="text-base font-semibold">{idx + 1}.</td>
                  <td className="text-base font-semibold ">
                    {task.taskTitle}
                    <br />
                  </td>
                  <td>
                    {task?.email
                      .slice(0, task?.email.indexOf("@"))
                      .toUpperCase()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
