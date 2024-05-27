import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return(
   <div className=" h-screen flex flex-col background items-center overflow-x-hidden relative">
    <h1 className="bg-white rounded-lg font-bold w-11/12
     mt-[40px] text-center py-2 text-4xl">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
     <Random/>
     <Tag/>
      </div>
   </div>
  );
}
