

import React, { useState } from 'react';
import SearchBar from './components/Searchbar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css'



// Define the types for a video item
interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: { url: string };
    };
  };
}

const App: React.FC = () => {
  // State for videos and selected video
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Handle form submission
  const handleSubmit = async (termFromSearchBar: string) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: termFromSearchBar,
        },
      });

      setVideos(response.data.items);
      console.log('This is response:', response);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  // Handle video selection
  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container" style={{ marginTop: '1em' }}>
      <SearchBar handleFormSubmit={handleSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
