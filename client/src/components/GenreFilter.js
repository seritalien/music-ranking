import React from 'react';
import Select from 'react-select';

function GenreFilter({ genres, selectedGenres, onChange }) {
    const options = genres.map(genre => ({ value: genre, label: genre }));

    const handleChange = (selectedOptions) => {
        onChange(selectedOptions ? selectedOptions.map(option => option.value) : []);
    };

    return (
        <Select
            isMulti
            options={options}
            value={options.filter(option => selectedGenres.includes(option.value))}
            onChange={handleChange}
        />
    );
}

export default GenreFilter;
