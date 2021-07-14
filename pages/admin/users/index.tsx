import { useEffect, useState } from 'react';
import Layout from '../../../components/layout';
import PageHeader from '../../../components/page-header';
import { ProtectedRoute } from '../../../components/protected-route';
import { IUser } from '../../../contracts/IUser';
import UserService from '../../../services/user.service';

const pageTitle = 'User list';
const UserListingPage = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const resp = await UserService.getUserListingForAdmin();
    if (resp.status === 200) setUserData(resp.data.data);
  };
  return (
    <Layout pageTitle={pageTitle}>
      <PageHeader title={pageTitle} />
      {userData && (
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Email verified at</th>
            </tr>
          </thead>
          <tbody>
            {userData.data.length > 0 &&
              userData.data.map((user: IUser, index) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className="uc-first">{user.role}</td>
                    <td>{user.email_verified_at}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </Layout>
  );
};
export default ProtectedRoute(UserListingPage);
