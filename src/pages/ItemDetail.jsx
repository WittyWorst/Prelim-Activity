import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ItemDetail() {
    const params = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + params.id)
            .then(async (res) => await res.json())
            .then(i => setProduct(i))
    }, [])

    return (
        <div>
            {product == null ?
                <p>
                    loading....
                </p >
                :

                <div className="contain">
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <img src={product.images[0]} alt="" />
                </div>



            }
        </div>

    )
}
export default ItemDetail