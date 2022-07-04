import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumItem.propTypes = {
    albumItem: PropTypes.object.isRequired
};

function AlbumItem({ albumItem }) {
    return (
        <div className='album-item'>
            <div className='album-item__thumb'>
                <img src={albumItem.thumbnailUrl} alt={albumItem.name} />
            </div>
            <p className='album-item__name'>{albumItem.name}</p>
        </div>
    );
}

export default AlbumItem;