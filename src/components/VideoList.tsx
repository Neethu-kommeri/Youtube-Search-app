import React from 'react';
import VideoItem from './VideoItem';

interface VideoListProps {
  videos: {
    id: { videoId: string };
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
  }[];
  handleVideoSelect: (video: any) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedVideos}</div>;
};

export default VideoList;
