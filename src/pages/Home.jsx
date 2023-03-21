import { useEffect, useState } from "react"

function Home () {
    const [posts, setPosts] = useState([])
    

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(async res => await res.json())
        .then(data => setPosts(data.products))
    }, [])
    
    return(
    <div className='container'>

       {posts.map((post, i) =>
       <div className="card" key={i}>
       <h1>{post.title}</h1> 
       <img src={post.images[0]}></img> 
       <h3>{post.description}</h3>
       <h2>Price; {post.price}</h2>
       <div className="discount"><p>Discount: {post.discountPercentage}%</p> </div>
       
       </div> 
    )}
    </div>
    )
       }
    export default Home