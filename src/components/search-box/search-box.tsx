import React, { Component } from "react";
import './search-box.css'

interface SearchBoxProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    className: string;
}

class SearchBox extends Component<SearchBoxProps> {
    render() {
        return (
            <input
                className={`search-box ${this.props.className}`}
                type="search"
                placeholder={ this.props.placeholder}
                onChange={ this.props.onChangeHandler }
            />
        )
    }
}

export default SearchBox;