import React, { useState } from 'react';
import './Searchbar.css'


interface SearchBarProps {
  handleFormSubmit: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleFormSubmit }) => {
  // State for the search term
  const [term, setTerm] = useState<string>('');

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFormSubmit(term);
  };

  return (
    <>
      <h2>
        <img
          src="https://www.freepnglogos.com/uploads/youtube-video-logo-png-4.png"
          alt="youtube logo"
        />
      </h2>
      <div className="search-bar">
        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-search"className='video_search'>Video Search</label>
            <input
              onChange={handleChange}
              value={term}
              type="text"
              placeholder="Search.."
              className='search'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
