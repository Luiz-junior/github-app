import React from 'react';

const Search = ({ handleSearch }) => {
    return (
        <div className="search">
            <input type="search"
                placeholder="Digite o nome do usuário no Github" 
                onKeyUp={handleSearch} 
            />
        </div>
    );
};

export default Search;