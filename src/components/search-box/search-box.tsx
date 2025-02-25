import React from "react";
import './search-box.css'

interface SearchBoxProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    className: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onChangeHandler, placeholder, className}) => {
        return (
            <input
                className={`search-box ${className}`}
                type="search"
                placeholder={ placeholder}
                onChange={ onChangeHandler }
            />
        )
    }


export default SearchBox;