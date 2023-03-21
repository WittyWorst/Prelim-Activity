function ProductCard(post) {

    return (
        <a href={"/products/" + post.post.id}className="card" >
            <h1>{post.post.title}</h1>
            <img src={post.post.images[0]}></img>
            <h3>{post.post.description}</h3>
            <h2>Price;P {post.post.price}</h2>
            <div className="discount"><p>Discount: {post.post.discountPercentage}%</p> </div>

        </a>
    )
}
export default ProductCard    