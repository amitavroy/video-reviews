import Link from 'next/link'
export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="card col-3 shadow">
        <div className="card-body text-center">
          <h1>Welcome to <Link href="/login"><a>Login</a></Link></h1>
        </div>
      </div>
    </div>
  );
}
