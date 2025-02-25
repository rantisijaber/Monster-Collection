import {useState, useEffect} from "react";
import React from 'react';
import './App.css';
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

interface Monster {
    name: string;
    id: number;
    email: string;

}

const App = () => {

    const [searchField, setSearchField] = useState<string>("");
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response : Response) => response.json())
            .then((monsters: Monster[]) : void => setMonsters(monsters))
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster: Monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);


    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = e.target.value;
        setSearchField(searchFieldString);
    }
    return (
        <div className="App">
            <h1 className="app-title">Monster Collection</h1>
            <SearchBox
                className={"search-monsters"}
                onChangeHandler={onSearchChange}
                placeholder={"Search for Monsters"}
            />
            <CardList monsters={filteredMonsters} />

        </div>
        )



}


export default App;

