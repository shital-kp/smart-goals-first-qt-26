import { handleHttpError } from './apiErrorHandler';

type QueryType = {
  apiType: 'public' | 'private';
};

//Types for countries response
interface Quote {
  
}

export async function getQuote(query: QueryType): Promise<Quote[]> {
  if (query === undefined || query === null) {
    throw new Error('query is undefined!');
  }

  const apiUrl = 'https://dummyjson.com/quotes/random';
  let fetchUrl: string;

  if (query?.apiType === 'private') {
    // This would the authenticated endpoint
    fetchUrl = `${apiUrl}`;
  } else if (query?.apiType === 'public') {
    // Public endpoint
    fetchUrl = `${apiUrl}`;
  } else {
    throw new Error('Invalid apiType in query!');
  }

  const res = await fetch(fetchUrl);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch quote data from ${fetchUrl} - Status: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (!json || json?.length === 0) {
    throw new Error('The API returned an empty array or invalid data: ', json);
  }

  return json;
}