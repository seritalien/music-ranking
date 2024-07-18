import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtistDropdown from '../components/ArtistDropdown';
import GenreFilter from '../components/GenreFilter';
import DateSlider from '../components/DateSlider';
import AlbumCard from '../components/AlbumCard';

function HomePage() {
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [dateRange, setDateRange] = useState([1970, 2021]);

    useEffect(() => {
        axios.get('/api/artists').then(response => {
            setArtists(response.data);
        });
    }, []);

    const handleArtistChange = (artist) => {
        axios.get(`/api/artists/${artist}`).then(response => {
            setAlbums(response.data);
            const uniqueGenres = [...new Set(response.data.map(album => album.Style))];
            setGenres(uniqueGenres);
        });
    };

    const handleGenreChange = (genres) => {
        setSelectedGenres(genres);
    };

    const handleDateChange = (range) => {
        setDateRange(range);
    };

    const filteredAlbums = albums.filter(album => {
        const year = parseInt(album.Date);
        const withinDateRange = year >= dateRange[0] && year <= dateRange[1];
        const withinSelectedGenres = selectedGenres.length === 0 || selectedGenres.includes(album.Style);
        return withinDateRange && withinSelectedGenres;
    });

    return (
        <div>
            <ArtistDropdown artists={artists} onChange={handleArtistChange} />
            <GenreFilter genres={genres} selectedGenres={selectedGenres} onChange={handleGenreChange} />
            <DateSlider range={dateRange} onChange={handleDateChange} />
            <div className="album-list">
                {filteredAlbums.map((album, index) => (
                    <AlbumCard key={index} album={album} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
