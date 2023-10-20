import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faStar,faClose } from '@fortawesome/free-solid-svg-icons'
import { results } from '../../services/products'
import ProductCard from './ProductCard'

const Main = () => {
    const initialProducts=results()
    const brands=Array.from(new Set(initialProducts.map(e=>e.brand)))

    const [products,setProducts]=useState(initialProducts)
    const [selectedFilter,setSelectedFilter]=useState('')
    const filter=(brand:string)=>{
        setSelectedFilter(brand)
        setProducts(initialProducts.filter((pro)=>pro.brand==brand))
    }
  return (
    <div className='px-6'> 
      <div className='w-full flex justify-end pt-6  '>
        <img src="images/zevilogo.png" alt="logo" width={50} />
      </div>
      <div className='w-full flex justify-center px-6 pt-10 '>
        <div className='lg:w-1/2 md:w-3/4 w-full  bg-white shadow border h-10 rounded-lg px-4 flex items-center'>
          <input type="text"  className='h-full bg-transparent outline-none w-full'/>
          <FontAwesomeIcon icon={faSearch } className='text-gray-500 text-xl'/>
        </div>
         
      </div>
      <h1 className='text-xl  mt-8'>Search Results</h1>
      <div className='w-full flex mt-10 gap-2 px-6'>
      
        <div className='md:w-1/5 hidden md:block'>
            <div className=''>
                <h1 className='pb-3'>Brands</h1>
               {selectedFilter&& <p className='rounded-xl shadow flex gap-2 items-center w-fit border px-3 py-1 mb-2'>{selectedFilter} <FontAwesomeIcon onClick={()=>{setSelectedFilter('');setProducts(initialProducts)}} icon={faClose}/></p>}
                {
                    brands.map((brand)=><li  className='list-none'><input onChange={()=>filter(brand)} checked={brand==selectedFilter} type="checkbox" name="" id="" /> {brand}</li>)
                }

            </div>
        </div>
        <div className='w-full  md:w-4/5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 gap-2 pb-10'>
            {products.map((product)=><ProductCard product={product} setProduct={setProducts} products={products}/>)}

        </div>
      </div>
    </div>
  )
}

export default Main
