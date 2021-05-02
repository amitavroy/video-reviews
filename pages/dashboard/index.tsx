import Layout from '../../components/layout';
import { ProtectedRoute } from '../../components/protected-route';

const DashboardPage = () => {
  return (
    <Layout>
      <p>This is the dashboard</p>
    </Layout>
  );
};
export default ProtectedRoute(DashboardPage);
