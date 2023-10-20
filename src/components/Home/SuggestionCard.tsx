import React from 'react'
import { Product } from '../../models/product'

const SuggestionCard:React.FC<{product:Product}> = ({product}) => {
  return (
    <div className='w-full '>
        <img src={product.image} className='max-h-48' alt="" />
        <h1 className='text-sm '>{product.name}</h1>
    </div>
  )
}

export default SuggestionCard
