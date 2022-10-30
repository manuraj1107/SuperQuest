// import react from {react};
import { useState } from "react";
import data from "../helper/apiData";
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function SearchData() {
    const [showData, setShowData] = useState([]);
    const [userInput, setUserInput] = useState("");
    const handleClick = () => {
        const result = data.filter((ele) => (ele.query.includes(userInput.toLowerCase())));
        // console.log(result)

        setShowData([...result])  
    }

//    {sourceName,link,tag,titleAns,description,code} = ele["output"]

    return (
        <>
        <div className="relative  sm:-mt-10 mt-3">
      <input
        value={userInput}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search or type the question"
        onChange={(e) => setUserInput(e.target.value)}
      />
      {userInput !== '' && (<button className="absolute top-2.5 right-4 text-lg text-gray-500 " onClick={handleClick}>Search</button>)}
    </div>
            
            {
                showData.map((ele)=>(
                   
                        <div key={ele.id} className='lg:w-1/3 md:w-2/3 border-r-6 mb-5'>
                        
                        <div className="relative bg-white dark:bg-gray-600 p-6 w-[100%] ">
                    
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-gray-800 dark:text-white text-2xl">
                            {ele["output"]["titleAns"]}
                          </p>
                          <p className="text-sm font-medium text-gray-500 dark:text-orange-500">
                            {ele["output"]["sourceName"]}
                          </p>
                        </div>
                  </div>
                        
                            <div className="bg-gray-50 dark:bg-slate-800 p-4 h-max">
                            { ele["output"]["tag"] === 'video'?(
                              <>
                              <div className="w-60 h-max mb-3">
                              <iframe width="460" height="275" src="https://www.youtube.com/embed/qnA_h_PzJD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              
                              </div>
                              <div className="flex items-center mb-2 w-[100%]">
                        <p className="text-md font-medium text-gray-700  dark:text-gray-300 ">
                          {ele["output"]["description"]}
                        </p>
                      </div>
                              </>):
                            (
                              <a
                      href='#'
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center mb-2 w-[100%]">
                        <p className="text-md font-medium text-gray-700  dark:text-gray-300 ">
                          {ele["output"]["description"]}
                        </p>
                      </div>
                      <pre className="block text-sm sm:text-xs p-6 text-left w-full bg-zinc-300 dark:bg-slate-700 text-gray-700 dark:text-gray-200">
                        <code className='w-max p-2 '>{ele["output"]["code"]}</code>
                      </pre>

                      <div className="block text-sm mt-5 text-gray-500">
                        <a className="text-blue-700" href={ele["output"]["link"]}>check out</a>
                      </div>
                    </a>
                            )
                               
                            }
                    
                  </div>
                        </div>
                    
                ))
            }
        </>
    )
}


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qnA_h_PzJD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}