import {ChangeEvent, Component} from "react";

import React from 'react';
import './App.css';
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

interface AppProps {

}
interface Monster {
    name: string;
    id: number;
    email: string;

}
interface AppState {
    monsters: Monster[];
    searchField: string;

}
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
      super(props);

      this.state = {
          monsters: [],
          searchField: ''

      };
  }
    componentDidMount(): void {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((monsters: Monster[]) : void => this.setState({monsters: monsters}))

  }

    onSearchChange  = (event: ChangeEvent<HTMLInputElement>): void => {
            const searchField : string = event.target.value.toLowerCase();
            this.setState({ searchField: searchField })
    }

    render() {

        const { monsters, searchField } = this.state;
        const {onSearchChange} = this;
        const filteredMonsters: Monster[] = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
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

        );
    }
}

export default App;
