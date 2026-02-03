import { handleHttpError } from './apiErrorHandler';

type QueryType = {
  apiType: 'public' | 'private';
};

//Types for countries response
interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  region: string;
  population: number;
}

export async function getAllCountries(query: QueryType): Promise<Country[]> {
  if (query === undefined || query === null) {
    throw new Error('query is undefined!');
  }

  const apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags,region,population';
  let fetchUrl: string;

  if (query?.apiType === 'private') {
    // This would be your authenticated endpoint
    fetchUrl = `${apiUrl}`;
  } else if (query?.apiType === 'public') {
    // Public endpoint
    fetchUrl = `${apiUrl}`;
  } else {
    throw new Error('Invalid apiType in query!');
  }

  const res = await fetch(fetchUrl);

  if (!res.ok) {
    handleHttpError(fetchUrl, res.status, res.statusText);
  }

  const json = await res.json();

  if (!Array.isArray(json) || json.length === 0) {
    console.warn('No countries data returned');
    return [];
  }

  return json;
}