export async function GET() {
  try {
    // Use the server URL from environment or fallback to the hardcoded one for development
    const apiUrl = process.env.SERVER_API_URL || "http://147.93.29.202:5000/api/blogs";
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Revalidate the data every 60 seconds
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: data.message || 'Failed to fetch blogs' 
      }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in blogs API route:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Server error occurred' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 