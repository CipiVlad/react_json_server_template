import axios from "axios"
import { useEffect, useState } from "react"


const Home = () => {
    const [product, setProducts] = useState([])

    async function getProducts() {
        const response = await axios.get('http://localhost:3000/products');
        const result = await response.data;
        console.log(result);
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            Home
            <header>
                <p>New Products</p>
            </header>
            <main>
                {product.map((e) => (
                    <div key={e.id}>
                        <img src={e.images[0]} alt={e.title} width={250} />
                        <p><em>{e.brand}</em></p>
                        <p>{e.title}</p>
                    </div>
                ))}
            </main>


        </>
    )
}

export default Home