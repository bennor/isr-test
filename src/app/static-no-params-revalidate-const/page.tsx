// Static page with no parameters + revalidate const
export const revalidate = 60; // Revalidate every 60 seconds

export default async function StaticNoParamsRevalidateConst() {
  // Regular fetch without revalidate option (uses page-level revalidate)
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(res => res.json());

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Static Page - No Params - Revalidate Const
      </h1>
      <p className="mb-4">
        This page uses export const revalidate = 60 for page-level revalidation.
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