import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { ProtectedRoute } from '../../components/protected-route';
import VideoCard from '../../components/video-card';
import VideoService from '../../services/video.service';

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
    <Layout>
      <div className="row">
        <div className="col-sm-12">
          <h1>My Videos</h1>
          <p>List of videos will come here.</p>
        </div>
      </div>
      <div className="row">
        {videos.length > 0 &&
          videos.map((video) => {
            return (
              <div className="col-sm-3 pb-3" key={video.id}>
                <VideoCard video={video} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
};
export default ProtectedRoute(DashboardPage);
