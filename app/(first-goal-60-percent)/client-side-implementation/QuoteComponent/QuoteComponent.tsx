'use client'
import { useState } from 'react';
import styles from './QuoteComponent.module.scss'
import { getQuote } from '@/app/services/getQuote';

const QuoteComponent = (quoteData) => {

  const { quote, author } = quoteData?.quoteData;

  const [quoteState, setQuoteState] = useState<string>(quote);
  const [authorState, setAuthorState] = useState<string>(author);
  const [loading, setLoading] = useState(false);
  const [isClientSide, setIsClientSide] = useState(false);

  const triggerQuoteFetch = async () => {
    setLoading(true);
    try {
      const qData = await getQuote({ apiType: 'private' });
      
      if (qData) {
        setQuoteState(qData.quote);
        setAuthorState(qData.author);
        // for the label in the card header
        setIsClientSide(true);
      }
    } catch (error) {
      setQuoteState('Failed to fetch new quote. Please try again later.');
      setAuthorState('Unknown');
      console.error('Error fetching new quote:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.quoteCard}>
        {/* Decorative Quote Mark */}
        <span className={styles.quoteMark}>&ldquo;</span>
        
        <div className={styles.content}>
          <div className={styles.header}>
            <p className={styles.category}>Quote</p>
            <p className={isClientSide ? styles.labelClient : styles.labelServer}>
              {isClientSide ? 'Client Side' : 'Server Side'}
            </p>
          </div>
          <blockquote className={`${styles.quoteText} ${loading ? styles.loading : ''}`}>
            {quoteState}
          </blockquote>
          <hr className={styles.divider} />
          <div className={styles.author}>
            <div className={styles.button}>
              <button onClick={triggerQuoteFetch} disabled={loading}>
                {loading ? 'Loading...' : 'Get New Quote'}
              </button>
            </div>
            <div className={styles.authorName}>— {authorState}</div>
          </div>
        </div>
        
        {/* Subtle background decoration */}
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default QuoteComponent