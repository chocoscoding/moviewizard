import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import {switchgenre} from '../genre';

import "../styles/AllMoviesByGenre.css";

const AllMovies = ({ MoviesData }) => {
  const { results } = MoviesData;

  if(MoviesData.type === 'byname'){
    return (
        <div className="ambg">
          {results.map((SingleMovieData,index) => {
            const {
              id,
              poster_path,
              name,
              original_title,
              title,
              media_type
            } = SingleMovieData;
            return (
              <Link to={`/singleshow/${id}/${media_type || 'movie'}`} className="movie" key={index}>
                <div className="imageholder">
                  <img
                    className="backdropimage"
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt={name || original_title}
                  />
                </div>
    
                <div className="textinfo">
                  <div className="side1">
                  <h2 className="name">{title || original_title || name}</h2>
                  </div>
                </div>
              </Link> 
            );
          })}
        </div>
      );
  }
  return (
    <div className="ambg">
      {results.map((SingleMovieData,index) => {
        const {
          id,
          poster_path,
          genre_ids,
          first_air_date,
          name,
          original_title,
          release_date,
          vote_count,
          vote_average,
          title,
          media_type
        } = SingleMovieData;
        return (
          <Link to={`/singleshow/${id}/${media_type || 'movie'}`} className="movie" key={index}>
            <div className="imageholder">
              <img
                className="backdropimage"
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={name || original_title}
              />
            </div>

            <div className="textinfo">
              <div className="side1">
              <h2 className="name">{title || original_title || name}</h2>
                <div className="dag">
                <h4>
                    {`${release_date.substring(0,4) || first_air_date.substring(0,4)}`}
                    <span>
                      -
                    </span>{" "}
                  </h4>
                  <div className="genreAM">
                      {genre_ids.slice(0, 3).map((id)=>(<h4 key={id}>{switchgenre(id)} <span></span></h4>))}
                  </div>
                </div>
                <div className="rat">
                  <h4>
                   <span> <AiFillStar className="star"/> </span> {vote_average}
                  </h4>
                  <h4>
                    ({ vote_count}) <span></span>
                  </h4>
                </div>
              </div>
            </div>
          </Link> 
        );
      })}
    </div>
  );
};

export default AllMovies;
