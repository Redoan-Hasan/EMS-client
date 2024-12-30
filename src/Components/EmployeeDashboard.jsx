import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/Context";
import axios from "axios";

const EmployeeDashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [tabIdx, setTabIdx] = useState(0);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.endsWith("completedTask")) {
      setTabIdx(1);
    } else {
      setTabIdx(0);
    }
  }, [location.pathname]);

  useEffect(() => {
    axios
      .get(`https://ems-server-eight.vercel.app/addTask?email=${user.email}`)
      .then((res) => {
        console.log(res.data);
        setPendingTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.email]);

  useEffect(() => {
    axios
      .get(
        `https://ems-server-eight.vercel.app/completedTask?email=${user.email}`
      )
      .then((res) => {
        console.log(res.data);
        setCompletedTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, [user.email]);

  return (
    <div className="max-w-screen-xl mx-auto my-5 px-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Hello <br />{" "}
          <span className="text-4xl font-extrabold">
            {user?.email.slice(0, user?.email.indexOf("@")).toUpperCase()}{" "}
            &#128075;
          </span>
        </h1>
        <button
          onClick={() => {
            logOut();
            navigate("/");
          }}
          className="btn btn-error text-white text-xl font-semibold rounded-lg"
        >
          Logout
        </button>
      </div>
      <div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient mx-auto my-14 w-fit">
          Employee Dashboard
        </h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row  justify-around items-center gap-3 my-10">
        <div className="bg-sky-400 w-[300px]  text-white p-5 rounded-lg flex flex-col justify-between items-center">
          <h1 className="text-3xl font-bold">Pending Tasks : </h1>
          <h1 className="text-5xl text-white font-extrabold">
            {pendingTasks?.length}
          </h1>
        </div>
        <div className="bg-yellow-400 w-[300px]  text-white p-5 rounded-lg flex flex-col justify-between items-center">
          <h1 className="text-3xl font-bold">Completed Tasks : </h1>
          <h1 className="text-5xl text-white font-extrabold">
            {completedTasks?.length}
          </h1>
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center justify-center text-center  flex-nowrap w-full">
          <Link
            to=" "
            onClick={() => setTabIdx(0)}
            rel="noopener noreferrer"
            className={`px-5 py-3   w-full ${
              tabIdx === 0 ? "border-4 border-b-0 rounded-t-lg" : "border-b-4"
            }`}
          >
            <span className="text-xl font-semibold">Pending Tasks</span>
          </Link>
          <Link
            to="completedTask"
            onClick={() => setTabIdx(1)}
            rel="noopener noreferrer"
            className={`px-5 py-3  w-full ${
              tabIdx === 1 ? "border-4 border-b-0 rounded-t-lg" : "border-b-4"
            }`}
          >
            <span className="text-xl font-semibold">Completed Tasks</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default EmployeeDashboard;
