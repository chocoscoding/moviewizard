import React, { useState } from 'react';
import { allGenre } from '../genre';
import {Slider,AllMoviesByGenre,Navbar  } from '../components';


const Home = () => {
  localStorage.setItem('lastlink', '/');

    const [currentGenre, setCurrentGenre] = useState('All')
    function changeGen(id) {
      document.querySelectorAll('.gen').forEach(item => item.className = 'gen');
        document.getElementById(id).className = 'gen genactive';
        if(id === 200009){
          setCurrentGenre('All')
        }
        else{
          setCurrentGenre(id)
        }
    }
  return ( 
      <>
            <Navbar actiontype={`home`}/>
              <Slider />

<h2 className='fbgh'>Filter by genre</h2>
<div className="genreL">
  {allGenre.genres.map((genre, index) => {
    const { name, id } = genre;
    if (index === 0) {
      return (

        <h3 className="gen genactive" key={index} id={id} onClick={() => changeGen(id)}>{name}</h3>
      )
    }
    return (

      <h3 className="gen" id={id} key={index} onClick={() => changeGen(id)}>{name}</h3>
    )
  })}
</div>

<AllMoviesByGenre currentGenre={currentGenre}/>
      </>
  )
};

export default Home;
