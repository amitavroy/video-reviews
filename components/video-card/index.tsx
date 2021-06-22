import { useRouter } from 'next/router';
import React from 'react';
import { IVideo } from '../../contracts/IVideo';
import Like from '../like';

interface Props {
  video: IVideo;
}
const VideoCard: React.FC<Props> = ({ video }) => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/video/view/${id}`);
  };
  return (
    <div
      className="card shadow-sm pointer"
      onClick={() => handleClick(video.id)}
    >
      <div>
        <img
          src={`https://img.youtube.com/vi/${video.video_id}/mqdefault.jpg`}
          alt={video.title}
          width="100%"
        />
      </div>
      <div className="card-body">
        <Like
          type="video"
          modelId={video.id}
          count={video.like_count}
          isLiked={false}
          handleSuccess={() => {}}
        />
        <div className="fs-5 lh-sm text-blue-600">{video.title}</div>
        <div className="mt-2 fs-6 lh-1">{video.description}</div>
      </div>
    </div>
  );
};

export default VideoCard;
