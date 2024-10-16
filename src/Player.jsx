function Player({player}){
    const teamStyle = {
        border: '2px solid purple',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px',
    }
    const{name, email} = player
    return(
        <div style={teamStyle}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}
export default Player