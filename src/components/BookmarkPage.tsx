// /pages/bookmarks.tsx
import React, { useState } from 'react';
import VideoItem from './VideoItem'; // Importing VideoItem component

const BookmarkPage: React.FC = () => {
  const [bookmarkedVideos, setBookmarkedVideos] = useState([
    {
      id: '1',
      title: 'Learn React in 30 Minutes',
      thumbnail: 'https://via.placeholder.com/150',
      channelName: 'React Tutorials',
    },
    {
      id: '2',
      title: 'JavaScript ES6 Features',
      thumbnail: 'https://via.placeholder.com/150',
      channelName: 'JavaScript Academy',
    },
    {
      id: '3',
      title: 'Understanding TypeScript',
      thumbnail: 'https://via.placeholder.com/150',
      channelName: 'TS Devs',
    },
  ]);

  // Function to remove a video from bookmarks
  const handleRemoveBookmark = (id: string) => {
    setBookmarkedVideos(bookmarkedVideos.filter((video) => video.id !== id));
  };

  return (
    <div className="bookmark-page">
      <h1>Your Bookmarks</h1>
      <div className="video-list">
        {bookmarkedVideos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            onBookmark={handleRemoveBookmark}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarkPage;
