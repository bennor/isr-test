// Static page with URL parameter + fetch with revalidate
interface Props {
  params: Promise<{ id: string }>;
}

export default async function StaticParamFetchRevalidate({ params }: Props) {
  const { id } = await params;
  
  // Fetch with revalidate option
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  const data = await response.json();
  const fetchDate = response.headers.get('date');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Static Page - URL Param - Fetch with Revalidate
      </h1>
      <p className="mb-4">
        This page uses URL parameter "{id}" and fetch() with revalidate option set to 60 seconds.
      </p>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-semibold">Fetched Data for ID {id}:</h2>
        <p><strong>Title:</strong> {data.title}</p>
        <p><strong>Body:</strong> {data.body}</p>
        <p><strong>Fetch Date Header:</strong> {fetchDate}</p>
        <p><strong>Generated at:</strong> {new Date().toISOString()}</p>
      </div>
    </div>
  );
}