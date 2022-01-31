import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/oneshow.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useOneShowQuery } from "../services/oneShow";
import { Loading } from "../components";
import { IoMdPlay } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import YouTube from "react-youtube";

function windowwidth() {
  if (window.innerWidth > 640) {
    return "640";
  } else {
    const x = window.innerWidth.toString();
    return x;
  }
}
function showytvideo() {
  const x = document.querySelector("#ytp");
  x.style.display = "block";
  x.scrollIntoView({ behavior: "smooth" });
}

const OneShow = () => {
  let params = useParams();

  const { data, isFetching } = useOneShowQuery({
    id: params.id,
    mediatype: params.mediatype,
  });
  console.log(data);
  const [ytkey, setYtkey] = useState("");

  useEffect(() => {
    if (!isFetching) {
      function getyoutubekey(data) {
        const youtubeArr = data?.videos?.results;
        const x = youtubeArr.filter((item) => item.site === "YouTube");
        if (x.length > 0) {
          const y = x.filter((item) => item.type === "Trailer");

          if (y.length > 0) {
            const videodata = y[0];
            setYtkey(videodata.key);
            return "key";
          } else {
            return "No video";
          }
        } else {
          return "No video";
        }
      }
      getyoutubekey(data);
    }
  }, [isFetching, data]);

  if (isFetching) {
    return <Loading />;
  } else {
    if (params.mediatype === "movie") {
      const {
        backdrop_path,
        id,
        genres,
        original_titl,
        original_title,
        name,
        poster_path,
        overview,
        release_date,
        runtime,
        tagline,
        title,
        status,
        vote_count,
        vote_average,
      } = data;
      const opts = {
        height: "390",
        width: windowwidth(),
        playerVars: {
          autoplay: 0,
        },
      };
      return (
        <div className="oneshowcont">
          <div className="topbanner">
            <Link to={`${localStorage.getItem("lastlink")}`} className="goback">
              <MdOutlineArrowBackIosNew />
            </Link>
            <img
              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
              alt={id}
              className="imagebanner"
            />
            <div className="bottombox">
              <button className="watchtrailer1" onClick={showytvideo}>
                <IoMdPlay /> <p>Trailer</p>
              </button>
            </div>
          </div>

          <div className="maininfo">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={id}
              className="poster"
            />

            <div className="data">
              <h1 className="title">
                {name || original_title || original_titl || title}
              </h1>
              <h1 className="tagline">{tagline}</h1>
              <h1 className="narration">{overview}</h1> <br />
              <h3>
                Runtime :<span id="rt">{`${runtime}s`}</span>
              </h3>
              <h3>
                Status :<span id="rt">{status}</span>
              </h3>
              <h3>
                Release Date :<span id="rt">{release_date}</span>
              </h3>
              <h3>
                Media Type :<span id="rt">{params.mediatype}</span>
              </h3>
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
              <div className="genreL">
                {genres.map((id) => (
                  <h4 key={id.id} className="gen">
                    {id.name}
                  </h4>
                ))}
              </div>
              <button className="watchtrailer1" onClick={showytvideo}>
                <IoMdPlay /> <p>Trailer</p>
              </button>
            </div>
          </div>
          <YouTube videoId={ytkey} id={`ytp`} opts={opts} />
        </div>
      );
    } else {
      const {
        backdrop_path,
        id,
        genres,
        original_titl,
        original_title,
        name,
        poster_path,
        overview,
        runtime,
        tagline,
        title,
        status,
        vote_count,
        vote_average,
        last_air_date,
        in_production,
        last_episode_to_air,
        next_episode_to_air,
      } = data;
      const opts = {
        height: "390",
        width: windowwidth(),
        playerVars: {
          autoplay: 0,
        },
      };
      return (
        <div className="oneshowcont">
          <div className="topbanner">
            <Link to={`${localStorage.getItem("lastlink")}`} className="goback">
              <MdOutlineArrowBackIosNew />
            </Link>
            <img
              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
              alt={id}
              className="imagebanner"
            />
            <div className="bottombox">
              <button className="watchtrailer1" onClick={showytvideo}>
                <IoMdPlay /> <p>Trailer</p>
              </button>
            </div>
          </div>

          <div className="maininfo">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={id}
              className="poster"
            />

            <div className="data">
              <h1 className="title">
                {name || original_title || original_titl || title}
              </h1>
              <h1 className="tagline">{tagline}</h1>
              <h1 className="narration">{overview}</h1> <br />
              <h3>
                Runtime :<span id="rt">{`${runtime}s`}</span>
              </h3>
              <h3>
                Status :<span id="rt">{status}</span>
              </h3>
              <h3>
                Last air Date :<span id="rt">{last_air_date}</span>
              </h3>
              <h3>
                In production :
                <span id="rt">{in_production ? "Yes" : "No"}</span>
              </h3>
              <h3>
                Last Episode :
                <span id="rt">{last_episode_to_air.episode_number}</span>
              </h3>
              <h3>
                Next Episode :
                <span id="rt">{next_episode_to_air.episode_number}</span>
              </h3>
              <h3>
                Next Episode Date:
                <span id="rt">{next_episode_to_air.air_date}</span>
              </h3>
              <h3>
                Media Type :<span id="rt">{params.mediatype}</span>
              </h3>
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
              <div className="genreL">
                {genres.map((id) => (
                  <h4 key={id.id} className="gen">
                    {id.name}
                  </h4>
                ))}
              </div>
              <button className="watchtrailer1" onClick={showytvideo}>
                <IoMdPlay /> <p>Trailer</p>
              </button>
            </div>
          </div>
          <YouTube videoId={ytkey} id={`ytp`} opts={opts} />
        </div>
      );
    }
  }
};

export default OneShow;
