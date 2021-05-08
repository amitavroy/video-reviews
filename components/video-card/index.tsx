interface Props {
  video: any;
}
const VideoCard: React.FC<Props> = ({ video }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <strong>{video.title}</strong>
        <div>{video.description}</div>
      </div>
    </div>
  );
};

export default VideoCard;
