import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link href="/" className="btn-primary">
        Go Home
      </Link>
    </div>
  );
}
