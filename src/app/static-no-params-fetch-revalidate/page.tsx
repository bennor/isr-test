// Static page with no parameters + fetch with revalidate
export default async function StaticNoParamsFetchRevalidate() {
  // Fetch with revalidate option
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  }).then(res => res.json());

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Static Page - No Params - Fetch with Revalidate
      </h1>
      <p className="mb-4">
        This page uses fetch() with revalidate option set to 60 seconds.
      </p>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-semibold">Fetched Data:</h2>
        <p><strong>Title:</strong> {data.title}</p>
        <p><strong>Body:</strong> {data.body}</p>
        <p><strong>Generated at:</strong> {new Date().toISOString()}</p>
      </div>
    </div>
  );
}