import React, {createContext, useContext, useState} from 'react'


const ResultContext = createContext();
const baseUrl = `https://youtube-v2.p.rapidapi.com`;

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('javascript');
  
    const getResults = async (url) => {
      setLoading(true);
  
      const res = await fetch(`${baseUrl}${url}`, {
        method: 'GET',
        params: { lang: 'en', country: 'us'},
        headers: {
          'X-RapidAPI-Key': 'process.env.REACT_APP_API_KEY',
          'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
      },
    });
  
      const data = await res.json();
  
      setResults(data);
      setLoading(false);
    };
  
    return (
      <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
        {children}
      </ResultContext.Provider>
    );
  };
  
  export const useResultContext = () => useContext(ResultContext);

