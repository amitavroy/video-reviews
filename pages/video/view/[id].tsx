import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Card from '../../../components/card';
import { CommentCard } from '../../../components/comment-card';
import { CommentAddForm } from '../../../components/forms/comment-add-form';
import Layout from '../../../components/layout';
import VideoPlayer from '../../../components/video-player';
import { IVideo } from '../../../contracts/IVideo';
import AuthService from '../../../services/auth.service';
import CommentService from '../../../services/comment.service';
import UrlService from '../../../services/url.service';

interface Props {
  video: IVideo;
}

const VideoDetailPage: React.FC<Props> = ({ video }) => {
  const { id, title, video_id, description, comments } = video;
  const [scopeComments, setScopeComments] = useState(comments);
  const handleCommentAdd = (comment) => {
    setScopeComments([comment, ...scopeComments]);
  };
  return (
    <Layout pageTitle={video.title}>
      <div className="row pb-3">
        <div className="col">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-8">
          <Card>
            <VideoPlayer videoId={video_id} />
            <div>{description}</div>
          </Card>
        </div>
        <div className="col-4">
          <h2>Comments</h2>
          <CommentAddForm videoId={id} handleCommentAdd={handleCommentAdd} />
          {scopeComments.length > 0 &&
            scopeComments.map((comment) => {
              return <CommentCard key={comment.id} comment={comment} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const { id } = params;
  const headers = AuthService.getUserAuthHeaderServer(req, res);
  if (!headers.Authorization) return headers;
  const response = await axios.get(UrlService.VIDEO_VIEW + id, { headers });
  if (response.status !== 200) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: { video: response.data },
  };
}

export default VideoDetailPage;
