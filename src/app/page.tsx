import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--geist-background)', color: 'var(--geist-text-primary)' }}>
      <div className="max-w-5xl mx-auto" style={{ padding: 'var(--space-20) var(--space-6)' }}>
        <header style={{ marginBottom: 'var(--space-16)' }}>
          <h1 className="geist-heading-48" style={{ marginBottom: 'var(--space-3)', letterSpacing: '-0.025em' }}>
            ISR Test Routes
          </h1>
          <p className="geist-copy-18" style={{ color: 'var(--geist-text-secondary)' }}>
            Test different Incremental Static Regeneration patterns in Next.js 16
          </p>
        </header>
        
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="geist-card" style={{ padding: 'var(--space-6)' }}>
            <h2 className="geist-heading-20" style={{ marginBottom: 'var(--space-6)', color: 'var(--geist-text-primary)' }}>
              Static Pages - No Parameters
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link 
                href="/static-no-params-fetch-revalidate"
                className="geist-button group"
                style={{ 
                  padding: 'var(--space-4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  borderColor: 'var(--geist-blue)',
                  borderRadius: '8px'
                }}
              >
                <div>
                  <div className="geist-label-16" style={{ color: 'var(--geist-text-primary)', marginBottom: 'var(--space-1)' }}>
                    Fetch with Revalidate
                  </div>
                  <div className="geist-copy-13" style={{ color: 'var(--geist-text-secondary)' }}>
                    Uses fetch() with revalidate option
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--geist-text-tertiary)' }}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
              <Link 
                href="/static-no-params-revalidate-const"
                className="geist-button group"
                style={{ 
                  padding: 'var(--space-4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  borderColor: 'var(--geist-green)',
                  borderRadius: '8px'
                }}
              >
                <div>
                  <div className="geist-label-16" style={{ color: 'var(--geist-text-primary)', marginBottom: 'var(--space-1)' }}>
                    Revalidate Const
                  </div>
                  <div className="geist-copy-13" style={{ color: 'var(--geist-text-secondary)' }}>
                    Uses export const revalidate
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--geist-text-tertiary)' }}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          </section>

          <section className="geist-card" style={{ padding: 'var(--space-6)' }}>
            <h2 className="geist-heading-20" style={{ marginBottom: 'var(--space-6)', color: 'var(--geist-text-primary)' }}>
              Static Pages - URL Parameter
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link 
                href="/static-param-fetch-revalidate/1"
                className="geist-button group"
                style={{ 
                  padding: 'var(--space-4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  borderColor: 'var(--geist-blue)',
                  borderRadius: '8px'
                }}
              >
                <div>
                  <div className="geist-label-16" style={{ color: 'var(--geist-text-primary)', marginBottom: 'var(--space-1)' }}>
                    Fetch with Revalidate
                  </div>
                  <div className="geist-copy-13" style={{ color: 'var(--geist-text-secondary)' }}>
                    Dynamic routing + fetch revalidation
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--geist-text-tertiary)' }}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
              <Link 
                href="/static-param-revalidate-const/1"
                className="geist-button group"
                style={{ 
                  padding: 'var(--space-4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  borderColor: 'var(--geist-green)',
                  borderRadius: '8px'
                }}
              >
                <div>
                  <div className="geist-label-16" style={{ color: 'var(--geist-text-primary)', marginBottom: 'var(--space-1)' }}>
                    Revalidate Const
                  </div>
                  <div className="geist-copy-13" style={{ color: 'var(--geist-text-secondary)' }}>
                    Dynamic routing + page-level revalidation
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--geist-text-tertiary)' }}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          </section>

          <section className="geist-card" style={{ padding: 'var(--space-6)', gridColumn: 'span 2' }}>
            <h2 className="geist-heading-20" style={{ marginBottom: 'var(--space-6)', color: 'var(--geist-text-primary)' }}>
              Static Pages - generateStaticParams
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="geist-label-16" style={{ marginBottom: 'var(--space-4)', color: 'var(--geist-text-primary)' }}>Fetch with Revalidate</h3>
                <div className="grid gap-2 grid-cols-5">
                  {[1, 2, 3, 4, 5].map(id => (
                    <Link 
                      key={id}
                      href={`/static-generateparams-fetch-revalidate/${id}`}
                      className="geist-button geist-label-14"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '40px',
                        textDecoration: 'none',
                        borderColor: 'var(--geist-blue)',
                        borderRadius: '6px',
                        color: 'var(--geist-text-primary)'
                      }}
                    >
                      {id}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="geist-label-16" style={{ marginBottom: 'var(--space-4)', color: 'var(--geist-text-primary)' }}>Revalidate Const</h3>
                <div className="grid gap-2 grid-cols-5">
                  {[1, 2, 3, 4, 5].map(id => (
                    <Link 
                      key={id}
                      href={`/static-generateparams-revalidate-const/${id}`}
                      className="geist-button geist-label-14"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '40px',
                        textDecoration: 'none',
                        borderColor: 'var(--geist-green)',
                        borderRadius: '6px',
                        color: 'var(--geist-text-primary)'
                      }}
                    >
                      {id}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="geist-card" style={{ marginTop: 'var(--space-12)', padding: 'var(--space-6)', borderColor: 'var(--geist-amber)' }}>
          <h3 className="geist-heading-16" style={{ marginBottom: 'var(--space-4)', color: 'var(--geist-text-primary)' }}>Testing Information</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <li className="geist-copy-14" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', color: 'var(--geist-text-secondary)' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--geist-amber)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></span>
              All pages revalidate every 60 seconds
            </li>
            <li className="geist-copy-14" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', color: 'var(--geist-text-secondary)' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--geist-blue)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></span>
              Blue borders indicate fetch() with revalidate option
            </li>
            <li className="geist-copy-14" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', color: 'var(--geist-text-secondary)' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--geist-green)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></span>
              Green borders indicate export const revalidate
            </li>
            <li className="geist-copy-14" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', color: 'var(--geist-text-secondary)' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--geist-purple)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></span>
              generateStaticParams pre-renders IDs 1-5 at build time
            </li>
            <li className="geist-copy-14" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', color: 'var(--geist-text-secondary)' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--geist-text-tertiary)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></span>
              Watch the "Generated at" timestamp to observe revalidation
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
