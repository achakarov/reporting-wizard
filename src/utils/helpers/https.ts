export const fetchData = async (
  url: string,
  isJson: boolean = true
): Promise<any> => {
  try {
    const response = await fetch(url);
    await handleFetchResponse(response);
    return isJson ? response.json() : response.text();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const handleFetchResponse = async (response: Response): Promise<Response> => {
  if (!response.ok) {
    throw new Error(
      `Network response was not ok: ${response.statusText} (Status Code: ${response.status})`
    );
  }
  return response;
};
