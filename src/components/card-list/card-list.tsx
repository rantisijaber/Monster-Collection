import { Component } from "react";
import "./card-list.css"
import MonsterCard from "../monster-card/monster-card";

interface CardListProps {
    monsters: { id: number; name: string; email: string}[]; // Define the structure of each monster

}

class CardList extends Component<CardListProps> {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map((monster) => (
                    <MonsterCard key={monster.id} monster={monster} />
                ))}
            </div>
        );
    }
}
export default CardList;

