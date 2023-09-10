import { useState } from "react"

export default function Team(){

    const [team, setTime] = useState(11);
    const handleAdd = () =>{
        const newTeam = team + 1;
        setTime(newTeam)
    }

    const handle2 = () =>{
        const removeValue = team - 1;
        setTime(removeValue)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return(

        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handle2}>Remove</button>
        </div>
    )
} 