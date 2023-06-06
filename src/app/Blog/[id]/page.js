import React from 'react'

const fetchdata=async(id)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
     return res.json();
}

const Blogdetail=async({params})=>{
    const{id}=params;
  console.log("zzz",id)
    const data=await fetchdata(id)
    console.log("asas",data);
  return ( <>
    <div className='d-flex justify-content-center'>
    <div className="card w-25" >
    {/* <Image className="card-img-top" src="" alt="Card image" /> */}
    <div className="card-body text-center bg-success">
      <h4 className="card-title ">{data.id}</h4>
      <p className="card-text">{data.phone}</p>
      <p className="card-text">{data.username}</p>
      <p className="card-text">{data.address.city}</p>
      <p className="card-text">{data.zipcode}</p>
    </div>
  
</div>
</div>
</>
  )
}

export default Blogdetail;