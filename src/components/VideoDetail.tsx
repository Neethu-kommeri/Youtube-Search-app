import React from "react";
import './VideoDetail.css'

interface VideoDetailProps {
  video: {
    id: { videoId: string };
    snippet: {
      title: string;
      description: string;
    };
  } | null; 
}

const VideoDetail: React.FC<VideoDetailProps> = ({ video }) => {
    if (!video) {
        return (
          <div>
           
           
          </div>
        );
      }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <div>
      <div className="ui-embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
