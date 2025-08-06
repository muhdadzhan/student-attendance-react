import React, {useEffect, useState} from "react";
import API from '../api';


function StudentTable(){

    const [students, setStudents] = useState([]);

    useEffect(() => {
        API.get('/student')
            .then((res) => setStudents(res.data))
            .catch((err) => console.error(err));
    }, []);


    return(
        <div className="container mt-4">
            <h2>Student List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Class</th>
                </tr>
                </thead>
                <tbody>
                {students.map((s) => (
                    <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.class_name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}

export default StudentTable;