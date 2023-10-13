import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import '../App'

export default function Product() {
    
    const [id, setId]=useState('')
    const [title, setTitle]=useState('')
    const [brand, setBrand]=useState('')
    const [price, setPrice]=useState('')
    const [des, setDes]=useState('')
    const [img, setImg]=useState('')

  const productdata={
        productId:id,
        title:title,
        brand:brand,
        price:price,
        description:des,
        thumbnail:img
}
    const handleSubmit=(e)=>{
     e.preventDefault();
    axios.post('http://localhost:3002/products', productdata)
    .then((res)=>{
        alert("Success")
    })
}
    return(
    <>
     <div className="row justify-content center">

        <div className='col md-6 img-thumbnail'>
            <div className='text-center text-primary'>
                <hr/>
                <form method='post' onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label>Product Id</label>
            <input type="text" className='form-control' placeholder='Enter Product Id:' onChange={
                (e)=>{
                    setId(e.target.value)
                }
            }/>
        </div>
        <div className='mb-3'>
            <label>Product Title</label>
            <input type="text" className='form-control' placeholder='Enter Product Title:'onChange={
                (e)=>{
                    setTitle(e.target.value)
                }
            }/>
        </div>
        <div className='mb-3'>
            <label>Product Price</label>
            <input type="text" className='form-control' placeholder='Enter Product Price:'onChange={
                (e)=>{
                    setPrice(e.target.value)
                }
            
             } />
        </div>  
        <div className='mb-3'>
            <label>Product Brand</label>
            <input type="text" className='form-control' placeholder='Enter Product Brand:'onChange={
                (e)=>{
                    setBrand(e.target.value)
                }
            }/>
        </div>  
        <div className='mb-3'>
            <label>Description</label>
            <input type="text" className='form-control' placeholder='Enter Descript:'onChange={
                (e)=>{
                    setDes(e.target.value)
                }
            }/>
        </div>
        <div className='mb-3'>
            <label>Img</label>
            <input type="url" className='form-control' placeholder='Enter the Url:'onChange={
                (e)=>{
                    setImg(e.target.value)
                }
            }/>
        </div>
        <div className='mb-3'>
           <button className="btn bg-success">Submit</button>
        </div>
        </form>
        </div>
            </div>
        </div>
    </>
   )
        }