 
import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios";
import Row from "./Row"
import { Link } from 'react-router-dom';
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

const IMGPATH = "https://image.tmdb.org/t/p/original";


const APIURL = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated"

const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genre, setGenre] = useState([]);


    useEffect(() => {

        const fetchUpcoming = async () => {
            try {
                const {
                    data: { results },
                } = await axios.get(`${APIURL}/movie/${upcoming}?api_key=${process.env.apiKey}`);
                setUpcomingMovies(results);
            } catch (error) {
                // Handle errors, e.g., show an error message or log the error
                console.error("Error fetching upcoming movies:", error);
            }
        };


        const fetchNowPlaying = async () => {
            try {
                const {
                    data: { results },
                } = await axios.get(`${APIURL}/movie/${nowPlaying}?api_key=${process.env.apiKey}`);
                setNowPlayingMovies(results);
            } catch (error) {
                // Handle errors, e.g., show an error message or log the error
                console.error("Error fetching upcoming movies:", error);
            }
        };

        const fetchPopular = async () => {
            try {
                const {
                    data: { results },
                } = await axios.get(`${APIURL}/movie/${popular}?api_key=${process.env.apiKey}`);
                setPopularMovies(results);
            } catch (error) {
                // Handle errors, e.g., show an error message or log the error
                console.error("Error fetching upcoming movies:", error);
            }
        };


        const fetchTopRated = async () => {
            try {
                const {
                    data: { results },
                } = await axios.get(`${APIURL}/movie/${topRated}?api_key=${process.env.apiKey}`);
                setTopRatedMovies(results);
            } catch (error) {
                // Handle errors, e.g., show an error message or log the error
                console.error("Error fetching upcoming movies:", error);
            }
        };


        const getAllGenre = async () => {
            try {
                const {
                    data: { genres },
                } = await axios.get(`${APIURL}/genre/movie/list?api_key=${process.env.apiKey}`);
                setGenre (genres);
            } catch (error) {
                // Handle errors, e.g., show an error message or log the error
                console.error("Error fetching upcoming movies:", error);
            }
        };

        getAllGenre();



        fetchUpcoming();
        fetchNowPlaying();
        fetchPopular();
        fetchTopRated();
    }, []);

    return (
        <section className='home'>
            <div className='banner' style={{
                backgroundImage: popularMovies[0]?`url(${IMGPATH}/${popularMovies[0].poster_path})`
                : "rgb(16,16,16)",
            }}>

                {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
                {popularMovies[0] && <p>{popularMovies[0].overview}</p>}


                <div>
                    <button><BiPlay /> Play </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>


            </div>

            <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Now Playing "} arr={nowPlayingMovies} />
            <Row title={"Popular "} arr={popularMovies} />
            <Row title={"Top Rated"} arr={topRatedMovies} />


            <div className="genreBox">
                {genre.map((item)=>(
                    <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
                ))}
            </div>
        </section>
    )
}

export default Home;
