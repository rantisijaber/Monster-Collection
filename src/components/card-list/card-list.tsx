import React from "react";
import "./card-list.css"
import MonsterCard from "../monster-card/monster-card";

interface CardListProps {
    monsters: { id: number; name: string; email: string}[]; // Define the structure of each monster

}

const CardList : React.FC<CardListProps> = ({ monsters }) => {
        return (
            <div className="card-list">
                {monsters.map((monster) => (
                    <MonsterCard key={monster.id} monster={monster} />
                ))}
            </div>
        );
}

export default CardList;

