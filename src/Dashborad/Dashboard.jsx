import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    function fetchData() {
        fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, [])
    console.log("projects", projects)
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ProjectName</th>
                        <th>Details</th>
                        <th>startDate</th>
                        <th>EndDate</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {setProjects.length > 0 ? (projects.map((p, i) => 
                        <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{p.ProjectName}</td>
                        <td>{p.Details}</td>
                        <td>{p.startDate}</td>
                        <td>{p.EndDate}</td>
                        <td>{p.status}</td>
                    </tr>
                    
                    )) : (<p> No projects found</p>)}
                </tbody>
            </Table>

        </div>
    )
}

export default Dashboard