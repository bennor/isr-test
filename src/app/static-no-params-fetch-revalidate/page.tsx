import Link from "next/link";

export default async function StaticNoParamsFetchRevalidate() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    next: { revalidate: 60 }
  });
  const data = await response.json();
  const fetchDate = response.headers.get('date');

  return (
    <div className="min-h-screen" style={{ background: 'var(--geist-background)', color: 'var(--geist-text-primary)' }}>
      <div className="max-w-4xl mx-auto" style={{ padding: 'var(--space-12) var(--space-6)' }}>
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <Link 
            href="/" 
            className="geist-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-6)',
              padding: 'var(--space-2) var(--space-3)',
              textDecoration: 'none',
              color: 'var(--geist-text-secondary)',
              borderRadius: '6px'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="geist-label-14">Back to ISR Tests</span>
          </Link>
          <h1 className="geist-heading-36" style={{ marginBottom: 'var(--space-3)', letterSpacing: '-0.025em' }}>
            Static Page - No Params - Fetch with Revalidate
          </h1>
          <p className="geist-copy-16" style={{ color: 'var(--geist-text-secondary)' }}>
            This page uses fetch() with revalidate option set to 60 seconds.
          </p>
        </header>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <section className="geist-card" style={{ padding: 'var(--space-6)', borderColor: 'var(--geist-blue)' }}>
            <h2 className="geist-heading-20" style={{ marginBottom: 'var(--space-4)', color: 'var(--geist-text-primary)' }}>
              Implementation Details
            </h2>
            <div className="geist-card" style={{ padding: 'var(--space-4)', background: 'var(--geist-gray-50)' }}>
              <code className="geist-copy-14" style={{ fontFamily: 'var(--font-geist-mono)', color: 'var(--geist-blue)' }}>
                {`fetch('url', { next: { revalidate: 60 } })`}
              </code>
            </div>
          </section>

          <section className="geist-card" style={{ padding: 'var(--space-6)' }}>
            <h2 className="geist-heading-20" style={{ marginBottom: 'var(--space-4)', color: 'var(--geist-text-primary)' }}>
              Fetched Data
            </h2>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div>
                <dt className="geist-label-14" style={{ color: 'var(--geist-text-secondary)', marginBottom: 'var(--space-1)' }}>Title</dt>
                <dd className="geist-copy-16" style={{ color: 'var(--geist-text-primary)' }}>{data.title}</dd>
              </div>
              <div>
                <dt className="geist-label-14" style={{ color: 'var(--geist-text-secondary)', marginBottom: 'var(--space-1)' }}>Body</dt>
                <dd className="geist-copy-16" style={{ color: 'var(--geist-text-primary)' }}>{data.body}</dd>
              </div>
              <div style={{ borderTop: '1px solid var(--geist-border)', paddingTop: 'var(--space-3)' }}>
                <dt className="geist-label-14" style={{ color: 'var(--geist-text-secondary)', marginBottom: 'var(--space-1)' }}>Fetch Date Header</dt>
                <dd className="geist-copy-14" style={{ fontFamily: 'var(--font-geist-mono)', color: 'var(--geist-text-primary)' }}>{fetchDate}</dd>
              </div>
              <div>
                <dt className="geist-label-14" style={{ color: 'var(--geist-text-secondary)', marginBottom: 'var(--space-1)' }}>Generated at</dt>
                <dd className="geist-copy-14" style={{ fontFamily: 'var(--font-geist-mono)', color: 'var(--geist-text-primary)' }}>{new Date().toISOString()}</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </div>
  );
}