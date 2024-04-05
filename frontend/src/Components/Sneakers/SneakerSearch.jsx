import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Pages/css/search.css';
import { BiSearchAlt } from "react-icons/bi";

const SneakerSearch = () => {
    const [searchInput, setSearchInput] = useState('');
    const [sneakers, setSneakers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (query) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3001/search?query=${query}&filter=available`);
            setSneakers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchInput(value);
        handleSearch(value);
    };

    const handleClick = () => {
        handleSearch(searchInput);
    };

 


    return (
        <div className='search-container'>
            <div className='search-text'>

            <h1>YOUR NUMBER ONE SNEAKER ENGINE </h1>
            </div>

          


          <div className='search-bar'>
            <input
                className='input-class'
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={handleChange}
            />
    <button className='search-icon' onClick={handleClick}>
        <BiSearchAlt /> Search   
    </button>
</div>

            {loading && <p>Loading...</p>}
            <div className='sneaker-list'>
                {sneakers.map(sneaker => (
                    <div key={sneaker.id} className='sneaker-card'>
                        <Link to={`/sneaker/${sneaker.slug}/${sneaker.id}`}>
                        <h4 className='sneaker-search-name'>{sneaker.name}</h4>
                        <img src={sneaker.image_url} alt={sneaker.name} />
     

                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SneakerSearch;
