export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Use the server URL from environment or fallback to the hardcoded one for development
    const apiUrl = process.env.SERVER_API_URL || "http://147.93.29.202:5000/api/enquiries";
    
    console.log(`Proxying request to: ${apiUrl}`);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': process.env.NEXT_PUBLIC_BASE_URL || 'https://swansorter.com',
      },
      body: JSON.stringify(formData),
      // Add a timeout to prevent hanging requests
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });
    
    // Handle non-JSON responses
    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error("Non-JSON response:", text);
      data = { message: "Received non-JSON response from server" };
    }
    
    if (!response.ok) {
      console.error("Error response from API:", response.status, data);
      return new Response(JSON.stringify({ 
        success: false, 
        message: data.message || 'Failed to submit enquiry',
        status: response.status
      }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Enquiry submitted successfully', 
      data 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in enquiries API route:', error);
    // More detailed error information for troubleshooting
    const errorInfo = {
      message: error.message,
      name: error.name,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    };
    
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Server error occurred',
      error: errorInfo
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 