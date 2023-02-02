import React, { useState } from 'react'

function NewPost({fetchData}) {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [imageUrl, setImage] = useState(null)
const createdFeed = {title,content,imageUrl}
    function handleSubmit(e){
        e.preventDefault()
        console.log(createdFeed)
console.log('works')
fetch('http://localhost:8000/posts',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(createdFeed)
   
})
 fetchData()
    }
    function handleUpload(e){
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
        console.log(imageUrl)
    }
    // const handleUpload= (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       setImage(reader.result);
    //     };
    //     reader.readAsDataURL(file)
    //   }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Title</label>
    <input type="text" className="form-control" id="" placeholder="Post Title...." value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
  <label htmlFor="formFile" className="form-label">Upload Picture</label>
  <input className="form-control" type="file" id="formFile" onChange={handleUpload}/>
</div>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={(e)=> setContent(e.target.value)}></textarea>
  </div>

  <button>Post</button>
        </form>
    </div>
  )
}

export default NewPost