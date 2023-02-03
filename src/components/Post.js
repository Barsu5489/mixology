import React, { useEffect, useState } from 'react'
import NewPost from './NewPost'

function Post() {
const [posts, setPost] = useState([])
const [showNew, setShowNew]= useState(false)

function fetchData(){
  fetch(' http://localhost:8000/posts')
  .then((res)=>res.json())
  .then((posts)=>{
    console.log(posts)
    setPost(posts)
  })
}
useEffect(()=>{
  fetchData()
},[])
console.log(posts)

const feeds = posts.map((post)=>{
  return(
    <div className='card m-4' style={{maxWidth: '540px'}} key ={post.id}  onClick={()=>console.log(post)}> 
    <div className="row g-0">
      <div className="col-md-4">
        <img src={post.imageUrl} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <p className="card-text"><small className="text-muted">{post.createdAt}</small></p>
        </div>
      </div>
    </div>
    </div>
  )
})
  return (
    <>
    <button onClick={()=>setShowNew(!showNew)}>{showNew?"See Posts": "Create Post"}</button>
    {showNew ?(
      <NewPost fetchData={fetchData}/>
    ):(
    <div className='container d-flex align-items-center  justify-content-center'>
    <div className="card mb-3">
     
    {feeds} 
    </div>
    
    
    </div>
    )}
    

</>
  )
}

export default Post