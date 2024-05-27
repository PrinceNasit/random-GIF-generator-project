import { useState,useEffect } from 'react';
import  axios  from 'axios';


const API_KEY='X0aTXjond329nZJnIyitIc287l3jjxwY'
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

export default function useGif(tag) {

    const[gif,setGif]=useState('');
    const[loading,setLoading]=useState(false);
    
    async function fetchData(tag){
      setLoading(true);
    //   // console.log(API_KEY);
    //    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const {data}=await axios.get(tag ?`${url}&tag=${tag}`:(url));
      const imagesource = data.data.images.downsized_large.url;
      setGif(imagesource);
      setLoading(false);
      // console.log(imagesource);
   }
   useEffect(()=>{
   fetchData();
   },[])

   return{gif,loading,fetchData};
}
