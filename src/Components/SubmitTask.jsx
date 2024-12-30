import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const SubmitTask = () => {
  const [submittedTask, setSubmittedTask] = useState([]);
  console.log(submittedTask);
  const navigate = useNavigate();
  const { id } = useParams();
  const newId = id.toString();
  console.log(newId);
  useEffect(() => {
    axios
      .get(`https://ems-server-eight.vercel.app/addTask/${newId}`)
      .then((res) => {
        console.log(res.data);
        setSubmittedTask(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskSubmitLink = e.target.taskSubmitLink.value;
    // eslint-disable-next-line no-unused-vars
    const { _id, ...taskWithOutId } = submittedTask;
    const completedTask = { ...taskWithOutId, taskSubmitLink };
    console.log(completedTask);
    axios
      .post("https://ems-server-eight.vercel.app/completedTask", completedTask)
      .then((res) => {
        console.log(res.data);
        axios
          .delete(`https://ems-server-eight.vercel.app/addTask/${newId}`)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              icon: "success",
              title: "Task Submitted",
              text: "Task Submitted Successfully",
            });
            navigate("/employeeDashboard");
            window.location.reload();
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-700 via-emerald-500 to-purple-400 text-transparent bg-clip-text animate-gradient mx-auto my-14 w-fit">
          Submit Your Task
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="card bg-pink-200 text-black  rounded-lg w-[400px]">
          <div className="card-body p-5">
            <div className="flex justify-between items-center pb-3">
              <h1 className="text-lg font-semibold bg-red-500 text-white p-2 rounded-lg">
                {submittedTask.priority}
              </h1>
              <h1 className="text-lg font-semibold bg-green-300 p-2 rounded-lg">
                {submittedTask.date}
              </h1>
            </div>
            <h2 className="card-title text-2xl font-bold">
              {submittedTask.taskTitle}
            </h2>
            <p className="text-base font-semibold text-blue-600">
              {submittedTask.category}
            </p>
            <p className="text-xl font-medium py-2">
              {submittedTask.description}
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  required
                  type="url"
                  name="taskSubmitLink"
                  className="w-full bg-emerald-200 rounded-lg p-2 placeholder:text-base placeholder:font-bold placeholder:text-black"
                  placeholder="Submit your task link"
                />
              </div>
              <div className="card-actions justify-center">
                <input
                  type="submit"
                  value="Submit"
                  className=" relative mt-4 px-5 py-3 overflow-hidden text-black text-lg font-semibold bg-orange-300 border border-gray-100 rounded-lg shadow-inner cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitTask;
