import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import PageHeader from '../../components/page-header';
import { ProtectedRoute } from '../../components/protected-route';
import VideoCard from '../../components/video-card';
import VideoService from '../../services/video.service';

const pageTitle = 'Latest videos in this application.';

const DashboardPage = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // service call to load the videos
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const videos = await VideoService.fetchUserVideos();
    setVideos(videos.data.data);
  };
  return (
    <Layout pageTitle={pageTitle}>
      <PageHeader title="Latest videos" description={pageTitle} />
      <div className="row">
        {videos.length > 0 &&
          videos.map((video) => {
            return (
              <div className="col-sm-4 pb-3" key={video.id}>
                <VideoCard video={video} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
};
export default ProtectedRoute(DashboardPage);
