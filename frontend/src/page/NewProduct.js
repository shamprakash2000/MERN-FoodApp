import React, { useState } from 'react'
import {BsCloudUpload} from 'react-icons/bs'
import { ImageToBase64 } from "../utility/imaheToBase64";
import toast from 'react-hot-toast';
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

const handleSubmit = async(e)=>{
  e.preventDefault();

  const {name,image,category,price}=data
  if(name && image && category && price){
    
  console.log(data)

  const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}uploadProduct`,{
    method:"POST",
    headers:{
      "content-type":"application/json"

    },
    body:JSON.stringify(data)
  })
  const fetchRes= await fetchData.json()
  console.log(fetchRes);
  toast(fetchRes.message)
  setData(()=>{
    return{
    name:"",
    category:"",
    image:"",
    price:"",
    description:""
    }
  })

  }
  else{
    toast("Enter all the fields")
  }

  

}

  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name}/>
      <label name="category">Category</label>
      <select className='bg-slate-200 p-1 my-1 ' name="category" id='category' onChange={handleOnChange} value={data.category}>
      <option value={"other"}>Select Category</option>
        <option value={"Fruits"}>Fruits</option>
        <option value={"Vegetable"}>Vegetable</option>
        <option value={"Icecream"}>Icecream</option>
        <option value={"Dosa"}>Dosa</option>
        <option value={"Pizza"}>Pizza</option>
        <option value={"Rice"}>Rice</option>
        <option value={"Cake"}>Cake</option>
        <option value={"Burger"}>Burger</option>
        <option value={"Paneer"}>Paneer</option>
                
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
      <input type={"text"} className='bg-slate-200 p-1 my-1'name="price" onChange={handleOnChange} value={data.price}/>

      <label htmlFor="description"  className='my-1'>Description</label>
      <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name="description" onChange={handleOnChange}value={data.description}></textarea>

      <button className='bg-red-500 hover:bg-red-600 tex-white text-lg font-m drop-shadow my-1 mx-1'>Save</button>


      </form>
    </div>
  )
}

export default NewProduct
