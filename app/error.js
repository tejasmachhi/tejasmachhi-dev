'use client';

export default function Error({ error, reset }) {
  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <p>We apologize for the inconvenience. Please try again.</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
