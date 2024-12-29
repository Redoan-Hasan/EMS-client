import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
    const {logIn}= useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        logIn(email,password)
        .then((user) => {
            console.log(user);
            e.target.reset();
            if(user.user?.email === "admin@gmail.com"){
                navigate("/adminDashboard")
            }
            else{
                navigate("/employeeDashboard")
            }
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "YOU BETTER FO...",
                text: "You are not an employee",
            });
        })
    };
    return (
        <div className="max-w-screen-xl mx-auto text-center h-screen flex items-center justify-center"> 
            <div className=" mx-5 border-2 border-blue-500 p-10 rounded-lg">
                <h1 className="text-3xl font-bold">Login Now</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                            <input required name="email" type="email" placeholder="Email" className=" text-semibold text-xl outline-none bg-transparent border-emerald-300 my-8 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white placeholder:text-center" />
                            <input required name="password" type="password" placeholder="Password" className="text-semibold text-xl outline-none bg-transparent border-emerald-300 w-full p-2 border-2 text-white rounded-full placeholder:text-xl placeholder:text-semibold placeholder:text-white placeholder:text-center" />
                            <input className="my-8 bg-blue-500 text-white p-2 rounded-full w-1/2 text-xl font-semibold" type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;