import React, { useState } from 'react'
import {BsCloudUpload} from 'react-icons/bs'
import { ImageToBase64 } from "../utility/imaheToBase64";
const NewProduct = () => {

  const [data,setData] = useState({
    name:"",
    category:"",
    image:"",
    price:"",
    description:""

  })

  const handleOnChange = (e)=>{
      const {name,value} = e.target;
      setData((preve)=>{
        return{
          ...preve,
          [name]:value
        }
      })

  }
const uploadImage =async (e)=>{
  const data = await ImageToBase64(e.target.files[0]);
  setData((preve)=>{
    return{
      ...preve,
      image:data
    }
  })
  console.log(data);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(data)
}

  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange}/>
      <label name="category">Category</label>
      <select className='bg-slate-200 p-1 my-1 ' name="category" id='category' onChange={handleOnChange}>
        <option>Fruits</option>
        <option>Vegetable</option>
        <option>Icecream</option>
        <option>Dosa</option>
        <option>Pizza</option>
                
      </select>

      <label htmlFor="image">Image
      <div className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer'>
        {
          data.image?<img src={data.image} className="h-full"/>:<span className='text-5xl'><BsCloudUpload/></span>
        }
        
        
        <input type={"file"} accept='image/*' id="image" onChange={uploadImage} className='hidden'/>
      </div>
      </label>

      <label htmlFor="price" className='my-1'>Price</label>
      <input type={"text"} className='bg-slate-200 p-1 my-1'name="price" onChange={handleOnChange}/>

      <label htmlFor="description"  className='my-1'>Description</label>
      <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name="description" onChange={handleOnChange}></textarea>

      <button className='bg-red-500 hover:bg-red-600 tex-white text-lg font-m drop-shadow my-1 mx-1'>Save</button>


      </form>
    </div>
  )
}

export default NewProduct
