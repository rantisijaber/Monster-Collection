import React from "react";
import "./monster-card.css"

interface MonsterCardProps {
    monster: { id: number; name: string; email: string};


}

const MonsterCard : React.FC<MonsterCardProps> = ( {monster}) => {
    const { id, name, email } = monster;
    return (
        <div className="card-container">
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2 className="monster-name">{name}</h2>
            <h2 className="monster-email">{email}</h2>
        </div>
    );

}
export default MonsterCard;

