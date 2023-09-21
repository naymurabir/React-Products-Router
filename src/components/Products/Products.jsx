import { useLoaderData } from "react-router-dom";
import Product from "../product/product";


const Products = () => {

    const products = useLoaderData()
    // console.log(products);

    return (
        <div>
            {/* <h1 className="text-xl font-bold">Products Quantity: {products.products.length} </h1> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-6">
                {
                    products.products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;