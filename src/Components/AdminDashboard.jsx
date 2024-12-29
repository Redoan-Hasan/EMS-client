import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { AuthContext } from "../Context/Context";

    const AdminDashboard = () => {
        const {logOut}= useContext(AuthContext);
        const location = useLocation();
        const [tabIdx, setTabIdx] = useState(0);

        useEffect(() => {
            if (location.pathname.endsWith("createEmployee")) {
                setTabIdx(1);
            } else if (location.pathname.endsWith("createTask")) {
                setTabIdx(2);
            } else {
                setTabIdx(0); // Default to Employee List
            }
        }, [location.pathname]);

    return (
        <div className="max-w-screen-xl mx-auto my-5 px-5">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Hello Admin &#128075;</h1>
            <Link to="/" onClick={() => logOut()} className="btn btn-error text-white text-xl font-semibold rounded-lg">
            Logout
            </Link>
        </div>
        <div><h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient mx-auto my-14 w-fit">Admin Dashboard</h1></div>
        <div className="my-5">
            <div className="flex items-center justify-center text-center  flex-nowrap w-full">
                <Link to="" onClick={() => setTabIdx(0)} rel="noopener noreferrer" href="#" className={`px-5 py-3   w-full ${tabIdx === 0 ? 'border-4 border-b-0 rounded-t-lg' : 'border-b-4'}`}>
                    <span className="text-xl font-semibold">Employee List</span>
                </Link>
                <Link to="createEmployee" onClick={() => setTabIdx(1)} rel="noopener noreferrer" href="#" className={`px-5 py-3  w-full ${tabIdx === 1 ? 'border-4 border-b-0 rounded-t-lg' : 'border-b-4'}`}>
                    <span className="text-xl font-semibold">Create Employee</span>
                </Link>
                <Link to="createTask" onClick={() => setTabIdx(2)} rel="noopener noreferrer" href="#" className={`px-5 py-3  w-full ${tabIdx === 2 ? 'border-4 border-b-0 rounded-t-lg' : 'border-b-4'}`}>
                    <span className="text-xl font-semibold">Create Task</span>
                </Link>
            </div>
        </div>
        <Outlet />
        </div>
    );
    };

    export default AdminDashboard;
