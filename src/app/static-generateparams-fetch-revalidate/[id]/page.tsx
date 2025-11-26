// Static page with URL parameter and generateStaticParams + fetch with revalidate

// Generate static params for pre-rendering
export async function generateStaticParams() {
  // Generate static params for posts 1-5
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ];
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function StaticGenerateParamsFetchRevalidate({ params }: Props) {
  const { id } = await params;
  
  // Fetch with revalidate option
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  }).then(res => res.json());

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Static Page - generateStaticParams - Fetch with Revalidate
      </h1>
      <p className="mb-4">
        This page uses generateStaticParams() to pre-render pages for IDs 1-5 and fetch() with revalidate option set to 60 seconds.
      </p>
      <div className="bg-blue-50 p-4 rounded mb-4">
        <p><strong>Pre-rendered IDs:</strong> 1, 2, 3, 4, 5</p>
        <p><strong>Current ID:</strong> {id}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-semibold">Fetched Data for ID {id}:</h2>
        <p><strong>Title:</strong> {data.title}</p>
        <p><strong>Body:</strong> {data.body}</p>
        <p><strong>Generated at:</strong> {new Date().toISOString()}</p>
      </div>
    </div>
  );
}