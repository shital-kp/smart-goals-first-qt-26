export function handleHttpError(url: string, status: number, statusText: string ): never {
  let errorMessage = "";

  switch (status) {
    case 400:
      errorMessage = `Bad Request: The request was invalid or malformed`;
      break;
    case 401:
      errorMessage = `Unauthorized: Authentication is required`;
      break;
    case 403:
      errorMessage = `Forbidden: You don't have permission to access this resource`;
      break;
    case 404:
      errorMessage = `Not Found: The requested resource was not found`;
      break;
    case 500:
      errorMessage = `Internal Server Error: Something went wrong on the server`;
      break;
    case 502:
      errorMessage = `Bad Gateway: Invalid response from upstream server`;
      break;
    case 503:
      errorMessage = `Service Unavailable: Server is temporarily unavailable`;
      break;
    default:
      errorMessage = `HTTP Error ${status}: ${statusText}`;
  }
  console.error(
    `Failed to fetch from ${url} | ${status} ${statusText} - ${errorMessage}`,
  );
  throw new Error(errorMessage);
}
