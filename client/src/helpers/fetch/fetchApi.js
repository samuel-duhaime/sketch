// Custom fetch API
export const fetchApi = async ({ apiUrl, method = "GET", body, setData }) => {
  try {
    // Fetch result
    const fetchResult = await fetch(apiUrl, {
      method,
      ...(["POST", "PATCH", "PUT", "DELETE"].includes(method) && {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      ...(body && { body: JSON.stringify(body) }),
    });

    const { data, status, message } = await fetchResult.json(); // Get the json response

    // For status error
    if (status !== 200) {
      throw new Error(message); // Throw error message
    }

    // If everything is good
    if (data) {
      setData(data);
    }
  } catch (err) {
    // Error
    console.error(err.message);
  }
};
