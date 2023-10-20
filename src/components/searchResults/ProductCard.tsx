import React from 'react'
import { Product } from '../../models/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, } from '@fortawesome/free-regular-svg-icons'
import { faHeart as heartFill, faStar } from '@fortawesome/free-solid-svg-icons'


const ProductCard: React.FC<{ product: Product, setProduct: Function, products: Product[] }> = ({ product, setProduct, products }) => {
    const addToWishList = (name: string) => {
        const newArr = products.map((e) => {
            if (name == e.name) return { ...e, inWishlist: true }
            else return e
        })
        setProduct(newArr)
    }
    const removeFromWishList = (name: string) => {
        const newArr = products.map((e) => {
            if (name == e.name) return { ...e, inWishlist: false }
            else return e
        })
        setProduct(newArr)
    }

    return (
        <div className='w-full  '>
            <div className="relative flex justify-end bg-black h-80 bg-no-repeat bg-center bg-cover " style={{ backgroundImage: `url(${product.image})` }}>
                {product.inWishlist ? <FontAwesomeIcon onClick={() => removeFromWishList(product.name)} className='text-lg text-red-600 cursor-pointer relative top-4 right-4' icon={heartFill} /> : <FontAwesomeIcon onClick={() => addToWishList(product.name)} className='text-lg text-white cursor-pointer relative top-4 right-4' icon={faHeart} />}
                <div className='absolute bottom-0 w-full h-72  opacity-0 hover:opacity-100 bg-transparent'>
                    <div className=' absolute bottom-0 w-full h-14 bg-violet-500 opacity-90 flex justify-center items-center text-white'>
                        <h1 >View Product</h1>
                    </div>
                </div>
            </div>

            <h1>{product.name}</h1>
            <p className='text-sm text-gray-400'>{product.brand}</p>
            <p className='flex gap-2'><span className='text-gray-400 line-through'>Rs.{parseInt(product.price) + 50} </span><span className='text-[#6D84FF]'>Rs.{product.price}</span></p>
            <div className='flex'>
                {product.rating.map((e) => <p><FontAwesomeIcon className='text-yellow-400' icon={faStar} /></p>)}<span className='text-gray-400 '>(210)</span>
            </div>
        </div>
    )
}

export default ProductCard
