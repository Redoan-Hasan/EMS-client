import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
import axios from "axios";


const CreateEmployee = () => {
    const {register,updatePhoto}=useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;    
        const photoUrl = e.target.photoUrl.value;
        console.log(name,email,password,photoUrl);
        const newEmployee = {name,email,password,photoUrl};
        register(email,password,photoUrl)
        .then((user) => {
            console.log(user);
            e.target.reset();
            updatePhoto(name,photoUrl)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Employee Created",
                    text: "Employee Created Successfully",
                });
                axios.post("http://localhost:5000/addEmployee", newEmployee)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
            })
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: error.message,
            });
        })
    }
    return (
        <div className="max-w-screen-xl mx-auto text-center  my-10 flex items-center  justify-center"> 
            <div className=" mx-5 border-2 border-blue-500 p-10 rounded-lg">
                <h1 className="text-3xl font-bold">Create New Employee</h1>
                <div>
                    <form  onSubmit={handleSubmit}>
                            <input required name="name" type="text" placeholder="Enter your name" className=" text-semibold text-xl outline-none bg-transparent border-emerald-300 my-8 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white placeholder:text-center" />
                            <input required name="email" type="email" placeholder="Email" className=" text-semibold text-xl outline-none bg-transparent border-emerald-300 mb-8 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white placeholder:text-center" />
                            <input required name="password" type="password" placeholder="Password" className="text-semibold text-xl outline-none bg-transparent border-emerald-300 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white placeholder:text-center" />
                            <input required name="photoUrl" type="url" placeholder="Enter Photo Url" className="my-8 text-semibold text-xl outline-none bg-transparent border-emerald-300 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white placeholder:text-center" />
                            <input className="my-8 bg-blue-500 text-white p-2 rounded-full w-1/2 text-xl font-semibold" type="submit" value="Create Employee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployee;