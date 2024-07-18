const fs = require('fs');
const path = require('path');

exports.getArtists = (req, res) => {
    const files = fs.readdirSync(path.join(__dirname, '../data')).filter(file => file.endsWith('_albums.json'));
    res.json(files.map(file => file.replace('_albums.json', '')));
};

exports.getArtistAlbums = (req, res) => {
    const artist = req.params.artist;
    const filePath = path.join(__dirname, `../data/${artist}_albums.json`);
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        res.json(JSON.parse(data));
    } else {
        res.status(404).json({ message: 'Artist not found' });
    }
};
