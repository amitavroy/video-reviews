export const LoginForm = () => {
  return (
    <div className="p-2">
      <form action="#">
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <span className="me-3">
            <button className="btn btn-success mr-3">Login</button>
          </span>
          <a href="#">Forgot password</a>
        </div>
      </form>
    </div>
  );
};
