import React from 'react';
import AlbumList from './components/AlbumList';


function AlbumFeature(props) {

    const albumList = [
        {
            id: 1,
            name: 'Nhạc mới mỗi ngày',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/7/4/f/274f8a0e7b8137bba546fd60cdc39140.jpg'
        },
        {
            id: 2,
            name: 'Sự kết hợp mới',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/1/b/021baa70c176e7939b1be8f5dccb0e88.jpg'
        },
        {
            id: 3,
            name: 'V-Pop Summer',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/5/9/3/05932d7538d9251ac3d6050ac5d35a0d.jpg'
        }
    ]

    return (
        <div>
            <h2>Có thể bạn thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;