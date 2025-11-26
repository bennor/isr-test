import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function StaticParamFetchRevalidate({ params }: Props) {
  const { id } = await params;
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 }
  });
  const data = await response.json();
  const fetchDate = response.headers.get('date');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to ISR Tests
          </Link>
          <h1 className="text-3xl font-semibold mb-3 tracking-tight">
            Static Page - URL Param - Fetch with Revalidate
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            This page uses URL parameter "{id}" and fetch() with revalidate option set to 60 seconds.
          </p>
        </header>
        
        <div className="space-y-6">
          <section className="border border-blue-200 dark:border-blue-800 rounded-lg p-6 bg-blue-50/50 dark:bg-blue-950/20">
            <h2 className="text-lg font-medium mb-4 text-blue-900 dark:text-blue-100">
              Implementation Details
            </h2>
            <div className="bg-white/80 dark:bg-black/80 rounded-lg p-4 space-y-2">
              <div className="font-mono text-sm">
                <span className="text-gray-500 dark:text-gray-400">URL Parameter:</span>
                <code className="ml-2 text-purple-700 dark:text-purple-300">{id}</code>
              </div>
              <div className="font-mono text-sm">
                <code className="text-blue-700 dark:text-blue-300">
                  {`fetch(\`/posts/\${id}\`, { next: { revalidate: 60 } })`}
                </code>
              </div>
            </div>
          </section>

          <section className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white/50 dark:bg-black/50">
            <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
              Fetched Data for ID {id}
            </h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Title</dt>
                <dd className="text-gray-900 dark:text-gray-100">{data.title}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Body</dt>
                <dd className="text-gray-900 dark:text-gray-100">{data.body}</dd>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Fetch Date Header</dt>
                <dd className="text-gray-900 dark:text-gray-100 font-mono text-sm">{fetchDate}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Generated at</dt>
                <dd className="text-gray-900 dark:text-gray-100 font-mono text-sm">{new Date().toISOString()}</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </div>
  );
}