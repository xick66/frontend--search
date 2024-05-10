// export default function handler(req, res) {
//     if (req.method === 'POST') {
//       const { query } = req.body;
//       // TODO: Implement the semantic search logic using the query
//       // Return the search results as JSON
//       const searchResults = [
//         { name: 'Donor 1', cause: 'Water Conservation' },
//         { name: 'Donor 2', cause: 'Water Sanitation' },
//         // Add more search results based on the query
//       ];
//       res.status(200).json({ donors: searchResults });
//     } else {
//       res.status(405).json({ message: 'Method not allowed' });
//     }
//   }



//   async function fetchData() {
//     try {
//       const response = await fetch('http://localhost:5000/api', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({x: 123, y: 456})
//       });
//       const data = await response.json();
//       console.log(data.result);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  

import axios from 'axios';

export default async (req, res) => {
  const { method, body } = req;

  // Proxy the request to the Jupyter notebook
  try {
    const notebookResponse = await axios({
      method,
      url: 'http://localhost:5000/api',
      data: body,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Return the response from the notebook as the API response
    res.status(notebookResponse.status).json(notebookResponse.data);
    console.log(res.body);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
