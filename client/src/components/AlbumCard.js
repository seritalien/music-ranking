import React from 'react';
import { Card, CardContent, Typography, Link } from '@material-ui/core';

function AlbumCard({ album }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{album.Album}</Typography>
                <Typography variant="body2" color="textSecondary">{album.Date}</Typography>
                <Typography variant="body2">{album.Style}</Typography>
                <Typography variant="body2">{album.Note}/10</Typography>
                <Typography variant="body2">{album.Avis}</Typography>
                <Typography variant="body2">{album.MajorTracks}</Typography>
                <Link href={album.Spotify} target="_blank">Listen on Spotify</Link>
            </CardContent>
        </Card>
    );
}

export default AlbumCard;
