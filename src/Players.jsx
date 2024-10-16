import { useEffect, useState } from "react";
import Player from "./Player";

function Players(){
    const teamStyle = {
        border: '2px solid tomato',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px',
    }
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    return(
        <div style={teamStyle}>
            <h3>Players: {players.length}</h3>
            {
                players.map(player => <Player player={player} key={player.id}/>)
            }
        </div>
    )
}
export default Players