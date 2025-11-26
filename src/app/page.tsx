import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
          ISR Test Routes
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
              Static Pages - No Parameters
            </h2>
            <div className="space-y-2">
              <Link 
                href="/static-no-params-fetch-revalidate"
                className="block p-3 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
              >
                Fetch with Revalidate
              </Link>
              <Link 
                href="/static-no-params-revalidate-const"
                className="block p-3 bg-green-50 dark:bg-green-900 rounded hover:bg-green-100 dark:hover:bg-green-800 transition-colors"
              >
                Revalidate Const
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
              Static Pages - URL Parameter
            </h2>
            <div className="space-y-2">
              <Link 
                href="/static-param-fetch-revalidate/1"
                className="block p-3 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
              >
                Fetch with Revalidate (ID: 1)
              </Link>
              <Link 
                href="/static-param-revalidate-const/1"
                className="block p-3 bg-green-50 dark:bg-green-900 rounded hover:bg-green-100 dark:hover:bg-green-800 transition-colors"
              >
                Revalidate Const (ID: 1)
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow md:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
              Static Pages - URL Parameter + generateStaticParams
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2 text-black dark:text-white">Fetch with Revalidate</h3>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map(id => (
                    <Link 
                      key={id}
                      href={`/static-generateparams-fetch-revalidate/${id}`}
                      className="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors text-sm"
                    >
                      ID: {id}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-black dark:text-white">Revalidate Const</h3>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map(id => (
                    <Link 
                      key={id}
                      href={`/static-generateparams-revalidate-const/${id}`}
                      className="block p-2 bg-green-50 dark:bg-green-900 rounded hover:bg-green-100 dark:hover:bg-green-800 transition-colors text-sm"
                    >
                      ID: {id}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
          <h3 className="font-semibold mb-2 text-black dark:text-white">Testing Notes:</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• All pages revalidate every 60 seconds</li>
            <li>• Blue links use fetch() with revalidate option</li>
            <li>• Green links use export const revalidate</li>
            <li>• generateStaticParams pre-renders IDs 1-5 at build time</li>
            <li>• Watch the "Generated at" timestamp to observe revalidation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
