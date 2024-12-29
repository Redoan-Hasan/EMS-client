import axios from "axios";
import { useEffect, useState } from "react";

            const EmployeeList = () => {
                const [employees, setEmployees] = useState([]);
                console.log(employees);
                useEffect(() => {
                        axios.get("http://localhost:5000/addEmployee")
                        .then(res => {
                        console.log(res.data);
                        setEmployees(res.data);
                    })
                },[])
            return (
                <div>
                    <div className="overflow-x-auto my-10 border-blue-500 border-2">
                    <table className="table ">
                        {/* head */}
                        <thead>
                        <tr className="border-b-2 border-blue-500 text-sm font-semibold">
                            <th>Sequence</th>
                            <th>Employee Name</th>
                            <th>Employee Email</th>
                            <th>Completed Task</th>
                            <th>Pending Task</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            employees.map((employee, idx) => {
                            return (<tr  key={idx}>
                            <td className="text-base font-semibold">{idx+1}.</td>
                            <td>
                            <div className="flex items-center gap-3 text-base font-semibold">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={employee.photoUrl}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                <div>
                                <div className="font-semibold">{employee.name}</div>
                                </div>
                            </div>
                            </td>
                            <td className="text-base font-semibold">
                            {employee.email}
                            <br />
                            </td>
                            <td className="text-base font-semibold">5</td>
                            <td className="text-base font-semibold">6</td>
                        </tr>)
                            })
                        }
                        </tbody>
                    </table>
                    </div>
                </div>
            );
            };

            export default EmployeeList;
