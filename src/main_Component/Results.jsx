import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    useEffect(() => {
      if (searchTerm !== '') {
        if (location.pathname === '/videos') {
          getResults(``);
        } else {
          getResults(``);
        }
      }
    }, [searchTerm, location.pathname]);
    
    if(isLoading) return <Loading />;

    
    switch (location.pathname) {
        case '/search':
            return (
                <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
          ))}
        </div>
            );
        case '/videos':
          return (
            <div className="flex flex-wrap ">
              {results?.results?.map((video, index) => (
                <div key={index} className="p-2">
                  <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
                </div>
              ))}
            </div>
          );    
        
        default:
            return 'ERROR!';    
    }
  
}

export default Results