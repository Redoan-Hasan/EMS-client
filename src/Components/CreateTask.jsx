import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

    const CreateTask = () => {
    const [tasks, setTasks] = useState([]);
    console.log(tasks);
    const handleSubmit = (e) => {
        e.preventDefault();
        const taskTitle = e.target.taskTitle.value; 
        const email = e.target.email.value;
        const date = e.target.date.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const priority = e.target.priority.value;
        console.log(taskTitle,email,date,category,description,priority);
        const newTask = { taskTitle, email, date, category, description, priority };
        axios.post("http://localhost:5000/addTask", newTask)
        .then((res) => {
            console.log(res.data);
            setTasks(res.data);
            e.target.reset();
            Swal.fire({
                icon: "success",
                title: "Task Created",
                text: "Task Created Successfully",
            });
        })
        .catch((err) => {
            console.log(err);    
        });
    };
    return (
        <div>
            <div className="border-2 border-blue-400 p-10 my-10 rounded-lg">
                <h1 className="text-5xl font-extrabold text-center my-5">Create Task</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-9">
                    <div className="w-full md:w-2/4lg:w-2/4">
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">
                            Task Title
                            </span>
                        </label>
                        <input
                            name="taskTitle"
                            type="text"
                            placeholder="Enter task title"
                            className=" text-semibold text-lg outline-none bg-transparent border-emerald-300 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white "
                            required
                        />
                        </div>
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Assign To</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter the employee email"
                            className=" text-semibold text-lg outline-none bg-transparent border-emerald-300 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white"
                            required
                        />
                        </div>
                    </div>
                    <div className="w-full md:w-2/4lg:w-2/4">
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">
                            Date
                            </span>
                        </label>
                        <input
                            name="date"
                            type="date"
                            placeholder="Enter the date"
                            className=" text-semibold text-lg outline-none bg-transparent border-emerald-300 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white "
                            required
                        />
                        </div>
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Task Category</span>
                        </label>
                        <input
                            name="category"
                            type="text"
                            placeholder="Design, Development etc."
                            className=" text-semibold text-lg outline-none bg-transparent border-emerald-300 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white "
                            required
                        />
                        </div>
                    </div>
                    </div>
                    <div className="form-control py-2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">
                        Priority
                        </span>
                    </label>
                    <div className="text-lg font-semibold flex justify-start items-center gap-3">
                        <input
                        type="radio"
                        name="priority"
                        id=""
                        value="High"
                        required
                        />
                        <span>High</span>
                        <input
                        type="radio"
                        name="priority"
                        id=""
                        value="low"
                        required
                        />
                        <span>Low</span>
                    </div>
                    </div>
                    <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Description</span>
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter the Description"
                            className=" text-semibold text-lg outline-none bg-transparent border-emerald-300 w-full p-2 border-2 text-white rounded-lg placeholder:text-xl placeholder:text-semibold placeholder:text-white "
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                    <input
                        className="my-8 bg-blue-500 text-white text-center p-2 rounded-full w-1/2 text-xl font-semibold"
                        type="submit"
                        value="Add Task"
                    />
                    </div>
                </form>
            </div>
        </div>
    );
    };

    export default CreateTask;
