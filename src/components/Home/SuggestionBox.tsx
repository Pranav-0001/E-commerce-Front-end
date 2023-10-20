import React, { useState } from 'react'
import { popular, suggestion } from '../../services/products';
import { Product } from '../../models/product';
import SuggestionCard from './SuggestionCard';


const SuggestionBox = () => {
  const data:Product[]=suggestion()

  const [trending,setTrending]=useState<Product[]>(data)
  const [popularData,setPopularData]=useState<string[]>(popular())  
  return (
    <div className='w-full flex justify-center pt-2'>
      <div className='lg:w-1/2 md:w-3/4 w-full  bg-white rounded px-4 pt-4 pb-6 items-center'>
        <h1 className='text-lg font-bold'>Latest Trends</h1>
        <div className='pt-4 grid grid-cols-5 gap-2'>
            {trending.map((product,i)=>
            <SuggestionCard key={i} product={product}/>
            )}
        </div>

        <h1 className='text-lg font-bold pt-6 pb-3'>Popular suggestions</h1>
        {popularData.map((product,i)=>
        <li className='list-none text-sm py-1 cursor-pointer hover:text-blue-500' key={i}>{product}</li>
        )}
        
      </div>
    </div>
  )
}

export default SuggestionBox
