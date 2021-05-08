import React from 'react';
import VideoSubmitForm from '../../../components/forms/video-submit-form';
import Layout from '../../../components/layout';
import PageHeader from '../../../components/page-header';

const VideoSubmitPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Submit your Video"
        description="Submit your video entry through this form. Once your video is moderated and published, your video will be visible."
      />
      <div className="row">
        <div className="col-sm-6 pb-5 mt-3">
          <div className="card col-4 shadow w-100">
            <div className="card-body">
              <VideoSubmitForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default VideoSubmitPage;
