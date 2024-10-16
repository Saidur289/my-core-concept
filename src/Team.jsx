import { useState } from "react";

function Team(){
    const teamStyle = {
        border: '2px solid purple',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px',
    }
    const [team, setTeam] = useState(11);
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={() => setTeam(team +1)}>add</button>
            <button onClick={() => setTeam(team - 1)}>reduce</button> 
        </div>
    )
}
export default Team