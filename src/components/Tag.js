import React from 'react'
import { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
// const API_KEY='X0aTXjond329nZJnIyitIc287l3jjxwY'

export default function Tag() {

    const[tag,setTag]=useState('krishna');
    // const[gif,setGif]=useState('');
    // const[loading,setLoading]=useState(false);
    
  //   async function fetchData(){
  //     setLoading(true);
  //     // console.log(API_KEY);
  //      const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const {data}=await axios.get(url);
  //     const imagesource = data.data.images.downsized_large.url;
  //     setGif(imagesource);
  //     setLoading(false);
  //     // console.log(imagesource);
  //  }

  //  useEffect(()=>{
  //  fetchData();
  //  },[])
//  function clickHandler(){
//    fetchData();
//  }

 const{gif,loading,fetchData}=useGif(tag);
  return (
    <div className='w-1/2  bg-blue-500 
    flex flex-col items-center gap-y-5 mt-[15px] rounded-lg border border-black'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
        loading?(<Spinner/>):(<img src={gif} alt='' width="450" />)
      }
      <input 
      type="text"
      className='w-10/12 text-lg py-2 text-center mb-[3px] rounded-lg'
      onChange={(event)=>setTag(event.target.value)}
      value={tag}
      />
      <button className='w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 opacity-80 rounded-lg'
       onClick={()=> fetchData(tag)}>Generate</button>
    </div>
  )
}
