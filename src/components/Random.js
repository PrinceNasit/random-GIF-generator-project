import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
// const API_KEY='X0aTXjond329nZJnIyitIc287l3jjxwY'

export default function Random() {

  //   const[gif,setGif]=useState('');
  //   const[loading,setLoading]=useState(false);
    
  //   async function fetchData(){
  //     setLoading(true);
  //     // console.log(API_KEY);
  //      const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const {data}=await axios.get(url);
  //     const imagesource = data.data.images.downsized_large.url;
  //     setGif(imagesource);
  //     setLoading(false);
  //     // console.log(imagesource);
  //  }
  //  useEffect(()=>{
  //  fetchData();
  //  },[])
  const{gif,loading,fetchData}=useGif();

 function clickHandler(){
   fetchData();
 }
  return (
    <div className='w-1/2  bg-green-500 
    flex flex-col items-center gap-y-5 mt-[15px] rounded-lg border border-black'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
      {
        loading?(<Spinner/>):(<img src={gif} alt='' width="450" />)
      }
      
      <button className='w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 opacity-80 rounded-lg'
       onClick={clickHandler}>Generate</button>
    </div>
  )
}
