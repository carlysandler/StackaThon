import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log('Hi there!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'manhattan'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrMessage('Something went wrong');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchApi('sushi');
  }, []);

  return [searchApi, results, errMessage];
};
