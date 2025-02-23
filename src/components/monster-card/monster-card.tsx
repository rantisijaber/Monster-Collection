import { Component } from "react";
import "./monster-card.css"

interface MonsterCardProps {
    monster: { id: number; name: string; email: string};


}

class MonsterCard extends Component<MonsterCardProps> {
render () {
    const { id, name, email } = this.props.monster;
    return (
        <div key={id} className="card-container">
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2 className="monster-name">{name}</h2>
            <h2 className="monster-email">{email}</h2>
        </div>
    );
}
}
export default MonsterCard;

