import { useEffect, useState } from "react";

function Users(){
    const teamStyle = {
        border: '2px solid purple',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px',
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        
    }, [])
    return(
        <div style={teamStyle}>
            <h1>Users: {users.length}</h1>
        </div>
    )
}
export default Users