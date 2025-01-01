import React from 'react';
import '../style/video.css';
import './VideoItem.css'

interface VideoItemProps {
  video: {
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
  };
  handleVideoSelect: (video: any) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
