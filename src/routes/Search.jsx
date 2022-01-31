import React,{useState} from 'react';
import {Navbar  } from '../components';
import AllMoviesBySearch from '../components/AllMoviesBySearch';

const Search = () => {
    localStorage.setItem('lastlink', '/search');
    const [currentText, setCurrentText] = useState('');
    const [currentTextC, setCurrentTextC] = useState('');

    function changect(txt){
        setCurrentText(txt)
    }
    function sendRequest(){
        setCurrentTextC(currentText)
    }

  return ( 
      <>
      <Navbar actiontype={`search`} currentText={currentText} sendRequest={sendRequest} changect={changect}/>


     <AllMoviesBySearch currentTextC={currentTextC}/>
      </>
  )
};

export default Search;
