import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Cards=({title,name,email,id})=>{
    return(<>

  <div className="card w-100" >
    {/* <Image className="card-img-top" src="" alt="Card image" /> */}
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text">{title}</p>
      <p className="card-text">{email}</p>
      <Link href={`/Blog/${id}`} className="btn btn-success">See more</Link>
    </div>
  
</div>

    </>)
}
const getdata= async()=>{
const res=await fetch("https://jsonplaceholder.typicode.com/users");
return res.json()
}

const Blog=async()=> {
    const product= await getdata();
    console.log("daat",product);

  return (
    <>
        <div className='container'>
            <div className='row'>
                <h1>Blog</h1>
                
            {product.slice(0,20).map((data)=>{
                  return(
                    <div className='col-lg-4 p-1 d-flex justify-content-center '>
                <Cards title={data.title} name={data.name} email={data.email} id={data.id}/>
           
           </div> )})}
            </div>
        </div>
    </>
  )
}

export default Blog