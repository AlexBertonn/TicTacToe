import { useState } from "react";
export default function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event){
        setPlayerName(event.target.value);
    };


    function handleSelectButton() {
        setIsEditing((editing) => !editing)
    };

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return (
            <li className={isActive ? 'active' : undefined}>
                <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleSelectButton}>{isEditing ? "Save" : "Edit"}</button>
            </li>
)}