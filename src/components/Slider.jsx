import React, { useEffect } from "react";
import { useGetTrendsQuery } from "../services/trendingApi";
import "../styles/Slider.css";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { switchgenre } from "../genre";
import { Loading } from ".";
import { Link } from "react-router-dom";

let scrollFinal = 0;
let length = 0;
let scrollIndex = 1;
function scroll(type) {
  length = document.querySelectorAll(".slide").length;
  if (type === "start") {
    const scrollwidth =
      document.querySelector(".slide").offsetWidth +
      document.querySelector(".slide").offsetLeft;
    scrollFinal += scrollwidth;
    document.querySelector(
      ".slidermain"
    ).style.transform = `translateX(-${scrollFinal}px)`;
  } else {
    document.querySelector(".slidermain").style.transform = `translateX(0px)`;
  }
}

const Slider = () => {
  const { data, isFetching } = useGetTrendsQuery();
  const trendingMovies = data?.results;

  useEffect(() => {
    length = document.querySelectorAll(".slide").length;
    setInterval(() => {
      if (length > scrollIndex) {
        scrollIndex++;
        scroll("start");
      } else {
        scrollIndex = 1;
        scrollFinal = 0;
        scroll("restart");
      }
    }, 10000);
  }, []);

  if (isFetching) {
    return <Loading />;
  } else {
    return (
      <div className="slidecont">
        <h2 className="heading" onClick={() => scroll(2)}>
          Trending
        </h2>
        <div className="slidermain">
          {trendingMovies.map((item, index) => {
            const {
              id,
              backdrop_path,
              genre_ids,
              first_air_date,
              name,
              original_title,
              release_date,
              vote_count,
              vote_average,
            } = item;
            return (
              <div className="slide" key={index} id={id}>
                <Link className="singlelink" to={`/singleshow/${id}`}>
                  <img
                    className="backdropimage"
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt={name || original_title}
                  />

                  <div className="textinfo">
                    <div className="side1">
                      <h2 className="name">{name || original_title}</h2>
                      <div className="dag">
                        <h4>
                          {release_date || first_air_date}
                          <span>
                            <BsDot />
                          </span>{" "}
                        </h4>
                        <div className="genre">
                          {genre_ids.map((id) => (
                            <h4 key={id}>
                              {switchgenre(id)} <span></span>
                            </h4>
                          ))}
                        </div>
                      </div>
                      <div className="rat">
                        <h4>
                          <span>
                            {" "}
                            <AiFillStar className="star" />{" "}
                          </span>{" "}
                          {vote_average}
                        </h4>
                        <h4>
                          ({vote_count}) <span></span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Slider;
