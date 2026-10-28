export default function AboutLoading() {
  return (
    <div className="loading-container">
      <div className="skeleton-loader">
        {/* About Page Header Skeleton */}
        <div className="skeleton-header">
          <div className="skeleton-badge"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-subtitle"></div>
        </div>

        {/* About Content Skeleton */}
        <div className="skeleton-about-content">
          <div className="skeleton-about-grid">
            {/* Left Column - Text Content */}
            <div className="skeleton-about-left">
              <div className="skeleton-card">
                <div className="skeleton-line long"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
              </div>
              
              <div className="skeleton-card">
                <div className="skeleton-section-title"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
              </div>
            </div>

            {/* Right Column - Skills/Stats */}
            <div className="skeleton-about-right">
              <div className="skeleton-card">
                <div className="skeleton-section-title"></div>
                <div className="skeleton-skills">
                  {[1, 2, 3, 4, 5, 6].map((skill) => (
                    <div key={skill} className="skeleton-skill-item">
                      <div className="skeleton-skill-bar"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
