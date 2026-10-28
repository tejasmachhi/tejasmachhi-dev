export default function Loading() {
  return (
    <div className="loading-container">
      <div className="skeleton-loader">
        {/* Header Skeleton */}
        <div className="skeleton-header">
          <div className="skeleton-badge"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-subtitle"></div>
        </div>

        {/* Experience Cards Skeleton */}
        <div className="skeleton-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="skeleton-card">
              <div className="skeleton-card-header">
                <div className="skeleton-icon"></div>
                <div className="skeleton-company-info">
                  <div className="skeleton-company-name"></div>
                  <div className="skeleton-position"></div>
                </div>
              </div>
              <div className="skeleton-meta">
                <div className="skeleton-meta-item"></div>
                <div className="skeleton-meta-item"></div>
              </div>
              <div className="skeleton-content">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
              </div>
              <div className="skeleton-tech">
                <div className="skeleton-tech-label"></div>
                <div className="skeleton-tech-tags">
                  <div className="skeleton-tag"></div>
                  <div className="skeleton-tag"></div>
                  <div className="skeleton-tag"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
