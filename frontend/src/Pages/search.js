// SneakerSearch.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SneakerSearch = () => {
    const [searchInput, setSearchInput] = useState('');
    const [sneakers, setSneakers] = useState([]);

    const containerStyle = {
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
    };

    const inputStyle = {
        marginRight: '10px',
        padding: '10px', // Increase padding to make it bigger
        width: '300px', // Adjust width as needed
        fontSize: '16px', // Increase font size if needed
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px', // Increase padding to make it bigger
        cursor: 'pointer',
        fontSize: '16px', // Increase font size if needed
    };

    const sneakerListStyle = {
        marginTop: '10px',
    };

    const sneakerItemStyle = {
        marginBottom: '20px', // Increase margin bottom for better spacing
    };

    const handleSearch = () => {
        fetch('http://localhost:3001/unreleased-sneakers')
            .then(response => response.json())
            .then(data => {
                const filteredSneakers = data.filter(sneaker =>
                    sneaker.name.toLowerCase().includes(searchInput.toLowerCase())
                );
                setSneakers(filteredSneakers);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div style={containerStyle}>
            <input
                type="text"
                placeholder="Search..."
                style={inputStyle}
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
            />
            <button style={buttonStyle} onClick={handleSearch}>Search</button>
            <div style={sneakerListStyle}>
                {sneakers.map(sneaker => (
                    <div key={sneaker.id} style={sneakerItemStyle}>
                        <Link to={`/sneaker/${sneaker.slug}/${sneaker.id}`}>
                            <h4>{sneaker.name}</h4>
                            <div className='image-card-calendar'>
                                <img src={sneaker.image_url} alt={sneaker.name} />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SneakerSearch;
