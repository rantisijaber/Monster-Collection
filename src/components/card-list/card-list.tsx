import { Component } from "react";

interface CardListProps {
    monsters: { id: number; name: string; }[]; // Define the structure of each monster
}

class CardList extends Component<CardListProps> {
    render() {
        const { monsters } = this.props;
        return (
            <div>
                {monsters.map((monster) => (
                    <div key={monster.id}>
                        <h2>{monster.name}</h2>
                    </div>
                ))}
            </div>
        );
    }
}

export default CardList;

