// Static page with URL parameter + revalidate const
export const revalidate = 60; // Revalidate every 60 seconds

interface Props {
  params: Promise<{ id: string }>;
}

export default async function StaticParamRevalidateConst({ params }: Props) {
  const { id } = await params;
  
  // Regular fetch without revalidate option (uses page-level revalidate)
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json());

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Static Page - URL Param - Revalidate Const
      </h1>
      <p className="mb-4">
        This page uses URL parameter "{id}" and export const revalidate = 60 for page-level revalidation.
      </p>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-semibold">Fetched Data for ID {id}:</h2>
        <p><strong>Title:</strong> {data.title}</p>
        <p><strong>Body:</strong> {data.body}</p>
        <p><strong>Generated at:</strong> {new Date().toISOString()}</p>
      </div>
    </div>
  );
}