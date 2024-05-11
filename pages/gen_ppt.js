import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import axios from 'axios';

const DonorPage = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState("Generating...");
  
    // const sendMessage = async () => {
    //   try {
    //     const response = await axios.post('http://localhost:8080/send-message', { searchQuery }); // Change the URL to include port 8080
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error('Error sending message:', error);
    //   }
    // };
  
  
    const handleSearch = async () => {
      try {
  
        const response = await axios.post('http://localhost:8000/send-gen-ppt', { searchQuery }); // Change the URL to include port 
        console.log(response.data);
        console.log("Goes....")
  
        const req = await fetch("http://localhost:8000/revert-gen-ppt")
        .then(req =>  req.json())
        .then(
          (data) => { 
            console.log(data);
            setSearchResults(data.message);
        });
      
        
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

      {/* <div className={styles.header}>
        <button className={styles.donateButton} onClick={() => router.push('/donor_side')}>
          Donate
        </button>
      </div> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Reach out </span>
        </h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Enter your NPO's description"
            value={searchQuery}
            onChange={(e) => {setSearchQuery(e.target.value);
                console.log(searchQuery);
            }}
            className={styles.searchInput_long}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Generate
          </button>
        </div>

        <div className={styles.resultsContainer}>
          {/* {searchResults.map((donor, index) => (
            <div key={index} className={styles.donorItem}>
              <h3 className={styles.donorName}>{donor}</h3>
            </div>
          ))} */}

          {/* {searchResults.map((name,index) =>(
            <div key={index} className={styles.donorItem}>
              <h3 className={styles.donorName}>{name}</h3>
            </div>
          ))} */}
          {
            searchResults
          }

        </div>
      </main>

      {/* <footer className={styles.footer}>
        <p>&copy; 2023 Semantic Search for Donors. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default DonorPage;