import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AlbumItem from '../AlbumItem';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
};

function AlbumList({ albumList }) {
    return (
        <div>
            <ul className='album-list'>
                {albumList.map(albumItem => (
                    <li key={albumItem.id}>
                        <AlbumItem albumItem={albumItem} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;