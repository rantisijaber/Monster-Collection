import {ChangeEvent, Component} from "react";

import React from 'react';
import './App.css';
import CardList from "./components/card-list/card-list";

interface AppProps {

}
interface User {
    name: string
    id: number

}
interface AppState {
    monsters: User[]
    searchField: string

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
          .then((users: User[]) : void => this.setState({monsters: users}))

  }

    onSearchChange  = (event: ChangeEvent<HTMLInputElement>): void => {
            const searchField : string = event.target.value.toLowerCase();
            this.setState({ searchField: searchField })
    }

    render() {

        const { monsters, searchField } = this.state;
        const {onSearchChange} = this;
        const filteredMonsters: User[] = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <input
                    className="search-box"
                    type="text"
                    placeholder="Search for a monster"
                    onChange={onSearchChange}
                />

                <CardList monsters={filteredMonsters} />

            </div>

        );
    }
}

export default App;
