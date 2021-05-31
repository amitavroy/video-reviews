import React from 'react';
import { IComment } from '../../contracts/IComment';

interface Props {
  comment: IComment;
}

export const CommentCard: React.FC<Props> = ({ comment }) => {
  return (
    <div className="pb-3">
      <div>
        <strong>{comment.user.name}</strong>
      </div>
      <div>{comment.comment}</div>
    </div>
  );
};
