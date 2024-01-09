import React from 'react'
import bicycle from '../assets/bicycle.png'
import Homecard from '../components/Homecard'
import { useSelector } from 'react-redux'
import Cardfeature from '../components/Cardfeature'
const Home = () => {
  const productData = useSelector((state)=>state.product.productList)
console.log(productData);
const homeProductCartList = productData.slice(0,4)
console.log(homeProductCartList);
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-400 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src={bicycle} className='h-7'/>
          </div>

          <h2 className='text-4xl md:text-7xl font-bold py-3'>The Fastest Delivery at <span className='text-red-600'>your Doorstep </span> </h2>
          <p className='py-3 text-base'>Lorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now!</button>
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
            homeProductCartList[0] && homeProductCartList.map(el=>{
              return(
                <Homecard
                key={el._id}
                id={el._id}
                image = {el.image}
                name={el.name}
                category= {el.category}
                price = {el.price}
                />
              )
            })
            
          }
          


        </div>
      </div>

      <div className=''>
        <h2 className='font-bold text-2xl text-slate-800'>Fresh Vegetables</h2>
        <div className=''>
          <Cardfeature/>
        </div>
      </div>
    </div>
  )
}

export default Home
