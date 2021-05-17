interface Props {
  video: any;
}
const VideoCard: React.FC<Props> = ({ video }) => {
  return (
    <div className="card shadow-sm">
      <div>
        <img
          src={`https://img.youtube.com/vi/${video.video_id}/mqdefault.jpg`}
          alt={video.title}
          width="100%"
        />
      </div>
      <div className="card-body">
        <div className="fs-5 lh-sm text-blue-600">{video.title}</div>
        <div className="mt-2 fs-6 lh-1">{video.description}</div>
      </div>
    </div>
  );
};

export default VideoCard;
