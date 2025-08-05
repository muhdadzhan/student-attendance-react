import React from "react";
import StudentTable from "../components/StudentTable";

function Dashboard(){
    return(
        <div className="p-4">
            <h1>Attendance Dashboard</h1>
            <StudentTable />
        </div>
    );
}

export default Dashboard;