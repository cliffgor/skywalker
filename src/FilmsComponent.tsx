import { IFilms } from './IFilms';
import React from 'react'

const FilmsComponent = (props: {films: IFilms}) => {
    const { films } = props;
    return (
        <div className="films">
            <div className="title">
                <h1>{films.title}</h1>
                </div>
                <p>Story:{films.opening_craw}</p>
                <p>Name of Producer:{films.producer}</p>
                <p>Release Date: {films.release_date}</p>
                <p>Episodes:{films.episode_id}</p>
                
        </div>
    );
};

export default FilmsComponent;