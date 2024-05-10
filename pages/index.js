import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      })
      .then(response => {
        return response.json();
      })
      .then(json => {
        if (!json || typeof json.foo != 'string') {
          // Record an error, the payload is not the expected shape.
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.donors);
      } else {
        console.error('Search request failed.');
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Semantic Search for Donors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <button className={styles.donateButton} onClick={() => router.push('/donor_side')}>
          Donate
        </button>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Semantic Search</span> for Donors
        </h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Enter your search query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Search
          </button>
        </div>

        <div className={styles.resultsContainer}>
          {searchResults.map((donor, index) => (
            <div key={index} className={styles.donorItem}>
              <h3 className={styles.donorName}>{donor}</h3>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Semantic Search for Donors. All rights reserved.</p>
      </footer>
    </div>
  );
}