import LikeService from '../../services/like.service';

interface Props {
  type: 'video' | 'comment';
  modelId: number;
  count: number;
  handleSuccess: (action: string) => void;
  isLiked: boolean;
}

const Like: React.FC<Props> = ({
  type,
  count,
  handleSuccess,
  modelId,
  isLiked,
}) => {
  const handleLikeClick = async () => {
    const resp = await LikeService.addLike({
      entity: type,
      entity_id: modelId,
    });
    if (resp.status === 201) handleSuccess(resp.data.data);
  };
  return (
    <div className="pointer" onClick={handleLikeClick}>
      <i
        className={`bi ${
          isLiked ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'
        }`}
      ></i>{' '}
      {count > 0 && count} {`${count > 1 ? 'Likes' : 'Like'}`}
    </div>
  );
};
export default Like;
