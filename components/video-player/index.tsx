import YouTube from 'react-youtube';

interface Props {
  videoId: string;
}

const VideoPlayer: React.FC<Props> = ({ videoId }) => {
  return <YouTube videoId={videoId} containerClassName={'youtubeContainer'} />;
};

export default VideoPlayer;
