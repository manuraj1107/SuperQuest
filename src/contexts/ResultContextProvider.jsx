import React, {createContext, useContext, useState} from 'react'
const ResultContext = createContext();
const baseUrl = 'https://serpapi.com/search.json?';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('javascript');
    
    
    
    
    // const res = fetch(
    //   `https://serpapi.com/search.json?${parmstring}`
    // ).then((res) => {
    //  return res.json()
    // }).then(res => {
    //     console.log(res);
    // })
  
    const getResults = async () => {
      setLoading(true);
      const params = {
        q: "Coffee",
        location: "Austin, Texas, United States", 
        hl: "en",
        google_domain: "google.com",
        device: "desktop",
      };
      const parmstring = new URLSearchParams(params).toString();
  
      const res = fetch(`${baseUrl}${parmstring}`).then((res) => {
        return res.json()
       }).then(res => {
           console.log(res);
       })

  
      // const data = await res.json();
  
      // setResults(data);
      // setLoading(false);
    };
  
    return (
      <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
        {children}
      </ResultContext.Provider>
    );
  };
  
  export const useResultContext = () => useContext(ResultContext);

