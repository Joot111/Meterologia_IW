
import React, { useState,  useCallback  } from 'react';
import './SearchBar.css'

function SearchBar({ pesquisa, onPesquisaChange }) {


  const handleInputChange = useCallback(event => {
    onPesquisaChange(event.target.value)
  }, [onPesquisaChange])

    return (
      <div className='BarraPesquisa'>
         <form>
        <input
          type="text"
          placeholder="Digite sua pesquisa"
          onChange={handleInputChange} value={pesquisa}
        />
      
        </form>
      </div>
    );
  
}

export default SearchBar;