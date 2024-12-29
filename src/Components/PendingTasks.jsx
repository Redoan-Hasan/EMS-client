import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/Context";

    const PendingTasks = () => {
        const {user}= useContext(AuthContext);
        const [penTask, setPenTask] = useState([]);
        console.log(penTask);
        useEffect(() => {
            axios.get(`http://localhost:5000/addTask?email=${user.email}`)
            .then(res => {
                console.log(res.data);
                setPenTask(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    return (
        <div className="px-5">
        <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-700 via-emerald-500 to-purple-400 text-transparent bg-clip-text animate-gradient mx-auto my-14 w-fit">
            Pending Tasks
            </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {
                penTask?.map((task, idx) => {
                    return ( <div key={idx} className="card bg-purple-400 text-black  rounded-lg">
                        <div className="card-body p-5">
                            <div className="flex justify-between items-center pb-3">
                                <h1 className="text-lg font-semibold bg-red-500 text-white p-2 rounded-lg">{task.priority}</h1>
                                <h1 className="text-lg font-semibold bg-green-300 p-2 rounded-lg">{task.date}</h1>
                            </div>
                            <h2 className="card-title text-2xl font-bold">{task.taskTitle}</h2>
                            <p className="text-base font-semibold text-blue-600">{task.category}</p>
                            <p className="text-xl font-medium py-2">{task.description}</p>
                            <div className="card-actions justify-center">
                            <Link to={`submitTask/${task._id}`} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="font-lg font-bold relative transition-colors duration-300 delay-200 group-hover:text-white ease">Wanna Submit?</span>
                            </Link>
                                
                            </div>
                        </div>
                        </div>)
                })
            }
        </div>
        </div>
    );
    };

    export default PendingTasks;
