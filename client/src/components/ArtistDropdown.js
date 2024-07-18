import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function ArtistDropdown({ artists, onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel>Choisir un artiste</InputLabel>
            <Select onChange={handleChange}>
                {artists.map((artist, index) => (
                    <MenuItem key={index} value={artist.name.replace(/ /g, '_')}>
                        {artist.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default ArtistDropdown;
