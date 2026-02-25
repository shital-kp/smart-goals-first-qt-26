import React from 'react'
import QuoteComponent from './QuoteComponent/QuoteComponent'
import { get } from 'http';
import { getQuote } from '@/app/services/getQuote';

const page = async () => {

  let quote;
  try {
    quote = await getQuote({ apiType: 'private' });
  } catch (error) {
    console.log('Error Getting Quote Data', error);
    quote = {
      quote: 'Failed to fetch quote. Please try again later.',
      author: 'Unknown'
    };
  }

  return (
    <div>
      <h1>Client-Side Implementation</h1>

      <QuoteComponent quoteData={quote} />
    </div>
  )
}

export default page