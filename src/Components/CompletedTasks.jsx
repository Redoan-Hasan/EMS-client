import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";


const CompletedTasks = () => {
    const {user}= useContext(AuthContext);
    const [completedTasks, setCompletedTasks] = useState([]);
    console.log(completedTasks);
    useEffect(() => {
        axios.get(`http://localhost:5000/completedTask?email=${user.email}`)
        .then(res => {
            console.log(res.data);
            setCompletedTasks(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-700 via-emerald-500 to-purple-400 text-transparent bg-clip-text animate-gradient mx-auto my-14 w-fit">
                Completed Tasks
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {
                completedTasks?.map((task, idx) => {
                    return ( <div key={idx} className="card bg-blue-400 text-black  rounded-lg">
                        <div className="card-body p-5">
                            <h2 className="card-title text-2xl font-bold flex"> {task.taskTitle}</h2>
                            <p className="text-lg font-semibold text-black"><span className="text-red-600">Task Category :</span> {task.category}</p>
                            <p className="text-lg font-semibold text-black"><span className="text-red-600">Task Priority :</span> {task.priority}</p>
                            <p className="text-lg font-semibold text-black"><span className="text-red-600">Task Date :</span> {task.date}</p>
                            <p className="text-lg font-medium "><span className="text-red-600">Task Description :</span> : {task.description}</p>
                            <div className="card-actions justify-center">
                            </div>
                        </div>
                        </div>)
                })
            }
        </div>
        </div>
    );
};

export default CompletedTasks;