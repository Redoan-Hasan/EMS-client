            const EmployeeList = () => {
            return (
                <div>
                    <div className="overflow-x-auto my-10 border-blue-500 border-2">
                    <table className="table">
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
                        <tr >
                            <td className="text-base font-semibold">1.</td>
                            <td>
                            <div className="flex items-center gap-3 text-base font-semibold">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                <div>
                                <div className="font-semibold">Hart Hagerty</div>
                                </div>
                            </div>
                            </td>
                            <td className="text-base font-semibold">
                            siuuu@example.com
                            <br />
                            </td>
                            <td className="text-base font-semibold">5</td>
                            <td className="text-base font-semibold">6</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            );
            };

            export default EmployeeList;
