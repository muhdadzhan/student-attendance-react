import React from "react";
import { useNavigate } from "react-router-dom";
import StudentTable from "../components/StudentTable";

function Dashboard(){
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    }

    return(
        <div className="container mt-4">
            <div className="d-flex justify-content-between">
                <h2>Welcome ({role})</h2>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
            <StudentTable />
        </div>
    );
}

export default Dashboard;